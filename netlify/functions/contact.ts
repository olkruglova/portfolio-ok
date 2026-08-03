import type { Config } from '@netlify/functions';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// TODO: replace with the exact origin the portfolio is served from once it's on GitHub Pages
// (e.g. https://olkruglova.github.io), and again if a custom domain is added later.
const ALLOWED_ORIGIN = 'https://olkruglova.github.io';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
  });
}

export default async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (req.method !== 'POST') {
    return jsonResponse({ success: false }, 405);
  }

  const accessKey = process.env['WEB3FORMS_ACCESS_KEY'];
  if (!accessKey) {
    return jsonResponse({ success: false }, 500);
  }

  let body: ContactRequestBody;
  try {
    body = (await req.json()) as ContactRequestBody;
  } catch {
    return jsonResponse({ success: false }, 400);
  }

  const formData = new FormData();
  formData.set('access_key', accessKey);
  formData.set('subject', `New message from ${body.name} via portfolio`);
  formData.set('name', body.name);
  formData.set('email', body.email);
  formData.set('message', body.message);

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: formData });
    const result = await response.json();
    return jsonResponse({ success: Boolean(result.success) }, 200);
  } catch {
    return jsonResponse({ success: false }, 502);
  }
};

export const config: Config = {
  path: '/api/contact',
};
