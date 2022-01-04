import { useRouter } from "next/router";
import joinURL from "url-join";
import { GLOBAL_DATA } from "@/constants/globalData";
import regex from "@/constants/regex";

// data helpers
export const usePathData = () => {
  // This returns the post-domain url goodies from the router
  const router = useRouter();
  const { asPath, pathname, query } = router;
  return { asPath, pathname, query };
};

export const getResultsNumber = (hasNextPage, itemCount, perPage) => {
  if (hasNextPage === false) {
    return itemCount % perPage;
  }
  return itemCount > perPage ? perPage : itemCount;
};

// we can consolidate these :)
export const getPathnameFromRouter = (router) => {
  return router.asPath;
};

export const getRootPathFromRouter = (router) => {
  return "/" + router.asPath.split("/")[1];
};

export const getRootPathFromPathname = (asPath) => {
  const pathSansQueryString = asPath.split("?")[0];
  return "/" + pathSansQueryString.split("/")[1];
};

export const getActiveNavItem = (navItems, asPath) => {
  const path = getRootPathFromPathname(asPath);
  return navItems.find((item) => item.href === path);
};

export const getPageFromPath = (path) => {
  const noQueryString = path.split("?")[0];
  const pageArr = noQueryString.match(/\/(\d)$/);
  return pageArr?.[1];
};

export const getPageData = (page) => {
  return (
    GLOBAL_DATA.navItems.filter((item) => {
      return page === item.label.toLowerCase();
    })[0] || null
  );
};

export const normalizePathData = (pathnameInput) => {
  // params should come in as an object, { key: "value" }
  // however, if there is a querystring in the pathname, we must split them
  // so they are ready to be like this in the Next Link component:
  // const href = {
  //   pathname: simplePathname,
  //   query: { ...pathParams, ...params },
  // };
  if (!pathnameInput) return { pathParams: {} };

  const pathnameArray = pathnameInput.split("?");
  const simplePathname = pathnameArray.shift();
  const pathname = simplePathname.startsWith("/")
    ? simplePathname
    : "/" + simplePathname;
  const urlParams = new URLSearchParams(pathnameArray.shift());
  const pathParams = Object.fromEntries(urlParams);

  return { pathname, pathParams };
};

// FORMAT STRINGS, DATES AND CURRENCIES
export const simpleStripHtml = (html) => html && html.replace(/<[^>]*?>/g, "");

export const changeNewlines = (str) => {
  if (!str) return null;

  const result = str.replace(/(\\n)+/, "\n");
  return result.split("\n").map((str, i) => <p key={i}>{str}</p>);
};

export const optionalJoinString = (joinArray, joinCharacter = "|") => {
  return joinArray.filter(Boolean).join(` ${joinCharacter} `);
};

export const makeDate = (date) => {
  if (!date) {
    return null;
  }
  let newDate;
  if (date.includes("-")) {
    const arr = date.split("-");
    newDate = new Date(arr[0], arr[1] - 1, arr[2]);
  } else {
    newDate = new Date(date);
  }
  return newDate;
};

export const formatDate = (date, isShort = true, locale = "en-US") => {
  if (!date) {
    return null;
  }
  const options = {
    year: `${isShort ? "2-digit" : "numeric"}`,
    month: `${isShort ? "short" : "long"}`,
  };
  let dateString = date.toLocaleString(locale, options);
  isShort && (dateString = dateString.replace(/\s/, " '"));
  return dateString;
};

export const formatCurrency = (number, formatterOptions = {}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...formatterOptions,
  });

  return formatter.format(number);
};

export const formatNumber = (number) => {
  if (!number) {
    return "";
  }
  const formatter = new Intl.NumberFormat();
  return formatter.format(number);
};

export const formatTitleCase = (str) => {
  const toTitleCase = str
    .toLowerCase()
    .replace(/(^\w{1})|([\s|_]{1}\w{1})/g, (match) => match.toUpperCase());
  // and for the current purposes (demographic keys) re-lowercase the "of"
  return toTitleCase.replaceAll("Of", "of");
};

export const formatRefinement = (str) => {
  const refinement = formatTitleCase(str).replaceAll("_", " ");
  return refinement;
};

export const hasContent = (content) => {
  let result = false;

  if (!content) {
    return false;
  }

  switch (typeof content) {
    case "object":
      if (Array.isArray(content)) {
        result = content.length > 0 && content[0] !== null;
      } else {
        result =
          Object.keys(content).find((key) => {
            return hasContent(content[key]);
          }) !== undefined;
      }
      break;
    case "string":
      result = content.length > 0;
  }
  return result;
};

/**
 * Split a string or paragraph by period, question mark and exclamation point,
 * uppercase the first character and join on whitespace
 * @param str
 * @returns {*}
 */
export const formatSentenceCase = (str) => {
  if (typeof str !== "string") return;
  let matchedArray = str.match(/.*?[?!.]/g);
  /* simple string value, not a sentence */
  if (!matchedArray) matchedArray = [str];
  return matchedArray
    .map((sentence) => {
      return (
        sentence.trim()[0].toUpperCase() +
        sentence.trim().slice(1).toLowerCase()
      );
    })
    .join(" ");
};

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export function fetchEnv(value, key) {
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }

  return value;
}

export function s3URL(...parts) {
  return joinURL(
    fetchEnv(process.env.NEXT_PUBLIC_S3_URL, "NEXT_PUBLIC_S3_URL"),
    ...parts
  );
}

/**
 * This returns the publicly-accessible url for the site where next.js is running
 *
 * @return {string}
 */
export function nextURL(...parts) {
  return joinURL(
    fetchEnv(process.env.NEXT_PUBLIC_URL, "NEXT_PUBLIC_URL"),
    ...parts
  );
}

/**
 * Capitalizes string.
 *
 * @param  {String} string
 * @return {String}
 */
const capitalize = (string) => {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
};

/**
 * Capitalizes words.
 *
 * @param  {String} words
 * @return {String}
 */
export const capitalizeWords = (words) => {
  const wordsArray = words.split(" ");

  // single word
  if (wordsArray.length === 1) {
    return capitalize(words);
  }

  // multiple words
  return wordsArray.reduce((accumulatedWords, word) => {
    // first word
    if (!accumulatedWords) return capitalize(word);

    // empty array item
    if (!word) return accumulatedWords;

    // concatenate word
    return `${accumulatedWords} ${capitalize(word)}`;
  }, "");
};

let fullYear;

/**
 * Gets full year.
 *
 * @return {Number}
 */
export const getFullYear = () => {
  if (!fullYear) {
    fullYear = new Date().getFullYear();
  }
  return fullYear;
};

/**
 * Truncates text.
 *
 * @param  {String} text
 * @param  {Number} [limit]
 * @return {String}
 */
export const truncate = (text, limit) => {
  if (typeof text !== "string") return "";

  if (text.length > limit) {
    // truncate string based on limit
    text = text.substring(0, limit);
  }

  // truncate to last whitespace if applicable
  const lastSpaceIndex = text.lastIndexOf(" ");
  if (lastSpaceIndex !== -1) {
    text = text.substring(0, lastSpaceIndex);
  }

  // trim trailing whitespace/periods
  return text.replace(/[\s.]+$/g, "");
};

/**
 * Custom form field validator
 * @param rule {*}
 * @param value {string}
 * @param cb {Function}
 */
export const validPhoneNumber = (rule, value, cb) => {
  if (String(value).match(regex.PHONE_REGEX || value.length === 0)) {
    cb();
  } else if (value.length > 0) {
    cb("Please provide a mobile phone number.");
  } else {
    cb("");
  }
};

/**
 * Custom form field validator
 * @param rule {*}
 * @param value {string}
 * @param cb {Function}
 */
export const validEmail = (rule, value, cb) => {
  if (String(value).match(regex.EMAIL_REGEX)) {
    cb();
  } else if (value.length > 0) {
    cb("Please provide a valid email.");
  } else {
    cb("");
  }
};
