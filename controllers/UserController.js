import User from "../models/User.js";

const UserController = {};

UserController.getAll = async (req, res) => {
   try {
      const users = await User.find();

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         results: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.getInfo = async (req, res) => {
   try {
      const user = await User.findOne({ email: req.params.email});
      return res.status(200).json({
         success: true,
         message: "Get user info retrieved succsessfully",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

export default UserController;
