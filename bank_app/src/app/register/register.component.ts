import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordDirective } from '../validators/confirm-password.directive';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName:['', [Validators.required]],
    lastName:['', Validators.required],
    phone:['', [Validators.required, Validators.pattern('[0-9]*')]],
    email:['', [Validators.required, Validators.email]],
    mpin:['', Validators.required],
    confirmMpin:['', Validators.required],
    accno:['', [Validators.required, Validators.minLength(5)]],
  }, { validators: ConfirmPasswordDirective })

  constructor(private fb: FormBuilder, 
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  getError(controlName){
    return this.registerForm.get(controlName).errors;
  }
  getControl(controlName){
    return this.registerForm.get(controlName);
  }
  register(){
    this.dataService.register(this.registerForm.value)
    .subscribe(data =>{
      console.log(data);
      alert("Registration successful");
      this.router.navigate(['']);
    }, err=>{
      console.log(err);
      alert(err.error.message);
    })
  }
}