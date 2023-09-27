export class Project{
  constructor(
    public id: number,
    public name_project: string,
    public description: string,
    public big_description: string,
    public specifications: Array<string>,
    public image_project: string,
    public url_project: string,
    public tools_project: Array<Object>,
    public logo: string
  ){}
}
