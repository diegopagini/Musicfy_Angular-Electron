import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

const components = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  ContentComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ComponentsModule {}
