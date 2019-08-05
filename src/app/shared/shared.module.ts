import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { InputComponent } from './components/input/input.component';
import { ChartComponent } from './components/chart/chart.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  declarations: [ModalFormComponent, ModalConfirmationComponent, DetailsModalComponent, InputComponent, ChartComponent, FormComponent, FooterComponent, SidePanelComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
