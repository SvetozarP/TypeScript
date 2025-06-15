export function decorator1<T extends { new(...args: any[]): any }>(OriginalClass: T) {
  return class extends OriginalClass {
    // Assuming the original constructor has (price: number, roomNumber: string)
    private _price: number;

    constructor(...args: any[]) {
      super(...args);
      this._price = args[0]; // price parameter from constructor
    }

    get totalPrice(): number {
      return this._price * 1.2;
    }

    get cancellationPrice(): number {
      return this._price * 1.2;
    }
  }
}

// If needed to be done through method decorators:

export function decorator2(  
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // const originalGetter = descriptor.get!;
  // descriptor.get = function () {
  //   const basePrice = originalGetter.call(this);
  //   return basePrice * 1.2;
  // };
}
export function decorator3(  
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // const originalGetter = descriptor.get!;
  // descriptor.get = function () {
  //   const basePrice = originalGetter.call(this);
  //   return basePrice * 1.2;
  // };
}

// Could not think of implementation. Can be used for logging purposes
export function decorator4(target: Object, propertyKey: string | symbol, parameterIndex: number): void {}

export function decorator5<T extends abstract new (...args: any[]) => any>(Base: T) {
  abstract class Extended extends Base {
    static MotelName = "Monthly Motel";
  }
  return Extended;
}