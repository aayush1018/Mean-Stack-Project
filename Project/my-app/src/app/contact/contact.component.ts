import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    city : new FormControl(),
    email: new FormControl(),
    suggest: new FormControl()
  })

  cdata:any

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    
  }

  submit(){
    // console.log(this.form.value);
    this.service.postData(this.form.value).subscribe((response)=>{
      this.cdata = response;
      if(!this.cdata){
        alert("some this went wrong");
        window.location.href = "./contact";
      } else {
        alert(`${this.cdata.fname} Your response saved sucessfully`);
        window.location.href = "./contact";
      }
    });
  }

}
