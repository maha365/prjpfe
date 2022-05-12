import { APP_INITIALIZER, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import { initializer } from '../utils/util';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, 
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialsModule,KeycloakAngularModule,
    HttpClientModule,KeycloakService, 
   
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory:initializeKeycloak ,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
function initializeKeycloak(keycloak: KeycloakService){
  return ()=>
  keycloak.init({
    config: {
      url: 'http://localhost:8080/auth',
      realm:'Pfe',
      clientId: 'test1',
      
    },
  
  initOptions:{
    onLoad:'login-required',
    flow:'standard',
    checkLoginIframe:false,
  
  },
  loadUserProfileAtStartUp: true,
});
}