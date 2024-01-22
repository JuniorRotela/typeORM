import { Request, Response } from "express";

import { getData} from "../genericQueries/getBuilder";
import { updateGardenData } from "../genericQueries/updateBuilder";
import Garden from "../interface/garden";
import { getOneGardenData } from "../services/getOne.services";
import { deleteGardenData } from "../services/delete.services";
import { insertOwnerData } from "../services/owner/Insert.services";
import Owner from "../interface/owner";


export const createOwner = async (req: Request, res: Response) => {
  const tableName = "owner"; // Reemplaza con el nombre de tu tabla
  const data: Owner = req.body;
  try {
    // Utiliza el servicio para insertar los datos
    const resp = await insertOwnerData(tableName, data);

    res.json({ message: "Data inserted successfully", resp});
  } catch (error) {
    console.error("Error creating garden:", error);

    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getOwner = async (req: Request, res: Response) => {
  const tableName = "owner"; 
  try {
    const ownerData = await getData(tableName);
    res.json(ownerData);
  } catch (error) {
    console.error("Error getting owner data:", error);

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