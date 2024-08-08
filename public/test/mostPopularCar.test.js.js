
import { expect } from 'chai';
import { mostPopularCar } from '../mostPopularCar.js';

describe('mostPopularCar', () => {
    it('return the most popular car when there are many cars', () => {
        const cars = ['Toyota', 'Ford', 'Toyota', 'BMW', 'Toyota', 'BMW'];
        const result = mostPopularCar(cars);
        expect(result).to.equal('Toyota');
    });

    it('return null when the input is an empty array', () => {
        const cars = [];
        const result = mostPopularCar(cars);
        expect(result).to.be.null;
    });

    it('return the only car when there is one car in the array', () => {
        const cars = ['Honda'];
        const result = mostPopularCar(cars);
        expect(result).to.equal('Honda');
    });

    it('handle null or undefined input', () => {
        const result = mostPopularCar(null);
        expect(result).to.be.null;

        const result2 = mostPopularCar(undefined);
        expect(result2).to.be.null;
    });
});
