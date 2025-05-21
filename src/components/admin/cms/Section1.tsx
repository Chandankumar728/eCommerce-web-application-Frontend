import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Section1 = ({ titles, handleTitleChange, handleCancel, handleSave }:any) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Section 1: Edit Title and Subtitle
      </h2>

      {/* Title and Subtitle Input Fields */}
      <div className="space-y-4">
        {/* Only one title and subtitle */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex-1">
            <Input
              value={titles[0].title}
              onChange={(e) => handleTitleChange(0, "title", e.target.value, "section1")}
              placeholder="Enter Title"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <div className="flex-1">
            <Input
              value={titles[0].subtitle}
              onChange={(e) => handleTitleChange(0, "subtitle", e.target.value, "section1")}
              placeholder="Enter Subtitle"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-6 justify-center mt-6">
        <Button
          onClick={handleCancel}
          variant="outline"
          className="px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300"
        >
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </section>
  );
};

export default Section1;