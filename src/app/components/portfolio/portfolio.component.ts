import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef,QueryList } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit,AfterViewInit{
  public title: string;
  public projects: Array<any>;
  @ViewChildren('imgproject', {read: ElementRef}) imgChildren: QueryList<ElementRef> | any;

  constructor(private _projectService: ProjectService){
    this.title    = 'Proyectos';
    this.projects = [];
  }

  ngOnInit():void{
    this.projects = this._projectService.getProjects();
  }

  ngAfterViewInit(): void {
    this.effectImageProject();
  }

  effectImageProject():void{
    this.imgChildren.toArray().forEach((item:any)=>{
      item.nativeElement.addEventListener('mouseover',()=>{
        item.nativeElement.querySelector('.mask-image').classList.add('bright')
      });

      item.nativeElement.addEventListener('mouseout',()=>{
        item.nativeElement.querySelector('.mask-image').classList.remove('bright');
      });
    });
  }

}
