import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src="/hello.png" width={500} height={350} alt="hello" />
    </>
  );
}
