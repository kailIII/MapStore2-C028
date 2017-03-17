/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const src = require("../../assets/img/logo.jpg");

const Footer = React.createClass({
    render() {
        return (
            <div className="ms-footer col-md-12">
            <div><a target="_blank" href="http://www.comune.bolzano.it/index_it.html"> <img src={src} width="140" title="GeoSolutions" alt="GeoSolutions" /></a> <br/><br/></div>
                Città di Bolzano - vicolo Gumer 7 - 39100 Bolzano - centralino: 0471 997111 – codice fiscale/partita IVA: 00389240219 <br/>
                PEC: bz@legalmail.it :: Orari - Copyright - Privacy Policy - Credits - Informativa estesa - cookies
            </div>
        );
    }
});

module.exports = {
    FooterPlugin: Footer
};