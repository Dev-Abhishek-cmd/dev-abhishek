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
      <div className="w-full flex flex-col sm:flex-row justify-between mt-10">
        <div className="relative h-40 w-200 flex-col">
          <div className="w-full flex flex-col">
            <h2 className="text-xl text-green-900 font-medium">Personal Profile</h2>
            <p className="text-4 text-black-400 font-medium">Date of Birth : 01 st july 1992</p>
            <p className="text-4 text-black-400 font-medium">Sex : Male</p>
            <p className="text-4 text-black-400 font-medium">Nationality : Indian</p>
          </div>
          <div className="w-full flex flex-col">
            <h2 className="text-xl text-green-900 font-medium">Experience</h2>
            <p className="text-4 text-black-400 font-medium">8+ Years Total Experience</p>
            <p className="text-4 text-black-400 font-medium">Sr. Software Engineer - IndiaNIC Infotech Ltd, Ahmedabad, India</p>
          </div>
        </div>
        <div className="w-full flex mb-4 sm:mb-0 ml-4 flex-col">
          <div className="w-full flex flex-col">
            <h2 className="text-4xl text-black-900 font-medium">About Me</h2>
            <p className="text-4 text-black-400 font-regular mt-8" >
              I am an experienced IT professional with over 7+ years of expertise in Fullstack Development Technologies. My skills span across a wide range of technologies including React Native, ReactJS, Electron js, Next js, Apollo-server-graphql, PostgreSQL, MySQL, Amazon Services, and Mobile Application Development Technologies. I also have a strong background in DevOps practices, including CI/CD and Docker implementation. With my in-depth knowledge and hands-on experience, I am adept at delivering high-quality solutions and meeting project requirements. I thrive in challenging environments and continuously stay updated with the latest industry trends and best practices.
            </p>
          </div>
          <div className="w-full flex flex-col mt-10">
            <h2 className="text-4xl text-black-900 font-medium">Expertise</h2>
            <div className="mt-8">
              <p className="text-4 text-black-400 font-regular">
                - React Native Development: Proficient in developing cross-platform mobile applications using React Native framework. Strong understanding of React Native architecture, Function and Class component-based and development, and UI implementation. Experience in building responsive and user-friendly mobile interfaces.
              </p>
              <p className="text-4 text-black-400 font-regular">
                - JavaScript and ES6: In-depth knowledge of JavaScript and ES6 syntax, concepts, and best practices. Skilled in writing efficient and optimized code using modern JavaScript features.
              </p>
              <p className="text-4 text-black-400 font-regular">
                - Redux State Management: Expertise in implementing Redux for managing application state in React Native projects.
              </p>
              <p className="text-4 text-black-400 font-regular">
                - Mobile App Deployment: Experience in deploying React Native applications to both iOS and Android platforms. Familiarity with the app submission and release processes for App Store and Google Play Store.
              </p>
              <p className="text-4 text-black-400 font-medium">
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
