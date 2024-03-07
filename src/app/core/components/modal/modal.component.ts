import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FruitService, IFruit } from '../../../shared/services/fruit.service';
// import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { numberFormat } from 'src/app/shared/utils/format-number';
import { pdfFonts } from 'src/app/shared/utils/vfs_fonts';
// import { pdfFonts } from 'src/app/shared/utils/vfs_fonts';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() openModal: boolean = false;
  @Input() closeModal: () => void = () => {};
  @Input() title: string = '';

  totalValue: number = 0;
  totalValueSubscription: Subscription = new Subscription();
  totalQuantity: number = 0;
  totalQuantitySubscription: Subscription = new Subscription();
  fruits: IFruit[] = [];
  fruitSubscription: Subscription = new Subscription();

  constructor(
    private fruitService: FruitService
  ) { }

  numberFormated(value: number) {
    return numberFormat(String(value));
  }

  getImageAsDataUrl = async (src: string) => {
    const response = await fetch(src);
    const blob = await response.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  generatePDF = async () => {
    const content = await Promise.all(
      this.fruits
        .filter(fruit => fruit.quantity > 0)
        .map(async fruit => {
          const imageDataUrl = await this.getImageAsDataUrl(fruit.src);
          return [
            { image: imageDataUrl, width: 50, height: 50 },
            { text: `${fruit.title}`, style: 'fruitTitle' },
            { text: `Quantidade: ${fruit.quantity}`, style: 'fruitInfo' },
            {
              text: `Valor: R$ ${numberFormat(
                String(fruit.value * fruit.quantity),
              )}`,
              style: 'fruitInfo',
            },
            { text: '\n' },
          ];
        }),
    );

    const documentDefinition: any = {
      content: [
        { text: 'Comprovante de Pagamento', style: 'header' },
        ...content.flat(),
        { text: `Quantidade de produtos: ${this.totalQuantity}`, style: 'header' },
        {
          text: `Valor total: ${numberFormat(String(this.totalValue))}`,
          style: 'header',
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        fruitTitle: { fontSize: 16, bold: true, margin: [0, 10, 0, 5] },
        fruitInfo: { fontSize: 14, margin: [0, 0, 0, 5] },
        fruitDescription: { fontSize: 12, margin: [0, 0, 0, 10] },
      }
    };

    (pdfMake as any).vfs = pdfFonts;
    pdfMake.createPdf(documentDefinition).download('comprovante_frutaFeira_angular.pdf');
  };

    ngOnInit() {
    this.totalValueSubscription = this.fruitService.totalValue$.subscribe(totalValue => {
      this.totalValue = totalValue;
    });
    this.totalQuantitySubscription = this.fruitService.totalQuantity$.subscribe(totalQuantity => {
      this.totalQuantity = totalQuantity;
    });
    this.fruitSubscription = this.fruitService.fruits$.subscribe(fruits => {
      this.fruits = fruits;
    });
  }

  ngOnDestroy() {
    this.totalValueSubscription.unsubscribe();
    this.totalQuantitySubscription.unsubscribe();
    this.fruitSubscription.unsubscribe();
  }
}
