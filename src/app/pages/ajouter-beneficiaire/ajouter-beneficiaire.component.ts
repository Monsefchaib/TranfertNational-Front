import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Beneficiaire } from 'src/app/model/Beneficiare.model';

@Component({
  selector: 'app-ajouter-beneficiaire',
  templateUrl: './ajouter-beneficiaire.component.html',
  styleUrls: ['./ajouter-beneficiaire.component.css']
})
export class AjouterBeneficiaireComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private drawerRef: NzDrawerRef<string>) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required,]],
      phoneNumberPrefix: ['+212']
    });
  }
  destroyModal(){
    let beneficiaire = new Beneficiaire();
    const benefValue=this.validateForm?.value;
    beneficiaire.nom=benefValue['nom'];
    beneficiaire.prenom=benefValue['prenom'];
    beneficiaire.telephone=benefValue['phoneNumber']
    this.drawerRef.close(beneficiaire);
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
