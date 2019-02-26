import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { BlogRoutingModule } from './blog-routing.module';

// Components
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    ViewBlogComponent,
    CreateBlogComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class BlogModule { }
