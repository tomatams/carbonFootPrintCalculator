import { useEffect, useState } from "react";
import FetchQuestionData from "../api/useFetchQuestion";
import FootprintForm from "../Components/CarbonFootprintForm/FootprintForm";

const CarbonFootPrintFormPage = () => {
    const [questionList, setQuestionList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await FetchQuestionData()
                .then((json) => setQuestionList(json))
                .then(() => setIsLoading(false));
          }
          fetchData();
      });

      if(isLoading) {
        return (
            <p>No questions to answer or the questions are loading...</p>
        )
      } else {
          return (
              <div>
                   <FootprintForm questionList = {questionList}></FootprintForm>
              </div>
          )
      }
}

export default CarbonFootPrintFormPage;
