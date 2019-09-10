import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Pipe({
  name: 'filterProject',
  pure: false
})
export class FilterProjectPipe implements PipeTransform {

  transform(items: Array<Project>, conditions: { [field: string]: any }): Array<Project> {
    if (typeof items.filter !== 'undefined') {
      return items.filter(item => {
        for (const field in conditions) {
          const fieldText = item[field].toLowerCase(),
            conditionText = conditions[field].toLowerCase();

          console.log(fieldText, 'cond', conditionText);

          if (conditionText !== '' && fieldText.indexOf(conditionText) === -1) {
            return false;
          }
        }
        return true;
      });
    }
  }

}
