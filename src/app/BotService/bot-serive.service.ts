import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bottype } from '../BotTypes/bottype';

@Injectable({
  providedIn: 'root'
})
export class BotSeriveService {
  baseUrl:any= "http://localhost:54850/api/File_upload";

  constructor(private http:HttpClient) { }

  GetBotDeatil():Observable<Bottype>{
    return this.http.get<Bottype>("http://dev.mobito.co.in/api/on-board-manager//botdetail/list/1787")
  }
  createFolder( directoryName:string,accessLevel:string) { 
      const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
  // return this.http.post<any>(`${this.baseUrl}`,body,{headers:headers});
   
    return this.http.post<any>(`${this.baseUrl}/CreateFolder?directoryName=${directoryName}&accessLevel=${accessLevel}`,{headers:headers})
  }
 createFile(folderName:string,fileName:string,fileContent:string){
  const headers = new HttpHeaders({
    'Content-Type':'application/json'
  });
  return this.http.post<any>(`${this.baseUrl}/CreateFile?folderName=${folderName}&fileName=${fileName}&fileContent=${fileContent}`,{headers:headers})
 }

}
