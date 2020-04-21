import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostInt } from '../../shared/models/post.interface';
import { FileInt } from '../../shared/models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private postsCollection: AngularFirestoreCollection<PostInt>
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollection = afs.collection<PostInt>('posts');
  }

  public getAllPosts():Observable<PostInt[]>
  {
    return this.postsCollection
    .snapshotChanges()
    .pipe(
      map( actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as PostInt;
          const id = a.payload.doc.id;
          return {id, ...data };
        })
      )
    );
  }

  public getOnePost(id: PostInt): Observable<PostInt>
  {
    return this.afs.doc<PostInt>(`posts/${id}`).valueChanges();
  }

  public deletePostById(post: PostInt)
  {
    return this.postsCollection.doc(post.id).delete();
  }

  public editPostById(post: PostInt)
  {
    return this.postsCollection.doc(post.id).update(post);
  }

  public preAddAndUpdatePost(post: PostInt, image: FileInt): void {
    this.uploadImage(post, image);
  }

  private savePost(post: PostInt) {
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: this.downloadURL,
      fileRef: this.filePath,
      tagsPost: post.tagsPost
    };

    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(post);
    }
  }

  private uploadImage(post: PostInt, image: FileInt) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }
}
