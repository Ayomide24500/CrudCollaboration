import express, { Request, Response } from "express";
import taskModel from "./model";
export const create = async (req: Request, res: Response) => {
  try {
    const { name, subject, age } = req.body;

    const data = taskModel.create({
      name,
      age,
      subject,
    });
    res.status(201).json({
      message: "Data created",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const read = async (req: Request, res: Response) => {
  try {
    const data = taskModel.find()
    res.status(201).json({
      message: "Data has been read",
      data: data,
    });
  } catch(error) {
    res.status(404).json({
      message: "Error",
    });
  }
};
