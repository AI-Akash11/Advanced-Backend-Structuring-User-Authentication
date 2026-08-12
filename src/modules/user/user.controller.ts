import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  // console.log(req.body);

//   const { name, email, password, age } = req.body;

  try {
    const result = await userService.createUserIntoDB(req.body)
    // console.log(result)

    res.status(201).json({
      success: true,

      message: "User created successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
      error,
    });
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {

    const result = await userService.getAllUsersFromDB()

    res.status(200).json({
      success: true,
      message: "users retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  //  console.log(id)

  try {

    const result = await userService.getSingleUserFromDB(id as string)

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "user retrived successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

//   const { name, password, age, is_active } = req.body;

  // console.log(id,name,password,age,is_active);

  try {
    const result = await userService.updateUserFromDB(id as string, req.body)

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "user updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}

const deleteUser = async(req: Request, res: Response)=>{
  const id = req.params.id;

  try {

    const result = await userService.deleteUserFromDB(id as string)

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "user deleted successfully"
    });
  } catch (error: any) {
        res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
}



export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}