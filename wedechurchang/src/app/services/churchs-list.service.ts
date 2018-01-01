import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class ChurchsListService {

  public ChurchEmmiter = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) {
  }

  public getChurch() {
    let url = 'http://localhost:8000/api/churchs';
    this.httpClient.get(url).subscribe(
      data => this.ChurchEmmiter.emit(data)
    );
  }
  public deleteChurch(id: number) {
    const url = 'http://localhost:8000/api/churchs/'+id+'/delete';
    return this.httpClient.post(url,{},
      { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest' }) });
  }

  public validateChurch(id: number){
    const url = 'http://localhost:8000/api/churchs/validate/'+id;
    return this.httpClient.post(url,{},
      { headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest' }) });
  }
}
