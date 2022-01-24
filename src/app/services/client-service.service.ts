import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../model/Agent.model';
import { ApiResponse } from '../model/Api.response';
import { Beneficiaire } from '../model/Beneficiare.model';
import { CarteDeCredit } from '../model/CarteDeCredit.model';
import { Client } from '../model/Client.model';
import { Emetteur } from '../model/Emetteur.model';
import { GichetABillet } from '../model/GichetABillet.model';
import { PointDeVente } from '../model/PointDeVente.model';
import { Transfert } from '../model/Transfert.model';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }

  public getClients(){
    return this.http.get("http://localhost:1945/get_clients");
  }
  public getComptes(){
    return this.http.get("http://localhost:1945/get_Comptes");
  }
  public getBeneficiaires(){
    return this.http.get("http://localhost:1945/get_Beneficiaires");
  }
  public getAgents(){
    return this.http.get("http://localhost:1945/get_Agents");
  }
  public getEmetteurs(){
    return this.http.get("http://localhost:1945/get_Emetteurs");
  }
  public getGichetsABillets(){
    return this.http.get("http://localhost:1945/get_GichetABillets");
  }
  public getPointDeVentes(){
    return this.http.get("http://localhost:1945/get_PointDeVentes");
  }
  public getCartes(){
    return this.http.get("http://localhost:1945/get_CarteDeCredits");
  }
  public getWallets(){
    return this.http.get("http://localhost:1945/get_Wallets");
  }
  public getTransferts(){
    return this.http.get("http://localhost:1945/get_Transferts");
  }
  public getPiecesIdentite(){
    return this.http.get("http://localhost:1945/get_PieceIdentites");
  }
  //------------------------
  public getClient(id:number){
    return this.http.get("http://localhost:1945/get_client/"+id);
  }
  //-----------------------
  public addClient(client:Client){
    return this.http.post("http://localhost:1945/add_client/",client);
  }

  public addAgent(client:Agent){
    return this.http.post("http://localhost:1945/add_Agent/",client);
  }
  public addBeneficiaire(client:Beneficiaire){
    return this.http.post("http://localhost:1945/add_Beneficiaire/",client);
  }
  public addEmetteur(client:Emetteur){
    return this.http.post("http://localhost:1945/add_Emetteur/",client);
  }
  public addCarte(carte:CarteDeCredit){
    return this.http.post("http://localhost:1945/add_CarteDeCredit/",carte);
  }
  public addGichet(client:GichetABillet){
    return this.http.post("http://localhost:1945/add_GichetABillet/",client);
  }
  public addPoint(client:PointDeVente){
    return this.http.post("http://localhost:1945/add_PointDeVente/",client);
  }
  public addTransfert(client:Transfert){
    return this.http.post("http://localhost:1945/add_Transfert/",client);
  }

}
