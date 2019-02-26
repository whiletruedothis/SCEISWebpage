import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Service
import { BlogService } from './../../shared/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: any[];

  constructor(private blogService: BlogService) { }

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

}
