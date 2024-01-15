import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrdersCartComponent } from './orders-cart/orders-cart.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
    // {component:Headers,path:''},
    {component:HomePageComponent, path:'home'},
    {component:UserLoginComponent, path:'Login'},
    {component:OrdersCartComponent, path:'orders'},
    {component:FoodMenuComponent, path:'menu'},
    {component:DefaultPageComponent , path:'**'}
];
