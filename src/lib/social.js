import hello from 'hellojs';

hello.init({
    facebook: 288081538367097,
    google: '924384423437-vhmq2ua8vrl5ar9e8p6chlhca68k3f6i.apps.googleusercontent.com'
}, {redirect_uri: '/redirect.html'});

export default(function () {
    return {
        facebook: () => {
            return new Promise((resolve, reject) => {
                // hellojs 는 일반 Promise 가 아닌 Promise A+ 를 사용하므로, Promise 로 감싸줌
                hello.login('facebook', { scope: 'email' }).then(
                    auth => resolve(auth.authResponse.access_token),
                    e => reject(e)
                );
            })
        },
        google: () => {
            return new Promise((resolve, reject) => {
                hello.login('google', { scope: 'email' }).then(
                    auth => resolve(auth.authResponse.access_token),
                    e => reject(e)
                );
            })
        }
    }
})();
