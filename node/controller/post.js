export const post = (req, res) =>{
    const data =req.body;


    console.log(data );
    res.send({message:"post request complete.."});

}