import {Component, OnInit} from '@angular/core';
import {Purchase} from "../../model/purchase.model";
import {PurchaseService} from "../../services/purchase.service";
import {BookService} from "../../services/book.service";
import {Book} from "../../model/book.model";
import {PurchaseItemModel} from "../../model/purchase-item.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  purchasedItemList:Array<PurchaseItemModel> = [];

  constructor(private purchaseServ: PurchaseService) {
  }
  ngOnInit(): void {
    this.purchaseServ.getAllPurchases().subscribe(data=>{
      this.purchasedItemList = data;

    });

  }



}
