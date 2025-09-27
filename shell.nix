with import <nixpkgs> {};
mkShell {
    buildInputs = [ nodejs-12_x nginx yarn (yarn.override { nodejs = nodejs-12_x; }) ];
}

