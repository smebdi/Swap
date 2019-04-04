import { Injectable } from '@angular/core';
import { UntappdBeer } from '../model/untappd.model';

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  macroBeer: UntappdBeer[];
  microBeer: UntappdBeer[];
  microArr: UntappdBeer[];
  macroArr: UntappdBeer[];

  constructor() {

    this.macroBeer = [
      {
          'bid': 4473,
          'beer_name': 'Guinness Draught',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-4473_1cbe8_sm.jpeg',
          'beer_style': 'Stout - Irish Dry',
          'beer_abv': 4.2,
          'wish_list': false
      },
      {
          'bid': 4509,
          'beer_name': 'IPA',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-4509_1ce65_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 6.2,
          'wish_list': false
      },
      {
          'bid': 1353,
          'beer_name': 'Goose IPA',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-1353_b23f2_sm.jpeg',
          'beer_style': 'IPA - English',
          'beer_abv': 5.9,
          'wish_list': false
      },
      {
          'bid': 5860,
          'beer_name': 'Heineken',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-5860_d6969_sm.jpeg',
          'beer_style': 'Lager - Euro',
          'beer_abv': 5,
          'wish_list': false
      },
      {
          'bid': 4010,
          'beer_name': 'Stella Artois',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-4010_5da67_sm.jpeg',
          'beer_style': 'Lager - Euro',
          'beer_abv': 5,
          'wish_list': false
      },
      {
          'bid': 121023,
          'beer_name': 'Space Dust IPA',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-121023_49ff7_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 8.2,
          'wish_list': false
      },
      {
          'bid': 3839,
          'beer_name': 'Belgian White',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg',
          'beer_style': 'Witbier',
          'beer_abv': 5.4,
          'wish_list': false
      },
      {
          'bid': 5848,
          'beer_name': 'Corona Extra',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-5848_e34c0_sm.jpeg',
          'beer_style': 'Lager - North American Adjunct',
          'beer_abv': 4.5,
          'wish_list': false
      },
      {
          'bid': 2564715,
          'beer_name': 'Next Coast',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-2564715_81057_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 7,
          'wish_list': false
      },
      {
          'bid': 3811,
          'beer_name': 'Miller Lite',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-3811_00614_sm.jpeg',
          'beer_style': 'Lager - American Light',
          'beer_abv': 4.2,
          'wish_list': false
      }
    ];
    this.microBeer = [
      {
          'bid': 9681,
          'beer_name': 'Kentucky Breakfast Stout (KBS)',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-FoundersKBS.jpg',
          'beer_style': 'Stout - American Imperial / Double',
          'beer_abv': 12.3,
          'wish_list': false
      },
      {
          'bid': 3125214,
          'beer_name': 'Stone Enjoy By 04.20.19',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-3125214_703e8_sm.jpeg',
          'beer_style': 'IPA - Imperial / Double',
          'beer_abv': 9.4,
          'wish_list': false
      },
      {
          'bid': 2796104,
          'beer_name': 'Official',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-2796104_2c212_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 6.4,
          'wish_list': false
      },
      {
          'bid': 16581,
          'beer_name': 'Oberon Ale',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-16581_2ac08_sm.jpeg',
          'beer_style': 'Pale Wheat Ale - American',
          'beer_abv': 5.8,
          'wish_list': false
      },
      {
          'bid': 3080814,
          'beer_name': 'LolliHop Dry-Hopped Double IPA',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-3080814_89dc8_sm.jpeg',
          'beer_style': 'IPA - Imperial / Double',
          'beer_abv': 8.2,
          'wish_list': false
      },
      {
          'bid': 5724,
          'beer_name': 'Jai Alai',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-5724_8eaee_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 7.5,
          'wish_list': false
      },
      {
          'bid': 2412786,
          'beer_name': 'Hazy Little Thing',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-2412786_c2d78_sm.jpeg',
          'beer_style': 'IPA - New England',
          'beer_abv': 6.7,
          'wish_list': false
      },
      {
          'bid': 2916237,
          'beer_name': 'Mind Haze',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-2916237_dd665_sm.jpeg',
          'beer_style': 'IPA - New England',
          'beer_abv': 6.2,
          'wish_list': false
      },
      {
          'bid': 4133,
          'beer_name': 'Two Hearted Ale',
          'beer_label': 'https://untappd.akamaized.net/site/beer_logos/beer-4133_13fdb_sm.jpeg',
          'beer_style': 'IPA - American',
          'beer_abv': 7,
          'wish_list': false
      }
    ];

  }

  getTopBeerArray(type: string) {
    if (type === 'micro') {
      this.microArr = this.microBeer;
      return this.microArr;
    }
    if (type === 'macro') {
      this.macroArr = this.macroBeer;
      return this.macroArr;
    }
  }

  pushFeedIntoMicroArray(beer: UntappdBeer) {
    return (this.microArr) ? this.microArr.push(beer) : this.microArr = [beer];
  }

  pushFeedIntoMacroArray(beer: UntappdBeer) {
    return (this.macroArr) ? this.macroArr.push(beer) : this.macroArr = [beer];
  }

}
