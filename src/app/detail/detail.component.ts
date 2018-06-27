import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
pShow = false;
clickLog = [];
  constructor() { }

  ngOnInit() {
  }

  onDisplayClick() {
    this.clickLog.push(new Date(Date.now()));
    console.log(this.clickLog);
    this.pShow = !this.pShow;
  }

  getLogColor() {
    return this.clickLog.length > 4 ? 'blue' : 'white';
  }


}
