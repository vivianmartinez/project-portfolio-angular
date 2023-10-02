import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  constructor(private theme: ElementRef) {}

  @HostListener("click",["$event"])
  onClick(e:any): void{
    const rootStyles = document.documentElement.style;
    rootStyles.setProperty('--body-bg-color',e.target.dataset.mode);
    rootStyles.setProperty('--section-bg-color',e.target.dataset.bgsection);
    rootStyles.setProperty('--text-color-mode',e.target.dataset.text);
    rootStyles.setProperty('--filter-creative',e.target.dataset.art);
    rootStyles.setProperty('--color-bg-mail',e.target.dataset.bgcolor);

    this.theme.nativeElement.classList.toggle('dark--mode');

    if (this.theme.nativeElement.classList.contains('dark--mode')){
      this.theme.nativeElement.setAttribute('data-mode','#FFFFFF');
      this.theme.nativeElement.setAttribute('data-text','#000000');
      this.theme.nativeElement.setAttribute('data-bgsection','#ffffffd1');
      this.theme.nativeElement.setAttribute('data-bgcolor','#e6c101');
      this.theme.nativeElement.style.opacity = '0';
      setTimeout(()=>{
        this.theme.nativeElement.src = 'assets/icons/icon-mode-brigth.png';
        this.theme.nativeElement.style.opacity = '1';
      },500)
    }else{
      this.theme.nativeElement.setAttribute('data-mode','#000000');
      this.theme.nativeElement.setAttribute('data-text','#FFFFFF');
      this.theme.nativeElement.setAttribute('data-bgsection','inherit');
      this.theme.nativeElement.setAttribute('data-bgcolor','inherit');
      this.theme.nativeElement.style.opacity = '0';
      setTimeout(()=>{
        this.theme.nativeElement.src = 'assets/icons/icon-mode-dark.png';
        this.theme.nativeElement.style.opacity = '1';
      },500)
    }
  }
}
