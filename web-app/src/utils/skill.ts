const skills = {
  adonisjs: true,
  aftereffects: true,
  amazonwebservices: true,
  android: true,
  androidstudio: true,
  aarch64: true,
  angularjs: true,
  ansible: true,
  apache: true,
  apachekafka: true,
  appcelerator: true,
  apple: true,
  appwrite: true,
  arduino: true,
  atom: true,
  azure: true,
  babel: true,
  backbonejs: true,
  bamboo: true,
  bash: true,
  behance: true,
  bitbucket: true,
  bootstrap: true,
  bulma: true,
  bower: true,
  c: true,
  cakephp: true,
  canva: true,
  centos: true,
  ceylon: true,
  chrome: true,
  circleci: true,
  clojure: true,
  cmake: true,
  clojurescript: true,
  codecov: true,
  codeigniter: true,
  codepen: true,
  coffeescript: true,
  composer: true,
  confluence: true,
  couchdb: true,
  cplusplus: true,
  csharp: true,
  css3: true,
  cucumber: true,
  crystal: true,
  d3js: true,
  dart: true,
  debian: true,
  denojs: true,
  devicon: true,
  django: true,
  docker: true,
  doctrine: true,
  "dot-net": true,
  dotnetcore: true,
  drupal: true,
  digitalocean: true,
  discordjs: true,
  electron: true,
  eleventy: true,
  elixir: true,
  elm: true,
  ember: true,
  embeddedc: true,
  erlang: true,
  eslint: true,
  express: true,
  facebook: true,
  feathersjs: true,
  figma: true,
  filezilla: true,
  firebase: true,
  firefox: true,
  flask: true,
  flutter: true,
  foundation: true,
  fsharp: true,
  gatling: true,
  gatsby: true,
  rect: true,
  gcc: true,
  gentoo: true,
  gimp: true,
  git: true,
  github: true,
  gitlab: true,
  gitter: true,
  go: true,
  google: true,
  googlecloud: true,
  gradle: true,
  grafana: true,
  grails: true,
  graphql: true,
  groovy: true,
  grunt: true,
  gulp: true,
  godot: true,
  haskell: true,
  handlebars: true,
  haxe: true,
  heroku: true,
  html5: true,
  hugo: true,
  ie10: true,
  ifttt: true,
  illustrator: true,
  inkscape: true,
  intellij: true,
  ionic: true,
  jamstack: true,
  jasmine: true,
  java: true,
  javascript: true,
  jeet: true,
  jest: true,
  jenkins: true,
  jetbrains: true,
  jira: true,
  jquery: true,
  julia: true,
  jupyter: true,
  kaggle: true,
  karma: true,
  kotlin: true,
  knockout: true,
  krakenjs: true,
  kubernetes: true,
  labview: true,
  laravel: true,
  latex: true,
  less: true,
  linkedin: true,
  lua: true,
  linux: true,
  materialui: true,
  matlab: true,
  magento: true,
  markdown: true,
  maya: true,
  meteor: true,
  minitab: true,
  mocha: true,
  modx: true,
  mongodb: true,
  moodle: true,
  msdos: true,
  mysql: true,
  neo4j: true,
  nestjs: true,
  networkx: true,
  nextjs: true,
  nginx: true,
  nixos: true,
  nodejs: true,
  nodewebkit: true,
  npm: true,
  nuget: true,
  numpy: true,
  nuxtjs: true,
  objectivec: true,
  opera: true,
  ocaml: true,
  openal: true,
  opengl: true,
  opensuse: true,
  oracle: true,
  pandas: true,
  perl: true,
  phalcon: true,
  photoshop: true,
  php: true,
  phpstorm: true,
  podman: true,
  polygon: true,
  postgresql: true,
  premierepro: true,
  processing: true,
  protractor: true,
  putty: true,
  pycharm: true,
  python: true,
  pytorch: true,
  raspberrypi: true,
  phoenix: true,
  qt: true,
  r: true,
  rails: true,
  react: true,
  redhat: true,
  redis: true,
  redux: true,
  rocksdb: true,
  ruby: true,
  rubymine: true,
  rust: true,
  safari: true,
  salesforce: true,
  sdl: true,
  rstudio: true,
  sass: true,
  scala: true,
  selenium: true,
  sequelize: true,
  shopware: true,
  shotgrid: true,
  sketch: true,
  slack: true,
  socketio: true,
  solidity: true,
  sourcetree: true,
  spring: true,
  spss: true,
  sqlalchemy: true,
  sqlite: true,
  subversion: true,
  microsoftsqlserver: true,
  ssh: true,
  stylus: true,
  svelte: true,
  swift: true,
  symfony: true,
  storybook: true,
  tailwindcss: true,
  tensorflow: true,
  terraform: true,
  threejs: true,
  tomcat: true,
  tortoisegit: true,
  towergit: true,
  travis: true,
  thealgorithms: true,
  trello: true,
  twitter: true,
  typescript: true,
  typo3: true,
  ubuntu: true,
  unity: true,
  unix: true,
  unrealengine: true,
  uwsgi: true,
  vagrant: true,
  vim: true,
  visualstudio: true,
  vuejs: true,
  vuestorefront: true,
  vscode: true,
  webflow: true,
  weblate: true,
  webpack: true,
  webstorm: true,
  windows8: true,
  woocommerce: true,
  wordpress: true,
  xamarin: true,
  xcode: true,
  xd: true,
  yarn: true,
  yii: true,
  yunohost: true,
  zend: true,
  zig: true,
  pytest: true,
  opencv: true,
  fastapi: true,
  k3s: true,
  packer: true,
  anaconda: true,
  rspec: true,
  argocd: true,
  prometheus: true,
  blender: true,
  dropwizard: true,
  vuetify: true,
  fedora: true,
}
function convertToDeviconName(inputString: string): string {
  // Convert to lowercase, remove spaces and special characters
  const deviconName: string = inputString
    .toLowerCase()
    .replace(/\s+/g, "") // Remove spaces
    .replace(/[^\w\d]+/g, "") // Remove non-word characters (except digits)

  return deviconName
}

export default function deviconName(inputString: string): [boolean, string] {
  const devName = convertToDeviconName(inputString)
  const isKeyPresent = Object.keys(skills).includes(devName)
  return [isKeyPresent, devName]
}
