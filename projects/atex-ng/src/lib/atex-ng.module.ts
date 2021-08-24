import { NgModule } from '@angular/core';
import { AtexCardModule } from "./components/atex-card/atex-card.module";
import { AtexCommonModule } from "./atex-common.module";


@NgModule({
  declarations: [],
  imports: [
    AtexCommonModule,
    AtexCardModule
  ],
  exports: [
    AtexCardModule,
    AtexCommonModule
  ]
})
export class AtexNgModule { }
