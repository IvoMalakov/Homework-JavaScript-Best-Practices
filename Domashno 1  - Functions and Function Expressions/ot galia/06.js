var selector = ".birds";

function traverse(selector) {

    // if selector is class it returns array of elements so we have to use iteration
     if(selector[0]==='.'){
         selector = selector.substring(1,selector.length);
         var startNode = document.getElementsByClassName(selector);
         var length = startNode.length;

         //iteration for all children
         for (var i = 0; i <length; i++) {
             traverseNode(startNode[i], '')
         }
     }
     //if selector is ID we pass element to recursive method
     else if (selector[0]==='#'){
         selector = selector.substring(1,selector.length);
         var startNode = document.getElementById(selector);
         traverseNode(startNode,'');
     }
}


function traverseNode(node, space){

    //-------------------------- CODE FOR CONSOLE.LOG ----------------------------------------------//
    space = space || ' ';
    var info = '';

    //iteration all attributes
    for (var i = 0; i < node.attributes.length; i++) {
        if (i!=0) {         //if the current attribute is not first we need whitespace between attributes
            info +=' ';
        }
        info += node.attributes[i].name+ "=\"" + node.attributes[i].value + "\"";
    }

    console.log(space + node.nodeName.toLowerCase() + ": " + info);


    //-------------------------- CODE RECURSIVE CALL ----------------------------------------------//

    var len = node.childNodes.length;
    for (var i = 0; i < len; i++) {
        var child = node.childNodes[i];
        var nodetype = child.nodeType;
        if(nodetype === 1) { //in DOM ----> nodeType return num. In this case we check for ELEMENT_NODE = 1;
            traverseNode(child, space+' ')
        }
    }
}

traverse(selector);