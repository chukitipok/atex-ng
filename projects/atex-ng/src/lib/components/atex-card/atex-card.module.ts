import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardAvatarDirective } from './card-avatar.directive';
import { CardImageDirective } from './card-image.directive';
import { AtexCommonModule } from "../../atex-common.module";

@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardActionsComponent,
    CardHeaderComponent,
    CardSubtitleComponent,
    CardAvatarDirective,
    CardImageDirective
  ],
  imports: [
    AtexCommonModule
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardContentComponent,
    CardActionsComponent,
    CardHeaderComponent,
    CardSubtitleComponent,
    CardAvatarDirective,
    CardImageDirective
  ]
})
export class AtexCardModule { }
