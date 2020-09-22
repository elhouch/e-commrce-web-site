import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { routes } from './routes';
@NgModule({
  declarations: [],
  exports :[
    RouterModule

  ],
  imports: [
  RouterModule.forRoot(routes),
  CommonModule
  ]
})
export class AppRoutingModule { }
