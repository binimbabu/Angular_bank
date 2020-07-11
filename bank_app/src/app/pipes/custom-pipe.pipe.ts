import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args[0]);
    if(args[0]=="custom1"){
      return "this is custom1 pipe value";
    }
    return "custom pipe value";
  }

}
