import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94',
    },
    {
      title: 'Waterfall',
      url: 'https://images.unsplash.com/photo-1632309812723-2f350b53c50e',
    },
    {
      title: 'Sun Flower Farm',
      url: 'https://images.unsplash.com/photo-1632119653689-2b0d6a70515d',
    },
    {
      title: 'Forest Road',
      url: 'https://images.unsplash.com/photo-1632418128534-06a848984ab5',
    },
    {
      title: 'Hiking',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Tunnel',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Pelican',
      url: 'https://images.unsplash.com/photo-1632163607547-dfafe638dd63',
    },
    {
      title: 'Crossing the Road',
      url: 'https://images.unsplash.com/photo-1630435492646-3864eb4fe197',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94',
    },
    {
      title: 'Waterfall',
      url: 'https://images.unsplash.com/photo-1632309812723-2f350b53c50e',
    },
    {
      title: 'Sun Flower Farm',
      url: 'https://images.unsplash.com/photo-1632119653689-2b0d6a70515d',
    },
    {
      title: 'Forest Road',
      url: 'https://images.unsplash.com/photo-1632418128534-06a848984ab5',
    },
    {
      title: 'Hiking',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Tunnel',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Pelican',
      url: 'https://images.unsplash.com/photo-1632163607547-dfafe638dd63',
    },
    {
      title: 'Crossing the Road',
      url: 'https://images.unsplash.com/photo-1630435492646-3864eb4fe197',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94',
    },
    {
      title: 'Waterfall',
      url: 'https://images.unsplash.com/photo-1632309812723-2f350b53c50e',
    },
    {
      title: 'Sun Flower Farm',
      url: 'https://images.unsplash.com/photo-1632119653689-2b0d6a70515d',
    },
    {
      title: 'Forest Road',
      url: 'https://images.unsplash.com/photo-1632418128534-06a848984ab5',
    },
    {
      title: 'Hiking',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Tunnel',
      url: 'https://images.unsplash.com/photo-1632347866614-61b43ccf2dda',
    },
    {
      title: 'Pelican',
      url: 'https://images.unsplash.com/photo-1632163607547-dfafe638dd63',
    },
    {
      title: 'Crossing the Road',
      url: 'https://images.unsplash.com/photo-1630435492646-3864eb4fe197',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
