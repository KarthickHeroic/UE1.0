import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class ConStringService {
  constructor(
    private firestore: AngularFirestore
  ) { }
 

  update_bor(recordID,record){
    this.firestore.doc('bor/' + recordID).update(record);
  }
 
}
