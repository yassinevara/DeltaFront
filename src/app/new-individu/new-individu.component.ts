import { Component, OnInit } from '@angular/core';
import {Individu} from "../../model/Individu";
import {IndividuService} from "../../service/individu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-individu',
  templateUrl: './new-individu.component.html',
  styleUrls: ['./new-individu.component.css']
})
export class NewIndividuComponent implements OnInit {
  individu :Individu;
  confirmationajout:number=1;
  constructor(public individuService:IndividuService,
              public router:Router) {
    this.individu =new Individu();
  }

  ngOnInit() {
  }

  onSaveIndividu(dataForm){
    this.individu=dataForm;
    this.confirmationajout=2;
  }

  enregistrerIndividu(){

    this.individuService.saveIndividu(this.individu)
      .subscribe(data=> {
          this.individu = data;
          //this.confirmationajout=1;
          this.router.navigate(['/listIndividu']);

          console.log(data);
        },error =>{
          console.log(JSON.parse(error._body).message); //message d'erreur retourner par le serveur
        }
      )
  }
}
