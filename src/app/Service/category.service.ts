import {Injectable} from '@angular/core';
import {ICategory} from '../Models/i-category';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category = {} as ICategory;

  constructor(private dataService: DataService) {
  }

  getCategories(groupId) {
    return this.dataService.get('api/Category/GetByGroupId/' + groupId);
  }

  postCategory() {
    return this.dataService.add('api/Category', this.category);
  }

  deleteCategory(id) {
    return this.dataService.delete('api/Category/', id);
  }
}
