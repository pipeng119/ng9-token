import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './http-interceptors/noop-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
