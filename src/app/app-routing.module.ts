import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewPageComponent } from './new-page/new-page.component';

const routes: Routes = [

  {
    path: 'main', component: MainPageComponent,

    children: [
      { path: 'feed', component: FeedbackComponent },
      { path: '**', component: NewPageComponent }
    ]

  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full'

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

