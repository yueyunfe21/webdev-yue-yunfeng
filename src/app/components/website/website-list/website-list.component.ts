import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Website} from '../../../model/website.model';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['../../../app.component.css']
})
export class WebsiteListComponent implements OnInit {
  id: string;
  websiteList: Website[];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.id = param.uid;
        this.websiteList = this.websiteService.findWebsitesByUser(this.id);
      }
    );
  }

  clickPage(website: Website) {
    this.router.navigate(['user', this.id, 'website', website.id, 'page']);
  }
}
