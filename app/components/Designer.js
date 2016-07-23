import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import autobind from 'autobind-decorator';

export default class Designer extends Component {
  static propTypes = {
  };

  componentDidMount() {
     zebkit.ready(function() {
        var canvas = new zebra.ui.zCanvas('screen', 400, 600)
        // canvas.fullScreen();
        var root = canvas.root;

        // fill canvas root panel with UI components
        // root.setLayout(new zebra.layout.BorderLayout(8));
        // root.add(zebra.layout.CENTER, new zebra.ui.TextArea(""));
        // root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));


        root.properties({
          layout : new zebra.layout.BorderLayout(4, 4),
          border : new zebra.ui.Border(),
          padding: 8,
          kids: {
            center: new zebra.ui.BorderPan("Designer panel", new zebra.ui.Panel({
              padding: 6,
              kids: [
                new zebkit.ui.designer.ShaperPan(new zebra.ui.Checkbox("Check-box").properties({
                  value:true,
                  location: [10, 10]
                })),

                new zebkit.ui.designer.ShaperPan(new zebra.ui.Button("Button").properties({
                  value:true,
                  location: [90, 50]
                })),

                new zebkit.ui.designer.ShaperPan(new zebra.ui.Slider().properties({
                  value:true,
                  size : [120, 60],
                  location: [30, 100]
                }))
              ]
            })),

            bottom: new zebra.ui.Button("Align", [
              function fire() {
                this.$super();
                var y = 10, c = root.findAll("//zebkit.ui.designer.ShaperPan");
                for(var i=0; i < c.length; i++)  {
                  c[i].toPreferredSize();
                  c[i].setLocation(10, y);
                  y += c[i].height + 5;
                }
              }
            ])
          }
        });
    });
  }

  render() {
    return (
      <div id="canvas">
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <canvas id="screen" className={styles.canvas}>
        </canvas>
      </div>
    )
  }
}
 