import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.scss']
})
export class BlogCardsComponent implements OnInit {
  @Input() title!:string;
  @Input() content!:string;
  @Input() img!:string;
  @Input() link!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
