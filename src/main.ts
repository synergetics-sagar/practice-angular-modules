import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AppModule } from './app/app/app.module';
// import { MainModule } from './app/main/main.module';


// platformBrowserDynamic().bootstrapModule(AppRoutingModule).catch(err=>console.log(err))
// bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
// platformBrowserDynamic()
//   .bootstrapModule(MainModule)
//   .catch((err) => console.error(err));
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));