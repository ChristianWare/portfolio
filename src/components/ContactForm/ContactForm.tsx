"use client";

import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button/Button";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.messageId) {
      toast.success("Thanks! I'll be in touch soon 😎");
    } else {
      toast.error("Opps! Please try again");
    }

    reset();
    setLoading(false);
  };

  return (
    <div className={styles.parent}>
      <h3 className={styles.heading}>
        <span className={styles.blackDot} />
        Contact
      </h3>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.namesContainer}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='firstName'>
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id='firstName'
                    type='text'
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className={styles.error}>
                      *** First Name is required
                    </span>
                  )}
                </div>
                <div className={styles.labelInputBox}>
                  <label htmlFor='lastName'>
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id='lastName'
                    type='text'
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className={styles.error}>
                      *** Last Name is required
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.everythingElse}>
                <div className={styles.labelInputBox}>
                  <label htmlFor='email'>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    id='senderEmail'
                    type='email'
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    placeholder='So I can respond. I won&#39;t send you spam.'
                    maxLength={500}
                  />
                  {errors.email && (
                    <span className={styles.error}>*** Email is required</span>
                  )}
                </div>

                <div className={styles.labelInputBox}>
                  <label htmlFor='message'>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id='message'
                    maxLength={5000}
                    {...register("message", { required: true })}
                    placeholder='No solicitations, please.'
                  />
                  {errors.message && (
                    <span className={styles.error}>
                      *** Message is required
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.btnContainer}>
                <Button
                  text={loading ? "Sending..." : "Submit"}
                  btnType='primary'
                  href='/'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

// <div className={styles.blackDot}></div>;
