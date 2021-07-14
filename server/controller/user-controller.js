import User from "../model/userSchema.js";


export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).messagejson({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json(`${user.firstName} has been successfully registered`);
        
    } catch (error) {
        response.json('Error: ', error.message);
    }
}