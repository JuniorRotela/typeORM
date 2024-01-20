import { Request, Response } from "express";
import { insertData } from "../services/Insert.services";
import { getGardenData } from "../genericQueries/getBuilder";
import { updateGardenData } from "../genericQueries/updateBuilder";
import Garden from "../interface/garden";
import { getOneGardenData } from "../services/getOne.services";
import { deleteGardenData } from "../services/delete.services";


export const createGarden = async (req: Request, res: Response) => {
  const tableName = "garden"; // Reemplaza con el nombre de tu tabla
  const data: Garden = req.body;
  try {
    // Utiliza el servicio para insertar los datos
    const resp = await insertData(tableName, data);

    res.json({ message: "Data inserted successfully", resp});
  } catch (error) {
    console.error("Error creating garden:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getGarden = async (req: Request, res: Response) => {
  const tableName = "garden"; // Reemplaza con el nombre de tu tabla

  try {
    const gardenData = await getGardenData(tableName);
    res.json(gardenData);
  } catch (error) {
    console.error("Error getting garden data:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateGarden = async (req: Request, res: Response) => {
  const tableName = "garden"; // Reemplaza con el nombre de tu tabla
  // const newData = req.body;
  const newData: Garden = req.body;
  const id = req.params;

  try {
    const resp = await updateGardenData(tableName, newData, id);

    res.json({ message: "Data updated successfully", resp });
  } catch (error) {
    console.error("Error updating garden data:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getOneGarden = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tableName = "garden"; // Reemplaza con el nombre de tu tabla

  try {
    const gardenData = await getOneGardenData(tableName, parseInt(id, 10));

    if (gardenData) {
      res.json(gardenData);
    } else {
      res.status(404).json({ message: "Garden not found" });
    }
  } catch (error) {
    console.error("Error getting garden data:", error);

    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const deleteGarden = async (req: Request, res: Response) => {
  const tableName = "garden"; // Reemplaza con el nombre de tu tabla
  // const newData = req.body;
  const newData: Garden = req.body;
  const id = req.params;

  try {
    await deleteGardenData(tableName, newData, id);

    res.json({ message: "Data delete successfully", newData });
  } catch (error) {
    console.error("Error deleting garden data:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};