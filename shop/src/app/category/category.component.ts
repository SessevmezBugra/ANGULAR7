import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private http:CategoryService) { }

  title = 'Category List';
  categories: Category[];
  ngOnInit() {
    this.http.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }
}
