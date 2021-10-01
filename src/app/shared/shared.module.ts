import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthService } from './services/auth.service';
import { EventModalComponent } from './components/event-modal/event-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, InputComponent, EventModalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  exports: [ButtonComponent, InputComponent, EventModalComponent],
})
export class SharedModule {}
