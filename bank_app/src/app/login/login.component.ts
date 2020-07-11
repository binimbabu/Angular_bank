import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    accno : ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    mpin : ['', [Validators.required, Validators.minLength(3)]]
  })

  error:string="";
  
  constructor(private ds:DataService, 
    private fb:FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  onAccountNumberChange(e){
    //this.accno=e.target.value;
  }

  onMPinChange(e){
    //this.mpin=e.target.value;
  }

  login(){
    this.ds.login(this.loginForm.value.accno,this.loginForm.value.mpin)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home']);
    },err=>{
      console.log(err);
      alert("Invalid credentials");
    })
  }
  getError(controlName){
    return this.loginForm.get(controlName).errors;
  }
}