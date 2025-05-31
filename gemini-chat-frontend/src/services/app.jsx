import axios from "axios";
const API_URL = "http://localhost:8080/api/qna/ask"
export const fetchChatResponse = async (question) => {
    try {
        console.log('Sending question:', question);
        const response = await axios.post(API_URL, { question }); // Send as an object
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}