import { Component } from '@angular/core';
import { LinkService } from '../../../home/services/link.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirect-link',
  standalone: true,
  imports: [],
  templateUrl: './redirect-link.component.html',
  styleUrl: './redirect-link.component.scss',
})
export class RedirectLinkComponent {
  constructor(
    private _link: LinkService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.actRoute.params.subscribe({
      next: (res) => {
        if (!res['shortLink']) {
          this.router.navigate(['/invalid-link']);
          return;
        }

        this.redirectToOriginalLink(res['shortLink'])
      },
    });
  }

  redirectToOriginalLink(shortLink: string): void {
    this._link.redirectToOriginalLink(shortLink).subscribe({
      next: (res) => {
        window.location.href = res;
      },
      error: () => {
        this.router.navigate(['/invalid-link']);
      }
    });
  }
}
