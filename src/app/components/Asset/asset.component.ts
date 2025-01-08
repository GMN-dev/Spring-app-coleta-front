import { Component } from '@angular/core';

@Component({
  selector: 'app-asset',
  standalone: true,
  imports: [],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss'
})
export class AssetComponent {
  public patrimonio: string = "C045048";
  public imgSrc: string = "assets/media/monitor.png";
  public status: string = "PENDENTE";
  public pendingDays: number = 1;
}