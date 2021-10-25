import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownFieldsComponent } from './home/dropdown-fields/dropdown-fields.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { InfoComponent } from './home/info/info.component';
import { ListboxModule } from 'primeng/listbox';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DropdownFieldsComponent,
    InfoComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    DropdownModule,
    ListboxModule,
    PopoverModule,
    ClipboardModule,
    ProgressSpinnerModule,
    ToastModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
