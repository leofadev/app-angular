import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionSomosProyaComponent } from './components/section-somos-proya/section-somos-proya.component';
import { SectionNuestrosProgramasComponent } from './components/section-nuestros-programas/section-nuestros-programas.component';
import { SectionCaracteristicasComponent } from './components/section-caracteristicas/section-caracteristicas.component';
import { SectionFinalComponent } from './components/section-final/section-final.component';
import { SectionFooterComponent } from './components/section-footer/section-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionHeroComponent,
    SectionSomosProyaComponent,
    SectionNuestrosProgramasComponent,
    SectionCaracteristicasComponent,
    SectionFinalComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
