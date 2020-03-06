'use strict'

const avatars = [
  `
'''''''''''''''          -so::-+ydmmdmmNNNNNNmmmmmmdddh+-'     '''''''''''''''''
'''''''''''''''''    '''.s/-+ydNMMMMMNNNNNmmNNNNNNNNNmmmdh+'    ''''''''''''''''
'''''''''''''''''  ''.-.+yysdNNMMMMMMMMMMMMMNMMMMMNNNNNNNNdd:  '''''''''''''''''
''''''''''''''''   '.oy+shmNNNMMMMMMMMMMMNNNNMMMMMMNMMMNNMNNN:  '.''''''''''''''
'''''''''''''''    '-+hddNNNMMMMMMMNMMMMMNNMMMMMMMMNNMMMMNNMMN- '..'''''''''''''
''''''''''''''''  'yssdmmNNNNNNMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMd''..'''''''''''''
''''''''''''''''' '+dmmmNmNNNNNNNNMMMMMMMMNNNMMNMMMMNMMMMMMMMMN-'.''''''''''''''
'''''''''''''''''' '.:/hddmmmddNNNNNMMMMMMNNNMMNNNMMMMMMMMMMMMM:'.''''''''''''''
'''''''''''''''''''    '/hhhhhhhdmmmNNNNNNNNNNMNNNNNNNMMMMMMMMM:''''''''''''''''
'''''''''''''''''''''   /hhhhyysssyyhhhhdmNNNmmdmNMMMMNMMMMMMMm'''''''''''''''''
'''''''''''''''''''''' :NNMNmhyyhhddddhhsoosssooshNMMMMMMMMMMMh''.''''''''''''''
''''''''''''''''''''''''oNMMMNyyhdNMMMNNNmdysooo+odMMMMMMMMMMMs'..''''''''''''''
''''''''''''''''''''''' 'ymMNy++shmNNNMmdNNdys++++dMMMMMNdhhmm.'..''''''''''''''
''''''''''''''''''''''''.ohds///+oshdmdhyssso++//+hMMNdhsyoyy:'...''''''''''''''
'''''''''''''''''''''''':ss++////+ooossoo++++++/++hNdooydhyss''..'''''''''''..-/
'''''''''''''''''''''''':osoo+///+sso+ooooo++++ooymmso+yyhhy:''..''''''''''''.-:
''''''''''''''''''''''''oshddhmmhyssso++++oooosshmNmyssooss:'''..''''''''''''''.
''''''''''''''''''''''':hhNMMMMMMmdysso++++oosydNNNmhsoo+:.'''.--.''''''''''''.-
-.---.-..-.--........../mMMMNNMMMMNNdysoo+ooyhmmNMNysohs-.....-::-''.----------/
::::-------..''.''...''/NMMMNNmmNNNNNNmhyyyyhmNMNNNh+sh/////////+:..-+++oooooosy
'''''    ''''''''''.'''oNMMmdddhhddmNMMNNmmmNNMNNNms+sys++oyhso+oyyysso+syyo+oyd
'''''''......------::..sNMNNNNNNmmdmNMMMMMMMMMMMNhs+///:--/++/::/oo+++/:/oo+/+oh
.......----.-----:::.-:/hNNMMMMNNNNMMMMMMMMMMMMmyoooo'::--::::--:+/:-----------:
.....----:-.-::-:--.-:-'sNMMMMMNNMMMMMMMMMMMMdyssoomd:''''.......:/-............
--------:--.---:::.-/- '-dMMMMMMMMMMMMMMMMMmyssssoyMm+. '  ''''''.:-''''''''''''
-:------::-.-:::-../:' './dMMMMMMMMMMMMNmhsosssssymMh+- ''''''  ''-.''''''''''''
-----:::::-.-::-.-::-'.-:::smMMMMMMMMmmhysssssssydNNy/-'    '.''  ''            
-----::::-..---.-:::--/sso+-oNNNNmmmdhhyysyssyyyhmNNo:.' ''  '   ''''           
----::-::-..-..-::----/oo+/.-+dNmmddhhhhhyyyyyyhhmNy/-.'  '''..''''             
-----:----....-::----::+++/.'.:ddhhhhhhddhyyssyyhms/:-.    '..''''.'''''        
----------...--:-----:-////-' '+yysssssyyyssssyyhs-::.''   '..''...''..'''''    
:---------.------------::::::' 'yssooosssssssssyy..--'''   '..''..-''...'''''   
:--------..-------------:::-::' ossoooosssssssyh:'..''''/.'''-.''.-''...''''''
:------...------------:::-::' ossoooosssssssyh:'..''''/.'''-.''.-''...''''''

hi there, I'm Tomer from Snyk,
 shall we report a security vulnerability today?

`,
  `
hhhhhhyyyyysssssooooooooo++/::--:+syo+///+oyhhhhhyyyyyyyyydyyyyyyyyyyyysssssssss
hhhyyyyysssssoooooooo++//:---/sdmmmmdmNmNmddhhhhdyyyyyyyyyhhyyyyyyysssssssssyys-
yyyyyyssssoooooooo++/::--/oydmNNNNNMMMMMNNNNNNmmmdhyyyyyyyydsssssssssssyyyysss/ 
yysssssooooooo++//:--:+shhdNNNNMMNMMMMNMNNNMNNNNNNNhyyyyyyyhysssssyyyysssssssy: 
ssssooooooo++/::-:+ososdNNNNNMMMMMMNMMNNMNNMNNNNNNNNhysysssyhssssssssssssosssyo 
ooooooo++//:-:/oss++/smNNNNNNMMMNMNNNMNNMMMMMMMMMMNNNdyysyyyhssssssso++::+osssh:
/ooo++/:-:/+sso++//-/dNNNNNNNMNNNmmmddhyhhddmmNMNNMMMNmysssshysss+o:+o/+osossssh
/+//::/+oso+++/:.''/dNNNMNmdhyso+//:::::-::://oyhdNMMNNdysssyhooso+osoo////ossso
///+osoo++/:.'    omNNNNds//::-----------------://sdNNNNhsssshoooo/++//+o+oooooo
yyso++/:-''      .dNNNNy/::::-------------.....---:+hNNNmssssysooo+oo+o/////oooo
oo+:-''      '.-/hNNNNh::-----------------.....----:yNNNNdsooshooo+://++++++oooo
+//      ..::-.''yNNNNs:--------------------...----:ymNMNNyooohoooo+ooooooo+++++
///''.:/+/.'' ''.+NNNNy:----:-------...-.........--:oNMMNNyoooss+++++++oss++++++
///-::.'' '.'  '.-mNNNd:--------------------:://///:/hMNNmoo+ooy++++++ohmdyo++++
////    '' ''.-::/yNNNm:::///+++//:::::::/+oyhhyo+++/+mNms+++++y++++++ymmmhhs+++
++++.  '-://--.'  -mNNd//++osyhhyso+//:/+oyhhdddyys+/:oNo+/sso+ss+++++hmmmmdh+++
:ooo:.+/:-'      ''/mNd:///oyhddhhs+/---:oyhyyhy++//:-:y-//hhhsymso/++ommdmmy+++
./+//''    '''     'yNh::+osshhyyso/---.--://:::-------o/-+mmdhddysosddNNmmmdhoo
.:+//-      '''  '''+hy-:::///////:----...----.---.---:++:ymmddmyh//+dmmmmdmmmmh
'-////      .''''.-//:o---::::::::::---..---::--...--::o-:dddmmmddsydmNNNMMMMMmy
''////'  '.-://::-..'-+:-------:://::::///o/::::----:::+-ss+sNNNmmmNNMMMMMMMMMNs
'':+//:-++/:-.'''''  ':/------:////+ssoooso/---:::-::::yydhsyNNNNNNMmNMMMMMMMMMh
'.-++++'' ''.' '''../+/::----:://::/oosoooo+/:://:::::/yNmm+hmNNNMNmdmMMNNNMMNNN
''':+++. '..-:/::::--'''/::::://++++o++//++++++so/:://+hNNNshhMNy+-..-+osdmhmhym
'''.+++:-+//:-.':::/.''.:+//::/+ysssoo+++//////::::///sdmNNdsyh/'''''    '+yhydN
''''/+++'     ''-.-:/ossso+:::://:::///++++/::::::///sdNdNmmoo''   '    ' '/ddNN
....:ooo:'.:/+++/:--/+//::y+/::::::::/+ooo+/::::::/+odhNdNdy+' '        ''./NMNN
''''.+oo+-/:-''''-:.:o//::+hs//:::::::::-::--:::/+++hy/NmmMm: '/-''     ':hmyNNN
'''''/ooo.'''''''.::-+//o//odyo+//::::///+//////oosyhs-mNmMM/''h+''''-:+omshyNNh
''''':ooo:''''''..-/-/o/+//+myhhyyo++++ooyyssyhhyshyys-smmNMd.'/s.''/d/dMMNddNNs
...---osso''''''''./:/s/oo+dmoshhddhhhdhhhdddmdddhyso++:mmmMMd+/s:''dmNMMMMMmhys
......+sss-...'....:+:oo+++hsy:oossyhddmmmmmmddhyo+///h-dNmMMNhoyo-:mNMNNMMMMMmd
......:sss+''..''..-o:+oo+s-'s:::/++oossoossssoo+/:---h:.+mNNNNh'  '--:://++osyy
-.---::sysy...-.....+o+oss-  ...:::::::////////::----:dh. .sNNNy   .++oo+       
-:---.-+yyy//oossss/:sydmNd:.:.  .//:::::--------::+sdMNh'  -hN/ +o++//::--.''' 
----'..:yyys:::------hNMMMMMh:     -sddhhhddddmNNMMMMMMMNd.':-+..mmmmmmmmmmyddyh
-:----.:oyyy:::---.-ommmmmmNNmy.  '.--smmmmmmmmmmmmmmmNNmmd:-/. :ddddddddddddhyy

I am Kirill.
  It's too quiet here. Any vulnerabilities to report, comrade?
  awaiting orders.

`,

  `                      
                                         '' '.+o///. '.'                        
                                       -+shhdmmmmmmmmdhss/'                     
                                       ommmmNmmNmmNNNNNNNddyy/.                 
                                .' '-+sdmmdmNmNNNMNNMMNNNNmdmdo:''              
                                '' .yhdyo/+ydmNNNMMMMMMNNMNNNNmhdh/'            
                    ''''       ''''.+h/..-::/oyhmNNMMMMMNNMNNNNNddy.    '       
           ' .-..'''.'.'------.'.-hmo.'..---:+oydmNNMMMMMNNNMNNNNmms/.'         
       '..''''....''...'''''...:-+my/oo/..-:oyhhhhmNNMMMMNNNMMMNNNmmdd:'        
    ''''..---.-....------.--....-/s:://-'-//++osyhdmNMMMMMMNNNMNNNNmddy/       '
 ''.........-----..---.-.---:---:/oshmh:./oosdmmdyymNNMMMMMMMNMNNNmNmmds:  ' '' 
'......------------.-.----------oo:-:+:-/ooosooshmddNNNNMMMMMMNNNNNmmmhso.''   '
.....'..-------::--------..----:h:'...-/+oo+////+oydmNNNNMMMMMMNNNNNNmdys.''''''
-----..----::::---::..-:-..----o+ '..+osdsso/:::+oshmNMMMMMMMMMMMNNNNmhy+//.'...
'.....--:-:::-:---:-----:-.---/y/'..'.-/+o++++//+sydNNNMMMMMNMMMNNNNNNmyyo+....-
'...-.--:---------::--:::--:::o/s''-ohddhhs++++osyhmNMMMMMMMNNMMMNNNmmmho+--/...
'...----:/::::::-.:---::::::::+sy'.:shmmmmmdh++osymNMMMNMMMMNNNMMMNNNmdyoo/:-...
.'....--::/::-:::::-----:::-::/hh'.-/osssoo++oosyhdmNNNNMMMMMMMMMMMMNNmhs+//-::-
------.::::---://::/:--.::--/osmh-'.-::///+osssyyhmNNNNNNMMMMMMMMMMMNNmms+/////:
:::.--.::::::::::/:::---::-/hsossh..:///+osyyyyhhdmNmNNNNNMMMMNMMNNNNNmmy+:::/+/
.-:--:--:///:-//+o///--:/++sds+/ys-:osyyhhhddddmNNNMNNNNNNMMNMMMMMNNMNNdyo+::///
.--://-+//+//+:::o///:-.://+yyoo+hhysmdhdmmmNNNNNNNMMNNNNNMMNNMMMMNNNNNdy+++:::/
/++//+:+/+:+//:-/o/-::://///sys+/.+ohNNmshdddmmmNNNNNNNNNNNNNMMMMMMMNNmms++o+:-:
/+++oso++++oo++/+oo+++-:++oo+sdyo+/oyNNNh+yhddmmmmmNNNNmmmNNNMMMMMNNNNmdyshyo///
++++++++oosssosoo+++++::+/++/+oo/oosyNNNN/+syyhddmmNmmNNdmMNmNMMNNNNNNdhdhds+///
+oo//+++ossssyso+osyyoo/::oo+o+:oyshdNNmmoosshdmNNdmmNNNmNmNNNMMNNNNNmmdhhNmdy+/
hs+/syyyyysssoosoooo++o/--/o++/hmysdmh:--/osyhhddddmmmdmNhhNNNNNNNNNmNmdyhdNNyo/
oosssoooo+++/+++/:///:/-.'-/+/:/+++ysyyyhddmmmmmNNNNNmmmhhdmNNNNNNNNNNmdhhhNNy++
soooooosssys+///++oo/:/-.'./oso+syhhdddddmmmmmmNmmNNNmmmdhhmmddNNNmNmddhdhyydyos
//////////+++//syhhh/.:....:-/o/osyyyhdddmmmmmNNNNNNNNmNNysydddNNNmmmdNmmddyyooy
'''''''''''''''''''''.--..-//oys++ooshddmmmNNNNMMMMMMNmNNysyyydNmdhmdNNmmdmdhdys
......................--.-:+oyhhhooshmNmNNNNNMMMMNNMMNmNNhsyssdmdmmdNNNNmmddhddd
:::---:::::--::::--- ..'.:/osymhdhohdhdmmNMMNNNNNNNNNmhNNh+osshmmyddmNMNNmmdddhy
::----:::-::-:/+o+:' '  -++sshdyhs+/::+smNdmmmmmmNNdmdmNNmo/oshdhhddNNNNNmmmmmdd
...---:::....:/+oo.   ''/++ssdsyyo+::/ohdsyyyhhddmdhdmdmNdsshyhhyddmMNNNmmmmmmmd
....:::-:....-:/+/   ''-/+osdhsys+/::ohhhosyyyhhhhhdmdmhmysmhyyyossdNNNNmy//+ymm
..../////-..':ooo.'  '':/+ohmssso+/:+dddssyyyhhhyydmmdysdhhsshys+o+dMNNmmh+:.-sh
....//++o+..':s+:    ''+oosmyooo+/-:dNmhosyyyyyyydddddhydddsossshyssdNmmms/:...o
-.''ososso..'.o+' '   'osodms+++:-:dNNdyosyyyysydddhhddhhhyooossoosshdoydds-'''.

It's me, Karen! I'm all set with my espresso cup,
   any interesting flavour of vulnerabilities you'd like to share today?
  
`
]

module.exports.avatars = avatars
