import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 style={{ marginBottom: "8px" }}>Welcome to the Registrar Portal</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "32px" }}>
        Overview metrics and configurations for student housing allocation.
      </p>

      {/* Grid Quick Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3
            style={{
              color: "var(--text-muted)",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Total Registered
          </h3>
          <p style={{ fontSize: "28px", fontWeight: "700" }}>1,245 Students</p>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3
            style={{
              color: "var(--text-muted)",
              fontSize: "14px",
              marginBottom: "8px",
            }}
          >
            Action Options
          </h3>
          <Link
            href="/register"
            style={{
              display: "inline-block",
              marginTop: "8px",
              color: "var(--primary)",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Open Registration Form &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
