import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/contact-user';
import { ThemeService } from 'src/app/services/theme.service';
import { formSubmitService } from 'src/app/services/formsubmit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{
  public user: User;
  public response_mail: string;
  public artmail: string;
  public dark: boolean = false;
  private subscription: Subscription = new Subscription();
  private subscriptionMail: Subscription = new Subscription();

  constructor(private _themeService: ThemeService, private _mailService: formSubmitService){
    this.user     =  new User('','','','');
    this.artmail  = 'art-mail.png';
    this.response_mail = 'process';
  }
  ngOnInit(): void {
    this.subscription = this._themeService.themeDark$.subscribe((res:any)=>this.dark = res);
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
    this.subscriptionMail.unsubscribe();
  }
  onSubmit(form:any){
    const mail_contact = {
      'name':    this.user.name,
      'email':   this.user.email,
      'subject': this.user.subject,
      'message': this.user.message,
    };

    this.subscriptionMail = this._mailService.postMail(mail_contact).subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.response_mail = 'success';
      }

      if(this.response_mail == 'process') this.response_mail = 'failed';
    });

  }
}

