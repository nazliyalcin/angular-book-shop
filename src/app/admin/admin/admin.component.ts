import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";
import {BookComponent} from "../book/book.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

   bookList:Array<Book> = [];
   selectedBook: Book = new Book();
   varBoolean = false;
   errorMessage : string ="";

  @ViewChild(BookComponent) child: BookComponent | undefined;
  constructor(private bookService: BookService) {
  }
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.bookList = data;
    })
  }

  createBookRequest(){
    this.varBoolean = false;
    this.selectedBook = new Book();
    this.child?.showBookModal();
  }

  editRequestBook(item : Book){
    this.varBoolean=true;
    this.selectedBook = Object.assign({},item);
    this.child?.showBookModal();

  }

  saveBookWatcher(book:Book){
    console.log("this.selectedBook.id--->" + this.selectedBook.id);
    // @ts-ignore
    let itemIndex = this.bookList.findIndex((item) => {
      console.log("item.id-->" + item.id)
      console.log("book.id-->" + this.selectedBook.id)
      return item.id === this.selectedBook.id
    })
    if(this.varBoolean === false)
    {
      // @ts-ignore
      this.bookList.push(JSON.parse(book));
    }else{
      // @ts-ignore
      this.bookList[itemIndex] = JSON.parse(book);
    }

    console.log(this.bookList);
  }

  deleteBook(item:Book , ind: number) {
    this.bookService.deleteBook(item).subscribe(data => {
      this.bookList.splice(ind,1);
    },err => {
      this.errorMessage = err.message;
      console.log(err);
    })
  }
}
