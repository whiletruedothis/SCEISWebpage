import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blog: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.blog = new Blog();
  }

  ngOnInit() {
    this.blogService.getBlogById(this.route.snapshot.params.id).subscribe( result => {
      this.blog = result.payload.data();
    });

  }

}
