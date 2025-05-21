import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key } from "react";


const Section5 = ({ titles2, handleTitleChange, handleCancel, handleSave }:any) => {
    return (
      <section className="bg-white p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Section 5: Edit Titles and Subtitles
        </h2>
  
        {/* Titles and Subtitles */}
        <div className="space-y-6">
          {titles2.slice(0, 1).map((item: { title: string | number | readonly string[] | undefined; subtitle: string | number | readonly string[] | undefined; }, index: Key | null | undefined | any ) => (
            <div key={index} className="flex flex-col md:flex-row md:space-x-4 space-y-4">
              <div className="w-full md:w-1/2">
                <Input
                  value={item.title}
                  onChange={(e) => handleTitleChange(index, "title", e.target.value, "section5")}
                  placeholder={`Title ${index + 1}`}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Input
                  value={item.subtitle}
                  onChange={(e) => handleTitleChange(index, "subtitle", e.target.value, "section5")}
                  placeholder={`Subtitle ${index + 1}`}
                  className="w-full p-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          ))}
        </div>
  
        {/* Action Buttons */}
        <div className="flex space-x-6 justify-center mt-8">
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
  
  export default  Section5 ;