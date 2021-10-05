import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  data = localStorage;

  constructor() {

  }

  ngOnInit() {
  }

  send() {

  }
}
