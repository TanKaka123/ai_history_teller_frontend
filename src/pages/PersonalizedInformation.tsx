import { Col, Row, Typography } from "antd";
import React from "react";
import {
  PURPOSES_USE_APP,
  TITLE_PERSONALIZED_INFORMATION,
  TYPE_LISTENS,
  TYPE_USERS,
} from "../constants";
import { BoxTypeListen } from "../components/personalizedInformation/BoxTypeListen";
import { BoxPurposeUseApp } from "../components/personalizedInformation/BoxPurposeUseApp";

const { Title, Text } = Typography;

export type TypeUserType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type PurposeUseAppType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type TypeListenType = {
  title: string;
  description: string;
  image: string;
};

type personalizedInfo = {
  object: string;
  style: string;
  purpose: string;
};

const PersonalizedInformation = React.memo(() => {
  const [step, setStep] = React.useState<number>(1);
  const [personalizedInfo, setPersonalizedInfo] =
    React.useState<personalizedInfo>({
      object: "",
      purpose: "",
      style: "",
    });
  const onContinue = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
      localStorage.setItem("personalizedInformation", JSON.stringify(personalizedInfo));
      window.location.reload();
    }
  };
  return (
    <div className="text-center pt-20 bg-background h-[100vh] ">
      <Title
        className="font-sans text-xl text-primary"
        style={{
          fontSize: "50px",
        }}
      >
        {TITLE_PERSONALIZED_INFORMATION[step - 1].title}
      </Title>
      <Text className="text-center text-base">
        {TITLE_PERSONALIZED_INFORMATION[step - 1].description}
      </Text>
      {step === 1 ? (
        <Row className="my-20 flex justify-center gap-y-6">
          {TYPE_USERS.map((typeUser, typeUserIndex) => (
            <Col
              lg={{ span: 6, offset: 1 }}
              className="my-2"
              key={typeUserIndex}
              onClick={() =>
                setPersonalizedInfo((prevState) => ({
                  ...prevState,
                  object: typeUser.title,
                }))
              }
            >
              <BoxPurposeUseApp purposeUserApp={typeUser} />
            </Col>
          ))}
        </Row>
      ) : step === 2 ? (
        <Row className="my-10 flex justify-center gap-20">
          {TYPE_LISTENS.map((typeListen, typeListenIndex) => (
            <Col
              lg={{ span: 6 }}
              className="my-2 flex justify-center"
              key={typeListenIndex}
              onClick={() =>
                setPersonalizedInfo((prevState) => ({
                  ...prevState,
                  style: typeListen.title,
                }))
              }
            >
              <BoxTypeListen typeListen={typeListen} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="my-20 flex justify-center">
          {PURPOSES_USE_APP.map((purposeUseApp, purposeUseAppIndex) => (
            <Col
              lg={{ span: 6, offset: 1 }}
              className="my-2"
              key={purposeUseAppIndex}
              onClick={() =>
                setPersonalizedInfo((prevState) => ({
                  ...prevState,
                  purpose: purposeUseApp.title,
                }))
              }
            >
              <BoxPurposeUseApp purposeUserApp={purposeUseApp} />
            </Col>
          ))}
        </Row>
      )}
      <div className="w-full flex justify-center">
        <button
          className="bg-primary border border-transparent outline-none hover:outline-none focus:outline-none text-white px-16 py-3 rounded-sm text-xl"
          onClick={onContinue}
        >
          {step === 2 ? "Hoàn thành" : "Tiếp tục"}
        </button>
      </div>
    </div>
  );
});

export default PersonalizedInformation;
