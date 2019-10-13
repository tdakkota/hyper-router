extern crate hyper;
extern crate hyper_router;

use hyper::{Body, Method, Request, Response};
use hyper::header::{CONTENT_LENGTH, CONTENT_TYPE};
use hyper::rt::Future;
use hyper::server::Server;

use hyper_router::{Route, RouterBuilder, RouterService};

fn middleware(next: hyper_router::Handler) -> hyper_router::Handler {
    println!("middleware!!!");
    next
}

fn middleware2(next: hyper_router::Handler) -> hyper_router::Handler {
    println!("middleware2!!!");
    next
}

fn request_handler(_: Request<Body>) -> Response<Body> {
    let body = "Hello World";
    Response::builder()
        .header(CONTENT_LENGTH, body.len() as u64)
        .header(CONTENT_TYPE, "text/plain")
        .body(Body::from(body))
        .expect("Failed to construct the response")
}

fn router_service() -> Result<RouterService, std::io::Error> {
    let router = RouterBuilder::new()
        .add(Route::get("/hello").using(request_handler))
        .add(Route::from(Method::PATCH, "/world").using(request_handler))
        .build();

    let service = RouterService::new(router)
        .add_middleware(middleware)
        .add_middleware(middleware2);
    Ok(service)
}

fn main() {
    let addr = "0.0.0.0:8080".parse().unwrap();
    let server = Server::bind(&addr)
        .serve(router_service)
        .map_err(|e| eprintln!("server error: {}", e));

    hyper::rt::run(server)
}
