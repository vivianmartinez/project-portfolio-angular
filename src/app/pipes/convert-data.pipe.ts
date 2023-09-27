import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertData'
})
export class ConvertDataPipe implements PipeTransform{
    transform(value: any): any {
        return JSON.parse(JSON.stringify(value));
    }
}
