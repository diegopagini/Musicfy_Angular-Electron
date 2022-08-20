import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
