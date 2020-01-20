import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate
{
  constructor(private router:Router,private helper:HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  } 

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="2")
    {
      // some logic to check if person has logged in
      return true;
    }
 
    else{
      return false;
    }
  }


  IsAdminLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
 
    else{
      return false;
    }
  }



  IsProviderLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="3")
    {
      // some logic to check if person has logged in
      return true;
    }
 
    else{
      return false;
    }
  }






  CheckCredentialsWithDB(credentials)
  {
    //Call Some  Service using Post Method
    //to check credentials with DB 

  //  return  this.helper.get("http://localhost:8080/users/login/" +credentials.UserName+"/"+credentials.Password );
    if(credentials.UserName == "user" && credentials.Password == "123")
    {
      window.sessionStorage.setItem("isActive", "2");
      return true;
    }
    else if(credentials.UserName == "admin" && credentials.Password == "123")
    {
      window.sessionStorage.setItem("isActive", "1");
      return true;
    }
    else if(credentials.UserName == "provider" && credentials.Password == "123")
    {
      window.sessionStorage.setItem("isActive", "3");
      return true;
    }
    else
    {
      return false;
    }
  }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }

}



