import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators'
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path = 'http://localhost:3000/categories';

  getCategories():Observable<Category[]>{ //subscribe i gorene kadar islem devam ediyor data donmu olmuyor aslinda burada
    return this.http.get<Category[]>(this.path).pipe(
      tap(data=>{
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir hata olustu '+err.error.message;
    }else{
      errorMessage = 'Sistemsel bir hata';
    }
    console.log(errorMessage);
    return throwError(errorMessage) ;
  }
}
