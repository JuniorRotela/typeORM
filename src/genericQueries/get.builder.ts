import { getManager } from 'typeorm';

export const getGardenData = async (tableName: string): Promise<any[]> => {
  try {
    const entityManager = getManager();
    const result = await entityManager.query(`SELECT * FROM ${tableName}`);
    return result;
  } catch (error) {
    throw error;
  }
};
