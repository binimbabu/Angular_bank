import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {
  title="Title"
  constructor() {
    console.log("constructor");
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAFterViewChecked")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }

}
