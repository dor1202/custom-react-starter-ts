import axios, { AxiosInstance } from 'axios';

class JsonResponse {
    static _instance: JsonResponse;
    
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: `https://jsonplaceholder.typicode.com`,
            timeout: 6000,
            headers: {
                "content-type": "application/json"
            }
        });
        this.setInterceptor();
    }

    setInterceptor() {
        this.instance.interceptors.request.use(
            async (config) => {
                console.log(config);
                return config;
            },
            (error) => {
                Promise.reject(error);
            })
        ;
        this.instance.interceptors.response.use(
            async (config) => {
                console.log(config);
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );
    }

    static getInstance() {
        // Singleton Implementation
        if (JsonResponse._instance === undefined) {
            JsonResponse._instance = new JsonResponse();
        }
        return JsonResponse._instance;
    }
}

export default JsonResponse;