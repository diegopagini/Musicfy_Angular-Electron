import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-avatar-update',
  templateUrl: './avatar-update.component.html',
  styleUrls: ['./avatar-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarUpdateComponent {
  file: any;

  onSelect(event: any): void {
    this.file = event.addedFiles[0];
  }

  onRemove(event: any): void {
    this.file = null;
  }
}
