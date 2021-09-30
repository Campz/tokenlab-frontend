import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthService } from './services/auth.service';
import { EventModalComponent } from './components/event-modal/event-modal.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, EventModalComponent],
  imports: [CommonModule],
  providers: [AuthService],
  exports: [ButtonComponent, InputComponent, EventModalComponent],
})
export class SharedModule {}
