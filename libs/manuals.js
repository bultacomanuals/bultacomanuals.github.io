var engManuals = [
{"model":"1", "name":"Tralla 101", "cc":"125", "article":"T-1/38", "edition":"Primera", "date":"Febrero 1960", "image":"1.jpg"},
{"model":"1-1", "name":"Tralla 102", "cc":"125", "article":"130-027-1", "edition":"Primera", "date":"Noviembre 1963", "image":"1-1.jpg"},
{"model":"2", "name":"Bultaco", "cc":"155", "article":"T-10/31", "edition":"Primera", "date":"Febrero 1960", "image":"2.jpg"},
{"model":"2", "name":"Bultaco", "cc":"155", "article":"230-027", "edition":"Primera", "date":"Julio 1961", "image":"2a.jpg"},
{"model":"2-1", "name":"Bultaco", "cc":"200", "article":"30-027-1", "edition":"Primera", "date":"1963", "image":"2-1.jpg"},
{"model":"3/3-B/3-C", "name":"Sherpa S", "cc":"125/175/200", "article":"330-027", "edition":"Primera", "date":"Julio 1963", "image":"3.jpg"},
{"model":"3/3-B/3-C", "name":"Sherpa S", "cc":"125/175/200", "article":"330-027/I", "edition":"Primera", "date":"Julio 1967", "image":"3a.jpg"},
{"model":"4-1", "name":"Matador", "cc":"200", "article":"430-027", "edition":"Primera", "date":"Febrero 1965", "image":"4-1.jpg"},
{"model":"5-C", "name":"Kart", "cc":"200", "article":"530-027C", "edition":"Primera", "date":"Octubre 1963", "image":"5-C.jpg"},
{"model":"6", "name":"TSS", "cc":"125", "article":"T-40/72", "edition":"Primera", "date":"Abril 1962", "image":"6.jpg"},
{"model":"7", "name":"Mercurio", "cc":"125", "article":"730-027", "edition":"Primera", "date":"Enero 1961", "image":"7.jpg"},
{"model":"7/9", "name":"Mercurio", "cc":"125/155", "article":"730-027-1", "edition":"Primera", "date":"Junio 1963", "image":"7a.jpg"},
{"model":"8", "name":"Metralla 62", "cc":"200", "article":"830-027", "edition":"Primera", "date":"Septiembre 1963", "image":"8.jpg"},
{"model":"9", "name":"Mercurio", "cc":"155", "article":"730-027-1", "edition":"Primera", "date":"Abril 1964", "image":"9.jpg"},
{"model":"10", "name":"Sherpa T", "cc":"250", "article":"10.30-027", "edition":"Primera", "date":"1965", "image":"10.jpg"},
{"model":"11", "name":"Pursang/Metisse", "cc":"250", "article":"Rickman Brothers LTD", "edition":"Primera", "date":"1965", "image":"11.jpg"},
{"model":"12", "name":"Saturno", "cc":"200", "article":"12.30-027", "edition":"Primera", "date":"Junio 1965", "image":"12.jpg"},
{"model":"16", "name":"Matador MK2", "cc":"250", "article":"16.30-027/I", "edition":"Primera", "date":"Noviembre 1966", "image":"16.jpg"},
{"model":"18/50", "name":"El Bandido", "cc":"360/350", "article":"18.30-027/I", "edition":"Primera", "date":"Marzo 1968", "image":"18.jpg"},
{"model":"19", "name":"Lobito", "cc":"100", "article":"19.30-027/I", "edition":"Primera", "date":"Agosto 1966", "image":"19.jpg"},
{"model":"19", "name":"Lobito", "cc":"100", "article":"19.30-027 A/I", "edition":"Primera", "date":"Septiembre 1966", "image":"19a.jpg"},
{"model":"20", "name":"Junior", "cc":"75", "article":"20.30-027/E", "edition":"Primera", "date":"Abril 1966", "image":"20.jpg"},
{"model":"22", "name":"Mercurio", "cc":"155", "article":"22.30-027-2/E", "edition":"Octava", "date":"Junio 1973", "image":"22.jpg"},
{"model":"23", "name":"Metralla MK2", "cc":"250", "article":"23.30-028/E", "edition":"Primera", "date":"Agosto 1966", "image":"23.jpg"},
{"model":"23", "name":"Metralla MK2", "cc":"250", "article":"23.30-027-1/I", "edition":"Primera", "date":"Octubre 1966", "image":"23a.jpg"},
{"model":"23", "name":"Metralla MK2", "cc":"250", "article":"23.30-027-1/I", "edition":"Segunda", "date":"Marzo 1971", "image":"23b.jpg"},
{"model":"23", "name":"Metralla MK2", "cc":"250", "article":"2A-23.31-025", "edition":"Primera", "date":"Junio 1967", "image":"23c.jpg"},
{"model":"23", "name":"Metralla MK2", "cc":"250", "article":"23.30-027-1 A/I", "edition":"Primera", "date":"Octubre 1966", "image":"23d.jpg"},
{"model":"1T-23", "name":"El Tigre", "cc":"250", "article":"1T-23.30-027-1/I", "edition":"Segunda", "date":"Julio 1968", "image":"23-1T.jpg"},
{"model":"26", "name":"Matador MK3", "cc":"250", "article":"26.30-027-1/E", "edition":"Cuarta", "date":"Enero 1970", "image":"26.jpg"},
{"model":"26", "name":"Matador MK3", "cc":"250", "article":"26.30-027-3/I", "edition":"Cuarta", "date":"Marzo 1970", "image":"26-1.jpg"},
{"model":"27", "name":"Sherpa T", "cc":"250", "article":"27.30-027/I", "edition":"Primera", "date":"Septiembre 1967", "image":"27.jpg"},
{"model":"28", "name":"Campera", "cc":"175", "article":"28.30-027-1/I", "edition":"Segunda", "date":"Octubre 1969", "image":"28.jpg"},
{"model":"29/40/41", "name":"TSS", "cc":"350/125/250", "article":"29.30-027-/I", "edition":"Primera", "date":"Julio 1969", "image":"29.jpg"},
{"model":"30", "name":"Sherpa S", "cc":"100", "article":"30.30-027/I", "edition":"Primera", "date":"Febrero 1970", "image":"30.jpg"},
{"model":"33/39", "name":"Junior", "cc":"100/125", "article":"33.30-027-A/E", "edition":"Primera", "date":"Octubre 1967", "image":"33.jpg"},
{"model":"34", "name":"Senior", "cc":"175/200", "article":"34.30-027/E", "edition":"Segunda", "date":"Octubre 1967", "image":"34.jpg", "condition":"replace"},
{"model":"35", "name":"Mercurio", "cc":"200", "article":"35.30-027/I", "edition":"Primera", "date":"Noviembre 1967", "image":"35.jpg"},
{"model":"5T-35", "name":"El Tigre", "cc":"200", "article":"5T-35.30-027", "edition":"Primera", "date":"Enero 1969", "image":"35-5T.jpg"},
{"model":"36", "name":"Campera", "cc":"175", "article":"36.30-027/E", "edition":"Primera", "date":"Marzo 1967", "image":"36.jpg"},
{"model":"38", "name":"Lobito AK", "cc":"100", "article":"38.30-027-A/I", "edition":"Primera", "date":"Febrero 1967", "image":"38.jpg", "hew":"true"},
{"model":"39", "name":"Junior", "cc":"125", "article":"39.30-027-A/E", "edition":"Quinto", "date":"Junio 1973", "image":"39.jpg"},
{"model":"40/41", "name":"TSS", "cc":"125/250", "article":"41.30-027/I", "edition":"Primera", "date":"Septiembre 1967", "image":"40.jpg"},
{"model":"42", "name":"Pursang MK2", "cc":"250", "article":"42.30-027/I", "edition":"Primera", "date":"Mayo 1967", "image":"42.jpg"},
{"model":"42", "name":"Pursang MK2", "cc":"250", "article":"42.30-027 A/I", "edition":"Primera", "date":"Diciembre 1967", "image":"42a.jpg"},  
{"model":"43/44/45", "name":"Sherpa S", "cc":"125/175/200", "article":"43.30-027-1/I", "edition":"Segunda", "date":"Enero 1969", "image":"43.jpg"},
{"model":"48", "name":"Pursang MK3", "cc":"250", "article":"48.30-027/I", "edition":"Segunda", "date":"Julio 1968", "image":"48.jpg"},
{"model":"49", "name":"Sherpa T", "cc":"250", "article":"49.30-027/I", "edition":"Segunda", "date":"Octubre 1968", "image":"49.jpg"},
{"model":"51", "name":"El Montadero", "cc":"360", "article":"51.30-027-/I", "edition":"Primera", "date":"Octubre 1968", "image":"51.jpg"},
{"model":"53/54", "name":"Lobito MK3", "cc":"125/100", "article":"54.30-027/I", "edition":"Primera", "date":"Diciembre 1969", "image":"53.jpg"},
{"model":"59/62", "name":"Lobito MK3", "cc":"Nacional 74/125", "article":"59.30-027/E", "edition":"Primera", "date":"Julio 1970", "image":"59.jpg"},
{"model":"60", "name":"Bultaco 49GT", "cc":"49", "article":"60.30-027-1", "edition":"Primera", "date":"Noviembre 1970", "image":"60.jpg"},
{"model":"61", "name":"El Bandido MK2", "cc":"360", "article":"61.30-027/I(2)", "edition":"Segunda", "date":"Febrero 1970", "image":"61.jpg"},
{"model":"63", "name":"Sherpa S", "cc":"125", "article":"63.30-027/I", "edition":"Segunda", "date":"Junio 1970", "image":"63.jpg"},
{"model":"66/67", "name":"Sherpa S", "cc":"175/200", "article":"66.30-027/I", "edition":"Primera", "date":"Marzo 1971", "image":"66.jpg"},
{"model":"66/67", "name":"Sherpa S", "cc":"175/200", "article":"67.30-027/I", "edition":"Primera", "date":"Marzo 1972", "image":"67.jpg"},
{"model":"68", "name":"Pursang MK4", "cc":"250", "article":"68.30-027/I", "edition":"Primera", "date":"Abril 1970", "image":"68.jpg"},
{"model":"68", "name":"Pursang MK4", "cc":"250", "article":"68.30-027-1/I", "edition":"Primera", "date":"Diciembre 1970", "image":"68a.jpg"},
{"model":"70", "name":"El Montadero", "cc":"360", "article":"70.30-027/I", "edition":"Segunda", "date":"Noviembre 1970", "image":"70.jpg"},
{"model":"74/76", "name":"Lobito MK4", "cc":"125/175", "article":"74.30-027/I", "edition":"Primera", "date":"Septiembre 1970", "image":"74.jpg"},
{"model":"74/76", "name":"Lobito MK4", "cc":"125/175", "article":"74.30-027/I", "edition":"Segunda", "date":"Diciembre 1970", "image":"74a.jpg"},
{"model":"75", "name":"Matador MK4", "cc":"250", "article":"75.30-027/I", "edition":"Segunda", "date":"Marzo 1971", "image":"75.jpg"},
{"model":"77", "name":"Lobito MK4", "cc":"175", "article":"77.30-027/E", "edition":"Primera", "date":"Diciembre 1970", "image":"77.jpg"},
{"model":"78", "name":"Sherpa S", "cc":"100", "article":"78.30-027/I", "edition":"Primera", "date":"Octubre 1970", "image":"78.jpg"},
{"model":"79", "name":"Campera", "cc":"175", "article":"79.30-027/E", "edition":"Cuarta", "date":"Febrero 1976", "image":"79.jpg"},
{"model":"80", "name":"Sherpa T", "cc":"250", "article":"80.30-027/I", "edition":"Primera", "date":"Abril 1971", "image":"80.jpg"},
{"model":"81", "name":"El Montadero", "cc":"360", "article":"81.30-027/I", "edition":"Primera", "date":"Octubre 1971", "image":"81.jpg"},
{"model":"82", "name":"Matador MK4-SD", "cc":"250", "article":"82.30-027/I", "edition":"Primera", "date":"Febrero 1972", "image":"82.jpg"},
{"model":"83/84", "name":"Lobito MK5", "cc":"125/175", "article":"83.30-027/I", "edition":"Primera", "date":"Septiembre 1971", "image":"83.jpg"},
{"model":"85/97/98/99", "name":"Alpina", "cc":"250/125/175/350", "article":"85.30-027-1/I", "edition":"Tercera", "date":"Septiembre 1972", "image":"85.jpg"},
{"model":"86", "name":"Pursang MK5", "cc":"250", "article":"86.30-027/I", "edition":"Primera", "date":"Diciembre 1971", "image":"86.jpg"},
{"model":"87", "name":"Pursang MK5", "cc":"350", "article":"87.30-027/I", "edition":"Primera", "date":"Mayo 1972", "image":"87.jpg"},
{"model":"89", "name":"Pursang MK5", "cc":"125", "article":"89.30-027/I", "edition":"Primera", "date":"Enero 1972", "image":"89.jpg"},
{"model":"90", "name":"Pursang Astro", "cc":"250", "article":"90.30-027/I", "edition":"Primera", "date":"Febrero 1972", "image":"90.jpg"},
{"model":"91/92", "name":"Sherpa T", "cc":"250/350", "article":"91.30-027/I", "edition":"Segunda", "date":"Diciembre 1972", "image":"91.jpg"},
{"model":"93/94/95", "name":"Lobito MK6", "cc":"175/74/125", "article":"93.30-027/E", "edition":"Primera", "date":"Octubre 1973", "image":"93.jpg"},
{"model":"100/101/102/103/104", "name":"Pursang MK6", "cc":"125/175/200/250/350", "article":"100.30-027/I", "edition":"Segunda", "date":"Abril 1973", "image":"100.jpg"},
{"model":"105/106", "name":"Astro", "cc":"250/350", "article":"105.30-027/I", "edition":"Primera", "date":"Enero 1973", "image":"105.jpg"},
{"model":"107", "name":"Matador MK5-SD", "cc":"250", "article":"107.30-027/I", "edition":"Primera", "date":"Abril 1973", "image":"107.jpg"},
{"model":"108", "name":"Brinco", "cc":"75", "article":"108.30-027/E", "edition":"Segunda", "date":"Marzo 1974", "image":"108.jpg"},
{"model":"113/115/116", "name":"Alpina", "cc":"125/250/350", "article":"113.30-027/I", "edition":"Segunda", "date":"Mayo 1974", "image":"113.jpg"},
{"model":"117/120/121", "name":"Pursang MK7", "cc":"125/250/360", "article":"120.30-027/I", "edition":"Primera", "date":"Febrero 1974", "image":"120.jpg"},
{"model":"124/125", "name":"Sherpa T", "cc":"250/350", "article":"124.30-027/I", "edition":"Primera", "date":"Junio 1974", "image":"124.jpg"},
{"model":"126/127/128", "name":"Lobito MK7", "cc":"74/125/175", "article":"128.30-027/E", "edition":"Primera", "date":"Enero 1974", "image":"126.jpg"},
{"model":"130/131", "name":"Junior", "cc":"75/125", "article":"130.30-027/E", "edition":"Primera", "date":"Junio 1974", "image":"130.jpg"},
{"model":"134/135/136", "name":"Pursang MK8", "cc":"200/250/360", "article":"134.30-027/I", "edition":"Primera", "date":"Octubre 1974", "image":"134.jpg"},
{"model":"137/138", "name":"Alpina", "cc":"250/350", "article":"137.30-027/I", "edition":"Primera", "date":"Julio 1974", "image":"137.jpg"},
{"model":"139", "name":"Mercurio 155 GT", "cc":"155", "article":"139.30-027/E", "edition":"Primera", "date":"Noviembre 1974", "image":"139.jpg"},
{"model":"140", "name":"Matador MK9", "cc":"350", "article":"140.30-027/I", "edition":"Primera", "date":"Marzo 1976", "image":"140.jpg"},
{"model":"142", "name":"Metralla GT", "cc":"250", "article":"142.30-027", "edition":"Primera", "date":"Octubre 1975", "image":"142.jpg"},
{"model":"143/152", "name":"Frontera", "cc":"360/250", "article":"143.30-027/I", "edition":"Primera", "date":"Febrero 1975", "image":"143.jpg"},
{"model":"147/148/149", "name":"Lobito", "cc":"MK8 74/125/175", "article":"147.30-027/E", "edition":"Primera", "date":"Octubre 1974", "image":"147.jpg"},
{"model":"150/151", "name":"Sherpa T", "cc":"250/350", "article":"150.30-027/I", "edition":"Primera", "date":"Diciembre 1974", "image":"150.jpg"},
{"model":"155/156", "name":"Lobito T", "cc":"74/125", "article":"155.30-027/E", "edition":"Primera", "date":"Octubre 1975", "image":"155.jpg"},
{"model":"156", "name":"Sherpa T", "cc":"125", "article":"156.30-027/I", "edition":"Primera", "date":"Marzo 1976", "image":"156.jpg"},
{"model":"158", "name":"Sherpa T", "cc":"250", "article":"158.30-027-1/I", "edition":"Segunda", "date":"Abril 1976", "image":"158.jpg"},
{"model":"159", "name":"Sherpa T", "cc":"350", "article":"159.30-027/I", "edition":"Segunda", "date":"Febrero 1976", "image":"159.jpg"},
{"model":"162/167/168/170", "name":"Pursang MK9", "cc":"125/250/370/200", "article":"162.30-027/I", "edition":"Primera", "date":"Abril 1976", "image":"162.jpg"},
{"model":"165/166", "name":"Alpina", "cc":"250/350", "article":"165.30-027/I", "edition":"Segunda", "date":"Abril 1976", "image":"165.jpg"},
{"model":"174/186", "name":"Frontera", "cc":"74/125", "article":"174.30-027/E", "edition":"Primera", "date":"Diciembre 1976", "image":"174.jpg"},
{"model":"174-A", "name":"Frontera", "cc":"74", "article":"174.30-027", "edition":"Primera", "date":"Junio 1978", "image":"174-A.jpg"},
{"model":"174-B", "name":"Frontera", "cc":"74", "article":"174.30-027-1", "edition":"Primera", "date":"Julio 1979", "image":"174-B.jpg"},
{"model":"175", "name":"Mercurio 175 GT", "cc":"175", "article":"175.30-027/E", "edition":"Primera", "date":"Mayo 1979", "image":"175.jpg"},
{"model":"179/204", "name":"Streaker", "cc":"74/125", "article":"179.30-027", "edition":"Segunda", "date":"Junio 1978", "image":"179.jpg"},
{"model":"179-A/204-A", "name":"Streaker", "cc":"74/125", "article":"179.30-027-1", "edition":"Segunda", "date":"Octubre 1979", "image":"179-A.jpg"},
{"model":"180", "name":"Frontera", "cc":"250", "article":"180.30-027/I", "edition":"Primera", "date":"Noviembre 1976", "image":"180.jpg"},
{"model":"181", "name":"Frontera", "cc":"370", "article":"181.30-027/I", "edition":"Primera", "date":"Noviembre 1976", "image":"181.jpg"},
{"model":"183", "name":"Sherpa T", "cc":"350", "article":"183.30-027/I", "edition":"Primera", "date":"Mayo 1976", "image":"183.jpg"},
{"model":"184/185", "name":"Sherpa T", "cc":"74/125", "article":"184.30-027/I", "edition":"Primera", "date":"Septiembre 1976", "image":"184.jpg"},
{"model":"184/185", "name":"Sherpa T", "cc":"74/125", "article":"184.30-027(2)", "edition":"Primera", "date":"Febrero 1978", "image":"184a.jpg"},
{"model":"184-B/185-B", "name":"Sherpa T", "cc":"74/125", "article":"184.30-027-1", "edition":"Primera", "date":"Abril 1979", "image":"184b.jpg"},
{"model":"187/188", "name":"Alpina", "cc":"250/350", "article":"187.30-027/I", "edition":"Primera", "date":"Septiembre 1976", "image":"187.jpg"},
{"model":"190", "name":"Sherpa T", "cc":"250", "article":"190.30-027/E", "edition":"Primera", "date":"Octubre 1976", "image":"190.jpg"},
{"model":"191", "name":"Sherpa T", "cc":"350", "article":"191.30-027/E", "edition":"Primera", "date":"Septiembre 1976", "image":"191.jpg"},
{"model":"192/193", "name":"Pursang MK10", "cc":"250/370", "article":"192.30-027", "edition":"Primera", "date":"Febrero 1977", "image":"192.jpg"},
{"model":"194/200", "name":"Pursang MK10", "cc":"125/200", "article":"194.30-027", "edition":"Primera", "date":"Abril 1977", "image":"194.jpg"},
{"model":"198/199", "name":"Sherpa T", "cc":"250/350", "article":"199.30-027(2)", "edition":"Segunda", "date":"Enero 1978", "image":"198.jpg"},
{"model":"199", "name":"Sherpa T", "cc":"350", "article":"199.30-027", "edition":"Primera", "date":"Octubre 1977", "image":"199.jpg"},
{"model":"198A/199A", "name":"Sherpa T", "cc":"250/350", "article":"199.30-027-1", "edition":"Segunda", "date":"Enero 1979", "image":"199-A.jpg"},
{"model":"198A/199A", "name":"Sherpa T", "cc":"250/350", "article":"199.30-027-1", "edition":"Cuarta", "date":"Enero 1981", "image":"199-Aa.jpg"},
{"model":"198B/199B", "name":"Sherpa T", "cc":"250/350", "article":"199.30-027-2", "edition":"Sexta", "date":"Julio 1981", "image":"199-B.jpg"},
{"model":"203", "name":"Metralla GTS", "cc":"250", "article":"203.30-027", "edition":"Segunda", "date":"Diciembre 1978", "image":"203.jpg"},
{"model":"203-A", "name":"Metralla GTS", "cc":"250", "article":"203.30-027-1", "edition":"Primera", "date":"Septiembre 1979", "image":"203-A.jpg"},
{"model":"206/207", "name":"Pursang MK11", "cc":"250/370", "article":"206.30-027", "edition":"Primera", "date":"Noviembre 1977", "image":"206.jpg"},
{"model":"210", "name":"Matador MK10", "cc":"350", "article":"210.30-027", "edition":"Primera", "date":"Noviembre 1977", "image":"210.jpg"},
{"model":"212/213", "name":"Alpina", "cc":"250/350", "article":"213.30-027", "edition":"Primera", "date":"Agosto 1977", "image":"212.jpg"},
{"model":"214/215", "name":"Frontera MK11", "cc":"250/370", "article":"214.30-027(3)", "edition":"Segunda", "date":"Octubre 1978", "image":"214.jpg"},
{"model":"219/220", "name":"Pursang MK12", "cc":"250/370", "article":"219.30-027(2)", "edition":"Primera", "date":"Septembre 1978", "image":"219.jpg"}
];