////
//  https://gist.github.com/candycode/f18ae1767b2b0aba568e
////

var blob2ImageUrl = function(bufferArray){
    var arrayBufferView = new Uint8Array( bufferArray );
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL( blob );
}

export default blob2ImageUrl;