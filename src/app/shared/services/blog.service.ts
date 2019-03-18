import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private afs: AngularFirestore, private fs: AngularFireStorage) { }

  createBlog(blog, file) {
    const id = this.afs.createId();
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('blogs/' + blog.title + '/' + file.name).put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
          blog.imageUrl = downloadUrl;
          this.afs.collection('blogs').add(blog);
        });
      }
    );
  }

  getBlogs() {
    return this.afs.collection('blogs').snapshotChanges();
  }

  getBlogById(blogId) {
    return this.afs.collection('blogs').doc(blogId).snapshotChanges();
  }

}
