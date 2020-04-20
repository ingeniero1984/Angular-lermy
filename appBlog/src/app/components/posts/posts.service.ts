import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostInt } from '../../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private postsCollection: AngularFirestoreCollection<PostInt>

  constructor(private afs: AngularFirestore) {
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
}
