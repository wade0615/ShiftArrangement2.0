// Types

export type ShiftRequirement = {
  startAt: Date;
  hours: number;
  peopleAcount: number;
};

export type Employee = {
  id: number;
  name: string;
};

export type EmployeeWill = {
  employee: Employee;
  shifts: Array<ShiftRequirement>;
};

export type ShiftResult = {
  employee?: Employee;
  shift: ShiftRequirement;
};

// Execute

export function autoScheduleShift(
  shifts: Array<ShiftRequirement>,
  wills: Array<EmployeeWill>,
): Array<ShiftResult> {
  const shiftResults: Array<ShiftResult> = [];
  const unscheduledWills = [...wills];

  shifts.forEach((shift) => {
    const firstMatchedIndex = unscheduledWills.findIndex((will) => {
      return will.shifts.includes(shift);
    });
    if (firstMatchedIndex >= 0) {
      shiftResults.push({
        employee: unscheduledWills[firstMatchedIndex].employee,
        shift,
      });
      unscheduledWills.splice(firstMatchedIndex, 1);
    }
  });

  return shiftResults;
}
