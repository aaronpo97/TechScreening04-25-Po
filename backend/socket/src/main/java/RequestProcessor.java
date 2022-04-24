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
    try {
      String request = (in.readLine());

      System.out.println("Request made: ");
      System.out.println(request);

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
        case "add":
          answer = (rightOperand + leftOperand);
          break;
        case "subtract":
          answer = (rightOperand - leftOperand);
          break;
        case "multiply":
          answer = (rightOperand * leftOperand);
          break;
        case "divide":
          answer = (rightOperand / leftOperand);
          break;
        case "modulo":
          answer = (rightOperand % leftOperand);
          break;
        default:
          throw new Exception("Invalid operand.");
      }

      String expression =
        calcOperations.get("leftOperand") +
        " " +
        calcOperations.get("operation") +
        " " +
        calcOperations.get("rightOperand");

      jsonObject.put("expression", expression);
      jsonObject.put("result", answer);
      jsonObject.put("success", true);
      jsonObject.put("status", 200);
    } catch (Exception e) {
      jsonObject.put("error", "Could not parse request.");
      jsonObject.put("message", e.getMessage());
      jsonObject.put("success", true);
      jsonObject.put("status", 200);

      System.out.println("Something went wrong.");

      msgToClient =
        "HTTP/1.1 400 Bad Request\n" +
        "Server: HTTP server/0.1\n" +
        "Access-Control-Allow-Origin: *\n\n";
    }
    // end of your code
    String response = msgToClient + jsonObject.toString();

    os.write(response.getBytes());
    os.flush();

    socket.close();
  }
}
