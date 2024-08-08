
export function mostPopularCar(cars) {
    if (!cars || cars.length === 0) return null;
    
    const carCount = cars.reduce((acc, car) => {
        acc[car] = (acc[car] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(carCount).reduce((a, b) => carCount[a] > carCount[b] ? a : b);
}
