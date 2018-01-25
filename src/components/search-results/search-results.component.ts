import { Component } from '@angular/core';
import { User} from '../../models/user.interface';
import { Input } from '@angular/core';

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-results',
  templateUrl: 'search-results.component.html'
})
export class SearchResultsComponent {

 @Input() user: User;
}
