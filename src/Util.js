

//-------------------------------
// General Utilities
//-------------------------------

/**
 * Utilities class for chords. This is for general utils and should not depend on
 * any other class
 * 
 * @class C.Util
 */
C.Util = {
    /**
     * Extend an object with properties of one or more other objects
     * 
     * @param {Object} dest Object to be extended
     * @param {Object} classes/instances One or more other objects to extend from
     * @return {Object} Altered dest
     * @static
     */
    extend: function (dest) {
	var i, j, len, src;
	
	for (j = 1, len = arguments.length; j < len; j++) {
	    src = arguments[j];
	    for (i in src) {
		dest[i] = src[i];
	    }
	}
	return dest;
    },
    
    /**
     * Create an object from a given prototype
     * 
     * @return {Object}
     * @static
     */
    create: Object.create || (function () {
	function F() {}
	return function (proto) {
	    F.prototype = proto;
	    return new F();
	};
    })(),
    
    /**
     * Set options to an object, inheriting parent's options as well
     * 
     * @param {Object} obj
     * @param {Object} options
     * @return {Object} obj.options
     * @static
     */
    setOptions: function (obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? C.Util.create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
    },
    
    
    /**
     * Check (and return true) if a propery of an object 
     * is null. Key is given in string format "xxx.yyy.zzz"
     * 
     * @param {Object} obj 
     * @param {String} key
     * @return {Boolean}
     * @static
     */
    objNull: function(obj, key){
	return (C.Util.objValue(obj,key,undefined)===undefined)
    },
    
    /**
     * Return the value of a propery of an object. If it is null, the
     * defVal will be returned. Key is given in string format "xxx.yyy.zzz"
     * 
     * @param {Object} obj 
     * @param {String} key
     * @param {Object} defVal
     * @return Property value or defVal
     * @static
     */
    objValue: function(obj, key, defVal){
	if (!obj) return defVal;
	var keys = key.split("."), value;
	for(var i = 0; i < keys.length; i++){
	    if(typeof obj[keys[i]] !== "undefined"){
		value = obj = obj[keys[i]];
	    }else{
		return defVal;
	    }
	}
	return value;
    },
    
    /**
     * Return true if an object is empty 
     * 
     * @param {Object} obj 
     * @return {Boolean}
     * @static
     */
    objIsEmpty: function(obj){
	for(var key in obj) {
	    if(obj.hasOwnProperty(key)) return false;
	}
	
	return true;
    },
    
    /**
     * Trim whitespace from both sides of a string
     * @param {String} str 
     * @return {String}
     * @static
     */
    trim: function (str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    },
    
    /**
     * Split a string into words
     * 
     * @param {String} str 
     * @return {Array} of Strings...
     * @static
     */
    splitWords: function (str) {
	return C.Util.trim(str).split(/\s+/);
    },
    
    /**
     * Clone an object instead of pointing to it!
     * 
     * @param {Object/Array} o
     * @return {Object/Array}
     * @static
     */
    clone: function(o) {
	if(typeof(o) != 'object' || o == null) return o;
	
	var newO = new Object();
	if (Object.prototype.toString.call( o ) === '[object Array]' ) 
	    newO = new Array();
	
	for(var i in o) {
	    // Detect dom ones
	    
	    if (o["map"] == o[i]){
		newO[i] = o[i];
	    }else if (o[i].parentNode == undefined){
		newO[i] = C.Util.clone(o[i]);
	    }else{
		newO[i] = o[i].cloneNode(false);
	    }
	}
	return newO;
    },
    
    /**
     * Parse the URL query string and return it as object
     * @return {Object} 
     * @static
     */
    getQueryString: function() {
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	
	for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    // If first entry with this name
	    var p1 = decodeURIComponent(pair[1]);
	    if (typeof query_string[pair[0]] === "undefined") {
		if (pair[0]=="") continue;
		query_string[pair[0]] = p1;
		// If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
		var arr = [ query_string[pair[0]], p1];
		query_string[pair[0]] = arr;
		// If third or later entry with this name
	    } else {
		query_string[pair[0]].push(p1);
	    }
	} 
	return query_string;
    }

}


/**
 * Alias to C.Util.setOptions
 * @method setOptions
 * @member C
 * @static
 */
C.setOptions = C.Util.setOptions;
/**
 * Alias to C.Util.extend
 * @method extend
 * @member C
 * @static
 */
C.extend     = C.Util.extend;
 

/**
 * @class Array
 */

/**
 * Get max out of array
 * @return {Number}
 */
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

/**
 * Get min out of array
 * @return {Number}
 */
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

/**
 * Find min graeater than gt
 * @return {Number}
 */
Array.prototype.mingt = function(gt){
    var min = 1000000000;
    for(var i=0;i<this.length;i++){
	if(this[i] < min && this[i] > gt)
	    min=this[i];
    }
    return min;
};

/**
 * Sort numerically
 * @return {Array}
 */
Array.prototype.sortn = function(){
    return this.sort(function(a,b){return a-b});
};

/**
 * Return true if item is found in the array
 * @return {Boolean}
 */
Array.prototype.hasItem = function(item){
    return (this.indexOf(item)!==-1);
};

/**
 * Return new array with duplicate values removed
 * @return {Array}
 */
Array.prototype.unique = function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
	for(var j=i+1; j<l; j++) {
	    // If this[i] is found later in the array
	    if (this[i] === this[j])
		j = ++i;
	}
	a.push(this[i]);
    }
    return a;
};

/**
 * Return new array with duplicate values removed and
 * values that are greater than gt
 * @return {Array}
 */
Array.prototype.uniquegt = function(gt) {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
	if (this[i]<=gt) continue;
	for(var j=i+1; j<l; j++) {
	    // If this[i] is found later in the array
	    if (this[i] === this[j])
		j = ++i;
	}
	a.push(this[i]);
    }
    return a;
};

/**
 * Find count of "what" in the array (uses ==, only 
 * primitives...)
 * @return {Number}
 */
Array.prototype.countWhat = function(what){
    var c = 0;
    for(var i=0;i<this.length;i++){
	if(this[i] === what)
	    c++;
    }
    return c;
};


