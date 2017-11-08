import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {VersementService} from "../../service/versement.service";
import {Versement} from "../../model/versement";
import {Individu} from "../../model/Individu";
import {IndividuService} from "../../service/individu.service";

@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.css'],
})
export class VersementComponent implements OnInit {
  ajouterVersement:number=1;
  versement : Versement;
  individus : [Individu]=null;
  individuSelectione : Individu;
  constructor(public versementService:VersementService,
  public individuService : IndividuService) {
    this.individuSelectione = new Individu();
  }

  ngOnInit() {
    this.chargerListIndividu();
  }

  onSaveVersement(dataForm){
  this.versementService.saveVersement(dataForm)
    .subscribe(data=>{
      console.log("versement ok"+data)
    },error=>{
      console.log("erreur versement"+error)
      }
    )
  }

  chargerListIndividu(){

    if (this.individus!==null){
      console.log("no appel ")
    }else {
      this.individuService.getIndividuByname(name)
        .subscribe(data=>{
            console.log("chargement list individu"+data)
            // this.ajouterVersement=1;
            this.individus = data;
          },error=>{
            console.log("erreur chargement list individu")
          }

        )
    }

  }


}
