import JsonResponse from '../JsonResponse';

class SampleService{
    static _instance;

    async sampleCall(){
        let api = await JsonResponse.getInstance();
        return await api.instance.get(`/todos/1`);
    }

    static getInstance() {
        // Singleton Implementation
        if (SampleService._instance === undefined) {
            SampleService._instance = new SampleService();
        }
        return SampleService._instance;
    }
}

export default SampleService;