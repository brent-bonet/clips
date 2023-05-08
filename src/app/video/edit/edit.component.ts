import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import IClip from '../../models/clip.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  @Input() activeClip: IClip | null = null;
  clipId = new FormControl('', { nonNullable: true });
  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });
  editForm = new FormGroup({ id: this.clipId, title: this.title });
  constructor(private modal: ModalService) {}

  ngOnInit() {
    this.modal.register('editClip');
  }

  ngOnDestroy() {
    this.modal.unregister('editClip');
  }

  ngOnChanges() {
    if (this.activeClip === null) return;
    console.log('OnChanges');
    this.clipId.setValue(this.activeClip?.docId as string);
    this.title.setValue(this.activeClip?.title as string);
  }
}
