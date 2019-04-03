/*
  This section is required to define each of the models for data types.
  Angular requires that these are strongly typed. If you are getting a response back
  from a server, it's an enforced best-practice to create a data type, rather than
  manually call any properties on the response.
*/

// ratebeer response wrapper to extract array of beer items
export interface RateBeerExtract {
  data: {
    beerSearch: {
      items: [
        RateBeer
      ]
    }
  };
}
export interface RateBeer {
  id: string;
  name: string;
  description: string;
  brewer: Brewer;
  contractBrewer?: null;
  abv: number;
  ibu: number;
  calories: number;
  labels?: (string)[] | null;
  seasonal: string;
  style: Style;
  styleScore: number;
  overallScore: number;
  averageRating: number;
  realAverage?: number;
  ratingCount: number;
  imageUrl: string;
  availability: Availability;
  purchase?: null;
  confidence?: null;
  likes?: number;
}


export interface Brewer {
  id: string;
  name: string;
  description: string;
  type: string;
  streetAddress: string;
  city: string;
  state: State;
  zip: string;
  phone: string;
  imageUrl: string;
  score: number;
  isRetired: boolean;
}
export interface State {
  name: string;
}
export interface Style {
  name: string;
  description: string;
  glasses?: (GlassesEntity)[] | null;
}
export interface GlassesEntity {
  name: string;
  description: string;
}
export interface Availability {
  bottle: string;
  tap: string;
  distribution: string;
}
  
  /*

// Statically check during runtime

let obj: any = null;
export class RateBreweryProxy {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly brewer: BrewerProxy;
  public readonly contractBrewer: null;
  public readonly abv: number;
  public readonly ibu: number;
  public readonly calories: number;
  public readonly labels: null[] | null;
  public readonly seasonal: string;
  public readonly style: StyleProxy;
  public readonly styleScore: number;
  public readonly overallScore: number;
  public readonly averageRating: number;
  public readonly realAverage: null;
  public readonly ratingCount: number;
  public readonly imageUrl: string;
  public readonly availability: AvailabilityProxy;
  public readonly purchase: null;
  public readonly confidence: null;
  public static Parse(d: string): RateBreweryProxy {
    return RateBreweryProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RateBreweryProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.id, false, field + ".id");
    checkString(d.name, false, field + ".name");
    checkString(d.description, false, field + ".description");
    d.brewer = BrewerProxy.Create(d.brewer, field + ".brewer");
    checkNull(d.contractBrewer, field + ".contractBrewer");
    if (d.contractBrewer === undefined) {
      d.contractBrewer = null;
    }
    checkNumber(d.abv, false, field + ".abv");
    checkNumber(d.ibu, false, field + ".ibu");
    checkNumber(d.calories, false, field + ".calories");
    checkArray(d.labels, field + ".labels");
    if (d.labels) {
      for (let i = 0; i < d.labels.length; i++) {
        checkNull(d.labels[i], field + ".labels" + "[" + i + "]");
        if (d.labels[i] === undefined) {
          d.labels[i] = null;
        }
      }
    }
    if (d.labels === undefined) {
      d.labels = null;
    }
    checkString(d.seasonal, false, field + ".seasonal");
    d.style = StyleProxy.Create(d.style, field + ".style");
    checkNumber(d.styleScore, false, field + ".styleScore");
    checkNumber(d.overallScore, false, field + ".overallScore");
    checkNumber(d.averageRating, false, field + ".averageRating");
    checkNull(d.realAverage, field + ".realAverage");
    if (d.realAverage === undefined) {
      d.realAverage = null;
    }
    checkNumber(d.ratingCount, false, field + ".ratingCount");
    checkString(d.imageUrl, false, field + ".imageUrl");
    d.availability = AvailabilityProxy.Create(d.availability, field + ".availability");
    checkNull(d.purchase, field + ".purchase");
    if (d.purchase === undefined) {
      d.purchase = null;
    }
    checkNull(d.confidence, field + ".confidence");
    if (d.confidence === undefined) {
      d.confidence = null;
    }
    return new RateBreweryProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
    this.description = d.description;
    this.brewer = d.brewer;
    this.contractBrewer = d.contractBrewer;
    this.abv = d.abv;
    this.ibu = d.ibu;
    this.calories = d.calories;
    this.labels = d.labels;
    this.seasonal = d.seasonal;
    this.style = d.style;
    this.styleScore = d.styleScore;
    this.overallScore = d.overallScore;
    this.averageRating = d.averageRating;
    this.realAverage = d.realAverage;
    this.ratingCount = d.ratingCount;
    this.imageUrl = d.imageUrl;
    this.availability = d.availability;
    this.purchase = d.purchase;
    this.confidence = d.confidence;
  }
}

export class BrewerProxy {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly type: string;
  public readonly streetAddress: string;
  public readonly city: string;
  public readonly state: StateProxy;
  public readonly zip: string;
  public readonly phone: string;
  public readonly imageUrl: string;
  public readonly score: number;
  public readonly isRetired: boolean;
  public static Parse(d: string): BrewerProxy {
    return BrewerProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BrewerProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.id, false, field + ".id");
    checkString(d.name, false, field + ".name");
    checkString(d.description, false, field + ".description");
    checkString(d.type, false, field + ".type");
    checkString(d.streetAddress, false, field + ".streetAddress");
    checkString(d.city, false, field + ".city");
    d.state = StateProxy.Create(d.state, field + ".state");
    checkString(d.zip, false, field + ".zip");
    checkString(d.phone, false, field + ".phone");
    checkString(d.imageUrl, false, field + ".imageUrl");
    checkNumber(d.score, false, field + ".score");
    checkBoolean(d.isRetired, false, field + ".isRetired");
    return new BrewerProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
    this.description = d.description;
    this.type = d.type;
    this.streetAddress = d.streetAddress;
    this.city = d.city;
    this.state = d.state;
    this.zip = d.zip;
    this.phone = d.phone;
    this.imageUrl = d.imageUrl;
    this.score = d.score;
    this.isRetired = d.isRetired;
  }
}

export class StateProxy {
  public readonly name: string;
  public static Parse(d: string): StateProxy {
    return StateProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StateProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    return new StateProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
  }
}

export class StyleProxy {
  public readonly name: string;
  public readonly description: string;
  public readonly glasses: GlassesEntityProxy[] | null;
  public static Parse(d: string): StyleProxy {
    return StyleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StyleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    checkString(d.description, false, field + ".description");
    checkArray(d.glasses, field + ".glasses");
    if (d.glasses) {
      for (let i = 0; i < d.glasses.length; i++) {
        d.glasses[i] = GlassesEntityProxy.Create(d.glasses[i], field + ".glasses" + "[" + i + "]");
      }
    }
    if (d.glasses === undefined) {
      d.glasses = null;
    }
    return new StyleProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
    this.description = d.description;
    this.glasses = d.glasses;
  }
}

export class GlassesEntityProxy {
  public readonly name: string;
  public readonly description: string;
  public static Parse(d: string): GlassesEntityProxy {
    return GlassesEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): GlassesEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    checkString(d.description, false, field + ".description");
    return new GlassesEntityProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
    this.description = d.description;
  }
}

export class AvailabilityProxy {
  public readonly bottle: string;
  public readonly tap: string;
  public readonly distribution: string;
  public static Parse(d: string): AvailabilityProxy {
    return AvailabilityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AvailabilityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.bottle, false, field + ".bottle");
    checkString(d.tap, false, field + ".tap");
    checkString(d.distribution, false, field + ".distribution");
    return new AvailabilityProxy(d);
  }
  private constructor(d: any) {
    this.bottle = d.bottle;
    this.tap = d.tap;
    this.distribution = d.distribution;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}

  */