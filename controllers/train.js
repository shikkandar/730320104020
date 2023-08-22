import trainDetails from "../model/trainSchema.js";
class authenticate {
    static registerUser = (req, res) => {
       res.send('I am register');
    }
    static  authenticateUser = (req, res) => {
        res.send('I am authenticate');
    }
    static showAllTrains = async (req, res) => {
        try {
            const trains = await trainDetails.find(); // Retrieve all trains from the MongoDB collection
            console.log(trains);
            // Send the retrieved data as JSON to the frontend
            res.json(trains);
          } catch (error) {
            res.status(500).json({ error: 'Error fetching data' });
          }
    }
    
    static showOneTrain = (req, res) => {
        // let id = req.params.id;
        // console.log(id);
        // res.send(`I am a train with id: ${id}`);
    }
}

export default authenticate;