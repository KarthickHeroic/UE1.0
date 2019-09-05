import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
  


@Injectable({
  providedIn: 'root'
})

export class ConStringService {
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todo$: Observable<Todo[]>;
  constructor(
    private firestore: AngularFirestore
  ) {

    // this.todoCollectionRef = this.firestore.collection<Todo>('todos');
    // this.todo$ = this.todoCollectionRef.snapshotChanges().pipe(map(actions => {
    //   return actions.map(action => {
    //     const data = action.payload.doc.data() as Todo;
    //     const id = action.payload.doc.id;
    //     return { id, ...data };
    //   });
    // }));
   }
 

  update_bor(recordID,record){
    this.firestore.doc('bor/' + recordID).update(record);
  }

  getValues(key){
    return this.firestore.collection('bor/').doc(key).snapshotChanges()
  }
 
}

export interface Todo {
  id?: string;
  description: string;
  completed: boolean;
}