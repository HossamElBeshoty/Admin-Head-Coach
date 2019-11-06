import { Injectable } from '@angular/core';
import {ICategory} from '../Models/i-category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category = {} as ICategory;
  constructor() { }
}
