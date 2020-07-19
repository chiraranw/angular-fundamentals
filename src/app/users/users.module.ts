import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './users-routes';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(UsersRoutes), FormsModule],
})
export class UsersModule {}
