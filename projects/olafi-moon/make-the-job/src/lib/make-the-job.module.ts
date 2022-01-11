import { NgModule } from '@angular/core';
import { MakeTheJobComponent } from './make-the-job.component';
import { CpfFormatDirective } from './shared/directives/cpf-format.directive';
import { CepFormatDirective } from './shared/directives/cep-format.directive';
import { CnpjFormatDirective } from './shared/directives/cnpj-format.directive';
import { DateFormatDirective } from './shared/directives/date-format.directive';
import { DateWithDashersFormatDirective } from './shared/directives/date-with-dashers-format.directive';
import { KeyboardMouseLockFormatDirective } from './shared/directives/keyboard-mouse-lock-format.directive';
import { MoneyFormatDirective } from './shared/directives/money-format.directive';
import { PhoneFormatDirective } from './shared/directives/phone-format.directive';
import { PhoneDdiFormatDirective } from './shared/directives/phone-ddi-format.directive';
import { PisFormatDirective } from './shared/directives/pis-format.directive';
@NgModule({
  declarations: [MakeTheJobComponent, CpfFormatDirective, CepFormatDirective, CnpjFormatDirective, DateFormatDirective, DateWithDashersFormatDirective, KeyboardMouseLockFormatDirective, MoneyFormatDirective, PhoneFormatDirective, PhoneDdiFormatDirective, PisFormatDirective],
  imports: [
  ],
  exports: [MakeTheJobComponent, CpfFormatDirective]
})
export class MakeTheJobModule { }
