describe('Example Component', () => {
  test('Debe ser mayor a 10', () => {
      // Arreglar
      let value = 11

      // Estimulo
      value = value + 1

      // Observar el resultado
      expect(value).toBeGreaterThan(10)
  });
});