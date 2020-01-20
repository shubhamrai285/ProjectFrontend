import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { CartComponent } from './cart/cart.component';
import { SelectproviderComponent } from './selectprovider/selectprovider.component';
import { PaymentComponent } from './payment/payment.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { CustomersComponent } from './customers/customers.component';
import { RequestComponent } from './request/request.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';


@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    AboutusComponent,
    EditComponent,
    ContactComponent,
    DeleteComponent,
    RegisterComponent,
    NotfoundComponent,
    LoginComponent,
    ServicesComponent,
    ProviderRegisterComponent,
    CartComponent,
    SelectproviderComponent,
    PaymentComponent,
    ProviderListComponent,
    CustomersComponent,
    RequestComponent,
    ProviderProfileComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: "", component: HomeComponent }, 
     { path: "home", component: HomeComponent  },
     { path: "register", component: RegisterComponent },
     { path: "about", component: AboutusComponent },
     { path: "contact", component: ContactComponent },
     { path: "login", component: LoginComponent },
     { path: "edit", component: EditComponent  },
     { path: "delete/:No", component: DeleteComponent , canActivate:[AuthService] },
     { path: "services", component: ServicesComponent },
     { path: "provider", component: ProviderRegisterComponent},
     { path: "cart" , component:CartComponent},
     {path: "selectprovider", component:SelectproviderComponent},
     {path:"payment",component:PaymentComponent},
     {path:"providerlist",component:ProviderListComponent},
     {path:"customers",component:CustomersComponent},
     {path:"requests",component:RequestComponent},
     {path:"Pprofile",component:ProviderProfileComponent},
     { path: "**", component: NotfoundComponent }
     
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor()
  {
    console.log("App Module Created");
  }
}