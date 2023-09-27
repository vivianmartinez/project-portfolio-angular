import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'trimDescription'
})
export class TrimDescriptionPipe implements PipeTransform{
  transform(value: any) {
    let search_space = value.indexOf(' ',100);
    return value.slice(0,search_space);
  }
}
