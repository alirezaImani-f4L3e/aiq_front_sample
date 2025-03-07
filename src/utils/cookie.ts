import { COOKIE_CACHE_DAYS } from "@/const/settings"
import dayjs from "dayjs"

export const setCookie = (key: string, value: string | undefined) => {
    const expires = dayjs().add(COOKIE_CACHE_DAYS, 'day').toISOString();

    document.cookie = `${key}=${value};expires=${expires};path=/;`
}