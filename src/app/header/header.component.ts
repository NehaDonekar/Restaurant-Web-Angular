import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { OrdersCartComponent } from '../orders-cart/orders-cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,FoodMenuComponent,UserLoginComponent,OrdersCartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
