import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {
  @HostListener('dblclick') dblclickhandler(){
    alert('double click working');
  }
  constructor() { }

  ngOnInit(): void {
  }
  @Input() car:any;

 

}
