import { NgModule } from '@angular/core';
import { ButtonModule, TileModule, } from '@healthcatalyst/cashmere';

@NgModule({
  exports: [TileModule, ButtonModule]
})
export class CashmereModule { }
