import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerMode:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
registerToggel()
{
  return this.registerMode=true;
}
cancelRegisterMode(mode:boolean)
{
  this.registerMode=mode;
}
}
