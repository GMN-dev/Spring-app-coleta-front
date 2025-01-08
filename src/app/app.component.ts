import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssetComponent } from './components/Asset/asset.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AssetComponent, ModalComponent],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FacaMinhaColeta';

  public showModal(): void {
    
  }

}
