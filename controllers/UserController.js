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
      const user = await User.findOne({ _id: req.params.id});
      console.log(user)
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

UserController.rentMovie = async (req, res) => {
   try {
      const user = await User.updateOne(
         { _id: req.params.id },
         { $push: { movies: req.params.movie } }
       );
      return res.status(200).json({
         success: true,
         message: "Movie rented",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error renting movies",
         error: error.message,
      });
   }
};

UserController.rentAllMovie = async (req, res) => {
   try {

      const user = await User.updateOne(
         { _id: req.params.id },
         { movies: req.body.movies }
       );
      return res.status(200).json({
         success: true,
         message: "Movie rented",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error renting movies",
         error: error.message,
      });
   }
};

UserController.deleteMovie = async (req, res) => {
   try {
      const userinfo = await User.findOne({ _id: req.params.id});
      const index = userinfo.movies.indexOf(req.params.id);
      let movieDelete;
      if(userinfo.movies.length > 1){
         movieDelete = userinfo.movies.splice(index,1)
      }
      else{
         movieDelete = userinfo.movies.splice(index,0)
      }
      const user = await User.updateOne(
         { _id: req.params.id },
         { movies: movieDelete }
       );
      const userinfo2 = await User.findOne({ _id: req.params.id});
      return res.status(200).json({
         success: true,
         message: "Movie rented",
         results: user,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error renting movies",
         error: error.message,
      });
   }
};

export default UserController;
