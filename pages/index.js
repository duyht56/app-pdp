import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link
        href={`/sv-se/laundry/washing-machines/compact-washing-machine/ew6s4204c1/`}
      >
        <button
          style={{
            margin: "auto",
            display: "flex",
            marginTop: "150px",
            padding: "10px",
            background: "#011e41",
            color: "#fff",
          }}
          type="button"
        >
          Click Here to Go to Product Page
        </button>
      </Link>
    </div>
  );
}
