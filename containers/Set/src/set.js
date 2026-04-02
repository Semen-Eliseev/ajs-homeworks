export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Character in team');
        };
        this.members.add(character);
    };



    addAll(characters) {
        for (const character of characters) {
            if (this.members.has(character)) {
                throw new Error('Character already in team');
            };
        };
        for (const character of characters) {
            this.members.add(character);
        };
    };

    toArray() {
        return Array.from(this.members);
    };
};


