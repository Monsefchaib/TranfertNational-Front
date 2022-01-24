import { Component, OnInit } from '@angular/core';
import { Transfert } from 'src/app/model/Transfert.model';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-afficher-transferts',
  templateUrl: './afficher-transferts.component.html',
  styleUrls: ['./afficher-transferts.component.css']
})
export class AfficherTransfertsComponent implements OnInit {
  constructor(private clientService:ClientServiceService) { }

  ngOnInit() {
    let resp=this.clientService.getTransferts();
    resp.subscribe((data :Transfert[])=>{
      console.log(data);
      this.listOfData=data;
      this.listOfDisplayData=data;
    })
  }
  searchValue = '';
  visible = false;
  listOfData = [];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item) => item.age.indexOf(this.searchValue) !== -1);
  }
}
