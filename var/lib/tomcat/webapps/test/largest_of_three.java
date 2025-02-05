import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class largest_of_three {

    public static void main(String[] args) {
        String inpuString = "23,45,67";
        String saperateString[] = inpuString.split(",");

        List<Double> numbers = new ArrayList<>();
        for (String s : saperateString) {
            numbers.add(Double.parseDouble(s));
        }
        System.out.println(Collections.max(numbers));
    }
}