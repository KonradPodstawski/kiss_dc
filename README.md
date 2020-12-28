# KISS_DC

## Simple Example

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

