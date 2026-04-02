import { ErrorRepository } from '../map.js'


describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('translate returns Unknown error for unknown code', () => {
    expect(repo.translate(1)).toBe('Unknown error');
  });


  test('add updates existing code message', () => {
    repo.add(400, 'Bad Request');
    expect(repo.translate(400)).toBe('Bad Request');
    repo.add(404, 'Bad');
    expect(repo.translate(404)).toBe('Bad');
  });

  test('stored messages are strings (non-string inputs are converted)', () => {
    repo.add(1, 12345);
    expect(repo.translate(1)).toBe('12345');

    repo.add(2, null);
    expect(repo.translate(2)).toBe('null');
  });

  test('remove (if implemented) deletes code', () => {
    if (typeof repo.remove === 'function') {
      repo.add(401, 'Unauthorized');
      expect(repo.translate(401)).toBe('Unauthorized');
      repo.remove(401);
      expect(repo.translate(401)).toBe('Unknown error');
    } else {
      repo.add(401, 'Unauthorized');
      expect(repo.translate(401)).toBe('Unauthorized');
    }
  });

  test('is a Map', () => {
    expect(repo.errors instanceof Map).toBe(true);
  });
});