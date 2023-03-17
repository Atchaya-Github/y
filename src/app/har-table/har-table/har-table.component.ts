import { Component, ViewChild,ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { HARTableService } from 'src/app/HAR-service/har-table.service';

@Component({
  selector: 'app-har-table',
  templateUrl: './har-table.component.html',
  styleUrls: ['./har-table.component.css']
})
export class HARTableComponent{
  HAR_Data: any;
  options!: any[];
  first = 0;
  rows = 10;
  upload_name!:string;
  uploadedFiles: any;
  uploadedFile: any;
  @ViewChild('dt') dt: any;
  add_bot: boolean = false;
  upload:boolean = false;
  folder_name!:string;
  readme!:string;
  selected_option: any | string;
  @ViewChild('fileInput') fileInput!:FileUpload;
  content: any[]=[];
  file_name!: string;
  directory_name: any;
  view_content: boolean =false;
  contents: any;
  values!: any[];
  
  constructor(private Service: HARTableService, private router:Router,private cdr: ChangeDetectorRef, private message:MessageService) {
    this.options=[
      {name:"Create File"},
      {name:"Upload File"}
    ]
  } 
  ngOnInit() {
    this.Service.Get_HAR_data("HAR_REPOSITORY").subscribe({
     next:(res) =>{
      this.HAR_Data = res.directories;
      console.log(res);
      this.cdr.detectChanges();
     }
    });  
  }
  
  customSort(event: any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  addfile(){
    this.add_bot = true;
   }
  ChangePaxType(event:any){
    console.log(event);
    if(event.value.name == "Create File"){
      this.add_bot = true;
    };
    if(event.value.name == "Upload File"){
      this.upload = true;
    }
 }
   //Create file
   createfolder():void{
    console.log(this.directory_name,"public");
    this.Service.createFolder(this.directory_name,"public")
    .subscribe({
      next:(res) => {
       alert("Folder created successfully")
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

   onUpload(event: any) {
   
    this.uploadedFiles = event;
    console.log(this.uploadedFiles);
     console.log(this.uploadedFiles.currentFiles[0]);
      this.Service.uploadFile(this.uploadedFiles.currentFiles[0]).subscribe(data => {
        alert("sucess")
      }, error => {
      alert("error")
      },);
    }
  send(value:any){
  this.Service.setData(value);
  this.router.navigate(['/details'])
}
  }
