import { useRouter } from "next/router"
import joinURL from "url-join"
import { surveyPaths, questionPaths } from "./paths"

// data helpers
export const usePathData = () => {
  // This returns the post-domain url goodies from the router
  const router = useRouter()
  const { asPath, pathname, query } = router
  return { asPath, pathname, query }
}

// This will let some paths pre-generate
// E.g. PS5/q-0/2
export const getSurveyPaths = () => surveyPaths

// E.g. PS5A.Q20
export const getQuestionPaths = () => questionPaths

export const getContentObject = (content) => {
  const arr = content?.pages || content?.topics
  return arr[0]
}

export const getResultsNumber = (hasNextPage, itemCount, perPage) => {
  if (hasNextPage === false) {
    return itemCount % perPage
  }
  return itemCount > perPage ? perPage : itemCount
}

// we can consolidate these :)
export const getPathnameFromRouter = (router) => {
  return router.asPath
}

export const getRootPathFromRouter = (router) => {
  return "/" + router.asPath.split("/")[1]
}

export const getRootPathFromPathname = (asPath) => {
  const pathSansQueryString = asPath.split("?")[0]
  return "/" + pathSansQueryString.split("/")[1]
}

export const getActiveNavItem = (navItems, asPath) => {
  const path = getRootPathFromPathname(asPath)
  return navItems.find((item) => item.href === path)
}

export const getSurveyPath = (path = "", withQ = false) => {
  if (withQ) {
    return path.replace(/(\/tab-\d)?(\/\d*)?$/, "")
  }
  return path.replace(/\/q-(\d)+(\/tab-\d)?(\/\d*)?$/, "")
}

export const getIdFromPath = (path = "", type = "survey") => {
  if (type === "questionnaire") {
    return getSurveyPath(path, true).slice(-1)
  } else if (type === "question") {
    const arr = path.replace(/\/(\d)$/, "").split("/")
    return arr?.[arr.length - 1]
  }
  const arr = getSurveyPath(path).split("/")
  return arr?.[arr.length - 1]
}

export const getPageFromPath = (path) => {
  const noQueryString = path.split("?")[0]
  const pageArr = noQueryString.match(/\/(\d)$/)
  return pageArr?.[1]
}

export const normalizePathData = (pathnameInput) => {
  // params should come in as an object, { key: "value" }
  // however, if there is a querystring in the pathname, we must split them
  // so they are ready to be like this in the Next Link component:
  // const href = {
  //   pathname: simplePathname,
  //   query: { ...pathParams, ...params },
  // };
  if (!pathnameInput) return { pathParams: {} }

  const pathnameArray = pathnameInput.split("?")
  const simplePathname = pathnameArray.shift()
  const pathname = simplePathname.startsWith("/")
    ? simplePathname
    : "/" + simplePathname
  const urlParams = new URLSearchParams(pathnameArray.shift())
  const pathParams = Object.fromEntries(urlParams)

  return { pathname, pathParams }
}

// FORMAT STRINGS, DATES AND CURRENCIES
export const simpleStripHtml = (html) => html && html.replace(/<[^>]*?>/g, "")

export const changeNewlines = (str) => {
  if (!str) return null

  const result = str.replace(/(\\n)+/, "\n")
  return result.split("\n").map((str, i) => <p key={i}>{str}</p>)
}

export const optionalJoinString = (joinArray, joinCharacter = "|") => {
  return joinArray.filter(Boolean).join(` ${joinCharacter} `)
}

export const makeDate = (date) => {
  if (!date) {
    return null
  }
  let newDate
  if (date.includes("-")) {
    const arr = date.split("-")
    newDate = new Date(arr[0], arr[1] - 1, arr[2])
  } else {
    newDate = new Date(date)
  }
  return newDate
}

export const formatDate = (date, isShort = true, locale = "en-US") => {
  if (!date) {
    return null
  }
  const options = {
    year: `${isShort ? "2-digit" : "numeric"}`,
    month: `${isShort ? "short" : "long"}`,
  }
  let dateString = date.toLocaleString(locale, options)
  isShort && (dateString = dateString.replace(/\s/, " '"))
  return dateString
}

export const formatCurrency = (number, formatterOptions = {}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...formatterOptions,
  })

  return formatter.format(number)
}

export const formatNumber = (number) => {
  if (!number) {
    return ""
  }
  const formatter = new Intl.NumberFormat()
  return formatter.format(number)
}

export const formatTitleCase = (str) => {
  const toTitleCase = str
    .toLowerCase()
    .replace(/(^\w{1})|([\s|_]{1}\w{1})/g, (match) => match.toUpperCase())
  // and for the current purposes (demographic keys) re-lowercase the "of"
  return toTitleCase.replaceAll("Of", "of")
}

export const formatRefinement = (str) => {
  const refinement = formatTitleCase(str).replaceAll("_", " ")
  return refinement
}

export const hasContent = (content) => {
  let result = false

  if (!content) {
    return false;
  }

  switch (typeof content) {
    case "object":
      if (Array.isArray(content)) {
        result = content.length > 0 && content[0] !== null
      } else {
        result =
          Object.keys(content).find((key) => {
            return hasContent(content[key])
          }) !== undefined
      }
      break
    case "string":
      result = content.length > 0
  }
  return result
}

export const groupQuestionsByPart = (data = []) => {
  if (data.length === 0) {
    return []
  }

  let currentPart
  const groupedQuestions = data.reduce((arr, el) => {
    const qPart = el.part

    if (qPart === currentPart) {
      arr[arr.length - 1].rows.push({ ...el })
    } else {
      arr.push({ part: qPart, rows: [{ ...el }] })
      currentPart = qPart
    }

    return arr
  }, [])

  return groupedQuestions
}

export const groupRowsByYear = (data) => {
  let currentYear
  const groupedRows = data.reduce((arr, el) => {
    const rowDate = el.date ? formatDate(el.date) : ""
    const rowYear = rowDate.substring(rowDate.indexOf("'") + 1)

    if (rowYear === currentYear) {
      arr[arr.length - 1].rows.push({ ...el, date: rowDate })
    } else {
      arr.push({ year: rowYear, rows: [{ ...el, date: rowDate }] })
      currentYear = rowYear
    }

    return arr
  }, [])

  return groupedRows
}

/**
 * Split a string or paragraph by period, question mark and exclamation point,
 * uppercase the first character and join on whitespace
 * @param str
 * @returns {*}
 */
export const formatSentenceCase = (str) => {
  if (typeof str !== "string") return
  let matchedArray = str.match(/.*?[?!.]/g)
  /* simple string value, not a sentence */
  if (!matchedArray) matchedArray = [str]
  return matchedArray
    .map((sentence) => {
      return (
        sentence.trim()[0].toUpperCase() +
        sentence.trim().slice(1).toLowerCase()
      )
    })
    .join(" ")
}

export const formatQuestion = (str) => {
  if (typeof str !== "string") return

  // split off the current bracketed ids
  const id = str.substring(0, str.indexOf("]") + 1)
  const strLessId = str.substring(str.indexOf("]") + 1, str.length)

  let matchedArray = strLessId.match(/.*?[?!.]/g)
  /* simple string value, not a sentence */
  if (!matchedArray) matchedArray = [strLessId]

  const finalString =
    id +
    " " +
    matchedArray
      .map((sentence) => {
        return (
          sentence.trim()[0].toUpperCase() +
          sentence.trim().slice(1).toLowerCase()
        )
      })
      .join(" ")

  return finalString
}

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function fetchEnv(value, key) {
  if (!value) {
    throw new Error(`Missing required env var: ${key}`)
  }

  return value
}

export function s3URL(...parts) {
  return joinURL(
    fetchEnv(process.env.NEXT_PUBLIC_S3_URL, "NEXT_PUBLIC_S3_URL"),
    ...parts
  )
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
  )
}

/**
 * This generates a URL for content from strapi (rather GraphQL or images, uploads, etc) that
 * can be accessed in the client. It's necessary for generating proper image sources in React,
 * and also for using apollo on the client.
 *
 * @return {string}
 */
export function strapiURL(...parts) {
  return joinURL(
    fetchEnv(process.env.NEXT_PUBLIC_STRAPI_URL, "NEXT_PUBLIC_STRAPI_URL"),
    ...parts
  )
}

/**
 * This generates a URL for talking to strapi in server-side process. Distinct because when running
 * locally especially, we need to use internal docker addressing. localhost:1337 will not resolve
 * within getStaticProps, etc, and apollo needs to be able to do that.
 *
 * It should *only* run in a server context, and will raise an error otherwise.
 *
 * @return {string}
 */
export function privateStrapiURL(...parts) {
  if (process.env.NEXT_PUBLIC_IS_DOCKER_BUILD) {
    return strapiURL(...parts)
  }

  if (typeof window !== "undefined") {
    throw new Error("privateStrapiURL should only be executed on the server")
  }

  return joinURL(
    fetchEnv(
      process.env.NEXT_PUBLIC_STRAPI_PRIVATE_URL,
      "NEXT_PUBLIC_STRAPI_PRIVATE_URL"
    ),
    ...parts
  )
}

/**
 * @return {string} a browser-accessible URL for talking to the graphql container
 */
export function relayURL() {
  return fetchEnv(
    process.env.NEXT_PUBLIC_RELAY_API_URL,
    "NEXT_PUBLIC_RELAY_API_URL"
  )
}

/**
 * This generates a URL for talking to GraphQL in server-side process. Distinct because when running
 * locally especially, we need to use internal docker addressing. localhost:4000 will not resolve
 * within getStaticProps, etc, and relay needs to be able to do that.
 *
 * It should *only* run in a server context, and will raise an error otherwise.
 *
 * @return {string}
 */
export function relayPrivateURL() {
  if (process.env.NEXT_PUBLIC_IS_DOCKER_BUILD) {
    return relayURL()
  }

  if (typeof window !== "undefined") {
    throw new Error("privateRelayURL should only be executed on the server")
  }

  return fetchEnv(
    process.env.NEXT_PUBLIC_RELAY_PRIVATE_URL,
    "NEXT_PUBLIC_RELAY_PRIVATE_URL"
  )
}
