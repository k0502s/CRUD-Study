import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);//초기값 설정
  const [submitted, setSubmitted] = useState(false);//초기값 설정




//////글 생성하기///////


//폼 값이 적히면 event 발생하며 발생한 폼의 name과 value 값이
//setTutorial의 각각 키값과 데이터값으로 지정된다.
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

//폼에 적힌 데이터를 saveTutorial의 date 변수의 객체에 담긴 state의 데이터인 initialTutorialState에 저장함.
  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description
    };
    
//서버로 create 생성을 위한 데이터 새로 구성한 변수 data의 객체 데이터를 보내어 새로운 state(initialTutorialState) 객체 값 받음 
    TutorialDataService.create(data)
      .then(response => {
        setTutorial({ //state(initialTutorialState)의 변수
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };






/////초기화////////


//submit 후 다시 초기의 state로 초기화
  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
