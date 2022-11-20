import {
  autoScheduleShift,
  ShiftRequirement,
  EmployeeWill,
  Employee,
  ShiftResult,
} from './auto-schedule';

describe('Auto schedule shifts', () => {
  const employeeA: Employee = { id: 1, name: 'Robot' };
  const employeeB: Employee = { id: 2, name: 'Warrior' };

  it('Simple data case', () => {
    const morningShift: ShiftRequirement = {
      startAt: new Date('2022-10-30T08:00:00+08:00'),
      hours: 8,
      peopleAcount: 1,
    };
    const nightShift: ShiftRequirement = {
      startAt: new Date('2022-10-30T14:00:00+08:00'),
      hours: 8,
      peopleAcount: 1,
    };
    const shiftRequirements: Array<ShiftRequirement> = [
      morningShift,
      nightShift,
    ];

    const wills: Array<EmployeeWill> = [
      {
        employee: employeeA,
        shifts: [morningShift],
      },
      {
        employee: employeeB,
        shifts: [nightShift],
      },
    ];
    const results = autoScheduleShift(shiftRequirements, wills);
    const expectShiftResults: Array<ShiftResult> = [
      { employee: employeeA, shift: morningShift },
      { employee: employeeB, shift: nightShift },
    ];
    expect(results).toEqual(expectShiftResults);
  });

  it('Employee have multiple wills', () => {
    const morningShift: ShiftRequirement = {
      startAt: new Date('2022-10-30T08:00:00+08:00'),
      hours: 8,
      peopleAcount: 1,
    };
    const nightShift: ShiftRequirement = {
      startAt: new Date('2022-10-30T14:00:00+08:00'),
      hours: 8,
      peopleAcount: 1,
    };
    const shiftRequirements: Array<ShiftRequirement> = [
      morningShift,
      nightShift,
    ];

    const wills: Array<EmployeeWill> = [
      {
        employee: employeeA,
        shifts: [morningShift, nightShift],
      },
      {
        employee: employeeB,
        shifts: [nightShift],
      },
    ];
    const results = autoScheduleShift(shiftRequirements, wills);
    const expectShiftResults: Array<ShiftResult> = [
      { employee: employeeA, shift: morningShift },
      { employee: employeeB, shift: nightShift },
    ];
    expect(results).toEqual(expectShiftResults);
  });
});
