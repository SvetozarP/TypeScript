type carBody = {material: string, state: string};
type tires = {airPressure: number, condition: string};
type engine = {horsepower: number, oilDensity: number};

type AdditionalComponents = {
    partName: string,
    runDiagnostics: (this: {partName: string}) => string;
};

function runDiagnostics(this: {partName: string}): string {
    return this.partName;
};

function createCar(
    carBodyType: carBody & AdditionalComponents,
    tiresType: tires & AdditionalComponents,
    engineType: engine & AdditionalComponents,
) {
    
    console.log(carBodyType, carBodyType.runDiagnostics());
    console.log(tiresType, tiresType.runDiagnostics());
    console.log(engineType, engineType.runDiagnostics());
};

createCar(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);