import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book.model";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {BookService} from "../../services/book.service";
import {PurchaseService} from "../../services/purchase.service";
import {Purchase} from "../../model/purchase.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bookList: Array<Book> = [];
  faBook = faBook;
  errorMessage: string = "";
  infoMessage: string = "";

  constructor(private authServ:AuthenticationService, private bookServ:BookService , private purchaseServ:PurchaseService) {

  }

  ngOnInit(): void {
    this.bookServ.getAllBooks().subscribe(data => {
      this.bookList = data;
    })
  }

  purchase(item:Book){
    if(!this.authServ.currentUserValue?.id){
      this.errorMessage = "You should sign in first!";
      return;
    }

    const purchase = new Purchase(this.authServ.currentUserValue.id,item.id,item.price);
    this.purchaseServ.savePurchase(purchase).subscribe(data=>{
      this.infoMessage = "Purchase is completed";
    },err=>{
      this.errorMessage = err.message;
      console.log(err);
    })
  }
}
