class AppError {
    menssage: string
    statusCode: number

    constructor (message: string, statusCode: number) {
        this.menssage = message
        this.statusCode = statusCode
    }
}


export { AppError }