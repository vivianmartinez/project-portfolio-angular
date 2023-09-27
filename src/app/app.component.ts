import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { networks } from './models/data-networks';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title: string;
  public logo: string;
  public footer_text: string;
  public social_networks: Array<any>;
  public year_design: Date;
  public text_welcome: Array<string>;
  @ViewChild('tooltiptext', {read: ElementRef}) tooltip:any;

  constructor(private themeService: ThemeService){
    this.title           = 'Vivian Martínez';
    this.logo            = 'logo-vm.png';
    this.footer_text     = 'Vivian Martínez - All rights reserved';
    this.social_networks = networks;
    this.year_design     = new Date;
    this.text_welcome    = ['Bienvenido','programar','es','divertido'];
  }

  ngOnInit(): void {}

  changeTheme():void{
    if(document.getElementById('theme')?.classList.contains('dark--mode')){
      this.themeService.modeDarkOn();
      this.tooltip.nativeElement.textContent = 'Tema claro';
    }else{
      this.themeService.modeDarkOff();
      this.tooltip.nativeElement.textContent = 'Tema oscuro';
    }
  }
}
