import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {NewyorkComponent} from "./components/newyork/newyork.component"
import {LosangelesComponent} from "./components/losangeles/losangeles.component"
import {HomeComponent} from "./components/home/home.component" 
import { ParametroComponent} from "./components/parametro/parametro.component"
import { Error404Component} from "./components/error404/error404.component"
import {PadreComponent} from "./components/padre/padre.component"
import {HomepadreComponent} from "./components/homepadre/homepadre.component" 
import {Hija1Component} from "./components/hija1/hija1.component"
import {Hija2Component} from "./components/hija2/hija2.component"

const appRoutes: Routes=[
{path:"" ,component:HomeComponent},
{ path:"losangeles",component:LosangelesComponent},
{path:"newyork",component:NewyorkComponent},
{path:"parametro/:num",component:ParametroComponent},
{path:"padre",component:PadreComponent, children:[
    {path:"homePadre",component:HomepadreComponent},
    {path:"hija",component:Hija1Component, pathMatch:'full'},
    {path:"hijas",component:Hija2Component},
]},
{path:'**',component:Error404Component}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);