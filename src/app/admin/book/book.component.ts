
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../model/book.model";
import {BookService} from "../../services/book.service";

declare var $ : any;
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  //Parenttan data alınacak
  @Input() book:Book = new Book();
  errorMessage: string = "";

  //Parent a data gönderilecek
  @Output() save = new EventEmitter<any>();
  constructor(private bookService:BookService) {

  }

  saveBook(){
    this.bookService.saveBook(this.book).subscribe(data => {
      this.save.emit(data);
      ($('#bookModal') as any).modal('hide');

    },error => {
      console.error(error.message);
    });
  }




  showBookModal(){

    ($('#bookModal') as any).modal('show');
  }

}
