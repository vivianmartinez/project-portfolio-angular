import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit{
  public title: string;
  public project: Project;

  constructor(private _projetService: ProjectService, private _router: Router, private _routeActivate:ActivatedRoute){
    this.project = new Project(0,'','','',[],'','',[],'');
    this.title   = 'Especificaciones del Proyecto';
  }

  ngOnInit(): void {
      this._routeActivate.params.subscribe((response:any)=>{
        if(response.id){
          this.project = this.getSingleProject(parseInt(response.id));
          if(! this.project) this.redirectPortfolio();
        }
      });
  }
  getSingleProject(id:number){
    let findProject = this._projetService.getOneProject(id);
    if(findProject.length > 0) return findProject[0];
    return false;
  }

  redirectPortfolio():void{
    this._router.navigate(['/portfolio']);
  }

}
