import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinkViewResponse } from '../../models/link';
import { environment } from '../../../../environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-links-table',
  standalone: true,
  imports: [DatePipe],
  providers: [],
  templateUrl: './links-table.component.html',
  styleUrl: './links-table.component.scss'
})
export class LinksTableComponent {

  url: string = environment.url;
  @Input() links?: LinkViewResponse[];
  @Output() deleteLink: EventEmitter<string> = new EventEmitter();

}
