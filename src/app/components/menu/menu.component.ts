import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
      const menu = document.querySelector('.menu') as HTMLElement;
      const body = document.querySelector('body') as HTMLElement;
  
      // Verifica se os elementos existem antes de adicionar eventos
      if (menuToggle && menu) {
          menuToggle.addEventListener('click', (event) => {
              event.stopPropagation();
              menu.classList.toggle('active');
              body.classList.toggle('menu-open');
          });
      }
  
      // Verifica se o clique foi fora do menu e do menuToggle
      document.addEventListener('click', (event) => {
          if (menu.classList.contains('active') && !menu.contains(event.target as Node) && !menuToggle.contains(event.target as Node)) {
              menu.classList.remove('active');
              body.classList.remove('menu-open');
          }
      });
    });
  }
}
