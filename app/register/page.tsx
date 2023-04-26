import Image from "next/image";
import HeroImage from "../../public/hero-image.jpg";
import FormRegistered from "../components/FormRegistered";

export default function Page() {
  return (
    <section className="container mx-auto">
      <div className="h-screen grid grid-cols-5 gap-16 px-36 items-center justify-center">
        <Image
          className="col-span-3"
          width={700}
          height={700}
          src={HeroImage}
          alt="Hero Image"
        />

        <div className="col-span-2">
          <h1 className="text-3xl text-gray-700 font-bold mb-4">
            Welcome to Medicine Tracker
          </h1>

          <hr className="border-1 border-gray-600 mb-20" />
          <FormRegistered />
        </div>
      </div>
    </section>
  );
}
