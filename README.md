# KISS_DC

## Simple Example
 ![alt](https://github.com/FiveDomain/kiss_dc/blob/master/logo.png?raw=true)

<p align="center">
KISS_DC is a tool that allows you to use the computer of a person with a previously prepared script (https://github.com/FiveDomain/KISS_DC_client_example) as a computing unit in a very simple way. The tool allows you to write code in languages such as JS and Python.
One of the planned changes is adding the possibility of writing in every language compiling into WASM.
</p>

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
