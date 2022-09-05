import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-them-sp',
  templateUrl: './them-sp.component.html',
  styleUrls: ['./them-sp.component.css']
})
export class ThemSPComponent implements OnInit {
  product: Product = {
    name:"",
    type:"",
    price:0,
    description:"",
    image:"",
    quantity: 1
  }

  constructor(private readonly afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  handleSubmit(form:NgForm){
    this.afs.collection('Products').add({...form.value, quantity: 1})
    form.reset()
  }
}
