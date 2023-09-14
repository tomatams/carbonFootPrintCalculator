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

      function isLoaded(){
        return questionList === null || questionList.length === 0;
      }

        return (
            <div>
                {isLoaded? <p>No questions to answer or the questions are loading...</p> : <FootprintForm questionList = {questionList}></FootprintForm>}
            </div>
        )
    
}

export default CarbonFootPrintFormPage;
