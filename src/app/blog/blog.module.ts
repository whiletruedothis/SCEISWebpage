import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
