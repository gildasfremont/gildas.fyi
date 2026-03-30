#!/bin/bash
export PATH="/opt/homebrew/bin:$PATH"
exec npx serve /Users/gildasfremont/Desktop/Travail/site-perso -l ${PORT:-8080} --no-clipboard
