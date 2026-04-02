
/*

export default function getStatusHealth(health) {
    if(health > 50) {
        return 'healthy';
    }
    if(health > 15 && health <= 50) {
        return 'wounded';
    }
    if(health < 15) {
        return 'critical';
    }
};
*/

export function getStatusHealth(items) {
    let status = '';
    for (let i =0; i < items.length; i++) {
        if(items[i].health > 50) {
            return 'healthy';
        }
        if(items[i].health > 15 && items[i].health <= 50) {
           return  'wounded';
        }
        if(items[i].health < 15) {
           return  'critical';
        }

    }
    
}