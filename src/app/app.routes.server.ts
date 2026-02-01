import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: 'dashboard/detailspage/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const ids = ['1', '2', '3']; 
      return ids.map(id => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
