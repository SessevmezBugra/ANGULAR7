import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Product } from '../product/product';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators'

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path = 'http://localhost:3000/products';
  getProducts(categoryId):Observable<Product[]>{ //subscribe i gorene kadar islem devam ediyor data donmu olmuyor aslinda burada
    let newPath = 'http://localhost:3000/products';
    if(categoryId){
      newPath += '?categoryId='+categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data=>{
        console.log(data);
      }),
      catchError(this.handleError)
    );
  }
  addProduct(product:Product):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
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
