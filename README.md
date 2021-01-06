# KISS_DC


 ![alt](https://github.com/FiveDomain/kiss_dc/blob/master/logo.png?raw=true)

<p align="center">
KISS_DC is a tool that allows to use a person's computer with a previously prepared script (https://github.com/FiveDomain/KISS_DC_client_example) as a computing unit. This tool allows you to write code in languages such as JS and Python (and after the comilation to .wasm from such languages as Rust, Go, C++, C#, Java, Python or TypeScript. and many others ). One of the planned changes is adding Load Balancer / Computing Balancer.
</p>

## Simple Python Example 
```rust
use kiss_dc::*;

fn main() {

let code = "
def fib(until):
    n1 = 0
    n2 = 1
    count = 0

    while count < until:

        n1, n2 = n2, n1 + n2
        count += 1
    return n1

print(fib(50))";

    let exmaple_message = ServerState::new("192.168.7.105:6142").run_server(code, "Madzia", "python");

    if exmaple_message.is_ok() {
        println!("Marek: {}", exmaple_message.unwrap_or(String::from("ServerFuction Crashed")));
    }
    
}

```
## Simple WebAssembly Example 

```rust
use kiss_dc::*;

fn main() {

    let test_message_js = ServerState::new("192.168.7.103:6142").run_server_wasm("x-y-z-123", "kiss_dc_wasm_module.wasm");

    println!("x-y-z-123: {}", test_message_js.unwrap_or(String::from("ServerFuction Crashed")));
}

```
<p>
In case of a webassembly, a file named dc_kiss_wasm_module.wasm is required in the client server directory.
</p>
