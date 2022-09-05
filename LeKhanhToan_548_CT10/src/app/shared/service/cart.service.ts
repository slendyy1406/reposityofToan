import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$ = new BehaviorSubject<Product[]>([])
  total$ = new BehaviorSubject<number>(0)
  constructor() { }
  addProd(prod:Product){
    const newCart:Product[] = this.cart$.value
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === prod.id) {
        ++newCart[i].quantity
        this.cart$.next(newCart)
        this.countTotal()
        return
      }
    }
    this.cart$.next([...this.cart$.value, prod])
    console.log(this.cart$.value)
    this.countTotal()
  }
  delProd(id: string){
    this.cart$.next(this.cart$.value.filter((product) => product.id !== id))
    this.countTotal()
  }
  countTotal(){
    let sum = 0
    this.cart$.value.forEach((product) => {
      sum += product.price * (product.quantity || 1)
    })
    console.log(sum)
    this.total$.next(sum)
  }

  resetCart(){
    this.cart$.next([])
    this.total$.next(0)
  }
}
