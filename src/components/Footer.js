import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                       &copyright {new Date().getFullYear()} Copyright
                       <a className="grey-text text-lighten-4 right" href="#!">
                           APP
                       </a>
                        </div>
                </div>
            </footer>
        </div>
    )
}
