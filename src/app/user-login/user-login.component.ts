import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HeaderComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
  providers:[FormGroup]
})
export class UserLoginComponent 
{
  
}
