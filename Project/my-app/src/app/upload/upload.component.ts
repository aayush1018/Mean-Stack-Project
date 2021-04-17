import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(),
    email: new FormControl(),
  })
  title = 'fileUpload';
  images:any;

  show : any
  udata : any
  constructor(private service:UploadService,private http:HttpClient) { }

  ngOnInit() {
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.show = formData;
    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
 
  submit(){
    // console.log(this.form.value);
    this.service.postData(this.form.value).subscribe((response)=>{
      this.udata = response;
      if(!this.udata){
        alert("some this went wrong");
        window.location.href = "./upload";
      } else {
        alert(`${this.udata.title} article saved sucessfully`);
        // this.show = `${this.udata.file} article saved sucessfully`;
        window.location.href = "./upload";
      }
    });
  }

}
