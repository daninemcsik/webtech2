import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHokiComponent } from './create-hoki/create-hoki.component';
import { ListHokiComponent } from './listHokiPage/list-hoki.component';

const routes: Routes = [
    { path: 'hokis', component: ListHokiComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HokiRoutingModule { }
