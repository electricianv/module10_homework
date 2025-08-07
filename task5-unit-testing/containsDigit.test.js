// Файл: containsDigit.test.js

// 1. Импортируем нашу функцию, которую будем тестировать
const containsDigit = require('./containsDigit.js');

// 2. describe - это группа тестов, которая объединяет проверки для одной функции
describe('Тестирование функции containsDigit', () => {

  // Тест №1: Проверка на успешное выполнение (когда цифры есть)
  test('должна возвращать true для строк, содержащих цифры', () => {
    // expect(ВЫЗОВ_ФУНКЦИИ).toBe(ОЖИДАЕМЫЙ_РЕЗУЛЬТАТ);
    expect(containsDigit('abc1def')).toBe(true);
    expect(containsDigit('2abcdef')).toBe(true);
    expect(containsDigit('12345')).toBe(true);
    expect(containsDigit('пароль!@#123')).toBe(true);
  });

  // Тест №2: Проверка на неуспешное выполнение (когда цифр нет)
  test('должна возвращать false для строк без цифр', () => {
    expect(containsDigit('abcdef')).toBe(false);
    expect(containsDigit('!@#$%^&*()')).toBe(false);
    expect(containsDigit('')).toBe(false);
  });

  // Тест №3: Проверка на граничные случаи (некорректные данные)
  test('должна возвращать false для не-строковых входных данных', () => {
    expect(containsDigit(123)).toBe(false);
    expect(containsDigit(null)).toBe(false);
    expect(containsDigit(undefined)).toBe(false);
    expect(containsDigit({})).toBe(false);
    expect(containsDigit([])).toBe(false);
  });
  
});