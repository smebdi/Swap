export interface RateBrewery {
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
  

  /*

// Statically check during runtime

let obj: any = null;
export class RateBreweryProxy {
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
    checkString(d.type, false, field + ".type");
    checkString(d.streetAddress, false, field + ".streetAddress");
    checkString(d.city, false, field + ".city");
    d.state = StateProxy.Create(d.state, field + ".state");
    checkString(d.zip, false, field + ".zip");
    checkString(d.phone, false, field + ".phone");
    checkString(d.imageUrl, false, field + ".imageUrl");
    checkNumber(d.score, false, field + ".score");
    checkBoolean(d.isRetired, false, field + ".isRetired");
    return new RateBreweryProxy(d);
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

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
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
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}


  */