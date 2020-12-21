import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { PostBodyComponent } from './post/post-body/post-body.component';
import { PostFooterComponent } from './post/post-footer/post-footer.component';
import { CommentsComponent } from './post/post-footer/comments/comments.component';
import { ActionsComponent } from './post/post-footer/actions/actions.component';
import { CommentComponent } from './post/post-footer/comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostHeaderComponent,
    PostBodyComponent,
    PostFooterComponent,
    CommentsComponent,
    ActionsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
