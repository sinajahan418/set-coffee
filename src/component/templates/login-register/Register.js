import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";
import swal from "sweetalert";
import { valiadteEmail, valiadtePassword, valiadtePhone } from "@/utils/auth";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => setIsRegisterWithOtp(false);

  const signUp = async () => {
    if (!name.trim()) {
      return swal({
        title: "نام را وارد کن ",
        icon: "error",
        buttons: "تلاش مجدد",
      });
    }

    const isValidPhone = valiadtePhone(phone);
    if (!isValidPhone) {
      return swal({
        title: "شماره تماس نامعتبر است",
        icon: "error",
        buttons: "تلاش مجدد",
      });
    }
     const isValidPass = valiadtePassword(password)
     if (!isValidPass) {
      return swal({title: "رمز عبور خیلی اسون است", icon: "error" , buttons: "تلاش مجدد"})
     }

     if (email) {
       const isValidEmail = valiadteEmail(email)
       if (!isValidEmail) {
        return swal({title:"ایمل نامعتبر است", icon: "error", buttons: "تلاش مجدد"})
       }
     }

    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(res);
    if (res.status === 201) {
      setName("")
      setEmail("")
      setPassword("")
      setPhone("")
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      });
    }
  };

  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className={styles.form}>
            <input
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="نام"
            />
            <input
              className={styles.input}
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="شماره موبایل  "
            />
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="ایمیل (دلخواه)"
            />

            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="رمز عبور"
              />
            )}

            <p
              style={{ marginTop: "1rem" }}
              className={styles.btn}
              onClick={() => setIsRegisterWithOtp(true)}
            >
              ثبت نام با کد تایید
            </p>

            <button
              style={{ marginTop: ".7rem" }}
              onClick={() => {
                if (isRegisterWithPass) {
                  signUp();
                } else {
                  setIsRegisterWithPass(true);
                }
              }}
              className={styles.btn}
            >
              ثبت نام با رمزعبور
            </button>
            <p onClick={showloginForm} className={styles.back_to_login}>
              برگشت به ورود
            </p>
          </div>
          <p className={styles.redirect_to_home}>لغو</p>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
