exports.config = {
  paths: {
    watched: ['main.scss'],
    public: "dist"
  },
  files: {
    stylesheets: {
        joinTo: "style.css"
    }
  },
  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring')()
      ]
    },
    sass: {
      mode: 'ruby'
    },
    copycat:{
      "assets": ["dist"],
      verbose : false, //shows each file that is copied to the destination directory
      onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
    }
  }
};