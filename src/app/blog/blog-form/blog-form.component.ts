import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  @Input() idBlog: string;
  blog: any;
  @Output() submit: EventEmitter<any>;
  options = {
    charCounterCount: false,
    placeholderText: 'Escriba aquí',
    toolbarButtons: [
      'fullscreen', 'bold',
      'italic', 'underline',
      'strikeThrough',
      'subscript', 'superscript',
      'fontSize', 'color',
      'paragraphStyle', 'align',
      'formatOL', 'formatUL',
      'outdent', 'indent',
      'insertLink', 'insertTable',
      'quote', 'insertHR',
      'undo', 'redo',
      'clearFormatting', 'selectAll'
    ],
    toolbarButtonsXS: [
      'fullscreen', 'bold',
      'italic', 'underline',
      'strikeThrough',
      'subscript', 'superscript',
      'fontSize', 'color',
      'paragraphStyle', 'align',
      'formatOL', 'formatUL',
      'outdent', 'indent',
      'insertLink', 'insertTable',
      'quote', 'insertHR',
      'undo', 'redo',
      'clearFormatting', 'selectAll'
    ],
    toolbarButtonsSM: [
      'fullscreen', 'bold',
      'italic', 'underline',
      'strikeThrough',
      'subscript', 'superscript',
      'fontSize', 'color',
      'paragraphStyle', 'align',
      'formatOL', 'formatUL',
      'outdent', 'indent',
      'insertLink', 'insertTable',
      'quote', 'insertHR',
      'undo', 'redo',
      'clearFormatting', 'selectAll'
    ],
    toolbarButtonsMD: [
      'fullscreen', 'bold',
      'italic', 'underline',
      'strikeThrough',
      'subscript', 'superscript',
      'fontSize', 'color',
      'paragraphStyle', 'align',
      'formatOL', 'formatUL',
      'outdent', 'indent',
      'insertLink', 'insertTable',
      'quote', 'insertHR',
      'undo', 'redo',
      'clearFormatting', 'selectAll'
    ],
  };
  blogForm: FormGroup;
  imageUrl: string;
  imageFile: FileList;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.imageUrl = 'https://st.depositphotos.com/1158045/4197/i/950/depositphotos_41979079-stock-photo-people-studying-in-a-library.jpg';
    this.blog = new Blog();
    this.submit = new EventEmitter();
  }

  ngOnInit() {
    this.createForm();
    if (this.idBlog) {
      this.blogService.getBlogById(this.idBlog).subscribe(result => {
        this.blog = result.payload.data();
        this.initializeForm();
      });
    }
  }

  initializeForm() {
    this.blogForm.setValue({
      title: this.blog.title,
      text: this.blog.text
    });
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: [ '', [ Validators.required, Validators.maxLength(150) ] ],
      text: [ '', [ Validators.required ] ],
    });
  }

  saveForm() {
    this.blog = this.blogForm.value;
    const fecha = new Date().toLocaleDateString();
    this.blog.date = fecha;
    this.blogService.createBlog(this.blog, this.imageFile);
  }

  loadImage() {
    this.fileInput.nativeElement.click();
  }

  changeImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const target = new EventTarget();
      this.imageFile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = () => {
        this.imageUrl = reader.result.toString();
      };
    }
  }

}
