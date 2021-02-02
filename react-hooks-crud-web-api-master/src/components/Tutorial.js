import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";

const Tutorial = props => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);// 초기값 설정
  const [message, setMessage] = useState("");




  /////업데이트 폼 페이지 등장시 업데이트 하려는 폼 값이 보이도록 데이터 가져오기/////


 // porps을 이용하여 업데이트 하려는 원래의 폼 값의 id값 가져오기
 useEffect(() => {
  getTutorial(props.match.params.id);
}, [props.match.params.id]);


//서버에 업데이트 하려는 원래의 폼 값의 id값을 보내어 분별 후 id값에 해당하는 데이터 가져와 state 값에 추가시킴.
  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };




//////폼 값 state에 추가//////


//event 발생시 state 객체인 setCurrentTutorial에 받은 폼 값 삽입시킴.
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };







///////////pubilshed 업데이트//////////////


//status 매개변수로 true false 값을 받아 판별하여 데이터의 published 키 값의 값을 (true or false)설정한다.
//그리고 나머지 업데이트를 위한 폼 값 또한 data 변수의 객체로 담아준다.
  const updatePublished = status => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };
//업데이트 하려는 데이터가 담긴 data 변수와 현재 데이터 id 값을 서버에 보내어 업데이트를 요청해줌.
    TutorialDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });//서버에서 업데이트 한 state 객체 값 받아옴
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };




///////업데이트//////// 


//state 값의 해당하는 id 값과  published까지 업데이트 된 state 값(currentTutorial)과 함께 서버로 보내어 업데이트 시킨다.
  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };





  //////삭제하기////////


  //state 값의 해당하는 id 값을 서버로 보내어 삭제시킨다.
  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
