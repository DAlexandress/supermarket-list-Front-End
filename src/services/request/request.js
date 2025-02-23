import { api } from "../api";

export const getList = async () => {
  try {
    const result = await api.get("/List-items");
    return result.data;
  } catch (error) {}
};
