import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  list: any = [];
  transform(filterArr: any[], filterText: string, filterProp: string[]) {
    filterArr.forEach(selectedObject => {
      filterProp.forEach(selectedProp => {
        if (selectedObject[selectedProp] && selectedObject[selectedProp].toString().toLowerCase().includes(filterText.toLowerCase())) {
          if (!this.list.includes(selectedObject)) {
            this.list.push(selectedObject)
          }
        }
      })
    })
    return this.list
  }
}
