import dotenv from "dotenv"
import type { StringValue } from "ms";
import path from "path"

dotenv.config({
    path: path.join(process.cwd(),".env")
})


const config = {
    url: process.env.URL,
    connection_string: process.env.CONNECTIONSTRING as string,
    port: process.env.PORT,
    secret : process.env.JWT_SECRET,
    refresh_secret: process.env.REFRESH_SECRET,
    access_duration: process.env.ACCESS_DURATION as StringValue,
    refresh_duration: process.env.REFRESH_DURATION as StringValue,
}

export default config;