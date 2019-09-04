import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class SqlLiteService {
  keys: any = [];
  constructor( private sqlite: SQLite) { }

  createDB(){
    this.sqlite.create({
      name: 'udhayamkey.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table notifi(key TEXT))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
    
      })
      .catch(e => console.log(e));
  }

  getValues(){
    this.sqlite.create({
      name: 'udhayamkey.db',
      location: 'default'
    }).then((db: SQLiteObject) => {     
      db.executeSql('SELECT * FROM notifi', [])
      .then(res => {
        this.keys = [];
        for(var i=0; i<res.rows.length; i++) {            
          this.keys.push({key:res.rows.item(i).key});        
        }
      })
      .catch(e => console.log(e));
    });

    
    
    
  }
  insertKey(key){
    this.sqlite.create({
      name: 'udhayamkey.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO notifi (key) VALUES(?)',[key]).then(res =>{
        console.log(res);
        console.log("inserted" + key);
      }).catch(e => console.log(e));
  }).catch(e => console.log(e));

}

deleteData(key) {
  this.sqlite.create({
    name: 'udhayamkey.db',
    location: 'default'
  }).then((db: SQLiteObject) => {
    db.executeSql('DELETE FROM notifi WHERE key=?', [key])
    .then(res => {
      console.log(res);     
    })
    .catch(e => console.log(e));
  }).catch(e => console.log(e));
}
}
