const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

// const rawInput = `[({(<(())[]>[[{[]{<()<>>
//   [(()[<>])]({[<{<<[]>>(
//   {([(<{}[<>[]}>{[]{[(<()>
//   (((({<>}<{<{<>}{[]{[]{}
//   [[<[([]))<([[{}[[()]]]
//   [{[{({}]{}}([{[{{{}}([]
//   {<[[]]>}<{[{[{[]{()[[[]
//   [<(<(<(<{}))><([]([]()
//   <{([([[(<>()){}]>(<<{{
//   <{([{{}}[<[[[<>{}]]]>[]]`;
const rawInput = `{{[<(<<<([{(({<>()}<[]()>)<({}{})(()<>)>){[([]()]{[]()}][<()()>{()[]}]}}[[(<[][]><{}{}>)]<[{{}()}
  {<{<{[[[{[{<([[]()](()<>))>([<[]()>])}<{[[<>[]]<{}()>](<{}()>([]()))}<[{[][]}[<><>]][<()()>]>>
  <<{[[<([<(<<([(){}])>(<<[]{}>(<>{})>({[]<>}{{}<>}))>)>]{[<[({<<>()>[()())}{([]())[<>[]]})([<(){}>]<<[][]>{{
  {[[[<({{{[{{({<>[]}[()()])[<<>[]>(()<>)]}<{{()()}[()()]}({{}()})>}[{[(<>{}){<><>]]<(()()){{}}>}<{{<>()}[[]
  [<{[{[<[{[[({(()<>)}<{[]{}}<()>])<([[]<>][[]<>])(<<>()>{(){}})>]{{(<()[]>[<>{}]){([]{})}}[{{{}{}}(<>{}
  [<<<{<<[((({{[{}[]]}}[[<()[]>(<>[])]{({}{})(()[])}]){<{{()()}{{}[]}}<{[]()}>>{<[(){}]><<{}{}><
  {[({[[[{<({[((<>[])([]{})){{{}<>}{(){}}}][<[{}{}]<{}()>><{{}()}<<><>]>]})>([[<[<<><>>{{}()}]<[{}
  {(<(<{{(<[(((([]{})<{}[]>))(([[]()]{()<>})(({}{}){<>[]})))]{[([{<>{}}{()<>}]<[{}()]<<><>>>
  {<[[[(<[{(<({[{}()]{(){}}}{{()<>}(()[])})({[{}()]{[]}})>)({{[{()()}[[][]])((<><>)<<><>>)}{
  {<{(<[(<{([<[<[][]>[()[]]]<{<>()}([]())>>]([{<<>{}><{}{}>}[[[]{}]<[]{}>]]{({()[]}){({}())((){})}})){([
  <[(((<{{<[[{<(<><>)<<><>>>{{[]<>}<()>}}<(<[]()>{()<>}]{([]<>)[[]{}]}>]](<{{({}<>)[[]()]}[([])]}<[<{
  ({[[(<{[({<{<[{}()]([]{})>(({}{})(()<>))}<(<{}[]>({}()))[({}<>)]>>}[[([[(){}]([]<>)][(<><>)({}{}}])<{[{}()]}[
  [{{[(({[{{({(<()[]>{[]<>})}{[({}())]{<()[]>[{}{}]}})<(([()<>]{()()}){([]{})<[]>}){<<()<>>[<><>]>{<<>{}
  {{<{[(<(({<{{<(){}>(()<>)}}[<<{}()>{{}{}}>([<>()]{<><>}]]>}(({{<{}()>([]())}{({}())}})<<{{
  {{<<<[{{<[(({[<>{}][[]()]})({[<>()]<<>[]>}(<{}{}>([]<>))))[[((()())[{}{}])[<[]()>[()<>]]]{[({}{})
  (({[({{<([<[{{(){}}<{}[]>}]([({}<>){<>[]}]{({}{})(()())})><{<[{}{}]{[][]}>{[{}{}]{[][]}}}{<[()]<{}{}>>
  [{[({<({<<({((<>()))})<{<[[]<>](<><>)>}[{<<>[]>{<>()}}([{}{}]{{}[]})]>>>})>})<[[<[{{(<({<><>}{<><>})<<(){}>>>
  {(<<{(<{<[[{<<()[]>{()<>}>}{(<<>()>({}()))}]]>([<[<<{}>[<>{}]>({[]<>}(()[]))]<{{<>()}<{}{}>}
  {{(<([[<[({<{{{}{}}(<><>)}<({}<>)<{}[]>>>}[[({()<>}{{}[]}){<{}[]>{{}[]}}]<[{{}()}([]())][({}{})[{
  (<(<<{<[{{((<{{}()}[()]>({{}()}[[][]]))({{()[]}[<>{}]}{<()[]><()<>>}))[{[{[]()}[{}()]]([{}<>])}{<<()[
  [{(<<{[([[({<[{}{}){<>{}}><[()<>]([]{})>}{<[()[]][<><>]>[{[]<>}[<>{}]]})]]{<<[<({}[])>(<<>{}>[[][]])]><([{{}{
  [{([([[<{[[[<{<>[]}{()()}>((()<>))][{[{}()][[]{}]}]][{{(()<>)([][])}{({}{})(<>())}}(([{}{}]){<
  <[{{({[[(([{[[{}[]]<<>()>][({}{})]}]<[<([]<>)><{()()}[()[]]>]<{(<>())<(){}>}<[{}<>][{}<>]>>>))<(((<{<
  {<{{[{[{<<<{{([][])[<>]}<{{}<>}(<>())>}[<[()<>](<>[])>[[[][]]{()<>}]]>>>}<[[[{[({}())((){})]{(()()
  {<{[(<{(<((({<<><>><<><>>})[[{()()}[()()]](<{}()>((){}))]))[{<[({}{})[{}[]]]([[]()])>((({}<>)[[]
  [{{(<[[[{{[((<[]()>[[]<>>)[<()[]>])]({<[[]{}][{}{}]>{[[]]{<>{}}}}(<{[]{}}<<>{}>><([]<>){[]{}}>))}{[<{{[]()
  {<<<(({{{{(<{{{}[]}}><[{(){}}<[]()>><<()()>({}())>>)<(({<>{}}([][]))<<()[]><{}()>>){[{<><>}[[][]]
  {<[({({<<[{{{{[]{}}(()[])}<{(){}}>}<(([][]){[]{}})>}]{[{{<<><>>[[]<>]}}<[([]<>)<{}()>]{{{}{}}
  {({<<[(([{(<((()[]))<[{}]>>[<({}[])[{}<>]>[{()()}<[]()>]])<((<(){}>(<>[]))<<<>><{}()>>)[<({}{}){
  <<[<(((<{{{<<{<>{}}<{}()>][([]())[{}()]]>[[{()<>}<{}[]>]<(()()){<>{}}>]}}<{([{<>()}<<><>>]{{()()}}
  [(<<<[(([{[<(<()()>)[{<><>}{(){}}]>{{([]())[<>{}]}{{<>[]>[{}()]}}]}]))]>[[[{<((<(<()<>>){{<>[]}<[]
  [{(<[((({{([(([]{})<{}()>)<[[]{}]{{}()}>]<{{<>[]}{[]()}}({<>()}[{}{}])>)[{{<[][]><<>[]>}[<{}{}>]}<<[[][]][(
  ([<(<<[(({[[<<[]{}]>{[()[]](()<>)}][({{}[]}{{}{}}){{{}<>}}]]<{({<>}(()[]))[<()[]>{[]{}}]}[{<
  <<[<{{(([([<[[[]{}]<[]<>>][[<><>]{()()}]>]((({{}{}}(<>{})){([][])[{}()]})))<<([(<>)<[]{}>][{{}()}
  (<{<([<[{[([(<[]{}>{{}})(([][]){[]{}})]<<({})[()()]>(({}[])[{}<>])>)(<[{{}{}}{{}[]}](<[]{}>[()[]])><<{{}()}
  [{({{(({[{[<<[[]()]<<><>>>({()()})><[{<>()}{()<>}]<<()()><{}<>>>>]{(({<>{}}([][]})({{}[]}<<>()>))<<(<
  {(<(<{{(((<({((){})[()[]]}{<{}()>{{}()}})[(<{}[]>[{}{}])([()[]]<<>()>)]>{[<[[]<>]<[]>><{{}<>}
  {[[<{(<<<[{(((<>[])<{}<>>)<{[]{}}{<>{}}>)}[[{[{}{}][{}<>]}[(<>[])({}())]](<[{}{}]{()<>}>)]]([(((<>{})({}
  {(<(({[([([((({}[])[()]))]([((<>())[[][]])])){{({([]())([][])}(<()()>{()[]}))}}]<{<(([{}[]](<>{}))[<[]
  ({<[[<<(<[(<[((){})]{[(){}][(){}]}><(({}())[<>()>){{()()}}>)(<[<()[]>(<>{})](<[]{}><(){}>)>[({[]
  [<<[{{[<[<[[{[(){}]{<>[]}}[(<><>){{}{}}]]{<((){})(()[])>[[[]{}]{{}}]}]{(<{<><>}<{}<>>>)([(()[]){(){}}][
  (<<<((<[<[[[[{{}()}{[]<>}]<{(){}}[[]<>}>][<[[]{}]{{}<>}>{<<><>>([]{})}]]]{{{<{<><>}[{}()]>}
  {{<<{[{[<[{(({{}()})(((){})[<>{}]))[[<[]{}>[[]]]{[[]{}]{{}{}}}]})>[{([{(<>[])[<>]}]<<[[]{}][<><>]>{{{}()}({
  [{{{(<{{[<{((<<>{}>[(){}])[(<>[])<[]<>>]][(({}<>)<[][]>)({[][]}{<>{}})]}({{[<>[]]([]<>)}}{(
  <[([{[<<<[([(<(){}>{<>[]}){[{}[]]{[]{}}}]{({<><>})[[<>{}][[]{}]]}){<[<<>[]>[<><>]]({[]{}}{<>[]})>[
  [(<(<[({<[{{({()<>})<[()<>}<(){}>>}(({[]<>}(()<>))([()()]{<>}))}<{{([]<>)<<>>}[[{}<>]<[]()>]}<<([
  [[[<([[[[<<<((()<>)<[]<>>)(<{}()>[<>()]))>{((({}()))(<<>()>)){{{<><>}}<<{}<>>>}}><{{({[][]}<{}{}>)[(<><>
  <<[({(<<<[{([(<>{})[{}[]]](({}[])))[<(<>[])><<()[]>[{}{}]>]}{([<[][]>{()()}][<[][]><[]<>>])}]>>>)}[{((<<([{((
  {(({[{{<[(<<<<<>()><{}{}>><<{}<>>[{}<>]>>((<()<>>)(<[]{}>[[]{}]))>((((<>())[[][]]){{()()}([][])}){<[<
  ({{{[(({<[[<[([][])(()[])](<{}<>>{{}()))><<(<>[])<{}()>>(<(){}>[<>()])>]]([<(<{}{}><[]()>)[[<>[]](()[])
  (<<[{[(({[({{{()()}(()<>)}<<<>()><<>[]>>})<{([<><>]<[]()>){<{}()>{(){}}}}>>}[{(<{[{}<>][<>{}]}([()()]({}()
  ({<<<<([{(([(<<>>{[]<>})][<<[]()>({}{})>])({(<{}[]>){([]<>)([]{})}}<[{[]{}}{<>{}}]>)){<{<[[]<>]([]<>)>
  ([{[[<((((<[[{<><>}(<>())]<(()<>){[][]}>]<[([])[<><>]](<{}{}}([]()))>>){{{[{<>{}}([]<>)]{[(){}
  [{([[(({<[[{{(()[])(<>{})}<[()<>]{{}[]}>}{[<<>>[[]<>]]<[[]<>][<>()]>}]]{{[{<[]{}>((){})}<<<><>>{{}()}>]
  (<({(<<({([<[{(){}}[[]()]]>[[[[]{}](<>())]]]{{({(){}}(<>{}))[[<>()]<<>{}>]}({[<>()]}{{[]<>}{[][]}})}]}){({{<[
  {([(((<{<[<{<((){})[<><>]>({[]()}<<>{}>)}}((<(<>())>{<{}()>{{}[]}}))]<{(({[]<>}<[]()>))<{{()}[()[]]
  ([[((([<[[{<[(()())][(<>[])]>[[[[]<>]{(){}}][[(){}]{<>[]}]]}({[<{}<>>(()())]<({}<>){[]<>}>}[(<{
  {([<{{{[{<[<<[<>()][<>[]]><<(){}>>>]<<({{}[]})<(()[])>>[<<[]<>>[()[]]><([][])[<>[]]>]>><[[[(<><>
  <<{[<[{[[{{<[(<><>)[<>()]](<<>[]>{<>()})>{<{<>[])(<><>)><([]<>){<>()}>}}({([{}{}](<>()))<{(){}}([]
  ({<([({{{<{(({[]()}{<>[]})<{{}<>}[<><>]>)(<[[]]<()()>>]}>}}}){[{{<{<[[()[]]<()<>>]{{{}[]}{[]<>}}>}[{{{
  ([{[[{<([<([({{}<>}<()[]>)<{<><>]{{}{}}>])[[{[<>[]]{{}<>}}({{}[]}<<>()>)]]>([{({<>}{()()})({{}{}}([]<>))}][
  {{[[((([{{[<{<{}()>}[(<>{})<{}()>]>({((){})([]<>)}([[]<>]{{}()}))]{[{{[]()}(())}(<<><>><<><>>
  <{({[((<[<{[({<>[]}{{}{}})(({}<>)<()[]>)]({{{}()}[<>[]]}[<[]{}>[{}()]])}([{[<>()]({}[])}(<[][]>
  <{[[{<<[<<<{({{}[]}[<>{}])<(<>())((){})>}<[<(){}>(<>())]>>(([<[]<>>{<>()]](<[][]>{()<>}))<([[][]]([]<>)){{()(
  [[<[{[(({<<((<<>{}>[{}[]])){([<>{}]){{(){}}<(){}>>}>({<[{}<>][{}{}]><(<>{})>}[<({}{})[[]{}]>[[()()][{}]]])>}
  ({{<[<<[([{<<{[]()}{{}<>}>(<(){}>(<>{}))>}]<{[{{<><>}<<>[]>}(<()()><[][]})]{<[{}<>]<<>[]>>}}({{{()}(
  [([(({[[<({[({()[]})([[]]{()<>})]<<{[]<>}{<>[]}>>}){{({[()[]](()<>)}({[][]}))<<[<>()]<[]<>>>[{{}<>}{()[]}
  (<[<[([[{[<[[{{}[]}<<>>]{[[][]]<{}{}>}]({<()()>(<>{})}[<<>><[]{}>])><{{({}<>)[<>[]]}{[[]<>](<>())}
  {[[[((([<[([(([]())({}{}))<<()<>>[(){}]>](<[<><>]{<><>}>{{{}[]}{<>()})))](({(<<>[]>)}){<<<
  {<(<[<{{<<{[(<()[]>{{}<>})(<()()><[]{}>)]([{()()}<<>()>](<()[]>)}}([(<[][]>)[{{}<>}<()[]>]])>{<({<[]()>{
  [[[<[({([[{({(<>[])<{}>})<<<[]{}>>{[[]{}]{[][]>}>}[{<[<>[]](()[])><[{}<>][[]()]>}]]((<{{[][]}{(){}}}(([][])
  (<{<[<{({<[[[{()<>}[[][]]](([]{})[{}<>])][[<[]{}>{(){}}][<<>{}>[{}()]]]]<[{{()}(<>[])}((()<>)[{}[]])]
  {[{({(<{(<(<{[<>()][()[]]}[({}{})<<><>>]><<(<>[])([]{})>])>)}(<<<([[{}{}]({})])({[[][]]<[]{}>}{[<>[]
  [[[(<[{([[(([({}{})(()[])][<<>()>{[]()}])<<{<>{}}([]{})><(<>[]}<()[]>>>)({[<[]>((){})]<[{}<>][[]<>]>}{<<[][]
  (<[<[(<<[<<<({{}[]}({}[])){(()<>){{}{}}}>>>[{[[<{}()><{}()>]{(<><>)<{}{}>}]([{[]<>}{<>[]}])}({{([]()){<>{}}}
  [([[<<[(<[[{[((){})({}())][({}{})[()[]]]}({{()[]}}{[[]<>](<>())})]{(<[{}<>]{()()}>({<><>}((){})))}]((
  {<[{([{<<(<{{{[]{}}}[([]<>)(()<>)]}<<<<>>[()<>]>{([][])(<>())}>>)<({{[()[]]{<>{})}<<[]{}>(()<>)>}
  [[<[{[<{{<<(<[{}<>]{<>{}}><{<>[]}[[]<>]>)>[{[({}[]){(){}}]({<>()}[<>{}])}]>{([([{}{}][<>[]])[[{}{}]]]<{[()
  {<({<{([<(<(<[(){}][()[]]><{<>()}<<>{}>>)<[{[][]}]{([][])<(){}>}>>[({(<>{})<<>{}>}{{{}<>}{[]<>}}){<
  (<<(([{<[(<{({[]()}[[]{}])}([<())(<>{})]<(<>{}){<>[]}>)><{[<()<>>]{<()()>{{}<>}}}{{({}<>){
  [[<[[[<({<[{[{(){}}<()()>]}([{{}{}}{()()}][([]())<<>>])])[({<<<>()><[]()>>{([]()){[]}}}){{{[{}{}]<{}>
  <[(<[(<{(<{[(([]()))]<{[[][]]}{[<>[]]}>}<{<([]<>)>}{[((){})<[]()>][({}{}){{}{}}]}>>{({{<{}()>[[]{}]}[((
  ({(<[[([<{[([[<><>]((){})]{[[]{}]{()}})<[<[][]><{}<>>]((()[]))>]}(((((()())[[]()])({<>()}))<{[
  <<({[<<[<{{[([{}[]]({}))[{{}()}{{}()}]]{[<{}{}>]<{[]}{()[]}>}}}><[{<((<>()))<{{}{}}>>(<(<>{
  [(((<{[{<{<<{[[][]]{[][]}}>>{<{[[]{}][<>[]]}{([]{})({}{})}>{({{}()}<()<>>){({})[{}[])}}}}>[(<{{{(){}}}<({}[]
  {<<(<{({[{<{<([]())[{}()]>[[()()]<()>)}<({[]()}<[]<>>)<{<>()}(())>>>}(([[{<>()}<<>()>]]{({()<>}
  [[({<<[([{([[[<><>]([][])]<([]{})[<>[]]>][<[[]<>]((){})>])<(({()()}{{}{}}))({{()[]}([][]))[[<><>]<[]{}>])>
  (<{<{[(([{[{<([][])<<>()]>{({}[])<<>>}}{<{[]<>}<[]{}>>}]{(<[{}[]]({}())><{(){}}{{}<>}>)}}][[{
  <{[[<[{(((([{[<>()][<>[]]}]<<{()<>}>(({}<>))>)[[({[]()}<[][]>){({}<>){[][]}}]((<{}{}>{()()}))])[<
  <<<<[<[[[(<[{(()<>){()()}}([{}{}]<[]{}>)]>[{<<<>{}>{()[]}>({()}[()[]])}((({}())([][])))])]<([([<[]
  {((<({({{{<<[{<>{}}(()[])]{(<>{})([]{})}>>{{{({})[<>{}]}{<{}>}}{{<[][]>[(){}]}{{{}[]}<<>()>}}
  <[{[(((({{{[<<(){}>(<><>)>{{{}[]}<[]()>)]<<([][])([][])>[[<>()][[]<>]]>}((([{}])<<{}[]><()<>
  [{[{<{[{<(([<(<>[])(()<>)>([[]<>]([]()))]<({{}<>}<[][]>){<<>{}>{[]()}}>))>[([(<{[]()}{{}[]}><(()<>){[]
  [{[[[(([[[(([<{}[]>][[<><>]{()<>}]){[<[][]>]({<><>}[[][]])})({{{{}<>}{(){}}}<<()>[{}()]>])]]{(<<((
  (((([[{{<{[{<(()())(()[])>(({}<>){{}[]})}[<({}[])[[]()]><{{}()){<>()}>]]{[{<()<>><()()>}]{{<(
  {[<[(({({<[(<{<>[]}>[{{}[]}{()[]}])[<[()[]]([]())>{[[]()]{{}()}}]]{<{<<>[]>(<><>)}>{([[]<>]{()<>})<{<>}>}}>}(
  [({[{((([({(([[]<>]([]{}))<({}{})>)})(({<([]<>)([][])>}({<[]{}>[<>{}]}[<<><>>([]())])))][<<<({(){}}([]()))
  [{<(<<{<({<{[({}<>)<{}{}>]{<[]{}>{<>[]}}}{{{{}()}(<><>)}({<>{}})}>{{<{{}()}<<>{}>>({{}}(()[]))}(({<>{}}[
  {(({<<{[((<((<{}()><()<>>)[<()()><{}[]>])[[<[]()>(()<>)][<{}()>{()[]}]]><<{(<>{})[[]{}]}[<[]<>><{}{}>]><{<{}
  {{[{(<{({(<(<([]{})([][])>[{<>}<{}()>])(({()[]}[()<>>){(()<>)<{}[]>})>[(<([]<>)([]())>(<{}<>>[()[
  <[(<<[{[{[[<([{}<>]<[]<>>){[{}[]][{}[]]}>{<([]{})}<{{}{}}<<>()>>}]]}[([([{[]{}}<(){}>]{[{}{}][{}{}]})<<({}{}
  {[<<[{{<<[{{[[[]<>]{<>[]}]<{{}{}}(()())>}<((<>[])<<><>>)>}<{[<[]><{}<>>]<[{}<>}{()[]}>}<([(
  [<([({<<[{{{(<{}<>>({}())){[<><>][<>[]]}}<{<[]<>>{[]()})[([]{})<<>[]>]>}{{{[[][]]<{}[]>}[<[]<>>(()<>)
  [((([[{<{[{{((<>[])(()<>)){{[][]}{{}{}}}}({({}<>)({}())}((<>{})[{}{}]))}]<(<((<>[])<(){}>)>
  <({{({[{{<{([{()[]}(<><>)](((){})(()[])))({[<>{}]<<>[]>}[<<>[]>])}>}<[{<(<{}<>>)<{<><>}<[]>>>(([{}()]
  [{{<({((<([(<[<>{}](()[])><{[]()}<<>()>>)[<(<>)(<>())>)]({({()()}[()[]])}<[[[]<>]<{}<>>](({}[]){`;

const input = rawInput.split('\n').map((e) => e.split(''));

const openingChars = '([{<'.split('');
const closingChars = ')]}>'.split('');
const openCloseMap = { '(': ')', '[': ']', '{': '}', '<': '>' };
const pointMap = { ')': 1, ']': 2, '}': 3, '>': 4 };

const incompleteLines = input.filter((line) => {
  const openers = [];
  for (const e of line) {
    if (openingChars.includes(e)) {
      openers.push(e);
    } else if (closingChars.includes(e)) {
      const opener = openers.pop();
      if (opener === undefined || openCloseMap[opener] !== e) {
        return false;
      }
    }
  }
  return true;
});

const missingClosers = incompleteLines.map((line) => {
  const openers = [];
  for (const e of line) {
    if (openingChars.includes(e)) {
      openers.push(e);
    } else if (closingChars.includes(e)) {
      const opener = openers.pop();
    }
  }
  return openers.map((e) => openCloseMap[e]).reverse();
});

const missingPoints = missingClosers.map((line) =>
  line.map((e) => pointMap[e])
);

const totalPoints = missingPoints.map((line) => {
  let totalPoint = 0;
  line.forEach((e) => {
    totalPoint = totalPoint * 5 + e;
  });
  return totalPoint;
});

// const result = missingClosers;
const middleIndex = Math.round((totalPoints.length - 1) / 2);
logger.log(totalPoints.sort((a, b) => a - b)[middleIndex]);
