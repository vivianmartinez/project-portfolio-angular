import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/contact-user';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{
  public user: User;
  public artmail: string;
  public dark: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService){
    this.user     =  new User('','','','');
    this.artmail  = 'art-mail.png';
  }
  ngOnInit(): void {
    this.subscription = this.themeService.themeDark$.subscribe((res:any)=>this.dark = res);
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  onSubmit(form:any){
    console.log(this.user);
  }
}
