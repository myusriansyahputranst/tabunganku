import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

/*TAMBAHAN ICON  */
import { addIcons } from 'ionicons';
import {
  arrowDownCircleOutline,
  arrowUpCircleOutline,
  walletOutline,
  addCircleOutline,
  trashOutline,
  calculatorOutline,
  timeOutline,
  informationCircleOutline
} from 'ionicons/icons';

addIcons({
  'arrow-down-circle-outline': arrowDownCircleOutline,
  'arrow-up-circle-outline': arrowUpCircleOutline,
  'wallet-outline': walletOutline,
  'add-circle-outline': addCircleOutline,
  'trash-outline': trashOutline,
  'calculator-outline': calculatorOutline,
  'time-outline': timeOutline,
  'information-circle-outline': informationCircleOutline
});
/* 🔥 END ICON */

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes)
  ]
});
