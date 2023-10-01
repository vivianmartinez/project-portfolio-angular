import { Injectable } from '@angular/core';
import { data } from '../models/data-projects';

@Injectable()
export class ProjectService {
  public projects: Array<any>;
  public project: any;

  constructor() {
    this.projects = data;
  }

  getProjects(): Array<any> {
    return this.projects;
  }

  getOneProject(id:number):any {
    return this.project = this.projects.filter(item=> item.id == id);
  }
}
