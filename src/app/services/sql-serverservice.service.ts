import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SqlServerserviceService {
  constructor(public http: HttpClient, public storage: Storage, ) {
  }

  getCash(SType) {
    let url = "http://49.207.180.49/GenIt/GenData.asmx/GetCash";
    let Params = new HttpParams();
    Params = Params.append('SType', SType);
    return this.http.get(url, { params: Params, responseType: 'text' })
  }

  getItemSales(fromDate, toDate, site) {
    let url = "http://49.207.180.49/GenIT/GenData.asmx/GetIS";
    let Params = new HttpParams();
    Params = Params.append('FDate', fromDate);
    Params = Params.append('TDate', toDate);
    Params = Params.append('SiteN', site);
    return this.http.get(url, { params: Params, responseType: 'text' });
  }

  getShiftPos(fromDate, Shift, site) {
    let url = "http://49.207.180.49/GenIT/GenData.asmx/GetSP";
    let Params = new HttpParams();
    Params = Params.append('FDate', fromDate);
    Params = Params.append('Shift', Shift);
    Params = Params.append('SiteN', site);
    return this.http.get(url, { params: Params, responseType: 'text' })
  }

  getSalesPos(fromDate, toDate, tonnage, crusher) {
    let url = "http://49.207.180.49/GenIT/GenData.asmx/LoadSP";
    let Params = new HttpParams();
    Params = Params.append('FDate', fromDate);
    Params = Params.append('TDate', toDate);
    Params = Params.append('VType', tonnage);
    Params = Params.append('VSource', crusher);
    return this.http.get(url, { params: Params, responseType: 'text' });
  }

  getFuel() {

    let url = "http://49.207.180.49/GenIt/GenData.asmx/LoadFStock";
    return this.http.get(url, { responseType: 'text', withCredentials: true });
  }

  getVehicle() {
    let url = "http://49.207.180.49/GenIt/GenData.asmx/LoadVD";
    return this.http.get(url, { responseType: 'text' });
  }

  storageSet() {
    this.storage.set('Status', 'logout');
  }

}
