import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.scss'],
})
export class SongPlayerComponent {
  @Input() playing: boolean = false;
  @Input() value: number = 0;

  onToggle(): void {
    this.playing = !this.playing;
    if (this.playing) setInterval(() => this.value++, 100);
  }

  onChange(event: any): void {
    this.value = event.target.value;
  }
}
