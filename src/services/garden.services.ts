// garden.services.ts
import { getConnection } from "typeorm";
import { generateInsertQuery } from "../genericQueries/insertBuilder";


export async function insertData(tableName: string, data: Record<string, any>): Promise<void> {
  const insertQuery = generateInsertQuery(tableName, data);

  try {
    // Obtiene la conexión actual
    const connection = getConnection();

    // Ejecuta la consulta SQL
    await connection.query(insertQuery);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
}
