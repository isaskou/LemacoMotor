import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.scss']
})
export class DiapoComponent implements OnInit {

  images:any=[];
  constructor() { }

  ngOnInit(): void {
    this.images=[
      "assets/austin1.jfif",
      "assets/austin2.jfif",
      "assets/austin3.jfif",
    ]
    
  }

}
