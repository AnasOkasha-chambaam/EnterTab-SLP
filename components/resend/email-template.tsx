/* eslint-disable */
import React from "react";

export const EmailTemplate: React.FC<Readonly<TContactFormFields>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    }}
  >
    <img
      src={`https://www.entertab.net/img/logo-dark.png`}
      alt="logo"
      className="block dark:hidden"
      width={230}
      height={47}
    />
    <h2
      style={{
        color: "#333",
        borderBottom: "1px solid #ddd",
        paddingBottom: "10px",
      }}
    >
      New Message
    </h2>
    <p style={{ color: "#555" }}>
      You have received a new message from your website contact form.
    </p>
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#333", marginBottom: "5px" }}>Name</h3>
      <p
        style={{
          color: "#555",
          marginLeft: "10px",
          padding: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {name}
      </p>
    </div>
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#333", marginBottom: "5px" }}>Email</h3>
      <p
        style={{
          color: "#555",
          marginLeft: "10px",
          padding: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {email}
      </p>
    </div>
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ color: "#333", marginBottom: "5px" }}>Message</h3>
      <p
        style={{
          color: "#555",
          marginLeft: "10px",
          padding: "12px",
          backgroundColor: "#f9f9f9",
          borderLeft: "5px solid #007bff",
        }}
      >
        {message}
      </p>
    </div>
  </div>
);
