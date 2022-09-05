import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from 'src/app/shared/service/cart.service';
import { UserService } from 'src/app/shared/service/user.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = []
  total: number = 0
  
  @Input() open!: boolean
  @Output() close = new EventEmitter()

  constructor(private readonly crt: CartService, private readonly us: UserService, private readonly afs: AngularFirestore) { }

  ngOnInit(): void {
    this.crt.cart$.subscribe((cart) => {
      this.cart = cart
      console.log(cart.values)
    })
    this.crt.total$.subscribe((total) => this.total = total)
    
  }
  public handleDelete(id: string){
    this.crt.delProd(id)
  }

  public handlePurchases(){
    this.afs.collection('purchases').add({
      products: this.cart,
      total : this.total,
      user: this.us.user$.value

    })
    this.crt.resetCart()
  }
}
