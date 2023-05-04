import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  isDragover = false;
  file: File | null = null;
  nextStep = false;
  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });
  uploadForm = new FormGroup({ title: this.title });
  showAlert = false;
  alertColor = 'blue';
  alertMessage = 'Please wait! Your clip is being uploaded';
  inSubmission = false;
  percentage = 0;

  constructor(private storage: AngularFireStorage) {}

  storeFile($event: DragEvent) {
    this.isDragover = false;
    this.file = $event.dataTransfer?.files.item(0) ?? null;
    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
    this.nextStep = true;
  }

  uploadFile() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMessage = 'Please wait! Your clip is being uploaded';
    this.inSubmission = true;

    const clipFileName = uuid();
    const clipPath = `clips/${clipFileName}.mp4`;
    const task = this.storage.upload(clipPath, this.file);
    task.percentageChanges().subscribe((progress) => {
      this.percentage = (progress as number) / 100;
    });
  }
}
