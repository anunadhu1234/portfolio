
import { Timeline } from "../ui/timeline";

export function Education() {
  const data = [
    {
        title: "2020 - 2025",
        content: (
            <div className="pb-4 text-center">
          <div>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              B.Tech in Chemical Engineering
            </p>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              National Institute of Technology, Warangal
            </p>
            <p className="mb-3 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              CGPA: 7.23 (till date)
            </p>
          </div>
            <img
                src="https://s3service.hitbullseye.com/s3fs-public/nit_wr_sign.jpg?null"
                alt="Board"
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}  
                />
          </div>
        ),
      },
      {
        title: "2018 - 2019",
        content: (
            <div className="pb-4 text-center">
          <div>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              Intermediate (Class 12th), PCM Stream
            </p>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              Universal Public School, Chandauli
            </p>
            <p className="mb-3 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              Percentage: 77%
            </p>
          </div>
            <img
                src="https://content.jdmagicbox.com/comp/chandauli/w9/9999p5412.5412.140507180139.e4w9/catalogue/universal-public-school-baburi-chandauli-9yzhy.jpg"
                alt="Board"
                className="w-full h-full rounded-lg"
                style={{ objectFit: "cover" }}  
                />
          </div>
        ),
      },
      {
        title: "2016 - 2017",
        content: (
          <div className="pb-4 text-center">
            <div>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              High School (Class 10th)
            </p>
            <p className="mb-1 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              Universal Public School, Chandauli
            </p>
            <p className="mb-3 text-base font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
              Percentage: 90% {/* Replace with actual if known */}
            </p>
            </div>
            <img
              src="https://preprimaryschools.com/assets/uploads/school/home/30112022122407_247306_sunbeam-school-chandauli-(1).jpg"
              alt="Board"
              className="w-full h-full rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        ),
      },
      
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
