import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/models/contact-user';
import { ThemeService } from 'src/app/services/theme.service';
import { formSubmitService } from 'src/app/services/formsubmit.service';
import { AfterViewInit } from '@angular/core';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy, AfterViewInit{
  public user: User;
  public response_mail: unknown;
  public artmail: string;
  public dark: boolean = false;
  private subscription: Subscription = new Subscription();
  @ViewChild('loader',{read:ElementRef}) loader:any;

  constructor(private _themeService: ThemeService, private _mailService: formSubmitService){
    this.user          =  new User('','','','');
    this.artmail       = 'art-mail.png';
    this.response_mail = 'send';
  }
  ngOnInit(): void {
    this.subscription = this._themeService.themeDark$.subscribe((res:any)=>this.dark = res);
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.loader.nativeElement.style.setProperty('display','none');
  }
  onSubmit(form:any){
    const mail_data = {
      'name':    this.user.name,
      'email':   this.user.email,
      'subject': this.user.subject,
      'message': this.user.message,
    };
    //enviar correo
    this.sendData(mail_data);
    //Mostrar mensaje de espera (carga)
    this.loader.nativeElement.style.setProperty('display','flex');
  }

  sendData(mail_data:any){
    this._mailService.postMail(mail_data)
    .then(response =>{
      if(response.success) this.response_mail = 'success';
    })
    .catch(error=>{
      this.response_mail = error;
    })
    .finally(()=>{
      this.loader.nativeElement.style.setProperty('display','none');
    });
  }
}
