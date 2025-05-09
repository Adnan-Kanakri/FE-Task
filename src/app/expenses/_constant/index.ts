export const enum ExpenseStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
}

export const ExpenseStatusOption = [
  {
    label: "Pending",
    value: ExpenseStatus.PENDING,
  },
  {
    label: "Approved",
    value: ExpenseStatus.APPROVED,
  },
  {
    label: "Rejected",
    value: ExpenseStatus.REJECTED,
  },
];
