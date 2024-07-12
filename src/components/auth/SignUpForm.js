import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import EmailInput from "./EmailInput";
import ProgressBar from "../ProgressBar";
import VerificationInput from "./VarificationInput";

const SignUpForm = () => {
  // 현재 몇 단계가 진행되고 있는지
  const [step, setStep] = useState(1);

  // 단계가 성공적으로 완료되었는지
  const [success, setSuccess] = useState(false);

  // 이메일 중복확인이 끝났을 때 호출될 함수
  const emailSuccessHandler = () => {
    setSuccess(true);

    setTimeout(() => {
      setStep(2);
      setSuccess(false);
    }, 1500);
  };

  return (
    <div className={styles.signupForm}>
      <div className={styles.formStepActive}>
        {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}

        {step === 2 && <VerificationInput />}

        {success && <ProgressBar />}
      </div>
    </div>
  );
};

export default SignUpForm;
