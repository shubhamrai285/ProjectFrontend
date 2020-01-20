import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  private helper: HttpClient;
  //constructor(private helper: HttpClient) 
  constructor() 
  {
    console.log("Data Service Object Created");
  }

  Select()
  {
    return  this.helper.get("http://localhost:8080/emps");
  }

  SelectByNo(No)
  {
    return  this.helper.get("http://localhost:8080/emps/" + No );
  }
  

  Insert(userObj)
  {
  return  this.helper.post("http://localhost:8080/users",userObj);
  }

  Update(empObj)
  {
   return this.helper.put("http://localhost:9898/emps/" + empObj.No ,empObj);
  }

  Delete(No)
  {
    return  this.helper.delete("http://localhost:9898/emps/" + No );
  }

  //For UT Check
  Add(x, y)
  {
    return x+y;
  }

}




