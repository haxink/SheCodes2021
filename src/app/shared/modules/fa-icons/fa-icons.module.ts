import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faCheckSquare,
  faChevronLeft,
  faCircleNotch,
  faCog,
  faComments,
  faDownload,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faFilter,
  faInfoCircle,
  faList,
  faPaperPlane,
  faPencilAlt,
  faPencilRuler,
  faPlus,
  faRedo,
  fas,
  faSave,
  faSearch,
  faShapes,
  faShoppingCart,
  faStar,
  faTimes,
  faTimesCircle,
  faUpload,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FaIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCircleNotch);
    library.addIcons(faPencilAlt);
    library.addIcons(faUserCircle);
    library.addIcons(faComments);
    library.addIcons(faSave);
    library.addIcons(faUpload);
    library.addIcons(faPlus);
    library.addIcons(faTimes);
    library.addIcons(faFilter);
    library.addIcons(faCheckSquare);
    library.addIcons(faDownload);
    library.addIcons(faCheckCircle);
    library.addIcons(faCog);
    library.addIcons(faTimesCircle);
    library.addIcons(faEye);
    library.addIcons(faStar);
    library.addIcons(faSearch);
    library.addIcons(faChevronLeft);
    library.addIcons(faPaperPlane);
    library.addIcons(faInfoCircle);
    library.addIcons(faList);
    library.addIcons(faPencilRuler);
    library.addIcons(faShoppingCart);
    library.addIcons(faShapes);
    library.addIcons(faRedo);
    library.addIcons(faExclamationTriangle);
    library.addIcons(faExclamationCircle);
  }
}
