import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatSelectFilterModule } from 'mat-select-filter';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

defineLocale('pt-br', ptBrLocale);
registerLocaleData(ptBr);

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule,
    ConfirmationPopoverModule.forRoot({
      appendToBody: true,
      confirmButtonType: 'danger',
    }),
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml: true
    }),
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatCheckboxModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    MatDialogModule,
    DragDropModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectFilterModule,
    MatSelectModule,
    AngularEditorModule,
    //   ptBr,

    //  MatPaginatorIntl,
    ToastrModule,
    MatDialogModule,
    ModalModule.forRoot(),

    BsDatepickerModule.forRoot(),
    AutocompleteLibModule,
  ],
  providers: [BsDatepickerConfig],
  exports: [

    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatCheckboxModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    MatDialogModule,
    DragDropModule,
    MatSelectFilterModule,
    //  ptBr,
    FormsModule,
    ReactiveFormsModule,
    // MatPaginatorIntl,
    ToastrModule,
    NgbModule,
    ConfirmationPopoverModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    AngularEditorModule,
    AutocompleteLibModule,


  ],




})
export class SharedModule { }
