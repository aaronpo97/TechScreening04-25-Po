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
      String operation;

      switch (calcOperations.get("operation")) {
        case "add":
          answer = (leftOperand + rightOperand);
          operation = "+";
          break;
        case "subtract":
          answer = (leftOperand - rightOperand);
          operation = "-";
          break;
        case "multiply":
          answer = (leftOperand * rightOperand);
          operation = "\u00d7";
          break;
        case "divide":
          if (rightOperand == 0) throw new Exception("Cannot divide by zero.");
          answer = (leftOperand / rightOperand);
          operation = "\u00f7";
          break;
        case "modulo":
          answer = (leftOperand % rightOperand);
          operation = "%";
          break;
        default:
          throw new Exception("Invalid operand.");
      }

      String expression =
        calcOperations.get("leftOperand") +
        " " +
        operation +
        " " +
        calcOperations.get("rightOperand");

      jsonObject
        .put("expression", expression)
        .put("result", answer)
        .put("success", true)
        .put("status", 200);
    } catch (Exception e) {
      jsonObject
        .put("error", "Could not parse request.")
        .put("message", e.getMessage())
        .put("success", false)
        .put("status", 400);

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
