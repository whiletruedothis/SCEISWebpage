import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blog: any;
  isAdmin: boolean;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private authService: AuthService,
              private router: Router) {
    this.blog = new Blog();
    this.isAdmin = false;
  }

  ngOnInit() {
    this.blogService.getBlogById(this.route.snapshot.params.id).subscribe( result => {
      this.blog = result.payload.data();
    });
    this.isLogged();
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

  editBlog() {
    this.router.navigate(['']);
  }

}
