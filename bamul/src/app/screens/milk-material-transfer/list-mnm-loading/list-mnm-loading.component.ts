import { Component, OnInit } from '@angular/core';
import { WeighingBridgeService } from '../../../shared/service/weighing-bridge.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-mnm-loading',
  templateUrl: './list-mnm-loading.component.html',
  styleUrls: ['./list-mnm-loading.component.css']
})
export class ListMnmLoadingComponent implements OnInit {
  materialTransferRequestResponse: any = [];
  constructor(
    private weighingBridgeService: WeighingBridgeService,
    private spinnerService: Ng4LoadingSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllMilkTransferByFromLocationId();
  }
  getAllMilkTransferByFromLocationId() {
    let userData = JSON.parse(localStorage.getItem('data'));
    // let locationId = 113;
    // userData.locationID = locationId;
    this.spinnerService.show();
    this.weighingBridgeService.getAllMilkTransferByFromLocationId(userData.locationID).subscribe(
      res => {
        if (res != null) {
          this.materialTransferRequestResponse = res;
          this.spinnerService.hide();
        }
      });
  }
}
