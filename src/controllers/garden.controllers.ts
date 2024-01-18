import { Request, Response } from "express";
import { insertData } from "../services/garden.services";

export const createGarden = async (req: Request, res: Response) => {
  const tableName = 'garden'; // Reemplaza con el nombre de tu tabla
  const data = req.body;

  try {
    // Utiliza el servicio para insertar los datos
    await insertData(tableName, data);

    res.json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error creating garden:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
