import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class formSubmitService{
  public url: string;

  constructor(private _http: HttpClient){
    this.url = 'https://formsubmit.co/ajax/ba5304feb1c11ef56a546192a528a568';
  }

  postMail(data:any): Observable<any>
  {
    const endpoint = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type':'application/json','Accept':'application/json'});
    return this._http.post(this.url,endpoint,{headers:headers});
  }
}
