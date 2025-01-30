import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [{ path: '', component: MainComponent }];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
});
export class AppRoutingModule {}
