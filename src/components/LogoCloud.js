import { Link } from "@/navigation";
import Image from "next/image";
import clsx from "clsx";

const logos = [
  {
    name: "Upwork",
    href: "#",
    logo: function UpworkLogo({ className }) {
      return (
        <svg
          className={clsx("h-8 w-auto", className)}
          fill="currentColor"
          width={2500}
          height={747}
          viewBox="0 0 512 153"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path d="M140.107 96.628c-8.321 0-16.118-3.523-23.202-9.258l1.725-8.096.075-.3c1.536-8.62 6.409-23.089 21.402-23.089 11.244 0 20.39 9.146 20.39 20.39-.038 11.207-9.183 20.353-20.39 20.353zm0-61.395c-19.154 0-33.996 12.444-40.03 32.909-9.221-13.831-16.193-30.435-20.278-44.416H59.184v53.636c0 10.57-8.621 19.19-19.191 19.19-10.57 0-19.19-8.62-19.19-19.19V23.726H.186v53.636c-.075 21.965 17.804 39.993 39.768 39.993 21.965 0 39.844-18.028 39.844-39.993v-8.995c4.01 8.358 8.92 16.791 14.88 24.288l-12.632 59.37h21.103l9.145-43.066c8.021 5.135 17.242 8.359 27.812 8.359 22.601 0 41.005-18.516 41.005-41.118 0-22.564-18.404-40.967-41.005-40.967z" />
          <path d="M244.043 37.557l13.306 53.636 14.656-53.636h17.466l-22.526 77.512h-17.467l-13.83-53.974-13.794 53.936h-17.466L181.86 37.52h17.467l14.655 53.636 13.306-53.636h16.754v.038zm87.22-2.324c-22.676 0-41.042 18.403-41.042 41.042 0 22.677 18.403 41.043 41.042 41.043 22.677 0 41.08-18.366 41.08-41.043 0-22.676-18.403-41.042-41.08-41.042zm0 65.218c-13.343 0-24.138-10.795-24.138-24.138 0-13.344 10.832-24.138 24.138-24.138 13.344 0 24.138 10.794 24.138 24.138 0 13.306-10.794 24.138-24.138 24.138zm90.968-45.54c-11.731 0-21.214 9.52-21.214 21.214v38.906h-17.58V37.557h17.58v11.919s7.496-11.957 22.901-11.957h5.397v17.392h-7.084zm58.997 18.366c12.48-7.047 20.952-20.428 20.952-35.758H484.6c0 12.931-10.494 23.426-23.425 23.426h-2.362V.15h-17.578V115.03h17.578V78.524h2.1c1.724 0 3.973 1.125 4.985 2.511l24.962 33.996h21.065l-30.697-41.754z" />
        </svg>
      );
    },
  },
  {
    name: "Shopify",
    href: "#",
    logo: function ShopifyLogo({ className }) {
      return (
        <svg
          width={115}
          height={33}
          viewBox="0 0 115 33"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8058 6.25011C24.7833 6.08619 24.6421 5.99585 24.5244 5.98503C24.4067 5.97421 22.1228 5.94013 22.1228 5.94013L20.0234 3.87357C19.8346 3.6826 19.466 3.74049 19.328 3.78377C19.3264 3.78485 18.9697 3.89629 18.3684 4.08455C18.2498 3.69061 18.096 3.30836 17.909 2.94254C17.2286 1.62957 16.2327 0.940898 15.0286 0.933324C14.9404 0.933324 14.8575 0.941439 14.774 0.948472L14.6654 0.821341C14.1354 0.25439 13.463 -0.0225938 12.6575 0.00175049C11.1031 0.0466521 9.55516 1.18218 8.29926 3.19896C7.4167 4.61796 6.74381 6.40159 6.5534 7.78109L3.49279 8.74134C2.59151 9.02806 2.56316 9.05511 2.44549 9.91527L0 29.0023L19.7586 32.4591L28.3167 30.306L24.8004 6.25065L24.8058 6.25011ZM17.373 4.39291L15.8395 4.87277C15.8277 4.07644 15.7347 2.9685 15.3677 2.01205C16.5477 2.23818 17.1275 3.58793 17.3736 4.39237L17.373 4.39291ZM14.8056 5.19682L11.507 6.23009C11.8257 4.99557 12.4302 3.76646 13.1726 2.96039C13.4486 2.66068 13.8348 2.32636 14.2926 2.13539C14.7227 3.04316 14.8168 4.328 14.8061 5.19736L14.8056 5.19682ZM12.6874 1.04747C13.0522 1.03936 13.3598 1.1205 13.6224 1.29524C13.202 1.51596 12.796 1.83298 12.4152 2.24629C11.4278 3.31744 10.6715 4.98096 10.3693 6.58606L7.66007 7.43432C8.19495 4.90793 10.2885 1.1178 12.688 1.04801L12.6874 1.04747Z"
            fill="currentColor"
          />
          <path
            d="M24.525 5.98652C24.4084 5.97678 22.1234 5.94162 22.1234 5.94162L20.0251 3.87344C19.9545 3.80203 19.8646 3.76524 19.7598 3.75009L19.7608 32.4579L28.3227 30.3059L24.8064 6.25106C24.7839 6.08714 24.6416 5.9968 24.525 5.98598V5.98652Z"
            fill="currentColor"
          />
          <path
            d="M15.013 10.4394L14.0181 14.2024C14.0181 14.2024 12.9088 13.6917 11.5935 13.7751C9.6647 13.8984 9.64437 15.1286 9.66416 15.4375C9.769 17.12 14.1465 17.4932 14.3925 21.4305C14.5851 24.532 12.7665 26.6537 10.144 26.8209C6.9967 27.021 5.26367 25.1438 5.26367 25.1438L5.93067 22.275C5.93067 22.275 7.67439 23.6058 9.07044 23.5171C9.98242 23.4587 10.3082 22.7083 10.275 22.1782C10.1381 19.9828 6.5736 20.1116 6.34788 16.5049C6.158 13.4699 8.12904 10.3928 12.4787 10.1213C14.1545 10.0131 15.0119 10.4448 15.0119 10.4448L15.013 10.4394Z"
            fill="#121212"
          />
          <path
            d="M39.5994 18.3199C38.6152 17.7789 38.1087 17.3245 38.1087 16.698C38.1087 15.9011 38.8115 15.3888 39.9096 15.3888C41.1934 15.3888 42.3284 15.9298 42.3284 15.9298L43.2281 13.1416C43.2281 13.1416 42.4006 12.4924 39.9653 12.4924C36.5757 12.4924 34.227 14.4562 34.227 17.2152C34.227 18.7802 35.3235 19.9753 36.787 20.8279C37.9637 21.5095 38.3906 21.9942 38.3906 22.7051C38.3906 23.4446 37.7995 24.0424 36.703 24.0424C35.0684 24.0424 33.5247 23.1887 33.5247 23.1887L32.5684 25.9775C32.5684 25.9775 33.9944 26.9448 36.3938 26.9448C39.8824 26.9448 42.3856 25.2093 42.3856 22.0797C42.3845 20.4027 41.119 19.2125 39.6042 18.3253L39.5994 18.3199ZM53.4957 12.4589C51.7798 12.4589 50.4292 13.2844 49.3888 14.5362L49.3321 14.5076L50.8229 6.62705H46.9423L43.173 26.6846H47.0552L48.3496 19.8287C48.8556 17.2395 50.1778 15.6469 51.4155 15.6469C52.2874 15.6469 52.6254 16.2441 52.6254 17.0983C52.6254 17.6393 52.5687 18.2885 52.4569 18.8338L50.9946 26.6856H54.8768L56.3958 18.5774C56.5648 17.7237 56.6777 16.7002 56.6777 16.0169C56.6761 13.7972 55.5224 12.4605 53.4978 12.4605L53.4957 12.4589ZM65.4503 12.4589C60.7808 12.4589 57.687 16.7326 57.687 21.477C57.687 24.5212 59.5431 26.968 63.0316 26.968C67.6166 26.968 70.7109 22.8149 70.7109 17.9498C70.7109 15.1335 69.0795 12.4589 65.4503 12.4589V12.4589ZM63.5376 23.9531C62.2154 23.9531 61.6527 22.8154 61.6527 21.3927C61.6527 19.1454 62.8064 15.4754 64.9155 15.4754C66.2938 15.4754 66.7432 16.6655 66.7432 17.8368C66.7432 20.255 65.591 23.9531 63.5371 23.9531H63.5376ZM80.6405 12.4589C78.0196 12.4589 76.5326 14.7921 76.5326 14.7921H76.477L76.7016 12.6823H73.2698L72.4825 17.8887L69.7813 32.2556H73.6635L74.7316 26.4519H74.8172C74.8172 26.4519 75.6195 26.9637 77.0958 26.9637C81.653 26.9637 84.6339 22.2409 84.6339 17.4613C84.6339 14.8105 83.4802 12.4551 80.6394 12.4551L80.6405 12.4589ZM76.9273 24.0089C75.9196 24.0089 75.3227 23.4397 75.3227 23.4397L75.9645 19.7697C76.4149 17.3234 77.6805 15.7015 79.031 15.7015C80.2078 15.7015 80.5779 16.8105 80.5779 17.8638C80.5779 20.3956 79.0872 24.0094 76.9215 24.0094L76.9273 24.0089ZM90.1818 6.82559C88.9446 6.82559 87.9599 7.821 87.9599 9.10151C87.9599 10.2679 88.691 11.0653 89.7881 11.0653H89.8442C91.0542 11.0653 92.0945 10.2397 92.1228 8.78936C92.1228 7.65113 91.3633 6.82559 90.1812 6.82559H90.1818ZM84.7473 26.6835H88.6285L91.2735 12.7721H87.3688L84.7479 26.6835H84.7473ZM101.147 12.7434H98.4457L98.5859 12.0942C98.8105 10.7569 99.5989 9.56243 100.893 9.56243C101.588 9.56243 102.13 9.76151 102.13 9.76151L102.89 6.68872C102.89 6.68872 102.215 6.3479 100.779 6.3479C99.401 6.3479 98.0237 6.74606 96.9817 7.65708C95.6595 8.79531 95.0401 10.4448 94.7315 12.0953L94.6245 12.7445H92.8235L92.2608 15.7037H94.0618L92.0078 26.6856H95.89L97.944 15.7037H100.616L101.151 12.7445L101.147 12.7434ZM110.486 12.7726C110.486 12.7726 108.059 18.9561 106.97 22.3318H106.913C106.839 21.2498 105.957 12.7726 105.957 12.7726H101.878L104.213 25.5398C104.27 25.8239 104.242 25.9953 104.129 26.189C103.678 27.0708 102.919 27.9245 102.019 28.5504C101.288 29.0914 100.472 29.4322 99.8257 29.6594L100.894 33C101.682 32.8296 103.313 32.1745 104.692 30.8664C106.465 29.1882 108.096 26.5926 109.783 23.0762L114.537 12.7769H110.487V12.778L110.486 12.7726Z"
            fill="currentColor"
          />
        </svg>
      );
    },
  },
  {
    name: "Amazon",
    href: "#",
    logo: function AmazonLogo({ className }) {
      return (
        <svg
          className={clsx("h-8 w-auto", className)}
          viewBox="163.5 263.1 285 85.8"
          width={2500}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipRule="evenodd" fillRule="evenodd">
            <path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" />
            <path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" />
            <path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z" />
          </g>
        </svg>
      );
    },
  },
  {
    name: "Adobe",
    href: "#",
    logo: function AdobeLogo({ className }) {
      return (
        <svg
          width={107}
          height={26}
          viewBox="0 0 107 26"
          fill="none"
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.6314 18.9397L40.1707 25.6957H36.8231L42.3618 1.10638H46.318L51.5524 25.6957H48.1439L46.7441 18.8789H41.6314V18.9397ZM46.3789 16.2008L45.2224 10.2969C44.9181 8.59273 44.5529 6.40161 44.3095 4.6974H44.1877C43.9443 6.46247 43.5791 8.77533 43.2139 10.2969L42.0575 16.2008H46.3789Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.3948 0.43689V21.1309C64.3948 22.4699 64.4557 24.4784 64.5165 25.6957H61.5342L61.2907 23.5654H61.169C60.5603 24.7827 59.2213 26 57.4562 26C54.1695 26 52.161 22.409 52.161 16.9312C52.161 10.6621 54.8391 7.67978 57.6388 7.67978C59.0387 7.67978 60.1951 8.34929 60.8038 9.68831H60.8647V0.43689H64.3948ZM60.9864 14.7401C60.9864 14.4358 60.9864 14.0097 60.9255 13.6445C60.7429 12.062 59.83 10.6621 58.6127 10.6621C56.4824 10.6621 55.752 13.6445 55.752 16.9312C55.752 20.5831 56.7259 23.1394 58.5518 23.1394C59.343 23.1394 60.3169 22.7133 60.9255 20.6439C60.9864 20.3396 61.0472 19.9136 61.0472 19.4875V14.7401H60.9864Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.6115 26C69.0813 26 66.525 22.9568 66.525 16.8703C66.525 10.4187 69.5683 7.67978 72.7941 7.67978C76.3242 7.67978 78.8197 10.8447 78.8197 16.8095C78.8197 23.8698 75.3504 26 72.6115 26ZM72.6724 23.322C74.8026 23.322 75.2895 19.5484 75.2895 16.8703C75.2895 14.1923 74.8026 10.4187 72.6115 10.4187C70.3595 10.4187 69.9334 14.1923 69.9334 16.8703C69.9334 19.7918 70.4204 23.322 72.6724 23.322Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.8891 0.43689H84.2975V9.99264H84.3584C85.2713 8.41016 86.4886 7.67978 88.0711 7.67978C91.1143 7.67978 93.0012 11.0882 93.0012 16.566C93.0012 22.8959 90.384 26 87.4625 26C85.6974 26 84.7236 25.0262 83.9323 23.5046H83.8106L83.628 25.7566H80.6456C80.7065 24.5393 80.7674 22.5307 80.7674 21.1917V0.43689H80.8891ZM84.2975 19.4267C84.2975 19.8527 84.3584 20.2179 84.4192 20.5222C84.967 22.6525 86.0017 23.1394 86.7321 23.1394C88.8015 23.1394 89.5319 20.4614 89.5319 16.8095C89.5319 13.4011 88.7406 10.6621 86.6712 10.6621C85.5148 10.6621 84.6018 12.0012 84.3584 13.2793C84.2975 13.6445 84.2366 14.1314 84.2366 14.4966V19.4267H84.2975Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M98.1137 17.5398C98.1746 22.1047 100.122 23.2611 102.192 23.2611C103.409 23.2611 104.504 22.9568 105.235 22.5916L105.722 25.087C104.687 25.6348 103.044 25.9392 101.461 25.9392C97.0181 25.9392 94.6444 22.5916 94.6444 17.1138C94.6444 11.3316 97.3224 7.74063 100.974 7.74063C104.687 7.74063 106.391 11.2708 106.391 15.7139C106.391 16.566 106.33 17.1138 106.33 17.6007L98.1137 17.5398ZM103.226 15.1053C103.287 11.9403 102.192 10.2969 100.792 10.2969C99.0267 10.2969 98.1746 12.9141 98.1137 15.1053H103.226Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4681 1.16727H27.7543V25.6957L17.4681 1.16727Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2861 1.16727H0V25.6957L10.2861 1.16727Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8772 10.1752L20.3897 25.6957H16.1291L14.1815 20.7656H9.37317L13.8772 10.1752Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.209 7.6189C106.635 7.6189 107 7.98408 107 8.41014C107 8.83619 106.635 9.20138 106.209 9.20138C105.783 9.20138 105.417 8.83619 105.417 8.41014C105.417 7.98408 105.783 7.6189 106.209 7.6189ZM106.209 7.74063C105.844 7.74063 105.6 8.04495 105.6 8.41014C105.6 8.77532 105.904 9.07965 106.209 9.07965C106.574 9.07965 106.817 8.77532 106.817 8.41014C106.817 8.04495 106.574 7.74063 106.209 7.74063ZM106.026 8.89705H105.904V8.04495C105.965 8.04495 106.026 8.04495 106.148 8.04495C106.27 8.04495 106.391 8.04495 106.391 8.10581C106.452 8.16668 106.452 8.22754 106.452 8.28841C106.452 8.41014 106.391 8.471 106.27 8.53187C106.33 8.53187 106.391 8.59273 106.391 8.77532C106.391 8.89705 106.452 8.95792 106.452 9.01878H106.33C106.33 9.01878 106.27 8.89705 106.27 8.77532C106.27 8.65359 106.209 8.59273 106.087 8.59273H105.965V8.89705H106.026ZM106.026 8.41014H106.148C106.27 8.41014 106.391 8.34927 106.391 8.28841C106.391 8.22754 106.33 8.10581 106.148 8.10581C106.087 8.10581 106.087 8.10581 106.026 8.10581V8.41014Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.0934 1.16727C29.5194 1.16727 29.8846 1.53245 29.8846 1.95851C29.8846 2.38456 29.5194 2.74975 29.0934 2.74975C28.6673 2.74975 28.3021 2.38456 28.3021 1.95851C28.3021 1.53245 28.6673 1.16727 29.0934 1.16727ZM29.0934 1.289C28.7282 1.289 28.4847 1.59332 28.4847 1.95851C28.4847 2.32369 28.789 2.62802 29.0934 2.62802C29.4586 2.62802 29.702 2.32369 29.702 1.95851C29.702 1.59332 29.4586 1.289 29.0934 1.289ZM28.9108 2.38456H28.789V1.53245C28.8499 1.53245 28.9108 1.53245 29.0325 1.53245C29.1542 1.53245 29.276 1.53245 29.276 1.59332C29.3368 1.65418 29.3368 1.71505 29.3368 1.77591C29.3368 1.89764 29.276 1.95851 29.1542 2.01937C29.2151 2.01937 29.276 2.08024 29.276 2.26283C29.276 2.38456 29.3368 2.44542 29.3368 2.50629H29.2151C29.2151 2.50629 29.1542 2.38456 29.1542 2.26283C29.1542 2.1411 29.0934 2.08024 28.9716 2.08024H28.8499V2.38456H28.9108ZM28.9108 1.89764H29.0325C29.1542 1.89764 29.276 1.83678 29.276 1.77591C29.276 1.71505 29.2151 1.59332 29.0325 1.59332C28.9716 1.59332 28.9716 1.59332 28.9108 1.59332V1.89764Z"
            fill="currentColor"
          />
        </svg>
      );
    },
  },
  {
    name: "Snapchat",
    href: "#",
    logo: function SnapchatLogo({ className }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={112}
          height={28}
          fill="currentColor"
          className={className}
        >
          <path d="M.407 20.15C.4 18.4.24 16.354.085 14.797a.64.64 0 0 1 .54-.7l.025-.004c.327-.05.64.155.723.477a7.54 7.54 0 0 0 .925 2.217c.384.607 1.727 2.703 4.55 2.703 2.056 0 3.564-1.463 3.564-3.312 0-1.7-1.37-2.398-4.056-3.42l-2.4-.992C2.846 11.24.27 10.026.27 6.66.27 2.9 3.257.702 7.067.702c.925 0 2.24.13 3.56.74a.64.64 0 0 0 .808-.241l.218-.346a.64.64 0 0 1 .526-.301.65.65 0 0 1 .661.602l.52 4.695c.095.235.047.504-.125.7a.64.64 0 0 1-.674.174.65.65 0 0 1-.439-.544c-.344-.914-.538-1.342-.916-1.912-.904-1.24-2.1-2.095-3.617-2.095-1.947 0-3.097 1.598-3.097 2.895 0 1.5 1.315 2.124 1.9 2.4 1.18.58 2.4.966 3.645 1.463 1.973.773 4.686 1.96 4.686 5.6 0 3.585-2.85 6.592-7.37 6.592-2.247 0-3.7-.715-4.56-1.258a.64.64 0 0 0-.89.215l-.243.404c-.108.178-.294.293-.5.3l-.046.004a.64.64 0 0 1-.484-.166c-.13-.12-.207-.3-.2-.47zm14.908-.158a.56.56 0 0 1 .462-.553c.414-.07.915-.248 1-.778.082-.636.082-2.3.082-2.705l-.027-3.504c0-1.385-.46-1.765-1.1-1.95a.56.56 0 0 1-.4-.538V9.9a.56.56 0 0 1 .465-.552c1.365-.24 3.428-.828 4.5-1.204a.55.55 0 0 1 .429.028.56.56 0 0 1 .281.327l.062.213a.56.56 0 0 0 .331.367.55.55 0 0 0 .49-.04c1.034-.605 2.015-1.054 3.46-1.054 1.042 0 2.084.276 2.934.882 1.335.933 1.558 2.358 1.67 3.867v2.422l-.054 3.036c0 .698.188 1.123 1.094 1.292a.55.55 0 0 1 .44.55.56.56 0 0 1-.175.409c-.112.106-.263.16-.417.15l-3.876-.087-2.243.08c-.156.014-.3-.038-.426-.145s-.18-.256-.18-.414v-.118a.56.56 0 0 1 .41-.54c.8-.218.9-.603.877-2.283l-.055-4.304c-.027-1.324-.082-2.84-1.864-2.84-.74 0-1.316.274-1.87.694a.57.57 0 0 0-.23.47l.044 6.533c0 1.266.218 1.616.887 1.794.24.063.4.3.4.538v.073a.56.56 0 0 1-.175.41c-.112.106-.263.16-.417.15l-4.37-.097-1.83.073c-.156.015-.3-.037-.427-.144a.56.56 0 0 1-.181-.415v-.03zM39.187 15.4a.56.56 0 0 0-.218-.442c-.136-.105-.314-.142-.48-.098-.925.236-2.152.78-2.152 2.23 0 .745.384 1.572 1.426 1.572.53 0 .848-.162 1.18-.383a.56.56 0 0 0 .244-.464V15.4zm6.333 3.2a.56.56 0 0 1 .051.828c-1.317 1.342-2.623 1.616-3.342 1.616-.74-.01-1.458-.25-2.055-.7-.2-.154-.36-.33-.5-.527-.174-.233-.5-.3-.74-.128-.754.493-2.3 1.37-4.04 1.37-2.522 0-3.124-1.7-3.124-2.73 0-3.152 4.82-4.47 7-4.865.262-.048.453-.278.454-.547.003-.853.004-1.857-.1-2.203-.33-.966-1.424-.966-1.56-.966a1.52 1.52 0 0 0-1.563 1.159c-.082.36-.082.745-.164 1.104-.22.937-.987 1.296-1.67 1.296-.85 0-1.645-.552-1.645-1.572 0-2.042 3.755-3.698 7.153-3.698 2.357 0 4.083.773 4.083 3.063l-.054 6.152c-.027.47-.056 1.543.657 1.543.177 0 .344-.093.5-.216a.55.55 0 0 1 .68.009zm7.613.774c2.07 0 2.823-2.85 2.823-4.73 0-1.993-.84-4.648-2.906-4.648-1.874 0-1.874 1.9-1.874 2.5l.03 4.427c0 .886 0 2.462 1.93 2.462zm-6.57-6.557c.05-2.113-.254-2.612-1.208-2.872-.23-.068-.4-.28-.387-.518V9.28a.53.53 0 0 1 .473-.527c1.888-.2 3.886-.7 4.868-.974.142-.04.294-.018.42.06s.213.2.242.344l.094.483a.53.53 0 0 0 .307.394.54.54 0 0 0 .502-.032c1.097-.696 2.18-1.06 3.552-1.06 3.383 0 5.48 2.877 5.48 5.92 0 4.177-2.992 7.083-6.486 7.083-1.072 0-1.852-.27-2.393-.56a.54.54 0 0 0-.53.008.53.53 0 0 0-.264.455v3.193c0 1.07.066 1.896 1.223 2.1.25.05.43.268.426.52a.53.53 0 0 1-.162.38.54.54 0 0 1-.388.151l-4.147-.07-2.627.057a.54.54 0 0 1-.395-.145.53.53 0 0 1-.167-.383v-.07c0-.257.18-.487.437-.53 1.04-.176 1.13-.742 1.13-1.53l.028-2.766-.028-8.963zm28.976 7.996c-1.135-.083-1.878-.083-4.852-.083l-3.23.085c-.337.016-.628-.23-.665-.56s.193-.634.525-.692c1.568-.218 1.635-.777 1.635-4.283V6.472c-.028-2.102-.055-2.74-.252-3.126-.2-.5-.543-.606-1.397-.747a.63.63 0 0 1-.531-.62c0-.387.295-.67.653-.66l4.715.063 3.455-.063c.35-.028.657.23.686.576a.63.63 0 0 1-.582.679c-1.657.205-1.657.702-1.657 4.37l.028 8.576c.056 2.906.084 3.072.42 3.514.24.28.614.427 1.2.503a.63.63 0 0 1 .544.623.63.63 0 0 1-.198.472c-.13.123-.306.186-.486.174zm.887-.6c0-.275.2-.5.472-.555.422-.07.933-.25 1-.78.084-.638.084-2.297.084-2.712l-.028-3.514c0-1.4-.47-1.77-1.132-1.955a.56.56 0 0 1-.407-.54v-.066c0-.275.2-.507.474-.553 1.392-.242 3.496-.83 4.603-1.208a.57.57 0 0 1 .438.028c.136.067.24.185.287.328l.064.214a.57.57 0 0 0 .838.328c1.055-.606 2.056-1.057 3.53-1.057 1.062 0 2.124.277 2.992.884 1.363.936 1.592 2.365 1.704 3.878.003.015.003.03.003.045v2.384l-.056 3.044c0 .7.2 1.126 1.116 1.296a.56.56 0 0 1 .271.963.57.57 0 0 1-.426.15l-3.953-.087-2.3.08a.57.57 0 0 1-.434-.145.56.56 0 0 1-.185-.415v-.118a.56.56 0 0 1 .42-.541c.818-.22.92-.605.895-2.3l-.056-4.316c-.03-1.327-.084-2.85-1.902-2.85-.757 0-1.344.274-1.908.696-.15.1-.237.286-.233.47l.044 6.552c0 1.27.22 1.62.905 1.8.244.063.4.3.4.54v.073a.56.56 0 0 1-.179.411.57.57 0 0 1-.425.152l-4.458-.097-1.868.073a.57.57 0 0 1-.436-.144.56.56 0 0 1-.184-.417v-.03zm29.087-2.408c.35.252.4.76.1 1.062-1.542 1.515-3.62 2.373-5.794 2.4-4 0-6.934-2.74-6.934-6.503 0-3.955 3.4-6.5 7.578-6.5 2.74 0 5.34 1.2 5.34 3.182 0 .94-.8 1.742-1.76 1.742-.42 0-.923-.194-1.23-.498-.252-.22-.308-.36-.84-1.55-.252-.526-.8-1.467-1.677-1.467-1.623 0-2.07 2.74-2.07 4.095 0 3.126 1.8 5.228 3.747 5.228 1.04 0 1.9-.473 2.665-1.137.248-.218.615-.237.885-.045zm3.86-1.53c1.37 0 2.543 1.08 2.543 2.517 0 1.412-1.172 2.5-2.515 2.5-1.374.014-2.5-1.076-2.518-2.435 0-1.715 1.343-2.573 2.5-2.573z" />
        </svg>
      );
    },
  },
  {
    name: "Strava",
    href: "#",
    logo: function StravaLogo({ className }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={109}
          height={22}
          fill="none"
          className={className}
        >
          <path
            d="M.605 18.014l3.447-4.126c2.1 1.607 4.513 2.284 6.778 2.284 1.162 0 1.666-.31 1.666-.832v-.058c0-.56-.6-.852-2.673-1.278-4.34-.89-8.154-2.13-8.154-6.217V7.73c0-3.68 2.866-6.528 8.212-6.528 3.738 0 6.49.89 8.735 2.653L15.44 8.23c-1.693-1.22-3.724-1.883-5.8-1.898-.968 0-1.415.33-1.415.794v.058c0 .522.522.852 2.576 1.24 4.958.9 8.27 2.342 8.27 6.256v.038c0 4.067-3.363 6.547-8.54 6.547-3.93.02-7.456-1.084-9.916-3.254l.001.001zM25.51 7.052h-5.693V1.57h17.857v5.48H31.98V20.92h-6.47V7.052zm28.22 7.282c2.342-1.143 3.815-3.1 3.815-5.908v-.058c0-1.994-.6-3.43-1.762-4.592-1.357-1.357-3.545-2.208-6.972-2.208h-9.45v19.35h6.47v-5.52h1.375l3.64 5.52h7.38l-4.495-6.584zM51.096 8.89c0 1.183-.948 1.878-2.48 1.878H45.83V6.992h2.83c1.49 0 2.458.6 2.458 1.86v.038h-.02zM67.442.755L57.003 20.92h6.934l3.505-7.05 3.505 7.05h6.934L67.442.755zm30.68 0L87.684 20.92h6.934l3.505-7.05 3.505 7.05h6.934L98.123.755zm-15.34 20.958L93.242 1.55h-6.934L82.803 8.6l-3.525-7.05h-6.934l10.44 20.164z"
            fill="currentColor"
          />
        </svg>
      );
    },
  },
];

export const LogoCloud = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        Con el apoyo y confianza de las mejores marcas del mercado
      </h2>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
          alt="Fronius"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
          alt="Victron"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
          alt="SunPower"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
          alt="SolarBlock"
          width={158}
          height={48}
        />
        <Image
          className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
          alt="Pylontech"
          width={158}
          height={48}
        />
      </div>
      {/* <section className="mx-auto max-w-screen-xl px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:px-8">
      // Section text
      <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl lg:max-w-3xl">
        <p className="inline-flex items-center justify-center rounded-r-full rounded-tl-full bg-gradient-to-r from-orange-400 to-orange-300 px-6 py-2 text-sm font-medium tracking-wide text-stone-700">
          Our partners
        </p>
        <h2 className="mt-6 text-3xl font-extrabold text-stone-700 sm:text-4xl md:text-5xl">
          Trusted by the best companies in the business
        </h2>
        <p className="mt-6 text-xl text-stone-700">
          Collaborating with various sectors, we’ve helped startups and
          established businesses alike to flourish.
        </p>
      </div>

      // Logos
      <div className="mx-auto mt-12 max-w-screen-lg lg:mt-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {logos.map((item, index) => (
            <Link
              href={item.href}
              key={`cloud-logo-${index}`}
              className="overflow-hidden"
            >
              <div className="group flex h-36 w-full items-center justify-center rounded-3xl bg-orange-300 transition duration-200 ease-in-out hover:bg-orange-200">
                <item.logo className="text-stone-600 transition duration-200 ease-in-out group-hover:text-stone-700" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section> */}
    </div>
  );
};
