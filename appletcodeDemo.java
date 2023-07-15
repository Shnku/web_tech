
/**
 * appletcodeDemo
 */
import java.awt.*;

import org.w3c.dom.events.Event;

import java.applet.*;

public class appletcodeDemo extends Applet {
    TextField t1, t2;

    public void init() {
        t1 = new TextField(8);
        t2 = new TextField(8);
        add(t1);
        add(t2);
        t1.setText("0");
        t2.setText("0");
    }

    public void paint(Graphics g) {
        int x, y, z;
        x = y = z = 0;
        String s1, s2, s3;
        g.drawString("input a no in the box: ", 10, 75);
        try {
            s1 = t1.getText();
            x = Integer.parseInt(s1);
            s2 = t2.getText();
            y = Integer.parseInt(s2);
        } catch (Exception e) {
            // TODO: handle exception
        }
        z = x + y;
        s3 = String.valueOf(z);
        g.drawString("the sum is", 10, 75);
        g.drawString(s3, 100, 75);
    }

    public boolean action(Event e, Object o) {
        repaint();
        return true;
    }

}
