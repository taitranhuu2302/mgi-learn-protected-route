export default defineEventHandler((event) => {
    const token = event.req.headers.cookie ? event.req.headers.cookie.split("; ").find(row => row.startsWith("token=")) : null;
    if (token) {
        const tokenValue = token.split("=")[1]
        event.context.user = tokenValue;
    }
})