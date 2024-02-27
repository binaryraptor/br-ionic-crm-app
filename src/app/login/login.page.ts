import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   @ViewChild('form') form!: NgForm;

  submissionType: 'login' | 'join' = 'login';
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
  login() {

   
  }

}
