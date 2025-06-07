function cachingMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let cached: string[] = [];
    let lastUpdated: Date | null = null;

    descriptor.value = function() {
        const currentMoment = new Date()
        if (!lastUpdated || (currentMoment.getTime() - lastUpdated.getTime()) > 5000) {
            const data = originalMethod.call(this);
            cached = data.slice();
            lastUpdated = new Date();
            return data;
        } else {
            console.log(`Returned from cache`);
            return cached;
        }
    }

    return descriptor;
}

class MockWeatherDataService {
    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string){ this.weatherData.push(data);  }
    @cachingMethod
    getWeatherData() { return this.weatherData; }
}


let service = new MockWeatherDataService();
console.log(service.getWeatherData())
console.log(service.getWeatherData())
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData())

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000)
