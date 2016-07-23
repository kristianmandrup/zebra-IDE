import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import autobind from 'autobind-decorator';

function checkbox(x, y) {
  return new zebra.ui.Checkbox("Check-box").properties({
    type: 'Checkbox',
    value: true,
    location: [x, y]
  });
}

function button(label, x, y, onClick) {
  var button = new zebra.ui.Button(label, [
    function mouseEntered(e){ this.setBackground("orange"); },
    function mouseExited(e) { this.setBackground(null); },

    function focused() {
      console.log('button focus');
      this.$super();
       if (this.hasFocus()) {
            this.focusComponent.setColor("orange");
       }
       else {
            this.focusComponent.setColor("black");
       }
    },
    function focusGained(e) {
      console.log('button focusGained');
    }
    ]
  ).properties({
    type: 'Button',
    value: true,
    location: [x, y]
  });

  if (onClick) {
    button.bind(onClick);
  }
  return button;
}

// TODO: class
function slider(props) {
  var defaults = {
    type: 'Slider',
    value: true,
    size : [120, 60],
    location: [10,10]
  }
  props.location = props.location || [];
  props.location[0] = props.location[0] || props.x;
  props.location[1] = props.location[1] || props.y;

  props = Object.assign(defaults, props);

  return new zebra.ui.Slider().properties(props);
}

function textField(text, x, y) {
  var text = new zebra.ui.TextField(text).properties({ 
    font: new zebra.ui.Font("Arial", "bold", 24), 
    padding:8
  });
  return text;
}

export default class Designer extends Component {
  static propTypes = {
  };

  changeBtnText() {
    console.log('changeBtnText');
    this.root.add(zebra.layout.BOTTOM, textField('hello'));
  }

  design(object) {
    var shaper = new zebkit.ui.designer.ShaperPan(object, [

      function mousePressed(e) {
        console.log('shaper pressed', e.source.kids[0].type);
      },

      function focused(e) {
        console.log('shaper focus', e);
      }
    ]);
    return shaper;
  }

  componentDidMount() {
    var self = this;
     zebkit.ready(function() {
        self.canvas = new zebra.ui.zCanvas('screen', 400, 600)
        // canvas.fullScreen();
        self.root = self.canvas.root;

        // fill canvas root panel with UI components
        // root.setLayout(new zebra.layout.BorderLayout(8));
        // root.add(zebra.layout.CENTER, new zebra.ui.TextArea(""));
        // root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));

        self.root.properties({
          layout : new zebra.layout.BorderLayout(4, 4),
          border : new zebra.ui.Border(),
          padding: 8,
          kids: {
            center: new zebra.ui.BorderPan("Designer panel", new zebra.ui.Panel({
              padding: 6,
              kids: [
                self.design(checkbox(10,10)),

                self.design(button('hello', 90, 50, self.changeBtnText)),

                self.design(slider({x: 100, y: 80, name: 'Slider-1'}))
              ]
            })),

            bottom: new zebra.ui.Button("Align", [
              function fire() {
                this.$super();
                var y = 10, c = self.root.findAll("//zebkit.ui.designer.ShaperPan");
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
 