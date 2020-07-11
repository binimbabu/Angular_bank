import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() page;
  @Output() clicked = new EventEmitter<number>();

  constructor(private dataSerice: DataService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.dataSerice.logout()
    .subscribe((data:any)=>{
      this.router.navigate(['']);
    });
  }
  profileClick(){
    this.clicked.emit(1);
  }
}