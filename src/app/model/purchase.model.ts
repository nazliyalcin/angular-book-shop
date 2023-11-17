import {Role} from "./role.enum";

export class Purchase{
  userId: number | undefined;
  bookId: number | undefined;
  price: number | undefined = 0.0;
  purchaseDate: Date = new Date();


  constructor(userId? : number,bookId?: number,price?:number) {
    this.userId = userId;
    this.bookId = bookId;
    this.price=price;
  }


}
