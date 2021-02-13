import App from 'next/app'
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return ( <>
                <Component {...pageProps} />
                <style>
                    {`
                        html,
                        body {
                          padding: 0;
                          margin: 0;
                          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                          font-size:12px;
                          letter-spacing:.3px;
                        }
                        
                        a {
                          color: inherit;
                          text-decoration: none;
                        }
                        
                        * {
                          box-sizing: border-box;
                        }
                        
                        button{
                          border:none;
                          outline:none;
                          background:inherit;
                          color:inherit;
                          padding:10px;
                          border:none;
                          border-radius:5px;
                          margin:10px;
                          cursor:pointer;
                        }
                        .container {
                            min-height: 100vh;
                            padding: 0 0.5rem;  
                            background: #121212;
                            color:#eee;
                            z-index: 1;
                          }
                    `}
                </style>
                </>
        );
    }
}

export default MyApp;