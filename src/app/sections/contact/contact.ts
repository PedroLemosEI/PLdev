import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = 'pedrolemos1999@gmail.com';
  copied = false;

  copyEmail(): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(this.email)
        .then(() => this.showCopied())
        .catch(() => this.fallbackCopy());
    } else {
      this.fallbackCopy();
    }
  }

  private fallbackCopy(): void {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = this.email;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showCopied();
    } catch (err) {
      console.error('Could not copy email', err);
    }
  }

  private showCopied(): void {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
