import { Injectable } from '@angular/core';
import {from} from 'rxjs';
import {map, toArray} from 'rxjs/operators';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PicsServiceService {

  constructor() { }
  getPics(url: string) {
     fetch(url)
      .then(response => response.json())
      .then(pics => {
        from(pics)
        .pipe(
          map((pic: any,index) => {
            let newObj ={};
            for(let key in pic){
              if(key === 'download_url'){
                newObj[key] = pic[key];
              }
              newObj['id'] = index + 1;
            }
            return newObj;
          }),
          toArray()
        )
        .subscribe(
          (pic) => {
            new StorageService().setData(pic, 'pictures')
          }
        )
      })
  }
}
