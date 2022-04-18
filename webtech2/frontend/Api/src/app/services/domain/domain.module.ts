import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { HttpUserController } from './auth/http-user-controller.service';
import { UserController } from './auth/user.controller.service';
import { HttpProductController } from './settings/hoki/http-hoki-controller.service';
import { HokiController } from './settings/hoki/hoki.controller.service';
import { HokiGuard } from 'src/app/pages/hokiPage/hoki.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:
    [
      HokiGuard,
      { provide: UserController, useClass: HttpUserController },
      { provide: HokiController, useClass: HttpProductController },
    ]
})
export class DomainModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainModule) {
    if (parentModule) {
      throw new Error(
        'DomainModule is already loaded. Import it in the AppModule only');
    }
  }
}
