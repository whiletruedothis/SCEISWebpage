import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

export const routes: Routes = [
  { path: 'view/:id', component: ViewBlogComponent },
  { path: 'create', component: CreateBlogComponent },
  { path: 'list', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
