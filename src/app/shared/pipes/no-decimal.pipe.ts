import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDecimal'
})
export class NoDecimalPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      return value.toString().replace('.00', '');
    } else {
      return '';
    }
  }

}
