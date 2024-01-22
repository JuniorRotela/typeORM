import { getManager } from 'typeorm';

export const updateGardenData = async (tableName: string, newData: any, id: any): Promise<void> => {
  try {
    const entityManager = getManager();
    
    // Extrae el timestamp de entrada de newData
    const entradaTimestamp = newData.entrada;
    const salidaTimestamp = newData.salida;
   
    // Convierte el timestamp a una fecha en el formato deseado
    const entradaDate = new Date(entradaTimestamp * 1000);
    const formattedEntrada = isValidDate(entradaDate) ? entradaDate.toISOString().replace('T', ' ').slice(0, -1) : null;

    const salidaDate = new Date(salidaTimestamp * 1000);
    const formattedSalida = isValidDate(salidaDate) ? salidaDate.toISOString().replace('T', ' ').slice(0, -1) : null;

    // Aquí asumimos que newData tiene un campo 'id' que se utilizará para identificar el registro a actualizar
    const { update_at = new Date(),
       entrada: originalEntrada,
       salida: originalSalida,
        ...updateData } = newData;
    
    // Asigna el valor formateado de la entrada en lugar del valor original si es válido
    const entrada = formattedEntrada || originalEntrada;
    const salida = formattedSalida || originalSalida;
    
    const id_u = id;

    // Realiza la actualización en la base de datos con los valores formateados
    await entityManager.update(tableName, id_u, { ...updateData, update_at, entrada, salida });
  } catch (error) {
    throw error;
  }
};

// Función para verificar si una fecha es válida
function isValidDate(date: Date) {
  return !isNaN(date.getTime());
}
