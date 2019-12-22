module.exports = {
    presets: [
        ["@babel/preset-env", {
            modules: process.env.BUILD_TYPE === 'client' ? false : 'auto'
        }]
    ],
    plugins: [
        ["module-resolver", {
            root: ["./"],
            alias: {
                "@": "./",
                "@client": "./client",
                "@server": "./server",
                "@store": "./client/store",
                "@pages": "./client/pages",
                "@models": "./server/models",
                "@config": "./server/config",
                "@routes": "./server/routes",
                "@middleware": "./server/middleware",
                "@validators": "./server/validators",
                "@components": "./client/components",
                "@controllers": "./server/controllers"
            }
        }]
    ],
    ignore: [
        'server/public/app.js'
    ]
}
