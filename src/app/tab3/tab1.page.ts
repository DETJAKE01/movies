import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
                    public alertController: AlertController,
                    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (EUA)',
      duracao: '3h01m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Vingadores: Guerra Infinita (2018)',
      lancamento: '26/04/2018 (EUA)',
      duracao: '2h29m',
      classificacao: 8,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4neC_Y4U1G6u2QlEFqbCizheGBUnZg1w874qWbIcVlv9tPuSu',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Homem-Aranha: Sem Volta para Casa (2021)',
      lancamento: '16/12/2021 (BR)',
      duracao: '2h28m',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMXAY7NfXP9KD4E6lHN2z9CZPMIngD39PxurSQXNfG6edN563s',
      generos: ['Aventura', 'Ficção cienttífica', 'Ação'],
      pagina: '/spiderman',
      favorito: false
    },
    {
      nome: 'El Camino (2019)',
      lancamento: '11/10/2019 (EUA)',
      duracao: '2h02m',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0QJb2jYTTLJAn54wMaGL0rBbz2acaYJ9aGtA6Ugc5bQJaqvU6',
      generos: ['Aventura', 'Crime', 'Ação'],
      pagina: '/elcamino',
      favorito: false
    },
    {
      nome: 'Interestelar (2014)',
      lancamento: '06/11/2014 (EUA)',
      duracao: '2h49m',
      classificacao: 10,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png',
      generos: ['Drama', 'Ficção cienttífica', 'Ação'],
      pagina: '/interestelar',
      favorito: false
    },

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras)
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
