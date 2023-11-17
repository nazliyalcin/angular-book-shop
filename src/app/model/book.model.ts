import {Role} from "./role.enum";

export class Book{
  id: number | undefined;
  title: string = "";
  author: string = "";
  description: string = "";
  price : number = 0.0;
  createTime: Date = new Date();

  constructor(id? : number,title: string = "",price:number = 0) {
    this.id = id;
    this.title = title;
    this.price=price;
  }



}
