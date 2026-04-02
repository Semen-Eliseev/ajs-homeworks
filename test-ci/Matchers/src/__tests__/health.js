
import { sortedHealth, sortingHealth } from "../health.js";

test('sortedHealth Маг', () => {
    const list = [
        {
            name: 'Маг',
            health: 90
        },
    ];

    const result = sortedHealth(list);
    expect(result).toBe(`healthy`);
});

test('sortedHealth Маг1', () => {
    const list = [
        {
            name: 'Маг1',
            health: 50
        },
    ];

    const result = sortedHealth(list);
    expect(result).toBe(`wounded`);
});

test('sortedHealth Маг2', () => {
    const list = [
        {
            name: 'Маг2',
            health: 10
        },
    ];

    const result = sortedHealth(list);
    expect(result).toBe(`critical`);
});


test('sorts by health descending', () => { 
       const input = [ 
             { name: 'мечник', health: 10 },
             { name: 'маг', health: 100 }, 
             { name: 'лучник', health: 80 },
        ];
    expect(sortingHealth(input)).toEqual([ 
             { name: 'маг', health: 100 }, 
             { name: 'лучник', health: 80 }, 
             { name: 'мечник', health: 10 }
   ]);  
});

test('sorts by health descending', () => { 
       const input = [ 
             { name: 'мечник', health: 10 },
             
        ];
    expect(sortingHealth(input)).toEqual([ 
             
             { name: 'мечник', health: 10 }
   ]);  
});