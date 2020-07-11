import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger('openClose',[
      state('open', style({
        height:'400px',
        backgroundColor:'yellow'
      })),
      state('closed', style({
        height:'200px',
        backgroundColor:'blue'
      })),
      transition('open => closed',[
        animate('1s')
      ]),
      transition('closed => open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
