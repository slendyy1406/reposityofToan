import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-sua-sp',
  templateUrl: './sua-sp.component.html',
  styleUrls: ['./sua-sp.component.css']
})
export class SuaSpComponent implements OnInit {
  product: Product = {
    name:"",
    type:"",
    price:0,
    description:"",
    image:"",
    quantity: 1
  }

  constructor(private readonly afs: AngularFirestore, private readonly activatedRoute:ActivatedRoute, private readonly router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id'),
      switchMap((id) => {
        return this.afs.doc<Product>(`Products/${id}`).get()
      })
    ).subscribe((snapshot) => {
      this.product = {...snapshot.data(), id: snapshot.id} as Product
    })
  }

  handleEdit(form:NgForm){
    this.afs.doc(`Products/${this.product.id}`).update(form.value)

    this.router.navigate(['/admin'])
  }

}
