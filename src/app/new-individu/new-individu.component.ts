import { Component, OnInit } from '@angular/core';
import {Individu} from "../../model/Individu";
import {IndividuService} from "../../service/individu.service";

@Component({
  selector: 'app-new-individu',
  templateUrl: './new-individu.component.html',
  styleUrls: ['./new-individu.component.css']
})
export class NewIndividuComponent implements OnInit {
  individu :Individu;
  mode:number=1;
  constructor(public individuService:IndividuService) {
    this.individu =new Individu();
  }

  ngOnInit() {
  }
/*
  saveIndividu (){
    this.individuService.saveIndividu(this.individu)
      .subscribe(data=> {
        this.individu = data;
        this.mode=2;

        console.log(data);
        },error =>{
      console.log(error);
    }
      )
  }*/
  onSaveIndividu(dataForm){
    this.individuService.saveIndividu(dataForm)
      .subscribe(data=> {
          this.individu = data;
          this.mode=2;

          console.log(data);
        },error =>{
          console.log(JSON.parse(error._body).message); //message d'erreur retourner par le serveur
        }
      )
  }
}
