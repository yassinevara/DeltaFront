import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {IndividuService} from "../../service/individu.service";
import {LazyLoadEvent} from "primeng/components/common/lazyloadevent";

@Component({
  selector: 'app-individu',
  templateUrl: './individu.component.html',
  styleUrls: ['./individu.component.css']
})
export class IndividuComponent implements OnInit {
  pageIndividu:any=null;
  currentPage:number=0;
  motCle:string ="";
  page:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public individuService:IndividuService) { }

  ngOnInit() {
    this.chercher();
  }

  getIndividus(){
    this.individuService.getIndividus(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        console.log("pageee"+data.totalPages);
        this.pageIndividu = data.content;
        this.page = data.totalPages;
        this.pages=new Array(data.totalPages);

      //  this.pageIndividu = data.slice(0,this.size);
      },error=> {
        console.log(error);

      })
  }

  chercher(){
    this.getIndividus();
  }
  loadCarsLazy(event: LazyLoadEvent) {


    //imitate db connection over a network
    setTimeout(() => {
      if(this.pageIndividu) {
        this.getIndividus();
      }
    }, 250);
  }

  gotoPage(i:number){
    this.currentPage = i;
    this.getIndividus();
  }
}
