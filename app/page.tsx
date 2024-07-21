import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-6 sm:p-24">
      <div className="w-full flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <h2>Abhishek Kumar Kalia</h2>
          <p>Senior Software Engineer</p>
          <p>Contact No: +91-8866435911</p>
          <p>Email: kabhi1792@gmail.com</p>
        </div>
        <div className="h-32 w-32 bg-white mx-auto sm:mx-0">
          <img src="/images/profile.png" alt="Profile" className="h-full w-full object-cover"/>
        </div>
      </div>
    </main>
  );
}
