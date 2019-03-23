import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatButtonModule,MatInputModule,MatDividerModule,MatIconModule,MatCardModule,MatGridListModule} from '@angular/material';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path:'',component:LandingComponent
    },
  {path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent}]),
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
