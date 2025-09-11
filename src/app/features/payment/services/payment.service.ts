import { Injectable } from '@angular/core';
import { BASE_HTTP } from '../../../core/services/http/basehttp.services';
import { APIs } from '../../../core/constants/APIs';
import { enviroment } from '../../../../enviroments/enviroment.dev';
import { onlinepay } from '../interfaces/onlinepay.interface';
import { cashpay } from '../interfaces/cashpay.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BASE_HTTP
{
  CashPay(userdata:{},cardid:string)
  {
    return this.post<cashpay>(`${APIs.cash}${cardid}`,userdata ) ;
  }
  OnlinePay(userdata:{},cardid:string)
  {
    return this.post<onlinepay>(`${APIs.Online}${cardid}?url=${enviroment.appurl}`,userdata) ;
  }
}
