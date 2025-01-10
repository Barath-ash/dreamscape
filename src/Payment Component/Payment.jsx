const Payment = () => {
  return (
    <>
      <div class="font-[sans-serif] bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
        <div class="bg-gray-100 p-6 rounded-md">
          <h2 class="text-4xl font-extrabold text-gray-800">Book your adventure to Goa</h2>
          <img src="" alt="" />
          <ul class="text-gray-800 mt-8 space-y-4">
            <li class="flex flex-wrap gap-4 text-sm">npm 
            Travel Booking 
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
            Password and Visa Arrangement  
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
            Personal Driver 
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
            Food  
            </li>
            <li class="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
            Room Arrangement 
            </li>
          </ul>

         
        </div>

        <div class="bg-gray-100 p-6 rounded-md">
          <h2 class="text-4xl font-extrabold text-gray-800">$750</h2>

          <ul class="text-gray-800 mt-8 space-y-4">
            <li class="flex flex-wrap gap-4 text-sm">
              Split Sneakers <span class="ml-auto font-bold">$150.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
              Echo Elegance <span class="ml-auto font-bold">$200.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
              VelvetGlide Boots <span class="ml-auto font-bold">$300.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm">
              Tax <span class="ml-auto font-bold">$100.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
              Total <span class="ml-auto">$750.00</span>
            </li>
          </ul>
        </div>
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="remember-me" class="ml-3 block text-sm">
            I accept the{" "}
            <a
              href="javascript:void(0);"
              class="text-blue-600 font-semibold hover:underline ml-1"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        <div class="flex flex-wrap gap-4 mt-8">
          <button
            type="button"
            class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="button"
            class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-md hover:bg-[#111]"
          >
            Pay $750
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
