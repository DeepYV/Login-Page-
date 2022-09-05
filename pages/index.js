import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Body from "../component/Body";
import Dashboard from "../pages/dashboard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Dashboard />
    </>
  );
}
