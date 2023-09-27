import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "replaceCharacter"
})
export class ReplaceCharacterPipe implements PipeTransform{
  transform(value: any, char:any, replace_char: any) {
    return value.replace(char,replace_char);
  }
}
