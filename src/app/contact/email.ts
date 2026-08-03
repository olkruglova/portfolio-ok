import { Injectable } from "@angular/core";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

// TODO: replace with the deployed Netlify site's URL, e.g. https://<site-name>.netlify.app/api/contact
const CONTACT_ENDPOINT = "https://<site-name>.netlify.app/api/contact";

@Injectable({ providedIn: "root" })
export class EmailService {
  async send(message: ContactMessage): Promise<"SUCCESS" | "FAILED"> {
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });

      const result = await response.json();
      return result.success ? "SUCCESS" : "FAILED";
    } catch {
      return "FAILED";
    }
  }
}
