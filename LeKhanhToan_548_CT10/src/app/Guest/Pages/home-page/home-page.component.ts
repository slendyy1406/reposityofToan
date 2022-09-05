import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/service/cart.service';
import { Product, SortType } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products :Product[] = [];
  sortType :SortType = 'type';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  constructor( private readonly afs:AngularFirestore, private readonly crt: CartService) { }

  ngOnInit(): void {
    this.afs.collection<Product>('Products').get().subscribe((snapshot) => {
      this.products = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}) as Product)
    })
  }
  public handleAddProd(prod: Product){
    this.crt.addProd(prod)
  }

}
