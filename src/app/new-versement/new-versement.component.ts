import { Component, OnInit } from '@angular/core';
import {IndividuService} from "../../service/individu.service";
import {VersementService} from "../../service/versement.service";
import {Individu} from "../../model/Individu";
import {Versement} from "../../model/versement";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-versement',
  templateUrl: './new-versement.component.html',
  styleUrls: ['./new-versement.component.css']
})
export class NewVersementComponent implements OnInit {

  individus : [Individu]=null;
  versement : Versement;
  individuSelectione : Individu;
  confirmationAjout : number =1;
  constructor(public versementService:VersementService,
              public individuService : IndividuService,
              public router:Router) {
  this.versement=new Versement();
  }


  ngOnInit() {
    this.chargerListIndividu();
  }


  chargerListIndividu(){

    if (this.individus==null){
      this.individuService.getIndividuByname(name)
        .subscribe(data=>{
            console.log("chargement list individu"+data)
            // this.ajouterVersement=1;

            this.individus = data;

          },error=>{
            console.log("erreur chargement list individu");

          }

        )

    }

  }

  onSaveVersement(dataForm){
    this.versement = dataForm;
    this.versement.individu=this.individuSelectione;
    this.confirmationAjout =2;

  }
  enregistrerVersement(){

    this.versementService.saveVersement(this.versement)
      .subscribe(data=>{
        console.log("enregistrement effectué");
        this.router.navigate(['/versement']);
      },error=>{
        console.log("error")
      })
  }
}
