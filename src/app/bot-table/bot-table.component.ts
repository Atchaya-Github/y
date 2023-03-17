import { Component,OnInit,ViewChild } from '@angular/core';
import { BotSeriveService } from '../BotService/bot-serive.service';
import { data } from '../BotTypes/bottype';

@Component({
  selector: 'app-bot-table',
  templateUrl: './bot-table.component.html',
  styleUrls: ['./bot-table.component.css'],
})
export class BotTableComponent implements OnInit{
  Apivalue: data[] = [];
  display: boolean = false;
  bot_info: boolean = false;
  keys: any;
  botdetail!: data;
  first = 0;
  rows = 10;
  selectedItem1:any;
  @ViewChild('dt') dt: any;
  bot_name!: string | any ;

  constructor(private Service: BotSeriveService) {}
  
  ngOnInit() {
    this.Service.GetBotDeatil().subscribe({
      next: (res) => {
        this.Apivalue = res.Data.data;
        this.Apivalue = this.removeDuplicates(this.Apivalue);
      },
    });
  }

  customSort(event: any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
  showDialog(val: number) {
    this.bot_info = true;
    this.keys = Object.values(this.Apivalue);
    this.keys.filter((x: data) => {
      if (x.bot_configuration_id === val){
        this.botdetail = x;
      }
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  removeDuplicates(bots: any[]): any[] {
    const uniqueBots = [];
    const botIds = new Set();
    for (const bot of bots) {
      if (!botIds.has(bot.bot_configuration_id)) {
        botIds.add(bot.bot_configuration_id);
        uniqueBots.push(bot);
      }
    }
    return uniqueBots;
  }
}
