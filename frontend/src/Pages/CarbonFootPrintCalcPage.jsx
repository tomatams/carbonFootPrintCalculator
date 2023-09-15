import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backendRoutes from "../api/backendRoutes";
import FetchQuestionData from "../api/useFetchQuestion";
import FootprintForm from "../Components/CarbonFootprintForm/FootprintForm";

const CarbonFootPrintFormPage = () => {
    const navigate = useNavigate();
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

      async function handleSubmit(data){
        setIsLoading(true);
        await postCompletedQuestions(data)
        .then(() => {
            navigate("/");
        })
        .catch((err) => {
          throw (err);
        })
        .finally(() => {
            setIsLoading(false);
        })
      }

      if(isLoading) {
        return (
            <p>The questions are loading...</p>
        )
      } else {
          return (
              <div>
                   <FootprintForm onSubmit = {handleSubmit}questionList = {questionList}></FootprintForm>
              </div>
          )
      }
}

const postCompletedQuestions = async (data) => {
    console.log(data);
    const res = await fetch(backendRoutes.postCompletedQuestion, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};

export default CarbonFootPrintFormPage;
