import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BotSeriveService } from './BotService/bot-serive.service';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bot_Repo_Management';
  items!: MenuItem[];
  activeItem!: MenuItem;
  create_repo: boolean = false;
  name!: string;
  visibility!: string;
  value1: string = "on";
  selected_option: any | string;
  stateOptions: { label: string; value: string; }[];
  cities: { name: string; }[];
  @ViewChild('customContent') customContent!: TemplateRef<any>;
  constructor(private Service:BotSeriveService,private router:Router){
    this.items = [
      {label: 'New Repository',icon: 'pi pi-plus', command: event => { this.Create_repo();}},
      // {
      //   label: 'Tab 3',
      //   template: this.customContent
      // },
      {label: 'BOT Repository',  routerLink: ['BOT']},
      {label: 'HAR Repository',   routerLink: ['HAR']}
  ];
    this.stateOptions = [{label: 'Public', value: 'public'},{label: 'Private', value: 'private'}];
    this.cities = [
      {name: 'AWS'},
      {name: "Azure"},
      {name: "Google Cloud"}
  ];
  }
  Create_repo(){
    this.create_repo= true;
   }

  visibility_fn(event:any){
    this.visibility = event.value;
    }
  createfolder(): void { 
    console.log(this.visibility)
    this.visibility_fn(event);
    console.log(this.name,this.visibility);
    console.log(this.visibility)
    this.Service.createFolder(this.name, "public")
    .subscribe(res => console.log('Folder Created Successfully')
    , error => console.log(error) ); 
  }
 
}
