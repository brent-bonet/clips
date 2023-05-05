import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClipService } from '../../services/clip.service';
import IClip from '../../models/clip.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  videoOrder = '1';
  clips: IClip[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clipsService: ClipService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => (this.videoOrder = params.sort === '2' ? params.sort : '1')
    );
    this.clipsService.getUserClips().subscribe((docs) => {
      this.clips = [];
      docs.forEach((doc) => {
        this.clips.push({
          docId: doc.id,
          ...doc.data(),
        });
      });
    });
  }
  sort(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        sort: value,
      },
    });
  }
}
