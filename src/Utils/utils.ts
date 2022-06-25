import {DateTime} from "luxon";
import {colors} from "./data";

export const DateDiff = (date1: DateTime, date2: DateTime) => {
    return date1.diff(date2, ["years", "months"])
}

export const setTheme = (isDark: boolean) => {
    /**
     * Changes the properties which are used the css based on dark / light theme.
     */
    const root = document.querySelector<HTMLInputElement>(':root');
    if (!root) throw Error("Could not retrieve root selector");
    Object.entries(colors[isDark ? 'dark' : 'light']).map(([key, value]) => {
        root.style.setProperty(key, value);
    })
}