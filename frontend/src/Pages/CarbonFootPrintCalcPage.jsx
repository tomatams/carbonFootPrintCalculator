import { useEffect, useState } from "react";
import FetchQuestionData from "../api/useFetchQuestion";
import FootprintForm from "../Components/CarbonFootprintForm/FootprintForm";

const CarbonFootPrintFormPage = () => {
    const [questionList, setQuestionList] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await FetchQuestionData()
                .then((json) => setQuestionList(json));;
          }
          fetchData();
      });

    if(questionList === null){
        return (
            <div>Loading...</div>
        )
    } else {   
        return (
            <FootprintForm questionList = {questionList}></FootprintForm>
        )
    }
}

export default CarbonFootPrintFormPage;
