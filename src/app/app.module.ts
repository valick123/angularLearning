import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { PostBodyComponent } from './post/post-body/post-body.component';
import { PostFooterComponent } from './post/post-footer/post-footer.component';
import { CommentsComponent } from './post/post-footer/comments/comments.component';
import { CommentComponent } from './post/post-footer/comments/comment/comment.component';
import { AddCommnetFormComponent } from './post/post-footer/comments/add-commnet-form/add-commnet-form.component';
import { GenderPipe } from './gender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostHeaderComponent,
    PostBodyComponent,
    PostFooterComponent,
    CommentsComponent,    
    CommentComponent,  
    AddCommnetFormComponent,
    GenderPipe,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
