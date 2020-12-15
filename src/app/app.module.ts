import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostButtonsComponent } from './post-buttons/post-buttons.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    CommentItemComponent,
    PostButtonsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
