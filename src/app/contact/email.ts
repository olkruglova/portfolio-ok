import { Injectable } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '0240f3b6-b877-4480-abb4-79ec23e0e42d';

@Injectable({ providedIn: 'root' })
export class EmailService {
  async send(message: ContactMessage): Promise<'SUCCESS' | 'FAILED'> {
    try {
      const formData = new FormData();
      formData.set('access_key', WEB3FORMS_ACCESS_KEY);
      formData.set('subject', `New message from ${message.name} via portfolio`);
      formData.set('name', message.name);
      formData.set('email', message.email);
      formData.set('message', message.message);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      return result.success ? 'SUCCESS' : 'FAILED';
    } catch {
      return 'FAILED';
    }
  }
}
