import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth/auth.module';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {HouseListComponent} from './host/house/house-list/house-list.component';
import { HostComponent } from './host/host.component';
import { HouseCreateComponent } from './host/house/house-create/house-create.component';
import { HouseDetailComponent } from './host/house/house-detail/house-detail.component';
import { HouseEditComponent } from './host/house/house-edit/house-edit.component';
import { HouseDeleteComponent } from './host/house/house-delete/house-delete.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { ProfileHostComponent } from './host/profile-host/profile-host.component';
import { ChangePasswordUserComponent } from './user/change-password-user/change-password-user.component';
import { Error403Component } from './error403/error403/error403.component';
import { ChangePasswordHostComponent } from './host/change-password-host/change-password-host.component';
import { HouseEditStatusComponent } from './host/house/house-edit-status/house-edit-status.component';
import { NavBarUserComponent } from './user/nav-bar-user/nav-bar-user.component';
import { ViewHouseComponent } from './user/view-house/view-house.component';
import { NotificationDetailComponent } from './host/notification-detail/notification-detail.component';
import { OrderDetailComponent } from './user/order-detail/order-detail.component';
import { NavBarHostComponent } from './host/nav-bar-host/nav-bar-host.component';
import { OrderComponent } from './host/order/order.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HouseListComponent,
    HostComponent,
    HouseCreateComponent,
    HouseDetailComponent,
    HouseEditComponent,
    HouseDeleteComponent,
    ProfileUserComponent,
    ProfileHostComponent,
    ChangePasswordUserComponent,
    Error403Component,
    ChangePasswordHostComponent,
    HouseEditStatusComponent,
    NavBarUserComponent,
    ViewHouseComponent,
    NotificationDetailComponent,
    OrderDetailComponent,
    NavBarHostComponent,
    OrderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
