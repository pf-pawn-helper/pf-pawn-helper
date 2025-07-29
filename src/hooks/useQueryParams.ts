import { useState } from "react";

const windowIsDefined = () => typeof window !== "undefined";

const getQuery = () => {
  if (windowIsDefined()) {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
};

const getQueryStringValues = (key: string): string[] => getQuery().getAll(key);

export const useQueryParam = (
  key: string,
  defaultValue: string | undefined
): [string, (newValue: string) => void] => {
  const [query, setQuery] = useQueryParamArray(
    key,
    defaultValue && defaultValue.trim() !== "" ? [defaultValue] : []
  );

  const updateUrl = (newValue: string | undefined) =>
    setQuery(newValue && newValue.trim() !== "" ? [newValue] : []);

  return [query[0] ?? "", updateUrl];
};

export const useQueryParamArray = (
  key: string,
  defaultValues: string[]
): [string[], (newValues: string[]) => void] => {
  const [query, setQuery] = useState(
    getQueryStringValues(key).length > 0
      ? getQueryStringValues(key)
      : defaultValues
  );

  const updateUrl = (newValues: string[]) => {
    setQuery(newValues);

    const query = getQuery();
    console.log("updating query", query);

    if (newValues.length > 0) {
      newValues.forEach((value, index) => {
        if (index === 0) {
          query.set(key, value);
        } else {
          query.append(key, value);
        }
      });
    } else {
      query.delete(key);
    }

    if (windowIsDefined()) {
      const { protocol, pathname, host } = window.location;
      const queryString = query.toString().trim();
      const queryParams = queryString === "" ? "" : `?${queryString}`;
      const newUrl = `${protocol}//${host}${pathname}${queryParams}`;
      window.history.pushState({}, "", newUrl);
    }
  };

  return [query, updateUrl];
};
