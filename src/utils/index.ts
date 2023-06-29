export const sliceEmail = (email: string | null) => {
    return !email ? false : email.charAt(0).toUpperCase() + email.split('@')[0].slice(1) 
}