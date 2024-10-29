import axios from "axios"; // Importing axios for making HTTP requests
import Generate from "./generate"; // Importing the Generate component

// This is an asynchronous function named 'detail' that accepts 'params' as an argument
const Detail = async ({ params }) => {
  // Extracting the 'id' from the 'params' object
  const { id } = params;

  // Logging the id to the console (for debugging purposes)
  console.log("id is " + id);

  try {
    // Making an HTTP GET request to the Imgflip API to get a list of memes
    const res = await axios.get("https://api.imgflip.com/get_memes");

    // Extracting the 'memes' array from the response data
    const memeList = res.data.data.memes;

    // Logging the 'meme' array to the console (for debugging purposes)
    console.log(memeList);

    // Finding the specific meme that matches the 'id' passed in 'params'
    const memeSelected = memeList.find((meme) => meme.id === String(id));

    // If no meme is found, handle the case (optional)
    if (!memeSelected) {
      return <p>Meme not found</p>;
    }

    // Returning a JSX fragment that renders the 'Generate' component
    // Passing the 'memeSelected' object as a prop to the 'Generate' component
    return (
      <>
        <Generate memeSelected={memeSelected} />
      </>
    );
  } catch (error) {
    console.error("Error fetching memes: ", error);
    return <p>Error fetching meme details.</p>;
  }
};

export default Detail;
