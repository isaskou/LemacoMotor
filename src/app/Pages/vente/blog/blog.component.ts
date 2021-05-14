import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any = []
  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        title: "Austin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus nisl quam, vel porta neque luctus a. Donec eget purus sit amet diam gravida bibendum in quis ipsum. Vivamus id magna sit amet ante ornare aliquam eu at odio. Duis facilisis ornare lorem sit amet eleifend. Aliquam placerat euismod accumsan. ",
        img: "assets/téléchargement.jfif",
        link: "/austin"
      },
      {
        title:"test",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus nisl quam, vel porta neque luctus a. Donec eget purus sit amet diam gravida bibendum in quis ipsum. Vivamus id magna sit amet ante ornare aliquam eu at odio. Duis facilisis ornare lorem sit amet eleifend. Aliquam placerat euismod accumsan. ",
        img: "assets/téléchargement.jfif",
        link: "/austin"
      }

    ]
  }

}
