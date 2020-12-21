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
import { ActionButtonComponent } from './post/post-footer/actions/action-button/action-button.component';
import { AddCommnetFormComponent } from './post/post-footer/comments/add-commnet-form/add-commnet-form.component';
import {FormsModule} from '@angular/forms'
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
    ActionButtonComponent,
    AddCommnetFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
