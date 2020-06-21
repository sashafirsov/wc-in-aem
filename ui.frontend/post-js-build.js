const path = require('path');
const fs = require('fs-extra');
const BUILD_DIR = path.join(__dirname, 'build');

const RES_DIR = path.join(__dirname, 'dist','clientlib-site');
const RES_BUILD = path.join(RES_DIR,'build');
fs.mkdirsSync( RES_DIR );

fs.removeSync( RES_BUILD );
fs.moveSync( BUILD_DIR, RES_BUILD , true );
