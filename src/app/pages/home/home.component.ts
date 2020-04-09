import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomeComponent implements OnInit {
  title = 'scout-angular-training-app';
  
  constructor() { }

  ngOnInit(): void {
  }

}
