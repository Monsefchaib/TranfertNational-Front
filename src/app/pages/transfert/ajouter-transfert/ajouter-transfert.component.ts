import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Client } from 'src/app/model/Client.model';
import { Transfert } from 'src/app/model/Transfert.model';
import { AjouterBeneficiaireComponent } from '../../ajouter-beneficiaire/ajouter-beneficiaire.component';
import { SearchClientComponent } from '../../chercherClient/search-client/search-client.component';
@Component({
  selector: 'app-ajouter-transfert',
  templateUrl: './ajouter-transfert.component.html',
  styleUrls: ['./ajouter-transfert.component.css']
})
export class AjouterTransfertComponent implements OnInit {
  tplModalButtonLoading = false;
  disabled = false;
  isVisible = false;
  validateForm!: FormGroup;
  checked = true;
  inputValue?: string;
  filteredOptions: string[] = [];
  selectedClient:Client = new Client();
  transfert:Transfert = new Transfert();
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  constructor(private fb: FormBuilder,private drawerService: NzDrawerService,private viewContainerRef: ViewContainerRef,private modal: NzModalService) { 
    this.filteredOptions = this.options;

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      client:[{value:this.selectedClient.nom,disabled:true}, [Validators.required],],
      type: [null, [Validators.required]],
      montant: [null, [Validators.required,this.checkMontant]],
      frais: [null, [Validators.required]],
      otp:[null, [Validators.required]]
    });
  }
  checkMontant = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (parseFloat(control.value) > 2000) {
      return { confirm: true, error: true };
    }
    return {};
  };
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.transfert=this.validateForm.value;
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
 
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  openCreateBenefComponent(): void {
    this.drawerService.create<AjouterBeneficiaireComponent, { value: number | null }, string>({
    nzTitle: 'Ajouter un bénéficiaire',
    nzContent: AjouterBeneficiaireComponent,
    nzMaskClosable:false,
    nzWidth : "50%",
    nzContentParams: {
      value : null
    }
  });
}
showModal(): void {
  this.isVisible = true;
}

handleOk(): void {
  console.log('Button ok clicked!');
  this.isVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
}
createComponentModal(): void {
  const modal = this.modal.create({
    nzTitle: 'Ajouter le client',
    nzContent: SearchClientComponent,
    nzViewContainerRef: this.viewContainerRef,
    nzComponentParams: {
      title: 'title in component',
      subtitle: 'component sub title，will be changed after 2 sec'
    },
    nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
  });
  const instance = modal.getContentComponent();
  modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
  // Return a result when closed
  modal.afterClose.subscribe((result) =>{ 
    this.selectedClient=result['result'],
    this.validateForm.patchValue({
      client:this.selectedClient.nom + " " + this.selectedClient.prenom
    })
  }
  );

  // delay until modal instance created
  setTimeout(() => {
    instance.subtitle = 'sub title is changed';
  }, 2000);
}
}
