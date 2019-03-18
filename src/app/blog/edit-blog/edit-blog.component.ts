import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blog: any;
  idBlog: string;

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.idBlog = this.route.snapshot.params.id;
  }

  editBlog(blog) {
    const imageFile = blog.imageFile;
    if (imageFile) {
      this.blogService.editBlog(blog, this.idBlog, imageFile);
    } else {
      this.blogService.editBlog(blog, this.idBlog);
    }
    this.router.navigate(['blog/list']);
  }

}
