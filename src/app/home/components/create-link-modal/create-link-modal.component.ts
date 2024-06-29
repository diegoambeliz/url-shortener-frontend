import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogRemoteControl } from '@ng-vibe/dialog';
import { LinkCreateRequest } from '../../models/link';
import { LinkService } from '../../services/link.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-create-link-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-link-modal.component.html',
  styleUrl: './create-link-modal.component.scss',
})
export class CreateLinkModalComponent implements OnInit {
  url: string = environment.url;
  originalLink?: string;
  shortLink?: string;
  dialogRemoteControl: DialogRemoteControl = inject(DialogRemoteControl);
  created: boolean = false;

  constructor(private _link: LinkService) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.originalLink = this.dialogRemoteControl.payload;
  }

  closeDialog() {
    this.dialogRemoteControl.closeDialog(this.created);
  }

  createLink(f: NgForm) {
    if (!this.originalLink) return;

    let obj: LinkCreateRequest = {
      link: this.originalLink,
      description: f.value.description,
    };

    this._link.createLink(obj).subscribe({
      next: (res) => {
        this.shortLink = res;
        this.created = true;
      },
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.url + this.shortLink!);
  }
}
