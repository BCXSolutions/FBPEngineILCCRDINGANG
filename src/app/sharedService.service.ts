import { Injectable } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription'; 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();

  clickEventsubscription: Subscription;

  constructor() { }

  sendClickEvent(object?: any) {
    this.subject.next(object);
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
