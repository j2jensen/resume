import {NgModule} from '@angular/core';
import {ChipModule, IconModule, ScrollNavModule, TileModule, } from '@healthcatalyst/cashmere';

@NgModule({
    exports: [IconModule, ScrollNavModule, ChipModule, TileModule]
})
export class CashmereModule {}
