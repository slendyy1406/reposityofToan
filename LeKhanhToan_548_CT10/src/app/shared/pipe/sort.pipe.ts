import { Pipe, PipeTransform } from '@angular/core'
import { SortType, Product } from '../types/product.interface'
import { orderBy } from 'lodash'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: Product[] | null, sortType: SortType): Product[] | null {
    if (!value) return null
    return orderBy(value, sortType)
  }
}
