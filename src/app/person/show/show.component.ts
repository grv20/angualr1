import { Component, OnInit } from '@angular/core';
import {SharedService} from  'src/app/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  PersonList:any=[];
  ModalTitle:string;
  ActivateAddEditComp:boolean=false;
  person:any;

  ngOnInit(): void {
    this.refreshList();
  }

  addClick(){
    this.person={
      personid:0,
      name:"",
      mobile:"",
      email:"",
      description:""
    }
    this.ModalTitle="Add Person";
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.person=item
    this.ModalTitle="Edit Person";
    this.ActivateAddEditComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deletePerson(item.personid).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshList();
  }

  refreshList(){
    this.service.getPersonList().subscribe(data=>{
      this.PersonList=data;

    }); //subscribe method makes sure to wait for response from api method and then give value, it is an async operation
  }

}
