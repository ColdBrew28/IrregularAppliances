import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService { 
  getFoods(): Food[] {
    return [ 
     
      {
        id: 1,
        title: 'CARRIER 2.5HP INV SPLIT AIRCON',
        price: 65500,
        image: 'assets/images/products/CARRIER.png',
        description:
        'Nominal Size: 2.5HP, Cooling Capacity: 21,600 (4,320 – 24,480), Color: White, Filter: Advanced Nano Filtration System, Energy Efficiency Ratio: 11.7 (18 – 11.7)',

        
      },
      {
        id: 2,
        title: 'PANASONIC 3HP INV SPLIT',
        price: 79095,
        image: 'assets/images/products/PANASONIC.png',
        description:
          'Nominal Size: 3.0 HP, Cooling Capacity: 29,520 kj/h, Filter: Anti-Bacterial Filter, Energy Efficiency Ratio: 12.83,',
      },
      {
        id: 3,
        title: 'SAMSUNG INV FRENCH DOOR',
        price: 139995,
        image: 'assets/images/products/SAMSUNGINV.png',
        description:
          'Tempered Glass Shelves, Fridge Shelf Material, Digital Inverter Technology, Compressor Type, 912 x 1825 x 898 Net Dimensions (WxHxD)',
      },
      {
        id: 4,
        title: 'SAMSUNG 23.2CUFT REFRIGERATOR',
        price: 139995,
        image: 'assets/images/products/SAMSUNGREFRIGERATOR.png',
        description:
          'Type: Side by Side, Smart Function: YES, Capacity, Freezer: 247 Liters, Capacity, Fresh Food: 410 Liters, Capacity, Total Shelf Area: 657 Liters ',
      },
      {
        id: 5,
        title: 'La Germania Gas Cooking Range',
        price: 18995,
        image: 'assets/images/products/LaGermania.png',
        description:
          '1 Large, 2 medium Gas burners, Automatic Piezo Ignition, 100% Porcelain Enamelled white Body, 49 Liters Oven Capacity',
      },
      {
        id: 6,
        title: 'White Westinghouse Gas Cooking Range ',
        price: 17195,
        image: 'assets/images/products/WhiteWestinghouse.png',
        description:
          'Gas Hob with Gas Oven, To Surface: Stainless Steel, 62 L Oven Capacity, 4 Burners, Electric Push Button Ignition, 220-240 Voltage, 50/60Hz Frequency',
      },
      {
        id: 7,
        title: 'SAMSUNG 85 REAL 4K UHD SMART TV',
        price: 134990,
        image: 'assets/images/products/SAMSUNG85.png',
        description:
          'Samsung SMART TV: Smart, Bezel Type: 3 Bezel-less, Stand Type: FLOAT LIFT, Slim Type: Slim look, Operating System :Tizen™, Power Supply: 320 W',
      },
      {
        id: 8,
        title: 'SAMSUNG 98 NEO QLED 4K SMART TV',
        price: 399990,
        image: 'assets/images/products/SAMSUNG98.png',
        description:
          'Display Resolution: 3,840 x 2,160, Picture Engine: Neo Quantum Processor 4K, HDR (High Dynamic Range): Quantum HDR 32x, Viewing Angle: Wide Viewing Angle',
      },
      {
        id: 9,
        title: 'Beko 8.0 kg. Front Load Air Vented Dryer',
        price: 20690,
        image: 'assets/images/products/Beko.png',
        description:
          'Drying Capacity : 8.0 kg., Drying Technology : Air Vented, Noise Level : 67 dBA, Display Type: Digital Display, Number of Programmes: 15, Voltage : 220 V',
      },
      {
        id: 10,
        title: 'Electrolux 7.5 kg. Front Load Dryer',
        price: 21995,
        image: 'assets/images/products/Electrolux.png',
        description:
          'Drying Capacity : 87.5 kg., Drying Technology : Air Vented, Noise Level : 67 dBA, Display Type: Digital Display, Number of Programmes: 15, Voltage : 220 V',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}

