import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskService } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
// import { ModalService } from '../services/modal.service';

@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent],
  providers: [NgxMaskService],
})
export class SharedModule {}
