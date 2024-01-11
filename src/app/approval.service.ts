import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
  private myBehaviourSubject = new BehaviorSubject<any[]>(['default value']);
  formData:any[]=[];
  constructor() { }
  setForm(value:any[]){
    // console.log("It's approval.");
    this.formData=value
    this.myBehaviourSubject.next(value);
  }
  getForm():Observable<any[]>{
    // return this.formData
    return this.myBehaviourSubject.asObservable();
  }
}
