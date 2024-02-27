import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('form') form!: NgForm;
  submissionType: 'submit' | 'join' = 'submit';

  constructor() { }

  ngOnInit() {
  }
  
  onReset() {

  }
  loginPage() {
    
  }

}

