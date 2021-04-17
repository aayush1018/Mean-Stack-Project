import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  
  postData(data:any){
    let url = "http://localhost:8083/article";
    return this.http.post(url, data);
  }
}
