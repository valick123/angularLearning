import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setData(data: any, dirName: string): void{
    localStorage.setItem(dirName, JSON.stringify(data));
  }
  getData(dirName: string): any {
    return JSON.parse(localStorage.getItem(dirName));
  }
}
