test('should fail for empty task', () => {
    const value = "";
    const result = value.trim() !== "";
    expect(result).toBe(false);
});

test('should pass for valid task', () => {
    const value = "Study";
    const result = value.trim() !== "";
    expect(result).toBe(true);
});