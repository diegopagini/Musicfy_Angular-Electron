import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onVolumeChange(event: any): void {
    const volume = event.target?.value;
    console.log({ volume });
  }
}
