test('المريض يقدر يحجز موعد مع دكتور متاح', () => {
    const appointment = {
        patientName: "سارة",
        doctorName: "دكتور أحمد",
        date: "2026-05-15",
        time: "10:00"
    };
    
    // هل الحجز يحتوي على المعلومات المطلوبة؟
    expect(appointment.patientName).toBe("سارة");
    expect(appointment.doctorName).toBe("دكتور أحمد");
    expect(appointment.date).toBe("2026-05-15");
    expect(appointment.time).toBe("10:00");
});

test('المريض ما يقدر يحجز موعد في وقت محجوز', () => {
    // قائمة المواعيد المحجوزة
    const bookedSlots = [
        { doctor: "دكتور أحمد", date: "2026-05-15", time: "10:00" }
    ];
    
    // المريض حاول يحجز نفس الوقت
    const newBooking = { doctor: "دكتور أحمد", date: "2026-05-15", time: "10:00" };
    const isAvailable = !bookedSlots.some(slot => 
        slot.doctor === newBooking.doctor && 
        slot.date === newBooking.date && 
        slot.time === newBooking.time
    );
    
    expect(isAvailable).toBe(false);
});