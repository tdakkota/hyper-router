var searchIndex = {};
searchIndex["hyper_router"] = {"doc":"Hyper Router","items":[[3,"Path","hyper_router","Represents a path in HTTP sense (starting from `/`)",null,null],[12,"matcher","","",0,null],[3,"Route","","Holds route information",null,null],[12,"method","","HTTP method to match",1,null],[12,"path","","Path to match",1,null],[12,"handler","","Request handler",1,null],[3,"RouteBuilder","","",null,null],[3,"RouterBuilder","","Builder for a router",null,null],[3,"Router","","This is the one. The router.",null,null],[3,"RouterService","","The default simple router service.",null,null],[12,"router","","",2,null],[12,"error_handler","","",2,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates a new path.",0,{"inputs":[{"name":"str"}],"output":{"name":"path"}}],[0,"route","","",null,null],[3,"Route","hyper_router::route","Holds route information",null,null],[12,"method","","HTTP method to match",1,null],[12,"path","","Path to match",1,null],[12,"handler","","Request handler",1,null],[3,"RouteBuilder","","",null,null],[11,"options","hyper_router","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"get","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"post","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"put","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"delete","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"head","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"trace","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"connect","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"patch","","",1,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"from","","",1,{"inputs":[{"name":"method"},{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"route"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",3,{"inputs":[{"name":"route"}],"output":{"name":"routebuilder"}}],[11,"using","","Completes the building process by taking the handler to process the request.",3,{"inputs":[{"name":"self"},{"name":"handler"}],"output":{"name":"route"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",4,{"inputs":[],"output":{"name":"routerbuilder"}}],[11,"add","","Adds new `Route` for `Router` that is being built.",4,{"inputs":[{"name":"self"},{"name":"route"}],"output":{"name":"routerbuilder"}}],[11,"build","","",4,{"inputs":[{"name":"self"}],"output":{"name":"router"}}],[0,"handlers","","",null,null],[5,"default_404_handler","hyper_router::handlers","",null,{"inputs":[{"name":"request"}],"output":{"name":"response"}}],[5,"method_not_supported_handler","","",null,{"inputs":[{"name":"request"}],"output":{"name":"response"}}],[5,"internal_server_error_handler","","",null,{"inputs":[{"name":"request"}],"output":{"name":"response"}}],[5,"not_implemented_handler","","",null,{"inputs":[{"name":"request"}],"output":{"name":"response"}}],[6,"Handler","hyper_router","",null,null],[6,"HttpResult","","",null,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"find_handler_with_defaults","","Finds handler for given Hyper request.",5,{"inputs":[{"name":"self"},{"name":"request"}],"output":{"name":"handler"}}],[11,"find_handler","","Finds handler for given Hyper request.",5,{"inputs":[{"name":"self"},{"name":"request"}],"output":{"generics":["handler"],"name":"httpresult"}}],[11,"find_matching_routes","","Returns vector of `Route`s that match to given path.",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["route"],"name":"vec"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",2,{"inputs":[{"name":"router"}],"output":{"name":"routerservice"}}],[11,"call","","",2,null]],"paths":[[3,"Path"],[3,"Route"],[3,"RouterService"],[3,"RouteBuilder"],[3,"RouterBuilder"],[3,"Router"]]};
searchIndex["test_server"] = {"doc":"","items":[],"paths":[]};
initSearch(searchIndex);
