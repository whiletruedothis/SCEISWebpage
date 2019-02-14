import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ViewBlogComponent } from './view-blog/view-blog.component';

export const routes: Routes = [
  { path: 'view', component: ViewBlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
