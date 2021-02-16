import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any , input: any) {
        if (input) {
            return value.filter( val => {
                const searchVal = val.merchant.name.toLowerCase().includes(input.toLowerCase()) || val.transaction.type.toLowerCase().includes(input.toLowerCase());
                return searchVal;
            });
        } else {
            return value;
        }
    }
}
