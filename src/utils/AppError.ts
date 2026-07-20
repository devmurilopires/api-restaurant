class AppError {
    menssage: string
    statusCode: number

    constructor (message: string, statusCode: number = 400) {
        this.menssage = message
        this.statusCode = statusCode
    }
}


export { AppError }