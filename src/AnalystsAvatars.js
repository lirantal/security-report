'use strict'

const avatars = [
  `
.................      /*,,,,/(###%%&%#%%##%%%&#     .................
.................. .,.//*/##@@@@&&%%%%(&@@%&@@&%%@#(  ................
................ ..*./(%&&&&&@@@@@@&@&@@@@&&@&@&&&@@&# ..,,...........
................  ,(#%&@&@@@@@@@@@@@&&&@@@@@&&&@&@@@@@%..,............
................ %#%%%&&&&%@@@&@@&&@@@@@@&@@&@&@&@@@@@&*.,,...........
................../(#&%%&%%&&&&@@@@&@@&&@@@&&@@&@&@@@@@&.,,...........
...................  .##%###%%&%&&@@&&%%&@@&&&&@@@@@@@@@.,............
.....................*%%%##(((((((((#%&&#(#%&@@@@@@&@@@,.,............
.....................,%@@@&##%&@@&&&&%(/////#@&@@@@@@@@.,,............
....................../&&&///(%%&&@/&&%#////#@@@@&(#%%*.,,............
......................(#(/**////(#(/////////(&&/(&((#(..,,.........,,*
......................(((//***((////(/(///(#%%((/####..,,,..........,*
.....................#(%@@@@&%((((////(/((#&&&#((///...,,,...........,
,,,,,,,,,,,,,,,,,,,,,#&@@@@@@@@&%((////##&&@&((/@*,,,,,***..*******,,*
***,  ..... .,.....,*%@@&&@@@@@@@@%%###%@@&&&#/%///((((//(,.((((((((##
.,,..,,,,,,,*******,*&@&&%%&%%#%&@@@@@@@@@@@(////*,*//***(////**((///#
,,,,,,,,,,,*******.,//&@@@@@&&&@@@@@@@@@@&((//( *******,*//*,,,,,,,,,,
,*********,******,**.,#&@@@@@&@@@@@@@@@#(((//@%*   ......,**..........
**********,****,,/* ..*#@@@@@@@@@@@&((((((((%@(/, ...... .,,..........
*********,,***,*****((((*%@@@@@@%####(((((#%&@/*, .  .,......         
**,******,,*,,******/(//,*/@&%%%######(####%&(/*,  ..,*,.   ....      
,********,,,,********///,..*#######%%(((((#%/**,.   ,,,.,,,...,.  .   
*****,*,,,*****,*********,. ##((((((((((((#*,**...  .,,.,,,.,,,. ,,.  
***,*****,,***,,,,********* .((/(((((((((#/.,,,,.**, ,,..,*..,,....,..
********,,,**,,***,*,****,** ##((((((#(#%/...,..../*,.*,.,*.,,,,...,..
****,,,*,,,,,***,***,,***,,**.####((###%(.  ...,*/*..,.,.**.,,,,.,,...
******,****,*,*****,,,***,,*,..#%#####%%..   .*,**,..,,,,*,.,,..,,....
/*************,,**,**,****,,,..,%%%%%%(... .,*.,,,,..,,,**..,..**.....    

hi there, I'm Tomer from Snyk,
 shall we report a security vulnerability today?

`,
  `
  yyyyyyyyyyyyssssssooooooooo+++//:::+oso++//osyyyyyhyyyyyyyyyysssssssss
  yyyyyyyyyssssssooooooo++++//:::/oso+//+osyyyyyyyyyyyssyyysssssssssssss
  yyyyyyssssssooooooo++++/:::/osysosoosyyyyyyyyyyyyyyhssssssssssssssssso
  yyyssssssooooooo+++//::/+shdmmmmmmmmmddhhhhysyyyyssyyssssssssssssssso'
  ssssssoooooo+++//::/+oyhdmmmNmmNNmmmmmmmmmmdhsssssssysssssssssssssss+ 
  ssooooooo+++//::/oosyddmmmNNmmmmmmmmmmmmmmmmmhssssssysssssssssssossss 
  oooooo++//::/+ooo+odmmmmmmmNmmmmmmmmmmNNNNmmmmhyssssyssssssoo+//+sssy:
  +oo++//:/+ooo++/::ydmmmmmmmmdhhhysssyyyhdmmmmmmdyssssyoos+++o++ooosssy
  ++/:/+ooo++/:-'':ymmmmdysoo+////:::::::/+osydmmmdssssyooooooo+//++oooo
  ooosoo+/:-''   .hdmmds+///:::::::::::----://oymmmysssssooo+++ooo/ooooo
  soo+/-.'    '':oddmdo//::::::::::::::----:::/oddmmsoooyooo++++//+++ooo
  ++:''   '.--:-:hdmmy/::::::::::::::::::--::::+hdmmhoooyooo+++ooooooooo
  ++/'.-://-.''.-sdmdy/:::::::::::--:-------:::/hmmmdsoossoooooooooo+o++
  +++./-..'.-'''-+dmdh/::::::::::::::::::///////ommmhooooy+++++oyhhoooo+
  +++:'''''..--:::hmdd///++ooo++//////+osyyso++++hmho+o++so++++sddhyyo++
  +oo+'.-://-..'''/dmd++++osyysso+///+syyyhhsso+//d++ossosyo+++sddhdho++
  /oo+-:-.'''.'''''odd//+oshdhyyo+::-:+oooo+//::::o:/ohhsyhso+ssddhdhs++
  -+++:''''''.''''':hh//+++oooo+/:::---:::::::::::++:ydhhhys++hdddhhdhhy
  -/+++'''''..-''.-:+s:::///////::::--:::::----::/+:/hhdhdyyoshddmmNNNms
  .-+++-'''.-::::----+/:::/:://////////+////:::://+:so+dddddddmNNNNMMMms
  ..+++/-//::-.....'.:+::::://///oooooso/:://::///syhsydmmmmmddNMMMMMMNh
  --:+++.''...'----:+/:/::://+///ooooooo+//++////+smdhshNmmmdyymNNmmNmdm
  ..-+++:.-:///:::::'''//////+ooooo+++++oooo+///++ydmmoymh/-...-:/shyysd
  .../oo+-:-.''./::/::/oo////+ooo+++++////::////+sdhmdsy+-'...'''''/yyhm
  ---:ooo-...-:////+ooo++o/////////+ooo+//////++shmhmhy/'.'''''''...smmm
  --.-+oo/:///:-.---+++//ss+///////////::////++oh+ddmds.':-.'''''.:yddmm
  --.-:ooo.......:+:++/+/+yyo+///////+++//++oosys:hddNh..s+...-:/+dyydNh
  ----:ooo:.....--://o++++yyyysso+oooossssyyysyys/odhNN+-+o-.-h+dNNdhdms
  :::::+oo+......-:+/o+oosdyosyyhyyhhhhhhhhhyyoo+o:ddmNms+y/-+mNNNNNNdys
  :-:::/sss---.----+/+s++s/y/+ooosyyyyhhhyyso++//y/sddNmhs+:-oydddmNNNmd
  ::::::oss/--:----/o+ooo:'.::///+++o++oooo+//:::so.-ymmmh'  /+++:''..-:
  /::://+sss-://+++:soyhd/':-'-////////////::::/omm+'':hmo --....'''''''
  :::---/ssy/o++/:::odmNNNh/.   .+yyssssyyyhhdmNNNNmo'--o--dddddddhhssos
  :/:::-/osso:/::::/ydddmmmms- '.::ommmmmmmmmmmmmmmdms:/: /hhhhhhhhhhyss

I am Kirill.
  It's too quiet here. Any vulnerabilities to report, comrade?
  awaiting orders.

`,

  `                                                                   
                            '        '''''.'                          
                            '     '-:::/yyoso////-'                   
                            ''   '/shdddhdddmmddhys+/-'               
                            .. '-:sdhhdddmmmmmmmmmdhyy+-'             
                            -. +shhsoshdddmmNmmNmmmmmmdyyo-    '''''''
           '' ''''..''   ' '...:yo--:/+oyydmmmNNNmmmmmmmhho''''...''.'
    ''.'....:---.----::::/:.-/dy/--:::/+osydmmmNNmmmmmmmmdyo/...'.....
   '''.::--.::---::--------:/oh++o/::/+syyyyhmmNNNmmmmNmmmddyo-.....'.
'''----::::::::-:::::::/::-:/+++so/-/+oosssyhdmmNNNNmmmmmmddhho..'''..
.--::::::::::::::::::::://::+o+oss:/oooyyhhhydmmmNmNNNmmmddddhoo.'.'''
-----:::/::::/:::::::::::://s/.::-/+oo++++osyhdmmmmNNNmmmmmdhhy+-...'.
::::::::://///::/:::/::-:::+o.-:/osyoo+///+oshmmNmmmmNNNmmmmdyyo/:.--:
--:::::/://///::/::://::/:/s/----:++o++++++syhmmNNNNmmNNmmmdddys+/---:
--:::::////://:://:////://o+o.-+yhhhyso++oosydmNNNNNmmNNNmmmhdyo+:/-::
--:::::/+/////::/::////////so.-+shhhhhyo+osydmNmmNNNNmmNNNmmdhsoo+/:::
:--::::////:/+/////::///:/+yy--:+oooo+ooossyhdmmmNNNNNNNNNNmddhs+++//:
:/::::////://+/////:://:oysys/.:///++osssyyhdmdmmmmNNNmNNmmmmmhs+//+++
://://:/++///+++///:/++/hs++ss:/oosssyyyyhhdmmmmmmmNmmNNNmmmddhy+//+++
:::/+:+/++/+///o++/::/+/syooohsoyhyhhddddmmmNNmmmmmNmmNNNNmmmdyy+++///
/++/+++++/++/:+o/////++/osso/:osdmdsyhhhddmmmmmmmdmmmmmNNNNmmdhs+oo///
++++oo+++oo+++ooo++//++o+oyso+osdmmyoyyhhhdddmdddddmmmNNNmmmmhhysys++/
+++++++oooosooooooo//++oo+o++ooshmmm+ossyhhhdddmdhdmdmNNmmmmdhyhyyo+++
so++ooosssssoo+ossoo+//ooo++ysyyddysosyyhdddhdddmmhhmmmmmdmmdhhyhmdho+
yosoyysoooo+ooo+o+/+/::+o+/syosys++osyyyhhhdddmhddsddmmmmmmdddhyyhmh+o
oo+oooossso+////++/+/--/ooo+oosyhhhhhdddddddmmdhdyyhddhdmdmddhyysydhoo
++++++++ooo++syhhy:/:--:/:s+ssssyyhhdddddddmmmmdmdsyydymmdhdhdhdhhsoos
..................-::--/++ss+oooyhhddddmmmNNNNmdmmsssyydhhhhmmddhhyhss
:::--:-------------::::/osyyyooyhdddmmmNNNmmmmmddmysssydhhhdmmmdhhyhhy
+//////////////:/..-.-/ossdyyyoysyhdmmmmddddmddydmy+osyhhyhhdmmddhhhyy
:::/:///:/://+oo-''../+osshyyo+//osdhhhhhdddhydhmddoosyyyyddmmddddhhhh
-:-:////-:-:/+o/''..-++oshssso+//syyoyyyhhhhyhddhdsshyyysyymmmdhysyhdh
---/+///::-:++o-''..:+oshyoso++/shhssyyhhhyshdhyshyyssss++smmmdhs/:/sh
---:/+++/:--oo/..''./+oydooo+/:omdhosyyyyyyhhhhyyhhyossoyssymmddo+:-:o
:--/ooss+---o+...''.+oohyoo+/:+dmdyoyyhysshhhshhyyysoossoooshsyhh+--.-

It's me, Karen! I'm all set with my espresso cup,
   any interesting flavour of vulnerabilities you'd like to share today?
  
`
]

module.exports.avatars = avatars
