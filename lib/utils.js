exports.errors = function (errors) {
  var keys = Object.keys(errors)
  var errs = []

  // if there is no validation error, just display a generic error
  if (!keys) {
    return ['Oops! There was an error']
  }

  keys.forEach(function (key) {
    if (errors[key]) errs.push(errors[key].message)
  })

  return errs
}

exports.awes = function () {
  var obj = {
    go: {
    	repo: '/avelino/awesome-go',
      name: 'Go', // display name
      readme: 'README.md', // URL for the markdown file
      start: 8, end: 57 // use start and end to crop TOC section
    },
    php: {
    	repo: '/ziadoz/awesome-php',
      name: 'PHP',
      readme: 'README.md',
      start: 6, end: 71
    },
    svg: {
    	repo: '/willianjusten/awesome-svg',
      name: 'SVG',
      readme: 'Readme.md',
      start: 4, end: 27
    },
    java: {
    	repo: '/akullpp/awesome-java',
      name: 'Java',
      readme: 'README.md',
      start: 4, end: 46
    },
    js: {
    	repo: '/sorrycc/awesome-javascript',
      name: 'JavaScript',
      readme: 'README.md',
      start: 4, end: 55
    },
    docker: {
    	repo: '/veggiemonk/awesome-docker',
      name: 'Docker',
      readme: 'README.md',
      start: 15, end: 33
    },
    ml: {
    	repo: '/josephmisiti/awesome-machine-learning',
      name: 'Machine Learning',
      readme: 'README.md',
      start: 7, end: 76
    },
    rust: {
    	repo: '/kud1ing/awesome-rust',
      name: 'Rust',
      readme: 'README.md',
      start: 4, end: 26
    },
    android: {
    	repo: '/JStumpp/awesome-android',
      name: 'Android',
      readme: 'readme.md',
      start: 5, end: 31
    },
    front_dev: {
    	repo: '/dypsilon/frontend-dev-bookmarks',
      name: 'Frontend Development',
      readme: 'README.md',
      start: -1, end: 1
    },
    clojure: {
    	repo: '/razum2um/awesome-clojure',
      name: 'Clojure',
      readme: 'README.md',
      start: 2, end: 37
    },
    cpp: {
    	repo: '/fffaraz/awesome-cpp',
      name: 'C/C++',
      readme: 'README.md',
      start: 3, end: 51
    },
    perl: {
    	repo: '/hachiojipm/awesome-perl',
      name: 'Perl',
      readme: 'README.md',
      start: 13, end: 24
    },
    nodejs: {
    	repo: '/sindresorhus/awesome-nodejs',
      name: 'Node.js',
      readme: 'readme.md',
      start: 7, end: 45
    },
    shell: {
    	repo: '/alebcay/awesome-shell',
      name: 'Shell',
      readme: 'README.md',
      start: 2, end: 10
    },
    scala: {
    	repo: '/lauris/awesome-scala',
      name: 'Scala',
      readme: 'README.md',
      start: 5, end: 20
    },
    elixir: {
    	repo: '/h4cc/awesome-elixir',
      name: 'Elixir',
      readme: 'README.md',
      start: 3, end: 54
    },
    dotnet: {
    	repo: '/quozd/awesome-dotnet',
      name: '.NET',
      readme: 'README.md',
      start: 10, end: 57
    },
    python: {
    	repo: '/kirang89/pycrumbs',
      name: 'Python',
      readme: 'pycrumbs.md',
      start: 0, end: 71
    },
    julia: {
    	repo: '/svaksha/Julia.jl',
      name: 'Julia',
      readme: 'README.md',
      start: 2, end: 4
    },
    ocaml: {
    	repo: '/rizo/awesome-ocaml',
      name: 'OCaml',
      readme: 'README.md',
      start: 3, end: 45
    },
    r: {
    	repo: '/qinwf/awesome-R',
      name: 'R',
      readme: 'README.md',
      start: 4, end: 23
    },
    ruby: {
    	repo: '/markets/awesome-ruby',
      name: 'Ruby',
      readme: 'README.md',
      start: 12, end: 82
    },
    ios: {
    	repo: '/vsouza/awesome-ios',
      name: 'iOS',
      readme: 'README.md',
      start: 5, end: 44
    },
    swift: {
    	repo: '/matteocrippa/awesome-swift',
      name: 'Swift',
      readme: 'README.md',
      start: 7, end: 30
    },
    haskell: {
    	repo: '/krispo/awesome-haskell',
      name: 'Haskell',
      readme: 'README.md',
      start: 5, end: 37
    },
    erlang: {
    	repo: '/drobakowski/awesome-erlang',
      name: 'Erlang',
      readme: 'README.md',
      start: 3, end: 34
    },
    erlang_bm: {
    	repo: '/0xAX/erlang-bookmarks',
      name: 'Erlang Bookmarks',
      readme: 'ErlangBookmarks.md',
      start: -1, end: 1
    },
    lua: {
    	repo: '/LewisJEllis/awesome-lua',
      name: 'Lua',
      readme: 'readme.md',
      start: 7, end: 43
    },
    algorithm: {
    	repo: '/tayllan/awesome-algorithms',
      name: 'Algorithm',
      readme: 'README.md',
      start: 5, end: 7
    },
    html5: {
    	repo: '/diegocard/awesome-html5',
      name: 'HTML5',
      readme: 'README.md',
      start: 5, end: 39
    },
    hadoop: {
    	repo: '/youngwookim/awesome-hadoop',
      name: 'Hadoop',
      readme: 'README.md',
      start: 4, end: 22
    },
    sublime: {
    	repo: '/dreikanter/sublime-bookmarks',
      name: 'Sublime Text',
      readme: 'README.md',
      start: -1, end: 1
    },
    tools: {
    	repo: '/cjbarber/ToolsOfTheTrade',
      name: 'Tools of The Trade',
      readme: 'README.md',
      start: 1, end: 88
    },
    dotfiles: {
    	repo: '/webpro/awesome-dotfiles',
      name: 'Dotfiles',
      readme: 'README.md',
      start: -1, end: 1
    },
    devenv: {
    	repo: '/jondot/awesome-devenv',
      name: 'Dev Env',
      readme: 'README.md',
      start: 19, end: 20
    },
    ccm: {
    	repo: '/shime/creative-commons-media',
      name: 'Creative Commons Media',
      readme: 'README.md',
      start: -1, end: 1
    },
    styleguide: {
    	repo: '/RichardLitt/awesome-styleguides',
      name: 'Styleguides',
      readme: 'README.md',
      start: -1, end: 1
    },
    gamedev: {
    	repo: '/ellisonleao/magictools',
      name: 'Game Development',
      readme: 'README.md',
      start: 2, end: 31
    },
    openresty: {
      repo: '/bungle/awesome-resty',
      name: 'OpenResty',
      readme: 'README.md',
      start: 10, end: 30
    },
    sysadmin: {
    	repo: '/kahun/awesome-sysadmin',
      name: 'Sysadmin',
      readme: 'README.md',
      start: 3, end: 49
    },
    koans: {
    	repo: '/ahmdrefat/awesome-koans',
      name: 'Koans',
      readme: 'koans-en.md',
      start: -1, end: 1
    },
    testbook: {
    	repo: '/ligurio/free-software-testing-books',
      name: 'Testing Books',
      readme: 'free-software-testing-books.md',
      start: -1, end: 1
    },
    cordova: {
    	repo: '/busterc/awesome-cordova',
      name: 'Cordova',
      readme: 'README.md',
      start: -1, end: 1
    },
    angularjs: {
    	repo: '/gianarb/awesome-angularjs',
      name: 'AngularJS',
      readme: 'README.md',
      start: 3, end: 18
    },
    backbone: {
    	repo: '/instanceofpro/awesome-backbone',
      name: 'Backbone',
      readme: 'README.md',
      start: -1, end: 1
    },
    knockout: {
    	repo: '/dnbard/awesome-knockout',
      name: 'Knockout',
      readme: 'readme.md',
      start: -1, end: 1
    },
    dojo: {
    	repo: '/peterkokot/awesome-dojo',
      name: 'Dojo',
      readme: 'README.md',
      start: 11, end: 13
    },
    react: {
    	repo: '/enaqx/awesome-react',
      name: 'React',
      readme: 'README.md',
      start: 4, end: 47
    },
    autohotkey: {
    	repo: '/ahkscript/awesome-AutoHotkey',
      name: 'AutoHotkey',
      readme: 'README.md',
      start: 4, end: 34
    },
    coldfusion: {
    	repo: '/seancoyne/awesome-coldfusion',
      name: 'ColdFusion',
      readme: 'README.md',
      start: 4, end: 17
    },
    d: {
    	repo: '/zhaopuming/awesome-d',
      name: 'D',
      readme: 'README.md',
      start: 10, end: 41
    },
    delphi: {
    	repo: '/Fr0sT-Brutal/awesome-delphi',
      name: 'Delphi',
      readme: 'README.md',
      start: 6, end: 23
    },
    fortran: {
    	repo: '/rabbiabram/awesome-fortran',
      name: 'Fortran',
      readme: 'README.md',
      start: 3, end: 11
    },
    groovy: {
    	repo: '/kdabir/awesome-groovy',
      name: 'Groovy',
      readme: 'README.md',
      start: 6, end: 16
    },
    analytics: {
    	repo: '/onurakpolat/awesome-analytics',
      name: 'Analytics',
      readme: 'README.md',
      start: 6, end: 10
    },
    apple: {
    	repo: '/joeljfischer/awesome-apple',
      name: 'Apple',
      readme: 'README.md',
      start: -1, end: 1
    },
    conferences: {
    	repo: '/RichardLitt/awesome-conferences',
      name: 'Conferences',
      readme: 'README.md',
      start: -1, end: 1
    },
    ciandcd: {
    	repo: '/itech001/ciandcd',
      name: 'Continuous Delivery',
      readme: 'README.md',
      start: 11, end: 25
    },
    datascience: {
    	repo: '/okulbilisim/awesome-datascience',
      name: 'Data Science',
      readme: 'README.md',
      start: -1, end: 1
    },
    db: {
    	repo: '/numetriclabz/awesome-db',
      name: 'Database',
      readme: 'README.md',
      start: -1, end: 1
    },
    dataset: {
    	repo: '/caesar0301/awesome-public-datasets',
      name: 'Dataset',
      readme: 'README.rst',
      start: -1, end: 1
    },
    docs: {
    	repo: '/PharkMillups/beautiful-docs',
      name: 'Documentation',
      readme: 'README.md',
      start: -1, end: 1
    },
    images: {
    	repo: '/heyalexej/awesome-images',
      name: 'Images',
      readme: 'README.md',
      start: -1, end: 1
    },
    papers: {
    	repo: '/papers-we-love/papers-we-love',
      name: 'Papers',
      readme: 'README.md',
      start: -1, end: 1
    },
    openscience: {
    	repo: '/silky/awesome-open-science',
      name: 'Open Science',
      readme: 'README.md',
      start: -1, end: 1
    },
    servicesengineering: {
    	repo: '/mmcgrana/services-engineering',
      name: 'Services Engineering',
      readme: 'README.md',
      start: -1, end: 1
    },
    nlp: {
    	repo: '/edobashira/speech-language-processing',
      name: 'Speech and Natural Language Processing',
      readme: 'README.rst',
      start: -1, end: 1
    },
    talks: {
    	repo: '/JanVanRyswyck/awesome-talks',
      name: 'Talks',
      readme: 'README.md',
      start: -1, end: 1
    },
    vagrant: {
    	repo: '/iJackUA/awesome-vagrant',
      name: 'Vagrant',
      readme: 'README.md',
      start: -1, end: 1
    },
    vim: {
    	repo: '/akrawchyk/awesome-vim',
      name: 'Vim',
      readme: 'README.md',
      start: -1, end: 1
    },
    wpo: {
    	repo: '/davidsonfellipe/awesome-wpo',
      name: 'Web Performance Optimization',
      readme: 'README.md',
      start: 4, end: 32
    },
    webcomponents: {
    	repo: '/mateusortiz/webcomponents-the-right-way',
      name: 'Web Components',
      readme: 'README.md',
      start: 4, end: 19
    },
    c: {
    	repo: '/aleksandar-todorovic/awesome-c',
      name: 'C - kozross',
      readme: 'README.md',
      start: -1, end: 1
    },
    frontendStuff: {
      repo: '/moklick/frontend-stuff',
      name: 'Frontend Stuff',
      readme: 'README.md',
      start: 6, end: 19
    },
    laravel: {
      repo: '/timothydjones/awesome-laravel',
      name: 'Laravel Framework',
      readme: 'README.md',
      start: -1, end: 1
    },
    cakephp: {
      repo: '/FriendsOfCake/awesome-cakephp',
      name: 'CakePHP',
      readme: 'README.md',
      start: 16, end: 50
    },
  };

  return obj;
}
