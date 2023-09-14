import backendRoutes from "./backendRoutes";

export default async function FetchQuestionData() {
    const url = backendRoutes.getAllQuestions;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Fetch failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}