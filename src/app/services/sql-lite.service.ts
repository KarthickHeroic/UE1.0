import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class SqlLiteService {
  keys: any = [];
  public database: SQLiteObject;
  constructor( private sqlite: SQLite) { }

  createDB(){
    this.sqlite.create({
      name: 'udhayamkey.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database = db;  
        db.executeSql('create table if not exists notifi (key TEXT)',[])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  getValues(){

  return  this.database.executeSql("SELECT * FROM notifi ",[])
  }
  insertKey(key){
    this.database.executeSql('INSERT INTO notifi (key) VALUES(?)', [key]);
}

deleteData(key) {
  this.database.executeSql('DELETE FROM notifi where key=?',[key]) 
}
}
