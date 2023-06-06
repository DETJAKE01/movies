import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';

import { SerieDetalhePage } from './../serie-detalhe/serie-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Marvelous mrs Maisel (2018)',
      lancamento: '04/12/2018',
      temporadas: '5',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i61vpsczXOfrDbkdyVHo6nSmVfQ.jpg',
      generos: ['Drama', 'Comedia'],
      pagina: '/marvelous-mrs-maisel',
      favorito: false
    },
    {
      nome: 'Treta (2023)',
      lancamento: '06/04/2023',
      temporadas: '1',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bxOtO9Dao7GR3Y4bmo4hFUF59bd.jpg',
      generos: ['Drama', 'Comedia'],
      pagina: '/treta',
      favorito: false
    },
    {
      nome: 'Heartstopper (2022)',
      lancamento: '22/04/2022',
      temporadas: '1',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gm2Dvt7GB5XuJgtHkfEy1KYRZw4.jpg',
      generos: ['Drama', 'Romance'],
      pagina: '/heartstopper',
      favorito: false
    },
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras)
  }

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

 async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
