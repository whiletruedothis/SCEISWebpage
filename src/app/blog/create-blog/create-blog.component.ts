import { Blog } from './../../shared/models/blog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

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
  blog: Blog;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.imageUrl = 'https://st.depositphotos.com/1158045/4197/i/950/depositphotos_41979079-stock-photo-people-studying-in-a-library.jpg';
    this.blog = new Blog();
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.blogForm = this.fb.group({
      title: [ this.blog.title, [ Validators.required, Validators.maxLength(150) ] ],
      text: [ this.blog.text, [ Validators.required ] ],
    });
  }

  saveForm() {
    this.blog = this.blogForm.value;
    this.blog.imageFile = this.imageFile;
    console.log(this.blog);
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
