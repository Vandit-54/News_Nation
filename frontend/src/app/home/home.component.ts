import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(this.titleFunction, 2000);
  }

  titleFunction() {
    let topics = ['Sports', 'Entertainment', 'Science', 'Technology', 'General', 'Health'];
    const tag = <HTMLElement>document.getElementById('innerPara');
    console.log({ tag })
    tag.innerText = `${topics[Math.floor(Math.random() * 6)]}`;
  }

}
