import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LinkCreateRequest, LinkViewResponse } from '../models/link';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    private _http: HttpClient
  ) { }

  getOwnLinks(){
    return this._http.get<LinkViewResponse[]>(`${environment.apiUrl}/Link/GetOwnList`);
  }

  createLink(obj: LinkCreateRequest){
    return this._http.post<string>(`${environment.apiUrl}/Link`, obj, {responseType: 'text' as any});
  }

  deleteLink(id: string)
  {
    return this._http.delete(`${environment.apiUrl}/Link/${id}`);
  }

  redirectToOriginalLink(shortLink: string)
  {
    return this._http.get<string>(`${environment.apiUrl}/Link/${shortLink}`, {responseType: 'text' as any});
  }
}
