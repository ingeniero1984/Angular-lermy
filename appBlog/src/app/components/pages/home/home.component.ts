import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts/posts.service';
import { PostInt } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostInt[]>;

  constructor(private postSvc: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postSvc.getAllPosts();
  }

}
