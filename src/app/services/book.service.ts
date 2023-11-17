import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/api/book';
@Injectable({
  providedIn: 'root'
})
export class BookService extends RequestBaseService{

  constructor(authServ : AuthenticationService , http: HttpClient) {
    super(authServ,http);
  }

  saveBook(book:Book): Observable<any>{
   console.log("nazli ---->"+this.getHeaders.get('Authorization'));
    return this.http.post(`${API_URL}/save-book`,book,{headers:this.getHeaders,responseType:'text'});

  }

  deleteBook(book: Book): Observable<any>{
    return this.http.delete(`${API_URL}/delete-book/${book.id}`,{headers:this.getHeaders});
  }

  getAllBooks(): Observable<any>{
    return this.http.get(`${API_URL}/get-allbooks`);
  }

}
