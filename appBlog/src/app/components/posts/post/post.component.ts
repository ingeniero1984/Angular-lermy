import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { PostInt } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post$ : Observable<PostInt>;

  constructor(private route:ActivatedRoute, private postSvc:PostsService) { }

  ngOnInit(): void {
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost)
  }
}
