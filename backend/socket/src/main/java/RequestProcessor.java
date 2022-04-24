import java.io.*;
import java.net.*;
import java.util.HashMap;
import org.json.JSONObject;

public class RequestProcessor {

  private Socket socket = null;
  private OutputStream os = null;
  private BufferedReader in = null;
  private DataInputStream dis = null;
  private String msgToClient =
    "HTTP/1.1 200 OK\n" +
    "Server: HTTP server/0.1\n" +
    "Access-Control-Allow-Origin: *\n\n";
  private JSONObject jsonObject = new JSONObject();

  public RequestProcessor(Socket Socket) {
    super();
    try {
      socket = Socket;
      in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
      os = socket.getOutputStream();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public void run() throws IOException {
    //write your code here

    // end of your code
    String response = msgToClient + jsonObject.toString();

    os.write(response.getBytes());
    os.flush();
    socket.close();
  }
}
