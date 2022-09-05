import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/service/cart.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-qlysanpham',
  templateUrl: './qlysanpham.component.html',
  styleUrls: ['./qlysanpham.component.css']
})
export class QlysanphamComponent implements OnInit {
  products: Product[] = []

  constructor(private readonly afs:AngularFirestore, private readonly crt: CartService) { }

  ngOnInit(): void {
    this.afs.collection<Product>('Products').valueChanges({idField: 'id'}).subscribe((snapshot) => {
      this.products = snapshot
    })
  }

  handleDelete(id: string) {
    this.afs.doc(`Products/${id}`).delete()
  }
}
