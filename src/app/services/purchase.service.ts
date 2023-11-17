import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RequestBaseService} from "./request-base.service";
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {Purchase} from "../model/purchase.model";
import {Observable} from "rxjs";
const API_URL= 'http://localhost:8080/api/purchase'
@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor(authServ: AuthenticationService,http:HttpClient) {
    super(authServ,http);
  }

  savePurchase(purchase:Purchase):Observable<any>{
    return  this.http.post(API_URL,purchase,{headers:this.getHeaders})
  }

  getAllPurchases():Observable<any>{
    return  this.http.get(API_URL,{headers:this.getHeaders})
  }
}
