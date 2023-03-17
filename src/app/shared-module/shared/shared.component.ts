import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  stateOptions!: any[];
  options!:any[];
  cities!:any;
  constructor() {
  this.stateOptions = [{label: 'Public', value: 'public'},{label: 'Private', value: 'private'}];
    this.cities = [
      {name: 'AWS'},
      {name: "Azure"},
      {name: "Google Cloud"}
  ];
  this.options=[
    {name:"Create File"},
    {name:"Upload File"}
  ]
}
}
