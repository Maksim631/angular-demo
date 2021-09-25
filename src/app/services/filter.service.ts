import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filter = new Subject<string>();

  public setFilter(value: string): void {
    this.filter.next(value);
  }
  
  public getFilter(): Observable<string> {
    return this.filter.asObservable();
  }
}
