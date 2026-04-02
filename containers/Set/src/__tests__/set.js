class Character {
  constructor(name) {
    this.name = name;
  }
}


describe('Team', () => {
  let team;
  let jeck;
  let mary;
  let clonejeck;

  beforeEach(() => {
    team = new Team();
    jeck = new Character('jeck');
    clonejeck = new Character('jeck');
    mary = new Character('mary');
    
  });

  test('add adds a character', () => {
    team.add(jeck);
    expect(team.toArray()).toContain(jeck);
    expect(team.toArray()).toHaveLength(1);
  });

  test('add throws when adding duplicate (same object)', () => {
    team.add(jeck);
    expect(() => team.add(jeck)).toThrow('Character in team');
  });

  test('add does not treat different objects with same data as duplicates', () => {
    team.add(jeck);
    expect(() => team.add(clonejeck)).not.toThrow();
    expect(team.toArray()).toHaveLength(2);
    expect(team.toArray()).toEqual(expect.arrayContaining([jeck, clonejeck]));
  });

  test('addAll adds multiple characters', () => {
    team.addAll([jeck, mary]);
    const arr = team.toArray();
    expect(arr).toHaveLength(2);
    expect(arr).toEqual(expect.arrayContaining([jeck, mary]));
  });


  test('toArray returns a new array (not the internal Set)', () => {
    team.add(jeck);
    const arr = team.toArray();
    arr.push(mary);
    expect(team.toArray()).toEqual([jeck]);
  });


});