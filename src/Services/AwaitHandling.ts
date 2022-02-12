const AwaitHandling = async (request: any)=> {
    try {
        const data = await request;
        return [data, null];
    }
    catch (err) {
        console.error(err);
        return [null, err];
    }
};

// Will create a tuple response, hide the try catch hell
export default AwaitHandling;