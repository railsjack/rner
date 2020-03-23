#!/usr/bin/env ts-node

import bootstrap from "rner/lib/bootstrap";

function setTerminalTitle(title)
{
  // process.stdout.write(
  //   String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  // );
  process.title = title;
}
bootstrap.start();
setTerminalTitle('title');

