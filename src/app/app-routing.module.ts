import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule,)},
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' , },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'registered', loadChildren: './registered/registered.module#RegisteredPageModule', canActivate: [AuthGuard], },   //user cannot access page unless logged in. Initialised from AuthGuard
  { path: 'redthai', loadChildren: './recipes/redthai/redthai.module#RedthaiPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'addshopping', loadChildren: './addshopping/addshopping.module#AddshoppingPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'spchix', loadChildren: './recipes/spchix/spchix.module#SpchixPageModule' },
  { path: 'dumplings', loadChildren: './recipes/dumplings/dumplings.module#DumplingsPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule', }, 

  //routing module uses lazy loading so that not all pages are loaded at once when app starts, they are loaded when needed or accessed

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


