import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
  


@Injectable({
  providedIn: 'root'
})

export class ConStringService {
  constructor(private firestore: AngularFirestore) {         
    this.getDoc = this.firestore.collection('bor',ref=>ref.where('isActive','==','0')).valueChanges();
  }
  public getDoc: Observable<any[]>;

  update_bor(recordID,record){
    this.firestore.doc('bor/' + recordID).update(record);
  }

  getValues(key){
    return this.firestore.collection('bor/').doc(key).snapshotChanges()
  }

  getKeys(){   
    return this.getDoc;
  }
 
}
