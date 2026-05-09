test('الأدمن يقدر يضيف دكتور جديد', () => {
    // دكتور جديد
    const newDoctor = { name: "دكتور أحمد", specialty: "قلب" };
    
    // قائمة الأطباء الحاليين (فاضية)
    const doctorsList = [];
    
    // الأدمن يضيف الدكتور
    doctorsList.push(newDoctor);
    
    // هل القائمة صارت فيها دكتور واحد؟
    expect(doctorsList.length).toBe(1);
});

test('الأدمن يقدر يحذف مريض', () => {
    // قائمة المرضى
    let patientsList = [
        { id: 1, name: "سارة" },
        { id: 2, name: "فاطمة" }
    ];
    
    // الأدمن يحذف المريض رقم 1 (سارة)
    patientsList = patientsList.filter(patient => patient.id !== 1);
    
    // هل بقي مريض واحد فقط؟
    expect(patientsList.length).toBe(1);
    // هل اسم المتبقي "فاطمة"؟
    expect(patientsList[0].name).toBe("فاطمة");
});