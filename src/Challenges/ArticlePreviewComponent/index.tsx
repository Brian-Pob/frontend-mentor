import { Component } from 'solid-js';
import profilePic from './images/avatar-michelle.jpg';
import drawers from './images/drawers.jpg';
import shareIcon from './images/icon-share.svg';
import './index.css';

const ArticlePreviewComponent: Component<{}> = (props) => {
  return (
    <main class="flex h-full items-center justify-center bg-blue-200">
      <div class="mx-4 flex aspect-[3/5] max-h-[33rem] min-w-[22rem] max-w-2xl flex-col  overflow-hidden rounded-lg bg-white shadow-lg md:aspect-auto md:flex-row">
        <img
          class="h-56 w-full object-cover md:h-auto md:max-w-lg"
          src={drawers}
          alt="green drawers"
        />
        <div class="px-6 py-4">
          <div class="py-3">
            <h1 class="mb-4 text-xl font-semibold text-gray-700">
              I learned that Tailwind resets the font-size of text elements, including headings.
            </h1>
            <p class="text-base text-gray-700">
              This means that you need to manually set the font-size of headings if you want them to
              be larger than the default.
            </p>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <div class="flex items-center">
              <img
                class="mr-4 h-10 w-10 rounded-full"
                src={profilePic}
                alt="Avatar of Michelle Appleton"
              />
              <div class="text-sm">
                <p class=" leading-none text-gray-900">Michaelle Appleton</p>
                <p class="text-gray-600">March 9, 2023</p>
              </div>
            </div>
            <button class=" transition:scale  rounded-full  bg-blue-200  py-4  px-4  font-bold text-white  shadow-xl  duration-300  hover:scale-125  hover:bg-blue-400">
              <img src={shareIcon} alt="share icon" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlePreviewComponent;
