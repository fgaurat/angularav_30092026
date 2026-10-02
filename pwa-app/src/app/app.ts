import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  imports: [RouterOutlet,AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pwa-app v5');
  private updates = inject(SwUpdate);
  todos$ = inject(HttpClient).get<any>("http://localhost:3000/todos");


  constructor() {
    this.updates.versionUpdates.subscribe((evt) => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);

          this.updates.activateUpdate().then(() => {
            console.log('New version activated. Reloading page...');
            document.location.reload();
          });


          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
        case 'NO_NEW_VERSION_DETECTED':
          console.log(`Version '${evt.version.hash}' failed with error: ${JSON.stringify(evt)}`);
          break;
      }
    });


  }
}
