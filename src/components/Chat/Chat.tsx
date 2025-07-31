
import React from "react";
import { DeepChat } from "deep-chat-react";

const AGENT_ENDPOINT = "https://rx4bv42rlvneqydnbjvqckjl.agents.do-ai.run/api/v1/chat/completions";
const AGENT_ACCESS_KEY = "HRb_ZwE-E48xXDr0QOtzl-CHWVczO4st";

const Chat: React.FC = () => {
  return (
    <DeepChat
      style={{
        display: 'block',
        borderRadius: '10px',
        width: '100%',
        height: 'calc(100vh - 50vh)'
      }}
      messageStyles={{
        default: {
          shared: {
            bubble: {
              maxWidth: "100%",
              backgroundColor: "unset",
              marginTop: "10px",
              marginBottom: "10px"
            }
          },
          user: {
            bubble: {
              marginLeft: "0px",
              color: "black"
            }
          },
          ai: {
            outerContainer: {
              backgroundColor: "rgba(247,247,248)",
              borderTop: "1px solid rgba(0,0,0,.1)",
              borderBottom: "1px solid rgba(0,0,0,.1)"
            }
          }
        }
      }}
      textInput={{
        styles: {
          container: {
            width: "100%",
            margin: "0",
            border: "unset",
            borderTop: "1px solid #d5d5d5",
            borderRadius: "0px",
            boxShadow: "unset"
          },
          text: {
            fontSize: "1.05em",
            paddingTop: "11px",
            paddingBottom: "13px",
            paddingLeft: "12px",
            paddingRight: "2.4em"
          }
        },
        placeholder: {
          text: "Send a message",
          style: { color: "#bcbcbc" }
        }
      }}
      submitButtonStyles={{
        submit: {
          container: {
            default: {
              transform: "scale(1.21)",
              marginBottom: "-3px",
              marginRight: "0.4em"
            }
          }
        }
      }}
      avatars={{
          default: {"styles": {"position": "left"}},
      }}
      connect={{
        url: AGENT_ENDPOINT,
        headers: {
          "Authorization": `Bearer ${AGENT_ACCESS_KEY}`,
          "Content-Type": "application/json"
        },
        additionalBodyProps: {
            "stream": false,
            "include_functions_info": false,
            "include_retrieval_info": false,
            "include_guardrails_info": false
        }
        }}
        requestInterceptor={(details: any) => {
            if (details.body && Array.isArray(details.body.messages)) {
                details.body.messages = details.body.messages.map((msg: any) => {
                    if (msg.text) {
                        return { ...msg, content: msg.text, text: undefined };
                    }
                    return msg;
                });
            }
            return details;
        }}
        responseInterceptor={(response: any) => {
        console.log(response);
        return {text: response.choices[0].message.content}
        }}
      demo
    />
  );
};

export default Chat;
