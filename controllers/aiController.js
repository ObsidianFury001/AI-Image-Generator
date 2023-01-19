const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
})
const openai = new OpenAIApi(config);

const GenerateImage = async ( req, res ) => {     
    
    const { prompt, size } = req.body;

    imageSize = size === "Small" ? "256x256" : size === "Medium" ? "512x512" : "1024x1024";
    console.log("Prompt: ", prompt, "\nSize:", size);
    no_of_images = 2;

    try 
    {
        const result = await openai.createImage({
            prompt: prompt,
            n: no_of_images,
            size: imageSize         
        });
        const imageURL = result.data.data[0].url;
        res.status(200).json({
            success: true,
            data: imageURL,
            generatedImage: "Yes",
        });
    } 
    catch (error) {           
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        
        res.status(400).json({
            success: false,
            error: "The image could not be generated...",
            generatedImage: "No"
        });
    }
};

module.exports  = { GenerateImage };