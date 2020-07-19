import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './users-routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(UsersRoutes)],
})
export class UsersModule {}
