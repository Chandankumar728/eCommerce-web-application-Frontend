import { Button } from "@/components/ui/button";

const Section6 = ({
  bgColor,
  setBgColor,
  logo,
  navbarColor,
  navbarColorText,
  setNavbarColor,
  setNavbarColorText,
  handleLogoUpload,
  handleSaveSection6,
  handleCancelSection6,
}:any) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Section 6: Edit Background Color, Logo, and Navbar Color
      </h2>

      <div className="space-y-6">
        {/* Background Color */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="bgColor" className="block text-lg font-semibold text-gray-700 mb-2">
              Background Color
            </label>
            <input
              type="color"
              id="bgColor"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Logo Upload */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="logoUpload" className="block text-lg font-semibold text-gray-700 mb-2">
              Upload Logo
            </label>
            <input
              type="file"
              id="logoUpload"
              onChange={handleLogoUpload}
              className="w-full p-3 border-2 border-gray-300 rounded-md"
            />
            {logo && (
              <div className="mt-4 text-center">
                <img
                  src={logo}
                  alt="Logo Preview"
                  className="w-32 h-32 object-contain mx-auto border-2 border-gray-300 rounded-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* Navbar Color */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="navbarColor" className="block text-lg font-semibold text-gray-700 mb-2">
              Navbar Color
            </label>
            <input
              type="color"
              id="navbarColor"
              value={navbarColor}
              onChange={(e) => setNavbarColor(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md cursor-pointer"
            />
          </div>
        </div>

        {/* Navbar Text Color */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="navbarColorText" className="block text-lg font-semibold text-gray-700 mb-2">
              Navbar Text Color
            </label>
            <input
              type="color"
              id="navbarColorText"
              value={navbarColorText}
              onChange={(e) => setNavbarColorText(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex space-x-6 justify-center mt-8">
        <Button
          onClick={handleCancelSection6}
          variant="outline"
          className="px-6 py-3 rounded-md border-2 border-gray-300 text-gray-700 hover:bg-gray-200 transition duration-300"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSaveSection6}

        >
          Save
        </Button>
      </div>
    </section>
  );
};

export default Section6;
