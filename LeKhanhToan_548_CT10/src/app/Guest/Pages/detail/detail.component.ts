import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { pluck, map, switchMap } from 'rxjs';
import { CartService } from 'src/app/shared/service/cart.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product !:Product
  constructor(private readonly crt: CartService,private readonly route:ActivatedRoute, private readonly afs: AngularFirestore) { }
  ngOnInit(): void {
    this.route.params
      .pipe(pluck('id'), map(id => id as string),switchMap((id) => {
        return this.afs.doc(`Products/${id}`).get()
      }))
      .subscribe((doc) => {
        this.product = doc.data() as Product
      })
  }
  public handleAddProd(prod: Product){
    this.crt.addProd(prod)
  }
}
