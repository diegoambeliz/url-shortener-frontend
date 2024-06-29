import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { RouterModule } from '@angular/router';
import { LinksTableComponent } from '../../components/links-table/links-table.component';
import { AuthVariablesService } from '../../../auth/auth-variables.service';
import { AuthService } from '../../../auth/auth.service';
import { LinkService } from '../../services/link.service';
import { LinkViewResponse } from '../../models/link';
import { FormsModule, NgForm } from '@angular/forms';
import { AppearanceAnimation, DialogRemoteControl, DisappearanceAnimation } from '@ng-vibe/dialog';
import { CreateLinkModalComponent } from '../../components/create-link-modal/create-link-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNavbarComponent, RouterModule, LinksTableComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  links?: LinkViewResponse[];
  
  private sub: Subscription = new Subscription();

  constructor(
    private _auth: AuthService,
    private _authV: AuthVariablesService,
    private _link: LinkService
  ) {}

  ngOnInit(): void {
    this.getOwnLinks();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getOwnLinks() {
    this._link.getOwnLinks().subscribe({
      next: (res) => {
        this.links = res;
      },
    });
  }

  createLink(f: NgForm) {
    var dialog: DialogRemoteControl = new DialogRemoteControl(
      CreateLinkModalComponent
    );
    // this._link.createLink()

    dialog.options = {
      width: '600px',
      height: '300px',
      showOverlay: true,
      animationIn: AppearanceAnimation.ZOOM_IN,
      animationOut: DisappearanceAnimation.ZOOM_OUT,
    };

    ;

    this.sub.add(dialog.openDialog(f.value.shortLink).subscribe((resp) => {
      if(resp)
        this.getOwnLinks();
    }));
  }

  deleteLink(id: string)
  {
    this._link.deleteLink(id).subscribe({
      next: (res) => {
        this.getOwnLinks();
      }
    })
  }
}
