

// A Duna vízállása Budapestnél cm-ben, 2024. január 1 és 2024. szeptember 16 között.
const water_level = [
  [527,472,443,429,452,458,466,486,511,496,469,437,402,374,341,318,299,287,283,293,328,323,301,286,298,321,381,407,438,427,398],
  [368,349,334,322,310,305,326,338,332,330,347,363,388,397,387,370,354,334,312,319,321,324,338,328,340,358,368,356,343],
  [317,304,292,279,265,262,250,245,248,248,232,228,234,260,267,252,245,239,244,255,263,273,269,276,260,258,256,256,250,245,252],
  [240,238,248,273,280,275,262,250,253,260,270,276,270,248,234,236,266,296,308,294,289,286,283,280,278,271,270,251,232,229],
  [242,244,245,256,255,255,244,242,267,288,305,294,270,253,243,239,236,242,256,262,261,262,269,315,320,321,310,297,292,298,323],
  [332,353,433,515,552,586,621,645,641,622,614,618,610,584,534,480,439,411,403,398,385,390,397,394,399,384,366,354,358,354],
  [346,329,349,369,362,341,305,283,280,326,313,287,293,312,354,352,328,304,291,285,273,268,256,249,264,271,271,257,238,214,211],
  [203,197,195,207,214,214,210,203,192,189,194,180,159,148,153,172,178,177,172,179,225,282,266,247,223,198,175,172,174,174,163],
  [155,151,139,128,128,132,127,130,128,122,137,189,205,234,345,474]
]

// 1.
// ebbe a változóba mentsd a havi minimum vízállásokat
const mins = [];

// ebbe a változóba mentsd a havi maximum vízállásokat
const maxes = [];

// ebbe a változóba mentsd a havi átlag-vízállásokat
const avgs = [];


// 2.
// ebbe mentsd az éves eddigi minimumot
const yearly_min = 0;

// ebbe mentsd az éves eddigi maximumot
const yearly_max = 0;

// ebbe mentsd az éves eddigi átlagot
const yearly_avg = 0;


// 3.
const month_names = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// a)
// ebbe mentsd a hónapok NEVEIT
const months_above_230 = [];

// b)
// ebbe mentsd a hónapok NEVEIT
const months_above_input = [];


// 4.
// ebbe mentsd a vízállásokat, az értéke alapján nekiadott színnel a megadott formátumban
// Ha nem tudtad kiszámolni az éves átlagot, vedd az átlagot 240-nek és azzal számolj.
const water_levels_classified = [];