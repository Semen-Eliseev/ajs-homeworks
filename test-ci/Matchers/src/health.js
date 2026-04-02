
export function sortedHealth(items) {
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


export function sortingHealth(items) {
    if (items.length >1) {
       const sorted = items.sort((a, b) => b.health - a.health);
       return sorted;
    }else {
        return items;
    }

}; 