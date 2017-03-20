var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>

        {/*  Basic Page Needs
         ==================================================================*/}
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content="This is a simple, responsive webpage with a carousel" />

        {/*  Mobile Specific Metas - Use minimum-scale=1 to enable GPU rasterization
         ==================================================================*/}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1" />

        {/*  CSS + FONT + ICONS
         ==================================================================*/}
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        {/*  SCRIPTS
         ==================================================================*/}
          <script src="/build/bundle.js"></script>
          <script dangerouslySetInnerHTML={{__html:`
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `}}/>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string
};

module.exports = Layout;
