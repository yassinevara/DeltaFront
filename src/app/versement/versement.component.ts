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

  versements : [Versement]=null;
  individus : [Individu]=null;
  individuSelectione : Individu;
  constructor(public versementService:VersementService,
              public individuService : IndividuService) {
    this.individuSelectione = new Individu();
  }

  ngOnInit() {
    // this.chargerListIndividu();
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

  getVersementOfIndividu(){
    console.log("id individu "+this.individuSelectione.idIndividu);
    this.versementService.getVersementOfIndividu(this.individuSelectione.idIndividu)
      .subscribe(data=> {

          this.versements=data;
        },error=>{
          console.log("erreur chargement list versement");

        }

      )
  }


}
