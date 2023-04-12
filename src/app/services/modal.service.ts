import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
 private modals: IModal[] = [];

  constructor() {}

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string): void {
    console.log('toggle', id);
    const modal = this.modals.find((element) => element.id === id);
    console.log('modal', modal);
    if (modal) {
      modal.visible = !modal.visible;
      console.log('modal after toggle', modal);
    }
  }

  register(id: string): void {
    console.log('register', id);
    this.modals.push({ id, visible: false });
  }

  unregister(id: string):  void {
    this.modals = this.modals.filter( element => element.id !== id)
  }
}
