import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BreadcrumbService, UserSportsService } from 'src/app/core/services';
import { breadcrumb } from './breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { PostsModel } from 'src/app/core/models';
import {
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {
  public posts: Array<PostsModel> =  new Array<PostsModel>();
  public faUser = faUserAlt;
  public loading = false;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute,
    private userService: UserSportsService,
  ) { }

  public ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getPosts(params.id);
    });
  }

  public ngAfterViewInit(): void {
    this.breadcrumbService.set(breadcrumb);
  }

  public getPosts(id: number) {
    this.loading = true;

    this.userService.getPostsByUser(id).subscribe(res => {
      this.posts = res;
      this.loading = false;
    });
  }

}
