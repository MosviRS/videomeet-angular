const DATABASE = {
    host: process.env.HOST || 'localhost',
    user: process.env.USERDB || 'postgres',
    password: process.env.PASSWORD || "root",
    database: process.env.DATABASE || "videocall",
};
export {
    DATABASE
}