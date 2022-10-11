import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ClickOutsideDirective,
    WhatsappComponent,
   
  
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,SharedModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
