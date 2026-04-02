
import { getStatusHealth } from "../health.js";
/*test('getStatusHealth', () => {
    const result = getStatusHealth(50);
    expect(result).toBe('wounded');
});

const dataList = [
    ['Маг1', 90, `healthy`],
    ['Маг2', 40, `wounded`],
    ['Маг3', 0, `critical`],
  
];

const handler = test.each(dataList);

handler('testing getting status function with %s name and %i health', (name, health, expected) => {
    const result = getStatusHealth(health);
    expect(result).toBe(expected);
});
*/
test('getStatusHealth Маг', () => {
    const list = [
        {
            name: 'Маг',
            health: 90
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`healthy`);
});

test('getStatusHealth Маг1', () => {
    const list = [
        {
            name: 'Маг1',
            health: 50
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`wounded`);
});

test('getStatusHealth Маг2', () => {
    const list = [
        {
            name: 'Маг2',
            health: 10
        },
    ];

    const result = getStatusHealth(list);
    expect(result).toBe(`critical`);
});
