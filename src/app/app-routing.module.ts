import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'about', component: AboutComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contact', component: ContactComponent},
  {path:'project/:id',component: DetailComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
