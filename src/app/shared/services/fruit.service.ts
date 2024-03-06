import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IFruit {
  id: number;
  quantity: number;
  src: string;
  title: string;
  value: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruitsSubject = new BehaviorSubject<IFruit[]>([]);
  fruits$ = this.fruitsSubject.asObservable();

  private filteredFruitsSubject = new BehaviorSubject<IFruit[]>([]);
  filteredFruits$ = this.filteredFruitsSubject.asObservable();

  private totalQuantitySubject = new BehaviorSubject<number>(0);
  totalQuantity$ = this.totalQuantitySubject.asObservable();

  private totalValueSubject = new BehaviorSubject<number>(0);
  totalValue$ = this.totalValueSubject.asObservable();

  constructor() { }

  setFruits(fruits: IFruit[]) {
    const newTotalQuantity = fruits.reduce((acc, fruit) => acc + fruit.quantity, 0);
    const newTotalValue = fruits.reduce((acc, fruit) => acc + fruit.value * fruit.quantity, 0);


    this.fruitsSubject.next(fruits);
    this.filteredFruitsSubject.next(fruits);
    this.totalQuantitySubject.next(newTotalQuantity);
    this.totalValueSubject.next(newTotalValue);
  }

  removeFruitById(fruitId: number) {
    this.fruitsSubject.next(this.fruitsSubject.value.map(fruit => fruit.id === fruitId ? { ...fruit, quantity: Math.max(0, fruit.quantity - 1) } : fruit));
    this.filteredFruitsSubject.next(this.filteredFruitsSubject.value.map(fruit => fruit.id === fruitId ? { ...fruit, quantity: Math.max(0, fruit.quantity - 1) } : fruit));

    const removedFruit = this.fruitsSubject.value.find(fruit => fruit.id === fruitId);
    if (removedFruit && removedFruit.quantity > 0) {
      const removedFruitValue = removedFruit.value;
      const newTotalQuantity = Math.max(0, this.totalQuantitySubject.value - 1);
      const newTotalValue = Math.max(0, this.totalValueSubject.value - removedFruitValue);
      this.totalQuantitySubject.next(newTotalQuantity);
      this.totalValueSubject.next(newTotalValue);
    }
  }

  addFruitById(fruitId: number) {
    this.fruitsSubject.next(this.fruitsSubject.value.map(fruit => fruit.id === fruitId ? { ...fruit, quantity: fruit.quantity + 1 } : fruit));
    this.filteredFruitsSubject.next(this.filteredFruitsSubject.value.map(fruit => fruit.id === fruitId ? { ...fruit, quantity: fruit.quantity + 1 } : fruit));

    const addedFruit = this.fruitsSubject.value.find(fruit => fruit.id === fruitId);
    if (addedFruit) {
      const addedFruitValue = addedFruit.value;
      const newTotalQuantity = this.totalQuantitySubject.value + 1;
      const newTotalValue = this.totalValueSubject.value + addedFruitValue;
      this.totalQuantitySubject.next(newTotalQuantity);
      this.totalValueSubject.next(newTotalValue);
    }
  }

  setSearchTerm(term: string) {
    const lowerCaseSearchTerm = term.toLowerCase();
    const newFilteredFruits = this.fruitsSubject.value.filter(fruit => fruit.title.toLowerCase().includes(lowerCaseSearchTerm));
    this.filteredFruitsSubject.next(newFilteredFruits);
  }

  clearFruitsData() {
    this.fruitsSubject.next([]);
    this.filteredFruitsSubject.next([]);
    this.totalQuantitySubject.next(0);
    this.totalValueSubject.next(0);
    localStorage.removeItem('storage-frutas');
  }
}
