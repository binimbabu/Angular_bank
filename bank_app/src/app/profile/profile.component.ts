import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  clickCount=0;
  accountDetails:any={};
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAccountDetails()
    .subscribe((data:any)=>{
      console.log(data);
      this.accountDetails.name = data.name;
      this.accountDetails.mpin = data.mpin;
      this.accountDetails.balance = data.balance;
    });
  }
  
  onHeaderClick(e){
    console.log(e);
    this.clickCount++;
  }

  onSave(name, mpin){
    this.accountDetails.name = name;
    this.accountDetails.mpin = mpin;
    this.dataService.saveAccountDetails(this.accountDetails)
    .subscribe((data:any)=>{
      alert(data.message);
    });
  }
}