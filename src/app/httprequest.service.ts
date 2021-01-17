import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTTPRequestService {

  constructor() { }
  getData(url:string, fields: string[] = ['all'] ): Promise<any>{
     return fetch(url)
      .then(response => response.json())
      .then(data =>{
        if(fields[0] !== 'all'){
          const newData: any[] = [];
          data.forEach((item) => {
            const newObj: any = {}
            for(let key in item){
              fields.forEach((field)=>{
                if(key === field){
                  newObj[key] = item[key];
                }
              })
            }
            newData.push(newObj);
          })
          return newData;
        } else if(fields[0] === 'all'){
          return data;
        }
       
      })
  }
}
