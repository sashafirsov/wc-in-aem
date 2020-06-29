const CDN_ROOT = "/etc.clientlibs/wc-in-aem/clientlibs/clientlib-site/resources/build";
const path = require('path');
const fs = require('fs-extra');
const isDir = path => { try{ return fs.lstatSync(path).isDirectory(); }catch(e){ return false; } }
const BUILD_DIR = path.join(__dirname, 'build');

const RES_DIR = path.join(__dirname, 'dist','clientlib-site');
const RES_BUILD = path.join(RES_DIR,'build');
fs.mkdirsSync( RES_DIR );

fs.removeSync( RES_BUILD );


fs.readdirSync( BUILD_DIR )
.filter( d => isDir( path.join( BUILD_DIR, d ) ) )
.forEach( d =>
{
    const indexFilePath = path.join(BUILD_DIR,d, 'index.html');
    const txt = fs.readFileSync(indexFilePath, 'utf8')
                    .replace( /src=\"/g , `src="${CDN_ROOT}/${d}/` )
                    .replace( /<html>/   , `` )
                    .replace( /<\/html>/ , `` )
                    .replace( /<head>/   , `` )
                    .replace( /<\/head>/ , `` )
                    .replace( /<body>/   , `` )
                    .replace( /<\/body>/ , `` );
    fs.moveSync( indexFilePath, indexFilePath+'0' );
    fs.writeFileSync( indexFilePath, txt );
});

fs.moveSync( BUILD_DIR, RES_BUILD , true );

const COMP_DIR = path.join(__dirname, "components");
fs.mkdirsSync( RES_DIR );

fs.copySync( COMP_DIR , path.join(RES_DIR,'components') );
