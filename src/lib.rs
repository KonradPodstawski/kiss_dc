use std::net::TcpListener;
use tungstenite::server::accept;

#[derive(Debug, Copy, Clone, PartialOrd, PartialEq)]
pub struct ServerState {
    ip_v4: &'static str,
}
/// Create an isntation of the server that will communicate with the client
///
impl ServerState {
    pub fn new(ip_v4: &'static str) -> Self {
        Self { ip_v4 }
    }
    /// The function that constitutes the core of the library, sends the code to the client with the given "name" and returns the result.    
    /// The first argument is the code you want to send, the second is the identifier ("name") and the language in which the code was written.
    ///
    ///
    pub fn run_server(
        self,
        message: &'static str,
        identification_string: &'static str,
        leanguage: &'static str,
    ) -> Result<String, tungstenite::Error> {
        let mut get_message = String::from(" ");
        'socket_loop: loop {
            let server = TcpListener::bind(self.ip_v4)?;

            'main_loop: for stream in server.incoming() {
                let mut websocket = match accept(stream?) {
                    Ok(s) => s,
                    Err(error) => {
                        println!("Error: {:?} ", error);
                        continue 'socket_loop;
                    }
                };

                loop {
                    let msg = websocket.read_message()?;

                    #[cfg(feature = "socket_debug")]
                    println!("{:?}", msg);

                    get_message = msg.to_text()?.to_string();
                    if msg.is_binary() || msg.is_text() {
                        if msg.to_text()? == identification_string.to_string() {
                            websocket
                                .write_message(tungstenite::Message::Text(leanguage.to_string()))?;
                            websocket
                                .write_message(tungstenite::Message::Text(message.to_string()))?;
                        } else {
                            break 'main_loop;
                        }
                    }
                }
            }

            if get_message != identification_string.to_string() {
                if get_message.find(identification_string) == Some(0) {
                    let (_, now) = get_message.split_at(identification_string.len());
                    get_message = now.to_string();

                    break 'socket_loop;
                }
            }
        }
        Ok(get_message)
    }
    /// run the file with the name given to the variable file_name with the extension .wasm
    ///
    pub fn run_server_wasm(
        self,
        identification_string: &'static str,
        file_name: &'static str,
    ) -> Result<String, tungstenite::Error> {
        let mut get_message = String::from(" ");
        'socket_loop: loop {
            let server = TcpListener::bind(self.ip_v4)?;

            'main_loop: for stream in server.incoming() {
                let mut websocket = match accept(stream?) {
                    Ok(s) => s,
                    Err(error) => {
                        println!("Error: {:?} ", error);
                        continue 'socket_loop;
                    }
                };

                loop {
                    let msg = websocket.read_message()?;

                    #[cfg(feature = "socket_debug")]
                    println!("{:?}", msg);

                    get_message = msg.to_text()?.to_string();
                    if msg.is_binary() || msg.is_text() {
                        if msg.to_text()? == identification_string.to_string() {
                            websocket
                                .write_message(tungstenite::Message::Text("wasm".to_string()))?;
                            websocket
                                .write_message(tungstenite::Message::Text(file_name.to_string()))?;
                        } else {
                            break 'main_loop;
                        }
                    }
                }
            }

            if get_message != identification_string.to_string() {
                if get_message.find(identification_string) == Some(0) {
                    let (_, now) = get_message.split_at(identification_string.len());
                    get_message = now.to_string();

                    break 'socket_loop;
                }
            }
        }
        Ok(get_message)
    }

    ///
    /// first argument: program code
    /// secound argument: device identification string
    /// third arguments: program language
    pub fn run_server_queue(
        self,
        arguments_vec: &mut Vec<(&str, &str, &str)>,
    ) -> Result<Vec<String>, tungstenite::Error> {
        let server = TcpListener::bind(self.ip_v4)?;
        let mut get_message = String::from(" ");
        let mut return_vec = Vec::new();
        let mut message;
        let mut identification_string;
        let mut leanguage;

        for buff in arguments_vec.iter_mut() {
            message = buff.0;
            identification_string = buff.1;
            leanguage = buff.2;

            'socket_loop: loop {
                'main: for stream in server.incoming() {
                    // spawn(move || -> ! {
                    let mut websocket = match accept(stream?) {
                        Ok(s) => s,
                        Err(error) => {
                            println!("Kiss error: {:?} ", error);
                            continue 'socket_loop;
                        }
                    };

                    loop {
                        let msg = websocket.read_message()?;

                        #[cfg(feature = "socket_debug")]
                        println!("{:?}", msg);

                        get_message = msg.to_text()?.to_string();

                        if msg.is_binary() || msg.is_text() {
                            if msg.to_text()? == identification_string.to_string() {
                                websocket.write_message(tungstenite::Message::Text(
                                    leanguage.to_string(),
                                ))?;
                                websocket.write_message(tungstenite::Message::Text(
                                    message.to_string(),
                                ))?;
                            } else {
                                break 'main;
                            }
                        }
                    }
                }

                if get_message != identification_string.to_string() {
                    if get_message.find(identification_string) == Some(0) {
                        let (_, now) = get_message.split_at(identification_string.len());
                        get_message = now.to_string();
                        return_vec.push(get_message.clone());

                        break 'socket_loop;
                    } else {
                        continue 'socket_loop;
                    }
                }
            }
        }
        Ok(return_vec)
    }
    ///
    ///
    /// first argument: device identification string
    /// secound argument: name filr with program code
    pub fn run_server_queue_wasm(
        self,
        arguments_vec: &mut Vec<(&str, &str)>,
    ) -> Result<Vec<String>, tungstenite::Error> {
        let server = TcpListener::bind(self.ip_v4)?;
        let mut get_message = String::from(" ");
        let mut return_vec = Vec::new();
        let mut file_name;
        let mut identification_string;

        for buff in arguments_vec.iter_mut() {
            identification_string = buff.0;
            file_name = buff.1;

            'socket_loop: loop {
                'main: for stream in server.incoming() {
                    let mut websocket = match accept(stream?) {
                        Ok(s) => s,
                        Err(error) => {
                            println!("Kiss error: {:?} ", error);
                            continue 'socket_loop;
                        }
                    };

                    loop {
                        let msg = websocket.read_message()?;

                        #[cfg(feature = "socket_debug")]
                        println!("{:?}", msg);

                        get_message = msg.to_text()?.to_string();
                        if msg.is_binary() || msg.is_text() {
                            if msg.to_text()? == identification_string.to_string() {
                                websocket.write_message(tungstenite::Message::Text(
                                    "wasm".to_string(),
                                ))?;
                                websocket.write_message(tungstenite::Message::Text(
                                    file_name.to_string(),
                                ))?;
                            } else {
                                break 'main;
                            }
                        }
                    }
                }

                if get_message != identification_string.to_string() {
                    if get_message.find(identification_string) == Some(0) {
                        let (_, now) = get_message.split_at(identification_string.len());
                        get_message = now.to_string();
                        return_vec.push(get_message.clone());

                        break 'socket_loop;
                    } else {
                        continue 'socket_loop;
                    }
                }
            }
        }
        Ok(return_vec)
    }
}
