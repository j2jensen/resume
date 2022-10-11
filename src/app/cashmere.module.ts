import { NgModule } from '@angular/core';
import { ButtonToggleModule, TileModule, } from '@healthcatalyst/cashmere';

@NgModule({
  exports: [TileModule, ButtonToggleModule]
})
export class CashmereModule { }
