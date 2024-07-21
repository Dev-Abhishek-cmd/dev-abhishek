import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between sm:p-16 font-roboto">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="relative h-40 w-40">
          <Image
            src="/images/profile.png"
            layout="fill"
            objectFit="contain"  // Changed to 'contain'
            alt="Picture of the author"
            className="rounded-full" // Added rounded-full for a rounded image
          />
        </div>
        <div className="w-full mb-4 sm:mb-0 ml-4">
          <h2 className="text-4xl text-slate-300 font-bold">Abhishek Kumar Kalia</h2>
          <p className="text-5 text-blue-900 font-regular">Senior Software Engineer</p>
          <p className="text-4 text-black-400 font-medium">Contact No: +91 88664 35911</p>
          <p className="text-4 text-black-400 font-medium">Email: kabhi1792@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
