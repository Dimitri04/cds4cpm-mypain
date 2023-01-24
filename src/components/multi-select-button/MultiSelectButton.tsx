import React, { createRef } from "react";
import "./MultiSelectButton.css";
import { ButtonGroup, Button } from "react-bootstrap";
import { QuestionnaireItem } from "../../fhir-types/fhir-r4";
import parser from "html-react-parser";

export default class MultiSelectButtonComponent extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
      value: "",
    };
  }

  public render(): JSX.Element {
    let activeChoiceButton: any = createRef();
    let questionnaireItem: QuestionnaireItem = {
      linkId: this.props.linkId,
      type: this.props.type,
      prefix: this.props.prefix,
      answerOption: this.props.answerOption,
      text: this.props.text,
    };

    const handleClick = (event: any) => {
      if (questionnaireItem.prefix && questionnaireItem.text) {
        questionnaireItem.text =
          questionnaireItem.prefix + ": " + questionnaireItem.text;
      }
      collectAnswer(questionnaireItem, event.target.value);
      for (let child of activeChoiceButton.current.children) {
        if (child.value === event.target.value) {
          child.classList.add("selected");
        } else {
          child.classList.remove("selected");
        }
      }
    };

    const receiveTextAnswer = (text: string) => {
      if (text.length > 0) {
        questionnaireItem.text =
          questionnaireItem.prefix + ": " + questionnaireItem.text;
        this.props.parentCallback(
          questionnaireItem,
          JSON.stringify({ valueString: text })
        );
      }
    };

    const collectAnswer = (QuestionnaireItem: any, answer: string) => {
      this.props.parentCallback(QuestionnaireItem, answer);
    };

    return (
      <div>
        <div className="accordion" id="questionnairePanels">
          <div className="card mb-2 shadow-sm border-0 rounded">
            <div
              className="card-header p-0 border-0 rounded"
              id={"heading" + questionnaireItem.linkId?.replace(".", "-")}
            >
              <h5 className="mb-0">
                <div
                  className={`multi-button ${
                    this.state.checked ? "selected" : ""
                  }`}
                >
                  {this.props.type !== "boolean" && (
                    <label
                      className="btn accordion-button collapsed rounded"
                      data-bs-toggle="collapse"
                      data-bs-target={
                        "#questionnairePanels-collapse" +
                        questionnaireItem.linkId?.replace(".", "-")
                      }
                      aria-expanded="false"
                      aria-controls={
                        "questionnairePanels-collapse" +
                        questionnaireItem.linkId?.replace(".", "-")
                      }
                    >
                      <input
                        value={questionnaireItem.prefix}
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={(event) => {
                          let checked = event.target.checked;
                          this.setState({
                            checked: checked,
                            value: questionnaireItem.prefix,
                          });
                        }}
                      />
                      <span>{parser(questionnaireItem.prefix!)}</span>
                    </label>
                  )}
                </div>
              </h5>
            </div>

            <div
              id={
                "questionnairePanels-collapse" +
                questionnaireItem.linkId?.replace(".", "-")
              }
              className="collapse"
              aria-labelledby={
                "heading" + questionnaireItem.linkId?.replace(".", "-")
              }
              data-parent="#questionnairePanels"
            >
              <div className="card-body border-0">
                <div className="additional-info-box">
                  {this.props.sectionCode === "pain-location" ? (
                    <>
                      {this.props.type === "choice" ? (
                        <>
                          <p>{questionnaireItem.text}</p>
                          <div
                            className="button-box d-flex justify-content-evenly flex-wrap"
                            ref={activeChoiceButton}
                          >
                            {this.props.answerOption?.map(
                              (answerOption: any) => {
                                return (
                                  <button
                                    key={JSON.stringify(answerOption)}
                                    value={JSON.stringify(answerOption)}
                                    onClick={(event: any) => {
                                      handleClick(event);
                                    }}
                                    className="mt-3 btn btn-outline-secondary-custom btn-sm"
                                    // variant="outline-secondary"
                                  >
                                    {answerOption.valueCoding?.display}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </>
                      ) : (
                        <div className="other-textbox">
                          <input
                            type="text"
                            placeholder="Type here..."
                            className="form-control"
                            onChange={(event) =>
                              receiveTextAnswer(event.target.value)
                            }
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div>
                      {this.props.type === "choice" ? (
                        <>
                          <p className="follow-up-question">
                            {questionnaireItem.text}
                          </p>
                          <div className="button-box">
                            <div className="btn-group" ref={activeChoiceButton}>
                              {this.props.answerOption?.map(
                                (answerOption: any) => {
                                  return (
                                    <button
                                      className="btn-sm btn btn-outline-secondary-custom"
                                      key={JSON.stringify(answerOption)}
                                      aria-required="true"
                                      value={JSON.stringify(answerOption)}
                                      onClick={(event: any) =>
                                        handleClick(event)
                                      }
                                    >
                                      {answerOption.valueCoding?.display}
                                    </button>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </>
                      ) : (
                        this.props.type === "text" && (
                          <div className="other-textbox">
                            <input
                              type="text"
                              placeholder="Type here..."
                              className="form-control"
                              onChange={(event) =>
                                receiveTextAnswer(event.target.value)
                              }
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collect this answer */}
        {this.props.type === "boolean" && (
          <div className="card mb-2 shadow-sm border-0">
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={questionnaireItem.prefix}
                  id="flexCheckDefault"
                />
                <label className="form-check-label">
                  {questionnaireItem.prefix}
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
