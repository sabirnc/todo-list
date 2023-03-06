import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("tab1");
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const handleClick = (value) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  // adding new task to list
  const addTask = () => {
    const id = item.length + 1;
    setItem((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        taskCompleted: false,
      },
    ]);
    setInput("");
  };

  // complete and uncomplete
  const completeOrNot = (id) => {
    setItem((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, taskCompleted: !task.taskCompleted };
        }
        return task;
      });
    });
  };
  console.log(item);

  return (
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard>
              <MDBCardBody className="p-5">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBInput
                    type="text"
                    id="form1"
                    label="New task..."
                    wrapperClass="flex-fill"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                  />
                  <MDBBtn
                    type="submit"
                    color="info"
                    className="ms-2"
                    onClick={addTask}
                  >
                    Add
                  </MDBBtn>
                </div>
                <MDBTabs className="mb-4 pb-2">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab1")}
                      active={active === "tab1"}
                    >
                      All
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab2")}
                      active={active === "tab2"}
                    >
                      Active
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab3")}
                      active={active === "tab3"}
                    >
                      Completed
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                  <MDBTabsPane show={active === "tab1"}>
                    <MDBListGroup className="mb-0">
                      {item.map((todo) => {
                        return (
                          <MDBListGroupItem
                            key={todo.id}
                            className=" d-flex align-items-center border-0 mb-2 rounded"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            {" "}
                            <MDBCheckbox
                              name="flexCheck"
                              id="flexCheck"
                              className="me-3"
                              onClick={() => completeOrNot(todo.id)}
                            />
                            {todo.taskCompleted ? (
                              <s>{todo.task}</s>
                            ) : (
                              todo.task
                            )}
                          </MDBListGroupItem>
                        );
                      })}
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab2"}>
                    <MDBListGroup className="mb-0">
                      {item.map((prev) => {
                        if (!prev.taskCompleted) {
                          return (
                            <MDBListGroupItem
                              key={prev.id}
                              className=" d-flex align-items-center border-0 mb-2 rounded"
                              style={{ backgroundColor: "#f4f6f7" }}
                            >
                              {" "}
                              <MDBCheckbox
                                name="flexCheck"
                                id="flexCheck"
                                className="me-3"
                              />
                              {prev.task}
                            </MDBListGroupItem>
                          );
                        }
                      })}
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab3"}>
                    <MDBListGroup className="mb-0">
                      {item.map((task) => {
                        if (task.taskCompleted) {
                          return (
                            <MDBListGroupItem
                              key={task.id}
                              className=" d-flex align-items-center border-0 mb-2 rounded"
                              style={{ backgroundColor: "#f4f6f7" }}
                            >
                              {" "}
                              <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheck"
                                className="me-3"
                                defaultChecked
                              />
                              <s>{task.task}</s>
                            </MDBListGroupItem>
                          );
                        }
                      })}
                    </MDBListGroup>
                  </MDBTabsPane>
                </MDBTabsContent>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
