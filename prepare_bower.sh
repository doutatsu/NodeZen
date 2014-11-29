  #!/usr/bin/env bash

  echo "Prepare Bower"

  if [ -d lib/assets/bower_components ]; then
      echo "Removing components"
      rm -rf lib/assets/bower_components
  fi

  node_modules/bower/bin/bower install