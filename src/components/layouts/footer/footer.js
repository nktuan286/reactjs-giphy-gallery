import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

    render() {
        return (
            <footer id="sticky-footer" className="py-4 text-white-50">
                <div className="wrapper-copy-right-part">
                    <div className="container footer-copy-right-part">
                        <div className="copy-right-flex-item-1">
                            Gallereasy POC web app
                        </div>
                        <div className="copy-right-flex-item-3">
                            2359 media
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
