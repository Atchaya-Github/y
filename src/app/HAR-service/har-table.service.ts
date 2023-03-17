import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HARTableService {
  constructor(private http:HttpClient) { }
  private data: any;
  
  setData(data: any) {
    this.data = data;
  }
  getData() {
    return this.data;
  }

  baseUrl:any= "http://localhost:34610/api/File_Upload";
  createFolder(folderName:string,fileContent:string){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<any>(`${this.baseUrl}/CreateFolder?directoryName=${folderName}&accessLevel=public`,{headers:headers})
   }
  
   uploadFile(file: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.baseUrl}/uploadfile/HAR_REPOSITORY`,file,{headers});
  }

   Get_HAR_data(folderName:string){
    return this.http.get<any>(`${this.baseUrl}/files/HAR_REPOSITORY`);
  }
  Get_Folder_data(HARfolderName:string){
    return this.http.get<any>(`${this.baseUrl}/files?folderName=${HARfolderName}`)
  }
}
