import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page="home"
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  checkBalance(){
    this.dataService.getBalance()
    .subscribe((data:any)=>{
      alert(`Your balance is INR ${data.balance}`)
    })
  }
  deposit(amount, mpin){
    this.dataService.deposit(amount, mpin)
    .subscribe((data:any)=>{
      alert(data.message);
    });
  }
  withdraw(amount, mpin){
    this.dataService.withdraw(amount, mpin)
    .subscribe((data:any)=>{
      alert(data.message);
    });
  }
}
