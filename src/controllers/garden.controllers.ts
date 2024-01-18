import { Request, Response } from "express";
import { insertData } from "../services/garden.services";
import { getGardenData } from "../genericQueries/get.builder";


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



export const getGarden = async (req: Request, res: Response) => {
  const tableName = 'garden'; // Reemplaza con el nombre de tu tabla

  try {
    const gardenData = await getGardenData(tableName);
    res.json(gardenData);
  } catch (error) {
    console.error('Error getting garden data:', error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateGarden = async (req: Request, res: Response) => {
  
};
