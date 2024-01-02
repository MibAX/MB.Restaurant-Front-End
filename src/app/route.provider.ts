import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application
      },
      {
        path: '/ingredients',
        name: '::Menu:Ingredients',
        iconClass: 'fas fa-carrot',
        order: 10,
        layout: eLayoutType.application,
        requiredPolicy: "Restaurant.Ingredients"
      },
      {
        path: '/meals',
        name: '::Menu:Meals',
        iconClass: 'fas fa-utensils',
        order: 10,
        layout: eLayoutType.application,
        requiredPolicy: "Restaurant.Meals"
      },
    ]);
  };
}
