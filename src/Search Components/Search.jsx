import React from 'react';

const Search = () => {
    return (
        <div className="flex justify-center items-center p-10 relative">
            <div className="relative w-full md:w-1/2"> {/* Full width on small screens, half width on medium+ */}
                <input
                    type="text"
                    placeholder="Places to go, things to do..."
                    className="border rounded-full p-3 py-3 w-full pl-5 pr-16 md:p-2 md:py-2 md:pr-10" // Adjust padding on medium screens
                />
                <button className="absolute right-0 top-0 mt- mr-0 bg-green-500 text-white rounded-full p-3   md:pxy-0 md:text-sm "> {/* Adjust button size on medium screens */}
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
