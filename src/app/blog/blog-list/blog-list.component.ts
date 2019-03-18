import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Service
import { BlogService } from './../../shared/services/blog.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[];
  isAdmin: boolean;

  constructor(private blogService: BlogService, private router: Router,
              private authService: AuthService) {
    this.isAdmin = false;
  }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(actionArray => {
        this.blogs = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
    });
    this.isLogged();
  }

  showBlog(blogId) {
    this.router.navigate(['blog/view', blogId]);
  }


  isLogged() {
    this.authService.isLogged().subscribe(user => {
      if (user) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }

  createBlog() {
    this.router.navigate(['blog/create']);
  }

}
