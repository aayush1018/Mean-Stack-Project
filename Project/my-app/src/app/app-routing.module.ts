import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'videos', component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
