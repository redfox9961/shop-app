import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ProductDataService} from './services/product-data.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ColorPickerComponent} from './components/color-picker/color-picker.component';
import { ManagementPageComponent } from './components/management-page/management-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {EditComponent} from './components/edit/edit.component';
import { DetailComponent } from './components/detail/detail.component';
import {ConstantHelperService} from './services/constant-helper.service';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {LocalProductStorageService} from './services/local-product-storage.service';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AdminActionsComponent } from './components/admin-actions/admin-actions.component';
import { CartComponent } from './components/cart/cart.component';
import {SuccessMessageComponent} from './components/success-message/success-message.component';


const appRoutes: Routes = [{
  path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: MainPageComponent},
  {path: 'admin', component: ManagementPageComponent},
  {path: 'add-product', component: EditComponent},
  {path: 'edit-product/:id', component: EditComponent},
  {path: 'product/:id', component: DetailComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ManagementPageComponent,
    MainPageComponent,
    SuccessMessageComponent,
    EditComponent,
    DetailComponent,
    ListViewComponent,
    AdminActionsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ProductDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [
    ConstantHelperService,
    ProductDataService,
    LocalProductStorageService,
    ProductService
  ],
  entryComponents: [SuccessMessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
