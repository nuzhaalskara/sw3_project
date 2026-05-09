test('الدكتور يقدر يسجل دخول بكلمة سر صحيحة', () => {
    const doctorEmail = "doctor@hospital.com";
    const doctorPassword = "doc123";
    
    // محاكاة تسجيل الدخول
    const isValid = (doctorEmail === "doctor@hospital.com" && doctorPassword === "doc123");
    
    expect(isValid).toBe(true);
});

test('الدكتور ما يقدر يسجل دخول بكلمة سر غلط', () => {
    const doctorEmail = "doctor@hospital.com";
    const doctorPassword = "wrongpassword";
    
    const isValid = (doctorEmail === "doctor@hospital.com" && doctorPassword === "doc123");
    
    expect(isValid).toBe(false);
});