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
    String request = (in.readLine());
    String[] parsedRequestParams = request
      .split(" ")[1].split("/")[1].split("&");

    HashMap<String, String> calcOperations = new HashMap<String, String>();

    for (String requestParam : parsedRequestParams) {
      String[] keyValues = requestParam.split("=");
      String key = (keyValues[0]);
      String value = keyValues[1];

      calcOperations.put(key, value);
    }

    float leftOperand, rightOperand;

    leftOperand = Float.parseFloat(calcOperations.get("leftOperand"));
    rightOperand = Float.parseFloat(calcOperations.get("rightOperand"));

    float answer;
    switch (calcOperations.get("operation")) {
      case "+":
        answer = (rightOperand + leftOperand);
        break;
      case "-":
        answer = (rightOperand - leftOperand);
        break;
      case "*":
        answer = (rightOperand * leftOperand);
        break;
      case "/":
        answer = (rightOperand / leftOperand);
        break;
      case "%":
        answer = (rightOperand % leftOperand);
        break;
      default:
        answer = 0;
    }

    String expression =
      calcOperations.get("leftOperand") +
      " " +
      calcOperations.get("operation") +
      " " +
      calcOperations.get("rightOperand");
    jsonObject.put("expression", expression);
    jsonObject.put("result", answer);

    // end of your code
    String response = msgToClient + jsonObject.toString();

    os.write(response.getBytes());
    os.flush();
    socket.close();
  }
}
