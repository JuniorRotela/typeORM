// garden.services.ts
import { getConnection } from "typeorm";
import { generateInsertQuery } from "../genericQueries/insertBuilder";

export async function insertData(tableName: string, data: Record<string, any>): Promise<any> {
  // Extrae la entrada (timestamp) de los datos
  const entradaTimestamp = data.entrada;
  const salidaTimestamp = data.salida;

  // Convierte el timestamp a una fecha
  const entradaDate = new Date(entradaTimestamp * 1000); // Multiplica por 1000 para convertir a milisegundos
  const salidaDate = new Date(salidaTimestamp * 1000);

  // Formatea la fecha y hora en el formato deseado (YYYY-MM-DD HH:mm:ss.SSS)
  const formattedEntrada = entradaDate.toISOString().replace('T', ' ').slice(0, -1);
  const formattedSalida = salidaDate.toISOString().replace('T', ' ').slice(0, -1);

  // Crea una copia de los datos con la entrada actualizada
  const datosActualizados = { ...data,
     entrada: formattedEntrada,
     salida: formattedSalida
    };

  const insertQuery = generateInsertQuery(tableName, datosActualizados);

  try {
    // Obtiene la conexión actual
    const connection = getConnection();

    // Ejecuta la consulta SQL y obtiene el resultado de la inserción
    const result = await connection.query(`${insertQuery} RETURNING *`);
    const insertedData = result[0];

    console.log("Data inserted successfully:", insertedData);

    return insertedData;

  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
}
