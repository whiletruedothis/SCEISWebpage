import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  blog: any;
  idBlog: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idBlog = this.route.snapshot.params.id;
  }

  editBlog(blog) {
    console.log(blog);
  }

}
