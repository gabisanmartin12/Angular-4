// Import modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { PageNotFoundComponent } from './Controllers/pageNotFound.component';
import { HeroListComponent } from './Controllers/heroList.component';
import { CrisisListComponent } from './Controllers/crisisList.component';

// Define routes array
const appRoutes: Routes = [
	{ path: 'crisis-center', component: CrisisListComponent },
	{ path: 'heroes', component: HeroListComponent },

	// Defualt route
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },

	// This route must be last because it matchs with any route
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		)
	],
	exports: [
		// Re-exporting this module the components declarated in AppModule will have access
		// to router directives such as routerLink.
		RouterModule
	]
})
export class AppRoutingModule {}