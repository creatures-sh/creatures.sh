import { html } from 'satori-html'

export const templates: Record<string, (data?: Record<string, any>) => any> = {
  default: (data) => html`
    <div
      style="gap: 50px;"
      tw="w-full h-full flex flex-col items-center justify-center"
    >
      <img
        src="${data?.url}/og-background.jpg"
        style="object-fit: cover; object-position: center;"
        tw="absolute inset-0"
      />
      <div style="gap: -32px;" tw="flex flex-col items-center">
        <h1
          style="font-family: 'CalSans'; color: transparent; background: linear-gradient(180deg, #ffffff 34%, #A8D0FF03 90%); background-clip: text; -webkit-text-fill-color: transparent;"
          tw="text-[96px]"
        >
          creatures.sh${data?.page}
        </h1>
        <p
          style="font-family: 'CalSans'; color: rgba(255, 255, 255, 0.7)"
          tw="text-3xl"
        >
          A community of
          <span
            style="font-family: 'CalSans'; color: #D94977; margin-left: 6px; margin-right: 6px;"
          >
            curious developers
          </span>
          excited about code
        </p>
      </div>
      <div style="font-family: 'CalSans'; display: flex; gap: 24px;" tw="flex">
        <div
          style="background-color: #5A65EA; gap: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px 4px 0px 0px rgba(255, 255, 255, 0.15);"
          tw="flex text-2xl text-white rounded-md py-4 px-9"
        >
          <svg
            width="33"
            height="25"
            viewBox="0 0 33 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5725 2.93399C31.1356 8.15988 32.8952 14.0546 32.2374 20.8407C32.2347 20.8694 32.2197 20.8957 32.196 20.9131C29.4978 22.8895 26.8836 24.089 24.306 24.8844C24.2859 24.8905 24.2645 24.8901 24.2446 24.8834C24.2247 24.8767 24.2074 24.864 24.1952 24.847C23.5997 24.0205 23.0586 23.1491 22.5846 22.2341C22.5574 22.1802 22.5822 22.1153 22.6382 22.094C23.4976 21.7711 24.3147 21.3839 25.1006 20.9256C25.1626 20.8894 25.1665 20.8009 25.1093 20.7584C24.9425 20.6349 24.7773 20.5051 24.6191 20.3753C24.5896 20.3513 24.5497 20.3466 24.5162 20.3627C19.4135 22.7132 13.8239 22.7132 8.66087 20.3627C8.62735 20.3477 8.58752 20.3529 8.55873 20.3765C8.40098 20.5063 8.23535 20.6349 8.07011 20.7584C8.01293 20.8009 8.01766 20.8894 8.07997 20.9256C8.86594 21.3753 9.68305 21.7711 10.5412 22.0956C10.5968 22.1169 10.6232 22.1802 10.5956 22.2341C10.1318 23.1503 9.59077 24.0217 8.98424 24.8482C8.95782 24.8816 8.91444 24.897 8.87343 24.8844C6.3081 24.089 3.69388 22.8895 0.995649 20.9131C0.97317 20.8957 0.957002 20.8682 0.954635 20.8395C0.404895 14.9696 1.52528 9.02615 5.61521 2.93281C5.62507 2.91668 5.64005 2.90409 5.6574 2.89662C7.66983 1.97528 9.82581 1.29745 12.0792 0.91035C12.1202 0.904055 12.1612 0.922939 12.1825 0.959131C12.4609 1.45088 12.7792 2.08149 12.9945 2.59685C15.3698 2.23492 17.7821 2.23492 20.207 2.59685C20.4223 2.09251 20.7295 1.45088 21.0068 0.959131C21.0166 0.941176 21.0319 0.926792 21.0505 0.918032C21.0691 0.909271 21.0899 0.906583 21.1101 0.91035C23.3647 1.29863 25.5206 1.97646 27.5315 2.89662C27.5492 2.90409 27.5638 2.91668 27.5725 2.93399ZM14.2021 14.0947C14.2269 12.3594 12.9586 10.9235 11.3666 10.9235C9.78756 10.9235 8.53152 12.3468 8.53152 14.0947C8.53152 15.8422 9.81241 17.2655 11.3666 17.2655C12.946 17.2655 14.2021 15.8422 14.2021 14.0947ZM24.685 14.0947C24.7098 12.3594 23.4416 10.9235 21.8499 10.9235C20.2705 10.9235 19.0145 12.3468 19.0145 14.0947C19.0145 15.8422 20.2953 17.2655 21.8499 17.2655C23.4416 17.2655 24.685 15.8422 24.685 14.0947Z"
              fill="white"
            />
          </svg>
          <span tw="-mt-1">Discord</span>
        </div>
      </div>
    </div>
  `,
  article: (data) => html`
    <div tw="flex relative w-[1200px] h-[630px]">
      <img
        tw="absolute inset-0 z-0"
        src="${data?.url}/assets/blog/${data?.image}"
      />
      <div tw="flex absolute inset-0 z-1 bg-black bg-opacity-60"></div>
      <div
        tw="relative w-full h-full flex flex-col p-16 justify-center items-center text-white"
      >
        <h1
          style="font-family: 'CalSans'; color: transparent; background: linear-gradient(180deg, #ffffff 55%, #A8D0FF03 95%); background-clip: text; -webkit-text-fill-color: transparent;"
          tw="absolute top-12 inset-x-auto text-7xl"
        >
          creatures.sh
        </h1>

        <h2 style="font-family: 'CalSans'" tw="text-6xl text-center">
          ${data?.title}
        </h2>
        <p
          style="font-family: 'CalSans'"
          tw="absolute bottom-12 inset-x-auto text-3xl opacity-80"
        >
          By ${data?.author}
        </p>
      </div>
    </div>
  `,
}
