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
  individus : null;
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor(public versementService:VersementService,
  public individuService : IndividuService) { }

  ngOnInit() {
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

  chargerListIndividu(name:string){
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
