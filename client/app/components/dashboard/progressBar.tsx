import { poppins } from "../ui/fonts";
import { Progress } from "../ui/progress";

export default async function ProgressBar() {
    // const books : Book[] = await fetchBooks();
    const progress = 40;

    return (
      <div className="w-full inline-flex items-center justify-start gap-4">
        <Progress className="w-1/3" value={progress}/>
        <span className={`${poppins.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}> {progress} %</span>
      </div>
    );
  }