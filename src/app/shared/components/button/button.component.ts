import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type Type = 'button' | 'submit';
type Color = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: Type = 'button';
  @Input() color: Color = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.onClick.emit();
  }
}
