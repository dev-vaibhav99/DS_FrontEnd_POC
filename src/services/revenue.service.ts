import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/revenue";

interface Item {
  id: number;
  name: string;
  // Add other properties here
}

interface AddRevenueCategory {
  name: string;
}

interface CourseFees {
  userId: number;
  studentId: number;
  revenueCategoryId: number;
  amount: number;
  totalFees: number;
  paidFees: number;
  balanceFees: number;
}

interface OtherIncome {
  userId: number;
  revenueCategoryId: number;
  amount: number;
}

interface MentorSalaryExpense {
  revenueCategoryId: number;
  amount: number;
  mentorId: number;
  remark: string;
}

interface OtherExpense {
  revenueCategoryId: number;
  amount: number;
  remark: string;
}

const apiService = {
  getAllRevenueCategories: (): Promise<any> => axios.get(`${BASE_URL}/`),

  getRevenueCategoryById: (id: number): Promise<any> =>
    axios.get(`${BASE_URL}/category/${id}`),

  createRevenueCategory: (
    revenueCategoryData: AddRevenueCategory
  ): Promise<any> =>
    axios
      .post(`${BASE_URL}/add`, revenueCategoryData)
      .then((response) => console.log(response))
      .catch((error) => console.error(error)),

  updateRevenueCategory: (
    id: number,
    revenueCategoryData: Item
  ): Promise<any> => axios.put(`${BASE_URL}/update/${id}`, revenueCategoryData),

  deleteRevenueCategoryById: (id: number): Promise<any> =>
    axios.delete(`${BASE_URL}/delete/${id}`),

  addCourseFeesIncomeDetails: (incomeDetails: CourseFees): Promise<any> =>
    axios.post(`${BASE_URL}/payment`, incomeDetails),

  addOtherIncomeDetails: (incomeDetails: OtherIncome): Promise<any> =>
    axios.post(`${BASE_URL}/payment`, incomeDetails),

  getAllIncomeDetails: (): Promise<any> => axios.get(`${BASE_URL}/income`),

  getIncomeDetailsById: (id: number): Promise<any> =>
    axios.get(`${BASE_URL}/income/${id}`),

  addMentorFeesExpense: (expenseDetails: MentorSalaryExpense): Promise<any> =>
    axios.post(`${BASE_URL}/expense`, expenseDetails),

  addOtherExpense: (expenseDetails: OtherExpense): Promise<any> =>
    axios.post(`${BASE_URL}/expense`, expenseDetails),

  getAllExpenseDetails: (): Promise<any> => axios.get(`${BASE_URL}/expenses`),

  getExpenseDetailsById: (id: number): Promise<any> =>
    axios.get(`${BASE_URL}/expense/${id}`),
};

export default apiService;
