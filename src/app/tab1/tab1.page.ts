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
      nome: 'Mafia mamma (2023)',
      lancamento: '11/05/2023',
      duracao: '1h41m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fkYowMZtEi4txzQpjJVYKDhOg6u.jpg',
      generos: ['Comedia'],
      pagina: '/mafia-mamma',
      favorito: false
    },
    {
      nome: 'La La Land (2017)',
      lancamento: '19/01/2017 (BR)',
      duracao: '2h08m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/AvMietG6xuobpSSdmVnKuTjv4bL.jpg',
      generos: ['Musical', 'Drama', 'Romance'],
      pagina: '/la-la-land',
      favorito: false
    },
    {
      nome: 'Midsommar (2018)',
      lancamento: '19/09/2019 (BR)',
      duracao: '2h28m',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sZ6Bjq1VVfiTrALlev0ganz7uka.jpg',
      generos: ['Terror', 'Drama', 'Misterio'],
      pagina: '/midsommar',
      favorito: false
    },
    {
      nome: 'As patricinhas de Beverly Hills (1995)',
      lancamento: '19/07/1995 (BR)',
      duracao: '1h37m',
      classificacao: 4,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r1xfxpMHZpp1P2KIwou15bjB5V7.jpg',
      generos: ['Comedia'],
      pagina: '/patricinhas_de_beverly_hills',
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
