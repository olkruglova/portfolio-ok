import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactModalState } from './contact-modal-state';
import { EmailService } from './email';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-modal',
  imports: [FormsModule],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss',
})
export class ContactModal {
  protected readonly modalState = inject(ContactModalState);
  private readonly emailService = inject(EmailService);

  protected name = '';
  protected email = '';
  protected message = '';
  protected readonly status = signal<SubmitStatus>('idle');

  protected close(): void {
    this.modalState.close();
    this.status.set('idle');
  }

  protected async submit(): Promise<void> {
    this.status.set('sending');

    const result = await this.emailService.send({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    this.status.set(result === 'SUCCESS' ? 'success' : 'error');

    if (result === 'SUCCESS') {
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
