import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-id',
  templateUrl: './enter-id.page.html',
  styleUrls: ['./enter-id.page.scss'],
})
export class EnterIdPage implements OnInit {

  id: string;

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
    if (localStorage.getItem('id')) {
      this.id=localStorage.getItem('id');
    }
  }

  next() {
    localStorage.setItem('id', this.id);
    this.navigation.navigateForward(['/enter-heart-rate']);
  }
}
