import { AxiosResponse } from 'axios';

const AwaitHandling = async (request: Promise<AxiosResponse<any, any>>): Promise<[AxiosResponse | null, any]> => {
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