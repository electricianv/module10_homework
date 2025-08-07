// Файл: containsDigit.js

/**
 * Проверяет, содержит ли строка хотя бы одну цифру.
 * @param {string} str - Входная строка.
 * @returns {boolean} - true, если цифра найдена, иначе false.
 */
const containsDigit = (str) => {
  // Проверяем, что на входе строка. Если нет, возвращаем false.
  if (typeof str !== 'string') {
    return false;
  }
  // Регулярное выражение для поиска любой цифры
  const digitRegex = /\d/;
  return digitRegex.test(str);
};

// Эта строка делает нашу функцию доступной для других файлов (включая тесты)
module.exports = containsDigit;