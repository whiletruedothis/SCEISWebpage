import { BlogService } from './../../shared/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router) {
  }

  ngOnInit() {
  }

  createBlog(blog) {
    const imageFile = blog.imageFile;
    this.blogService.createBlog(blog, imageFile);
    this.router.navigate(['blog/list']);
  }

}
