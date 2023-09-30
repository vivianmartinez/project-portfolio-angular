import { Component, OnInit, OnDestroy } from '@angular/core';
import { about } from 'src/app/models/data-about';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit, OnDestroy{
  public title: string;
  public subtitle: string;
  public presentation: string;
  public creativeMe: string;
  public dark: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private _themeService: ThemeService){
    this.title        = about.title;
    this.subtitle     = about.subtitle;
    this.presentation = about.presentation;
    this.creativeMe   = about.creative_me;
  }

  ngOnInit(): void {
    this.subscription = this._themeService.themeDark$.subscribe((response:any)=>this.dark = response);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
