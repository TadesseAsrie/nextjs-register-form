"use client";
import React, { useState } from "react";

interface StudentForm {
  fullName: string;
  studentId: string;
  academicGpa: string;
  department: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<StudentForm>({
    fullName: "",
    studentId: "",
    academicGpa: "",
    department: "Software Engineering",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Success! Student ${formData.fullName} added to registry queue.`);
    console.log("Submitted Data Profile: ", formData);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "var(--bg-surface)",
        padding: "32px",
        borderRadius: "12px",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 style={{ marginBottom: "24px" }}>New Student Registration</h2>

      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid var(--border-color)",
            }}
          />
        </div>

        <div>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Student ID / Matrix
          </label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="ETS-1234/18"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid var(--border-color)",
            }}
          />
        </div>

        <div>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Academic GPA
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            name="academicGpa"
            value={formData.academicGpa}
            onChange={handleChange}
            placeholder="3.75"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid var(--border-color)",
            }}
          />
        </div>

        <div>
          <label
            style={{ display: "block", marginBottom: "6px", fontWeight: "500" }}
          >
            Department Branch
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid var(--border-color)",
              backgroundColor: "#fff",
            }}
          >
            <option value="Software Engineering">Software Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">
              Information Technology
            </option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Save Record
        </button>
      </form>
    </div>
  );
}
