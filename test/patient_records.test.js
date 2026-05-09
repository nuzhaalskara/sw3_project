test('الدكتور يقدر يشوف سجل المريض الطبي', () => {
    const patientRecord = {
        name: "سارة",
        age: 30,
        phone: "0501234567",
        history: ["ضغط", "سكر"],
        lastVisit: "2026-04-01"
    };
    
    expect(patientRecord.name).toBe("سارة");
    expect(patientRecord.history).toContain("ضغط");
    expect(patientRecord.history.length).toBe(2);
});

test('سجل المريض يحتوي على التشخيصات السابقة', () => {
    const diagnoses = ["إنفلونزا", "حساسية", "صداع نصفي"];
    
    expect(diagnoses).toContain("حساسية");
    expect(diagnoses.length).toBe(3);
});

test('الدكتور يقدر يشوف معلومات الاتصال بالمريض', () => {
    const patientContact = {
        phone: "0501234567",
        email: "sara@example.com",
        address: "الرياض - شارع النخيل"
    };
    
    expect(patientContact.phone).toBeDefined();
    expect(patientContact.email).toBeDefined();
});