import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { FormBuilder, FormGroup, Validators, AbstractControl } from'@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formgroup: FormGroup;
  name: AbstractControl;
  surname: AbstractControl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formbuilder: FormBuilder) {

      this.formgroup = formbuilder.group({
        name:['', Validators.required],
        surname:['', Validators.required]
      });

      this.name = this.formgroup.controls['name'];
      this.surname = this.formgroup.controls['surname'];

  }
   onSubmit(data){
  this.navCtrl.push(MessagePage, data);
  
  }


}