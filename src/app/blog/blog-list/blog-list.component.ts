import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Service
import { BlogService } from './../../shared/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(actionArray => {
        this.blogs = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
    });
  }

  showBlog(blogId) {
    this.router.navigate(['blog/view', blogId]);
  }

}
