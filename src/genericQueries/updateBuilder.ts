import { getManager } from 'typeorm';

export const updateGardenData = async (tableName: string, newData: any, id: any): Promise<void> => {
  try {
    const entityManager = getManager();
    
    // Extrae el timestamp de entrada de newData
    const entradaTimestamp = newData.entrada;

    // Convierte el timestamp a una fecha en el formato deseado
    const entradaDate = new Date(entradaTimestamp * 1000);
    const formattedEntrada = entradaDate.toISOString().replace('T', ' ').slice(0, -1);

    // Aquí asumimos que newData tiene un campo 'id' que se utilizará para identificar el registro a actualizar
    const { update_at = new Date(), entrada: originalEntrada, ...updateData } = newData;
    
    // Asigna el valor formateado de la entrada en lugar del valor original
    const entrada = formattedEntrada;
    
    const id_u = id;

    // Realiza la actualización en la base de datos con los valores formateados
    await entityManager.update(tableName, id_u, { ...updateData, update_at, entrada });
  } catch (error) {
    throw error;
  }
};
