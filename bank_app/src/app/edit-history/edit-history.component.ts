import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css']
})
export class EditHistoryComponent implements OnInit {

  editForm = this.fb.group({
    amount:[],
    typeOfAction:[],
    date:[],
  });
  accountDetails:any={};
  id:string;
  constructor(private dataService: DataService, private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router:Router) {
    this.accountDetails = dataService.getAccountDetails();
    this.activatedRoute.params.subscribe(data=>{
      this.id = data.id;
      dataService.getHistory()
      .subscribe((h:any)=>{
        const history = h.find(d=>d._id==data.id);
        this.editForm.setValue({
          amount:history.amount,
          typeOfAction:history.typeOfAction,
          date:formatDate(history.date,'yyyy-MM-dd','en')
        })
      });
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dataService.saveHistory(this.id, this.editForm.value)
    .subscribe((data:any)=>{
      this.router.navigate(['history']);
    })
  }
}