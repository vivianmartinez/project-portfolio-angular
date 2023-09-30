import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, lastValueFrom, throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class formSubmitService{
  private url: string;

  constructor(private _http: HttpClient){
    this.url = 'https://formsubmit.co/ajax/ba5304feb1c11ef56a546192a528a568'; //url API
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('¡Ups! Ha ocurrido un error. Inténtelo más tarde ó contacte con soporte.'));
  }

  async postMail(data:any): Promise<any>
  {
    const endpoint = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type':'application/json','Accept':'application/json'});
    const postData$: Observable<any> = this._http.post(this.url,endpoint,{headers:headers}).pipe(catchError(this.handleError));
    return await lastValueFrom(postData$);
  }
}
