
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  private themeDark = new BehaviorSubject<boolean>(false);
  themeDark$ = this.themeDark.asObservable();

  constructor(){}

  modeDarkOn():void{
    this.themeDark.next(true);
  }

  modeDarkOff():void{
    this.themeDark.next(false);
  }
}

