import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  page="history";
  accountDetails:any = [];
  constructor(private dataService: DataService, private router:Router) {
    dataService.getHistory()
    .subscribe((data:any)=>{
      console.log(data)
      this.accountDetails=data;
    });
  }

  ngOnInit(): void {
    
  }

  edit(id){
    this.router.navigate(['/edit-history',id]);
  }
}
