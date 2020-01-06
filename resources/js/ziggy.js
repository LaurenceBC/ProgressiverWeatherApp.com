var Ziggy = {
    namedRoutes: {"login":{"uri":"login","methods":["POST"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["POST"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"login.provider":{"uri":"login\/redirect\/{driver}","methods":["GET","HEAD"],"domain":null},"login.callback":{"uri":"login\/{driver}\/callback","methods":["GET","HEAD"],"domain":null},"user.weather.home.add":{"uri":"user\/weather\/home\/add","methods":["POST"],"domain":null},"home":{"uri":"{any}","methods":["GET","HEAD"],"domain":null}},
    baseUrl: 'http://localhost:3000/',
    baseProtocol: 'http',
    baseDomain: 'localhost',
    basePort: 3000,
    defaultParameters: []
};

if (typeof window.Ziggy !== 'undefined') {
    for (var name in window.Ziggy.namedRoutes) {
        Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
    }
}

export {
    Ziggy
}
