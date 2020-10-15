import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() person:any;
  personid:string;
  name:string;
  mobile:string;
  email:string;
  description:string;

  ngOnInit(): void {
    this.personid=this.person.personid;
    this.name=this.person.name;
    this.mobile=this.person.mobile;
    this.email=this.person.email;
    this.description=this.person.description;
  }

  addPerson(){
    var val = {personid:this.personid,
                name:this.name,
                mobile:this.mobile,
                email:this.email,
                description:this.description};
    this.service.addPerson(val).subscribe(res=>{
      alert(res.toString());
    })

  }

  updatePerson(){
    var val = {personid:this.personid,
                name:this.name,
                mobile:this.mobile,
                email:this.email,
                description:this.description};
    this.service.updatePerson(val).subscribe(res=>{
      alert(res.toString());
    })

  }

}
