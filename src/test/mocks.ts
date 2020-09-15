export const emptyResponse = `<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="CGImap 0.8.3 (284434 spike-07.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <bounds minlat="10.0000000" minlon="10.0000000" maxlat="10.0000000" maxlon="10.0000000"/>
</osm>
`;

export const singlePointResponse = `<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="CGImap 0.8.3 (2681043 spike-08.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <bounds minlat="0.0000000" minlon="0.0000000" maxlat="0.2500000" maxlon="0.2500000"/>
 <node id="3815077900" visible="true" version="81" changeset="88350182" timestamp="2020-07-22T12:46:36Z" user="Piskvor" uid="718054" lat="0.0000000" lon="0.0000000">
  <tag k="alt_name" v="Atlas Buoy"/>
  <tag k="height" v="4"/>
  <tag k="image" v="https://www.ndbc.noaa.gov/images/stations/13010.jpg"/>
  <tag k="man_made" v="monitoring_station"/>
  <tag k="monitoring:water_temperature" v="yes"/>
  <tag k="monitoring:weather" v="yes"/>
  <tag k="name" v="Soul Buoy"/>
  <tag k="note" v="Do not delete. Visual confirmed by research vessel on May 2009."/>
  <tag k="operator" v="Prediction and Research Moored Array in the Atlantic"/>
  <tag k="ref:wmo" v="13010"/>
  <tag k="seamark:buoy_special_purpose:category" v="odas"/>
  <tag k="seamark:buoy_special_purpose:colour" v="red;white"/>
  <tag k="seamark:buoy_special_purpose:colour_pattern" v="vertical"/>
  <tag k="seamark:buoy_special_purpose:shape" v="pillar"/>
  <tag k="seamark:name" v="Atlas Buoy"/>
  <tag k="seamark:type" v="buoy_special_purpose"/>
  <tag k="url" v="https://www.ndbc.noaa.gov/station_page.php?station=13010"/>
  <tag k="website" v="https://www.pmel.noaa.gov/tao/drupal/pirata-display/0n0e.html"/>
  <tag k="wikidata" v="Q24041662"/>
  <tag k="wikimedia_commons" v="Category:Weather buoy station 13010"/>
 </node>
</osm>
`;

export const lineStringResponse = `<?xml version="1.0" encoding="UTF-8"?>
 <osm><way id='1'>
 <nd ref='1' />
 <nd ref='2' lat='1' lon='1' />
 <nd ref='3' lat='2' lon='2' />
 <nd ref='4' />
 </way></osm>
`;

export const multiLineResponse = `<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="CGImap 0.8.3 (459440 spike-06.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <bounds minlat="41.5000000" minlon="41.5000000" maxlat="41.5500000" maxlon="41.5500000"/>
 <node id="27835839" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:39Z" user="brogo" uid="63107" lat="41.5433434" lon="41.5583030"/>
 <node id="27835892" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:39Z" user="brogo" uid="63107" lat="41.5440436" lon="41.5595513"/>
 <node id="27839789" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:40Z" user="brogo" uid="63107" lat="41.5380610" lon="41.5518683"/>
 <node id="27841064" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:40Z" user="brogo" uid="63107" lat="41.5435536" lon="41.5586600"/>
 <node id="27844533" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:40Z" user="brogo" uid="63107" lat="41.5430115" lon="41.5576547"/>
 <node id="27844953" visible="true" version="4" changeset="23227708" timestamp="2014-06-27T19:36:40Z" user="brogo" uid="63107" lat="41.5438290" lon="41.5592382"/>
 <node id="27856661" visible="true" version="4" changeset="23227708" timestamp="2014-06-27T19:36:42Z" user="brogo" uid="63107" lat="41.5436945" lon="41.5590188"/>
 <node id="27859981" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:42Z" user="brogo" uid="63107" lat="41.5409869" lon="41.5535482"/>
 <node id="27870896" visible="true" version="3" changeset="23227708" timestamp="2014-06-27T19:36:43Z" user="brogo" uid="63107" lat="41.5401638" lon="41.5526993"/>
 <node id="27871859" visible="true" version="4" changeset="23227708" timestamp="2014-06-27T19:36:43Z" user="brogo" uid="63107" lat="41.5418395" lon="41.5557865"/>
 <node id="182612804" visible="true" version="8" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5214504" lon="41.5483254">
  <tag k="access" v="yes"/>
  <tag k="barrier" v="gate"/>
 </node>
 <node id="219991384" visible="true" version="22" changeset="70171465" timestamp="2019-05-12T21:36:26Z" user="iWowik" uid="481934" lat="41.5218985" lon="41.5489175">
  <tag k="is_in" v="Khelvachauri;Adjara;Georgia;Asia"/>
  <tag k="is_in:country" v="Georgia"/>
  <tag k="name" v="სარფი"/>
  <tag k="name:de" v="Sarpi"/>
  <tag k="name:en" v="Sarpi"/>
  <tag k="name:ka" v="სარფი"/>
  <tag k="name:ru" v="Сарпи"/>
  <tag k="name:tr" v="Sarp"/>
  <tag k="name:uk" v="Сарпі"/>
  <tag k="place" v="village"/>
  <tag k="wikidata" v="Q2302798"/>
  <tag k="wikipedia" v="ka:სარფი"/>
  <tag k="wikipedia:en" v="Sarpi, Georgia"/>
 </node>
 <node id="356982901" visible="true" version="1" changeset="760051" timestamp="2009-03-08T00:56:15Z" user="hakan" uid="4388" lat="41.6120000" lon="41.2994398"/>
 <node id="427027712" visible="true" version="2" changeset="21419949" timestamp="2014-03-31T13:23:45Z" user="KartaBY" uid="413914" lat="41.5199856" lon="41.5495752"/>
 <node id="427027714" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5196050" lon="41.5506910"/>
 <node id="427027715" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5190359" lon="41.5520784"/>
 <node id="427027717" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5182260" lon="41.5548900"/>
 <node id="427027719" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5183860" lon="41.5571940"/>
 <node id="427027720" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5191110" lon="41.5600150"/>
 <node id="427027722" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5195880" lon="41.5621800"/>
 <node id="427027723" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5193260" lon="41.5641410"/>
 <node id="427027724" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:19Z" user="gguj" uid="72133" lat="41.5193510" lon="41.5665120"/>
 <node id="427027725" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5196030" lon="41.5688110"/>
 <node id="427027726" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5198340" lon="41.5704420"/>
 <node id="427027727" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5197830" lon="41.5717830"/>
 <node id="427027728" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5191440" lon="41.5733380"/>
 <node id="427027729" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5183170" lon="41.5763020"/>
 <node id="427027730" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5167880" lon="41.5786950"/>
 <node id="427027731" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5153480" lon="41.5810220"/>
 <node id="427027732" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5138210" lon="41.5819540"/>
 <node id="427027733" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5121250" lon="41.5818000"/>
 <node id="427027734" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5107220" lon="41.5823000"/>
 <node id="427027735" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5094910" lon="41.5839460"/>
 <node id="427027736" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5087050" lon="41.5852040"/>
 <node id="427027738" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5082580" lon="41.5888170"/>
 <node id="427027739" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5079180" lon="41.5927890"/>
 <node id="427027740" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5070170" lon="41.5963040"/>
 <node id="427027741" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5061640" lon="41.5983870"/>
 <node id="427027743" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5052620" lon="41.6003800"/>
 <node id="427027744" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5040650" lon="41.6022070"/>
 <node id="427027746" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5039630" lon="41.6049500"/>
 <node id="427027748" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5034110" lon="41.6079590"/>
 <node id="427027749" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5025680" lon="41.6103760"/>
 <node id="427027751" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5020460" lon="41.6128360"/>
 <node id="427027752" visible="true" version="1" changeset="1577152" timestamp="2009-06-20T19:10:20Z" user="gguj" uid="72133" lat="41.5021250" lon="41.6155090"/>
 <node id="586118662" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5206665" lon="41.5470851"/>
 <node id="846876231" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5137316" lon="41.5435645"/>
 <node id="846876238" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5162824" lon="41.5448008"/>
 <node id="846876245" visible="true" version="1" changeset="5408128" timestamp="2010-08-05T13:15:46Z" user="katpatuka" uid="17497" lat="41.5087650" lon="41.5375083"/>
 <node id="846876318" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4981143" lon="41.5318384"/>
 <node id="846876375" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5147285" lon="41.5441501"/>
 <node id="846876452" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5111926" lon="41.5413797"/>
 <node id="846876523" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5158511" lon="41.5446199"/>
 <node id="846876530" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5172818" lon="41.5455539"/>
 <node id="846876538" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5096660" lon="41.5380796"/>
 <node id="846876608" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5114838" lon="41.5423330"/>
 <node id="846876623" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4990283" lon="41.5318600"/>
 <node id="846876771" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5104100" lon="41.5389732"/>
 <node id="846876882" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5117833" lon="41.5428195"/>
 <node id="846876900" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4998169" lon="41.5321114"/>
 <node id="846876913" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5055633" lon="41.5350958"/>
 <node id="846876983" visible="true" version="6" changeset="63371825" timestamp="2018-10-10T08:28:58Z" user="Qotola" uid="8746535" lat="41.5203548" lon="41.5482911"/>
 <node id="846877021" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5110676" lon="41.5401757"/>
 <node id="846877091" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5122905" lon="41.5431928"/>
 <node id="846877101" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5011148" lon="41.5326530"/>
 <node id="846877106" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5059488" lon="41.5352656"/>
 <node id="846877160" visible="true" version="8" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5188792" lon="41.5478819">
  <tag k="alt_name" v="Sarp Sınır Kapısı"/>
  <tag k="barrier" v="border_control"/>
  <tag k="name" v="Sarp Hudut Kapısı"/>
  <tag k="name:en" v="Sarp Border Control"/>
 </node>
 <node id="846877238" visible="true" version="5" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5132034" lon="41.5433217"/>
 <node id="846877246" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5031602" lon="41.5339818"/>
 <node id="846877256" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5075767" lon="41.5368185"/>
 <node id="928842157" visible="true" version="6" changeset="57081912" timestamp="2018-03-11T13:56:18Z" user="katpatuka" uid="17497" lat="41.5162488" lon="41.5493823">
  <tag k="is_in" v="Turkey, Artvin, Kemalpaşa"/>
  <tag k="is_in:country" v="Turkey"/>
  <tag k="is_in:country_code" v="TR"/>
  <tag k="is_in:district" v="Kemalpaşa"/>
  <tag k="is_in:region" v="Artvin"/>
  <tag k="name" v="Sarp"/>
  <tag k="name:en" v="Sarpi"/>
  <tag k="name:ka" v="სარფი"/>
  <tag k="place" v="village"/>
  <tag k="population" v="233"/>
  <tag k="postal_code" v="08600"/>
  <tag k="wikidata" v="Q612848"/>
  <tag k="wikipedia" v="tr:Sarp, Hopa"/>
 </node>
 <node id="928842272" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5199055" lon="41.5489612"/>
 <node id="928842273" visible="true" version="3" changeset="8214602" timestamp="2011-05-22T10:36:00Z" user="katpatuka" uid="17497" lat="41.5182233" lon="41.5529615"/>
 <node id="928842274" visible="true" version="2" changeset="8214602" timestamp="2011-05-22T10:36:03Z" user="katpatuka" uid="17497" lat="41.5168555" lon="41.5502086"/>
 <node id="928842275" visible="true" version="2" changeset="8214602" timestamp="2011-05-22T10:36:03Z" user="katpatuka" uid="17497" lat="41.5161224" lon="41.5503835"/>
 <node id="928842276" visible="true" version="2" changeset="8214602" timestamp="2011-05-22T10:36:04Z" user="katpatuka" uid="17497" lat="41.5144354" lon="41.5492629"/>
 <node id="928842277" visible="true" version="2" changeset="8214602" timestamp="2011-05-22T10:36:03Z" user="katpatuka" uid="17497" lat="41.5160591" lon="41.5458851"/>
 <node id="928842278" visible="true" version="1" changeset="5901102" timestamp="2010-09-28T07:04:38Z" user="user_16881" uid="16881" lat="41.5168915" lon="41.5461208"/>
 <node id="928842279" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5170654" lon="41.5468314"/>
 <node id="928923399" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5245132" lon="41.5490882"/>
 <node id="928923400" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5234247" lon="41.5527524"/>
 <node id="928923401" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5195023" lon="41.5551276"/>
 <node id="928923402" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5198116" lon="41.5508347"/>
 <node id="928933769" visible="true" version="3" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5446134" lon="41.5623696"/>
 <node id="1042394839" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5203666" lon="41.5496483"/>
 <node id="1042394843" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5207733" lon="41.5498243"/>
 <node id="1042394856" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5204024" lon="41.5492322"/>
 <node id="1042394859" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5208074" lon="41.5492915"/>
 <node id="1080358341" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:42:53Z" user="gguj" uid="72133" lat="41.5406105" lon="41.5530544"/>
 <node id="1080358352" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:42:53Z" user="gguj" uid="72133" lat="41.5398079" lon="41.5526258"/>
 <node id="1080358411" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:42:55Z" user="gguj" uid="72133" lat="41.5425026" lon="41.5569256"/>
 <node id="1080358462" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:42:56Z" user="gguj" uid="72133" lat="41.5415535" lon="41.5552525"/>
 <node id="1080358562" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:43:01Z" user="gguj" uid="72133" lat="41.5412495" lon="41.5545827"/>
 <node id="1080358626" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:43:06Z" user="gguj" uid="72133" lat="41.5427295" lon="41.5573301"/>
 <node id="1080358628" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:43:07Z" user="gguj" uid="72133" lat="41.5392011" lon="41.5524000"/>
 <node id="1080358634" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:43:07Z" user="gguj" uid="72133" lat="41.5423816" lon="41.5565399"/>
 <node id="1080358639" visible="true" version="1" changeset="6847953" timestamp="2011-01-03T10:43:08Z" user="gguj" uid="72133" lat="41.5411560" lon="41.5540546"/>
 <node id="1081851657" visible="true" version="5" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5206879" lon="41.5482034"/>
 <node id="1204210020" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5167869" lon="41.5449142"/>
 <node id="1204210334" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5170934" lon="41.5451443"/>
 <node id="1295861739" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.4982313" lon="41.5322325"/>
 <node id="1295871508" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5176059" lon="41.5474228"/>
 <node id="1295871510" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5065976" lon="41.5361699"/>
 <node id="1295871513" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5112143" lon="41.5423901"/>
 <node id="1295871515" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5193678" lon="41.5481040"/>
 <node id="1295871517" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5025692" lon="41.5339069"/>
 <node id="1295871519" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5103788" lon="41.5402548"/>
 <node id="1295871520" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5193363" lon="41.5482596"/>
 <node id="1295871526" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5181426" lon="41.5471588"/>
 <node id="1295871528" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5167717" lon="41.5457511"/>
 <node id="1295871530" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5117734" lon="41.5433147"/>
 <node id="1295871531" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5179942" lon="41.5475635"/>
 <node id="1295871533" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5180520" lon="41.5473014"/>
 <node id="1295871535" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5109580" lon="41.5418522"/>
 <node id="1295871537" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5097692" lon="41.5390050"/>
 <node id="1295871538" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5084692" lon="41.5374953"/>
 <node id="1295871539" visible="true" version="4" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5202272" lon="41.5483354"/>
 <node id="1295871540" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5090782" lon="41.5380195"/>
 <node id="1295871541" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5160066" lon="41.5452153"/>
 <node id="1295871542" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5134902" lon="41.5440934"/>
 <node id="1295871544" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5175428" lon="41.5478139"/>
 <node id="1295871546" visible="true" version="4" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5203520" lon="41.5477355"/>
 <node id="1295871548" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5193184" lon="41.5478117"/>
 <node id="1295871550" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5106725" lon="41.5410938"/>
 <node id="1295871551" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5156812" lon="41.5450416"/>
 <node id="1295871553" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5197545" lon="41.5484868"/>
 <node id="1295871558" visible="true" version="4" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5201173" lon="41.5482946"/>
 <node id="1295871559" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5180945" lon="41.5473549"/>
 <node id="1295871560" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5014833" lon="41.5332818"/>
 <node id="1295871561" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5115104" lon="41.5429558"/>
 <node id="1295871562" visible="true" version="4" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5175074" lon="41.5471109"/>
 <node id="1295871563" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5197923" lon="41.5482894"/>
 <node id="1295871564" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5088042" lon="41.5377743"/>
 <node id="1295871566" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5125412" lon="41.5437781"/>
 <node id="1295871568" visible="true" version="4" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5202419" lon="41.5476947"/>
 <node id="1295871570" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5193633" lon="41.5476171"/>
 <node id="1295871571" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5143633" lon="41.5445652"/>
 <node id="1295871573" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5120762" lon="41.5435503"/>
 <node id="1295871575" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5077972" lon="41.5371122"/>
 <node id="1295885941" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:26Z" user="katpatuka" uid="17497" lat="41.5122961" lon="41.5496951"/>
 <node id="1295885946" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:26Z" user="katpatuka" uid="17497" lat="41.5131589" lon="41.5462765"/>
 <node id="1295885949" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:26Z" user="katpatuka" uid="17497" lat="41.4992944" lon="41.5356067"/>
 <node id="1295885969" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:27Z" user="katpatuka" uid="17497" lat="41.5158083" lon="41.5469885"/>
 <node id="1295885978" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:28Z" user="katpatuka" uid="17497" lat="41.5159868" lon="41.5471878"/>
 <node id="1295885981" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:28Z" user="katpatuka" uid="17497" lat="41.4964795" lon="41.5373760"/>
 <node id="1295885985" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:28Z" user="katpatuka" uid="17497" lat="41.5124467" lon="41.5480374"/>
 <node id="1295885990" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:28Z" user="katpatuka" uid="17497" lat="41.4985495" lon="41.5369250"/>
 <node id="1295886001" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5160121" lon="41.5487756"/>
 <node id="1295886004" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:29Z" user="katpatuka" uid="17497" lat="41.5134102" lon="41.5482779"/>
 <node id="1295886010" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:29Z" user="katpatuka" uid="17497" lat="41.5122677" lon="41.5506027"/>
 <node id="1295886011" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:29Z" user="katpatuka" uid="17497" lat="41.4966701" lon="41.5345775"/>
 <node id="1295886013" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:29Z" user="katpatuka" uid="17497" lat="41.5166119" lon="41.5464063"/>
 <node id="1295886016" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:29Z" user="katpatuka" uid="17497" lat="41.4970512" lon="41.5378617"/>
 <node id="1295886021" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:30Z" user="katpatuka" uid="17497" lat="41.5129392" lon="41.5473472"/>
 <node id="1295886024" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5168687" lon="41.5475025"/>
 <node id="1295886026" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:30Z" user="katpatuka" uid="17497" lat="41.5127158" lon="41.5497251"/>
 <node id="1295886027" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:30Z" user="katpatuka" uid="17497" lat="41.5123653" lon="41.5457058"/>
 <node id="1295886030" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:30Z" user="katpatuka" uid="17497" lat="41.5153891" lon="41.5469124"/>
 <node id="1295886035" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5160901" lon="41.5488849"/>
 <node id="1295886038" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:31Z" user="katpatuka" uid="17497" lat="41.5151449" lon="41.5474355"/>
 <node id="1295886042" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.5187787" lon="41.5501079"/>
 <node id="1295886045" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.5164960" lon="41.5463743"/>
 <node id="1295886047" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.5132525" lon="41.5471026"/>
 <node id="1295886048" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.5165010" lon="41.5466194"/>
 <node id="1295886051" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.4951630" lon="41.5365896"/>
 <node id="1295886056" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:32Z" user="katpatuka" uid="17497" lat="41.5125810" lon="41.5474287"/>
 <node id="1295886061" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5164378" lon="41.5478943"/>
 <node id="1295886064" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:33Z" user="katpatuka" uid="17497" lat="41.5130134" lon="41.5485836"/>
 <node id="1295886068" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:33Z" user="katpatuka" uid="17497" lat="41.5153077" lon="41.5469056"/>
 <node id="1295886074" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:33Z" user="katpatuka" uid="17497" lat="41.5158538" lon="41.5481470"/>
 <node id="1295886080" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:34Z" user="katpatuka" uid="17497" lat="41.5123206" lon="41.5502223"/>
 <node id="1295886084" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:34Z" user="katpatuka" uid="17497" lat="41.5127031" lon="41.5463797"/>
 <node id="1295886087" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:34Z" user="katpatuka" uid="17497" lat="41.5007408" lon="41.5349476"/>
 <node id="1295886100" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5171926" lon="41.5474035"/>
 <node id="1295886109" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:35Z" user="katpatuka" uid="17497" lat="41.5129473" lon="41.5488214"/>
 <node id="1295886111" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5120417" lon="41.5430328"/>
 <node id="1295886118" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:35Z" user="katpatuka" uid="17497" lat="41.5156780" lon="41.5470374"/>
 <node id="1295886130" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:36Z" user="katpatuka" uid="17497" lat="41.5158405" lon="41.5474779"/>
 <node id="1295886139" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:36Z" user="katpatuka" uid="17497" lat="41.5124020" lon="41.5484179"/>
 <node id="1295886142" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:36Z" user="katpatuka" uid="17497" lat="41.4993897" lon="41.5368441"/>
 <node id="1295886147" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:37Z" user="katpatuka" uid="17497" lat="41.5162223" lon="41.5486924"/>
 <node id="1295886159" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:38Z" user="katpatuka" uid="17497" lat="41.5143361" lon="41.5482100"/>
 <node id="1295886166" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:38Z" user="katpatuka" uid="17497" lat="41.4985322" lon="41.5361155"/>
 <node id="1295886167" visible="true" version="2" changeset="57081912" timestamp="2018-03-11T13:56:18Z" user="katpatuka" uid="17497" lat="41.5004271" lon="41.5415679">
  <tag k="is_in" v="Turkey, Artvin, Kemalpaşa"/>
  <tag k="is_in:country" v="Turkey"/>
  <tag k="is_in:district" v="Kemalpaşa"/>
  <tag k="is_in:region" v="Artvin"/>
  <tag k="name" v="Üçkardeş"/>
  <tag k="place" v="village"/>
 </node>
 <node id="1295886170" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:38Z" user="katpatuka" uid="17497" lat="41.5157518" lon="41.5475786"/>
 <node id="1295886175" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:39Z" user="katpatuka" uid="17497" lat="41.4976488" lon="41.5364971"/>
 <node id="1295886179" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:39Z" user="katpatuka" uid="17497" lat="41.5123775" lon="41.5486950"/>
 <node id="1295886183" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:39Z" user="katpatuka" uid="17497" lat="41.5001865" lon="41.5372141"/>
 <node id="1295886185" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:39Z" user="katpatuka" uid="17497" lat="41.5124814" lon="41.5502955"/>
 <node id="1295886186" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:39Z" user="katpatuka" uid="17497" lat="41.5124060" lon="41.5459015"/>
 <node id="1295886192" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:40Z" user="katpatuka" uid="17497" lat="41.5122808" lon="41.5507790"/>
 <node id="1295886194" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5161365" lon="41.5488703"/>
 <node id="1295886197" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:40Z" user="katpatuka" uid="17497" lat="41.5149669" lon="41.5479518"/>
 <node id="1295886207" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:40Z" user="katpatuka" uid="17497" lat="41.5132525" lon="41.5463308"/>
 <node id="1295886208" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:40Z" user="katpatuka" uid="17497" lat="41.5162351" lon="41.5468385"/>
 <node id="1295886211" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:41Z" user="katpatuka" uid="17497" lat="41.4934999" lon="41.5320797"/>
 <node id="1295886216" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:41Z" user="katpatuka" uid="17497" lat="41.5124752" lon="41.5475972"/>
 <node id="1295886220" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5163381" lon="41.5481566"/>
 <node id="1295886223" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:41Z" user="katpatuka" uid="17497" lat="41.5124632" lon="41.5504242"/>
 <node id="1295886224" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:41Z" user="katpatuka" uid="17497" lat="41.5124549" lon="41.5462058"/>
 <node id="1295886226" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:41Z" user="katpatuka" uid="17497" lat="41.5152263" lon="41.5470347"/>
 <node id="1295886232" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:42Z" user="katpatuka" uid="17497" lat="41.5154991" lon="41.5477621"/>
 <node id="1295886233" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:42Z" user="katpatuka" uid="17497" lat="41.5148397" lon="41.5481216"/>
 <node id="1295886239" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:42Z" user="katpatuka" uid="17497" lat="41.5124142" lon="41.5492005"/>
 <node id="1295886243" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:42Z" user="katpatuka" uid="17497" lat="41.5128618" lon="41.5463743"/>
 <node id="1295886246" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:43Z" user="katpatuka" uid="17497" lat="41.5005502" lon="41.5357108"/>
 <node id="1295886256" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5174168" lon="41.5477829"/>
 <node id="1295886260" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:44Z" user="katpatuka" uid="17497" lat="41.5128303" lon="41.5492018"/>
 <node id="1295886265" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:44Z" user="katpatuka" uid="17497" lat="41.5163536" lon="41.5464341"/>
 <node id="1295886271" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:44Z" user="katpatuka" uid="17497" lat="41.4962543" lon="41.5327735"/>
 <node id="1295886274" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5171973" lon="41.5469361"/>
 <node id="1295886282" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:45Z" user="katpatuka" uid="17497" lat="41.5130084" lon="41.5462819"/>
 <node id="1295886286" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:45Z" user="katpatuka" uid="17497" lat="41.5000133" lon="41.5361040"/>
 <node id="1295886292" visible="true" version="2" changeset="51452135" timestamp="2017-08-26T07:34:57Z" user="penom" uid="436145" lat="41.4962199" lon="41.5322938"/>
 <node id="1295886302" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:46Z" user="katpatuka" uid="17497" lat="41.5140309" lon="41.5480197"/>
 <node id="1295886307" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:46Z" user="katpatuka" uid="17497" lat="41.4977441" lon="41.5356645"/>
 <node id="1295886310" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:46Z" user="katpatuka" uid="17497" lat="41.5155789" lon="41.5476733"/>
 <node id="1295886315" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:46Z" user="katpatuka" uid="17497" lat="41.4960031" lon="41.5360461"/>
 <node id="1295886320" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:47Z" user="katpatuka" uid="17497" lat="41.5123816" lon="41.5489722"/>
 <node id="1295886324" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:47Z" user="katpatuka" uid="17497" lat="41.5013210" lon="41.5355026"/>
 <node id="1295886337" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:48Z" user="katpatuka" uid="17497" lat="41.5159159" lon="41.5482891"/>
 <node id="1295886341" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:48Z" user="katpatuka" uid="17497" lat="41.5137663" lon="41.5481964"/>
 <node id="1295886342" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5170793" lon="41.5473957"/>
 <node id="1295886345" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:48Z" user="katpatuka" uid="17497" lat="41.5149603" lon="41.5471013"/>
 <node id="1295886348" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:49Z" user="katpatuka" uid="17497" lat="41.5123206" lon="41.5504234"/>
 <node id="1295886349" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:49Z" user="katpatuka" uid="17497" lat="41.4969819" lon="41.5357223"/>
 <node id="1295886353" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:50Z" user="katpatuka" uid="17497" lat="41.5133014" lon="41.5464558"/>
 <node id="1295886354" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:50Z" user="katpatuka" uid="17497" lat="41.5175579" lon="41.5511718"/>
 <node id="1295886357" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:50Z" user="katpatuka" uid="17497" lat="41.4937858" lon="41.5336293"/>
 <node id="1295886363" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:50Z" user="katpatuka" uid="17497" lat="41.5131915" lon="41.5472113"/>
 <node id="1295886367" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5169676" lon="41.5474476"/>
 <node id="1295886371" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5124319" lon="41.5505321"/>
 <node id="1295886372" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5125851" lon="41.5463254"/>
 <node id="1295886374" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5155478" lon="41.5470102"/>
 <node id="1295886380" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5154991" lon="41.5479042"/>
 <node id="1295886382" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5145803" lon="41.5482100"/>
 <node id="1295886387" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:51Z" user="katpatuka" uid="17497" lat="41.5177657" lon="41.5529642"/>
 <node id="1295886390" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:52Z" user="katpatuka" uid="17497" lat="41.5123938" lon="41.5493961"/>
 <node id="1295886393" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:52Z" user="katpatuka" uid="17497" lat="41.5165611" lon="41.5463743"/>
 <node id="1295886395" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:52Z" user="katpatuka" uid="17497" lat="41.5132851" lon="41.5468580"/>
 <node id="1295886399" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:52Z" user="katpatuka" uid="17497" lat="41.4941409" lon="41.5349822"/>
 <node id="1295886412" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:53Z" user="katpatuka" uid="17497" lat="41.5130999" lon="41.5484749"/>
 <node id="1295886415" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:53Z" user="katpatuka" uid="17497" lat="41.5159792" lon="41.5467765"/>
 <node id="1295886421" visible="true" version="1" changeset="8214602" timestamp="2011-05-22T10:35:53Z" user="katpatuka" uid="17497" lat="41.5155523" lon="41.5479990"/>
 <node id="1306047219" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:15Z" user="Andro" uid="120556" lat="41.5317261" lon="41.5528931"/>
 <node id="1306047223" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5448324" lon="41.5640764"/>
 <node id="1306047225" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:15Z" user="Andro" uid="120556" lat="41.5318033" lon="41.5523136"/>
 <node id="1306047231" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216765" lon="41.5517541"/>
 <node id="1306047232" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:16Z" user="Andro" uid="120556" lat="41.5434169" lon="41.5650400"/>
 <node id="1306047235" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5447578" lon="41.5643194"/>
 <node id="1306047240" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:16Z" user="Andro" uid="120556" lat="41.5316709" lon="41.5530807"/>
 <node id="1306047241" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5231953" lon="41.5502042"/>
 <node id="1306047247" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5234361" lon="41.5502340"/>
 <node id="1306047252" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:17Z" user="Andro" uid="120556" lat="41.5434918" lon="41.5611214"/>
 <node id="1306047256" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:17Z" user="Andro" uid="120556" lat="41.5359092" lon="41.5519052"/>
 <node id="1306047262" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:17Z" user="Andro" uid="120556" lat="41.5254569" lon="41.5494274"/>
 <node id="1306047263" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:40Z" user="orca_horka" uid="8525896" lat="41.5376889" lon="41.5522871"/>
 <node id="1306047266" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:18Z" user="Andro" uid="120556" lat="41.5261412" lon="41.5498578"/>
 <node id="1306047269" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227882" lon="41.5508300"/>
 <node id="1306047271" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:18Z" user="Andro" uid="120556" lat="41.5277416" lon="41.5493556"/>
 <node id="1306047273" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:18Z" user="Andro" uid="120556" lat="41.5267483" lon="41.5494218"/>
 <node id="1306047281" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:18Z" user="Andro" uid="120556" lat="41.5433373" lon="41.5612593"/>
 <node id="1306047285" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5317261" lon="41.5538588"/>
 <node id="1306047291" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5420449" lon="41.5646468"/>
 <node id="1306047293" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5430469" lon="41.5617939"/>
 <node id="1306047295" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5430031" lon="41.5619381"/>
 <node id="1306047296" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5429898" lon="41.5622981"/>
 <node id="1306047297" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5222038" lon="41.5505083"/>
 <node id="1306047299" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:19Z" user="Andro" uid="120556" lat="41.5418473" lon="41.5583400"/>
 <node id="1306047310" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227896" lon="41.5511852"/>
 <node id="1306047311" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:40Z" user="orca_horka" uid="8525896" lat="41.5332220" lon="41.5497813"/>
 <node id="1306047312" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:20Z" user="Andro" uid="120556" lat="41.5320572" lon="41.5510774"/>
 <node id="1306047328" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5406051" lon="41.5538291"/>
 <node id="1306047344" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:21Z" user="Andro" uid="120556" lat="41.5276644" lon="41.5493667"/>
 <node id="1306047346" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:21Z" user="Andro" uid="120556" lat="41.5409312" lon="41.5566844"/>
 <node id="1306047357" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:22Z" user="Andro" uid="120556" lat="41.5336797" lon="41.5502993"/>
 <node id="1306047367" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:22Z" user="Andro" uid="120556" lat="41.5414830" lon="41.5581579"/>
 <node id="1306047371" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:22Z" user="Andro" uid="120556" lat="41.5341156" lon="41.5504538"/>
 <node id="1306047373" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:22Z" user="Andro" uid="120556" lat="41.5421546" lon="41.5636574"/>
 <node id="1306047379" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:23Z" user="Andro" uid="120556" lat="41.5434808" lon="41.5604702"/>
 <node id="1306047380" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:23Z" user="Andro" uid="120556" lat="41.5319854" lon="41.5515631"/>
 <node id="1306047383" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5211504" lon="41.5497856"/>
 <node id="1306047394" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5237686" lon="41.5500009"/>
 <node id="1306047400" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:24Z" user="Andro" uid="120556" lat="41.5250430" lon="41.5496205"/>
 <node id="1306047406" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5218870" lon="41.5513133"/>
 <node id="1306047407" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5434699" lon="41.5595711"/>
 <node id="1306047410" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:24Z" user="Andro" uid="120556" lat="41.5237958" lon="41.5498854"/>
 <node id="1306047413" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:24Z" user="Andro" uid="120556" lat="41.5221982" lon="41.5509475"/>
 <node id="1306047416" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:24Z" user="Andro" uid="120556" lat="41.5427218" lon="41.5641421"/>
 <node id="1306047418" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:25Z" user="Andro" uid="120556" lat="41.5373275" lon="41.5528765"/>
 <node id="1306047424" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:25Z" user="Andro" uid="120556" lat="41.5425702" lon="41.5591402"/>
 <node id="1306047430" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:25Z" user="Andro" uid="120556" lat="41.5278134" lon="41.5493556"/>
 <node id="1306047431" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:25Z" user="Andro" uid="120556" lat="41.5329603" lon="41.5518221"/>
 <node id="1306047441" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5266268" lon="41.5494660"/>
 <node id="1306047442" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5421243" lon="41.5644985"/>
 <node id="1306047445" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5219549" lon="41.5506749"/>
 <node id="1306047448" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5323285" lon="41.5533376"/>
 <node id="1306047454" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5251267" lon="41.5496337"/>
 <node id="1306047458" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5414002" lon="41.5580364"/>
 <node id="1306047461" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:26Z" user="Andro" uid="120556" lat="41.5419753" lon="41.5652731"/>
 <node id="1306047470" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5247416" lon="41.5489369"/>
 <node id="1306047471" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:27Z" user="Andro" uid="120556" lat="41.5426489" lon="41.5653651"/>
 <node id="1306047472" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5441949" lon="41.5604947"/>
 <node id="1306047473" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:27Z" user="Andro" uid="120556" lat="41.5316047" lon="41.5497530"/>
 <node id="1306047475" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5230808" lon="41.5502119"/>
 <node id="1306047477" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:27Z" user="Andro" uid="120556" lat="41.5431552" lon="41.5599128"/>
 <node id="1306047479" visible="true" version="2" changeset="28391003" timestamp="2015-01-25T09:34:34Z" user="DrDimedrol" uid="248521" lat="41.5220132" lon="41.5512804"/>
 <node id="1306047480" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:27Z" user="Andro" uid="120556" lat="41.5323055" lon="41.5525951"/>
 <node id="1306047488" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:28Z" user="Andro" uid="120556" lat="41.5326311" lon="41.5521481"/>
 <node id="1306047489" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5448409" lon="41.5642059"/>
 <node id="1306047494" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:28Z" user="Andro" uid="120556" lat="41.5421420" lon="41.5634619"/>
 <node id="1306047501" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:28Z" user="Andro" uid="120556" lat="41.5430494" lon="41.5630493"/>
 <node id="1306047508" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:28Z" user="Andro" uid="120556" lat="41.5395018" lon="41.5553875"/>
 <node id="1306047522" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5320305" lon="41.5536066"/>
 <node id="1306047532" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5223415" lon="41.5510627"/>
 <node id="1306047536" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5358209" lon="41.5517949"/>
 <node id="1306047540" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5272449" lon="41.5495212"/>
 <node id="1306047547" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5238179" lon="41.5498026"/>
 <node id="1306047550" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5263509" lon="41.5498247"/>
 <node id="1306047552" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:29Z" user="Andro" uid="120556" lat="41.5321069" lon="41.5508236"/>
 <node id="1306047564" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5217179" lon="41.5514051"/>
 <node id="1306047565" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:30Z" user="Andro" uid="120556" lat="41.5250846" lon="41.5496295"/>
 <node id="1306047567" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5217162" lon="41.5519789"/>
 <node id="1306047573" visible="true" version="5" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5280635" lon="41.5489208"/>
 <node id="1306047585" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:31Z" user="Andro" uid="120556" lat="41.5387347" lon="41.5542175"/>
 <node id="1306047590" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227643" lon="41.5512849"/>
 <node id="1306047594" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5394612" lon="41.5531145"/>
 <node id="1306047598" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:32Z" user="Andro" uid="120556" lat="41.5433483" lon="41.5603653"/>
 <node id="1306047605" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:32Z" user="Andro" uid="120556" lat="41.5317426" lon="41.5524626"/>
 <node id="1306047647" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:33Z" user="Andro" uid="120556" lat="41.5291378" lon="41.5497474"/>
 <node id="1306047650" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:33Z" user="Andro" uid="120556" lat="41.5438947" lon="41.5648409"/>
 <node id="1306047656" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:33Z" user="Andro" uid="120556" lat="41.5328298" lon="41.5520156"/>
 <node id="1306047683" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:34Z" user="Andro" uid="120556" lat="41.5322934" lon="41.5535317"/>
 <node id="1306047689" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:34Z" user="Andro" uid="120556" lat="41.5323386" lon="41.5525012"/>
 <node id="1306047715" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:34Z" user="Andro" uid="120556" lat="41.5319303" lon="41.5520322"/>
 <node id="1306047730" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5338209" lon="41.5497670"/>
 <node id="1306047731" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:35Z" user="Andro" uid="120556" lat="41.5240717" lon="41.5496592"/>
 <node id="1306047739" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:35Z" user="Andro" uid="120556" lat="41.5260088" lon="41.5498137"/>
 <node id="1306047750" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5214536" lon="41.5496700"/>
 <node id="1306047776" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5222466" lon="41.5527517"/>
 <node id="1306047777" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5408495" lon="41.5543742"/>
 <node id="1306047787" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:35Z" user="Andro" uid="120556" lat="41.5243697" lon="41.5496978"/>
 <node id="1306047798" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5225834" lon="41.5509153"/>
 <node id="1306047825" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:36Z" user="Andro" uid="120556" lat="41.5265330" lon="41.5496812"/>
 <node id="1306047834" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5221935" lon="41.5526188"/>
 <node id="1306047836" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:37Z" user="Andro" uid="120556" lat="41.5400592" lon="41.5559559"/>
 <node id="1306047842" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:37Z" user="Andro" uid="120556" lat="41.5435470" lon="41.5605088"/>
 <node id="1306047844" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5440871" lon="41.5641383"/>
 <node id="1306047845" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:37Z" user="Andro" uid="120556" lat="41.5329475" lon="41.5515610"/>
 <node id="1306047849" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:37Z" user="Andro" uid="120556" lat="41.5321289" lon="41.5535774"/>
 <node id="1306047861" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5448921" lon="41.5636353"/>
 <node id="1306047873" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:38Z" user="Andro" uid="120556" lat="41.5420018" lon="41.5583510"/>
 <node id="1306047889" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5444745" lon="41.5638608"/>
 <node id="1306047906" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:39Z" user="Andro" uid="120556" lat="41.5430916" lon="41.5616436"/>
 <node id="1306047911" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5438183" lon="41.5599165"/>
 <node id="1306047913" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:39Z" user="Andro" uid="120556" lat="41.5340549" lon="41.5503766"/>
 <node id="1306047940" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:39Z" user="Andro" uid="120556" lat="41.5317150" lon="41.5526889"/>
 <node id="1306047944" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5218076" lon="41.5521275"/>
 <node id="1306047975" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227548" lon="41.5502322"/>
 <node id="1306047988" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:40Z" user="Andro" uid="120556" lat="41.5417369" lon="41.5583345"/>
 <node id="1306048005" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:41Z" user="Andro" uid="120556" lat="41.5317978" lon="41.5537319"/>
 <node id="1306048008" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5447044" lon="41.5636591"/>
 <node id="1306048014" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:41Z" user="Andro" uid="120556" lat="41.5428726" lon="41.5631076"/>
 <node id="1306048020" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:41Z" user="Andro" uid="120556" lat="41.5431195" lon="41.5628526"/>
 <node id="1306048029" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:41Z" user="Andro" uid="120556" lat="41.5328523" lon="41.5510265"/>
 <node id="1306048032" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5216885" lon="41.5497674"/>
 <node id="1306048050" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5217524" lon="41.5520734"/>
 <node id="1306048067" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5255394" lon="41.5489782"/>
 <node id="1306048073" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5443145" lon="41.5609845"/>
 <node id="1306048087" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:42Z" user="Andro" uid="120556" lat="41.5423715" lon="41.5586711"/>
 <node id="1306048090" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:42Z" user="Andro" uid="120556" lat="41.5273829" lon="41.5494715"/>
 <node id="1306048115" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:43Z" user="Andro" uid="120556" lat="41.5238841" lon="41.5497364"/>
 <node id="1306048117" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5348877" lon="41.5504893"/>
 <node id="1306048145" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:44Z" user="Andro" uid="120556" lat="41.5252179" lon="41.5496207"/>
 <node id="1306048159" visible="true" version="4" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5462569" lon="41.5641835"/>
 <node id="1306048161" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:44Z" user="Andro" uid="120556" lat="41.5376531" lon="41.5531304"/>
 <node id="1306048170" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:44Z" user="Andro" uid="120556" lat="41.5249437" lon="41.5495764"/>
 <node id="1306048197" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:45Z" user="Andro" uid="120556" lat="41.5255838" lon="41.5495267"/>
 <node id="1306048220" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:45Z" user="Andro" uid="120556" lat="41.5316781" lon="41.5538923"/>
 <node id="1306048252" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:45Z" user="Andro" uid="120556" lat="41.5421811" lon="41.5634146"/>
 <node id="1306048268" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216973" lon="41.5518822"/>
 <node id="1306048270" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:46Z" user="Andro" uid="120556" lat="41.5253962" lon="41.5494384"/>
 <node id="1306048283" visible="true" version="5" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5312407" lon="41.5491909"/>
 <node id="1306048288" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:46Z" user="Andro" uid="120556" lat="41.5427828" lon="41.5652437"/>
 <node id="1306048291" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:46Z" user="Andro" uid="120556" lat="41.5317150" lon="41.5529538"/>
 <node id="1306048317" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216694" lon="41.5515569"/>
 <node id="1306048322" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:46Z" user="Andro" uid="120556" lat="41.5219895" lon="41.5522714"/>
 <node id="1306048334" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:47Z" user="Andro" uid="120556" lat="41.5264558" lon="41.5497806"/>
 <node id="1306048336" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:47Z" user="Andro" uid="120556" lat="41.5421453" lon="41.5583952"/>
 <node id="1306048342" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:47Z" user="Andro" uid="120556" lat="41.5244580" lon="41.5496426"/>
 <node id="1306048344" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5404461" lon="41.5536474"/>
 <node id="1306048366" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5211258" lon="41.5496603"/>
 <node id="1306048388" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:48Z" user="Andro" uid="120556" lat="41.5297173" lon="41.5497750"/>
 <node id="1306048407" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:48Z" user="Andro" uid="120556" lat="41.5408539" lon="41.5564802"/>
 <node id="1306048409" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:48Z" user="Andro" uid="120556" lat="41.5242704" lon="41.5497364"/>
 <node id="1306048422" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:49Z" user="Andro" uid="120556" lat="41.5262516" lon="41.5498523"/>
 <node id="1306048435" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:49Z" user="Andro" uid="120556" lat="41.5431110" lon="41.5598355"/>
 <node id="1306048438" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5232951" lon="41.5502042"/>
 <node id="1306048449" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:49Z" user="Andro" uid="120556" lat="41.5314888" lon="41.5536050"/>
 <node id="1306048473" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:49Z" user="Andro" uid="120556" lat="41.5318696" lon="41.5521646"/>
 <node id="1306048488" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5340131" lon="41.5498027"/>
 <node id="1306048494" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:50Z" user="Andro" uid="120556" lat="41.5312680" lon="41.5496978"/>
 <node id="1306048529" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:51Z" user="Andro" uid="120556" lat="41.5265717" lon="41.5495377"/>
 <node id="1306048532" visible="true" version="4" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5213967" lon="41.5491127"/>
 <node id="1306048541" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5414177" lon="41.5559116"/>
 <node id="1306048630" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216801" lon="41.5514902"/>
 <node id="1306048650" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:54Z" user="Andro" uid="120556" lat="41.5427358" lon="41.5593554"/>
 <node id="1306048658" visible="true" version="2" changeset="28391003" timestamp="2015-01-25T09:34:34Z" user="DrDimedrol" uid="248521" lat="41.5224487" lon="41.5512843"/>
 <node id="1306048669" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5222785" lon="41.5503490"/>
 <node id="1306048687" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:55Z" user="Andro" uid="120556" lat="41.5344192" lon="41.5508788"/>
 <node id="1306048699" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:55Z" user="Andro" uid="120556" lat="41.5429720" lon="41.5649755"/>
 <node id="1306048706" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:55Z" user="Andro" uid="120556" lat="41.5455834" lon="41.5642228"/>
 <node id="1306048709" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5441148" lon="41.5603478"/>
 <node id="1306048725" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:56Z" user="Andro" uid="120556" lat="41.5319854" lon="41.5518335"/>
 <node id="1306048726" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:56Z" user="Andro" uid="120556" lat="41.5239393" lon="41.5496923"/>
 <node id="1306048760" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5343311" lon="41.5499927"/>
 <node id="1306048767" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5218786" lon="41.5521846"/>
 <node id="1306048770" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:57Z" user="Andro" uid="120556" lat="41.5319854" lon="41.5516845"/>
 <node id="1306048777" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:57Z" user="Andro" uid="120556" lat="41.5362569" lon="41.5524516"/>
 <node id="1306048822" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:58Z" user="Andro" uid="120556" lat="41.5322724" lon="41.5527441"/>
 <node id="1306048823" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:58Z" user="Andro" uid="120556" lat="41.5383815" lon="41.5537319"/>
 <node id="1306048824" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227912" lon="41.5509098"/>
 <node id="1306048846" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:58Z" user="Andro" uid="120556" lat="41.5241821" lon="41.5497143"/>
 <node id="1306048873" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:59Z" user="Andro" uid="120556" lat="41.5421120" lon="41.5634758"/>
 <node id="1306048883" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5265936" lon="41.5489372"/>
 <node id="1306048887" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:59Z" user="Andro" uid="120556" lat="41.5257439" lon="41.5497033"/>
 <node id="1306048892" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:59Z" user="Andro" uid="120556" lat="41.5346178" lon="41.5509836"/>
 <node id="1306048903" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5220162" lon="41.5499586"/>
 <node id="1306048905" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:59Z" user="Andro" uid="120556" lat="41.5435967" lon="41.5607516"/>
 <node id="1306048907" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:50:59Z" user="Andro" uid="120556" lat="41.5435911" lon="41.5608841"/>
 <node id="1306048911" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5221139" lon="41.5500810"/>
 <node id="1306048913" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:00Z" user="Andro" uid="120556" lat="41.5391983" lon="41.5550895"/>
 <node id="1306048923" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:00Z" user="Andro" uid="120556" lat="41.5304954" lon="41.5496757"/>
 <node id="1306048935" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5354671" lon="41.5509811"/>
 <node id="1306048947" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5229509" lon="41.5502176"/>
 <node id="1306048976" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:01Z" user="Andro" uid="120556" lat="41.5425385" lon="41.5630240"/>
 <node id="1306049024" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:02Z" user="Andro" uid="120556" lat="41.5319468" lon="41.5504152"/>
 <node id="1306049025" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227943" lon="41.5509810"/>
 <node id="1306049027" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5220508" lon="41.5523684"/>
 <node id="1306049036" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:02Z" user="Andro" uid="120556" lat="41.5350373" lon="41.5510940"/>
 <node id="1306049049" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5318894" lon="41.5493841"/>
 <node id="1306049054" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:03Z" user="Andro" uid="120556" lat="41.5452072" lon="41.5639181"/>
 <node id="1306049057" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:03Z" user="Andro" uid="120556" lat="41.5328629" lon="41.5513534"/>
 <node id="1306049063" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:03Z" user="Andro" uid="120556" lat="41.5389444" lon="41.5547142"/>
 <node id="1306049066" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:04Z" user="Andro" uid="120556" lat="41.5266876" lon="41.5494218"/>
 <node id="1306049067" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5407379" lon="41.5540907"/>
 <node id="1306049070" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:04Z" user="Andro" uid="120556" lat="41.5458593" lon="41.5642670"/>
 <node id="1306049083" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:05Z" user="Andro" uid="120556" lat="41.5318984" lon="41.5536737"/>
 <node id="1306049085" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:05Z" user="Andro" uid="120556" lat="41.5360582" lon="41.5521536"/>
 <node id="1306049092" visible="true" version="2" changeset="28391003" timestamp="2015-01-25T09:34:34Z" user="DrDimedrol" uid="248521" lat="41.5221321" lon="41.5512453"/>
 <node id="1306049097" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:05Z" user="Andro" uid="120556" lat="41.5427006" lon="41.5630098"/>
 <node id="1306049098" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5447802" lon="41.5636166"/>
 <node id="1306049109" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:06Z" user="Andro" uid="120556" lat="41.5288012" lon="41.5497916"/>
 <node id="1306049111" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:06Z" user="Andro" uid="120556" lat="41.5419511" lon="41.5651670"/>
 <node id="1306049121" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:07Z" user="Andro" uid="120556" lat="41.5319659" lon="41.5536421"/>
 <node id="1306049123" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5222903" lon="41.5528751"/>
 <node id="1306049126" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:07Z" user="Andro" uid="120556" lat="41.5424109" lon="41.5631718"/>
 <node id="1306049131" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:07Z" user="Andro" uid="120556" lat="41.5268145" lon="41.5494329"/>
 <node id="1306049132" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5423179" lon="41.5576251"/>
 <node id="1306049135" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:07Z" user="Andro" uid="120556" lat="41.5419017" lon="41.5650213"/>
 <node id="1306049140" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:08Z" user="Andro" uid="120556" lat="41.5422391" lon="41.5584227"/>
 <node id="1306049152" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5220511" lon="41.5508016"/>
 <node id="1306049166" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:09Z" user="Andro" uid="120556" lat="41.5319799" lon="41.5514582"/>
 <node id="1306049167" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5445053" lon="41.5619073"/>
 <node id="1306049169" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227414" lon="41.5513531"/>
 <node id="1306049176" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:09Z" user="Andro" uid="120556" lat="41.5386851" lon="41.5540741"/>
 <node id="1306049184" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:10Z" user="Andro" uid="120556" lat="41.5425127" lon="41.5653954"/>
 <node id="1306049187" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:10Z" user="Andro" uid="120556" lat="41.5320682" lon="41.5506635"/>
 <node id="1306049189" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:10Z" user="Andro" uid="120556" lat="41.5301919" lon="41.5496757"/>
 <node id="1306049191" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:10Z" user="Andro" uid="120556" lat="41.5425095" lon="41.5590298"/>
 <node id="1306049193" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:10Z" user="Andro" uid="120556" lat="41.5361355" lon="41.5522805"/>
 <node id="1306049199" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5236225" lon="41.5487425"/>
 <node id="1306049201" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5442416" lon="41.5606015"/>
 <node id="1306049202" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:11Z" user="Andro" uid="120556" lat="41.5366542" lon="41.5526116"/>
 <node id="1306049215" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:12Z" user="Andro" uid="120556" lat="41.5315550" lon="41.5533566"/>
 <node id="1306049218" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5345846" lon="41.5502004"/>
 <node id="1306049220" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:12Z" user="Andro" uid="120556" lat="41.5316323" lon="41.5531580"/>
 <node id="1306049221" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:12Z" user="Andro" uid="120556" lat="41.5256666" lon="41.5496205"/>
 <node id="1306049234" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:13Z" user="Andro" uid="120556" lat="41.5416100" lon="41.5582737"/>
 <node id="1306049238" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:13Z" user="Andro" uid="120556" lat="41.5246401" lon="41.5494770"/>
 <node id="1306049239" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:13Z" user="Andro" uid="120556" lat="41.5269524" lon="41.5495322"/>
 <node id="1306049241" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:13Z" user="Andro" uid="120556" lat="41.5410912" lon="41.5571866"/>
 <node id="1306049253" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:14Z" user="Andro" uid="120556" lat="41.5251843" lon="41.5496295"/>
 <node id="1306049255" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:14Z" user="Andro" uid="120556" lat="41.5252472" lon="41.5496095"/>
 <node id="1306049256" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:14Z" user="Andro" uid="120556" lat="41.5320351" lon="41.5512099"/>
 <node id="1306049258" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:14Z" user="Andro" uid="120556" lat="41.5441330" lon="41.5645922"/>
 <node id="1306049265" visible="true" version="5" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5287526" lon="41.5489707"/>
 <node id="1306049268" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:14Z" user="Andro" uid="120556" lat="41.5225658" lon="41.5513564"/>
 <node id="1306049274" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5222802" lon="41.5504722"/>
 <node id="1306049285" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:15Z" user="Andro" uid="120556" lat="41.5247395" lon="41.5494660"/>
 <node id="1306049289" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:15Z" user="Andro" uid="120556" lat="41.5419647" lon="41.5648668"/>
 <node id="1306049291" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:15Z" user="Andro" uid="120556" lat="41.5286577" lon="41.5497916"/>
 <node id="1306049299" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:15Z" user="Andro" uid="120556" lat="41.5371840" lon="41.5527717"/>
 <node id="1306049300" visible="true" version="2" changeset="8797199" timestamp="2011-07-22T12:21:45Z" user="ffathead" uid="215700" lat="41.5369487" lon="41.5518903"/>
 <node id="1306049314" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:16Z" user="Andro" uid="120556" lat="41.5352138" lon="41.5512430"/>
 <node id="1306049317" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5226728" lon="41.5506510"/>
 <node id="1306049327" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5218563" lon="41.5498566"/>
 <node id="1306049340" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:17Z" user="Andro" uid="120556" lat="41.5319854" lon="41.5519273"/>
 <node id="1306049347" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:17Z" user="Andro" uid="120556" lat="41.5324766" lon="41.5522971"/>
 <node id="1306049351" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:17Z" user="Andro" uid="120556" lat="41.5315164" lon="41.5534615"/>
 <node id="1306049356" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:17Z" user="Andro" uid="120556" lat="41.5255176" lon="41.5494494"/>
 <node id="1306049365" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5328622" lon="41.5498475"/>
 <node id="1306049366" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:18Z" user="Andro" uid="120556" lat="41.5349324" lon="41.5510498"/>
 <node id="1306049367" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5224944" lon="41.5502791"/>
 <node id="1306049368" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:18Z" user="Andro" uid="120556" lat="41.5219882" lon="41.5507170"/>
 <node id="1306049372" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:19Z" user="Andro" uid="120556" lat="41.5328298" lon="41.5512099"/>
 <node id="1306049376" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5217856" lon="41.5513318"/>
 <node id="1306049385" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:19Z" user="Andro" uid="120556" lat="41.5329071" lon="41.5514527"/>
 <node id="1306049391" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5411752" lon="41.5552980"/>
 <node id="1306049397" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:19Z" user="Andro" uid="120556" lat="41.5329131" lon="41.5519205"/>
 <node id="1306049425" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:20Z" user="Andro" uid="120556" lat="41.5422755" lon="41.5653881"/>
 <node id="1306049427" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:20Z" user="Andro" uid="120556" lat="41.5429684" lon="41.5620817"/>
 <node id="1306049433" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:20Z" user="Andro" uid="120556" lat="41.5226873" lon="41.5513845"/>
 <node id="1306049440" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5226236" lon="41.5507002"/>
 <node id="1306049472" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:21Z" user="Andro" uid="120556" lat="41.5275871" lon="41.5493943"/>
 <node id="1306049497" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5224052" lon="41.5533696"/>
 <node id="1306049498" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5447596" lon="41.5640013"/>
 <node id="1306049501" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:22Z" user="Andro" uid="120556" lat="41.5403572" lon="41.5561491"/>
 <node id="1306049514" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:23Z" user="Andro" uid="120556" lat="41.5426718" lon="41.5642588"/>
 <node id="1306049518" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:23Z" user="Andro" uid="120556" lat="41.5435911" lon="41.5606192"/>
 <node id="1306049520" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5433135" lon="41.5593653"/>
 <node id="1306049524" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:23Z" user="Andro" uid="120556" lat="41.5322559" lon="41.5528600"/>
 <node id="1306049530" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:23Z" user="Andro" uid="120556" lat="41.5329126" lon="41.5508015"/>
 <node id="1306049535" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:23Z" user="Andro" uid="120556" lat="41.5328702" lon="41.5509208"/>
 <node id="1306049586" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:25Z" user="Andro" uid="120556" lat="41.5318199" lon="41.5501117"/>
 <node id="1306049587" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:25Z" user="Andro" uid="120556" lat="41.5329659" lon="41.5516549"/>
 <node id="1306049611" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5444277" lon="41.5641188"/>
 <node id="1306049629" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5225484" lon="41.5510195"/>
 <node id="1306049634" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:27Z" user="Andro" uid="120556" lat="41.5309811" lon="41.5497088"/>
 <node id="1306049646" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5244424" lon="41.5488806"/>
 <node id="1306049648" visible="true" version="3" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5443963" lon="41.5613649"/>
 <node id="1306049680" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5351571" lon="41.5507116"/>
 <node id="1306049688" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:28Z" user="Andro" uid="120556" lat="41.5435856" lon="41.5605529"/>
 <node id="1306049693" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:29Z" user="Andro" uid="120556" lat="41.5431615" lon="41.5615078"/>
 <node id="1306049729" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5224100" lon="41.5510731"/>
 <node id="1306049731" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:30Z" user="Andro" uid="120556" lat="41.5460083" lon="41.5642670"/>
 <node id="1306049742" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:30Z" user="Andro" uid="120556" lat="41.5268973" lon="41.5495046"/>
 <node id="1306049743" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:31Z" user="Andro" uid="120556" lat="41.5274767" lon="41.5494329"/>
 <node id="1306049764" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:31Z" user="Andro" uid="120556" lat="41.5245629" lon="41.5495433"/>
 <node id="1306049777" visible="true" version="5" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5315896" lon="41.5492577"/>
 <node id="1306049790" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:32Z" user="Andro" uid="120556" lat="41.5334810" lon="41.5504042"/>
 <node id="1306049813" visible="true" version="2" changeset="8797199" timestamp="2011-07-22T12:21:45Z" user="ffathead" uid="215700" lat="41.5385657" lon="41.5526859"/>
 <node id="1306049828" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:33Z" user="Andro" uid="120556" lat="41.5432216" lon="41.5614249"/>
 <node id="1306049834" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:33Z" user="Andro" uid="120556" lat="41.5248278" lon="41.5495212"/>
 <node id="1306049850" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5224127" lon="41.5534878"/>
 <node id="1306049862" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5211076" lon="41.5497511"/>
 <node id="1306049865" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:34Z" user="Andro" uid="120556" lat="41.5320903" lon="41.5509505"/>
 <node id="1306049867" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:34Z" user="Andro" uid="120556" lat="41.5330892" lon="41.5505863"/>
 <node id="1306049869" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:34Z" user="Andro" uid="120556" lat="41.5332768" lon="41.5505035"/>
 <node id="1306049870" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:34Z" user="Andro" uid="120556" lat="41.5422569" lon="41.5644279"/>
 <node id="1306049891" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:35Z" user="Andro" uid="120556" lat="41.5445644" lon="41.5645924"/>
 <node id="1306049896" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:35Z" user="Andro" uid="120556" lat="41.5436077" lon="41.5649072"/>
 <node id="1306049897" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:35Z" user="Andro" uid="120556" lat="41.5343419" lon="41.5508236"/>
 <node id="1306049898" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:35Z" user="Andro" uid="120556" lat="41.5292758" lon="41.5497530"/>
 <node id="1306049907" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5335711" lon="41.5497268"/>
 <node id="1306049919" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:36Z" user="Andro" uid="120556" lat="41.5283983" lon="41.5496702"/>
 <node id="1306049923" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:36Z" user="Andro" uid="120556" lat="41.5338563" lon="41.5502496"/>
 <node id="1306049929" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:36Z" user="Andro" uid="120556" lat="41.5325483" lon="41.5522088"/>
 <node id="1306049941" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5418443" lon="41.5567339"/>
 <node id="1306049956" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:37Z" user="Andro" uid="120556" lat="41.5317095" lon="41.5525951"/>
 <node id="1306049964" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:21Z" user="orca_horka" uid="8525896" lat="41.5224164" lon="41.5534409"/>
 <node id="1306049966" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:37Z" user="Andro" uid="120556" lat="41.5258763" lon="41.5497750"/>
 <node id="1306049967" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:37Z" user="Andro" uid="120556" lat="41.5429833" lon="41.5630863"/>
 <node id="1306049983" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:37Z" user="Andro" uid="120556" lat="41.5323383" lon="41.5534889"/>
 <node id="1306049995" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:38Z" user="Andro" uid="120556" lat="41.5295517" lon="41.5497750"/>
 <node id="1306049996" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:38Z" user="Andro" uid="120556" lat="41.5425857" lon="41.5643426"/>
 <node id="1306050000" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5221185" lon="41.5525032"/>
 <node id="1306050013" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:38Z" user="Andro" uid="120556" lat="41.5317261" lon="41.5528158"/>
 <node id="1306050038" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227211" lon="41.5506458"/>
 <node id="1306050040" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5235891" lon="41.5502557"/>
 <node id="1306050046" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5226394" lon="41.5502489"/>
 <node id="1306050068" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5436749" lon="41.5597538"/>
 <node id="1306050071" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5221205" lon="41.5508726"/>
 <node id="1306050085" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:40Z" user="Andro" uid="120556" lat="41.5420901" lon="41.5635385"/>
 <node id="1306050120" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:41Z" user="Andro" uid="120556" lat="41.5419051" lon="41.5651093"/>
 <node id="1306050130" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:41Z" user="Andro" uid="120556" lat="41.5299380" lon="41.5497254"/>
 <node id="1306050182" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:42Z" user="Andro" uid="120556" lat="41.5323993" lon="41.5523964"/>
 <node id="1306050202" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:42Z" user="Andro" uid="120556" lat="41.5281721" lon="41.5495377"/>
 <node id="1306050229" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:43Z" user="Andro" uid="120556" lat="41.5253465" lon="41.5494936"/>
 <node id="1306050243" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:43Z" user="Andro" uid="120556" lat="41.5339556" lon="41.5502993"/>
 <node id="1306050245" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5223730" lon="41.5503377"/>
 <node id="1306050249" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:43Z" user="Andro" uid="120556" lat="41.5322614" lon="41.5530255"/>
 <node id="1306050255" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5250197" lon="41.5489570"/>
 <node id="1306050270" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:44Z" user="Andro" uid="120556" lat="41.5420182" lon="41.5653649"/>
 <node id="1306050293" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:44Z" user="Andro" uid="120556" lat="41.5342371" lon="41.5506470"/>
 <node id="1306050320" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5361260" lon="41.5514219"/>
 <node id="1306050327" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:45Z" user="Andro" uid="120556" lat="41.5406442" lon="41.5562815"/>
 <node id="1306050364" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216635" lon="41.5516750"/>
 <node id="1306050382" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227771" lon="41.5507555"/>
 <node id="1306050399" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:47Z" user="Andro" uid="120556" lat="41.5270628" lon="41.5495488"/>
 <node id="1306050402" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:47Z" user="Andro" uid="120556" lat="41.5433980" lon="41.5604371"/>
 <node id="1306050431" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:47Z" user="Andro" uid="120556" lat="41.5368418" lon="41.5526337"/>
 <node id="1306050450" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:48Z" user="Andro" uid="120556" lat="41.5369964" lon="41.5526613"/>
 <node id="1306050452" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:48Z" user="Andro" uid="120556" lat="41.5365383" lon="41.5526006"/>
 <node id="1306050458" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:48Z" user="Andro" uid="120556" lat="41.5316930" lon="41.5498523"/>
 <node id="1306050461" visible="true" version="2" changeset="28391003" timestamp="2015-01-25T09:34:34Z" user="DrDimedrol" uid="248521" lat="41.5223500" lon="41.5512627"/>
 <node id="1306050485" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5324990" lon="41.5497322"/>
 <node id="1306050486" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:48Z" user="Andro" uid="120556" lat="41.5323468" lon="41.5534357"/>
 <node id="1306050506" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:49Z" user="Andro" uid="120556" lat="41.5444735" lon="41.5646478"/>
 <node id="1306050523" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5218997" lon="41.5506113"/>
 <node id="1306050524" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:49Z" user="Andro" uid="120556" lat="41.5323000" lon="41.5531911"/>
 <node id="1306050528" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:49Z" user="Andro" uid="120556" lat="41.5388120" lon="41.5544328"/>
 <node id="1306050544" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5400408" lon="41.5533923"/>
 <node id="1306050577" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:50Z" user="Andro" uid="120556" lat="41.5446381" lon="41.5644823"/>
 <node id="1306050593" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:51Z" user="Andro" uid="120556" lat="41.5279458" lon="41.5494274"/>
 <node id="1306050601" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:51Z" user="Andro" uid="120556" lat="41.5315881" lon="41.5538036"/>
 <node id="1306050604" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227879" lon="41.5510772"/>
 <node id="1306050607" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:51Z" user="Andro" uid="120556" lat="41.5427200" lon="41.5640484"/>
 <node id="1306050622" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:51Z" user="Andro" uid="120556" lat="41.5239945" lon="41.5496592"/>
 <node id="1306050633" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:51Z" user="Andro" uid="120556" lat="41.5315053" lon="41.5496978"/>
 <node id="1306050644" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:52Z" user="Andro" uid="120556" lat="41.5422832" lon="41.5584724"/>
 <node id="1306050645" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:52Z" user="Andro" uid="120556" lat="41.5426674" lon="41.5639534"/>
 <node id="1306050648" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:22Z" user="orca_horka" uid="8525896" lat="41.5213715" lon="41.5497070"/>
 <node id="1306050652" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:52Z" user="Andro" uid="120556" lat="41.5430338" lon="41.5597141"/>
 <node id="1306050712" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:53Z" user="Andro" uid="120556" lat="41.5430889" lon="41.5629656"/>
 <node id="1306050719" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5227602" lon="41.5506906"/>
 <node id="1306050748" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5431372" lon="41.5590686"/>
 <node id="1306050749" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:54Z" user="Andro" uid="120556" lat="41.5289778" lon="41.5497695"/>
 <node id="1306050750" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:54Z" user="Andro" uid="120556" lat="41.5407325" lon="41.5563367"/>
 <node id="1306050752" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5223133" lon="41.5504022"/>
 <node id="1306050756" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:54Z" user="Andro" uid="120556" lat="41.5430833" lon="41.5626697"/>
 <node id="1306050786" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:55Z" user="Andro" uid="120556" lat="41.5442797" lon="41.5645814"/>
 <node id="1306050788" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5237431" lon="41.5501163"/>
 <node id="1306050801" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:56Z" user="Andro" uid="120556" lat="41.5328408" lon="41.5512816"/>
 <node id="1306050817" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:56Z" user="Andro" uid="120556" lat="41.5359865" lon="41.5520156"/>
 <node id="1306050824" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:56Z" user="Andro" uid="120556" lat="41.5435691" lon="41.5609889"/>
 <node id="1306050837" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:22Z" user="orca_horka" uid="8525896" lat="41.5223522" lon="41.5530768"/>
 <node id="1306050839" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:57Z" user="Andro" uid="120556" lat="41.5422870" lon="41.5633152"/>
 <node id="1306050840" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:22Z" user="orca_horka" uid="8525896" lat="41.5215310" lon="41.5496837"/>
 <node id="1306050847" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:57Z" user="Andro" uid="120556" lat="41.5431458" lon="41.5649566"/>
 <node id="1306050856" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5236658" lon="41.5502039"/>
 <node id="1306050867" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5441044" lon="41.5640382"/>
 <node id="1306050891" visible="true" version="3" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5240643" lon="41.5488317"/>
 <node id="1306050893" visible="true" version="2" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5440079" lon="41.5601742"/>
 <node id="1306050899" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:58Z" user="Andro" uid="120556" lat="41.5427986" lon="41.5630760"/>
 <node id="1306050901" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:59Z" user="Andro" uid="120556" lat="41.5319965" lon="41.5513423"/>
 <node id="1306050905" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:59Z" user="Andro" uid="120556" lat="41.5424680" lon="41.5630992"/>
 <node id="1306050919" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:59Z" user="Andro" uid="120556" lat="41.5432214" lon="41.5600342"/>
 <node id="1306050932" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5341661" lon="41.5498697"/>
 <node id="1306050934" visible="true" version="2" changeset="61412742" timestamp="2018-08-06T18:54:04Z" user="hnarko" uid="8652515" lat="41.5446673" lon="41.5640233"/>
 <node id="1306050936" visible="true" version="1" changeset="8295000" timestamp="2011-05-30T18:51:59Z" user="Andro" uid="120556" lat="41.5271677" lon="41.5495488"/>
 <node id="1306074006" visible="true" version="1" changeset="8295291" timestamp="2011-05-30T19:16:10Z" user="Andro" uid="120556" lat="41.5220688" lon="41.5493360">
  <tag k="amenity" v="toilets"/>
 </node>
 <node id="1306914804" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:14Z" user="PhQ" uid="141978" lat="41.5176317" lon="41.5503695"/>
 <node id="1306915020" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:18Z" user="PhQ" uid="141978" lat="41.5183345" lon="41.5505886"/>
 <node id="1306915208" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5177615" lon="41.5481722"/>
 <node id="1306915430" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:25Z" user="PhQ" uid="141978" lat="41.5179598" lon="41.5515862"/>
 <node id="1306915580" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5183419" lon="41.5486277"/>
 <node id="1306915798" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:30Z" user="PhQ" uid="141978" lat="41.5176806" lon="41.5509582"/>
 <node id="1306915980" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5184154" lon="41.5498096"/>
 <node id="1306916113" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:36Z" user="PhQ" uid="141978" lat="41.5174308" lon="41.5503074"/>
 <node id="1306916134" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:37Z" user="PhQ" uid="141978" lat="41.5173696" lon="41.5478870"/>
 <node id="1306916302" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:40Z" user="PhQ" uid="141978" lat="41.5182317" lon="41.5511741"/>
 <node id="1306916493" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:43Z" user="PhQ" uid="141978" lat="41.5180504" lon="41.5482664"/>
 <node id="1306916773" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:48Z" user="PhQ" uid="141978" lat="41.5177541" lon="41.5513736"/>
 <node id="1306916940" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5185769" lon="41.5488364"/>
 <node id="1306917033" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:13:53Z" user="PhQ" uid="141978" lat="41.5176586" lon="41.5505952"/>
 <node id="1306917209" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5183393" lon="41.5502363"/>
 <node id="1306917333" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5176464" lon="41.5481083"/>
 <node id="1306917556" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:02Z" user="PhQ" uid="141978" lat="41.5180553" lon="41.5515306"/>
 <node id="1306917697" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5181784" lon="41.5485790"/>
 <node id="1306918055" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5185029" lon="41.5496656"/>
 <node id="1306918142" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:13Z" user="PhQ" uid="141978" lat="41.5175533" lon="41.5502975"/>
 <node id="1306918325" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:19Z" user="PhQ" uid="141978" lat="41.5183247" lon="41.5508274"/>
 <node id="1306918417" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5178620" lon="41.5482055"/>
 <node id="1306918542" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:24Z" user="PhQ" uid="141978" lat="41.5178594" lon="41.5515241"/>
 <node id="1306918631" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:26Z" user="PhQ" uid="141978" lat="41.5184325" lon="41.5486229"/>
 <node id="1306918653" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5185262" lon="41.5486428"/>
 <node id="1306918731" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:29Z" user="PhQ" uid="141978" lat="41.5176635" lon="41.5507980"/>
 <node id="1306918845" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5183582" lon="41.5500195"/>
 <node id="1306918944" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5174360" lon="41.5480006"/>
 <node id="1306919058" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:37Z" user="PhQ" uid="141978" lat="41.5181925" lon="41.5513736"/>
 <node id="1306919154" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5181469" lon="41.5484889"/>
 <node id="1306919272" visible="true" version="1" changeset="8302914" timestamp="2011-05-31T16:14:42Z" user="PhQ" uid="141978" lat="41.5176929" lon="41.5511839"/>
 <node id="1306919381" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5185712" lon="41.5491765"/>
 <node id="1308962027" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5272969" lon="41.5489281"/>
 <node id="1308962028" visible="true" version="4" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5302855" lon="41.5491190"/>
 <node id="1369932268" visible="true" version="3" changeset="61749711" timestamp="2018-08-17T15:17:41Z" user="orca_horka" uid="8525896" lat="41.5321740" lon="41.5495603"/>
 <node id="1430133012" visible="true" version="2" changeset="39492933" timestamp="2016-05-22T18:24:07Z" user="Maturi0n" uid="2052948" lat="41.5214238" lon="41.5494589">
  <tag k="name" v="ელზა"/>
  <tag k="name:en" v="Elza"/>
  <tag k="name:ka" v="ელზა"/>
  <tag k="name:ru" v="Эльза"/>
  <tag k="shop" v="convenience"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133061" visible="true" version="3" changeset="39492933" timestamp="2016-05-22T18:24:08Z" user="Maturi0n" uid="2052948" lat="41.5220945" lon="41.5493306">
  <tag k="amenity" v="school"/>
  <tag k="name" v="განათლებისა და მეცნიერების სამინისტრო"/>
  <tag k="name:en" v="Ministry of Education and Science"/>
  <tag k="name:ka" v="განათლებისა და მეცნიერების სამინისტრო"/>
  <tag k="name:ru" v="Министерство образования и науки"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133074" visible="true" version="1" changeset="9271318" timestamp="2011-09-11T13:49:47Z" user="Andro" uid="120556" lat="41.5220989" lon="41.5495289">
  <tag k="amenity" v="public_building"/>
  <tag k="name" v="სარფის ჯანმრთელობის ცენტრი (Sarpi Health Center)"/>
  <tag k="name:en" v="Sarpi Health Center"/>
  <tag k="name:ka" v="სარფის ჯანმრთელობის ცენტრი"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133077" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5215192" lon="41.5493432">
  <tag k="name" v="ზერო (Zero)"/>
  <tag k="name:en" v="Zero"/>
  <tag k="name:ka" v="ზერო"/>
  <tag k="shop" v="convenience"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133092" visible="true" version="1" changeset="9271318" timestamp="2011-09-11T13:49:48Z" user="Andro" uid="120556" lat="41.5232296" lon="41.5487073">
  <tag k="shop" v="convenience"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133096" visible="true" version="1" changeset="9271318" timestamp="2011-09-11T13:49:48Z" user="Andro" uid="120556" lat="41.5232304" lon="41.5487074">
  <tag k="amenity" v="cafe"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133098" visible="true" version="1" changeset="9271318" timestamp="2011-09-11T13:49:48Z" user="Andro" uid="120556" lat="41.5233916" lon="41.5487301">
  <tag k="amenity" v="atm"/>
  <tag k="operator" v="ProCredit Bank"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133110" visible="true" version="4" changeset="64563929" timestamp="2018-11-16T12:00:11Z" user="Qotola" uid="8746535" lat="41.5262617" lon="41.5489669">
  <tag k="amenity" v="restaurant"/>
  <tag k="cuisine" v="turkish"/>
  <tag k="name" v="რუსთაველი"/>
  <tag k="name:en" v="Rustaveli"/>
  <tag k="name:ka" v="რუსთაველი"/>
  <tag k="name:ru" v="Руставели"/>
  <tag k="source" v="JumpStart International"/>
 </node>
 <node id="1430133113" visible="true" version="2" changeset="37352588" timestamp="2016-02-21T19:05:12Z" user="iWowik" uid="481934" lat="41.5262823" lon="41.5489669">
  <tag k="is_in:country" v="Georgia"/>
  <tag k="is_in:country:ka" v="საქართველო"/>
  <tag k="is_in:district:ka" v="ხელვაჩაური"/>
  <tag k="is_in:region:ka" v="აჭარა"/>
  <tag k="source" v="JumpStart International"/>
  <tag k="tourism" v="hotel"/>
 </node>
 <node id="1581246947" visible="true" version="6" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5212166" lon="41.5482698">
  <tag k="seamark:light:1:category" v="lower"/>
  <tag k="seamark:light:1:character" v="Q"/>
  <tag k="seamark:light:1:colour" v="white"/>
  <tag k="seamark:light:1:height" v="34"/>
  <tag k="seamark:light:1:range" v="14"/>
  <tag k="seamark:light:1:sector_end" v="95"/>
  <tag k="seamark:light:1:sector_start" v="27"/>
  <tag k="seamark:light:2:category" v="lower"/>
  <tag k="seamark:light:2:character" v="Q"/>
  <tag k="seamark:light:2:colour" v="red"/>
  <tag k="seamark:light:2:height" v="34"/>
  <tag k="seamark:light:2:range" v="12"/>
  <tag k="seamark:light:2:sector_end" v="105"/>
  <tag k="seamark:light:2:sector_start" v="95"/>
  <tag k="seamark:light:3:category" v="lower"/>
  <tag k="seamark:light:3:character" v="Q"/>
  <tag k="seamark:light:3:colour" v="white"/>
  <tag k="seamark:light:3:height" v="34"/>
  <tag k="seamark:light:3:range" v="14"/>
  <tag k="seamark:light:3:sector_end" v="115"/>
  <tag k="seamark:light:3:sector_start" v="105"/>
  <tag k="seamark:light:4:category" v="lower"/>
  <tag k="seamark:light:4:character" v="Q"/>
  <tag k="seamark:light:4:colour" v="green"/>
  <tag k="seamark:light:4:height" v="34"/>
  <tag k="seamark:light:4:range" v="12"/>
  <tag k="seamark:light:4:sector_end" v="125"/>
  <tag k="seamark:light:4:sector_start" v="115"/>
  <tag k="seamark:light:5:category" v="lower"/>
  <tag k="seamark:light:5:character" v="Q"/>
  <tag k="seamark:light:5:colour" v="white"/>
  <tag k="seamark:light:5:height" v="34"/>
  <tag k="seamark:light:5:range" v="14"/>
  <tag k="seamark:light:5:sector_end" v="190"/>
  <tag k="seamark:light:5:sector_start" v="125"/>
  <tag k="seamark:light:reference" v="E 5779"/>
  <tag k="seamark:type" v="light_minor"/>
  <tag k="source" v="US NGA Pub. 113. 2011-10-20."/>
 </node>
 <node id="1696764217" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:37Z" user="aighes" uid="110639" lat="41.4816916" lon="41.5202637"/>
 <node id="1696764218" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:37Z" user="aighes" uid="110639" lat="41.4817083" lon="41.5201256"/>
 <node id="1696764227" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:37Z" user="aighes" uid="110639" lat="41.4817950" lon="41.5200137"/>
 <node id="1696764229" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4819948" lon="41.5213200"/>
 <node id="1696764245" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:37Z" user="aighes" uid="110639" lat="41.4819851" lon="41.5200062"/>
 <node id="1696764247" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4820702" lon="41.5215213"/>
 <node id="1696764250" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4821819" lon="41.5216955"/>
 <node id="1696764257" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4824709" lon="41.5219677"/>
 <node id="1696764260" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4825488" lon="41.5219101"/>
 <node id="1696764269" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:38Z" user="aighes" uid="110639" lat="41.4827316" lon="41.5203794"/>
 <node id="1696764271" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:38Z" user="aighes" uid="110639" lat="41.4827931" lon="41.5203085"/>
 <node id="1696764280" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4828741" lon="41.5213992"/>
 <node id="1696764294" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:39Z" user="aighes" uid="110639" lat="41.4830000" lon="41.5206966"/>
 <node id="1696764296" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4829962" lon="41.5214440"/>
 <node id="1696764298" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4830275" lon="41.5215370"/>
 <node id="1696764305" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4830107" lon="41.5217884"/>
 <node id="1696764316" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:39Z" user="aighes" uid="110639" lat="41.4832265" lon="41.5210027"/>
 <node id="1696764352" visible="true" version="3" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4834216" lon="41.5225886"/>
 <node id="1696764360" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:40Z" user="aighes" uid="110639" lat="41.4836682" lon="41.5212751"/>
 <node id="1696764387" visible="true" version="3" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4841524" lon="41.5226083"/>
 <node id="1696764390" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:40Z" user="aighes" uid="110639" lat="41.4838695" lon="41.5215737"/>
 <node id="1696764416" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:41Z" user="aighes" uid="110639" lat="41.4840289" lon="41.5215363"/>
 <node id="1696764427" visible="true" version="2" changeset="13545464" timestamp="2012-10-18T14:45:45Z" user="katpatuka" uid="17497" lat="41.4841104" lon="41.5212245"/>
 <node id="1696764436" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4850614" lon="41.5236389"/>
 <node id="1696764440" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4851650" lon="41.5236210"/>
 <node id="1696764441" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4852641" lon="41.5235749"/>
 <node id="1696764464" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4853264" lon="41.5234999"/>
 <node id="1696764474" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4854085" lon="41.5234823"/>
 <node id="1696764477" visible="true" version="2" changeset="51451688" timestamp="2017-08-26T07:08:44Z" user="penom" uid="436145" lat="41.4854984" lon="41.5236085"/>
 <node id="1696764590" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:44Z" user="aighes" uid="110639" lat="41.4981713" lon="41.5309074"/>
 <node id="1696764597" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:44Z" user="aighes" uid="110639" lat="41.4982775" lon="41.5307507"/>
 <node id="1696764611" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.4985794" lon="41.5307768"/>
 <node id="1696764613" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.4986884" lon="41.5308365"/>
 <node id="1696764617" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.4987890" lon="41.5310455"/>
 <node id="1696764619" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.4988785" lon="41.5311201"/>
 <node id="1696764624" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.4998288" lon="41.5315978"/>
 <node id="1696764633" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.5006869" lon="41.5319001"/>
 <node id="1696764637" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:45Z" user="aighes" uid="110639" lat="41.5017155" lon="41.5325122"/>
 <node id="1696764650" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5034065" lon="41.5336430"/>
 <node id="1696764655" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5044518" lon="41.5341543"/>
 <node id="1696764669" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5059554" lon="41.5347178"/>
 <node id="1696764675" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5067464" lon="41.5352440"/>
 <node id="1696764677" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5076407" lon="41.5360389"/>
 <node id="1696764687" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:46Z" user="aighes" uid="110639" lat="41.5078699" lon="41.5363076"/>
 <node id="1696764693" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5082053" lon="41.5364308"/>
 <node id="1696764710" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5093343" lon="41.5370503"/>
 <node id="1696764711" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5093595" lon="41.5369570"/>
 <node id="1696764712" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5094293" lon="41.5369607"/>
 <node id="1696764714" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5095076" lon="41.5368413"/>
 <node id="1696764727" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:47Z" user="aighes" uid="110639" lat="41.5095439" lon="41.5371511"/>
 <node id="1696764733" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5096026" lon="41.5368674"/>
 <node id="1696764735" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5096390" lon="41.5370055"/>
 <node id="1696764737" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5096641" lon="41.5371884"/>
 <node id="1696764743" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5097787" lon="41.5373377"/>
 <node id="1696764752" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5098318" lon="41.5371137"/>
 <node id="1696764756" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5098905" lon="41.5376549"/>
 <node id="1696764762" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5110363" lon="41.5392186"/>
 <node id="1696764764" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:48Z" user="aighes" uid="110639" lat="41.5114164" lon="41.5399053"/>
 <node id="1696764783" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5115701" lon="41.5415922"/>
 <node id="1696764794" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5116511" lon="41.5411592"/>
 <node id="1696764795" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5116595" lon="41.5413570"/>
 <node id="1696764797" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5117545" lon="41.5422117"/>
 <node id="1696764799" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5118719" lon="41.5423796"/>
 <node id="1696764803" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5122408" lon="41.5426856"/>
 <node id="1696764807" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5125007" lon="41.5428125"/>
 <node id="1696764830" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5147223" lon="41.5437269"/>
 <node id="1696764834" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5157087" lon="41.5440441"/>
 <node id="1696764838" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:49Z" user="aighes" uid="110639" lat="41.5162145" lon="41.5442643"/>
 <node id="1696764843" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:50Z" user="aighes" uid="110639" lat="41.5163040" lon="41.5442829"/>
 <node id="1696764846" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5164080" lon="41.5442347"/>
 <node id="1696764849" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5164644" lon="41.5441682"/>
 <node id="1696764857" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5165820" lon="41.5439222"/>
 <node id="1696764861" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5167163" lon="41.5439502"/>
 <node id="1696764878" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5171145" lon="41.5441368"/>
 <node id="1696764884" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5172787" lon="41.5442992"/>
 <node id="1696764887" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5173983" lon="41.5444411"/>
 <node id="1696764889" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5175059" lon="41.5445821"/>
 <node id="1696764896" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5180263" lon="41.5453890"/>
 <node id="1696764902" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5180332" lon="41.5456842"/>
 <node id="1696764930" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5182789" lon="41.5460796"/>
 <node id="1696764932" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5184525" lon="41.5462425"/>
 <node id="1696764934" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:51Z" user="aighes" uid="110639" lat="41.5190731" lon="41.5465819"/>
 <node id="1696764938" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:51Z" user="aighes" uid="110639" lat="41.5201294" lon="41.5469252"/>
 <node id="1696764940" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:51Z" user="aighes" uid="110639" lat="41.5228786" lon="41.5477626"/>
 <node id="1696764943" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:51Z" user="aighes" uid="110639" lat="41.5242379" lon="41.5481637"/>
 <node id="1696764952" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:51Z" user="aighes" uid="110639" lat="41.5253838" lon="41.5483748"/>
 <node id="1696764955" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5260318" lon="41.5485068"/>
 <node id="1696764956" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5264033" lon="41.5484962"/>
 <node id="1696764959" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5265376" lon="41.5484593"/>
 <node id="1696764961" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5266561" lon="41.5481532"/>
 <node id="1696764963" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5266838" lon="41.5484382"/>
 <node id="1696764965" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5267115" lon="41.5480476"/>
 <node id="1696764967" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5267194" lon="41.5482957"/>
 <node id="1696764969" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5268577" lon="41.5480265"/>
 <node id="1696764971" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5269367" lon="41.5482904"/>
 <node id="1696764976" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5270078" lon="41.5481479"/>
 <node id="1696764988" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5271303" lon="41.5483907"/>
 <node id="1696764991" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5276044" lon="41.5483907"/>
 <node id="1696764994" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5280786" lon="41.5483115"/>
 <node id="1696764996" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5286120" lon="41.5483484"/>
 <node id="1696764999" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:52Z" user="aighes" uid="110639" lat="41.5289755" lon="41.5484540"/>
 <node id="1696765003" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5293508" lon="41.5485648"/>
 <node id="1696765006" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5296946" lon="41.5485543"/>
 <node id="1696765007" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5303939" lon="41.5485754"/>
 <node id="1696765011" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5310498" lon="41.5485965"/>
 <node id="1696765012" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5313382" lon="41.5485912"/>
 <node id="1696765013" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5316385" lon="41.5486282"/>
 <node id="1696765014" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5319151" lon="41.5486334"/>
 <node id="1696765015" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5321205" lon="41.5487971"/>
 <node id="1696765016" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5322825" lon="41.5490346"/>
 <node id="1696765017" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5324761" lon="41.5491771"/>
 <node id="1696765019" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5326144" lon="41.5491823"/>
 <node id="1696765021" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5327645" lon="41.5491876"/>
 <node id="1696765023" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5329462" lon="41.5491771"/>
 <node id="1696765026" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:53Z" user="aighes" uid="110639" lat="41.5331319" lon="41.5492087"/>
 <node id="1696765044" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5333255" lon="41.5491507"/>
 <node id="1696765045" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5336139" lon="41.5491032"/>
 <node id="1696765047" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5340209" lon="41.5491612"/>
 <node id="1696765049" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5344120" lon="41.5492721"/>
 <node id="1696765051" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5347162" lon="41.5494304"/>
 <node id="1696765053" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5350757" lon="41.5498843"/>
 <node id="1696765054" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5354945" lon="41.5502379"/>
 <node id="1696765056" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5362688" lon="41.5507446"/>
 <node id="1696765057" visible="true" version="1" changeset="11144484" timestamp="2012-03-29T20:49:54Z" user="aighes" uid="110639" lat="41.5368970" lon="41.5512724"/>
 <node id="1802526053" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5217412" lon="41.5480730"/>
 <node id="1802526054" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5205358" lon="41.5476607"/>
 <node id="1802526085" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:00Z" user="moszkva ter" uid="495146" lat="41.5267723" lon="41.5485441"/>
 <node id="1802526087" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:00Z" user="moszkva ter" uid="495146" lat="41.5259209" lon="41.5487479"/>
 <node id="1802526089" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:00Z" user="moszkva ter" uid="495146" lat="41.5268365" lon="41.5483402"/>
 <node id="1802526090" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:00Z" user="moszkva ter" uid="495146" lat="41.5267883" lon="41.5484797"/>
 <node id="1802526111" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:00Z" user="moszkva ter" uid="495146" lat="41.5252863" lon="41.5487586"/>
 <node id="1802526121" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:01Z" user="moszkva ter" uid="495146" lat="41.5270132" lon="41.5484582"/>
 <node id="1802526122" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5212483" lon="41.5478791"/>
 <node id="1802526139" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5206904" lon="41.5477090"/>
 <node id="1802526147" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:02Z" user="moszkva ter" uid="495146" lat="41.5264177" lon="41.5486862"/>
 <node id="1802526149" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5219323" lon="41.5482353"/>
 <node id="1802526152" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:02Z" user="moszkva ter" uid="495146" lat="41.5245317" lon="41.5487479"/>
 <node id="1802526180" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:02Z" user="moszkva ter" uid="495146" lat="41.5240337" lon="41.5486513"/>
 <node id="1802526194" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:03Z" user="moszkva ter" uid="495146" lat="41.5268755" lon="41.5484180"/>
 <node id="1802526212" visible="true" version="1" changeset="12020398" timestamp="2012-06-26T09:32:03Z" user="moszkva ter" uid="495146" lat="41.5232851" lon="41.5485146"/>
 <node id="1844021587" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5291257" lon="41.5487049"/>
 <node id="1844021591" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5282422" lon="41.5485332"/>
 <node id="1844021593" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5176463" lon="41.5478311"/>
 <node id="1844021595" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5205116" lon="41.5476972"/>
 <node id="1844021597" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5181483" lon="41.5479270"/>
 <node id="1844021601" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5388194" lon="41.5525136"/>
 <node id="1844021603" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5202572" lon="41.5483876"/>
 <node id="1844021604" visible="true" version="3" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5176651" lon="41.5459648"/>
 <node id="1844021609" visible="true" version="4" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5176018" lon="41.5457251"/>
 <node id="1844021610" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5182903" lon="41.5466181"/>
 <node id="1844021613" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5344265" lon="41.5497241"/>
 <node id="1844021615" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5334547" lon="41.5494237"/>
 <node id="1844021617" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5298325" lon="41.5488122"/>
 <node id="1844021618" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5413650" lon="41.5552817"/>
 <node id="1844021620" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5416461" lon="41.5559254"/>
 <node id="1844021622" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5325231" lon="41.5493701"/>
 <node id="1844021624" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:29Z" user="moszkva ter" uid="495146" lat="41.5328363" lon="41.5495310"/>
 <node id="1844021627" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5330692" lon="41.5495203"/>
 <node id="1844021629" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5421921" lon="41.5566979"/>
 <node id="1844021631" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5431236" lon="41.5582750"/>
 <node id="1844021634" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5390121" lon="41.5525136"/>
 <node id="1844021636" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5196378" lon="41.5471412"/>
 <node id="1844021639" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5405700" lon="41.5534149"/>
 <node id="1844021641" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5200496" lon="41.5482476"/>
 <node id="1844021643" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5401846" lon="41.5530393"/>
 <node id="1844021651" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5410037" lon="41.5543268"/>
 <node id="1844021653" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5171419" lon="41.5472648"/>
 <node id="1844021654" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5192804" lon="41.5481997"/>
 <node id="1844021656" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5445771" lon="41.5616439"/>
 <node id="1844021658" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5337358" lon="41.5494774"/>
 <node id="1844021660" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5442719" lon="41.5600238"/>
 <node id="1844021662" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5340249" lon="41.5495417"/>
 <node id="1844021663" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5206189" lon="41.5490674"/>
 <node id="1844021665" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5203384" lon="41.5476293"/>
 <node id="1844021666" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5313746" lon="41.5488336"/>
 <node id="1844021667" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5375184" lon="41.5519772"/>
 <node id="1844021668" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5386507" lon="41.5523312"/>
 <node id="1844021669" visible="true" version="4" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5209958" lon="41.5482437">
  <tag k="barrier" v="border_control"/>
  <tag k="name:en" v="Sarpi Border Control"/>
 </node>
 <node id="1844021670" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5353661" lon="41.5505610"/>
 <node id="1844021671" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5395180" lon="41.5528570"/>
 <node id="1844021672" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5203579" lon="41.5474706"/>
 <node id="1844021673" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:30Z" user="moszkva ter" uid="495146" lat="41.5384339" lon="41.5522454"/>
 <node id="1844021679" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5311497" lon="41.5488229"/>
 <node id="1844021681" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5263145" lon="41.5487371"/>
 <node id="1844021683" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5386989" lon="41.5525029"/>
 <node id="1844021685" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5198916" lon="41.5486684"/>
 <node id="1844021687" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5271820" lon="41.5486620"/>
 <node id="1844021688" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5172725" lon="41.5467747"/>
 <node id="1844021692" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5320733" lon="41.5490160"/>
 <node id="1844021696" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5444084" lon="41.5605066"/>
 <node id="1844021698" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5214995" lon="41.5480277"/>
 <node id="1844021700" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5390924" lon="41.5526316"/>
 <node id="1844021701" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5206738" lon="41.5469943"/>
 <node id="1844021702" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5177617" lon="41.5462986"/>
 <node id="1844021704" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5361692" lon="41.5511189"/>
 <node id="1844021705" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:31Z" user="moszkva ter" uid="495146" lat="41.5445369" lon="41.5612469"/>
 <node id="1844021706" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5203363" lon="41.5500484"/>
 <node id="1844021707" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386" lat="41.5203192" lon="41.5496452"/>
 <node id="1844021718" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:32Z" user="moszkva ter" uid="495146" lat="41.5357195" lon="41.5509043"/>
 <node id="1844021720" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:38Z" user="Sal73x" uid="1293386" lat="41.5212440" lon="41.5492359"/>
 <node id="1844021726" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:32Z" user="moszkva ter" uid="495146" lat="41.5346514" lon="41.5499816"/>
 <node id="1844021727" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5213180" lon="41.5491669"/>
 <node id="1844021730" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5205314" lon="41.5485567"/>
 <node id="1844021734" visible="true" version="5" changeset="66702185" timestamp="2019-01-28T11:17:53Z" user="brogo" uid="63107" lat="41.5214692" lon="41.5487635"/>
 <node id="1844021737" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:37Z" user="Sal73x" uid="1293386" lat="41.5209360" lon="41.5491853">
  <tag k="barrier" v="border_control"/>
  <tag k="name:en" v="Sarpi Border Control"/>
 </node>
 <node id="2291888274" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.5002293" lon="41.5322364"/>
 <node id="2291888275" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5023899" lon="41.5338180"/>
 <node id="2291888278" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5024502" lon="41.5336077"/>
 <node id="2291888280" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5026163" lon="41.5336965"/>
 <node id="2291888282" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5090400" lon="41.5376597"/>
 <node id="2291888283" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5094024" lon="41.5378651"/>
 <node id="2291888284" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5107140" lon="41.5394003"/>
 <node id="2291888285" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5109188" lon="41.5397602"/>
 <node id="2291888286" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5111322" lon="41.5405391"/>
 <node id="2291888287" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5112639" lon="41.5418682"/>
 <node id="2291888288" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5114094" lon="41.5421529"/>
 <node id="2291888289" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5134528" lon="41.5433761"/>
 <node id="2291888290" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5140586" lon="41.5438862"/>
 <node id="2291888291" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5143300" lon="41.5440456"/>
 <node id="2291888292" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5150066" lon="41.5442243"/>
 <node id="2291888293" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5153247" lon="41.5443496"/>
 <node id="2291888294" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5155805" lon="41.5444793"/>
 <node id="2291888295" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5160792" lon="41.5447328"/>
 <node id="2291888296" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5164882" lon="41.5448406"/>
 <node id="2291888297" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5169076" lon="41.5449798"/>
 <node id="2291888298" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5168494" lon="41.5448718"/>
 <node id="2291888299" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5168551" lon="41.5446847"/>
 <node id="2291888300" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5170046" lon="41.5450566"/>
 <node id="2291888301" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5172049" lon="41.5450314"/>
 <node id="2291888302" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5170643" lon="41.5447348"/>
 <node id="2291888303" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5172272" lon="41.5453878"/>
 <node id="2291888304" visible="true" version="4" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5176014" lon="41.5472562"/>
 <node id="2291888305" visible="true" version="4" changeset="53340576" timestamp="2017-10-29T12:33:08Z" user="Sal73x" uid="1293386" lat="41.5180445" lon="41.5474378"/>
 <node id="2424579542" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5153661" lon="41.5506307"/>
 <node id="2424579543" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5175248" lon="41.5487610"/>
 <node id="2424579544" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5165729" lon="41.5499036"/>
 <node id="2424579546" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5173561" lon="41.5493296"/>
 <node id="2424579548" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5162997" lon="41.5501450"/>
 <node id="2424579549" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5135860" lon="41.5527318"/>
 <node id="2424579550" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5159646" lon="41.5505181"/>
 <node id="2424579551" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5154665" lon="41.5505932"/>
 <node id="2424579553" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5144462" lon="41.5510599"/>
 <node id="2424579554" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5158619" lon="41.5505098"/>
 <node id="2424579556" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5156071" lon="41.5505985"/>
 <node id="2424579557" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:38Z" user="bigalxyz123" uid="481116" lat="41.5136326" lon="41.5518187"/>
 <node id="2424579559" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5150889" lon="41.5508614"/>
 <node id="2424579561" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5152134" lon="41.5508185"/>
 <node id="2424579562" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5148037" lon="41.5510277"/>
 <node id="2424579563" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5136870" lon="41.5516714"/>
 <node id="2424579564" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5143578" lon="41.5511135"/>
 <node id="2424579565" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5171473" lon="41.5493779"/>
 <node id="2424579570" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5167898" lon="41.5497105"/>
 <node id="2424579571" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5136027" lon="41.5521167"/>
 <node id="2424579573" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5139682" lon="41.5515159"/>
 <node id="2424579574" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5143074" lon="41.5511964"/>
 <node id="2424579575" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5169826" lon="41.5495227"/>
 <node id="2424579581" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5142994" lon="41.5512822"/>
 <node id="2424579586" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5147194" lon="41.5510223"/>
 <node id="2424579587" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5174365" lon="41.5488790"/>
 <node id="2424579588" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5145966" lon="41.5510355"/>
 <node id="2424579590" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5149381" lon="41.5510033"/>
 <node id="2424579593" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5174164" lon="41.5490828"/>
 <node id="2424579594" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:39Z" user="bigalxyz123" uid="481116" lat="41.5137995" lon="41.5515534"/>
 <node id="2817947837" visible="true" version="1" changeset="21954550" timestamp="2014-04-26T13:38:07Z" user="katpatuka" uid="17497" lat="41.4201444" lon="41.4394351"/>
 <node id="2817947838" visible="true" version="1" changeset="21954550" timestamp="2014-04-26T13:38:07Z" user="katpatuka" uid="17497" lat="41.4208933" lon="41.4398355">
  <tag k="power" v="tower"/>
  <tag k="source" v="bing"/>
 </node>
 <node id="3085199009" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:22Z" user="Helmchen42" uid="1817244" lat="41.4919990" lon="41.5310943"/>
 <node id="3085199011" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:22Z" user="Helmchen42" uid="1817244" lat="41.4920939" lon="41.5310876"/>
 <node id="3085199013" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:22Z" user="Helmchen42" uid="1817244" lat="41.4921993" lon="41.5311033"/>
 <node id="3085199014" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:22Z" user="Helmchen42" uid="1817244" lat="41.4923820" lon="41.5312096"/>
 <node id="3085199016" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:22Z" user="Helmchen42" uid="1817244" lat="41.4925343" lon="41.5313346"/>
 <node id="3085199018" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4925951" lon="41.5314566"/>
 <node id="3085199019" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4927263" lon="41.5317442"/>
 <node id="3085199020" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4929020" lon="41.5320288"/>
 <node id="3085199021" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4933142" lon="41.5323946"/>
 <node id="3085199022" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4934055" lon="41.5325291"/>
 <node id="3085199023" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4934336" lon="41.5328417"/>
 <node id="3085199024" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4934617" lon="41.5329543"/>
 <node id="3085199025" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4935437" lon="41.5330762"/>
 <node id="3085199026" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4936584" lon="41.5331794"/>
 <node id="3085199027" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4939020" lon="41.5333639"/>
 <node id="3085199028" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4940027" lon="41.5334983"/>
 <node id="3085199029" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4941081" lon="41.5337985"/>
 <node id="3085199030" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4943868" lon="41.5347271"/>
 <node id="3085199031" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4944477" lon="41.5347803"/>
 <node id="3085199032" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4944875" lon="41.5345051"/>
 <node id="3085199033" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4944898" lon="41.5343207"/>
 <node id="3085199034" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4944992" lon="41.5347490"/>
 <node id="3085199035" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4945179" lon="41.5346584"/>
 <node id="3085199036" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4945554" lon="41.5341424"/>
 <node id="3085199037" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4946608" lon="41.5339799"/>
 <node id="3085199038" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4948528" lon="41.5337172"/>
 <node id="3085199039" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4949582" lon="41.5336703"/>
 <node id="3085199040" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4950449" lon="41.5336672"/>
 <node id="3085199041" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4952603" lon="41.5338016"/>
 <node id="3085199042" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4953845" lon="41.5337954"/>
 <node id="3085199043" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4955156" lon="41.5337579"/>
 <node id="3085199044" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4958177" lon="41.5336109"/>
 <node id="3085199045" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4959137" lon="41.5336109"/>
 <node id="3085199046" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4959793" lon="41.5337110"/>
 <node id="3085199047" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4960355" lon="41.5338610"/>
 <node id="3085199048" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4960613" lon="41.5346302"/>
 <node id="3085199049" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4960941" lon="41.5348241"/>
 <node id="3085199050" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4962276" lon="41.5351868"/>
 <node id="3085199051" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4966070" lon="41.5358278"/>
 <node id="3085199052" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4968177" lon="41.5360529"/>
 <node id="3085199053" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4970449" lon="41.5361717"/>
 <node id="3085199054" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4973259" lon="41.5361873"/>
 <node id="3085199055" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4974500" lon="41.5361092"/>
 <node id="3085199056" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4976069" lon="41.5359247"/>
 <node id="3085199057" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4976912" lon="41.5359153"/>
 <node id="3085199058" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4983657" lon="41.5363093"/>
 <node id="3085199059" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4984968" lon="41.5362749"/>
 <node id="3085199060" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4986303" lon="41.5361998"/>
 <node id="3085199061" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4987427" lon="41.5362061"/>
 <node id="3085199062" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4990519" lon="41.5364531"/>
 <node id="3085199063" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4991245" lon="41.5356589"/>
 <node id="3085199064" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4991291" lon="41.5364437"/>
 <node id="3085199065" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4991666" lon="41.5363687"/>
 <node id="3085199066" visible="true" version="2" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.4991912" lon="41.5355350"/>
 <node id="3085199067" visible="true" version="2" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.4992638" lon="41.5354766"/>
 <node id="3085199068" visible="true" version="1" changeset="25528981" timestamp="2014-09-18T20:11:23Z" user="Helmchen42" uid="1817244" lat="41.4996607" lon="41.5355901"/>
 <node id="4125316190" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5215630" lon="41.5492656">
  <tag k="amenity" v="bureau_de_change"/>
  <tag k="name" v="Davit"/>
 </node>
 <node id="4142482090" visible="true" version="3" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5218125" lon="41.5493105">
  <tag k="amenity" v="casino"/>
  <tag k="internet_access" v="wlan"/>
  <tag k="name:en" v="Atlantic City"/>
 </node>
 <node id="4254185872" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5220088" lon="41.5484515"/>
 <node id="4254191709" visible="true" version="4" changeset="63371825" timestamp="2018-10-10T08:28:58Z" user="Qotola" uid="8746535" lat="41.5204392" lon="41.5479973"/>
 <node id="4254191712" visible="true" version="3" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5202105" lon="41.5477729"/>
 <node id="4254191713" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5177188" lon="41.5467086"/>
 <node id="4254191714" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5186398" lon="41.5470841">
  <tag k="alt_name" v="Sarp Sınır Kapısı"/>
  <tag k="barrier" v="border_control"/>
  <tag k="name" v="Sarp Hudut Kapısı"/>
  <tag k="name:en" v="Sarp Border Control"/>
 </node>
 <node id="4254191719" visible="true" version="2" changeset="53340576" timestamp="2017-10-29T12:33:07Z" user="Sal73x" uid="1293386" lat="41.5203793" lon="41.5479169"/>
 <node id="4507521489" visible="true" version="4" changeset="64563880" timestamp="2018-11-16T11:58:55Z" user="Qotola" uid="8746535" lat="41.5324963" lon="41.5497717">
  <tag k="name" v="ცივი ჩანჩქერი"/>
  <tag k="name:en" v="Cold Waterfall"/>
  <tag k="name:ru" v="Водопад и памятник Андрею Первозванному"/>
  <tag k="waterway" v="waterfall"/>
 </node>
 <node id="4770346254" visible="true" version="1" changeset="47369658" timestamp="2017-04-01T23:12:44Z" user="Toliman" uid="204045" lat="41.4306329" lon="41.4515071">
  <tag k="power" v="tower"/>
 </node>
 <node id="4770346255" visible="true" version="2" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4256575" lon="41.4481326">
  <tag k="power" v="tower"/>
 </node>
 <node id="4770346256" visible="true" version="1" changeset="47369658" timestamp="2017-04-01T23:12:44Z" user="Toliman" uid="204045" lat="41.4335931" lon="41.4536315">
  <tag k="power" v="tower"/>
 </node>
 <node id="4781245040" visible="true" version="1" changeset="47540618" timestamp="2017-04-07T13:57:16Z" user="Toliman" uid="204045" lat="41.5112340" lon="41.5527238">
  <tag k="power" v="tower"/>
 </node>
 <node id="4781245041" visible="true" version="1" changeset="47540618" timestamp="2017-04-07T13:57:16Z" user="Toliman" uid="204045" lat="41.5264085" lon="41.5727224">
  <tag k="power" v="tower"/>
 </node>
 <node id="4781245042" visible="true" version="1" changeset="47540618" timestamp="2017-04-07T13:57:16Z" user="Toliman" uid="204045" lat="41.5183598" lon="41.5657057">
  <tag k="power" v="tower"/>
 </node>
 <node id="4781245043" visible="true" version="2" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5213623" lon="41.5697797">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760189" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4886572" lon="41.5368388">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760190" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4772475" lon="41.5290765">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760191" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4907664" lon="41.5381638">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760192" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4531886" lon="41.4738981">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760193" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.5000002" lon="41.5444284">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760194" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4668733" lon="41.5053712">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760195" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4565578" lon="41.4755825">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760196" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4426055" lon="41.4606051">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760197" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4726977" lon="41.5252624">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760198" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4714798" lon="41.5208529">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760199" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4693615" lon="41.5137343">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760200" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.5041058" lon="41.5472941">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760201" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4511340" lon="41.4710764">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760202" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4862642" lon="41.5350251">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760203" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4935952" lon="41.5400521">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760204" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4235660" lon="41.4463840">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760205" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4378321" lon="41.4569519">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760206" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4596092" lon="41.4813278">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760207" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4461485" lon="41.4640228">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760208" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4638062" lon="41.4928345">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760209" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:20Z" user="Toliman" uid="204045" lat="41.4479254" lon="41.4665703">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760210" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4603851" lon="41.4831839">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760211" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4209514" lon="41.4425753">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760212" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4207744" lon="41.4428435">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760213" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4827937" lon="41.5326600">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760214" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4617077" lon="41.4852600">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760215" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4643207" lon="41.4953880">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760216" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4675607" lon="41.5080319">
  <tag k="power" v="tower"/>
 </node>
 <node id="4841760217" visible="true" version="1" changeset="48503089" timestamp="2017-05-08T14:01:21Z" user="Toliman" uid="204045" lat="41.4231074" lon="41.4458476">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923592" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5421315" lon="41.5806322">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923593" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5345265" lon="41.5771534">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923594" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5393892" lon="41.5783497">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923595" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5295972" lon="41.5737872">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923596" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5453877" lon="41.5828263">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923597" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5595286" lon="41.5922221">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923598" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5615737" lon="41.5991019">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923599" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5538525" lon="41.5870186">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923600" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5529158" lon="41.5838501">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923601" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5321211" lon="41.5754019">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923602" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5546118" lon="41.5882516">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923603" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5498220" lon="41.5829631">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923604" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5363977" lon="41.5775933">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923605" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5616660" lon="41.6019370">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923606" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5434705" lon="41.5811901">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923607" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5377409" lon="41.5780493">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923608" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5281474" lon="41.5732669">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923609" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5560148" lon="41.5906924">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923610" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5474272" lon="41.5837329">
  <tag k="power" v="tower"/>
 </node>
 <node id="4907923611" visible="true" version="1" changeset="49425565" timestamp="2017-06-10T17:55:27Z" user="Toliman" uid="204045" lat="41.5607569" lon="41.5954112">
  <tag k="power" v="tower"/>
 </node>
 <node id="4938578404" visible="true" version="1" changeset="49863705" timestamp="2017-06-27T14:20:39Z" user="Toliman" uid="204045" lat="41.5617697" lon="41.6048670">
  <tag k="power" v="tower"/>
 </node>
 <node id="5059607994" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4854657" lon="41.5235312"/>
 <node id="5059607995" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4840704" lon="41.5231241"/>
 <node id="5059607996" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4840079" lon="41.5230664"/>
 <node id="5059607997" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4840065" lon="41.5229920"/>
 <node id="5059607998" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4840337" lon="41.5228713"/>
 <node id="5059607999" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4840809" lon="41.5228414"/>
 <node id="5059608000" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4841836" lon="41.5228509"/>
 <node id="5059608001" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4842411" lon="41.5228272"/>
 <node id="5059608002" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4842576" lon="41.5227665"/>
 <node id="5059608003" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4842141" lon="41.5226386"/>
 <node id="5059608004" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4842559" lon="41.5226873"/>
 <node id="5059608005" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4833886" lon="41.5225562"/>
 <node id="5059608006" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4831748" lon="41.5221118"/>
 <node id="5059608007" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4831049" lon="41.5219989"/>
 <node id="5059608008" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4830426" lon="41.5218977"/>
 <node id="5059608009" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4830328" lon="41.5216362"/>
 <node id="5059608010" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4829545" lon="41.5213945"/>
 <node id="5059608011" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4828241" lon="41.5214714"/>
 <node id="5059608012" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4826819" lon="41.5216924"/>
 <node id="5059608013" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4826169" lon="41.5218256"/>
 <node id="5059608014" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4824144" lon="41.5219634"/>
 <node id="5059608015" visible="true" version="1" changeset="51451688" timestamp="2017-08-26T07:08:43Z" user="penom" uid="436145" lat="41.4822875" lon="41.5218640"/>
 <node id="5059613289" visible="true" version="2" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4866631" lon="41.5246702"/>
 <node id="5059613290" visible="true" version="2" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4854354" lon="41.5237838"/>
 <node id="5059614360" visible="true" version="1" changeset="51451785" timestamp="2017-08-26T07:13:42Z" user="penom" uid="436145" lat="41.4854393" lon="41.5236917"/>
 <node id="5059631961" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:53Z" user="penom" uid="436145" lat="41.4855327" lon="41.5238973"/>
 <node id="5059631996" visible="true" version="2" changeset="51454422" timestamp="2017-08-26T09:40:49Z" user="penom" uid="436145" lat="41.4857862" lon="41.5241146"/>
 <node id="5059631997" visible="true" version="2" changeset="51454422" timestamp="2017-08-26T09:40:49Z" user="penom" uid="436145" lat="41.4859310" lon="41.5242366"/>
 <node id="5059631998" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:53Z" user="penom" uid="436145" lat="41.4897864" lon="41.5267194"/>
 <node id="5059632015" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4916305" lon="41.5278631"/>
 <node id="5059633725" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4938435" lon="41.5290972"/>
 <node id="5059633727" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4953231" lon="41.5299164"/>
 <node id="5059633736" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4972524" lon="41.5309355"/>
 <node id="5059633748" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4976716" lon="41.5311065"/>
 <node id="5059633749" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4982425" lon="41.5311393"/>
 <node id="5059633750" visible="true" version="1" changeset="51451944" timestamp="2017-08-26T07:22:54Z" user="penom" uid="436145" lat="41.4979508" lon="41.5311437"/>
 <node id="5059649272" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5047676" lon="41.5351047"/>
 <node id="5059649273" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5038466" lon="41.5345630"/>
 <node id="5059649274" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5033820" lon="41.5342631"/>
 <node id="5059649279" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5021348" lon="41.5336890"/>
 <node id="5059649280" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5018677" lon="41.5335269"/>
 <node id="5059649281" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5055145" lon="41.5354680"/>
 <node id="5059649287" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5068122" lon="41.5363480"/>
 <node id="5059649288" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5074768" lon="41.5369450"/>
 <node id="5059649289" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5072539" lon="41.5367542"/>
 <node id="5059649290" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:04Z" user="erenbostan" uid="899249" lat="41.5070584" lon="41.5365794"/>
 <node id="5059649291" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5071007" lon="41.5363303"/>
 <node id="5059649292" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5068296" lon="41.5359845"/>
 <node id="5059649293" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5065480" lon="41.5356902"/>
 <node id="5059649294" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5062698" lon="41.5354510"/>
 <node id="5059649296" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5049755" lon="41.5349091"/>
 <node id="5059649300" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5044984" lon="41.5347020"/>
 <node id="5059649301" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5040398" lon="41.5345088"/>
 <node id="5059649302" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5036556" lon="41.5342853"/>
 <node id="5059649304" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5029061" lon="41.5338286"/>
 <node id="5059649309" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5022857" lon="41.5334797"/>
 <node id="5059649310" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5020712" lon="41.5333163"/>
 <node id="5059649311" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5017967" lon="41.5330916"/>
 <node id="5059649312" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5014443" lon="41.5328702"/>
 <node id="5059649313" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.5008397" lon="41.5324801"/>
 <node id="5059649314" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.5005131" lon="41.5323423"/>
 <node id="5059649315" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4992625" lon="41.5319275"/>
 <node id="5059649316" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4995724" lon="41.5320329"/>
 <node id="5059649318" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4987060" lon="41.5318263"/>
 <node id="5059649319" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:26:59Z" user="erenbostan" uid="899249" lat="41.4983877" lon="41.5318223"/>
 <node id="5059649328" visible="true" version="1" changeset="51452135" timestamp="2017-08-26T07:34:56Z" user="penom" uid="436145" lat="41.4954410" lon="41.5323062"/>
 <node id="5077140824" visible="true" version="2" changeset="64563828" timestamp="2018-11-16T11:57:31Z" user="Qotola" uid="8746535" lat="41.5329266" lon="41.5492747">
  <tag k="amenity" v="bar"/>
  <tag k="name" v="ყვინთვა"/>
  <tag k="name:en" v="Diving"/>
  <tag k="name:ka" v="ყვინთვა"/>
 </node>
 <node id="5100394022" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.4997457" lon="41.5356719"/>
 <node id="5100394023" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.4998760" lon="41.5358775"/>
 <node id="5100394024" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.4998760" lon="41.5363204"/>
 <node id="5100394025" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.4998701" lon="41.5365418"/>
 <node id="5100394026" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.4999649" lon="41.5364706"/>
 <node id="5100394027" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5001899" lon="41.5363125"/>
 <node id="5100394028" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5004210" lon="41.5362175"/>
 <node id="5100394029" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5005868" lon="41.5361306"/>
 <node id="5100394030" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5006934" lon="41.5359091"/>
 <node id="5100394031" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5008237" lon="41.5356007"/>
 <node id="5100394032" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5008533" lon="41.5352922"/>
 <node id="5100394033" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5010429" lon="41.5350154"/>
 <node id="5100394034" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5011791" lon="41.5349917"/>
 <node id="5100394035" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5013805" lon="41.5351262"/>
 <node id="5100394036" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5014753" lon="41.5352448"/>
 <node id="5100394037" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5016056" lon="41.5354030"/>
 <node id="5100394038" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5017359" lon="41.5357588"/>
 <node id="5100394039" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5018247" lon="41.5359724"/>
 <node id="5100394040" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5018603" lon="41.5361543"/>
 <node id="5100394041" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5018603" lon="41.5363362"/>
 <node id="5100394042" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5018662" lon="41.5365260"/>
 <node id="5100394043" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5019610" lon="41.5366288"/>
 <node id="5100394044" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5020735" lon="41.5367000"/>
 <node id="5100394045" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5021268" lon="41.5368502"/>
 <node id="5100394046" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5020972" lon="41.5370559"/>
 <node id="5100394047" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5020024" lon="41.5374355"/>
 <node id="5100394048" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5020024" lon="41.5377439"/>
 <node id="5100394049" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5019906" lon="41.5380286"/>
 <node id="5100394050" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5020439" lon="41.5382105"/>
 <node id="5100394051" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5021268" lon="41.5382738"/>
 <node id="5100394052" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5022571" lon="41.5382501"/>
 <node id="5100394053" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5023933" lon="41.5380761"/>
 <node id="5100394054" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5025947" lon="41.5380444"/>
 <node id="5100394055" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5029205" lon="41.5379258"/>
 <node id="5100394056" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5030152" lon="41.5380207"/>
 <node id="5100394057" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5031396" lon="41.5381552"/>
 <node id="5100394058" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5031396" lon="41.5384636"/>
 <node id="5100394059" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5029619" lon="41.5385743"/>
 <node id="5100394060" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5028494" lon="41.5387325"/>
 <node id="5100394061" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5027428" lon="41.5389856"/>
 <node id="5100394062" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5026717" lon="41.5393098"/>
 <node id="5100394063" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5027428" lon="41.5396499"/>
 <node id="5100394064" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5027724" lon="41.5399899"/>
 <node id="5100394065" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5028139" lon="41.5403537"/>
 <node id="5100394066" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5029501" lon="41.5404803"/>
 <node id="5100394067" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5031337" lon="41.5404961"/>
 <node id="5100394068" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5033706" lon="41.5405831"/>
 <node id="5100394069" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5035068" lon="41.5406385"/>
 <node id="5100394070" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5035898" lon="41.5407571"/>
 <node id="5100394071" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5036253" lon="41.5408836"/>
 <node id="5100394072" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5035601" lon="41.5409785"/>
 <node id="5100394073" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5035128" lon="41.5410813"/>
 <node id="5100394074" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5034772" lon="41.5411841"/>
 <node id="5100394075" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5034180" lon="41.5413028"/>
 <node id="5100394076" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5034180" lon="41.5414293"/>
 <node id="5100394077" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5034535" lon="41.5416112"/>
 <node id="5100394078" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5034772" lon="41.5417694"/>
 <node id="5100394079" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5033825" lon="41.5419355"/>
 <node id="5100394080" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:49Z" user="erkinalp" uid="113816" lat="41.5033292" lon="41.5420778"/>
 <node id="5100394081" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5034713" lon="41.5420778"/>
 <node id="5100394082" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5036608" lon="41.5421411"/>
 <node id="5100394083" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5037734" lon="41.5420304"/>
 <node id="5100394084" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5039155" lon="41.5418722"/>
 <node id="5100394085" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5039688" lon="41.5418089"/>
 <node id="5100394086" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5040496" lon="41.5417741"/>
 <node id="5100394087" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5041258" lon="41.5417904"/>
 <node id="5100394088" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5041866" lon="41.5419286"/>
 <node id="5100394089" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5042749" lon="41.5419611"/>
 <node id="5100394090" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5045126" lon="41.5419072"/>
 <node id="5100394091" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5045728" lon="41.5419340"/>
 <node id="5100394092" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5046380" lon="41.5421014"/>
 <node id="5100394093" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5046831" lon="41.5423894"/>
 <node id="5100394094" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5047884" lon="41.5424831"/>
 <node id="5100394095" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5050693" lon="41.5425702"/>
 <node id="5100394096" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5052950" lon="41.5426171"/>
 <node id="5100394097" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5055658" lon="41.5425836"/>
 <node id="5100394098" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5057162" lon="41.5425300"/>
 <node id="5100394099" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5058416" lon="41.5424028"/>
 <node id="5100394100" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5059269" lon="41.5423894"/>
 <node id="5100394101" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5060623" lon="41.5424496"/>
 <node id="5100394102" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5061575" lon="41.5425233"/>
 <node id="5100394103" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5062378" lon="41.5424898"/>
 <node id="5100394104" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5063130" lon="41.5423693"/>
 <node id="5100394105" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5063632" lon="41.5422220"/>
 <node id="5100394106" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5064685" lon="41.5421215"/>
 <node id="5100394107" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5065437" lon="41.5421349"/>
 <node id="5100394108" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5066239" lon="41.5422287"/>
 <node id="5100394109" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5066791" lon="41.5423693"/>
 <node id="5100394110" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5067443" lon="41.5425434"/>
 <node id="5100394111" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5069158" lon="41.5425776"/>
 <node id="5100394112" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5070698" lon="41.5426646"/>
 <node id="5100394113" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5071172" lon="41.5428070"/>
 <node id="5100394114" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5070106" lon="41.5429652"/>
 <node id="5100394115" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5068033" lon="41.5433448"/>
 <node id="5100394116" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5067026" lon="41.5435108"/>
 <node id="5100394117" visible="true" version="1" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816" lat="41.5065960" lon="41.5437876"/>
 <node id="5100399487" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5012358" lon="41.5344476"/>
 <node id="5100399488" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5014490" lon="41.5347718"/>
 <node id="5100399489" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5016504" lon="41.5350328"/>
 <node id="5100399490" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5018874" lon="41.5352701"/>
 <node id="5100399491" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5021302" lon="41.5354441"/>
 <node id="5100399492" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5024856" lon="41.5356023"/>
 <node id="5100399493" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5027758" lon="41.5358870"/>
 <node id="5100399494" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5028646" lon="41.5361163"/>
 <node id="5100399495" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5029120" lon="41.5365196"/>
 <node id="5100399496" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5029120" lon="41.5367806"/>
 <node id="5100399497" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5031489" lon="41.5366620"/>
 <node id="5100399498" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5033799" lon="41.5365592"/>
 <node id="5100399499" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5036109" lon="41.5365750"/>
 <node id="5100399500" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5037649" lon="41.5367095"/>
 <node id="5100399501" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5039604" lon="41.5370812"/>
 <node id="5100399502" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5040729" lon="41.5372551"/>
 <node id="5100399503" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5042387" lon="41.5372314"/>
 <node id="5100399504" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5044638" lon="41.5370653"/>
 <node id="5100399505" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5049909" lon="41.5365117"/>
 <node id="5100399506" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5050916" lon="41.5362508"/>
 <node id="5100399507" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5051627" lon="41.5362349"/>
 <node id="5100399508" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:58Z" user="erkinalp" uid="113816" lat="41.5052871" lon="41.5362349"/>
 <node id="5100399509" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5054174" lon="41.5363219"/>
 <node id="5100399510" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5055121" lon="41.5365750"/>
 <node id="5100399511" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5056484" lon="41.5368755"/>
 <node id="5100399512" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5056957" lon="41.5371523"/>
 <node id="5100399513" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5058616" lon="41.5372156"/>
 <node id="5100399514" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5059682" lon="41.5371207"/>
 <node id="5100399515" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816" lat="41.5061222" lon="41.5371049"/>
 <node id="5100406290" visible="true" version="1" changeset="51968302" timestamp="2017-09-12T10:35:33Z" user="erkinalp" uid="113816" lat="41.5125361" lon="41.5450293"/>
 <node id="5100406291" visible="true" version="1" changeset="51968302" timestamp="2017-09-12T10:35:33Z" user="erkinalp" uid="113816" lat="41.5126486" lon="41.5446892"/>
 <node id="5100406292" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5125176" lon="41.5433235"/>
 <node id="5100406293" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5123285" lon="41.5433123"/>
 <node id="5100406294" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5119890" lon="41.5431392"/>
 <node id="5100406295" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5117279" lon="41.5429201"/>
 <node id="5100406296" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5116100" lon="41.5427688"/>
 <node id="5100406297" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5114996" lon="41.5425907"/>
 <node id="5100406298" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5114102" lon="41.5423994"/>
 <node id="5100406299" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:00Z" user="erenbostan" uid="899249" lat="41.5112734" lon="41.5419925"/>
 <node id="5100406300" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5141259" lon="41.5444849"/>
 <node id="5100409458" visible="true" version="3" changeset="61748655" timestamp="2018-08-17T14:38:22Z" user="orca_horka" uid="8525896" lat="41.5212841" lon="41.5494478"/>
 <node id="5176312354" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5613606" lon="41.6062096">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312355" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5623878" lon="41.6254171">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312356" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5627675" lon="41.6271443">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312357" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5608187" lon="41.6181508">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312358" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5604053" lon="41.6094444">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312359" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5616807" lon="41.6222003">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312360" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5605739" lon="41.6139076">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312361" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5597896" lon="41.6113831">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176312362" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:44:11Z" user="Toliman" uid="204045" lat="41.5608779" lon="41.6154120">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325521" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:42Z" user="Toliman" uid="204045" lat="41.5632873" lon="41.6299499">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325522" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:42Z" user="Toliman" uid="204045" lat="41.5676490" lon="41.6380414">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325523" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:42Z" user="Toliman" uid="204045" lat="41.5644682" lon="41.6343346">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325524" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:42Z" user="Toliman" uid="204045" lat="41.5714116" lon="41.6444707">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325525" visible="true" version="2" changeset="60530823" timestamp="2018-07-09T08:56:05Z" user="RGraefen" uid="3731755" lat="41.5728083" lon="41.6467434">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325526" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:43Z" user="Toliman" uid="204045" lat="41.5694370" lon="41.6410750">
  <tag k="power" v="tower"/>
 </node>
 <node id="5176325527" visible="true" version="1" changeset="53067818" timestamp="2017-10-19T12:54:43Z" user="Toliman" uid="204045" lat="41.5667379" lon="41.6370088">
  <tag k="power" v="tower"/>
 </node>
 <node id="5198064591" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5195532" lon="41.5516054"/>
 <node id="5198064592" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5211886" lon="41.5495842"/>
 <node id="5198064593" visible="true" version="2" changeset="61748655" timestamp="2018-08-17T14:38:22Z" user="orca_horka" uid="8525896" lat="41.5212225" lon="41.5497779"/>
 <node id="5198064594" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5210690" lon="41.5497819"/>
 <node id="5198064595" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5203453" lon="41.5485311"/>
 <node id="5198064596" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5197598" lon="41.5497545"/>
 <node id="5198064597" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5190966" lon="41.5497327"/>
 <node id="5198064598" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5205802" lon="41.5489630"/>
 <node id="5198064599" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5207077" lon="41.5491452"/>
 <node id="5198064600" visible="true" version="3" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5213235" lon="41.5482923"/>
 <node id="5198064601" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5206564" lon="41.5491169"/>
 <node id="5198064602" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5205910" lon="41.5490109"/>
 <node id="5198064603" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5204314" lon="41.5483627"/>
 <node id="5198064604" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5212835" lon="41.5492098"/>
 <node id="5198064605" visible="true" version="2" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5213604" lon="41.5492561"/>
 <node id="5198064606" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5213364" lon="41.5493191"/>
 <node id="5198064607" visible="true" version="3" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5218550" lon="41.5483778"/>
 <node id="5198064608" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5204712" lon="41.5499640"/>
 <node id="5198064609" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5210834" lon="41.5497147"/>
 <node id="5198064610" visible="true" version="2" changeset="69994558" timestamp="2019-05-07T18:27:23Z" user="richter_fn" uid="371522" lat="41.5211035" lon="41.5494417"/>
 <node id="5198064611" visible="true" version="2" changeset="69994558" timestamp="2019-05-07T18:27:23Z" user="richter_fn" uid="371522" lat="41.5211794" lon="41.5494459"/>
 <node id="5198064612" visible="true" version="2" changeset="69994558" timestamp="2019-05-07T18:27:23Z" user="richter_fn" uid="371522" lat="41.5211828" lon="41.5493261"/>
 <node id="5198064614" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5211977" lon="41.5481994"/>
 <node id="5198064615" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5213408" lon="41.5482187"/>
 <node id="5198064616" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5213505" lon="41.5480904"/>
 <node id="5198064617" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5212157" lon="41.5480723"/>
 <node id="5198064618" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5209307" lon="41.5478715"/>
 <node id="5198064619" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5209225" lon="41.5479816"/>
 <node id="5198064620" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5207075" lon="41.5479530"/>
 <node id="5198069021" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5206919" lon="41.5481626"/>
 <node id="5198069022" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5208944" lon="41.5481894"/>
 <node id="5198069023" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5212278" lon="41.5479112"/>
 <node id="5198069024" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5215084" lon="41.5480162"/>
 <node id="5198069025" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5203138" lon="41.5484798"/>
 <node id="5198069026" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5203575" lon="41.5484347"/>
 <node id="5198069027" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5204548" lon="41.5485870"/>
 <node id="5198069028" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5203857" lon="41.5487115"/>
 <node id="5198069029" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5207977" lon="41.5491610"/>
 <node id="5198069030" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5211529" lon="41.5492209"/>
 <node id="5198069031" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5208518" lon="41.5482220"/>
 <node id="5198069033" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5247506" lon="41.5498451"/>
 <node id="5198069034" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5252304" lon="41.5491714"/>
 <node id="5198069035" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5251809" lon="41.5497580"/>
 <node id="5198069036" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5239898" lon="41.5499849"/>
 <node id="5198069037" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5237896" lon="41.5512040"/>
 <node id="5198069038" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5236074" lon="41.5505899"/>
 <node id="5198069039" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5230349" lon="41.5520224"/>
 <node id="5198069040" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:34Z" user="Sal73x" uid="1293386" lat="41.5227132" lon="41.5536940"/>
 <node id="5198069041" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5231189" lon="41.5552547"/>
 <node id="5198069042" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5221243" lon="41.5558229"/>
 <node id="5198069043" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5209059" lon="41.5548170"/>
 <node id="5198069044" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5202967" lon="41.5549723"/>
 <node id="5198069045" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5201840" lon="41.5552532"/>
 <node id="5198069046" visible="true" version="3" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5201915" lon="41.5479458"/>
 <node id="5198069047" visible="true" version="3" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5200615" lon="41.5478923"/>
 <node id="5198069048" visible="true" version="3" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5200296" lon="41.5480304"/>
 <node id="5198069049" visible="true" version="3" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5201596" lon="41.5480839"/>
 <node id="5198069050" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386" lat="41.5203853" lon="41.5483161"/>
 <node id="5198108591" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5172346" lon="41.5473747"/>
 <node id="5198108592" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5175401" lon="41.5475273"/>
 <node id="5198108595" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5190240" lon="41.5480866"/>
 <node id="5198108596" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5186553" lon="41.5480247"/>
 <node id="5198108597" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5183469" lon="41.5479652"/>
 <node id="5198108598" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:05Z" user="Sal73x" uid="1293386" lat="41.5182108" lon="41.5481321"/>
 <node id="5198108599" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:05Z" user="Sal73x" uid="1293386" lat="41.5170103" lon="41.5473177"/>
 <node id="5198108600" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:05Z" user="Sal73x" uid="1293386" lat="41.5171570" lon="41.5475854"/>
 <node id="5198108601" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5205250" lon="41.5480832"/>
 <node id="5198108602" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5206339" lon="41.5481819"/>
 <node id="5198108603" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:05Z" user="Sal73x" uid="1293386" lat="41.5203068" lon="41.5478291"/>
 <node id="5198108604" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5172519" lon="41.5462843"/>
 <node id="5198108605" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:05Z" user="Sal73x" uid="1293386" lat="41.5176516" lon="41.5466662"/>
 <node id="5198108606" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5173786" lon="41.5462693"/>
 <node id="5198108607" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5176158" lon="41.5476663"/>
 <node id="5198108608" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5185248" lon="41.5480027"/>
 <node id="5198108609" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5193699" lon="41.5479512"/>
 <node id="5198108610" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5191102" lon="41.5479707"/>
 <node id="5198108611" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5183963" lon="41.5475923"/>
 <node id="5198108612" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5167645" lon="41.5475803"/>
 <node id="5198108613" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5163809" lon="41.5480161"/>
 <node id="5198108614" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5173225" lon="41.5457259"/>
 <node id="5198108615" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:01Z" user="erenbostan" uid="899249" lat="41.5173418" lon="41.5460243"/>
 <node id="5198108616" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5186777" lon="41.5475726"/>
 <node id="5198108617" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5185954" lon="41.5479421"/>
 <node id="5198108619" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5191016" lon="41.5477308"/>
 <node id="5198108620" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5187844" lon="41.5473998"/>
 <node id="5198110221" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5183544" lon="41.5472383"/>
 <node id="5198110222" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5184458" lon="41.5467962"/>
 <node id="5198110223" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5188726" lon="41.5469414"/>
 <node id="5198110224" visible="true" version="3" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5196022" lon="41.5473438"/>
 <node id="5198110225" visible="true" version="3" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5195355" lon="41.5477066"/>
 <node id="5198110226" visible="true" version="3" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5198808" lon="41.5478406"/>
 <node id="5198110227" visible="true" version="3" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5199621" lon="41.5474816"/>
 <node id="5198110228" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5190782" lon="41.5472369"/>
 <node id="5198110229" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:03Z" user="erenbostan" uid="899249" lat="41.5194211" lon="41.5474144"/>
 <node id="5198110230" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5180165" lon="41.5472886"/>
 <node id="5198110231" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5177344" lon="41.5471460"/>
 <node id="5198110232" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5177659" lon="41.5469896"/>
 <node id="5198110233" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5178114" lon="41.5470115"/>
 <node id="5198110234" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5178393" lon="41.5468831"/>
 <node id="5198110235" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5180845" lon="41.5469793"/>
 <node id="5198110236" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5177778" lon="41.5464692"/>
 <node id="5198110237" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5177306" lon="41.5466552"/>
 <node id="5198110238" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5180551" lon="41.5468294"/>
 <node id="5198110239" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5181004" lon="41.5466264"/>
 <node id="5198110242" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5174790" lon="41.5468769"/>
 <node id="5198110243" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5175904" lon="41.5468820"/>
 <node id="5198110245" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5172774" lon="41.5468684"/>
 <node id="5198110246" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5173463" lon="41.5469924"/>
 <node id="5198110248" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:06Z" user="Sal73x" uid="1293386" lat="41.5175221" lon="41.5474508"/>
 <node id="5198110250" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:02Z" user="erenbostan" uid="899249" lat="41.5176655" lon="41.5471720"/>
 <node id="5198110254" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:06Z" user="Sal73x" uid="1293386" lat="41.5177111" lon="41.5462003"/>
 <node id="5198110255" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:06Z" user="Sal73x" uid="1293386" lat="41.5179387" lon="41.5463694"/>
 <node id="5198110257" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:06Z" user="Sal73x" uid="1293386" lat="41.5175535" lon="41.5471908"/>
 <node id="5306895879" visible="true" version="2" changeset="54964189" timestamp="2017-12-27T18:39:19Z" user="jijavadzeo1" uid="7007203" lat="41.5211587" lon="41.5487138">
  <tag k="amenity" v="cafe"/>
 </node>
 <node id="5398581077" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5073186" lon="41.5365771"/>
 <node id="5398581078" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5077943" lon="41.5369449"/>
 <node id="5398581079" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5082499" lon="41.5371762"/>
 <node id="5398581080" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5085075" lon="41.5373208"/>
 <node id="5398581081" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5100033" lon="41.5384568"/>
 <node id="5398581082" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5111649" lon="41.5410146"/>
 <node id="5398581083" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5112350" lon="41.5417258"/>
 <node id="5398581084" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5113484" lon="41.5422455"/>
 <node id="5398581085" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5113367" lon="41.5419858"/>
 <node id="5398581086" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5116702" lon="41.5426738"/>
 <node id="5398581087" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5115814" lon="41.5425370"/>
 <node id="5398581088" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5118665" lon="41.5430458"/>
 <node id="5398581089" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5119065" lon="41.5429288"/>
 <node id="5398581090" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5121721" lon="41.5431208"/>
 <node id="5398581091" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5121498" lon="41.5432370"/>
 <node id="5398581092" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5124154" lon="41.5433273"/>
 <node id="5398581093" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5126706" lon="41.5433318"/>
 <node id="5398581094" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5128788" lon="41.5433229"/>
 <node id="5398581095" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5130571" lon="41.5433183"/>
 <node id="5398581096" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5132871" lon="41.5433237"/>
 <node id="5398581097" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5133770" lon="41.5433458"/>
 <node id="5398581098" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5135821" lon="41.5434515"/>
 <node id="5398581099" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5138882" lon="41.5437211"/>
 <node id="5398581100" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5141890" lon="41.5439828"/>
 <node id="5398581101" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5166972" lon="41.5448808"/>
 <node id="5398581102" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5169337" lon="41.5448980"/>
 <node id="5398581103" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5170086" lon="41.5449526"/>
 <node id="5398581104" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5171934" lon="41.5448534"/>
 <node id="5398581105" visible="true" version="2" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535" lat="41.5169095" lon="41.5440225"/>
 <node id="5398581106" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5171630" lon="41.5452490"/>
 <node id="5398581107" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5173432" lon="41.5458836"/>
 <node id="5398581108" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:55Z" user="erenbostan" uid="899249" lat="41.5162672" lon="41.5484718"/>
 <node id="5398581109" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5161803" lon="41.5488410"/>
 <node id="5398581110" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5160429" lon="41.5488449"/>
 <node id="5398581111" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5162031" lon="41.5487764"/>
 <node id="5398581112" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5163054" lon="41.5482947"/>
 <node id="5398581113" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5165371" lon="41.5477806"/>
 <node id="5398581114" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5166707" lon="41.5476535"/>
 <node id="5398581115" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5170289" lon="41.5474265"/>
 <node id="5398581116" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5171241" lon="41.5473863"/>
 <node id="5398581117" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173797" lon="41.5474813"/>
 <node id="5398581118" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5174157" lon="41.5475334"/>
 <node id="5398581119" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5174347" lon="41.5476380"/>
 <node id="5398581120" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173755" lon="41.5479620"/>
 <node id="5398581521" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5175412" lon="41.5480386"/>
 <node id="5398581522" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5179580" lon="41.5482213"/>
 <node id="5398581523" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5181050" lon="41.5483716"/>
 <node id="5398581524" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5182370" lon="41.5486334"/>
 <node id="5398581525" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5185752" lon="41.5487165"/>
 <node id="5398581526" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5185489" lon="41.5494016"/>
 <node id="5398581527" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5182045" lon="41.5486147"/>
 <node id="5398581528" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172258" lon="41.5467644"/>
 <node id="5398581529" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172044" lon="41.5465266"/>
 <node id="5398581530" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172056" lon="41.5463258"/>
 <node id="5398581531" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172564" lon="41.5461826"/>
 <node id="5398581532" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5170732" lon="41.5460437"/>
 <node id="5398581533" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5171715" lon="41.5461502"/>
 <node id="5398581534" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173605" lon="41.5467402"/>
 <node id="5398581535" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5174298" lon="41.5469479"/>
 <node id="5398581536" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5175773" lon="41.5465888"/>
 <node id="5398581537" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5174228" lon="41.5463683"/>
 <node id="5398581538" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5175205" lon="41.5469534"/>
 <node id="5398581539" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173146" lon="41.5460974"/>
 <node id="5398581540" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172061" lon="41.5462068"/>
 <node id="5398581541" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5172998" lon="41.5464417"/>
 <node id="5398581542" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173375" lon="41.5465982"/>
 <node id="5398581543" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173545" lon="41.5461724"/>
 <node id="5398581544" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5176869" lon="41.5471087"/>
 <node id="5398581545" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5175875" lon="41.5470651"/>
 <node id="5398581546" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5179723" lon="41.5468371"/>
 <node id="5398581547" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5182092" lon="41.5469363"/>
 <node id="5398581548" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5186968" lon="41.5478130"/>
 <node id="5398581549" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5177066" lon="41.5473176"/>
 <node id="5398581550" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5182164" lon="41.5475056"/>
 <node id="5398581551" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5185520" lon="41.5477421"/>
 <node id="5398581552" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5192369" lon="41.5479539"/>
 <node id="5398581553" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5195387" lon="41.5479799"/>
 <node id="5398581554" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5200126" lon="41.5483915"/>
 <node id="5398581555" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5194396" lon="41.5483818"/>
 <node id="5398581556" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5195589" lon="41.5485041"/>
 <node id="5398581557" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5197137" lon="41.5486002"/>
 <node id="5398581558" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5191128" lon="41.5480855"/>
 <node id="5398581559" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5179919" lon="41.5478812"/>
 <node id="5398581560" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5179026" lon="41.5479688"/>
 <node id="5398581561" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5175258" lon="41.5473325"/>
 <node id="5398581562" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5173736" lon="41.5469686"/>
 <node id="5398581563" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5163394" lon="41.5454113"/>
 <node id="5398581564" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5165196" lon="41.5455425"/>
 <node id="5398581565" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5136184" lon="41.5437165"/>
 <node id="5398581566" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5137329" lon="41.5439438"/>
 <node id="5398581567" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5138934" lon="41.5441534"/>
 <node id="5398581568" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5140258" lon="41.5442693"/>
 <node id="5398581569" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5141656" lon="41.5443203"/>
 <node id="5398581570" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5142955" lon="41.5443075"/>
 <node id="5398581571" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:56Z" user="erenbostan" uid="899249" lat="41.5144333" lon="41.5442732"/>
 <node id="5398581572" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5145696" lon="41.5442394"/>
 <node id="5398581573" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5140971" lon="41.5443169"/>
 <node id="5398581574" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5138109" lon="41.5440616"/>
 <node id="5398581575" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5137737" lon="41.5442808"/>
 <node id="5398581576" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5139625" lon="41.5443955"/>
 <node id="5398581577" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5123087" lon="41.5436811"/>
 <node id="5398581578" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5116324" lon="41.5431522"/>
 <node id="5398581579" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5119312" lon="41.5434495"/>
 <node id="5398581580" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5113496" lon="41.5426772"/>
 <node id="5398581581" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5108152" lon="41.5414772"/>
 <node id="5398581582" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5110884" lon="41.5421407"/>
 <node id="5398581583" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5100709" lon="41.5395712"/>
 <node id="5398581584" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5094237" lon="41.5384703"/>
 <node id="5398581585" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5080274" lon="41.5372301"/>
 <node id="5398581586" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.4986557" lon="41.5324328"/>
 <node id="5398581587" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.4991991" lon="41.5326760"/>
 <node id="5398581588" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.4996768" lon="41.5328027"/>
 <node id="5398581589" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5002136" lon="41.5329129"/>
 <node id="5398581590" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5006736" lon="41.5329666"/>
 <node id="5398581591" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5010975" lon="41.5330565"/>
 <node id="5398581592" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5023912" lon="41.5337000"/>
 <node id="5398581593" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5026240" lon="41.5338338"/>
 <node id="5398581594" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5029456" lon="41.5340598"/>
 <node id="5398581595" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5042999" lon="41.5348402"/>
 <node id="5398581596" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5061086" lon="41.5357411"/>
 <node id="5398581597" visible="true" version="1" changeset="56186471" timestamp="2018-02-08T15:26:57Z" user="erenbostan" uid="899249" lat="41.5063973" lon="41.5359555"/>
 <node id="5748864205" visible="true" version="1" changeset="60530823" timestamp="2018-07-09T08:56:05Z" user="RGraefen" uid="3731755" lat="41.5766348" lon="41.6529970">
  <tag k="power" v="tower"/>
 </node>
 <node id="5748931100" visible="true" version="1" changeset="60531642" timestamp="2018-07-09T09:16:40Z" user="RGraefen" uid="3731755" lat="41.5772037" lon="41.6533880">
  <tag k="power" v="tower"/>
 </node>
 <node id="5813090320" visible="true" version="1" changeset="61412742" timestamp="2018-08-06T18:53:58Z" user="hnarko" uid="8652515" lat="41.5441706" lon="41.5639915"/>
 <node id="5813090321" visible="true" version="1" changeset="61412742" timestamp="2018-08-06T18:53:58Z" user="hnarko" uid="8652515" lat="41.5441805" lon="41.5641940"/>
 <node id="5838429433" visible="true" version="1" changeset="61748655" timestamp="2018-08-17T14:38:20Z" user="orca_horka" uid="8525896" lat="41.5224853" lon="41.5510628"/>
 <node id="5838458684" visible="true" version="1" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5402691" lon="41.5535143"/>
 <node id="5838459485" visible="true" version="1" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5429392" lon="41.5586722"/>
 <node id="5838459486" visible="true" version="1" changeset="61749144" timestamp="2018-08-17T14:54:53Z" user="orca_horka" uid="8525896" lat="41.5442762" lon="41.5607402"/>
 <node id="5838472247" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5219404" lon="41.5484452"/>
 <node id="5838472248" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216724" lon="41.5485594"/>
 <node id="5838472249" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5215948" lon="41.5486185"/>
 <node id="5838472251" visible="true" version="1" changeset="61749552" timestamp="2018-08-17T15:10:52Z" user="orca_horka" uid="8525896" lat="41.5218352" lon="41.5485662"/>
 <node id="5838479640" visible="true" version="1" changeset="61749711" timestamp="2018-08-17T15:17:40Z" user="orca_horka" uid="8525896" lat="41.5357920" lon="41.5512156"/>
 <node id="5838479641" visible="true" version="1" changeset="61749711" timestamp="2018-08-17T15:17:40Z" user="orca_horka" uid="8525896" lat="41.5295195" lon="41.5490779"/>
 <node id="5853449785" visible="true" version="1" changeset="61951446" timestamp="2018-08-24T10:51:46Z" user="Эд Холод" uid="8710850" lat="41.5248107" lon="41.5487788">
  <tag k="highway" v="bus_stop"/>
  <tag k="name:ru" v="Сарпи 1"/>
 </node>
 <node id="6023248535" visible="true" version="2" changeset="69994558" timestamp="2019-05-07T18:27:23Z" user="richter_fn" uid="371522" lat="41.5211102" lon="41.5493226"/>
 <node id="6023248536" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5220091" lon="41.5494901"/>
 <node id="6023248537" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219045" lon="41.5495061"/>
 <node id="6023248539" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5215889" lon="41.5495462"/>
 <node id="6023248541" visible="true" version="1" changeset="63990885" timestamp="2018-10-29T20:29:52Z" user="Sofico" uid="6806086" lat="41.5214890" lon="41.5496095"/>
 <node id="6241493615" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5215220" lon="41.5483503"/>
 <node id="6241493616" visible="true" version="2" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5218421" lon="41.5484317"/>
 <node id="6271823885" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225547" lon="41.5489165"/>
 <node id="6271823886" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225151" lon="41.5487614"/>
 <node id="6271823887" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225448" lon="41.5487479"/>
 <node id="6271823888" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225298" lon="41.5486892"/>
 <node id="6271823889" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225696" lon="41.5486711"/>
 <node id="6271823890" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5225860" lon="41.5487352"/>
 <node id="6271823891" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5226158" lon="41.5487216"/>
 <node id="6271823892" visible="true" version="1" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358" lat="41.5226540" lon="41.5488713"/>
 <node id="6375600237" visible="true" version="1" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5199215" lon="41.5476611"/>
 <node id="6375600238" visible="true" version="1" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5199651" lon="41.5476615"/>
 <node id="6375600239" visible="true" version="1" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156" lat="41.5195687" lon="41.5474814"/>
 <node id="6449823407" visible="true" version="1" changeset="69907177" timestamp="2019-05-05T15:09:52Z" user="richter_fn" uid="371522" lat="41.5777443" lon="41.6529626"/>
 <node id="6456231962" visible="true" version="1" changeset="69994558" timestamp="2019-05-07T18:27:20Z" user="richter_fn" uid="371522" lat="41.5218015" lon="41.5486675">
  <tag k="highway" v="bus_stop"/>
  <tag k="public_transport" v="platform"/>
  <tag k="shelter" v="yes"/>
 </node>
 <node id="6530152479" visible="true" version="1" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066" lat="41.5180255" lon="41.5472524"/>
 <node id="6557326087" visible="true" version="1" changeset="71397641" timestamp="2019-06-19T11:14:09Z" user="Georgie19" uid="10086999" lat="41.5323482" lon="41.5476783">
  <tag k="tourism" v="attraction"/>
 </node>
 <node id="6640872501" visible="true" version="1" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5216719" lon="41.5483918"/>
 <node id="6640872502" visible="true" version="1" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5219732" lon="41.5505555"/>
 <node id="6640872503" visible="true" version="1" changeset="72562210" timestamp="2019-07-23T14:32:32Z" user="And_12" uid="6345249" lat="41.5220752" lon="41.5505235"/>
 <node id="6712203785" visible="true" version="1" changeset="73381616" timestamp="2019-08-15T14:16:04Z" user="Zurab055" uid="4389364" lat="41.5225960" lon="41.5487984">
  <tag k="amenity" v="place_of_worship"/>
  <tag k="name" v="წმ.ანდრია პირველწოდებულის სახელობის ტაძარი"/>
 </node>
 <node id="6973832560" visible="true" version="1" changeset="77021079" timestamp="2019-11-13T15:13:30Z" user="ceever" uid="5592573" lat="41.5173529" lon="41.5456562">
  <tag k="highway" v="bus_stop"/>
  <tag k="name" v="Bus to Kemalpasa"/>
 </node>
 <node id="6973833202" visible="true" version="1" changeset="77021079" timestamp="2019-11-13T15:13:29Z" user="ceever" uid="5592573" lat="41.5157855" lon="41.5445443">
  <tag k="description" v="40 TL"/>
  <tag k="highway" v="bus_stop"/>
  <tag k="name" v="Bus to Trabzon"/>
 </node>
 <node id="6973836002" visible="true" version="1" changeset="77021079" timestamp="2019-11-13T15:13:28Z" user="ceever" uid="5592573" lat="41.5165312" lon="41.5448028">
  <tag k="highway" v="bus_stop"/>
  <tag k="name" v="Bus to Hopa"/>
 </node>
 <node id="7048758066" visible="true" version="1" changeset="78248315" timestamp="2019-12-11T08:31:34Z" user="Qotola" uid="8746535" lat="41.5421999" lon="41.5806607"/>
 <node id="7091048796" visible="true" version="1" changeset="78960872" timestamp="2019-12-28T17:29:00Z" user="Robot8A" uid="393359" lat="41.5168858" lon="41.5447469">
  <tag k="amenity" v="toilets"/>
 </node>
 <node id="7217136320" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5231536" lon="41.5494829"/>
 <node id="7217136321" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5230726" lon="41.5494754"/>
 <node id="7217136322" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5230622" lon="41.5496755"/>
 <node id="7217136323" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5231432" lon="41.5496830"/>
 <node id="7217136340" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5234772" lon="41.5491360"/>
 <node id="7217136341" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5233435" lon="41.5491129"/>
 <node id="7217136342" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5233323" lon="41.5492294"/>
 <node id="7217136343" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5234659" lon="41.5492524"/>
 <node id="7217136344" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5237329" lon="41.5491456"/>
 <node id="7217136345" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5236023" lon="41.5491170"/>
 <node id="7217136346" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5235780" lon="41.5493149"/>
 <node id="7217136347" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5237086" lon="41.5493435"/>
 <node id="7217136348" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5236478" lon="41.5495942"/>
 <node id="7217136349" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5235533" lon="41.5495759"/>
 <node id="7217136350" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5235360" lon="41.5497350"/>
 <node id="7217136351" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5236306" lon="41.5497533"/>
 <node id="7217136352" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5235802" lon="41.5489221"/>
 <node id="7217136353" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5234427" lon="41.5488995"/>
 <node id="7217136354" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5234269" lon="41.5490709"/>
 <node id="7217136355" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5235645" lon="41.5490934"/>
 <node id="7217136356" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5233236" lon="41.5489074"/>
 <node id="7217136357" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5232132" lon="41.5488909"/>
 <node id="7217136358" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5231994" lon="41.5490549"/>
 <node id="7217136359" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5233099" lon="41.5490714"/>
 <node id="7217136360" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5226462" lon="41.5490663"/>
 <node id="7217136361" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5225130" lon="41.5490541"/>
 <node id="7217136362" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5224931" lon="41.5494403"/>
 <node id="7217136363" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5226263" lon="41.5494525"/>
 <node id="7217136364" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5226990" lon="41.5490695"/>
 <node id="7217136365" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5227307" lon="41.5486418"/>
 <node id="7217136366" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5224427" lon="41.5486037"/>
 <node id="7217136367" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5224110" lon="41.5490314"/>
 <node id="7217136368" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5223529" lon="41.5484255"/>
 <node id="7217136381" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5265458" lon="41.5493148"/>
 <node id="7217136382" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5256781" lon="41.5492586"/>
 <node id="7217136383" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5256880" lon="41.5495756"/>
 <node id="7217136384" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5259080" lon="41.5497275"/>
 <node id="7217140485" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5261676" lon="41.5498068"/>
 <node id="7217140486" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5263110" lon="41.5497870"/>
 <node id="7217140487" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5264717" lon="41.5496945"/>
 <node id="7217140488" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5297334" lon="41.5499742"/>
 <node id="7217140489" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5288244" lon="41.5499368"/>
 <node id="7217140490" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5276497" lon="41.5497781"/>
 <node id="7217140491" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5268316" lon="41.5498528"/>
 <node id="7217140492" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5259016" lon="41.5499742"/>
 <node id="7217140493" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5252303" lon="41.5498715"/>
 <node id="7217140494" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5240626" lon="41.5502357"/>
 <node id="7217140495" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5233423" lon="41.5519169"/>
 <node id="7217140496" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5232165" lon="41.5535421"/>
 <node id="7217140497" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5231046" lon="41.5555222"/>
 <node id="7217140498" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5237899" lon="41.5557183"/>
 <node id="7217140499" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5243003" lon="41.5577451"/>
 <node id="7217140500" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5249646" lon="41.5565776"/>
 <node id="7217140501" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5255800" lon="41.5550925"/>
 <node id="7217140502" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5263421" lon="41.5539437"/>
 <node id="7217140503" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5261813" lon="41.5532806"/>
 <node id="7217140504" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5265170" lon="41.5526174"/>
 <node id="7217140505" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5273560" lon="41.5528042"/>
 <node id="7217140506" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5285587" lon="41.5521504"/>
 <node id="7217140507" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5289572" lon="41.5514686"/>
 <node id="7217140508" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5295026" lon="41.5514686"/>
 <node id="7217140509" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5298173" lon="41.5505813"/>
 <node id="7217140716" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5226274" lon="41.5498172"/>
 <node id="7217140717" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5225246" lon="41.5497508"/>
 <node id="7217140718" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5224566" lon="41.5499384"/>
 <node id="7217140719" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5225594" lon="41.5500048"/>
 <node id="7217140720" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5242371" lon="41.5492715"/>
 <node id="7217140721" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5241349" lon="41.5492601"/>
 <node id="7217140722" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5241492" lon="41.5490328"/>
 <node id="7217140723" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5242513" lon="41.5490442"/>
 <node id="7217140724" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5240962" lon="41.5492069"/>
 <node id="7217140725" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5240012" lon="41.5492151"/>
 <node id="7217140726" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5240105" lon="41.5494068"/>
 <node id="7217140727" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5241055" lon="41.5493986"/>
 <node id="7217140728" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5244214" lon="41.5491980"/>
 <node id="7217140729" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5243482" lon="41.5491861"/>
 <node id="7217140730" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5243237" lon="41.5494554"/>
 <node id="7217140731" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5243968" lon="41.5494673"/>
 <node id="7217140732" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5247275" lon="41.5492155"/>
 <node id="7217140733" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5246087" lon="41.5492028"/>
 <node id="7217140734" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5245963" lon="41.5494114"/>
 <node id="7217140735" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5247151" lon="41.5494240"/>
 <node id="7217140736" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5249482" lon="41.5492122"/>
 <node id="7217140737" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5248601" lon="41.5491996"/>
 <node id="7217140738" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5248410" lon="41.5494383"/>
 <node id="7217140739" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064" lat="41.5249290" lon="41.5494509"/>
 <node id="7386154576" visible="true" version="1" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5199982" lon="41.5475250"/>
 <node id="7386154577" visible="true" version="1" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5200441" lon="41.5473330"/>
 <node id="7386154578" visible="true" version="1" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5202533" lon="41.5474223"/>
 <node id="7386154579" visible="true" version="1" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168" lat="41.5202075" lon="41.5476142"/>
 <node id="7424360032" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5235275" lon="41.5492757"/>
 <node id="7424360033" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5232544" lon="41.5492764"/>
 <node id="7424360034" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5235125" lon="41.5492771"/>
 <node id="7424360035" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5235436" lon="41.5492710"/>
 <node id="7424360036" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5235541" lon="41.5492550"/>
 <node id="7424360037" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516" lat="41.5235627" lon="41.5492268"/>
 <node id="7560512631" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4971532" lon="41.5445036"/>
 <node id="7560512632" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4947065" lon="41.5395910"/>
 <node id="7560512633" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4946944" lon="41.5396554"/>
 <node id="7560512634" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4946904" lon="41.5400308"/>
 <node id="7560512635" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4947266" lon="41.5401970"/>
 <node id="7560512636" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4949877" lon="41.5403847"/>
 <node id="7560512637" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4950801" lon="41.5405671"/>
 <node id="7560512638" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4950922" lon="41.5406904"/>
 <node id="7560512639" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4950721" lon="41.5409157"/>
 <node id="7560512640" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4952328" lon="41.5415539"/>
 <node id="7560512641" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4952689" lon="41.5419615"/>
 <node id="7560512642" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4955863" lon="41.5427713"/>
 <node id="7560512643" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4956988" lon="41.5432325"/>
 <node id="7560512644" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4957671" lon="41.5433505"/>
 <node id="7560512645" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4958274" lon="41.5433934"/>
 <node id="7560512646" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4959077" lon="41.5434149"/>
 <node id="7560512647" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4962291" lon="41.5434524"/>
 <node id="7560512648" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4963175" lon="41.5434900"/>
 <node id="7560512649" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4963898" lon="41.5435865"/>
 <node id="7560512650" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4964742" lon="41.5437527"/>
 <node id="7560512651" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4965545" lon="41.5438761"/>
 <node id="7560512652" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4970206" lon="41.5442193"/>
 <node id="7560512653" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4973902" lon="41.5447288"/>
 <node id="7560512654" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4977478" lon="41.5448844"/>
 <node id="7560512655" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4978522" lon="41.5449863"/>
 <node id="7560512656" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4979085" lon="41.5451311"/>
 <node id="7560512657" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4979165" lon="41.5454528"/>
 <node id="7560512658" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4979526" lon="41.5455762"/>
 <node id="7560512659" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4980812" lon="41.5457585"/>
 <node id="7560512660" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4981977" lon="41.5460213"/>
 <node id="7560512661" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4983383" lon="41.5462412"/>
 <node id="7560512662" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4984267" lon="41.5463431"/>
 <node id="7560512663" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4986437" lon="41.5464933"/>
 <node id="7560512664" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4991901" lon="41.5467775"/>
 <node id="7560512665" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4992463" lon="41.5468258"/>
 <node id="7560512666" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4993267" lon="41.5469491"/>
 <node id="7560512667" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4995878" lon="41.5472173"/>
 <node id="7560512668" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4997525" lon="41.5475015"/>
 <node id="7560512669" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4998007" lon="41.5475605"/>
 <node id="7560512670" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.4998931" lon="41.5476088"/>
 <node id="7560512671" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5000177" lon="41.5476195"/>
 <node id="7560512672" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5001181" lon="41.5477053"/>
 <node id="7560512673" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5002708" lon="41.5477536"/>
 <node id="7560512674" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5006605" lon="41.5481827"/>
 <node id="7560512675" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5008774" lon="41.5482738"/>
 <node id="7560512676" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5010944" lon="41.5484294"/>
 <node id="7560512677" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5012912" lon="41.5486010"/>
 <node id="7560512678" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5013595" lon="41.5487190"/>
 <node id="7560512679" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5014921" lon="41.5493625"/>
 <node id="7560512680" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5013515" lon="41.5493625"/>
 <node id="7560512681" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5012028" lon="41.5491319"/>
 <node id="7560512682" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5011104" lon="41.5490407"/>
 <node id="7560512683" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5010582" lon="41.5490193"/>
 <node id="7560512684" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5008172" lon="41.5491158"/>
 <node id="7560512685" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864" lat="41.5006765" lon="41.5492392"/>
 <node id="7627032086" visible="true" version="1" changeset="86738447" timestamp="2020-06-16T19:53:29Z" user="Брудная Пачвара" uid="442387" lat="41.5321378" lon="41.5498084">
  <tag k="amenity" v="bar"/>
  <tag k="cuisine" v="georgian"/>
  <tag k="name:en" v="Homemade wine"/>
  <tag k="name:ru" v="Домашнее вино"/>
 </node>
 <node id="7786603006" visible="true" version="1" changeset="88965791" timestamp="2020-08-05T07:36:07Z" user="lenux" uid="563357" lat="41.5663114" lon="41.4233725"/>
 <node id="7837957778" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274" lat="41.5214461" lon="41.5494273"/>
 <node id="7837957779" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274" lat="41.5213927" lon="41.5493670"/>
 <node id="7837957780" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274" lat="41.5212182" lon="41.5496422"/>
 <node id="7837957781" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274" lat="41.5212716" lon="41.5497025"/>
 <node id="7837957782" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221242" lon="41.5486262"/>
 <node id="7837957783" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5220645" lon="41.5492327"/>
 <node id="7837957784" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219364" lon="41.5492102"/>
 <node id="7838028385" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219962" lon="41.5486037"/>
 <node id="7863010715" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5215118" lon="41.5487094"/>
 <node id="7863010716" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219879" lon="41.5488092">
  <tag k="amenity" v="fast_food"/>
 </node>
 <node id="7863010717" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5220219" lon="41.5492555"/>
 <node id="7863010718" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221154" lon="41.5484630"/>
 <node id="7863010719" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5220511" lon="41.5493046"/>
 <node id="7863010720" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5217962" lon="41.5492716"/>
 <node id="7863010721" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5217909" lon="41.5493451"/>
 <node id="7863010722" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5217140" lon="41.5493351"/>
 <node id="7863010723" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5217199" lon="41.5492538"/>
 <node id="7863010724" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5215683" lon="41.5492341"/>
 <node id="7863010725" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5214972" lon="41.5493559"/>
 <node id="7863010726" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5216873" lon="41.5494096"/>
 <node id="7863010727" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5217213" lon="41.5494467"/>
 <node id="7863010728" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219052" lon="41.5494715"/>
 <node id="7863010729" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5219065" lon="41.5494335"/>
 <node id="7863010730" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5220407" lon="41.5494482"/>
 <node id="7863010731" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5222842" lon="41.5487025"/>
 <node id="7863010732" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5223344" lon="41.5490324"/>
 <node id="7863010733" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5222837" lon="41.5490262"/>
 <node id="7863010734" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5222660" lon="41.5492859"/>
 <node id="7863010735" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5223498" lon="41.5492961"/>
 <node id="7863010736" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5223362" lon="41.5494952"/>
 <node id="7863010737" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221065" lon="41.5494673"/>
 <node id="7863010738" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221142" lon="41.5493536"/>
 <node id="7863010739" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221776" lon="41.5493613"/>
 <node id="7863010740" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5222075" lon="41.5489236"/>
 <node id="7863010741" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221669" lon="41.5489186"/>
 <node id="7863010742" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5221825" lon="41.5486900"/>
 <node id="7863010743" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229681" lon="41.5487443"/>
 <node id="7863010744" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227578" lon="41.5487166"/>
 <node id="7863010745" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227328" lon="41.5490562"/>
 <node id="7863010746" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229431" lon="41.5490839"/>
 <node id="7863010747" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229856" lon="41.5494070"/>
 <node id="7863010748" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229727" lon="41.5496930"/>
 <node id="7863010749" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228509" lon="41.5496831"/>
 <node id="7863010750" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228638" lon="41.5493971"/>
 <node id="7863010751" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228269" lon="41.5496340"/>
 <node id="7863010752" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227144" lon="41.5496317"/>
 <node id="7863010753" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227134" lon="41.5497113"/>
 <node id="7863010754" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228259" lon="41.5497137"/>
 <node id="7863010755" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5230063" lon="41.5499101"/>
 <node id="7863010756" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228287" lon="41.5499336"/>
 <node id="7863010757" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5228463" lon="41.5501716"/>
 <node id="7863010758" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5230239" lon="41.5501481"/>
 <node id="7863010759" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5234640" lon="41.5496723"/>
 <node id="7863010760" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233826" lon="41.5496767"/>
 <node id="7863010761" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233857" lon="41.5497800"/>
 <node id="7863010762" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5234672" lon="41.5497755"/>
 <node id="7863010763" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233514" lon="41.5497478"/>
 <node id="7863010764" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232274" lon="41.5497555"/>
 <node id="7863010765" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232311" lon="41.5498628"/>
 <node id="7863010766" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233552" lon="41.5498551"/>
 <node id="7863010767" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233577" lon="41.5495380"/>
 <node id="7863010768" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232255" lon="41.5495848"/>
 <node id="7863010769" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232463" lon="41.5496894"/>
 <node id="7863010770" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5233785" lon="41.5496425"/>
 <node id="7863010771" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5235210" lon="41.5493311"/>
 <node id="7863010772" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232262" lon="41.5493197"/>
 <node id="7863010773" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5232240" lon="41.5494200"/>
 <node id="7863010774" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5235188" lon="41.5494313"/>
 <node id="7863010775" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231609" lon="41.5493099"/>
 <node id="7863010776" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227616" lon="41.5492613"/>
 <node id="7863010777" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227549" lon="41.5493596"/>
 <node id="7863010778" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231542" lon="41.5494084"/>
 <node id="7863010779" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231675" lon="41.5491543"/>
 <node id="7863010780" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229687" lon="41.5491262"/>
 <node id="7863010781" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229605" lon="41.5492298"/>
 <node id="7863010782" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231593" lon="41.5492579"/>
 <node id="7863010783" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229254" lon="41.5491329"/>
 <node id="7863010784" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227412" lon="41.5491104"/>
 <node id="7863033246" visible="true" version="1" changeset="90212285" timestamp="2020-08-31T21:53:51Z" user="A-U-X" uid="5673274" lat="41.5314998" lon="41.5536602"/>
 <node id="7863039885" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5227345" lon="41.5492083"/>
 <node id="7863039886" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5229187" lon="41.5492308"/>
 <node id="7863039887" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231775" lon="41.5489882"/>
 <node id="7863039888" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5230533" lon="41.5489722"/>
 <node id="7863039889" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5230450" lon="41.5490875"/>
 <node id="7863039890" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5231692" lon="41.5491035"/>
 <node id="7863039891" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5238484" lon="41.5490569"/>
 <node id="7863039892" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5238438" lon="41.5488993"/>
 <node id="7863039893" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5237490" lon="41.5489043"/>
 <node id="7863039894" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274" lat="41.5237536" lon="41.5490619"/>
 <way id="4523936" visible="true" version="10" changeset="56186471" timestamp="2018-02-08T15:27:08Z" user="erenbostan" uid="899249">
  <nd ref="586118662"/>
  <nd ref="1696764938"/>
  <nd ref="1696764934"/>
  <nd ref="1696764932"/>
  <nd ref="1696764930"/>
  <nd ref="1696764902"/>
  <nd ref="1696764896"/>
  <nd ref="1696764889"/>
  <nd ref="1696764887"/>
  <nd ref="1696764884"/>
  <nd ref="1696764878"/>
  <nd ref="5398581105"/>
  <nd ref="1696764861"/>
  <nd ref="1696764857"/>
  <nd ref="1696764849"/>
  <nd ref="1696764846"/>
  <nd ref="1696764843"/>
  <nd ref="1696764838"/>
  <nd ref="1696764834"/>
  <nd ref="1696764830"/>
  <nd ref="1696764807"/>
  <nd ref="1696764803"/>
  <nd ref="1696764799"/>
  <nd ref="1696764797"/>
  <nd ref="1696764783"/>
  <nd ref="1696764795"/>
  <nd ref="1696764794"/>
  <nd ref="1696764764"/>
  <nd ref="1696764762"/>
  <nd ref="1696764756"/>
  <nd ref="1696764743"/>
  <nd ref="1696764752"/>
  <nd ref="1696764737"/>
  <nd ref="1696764727"/>
  <nd ref="1696764735"/>
  <nd ref="1696764733"/>
  <nd ref="1696764714"/>
  <nd ref="1696764712"/>
  <nd ref="1696764711"/>
  <nd ref="1696764710"/>
  <nd ref="1696764693"/>
  <nd ref="1696764687"/>
  <nd ref="1696764677"/>
  <nd ref="1696764675"/>
  <nd ref="1696764669"/>
  <nd ref="1696764655"/>
  <nd ref="1696764650"/>
  <nd ref="1696764637"/>
  <nd ref="1696764633"/>
  <nd ref="1696764624"/>
  <nd ref="1696764619"/>
  <nd ref="1696764617"/>
  <nd ref="1696764613"/>
  <nd ref="1696764611"/>
  <nd ref="1696764597"/>
  <nd ref="1696764590"/>
  <nd ref="5059633749"/>
  <nd ref="5059633750"/>
  <nd ref="5059633748"/>
  <nd ref="5059633736"/>
  <nd ref="5059633727"/>
  <nd ref="5059633725"/>
  <nd ref="5059632015"/>
  <nd ref="5059631998"/>
  <nd ref="5059613289"/>
  <nd ref="5059631997"/>
  <nd ref="5059631996"/>
  <nd ref="5059631961"/>
  <nd ref="5059613290"/>
  <nd ref="5059614360"/>
  <nd ref="1696764477"/>
  <nd ref="5059607994"/>
  <nd ref="1696764474"/>
  <nd ref="1696764464"/>
  <nd ref="1696764441"/>
  <nd ref="1696764440"/>
  <nd ref="1696764436"/>
  <nd ref="5059607995"/>
  <nd ref="5059607996"/>
  <nd ref="5059607997"/>
  <nd ref="5059607998"/>
  <nd ref="5059607999"/>
  <nd ref="5059608000"/>
  <nd ref="5059608001"/>
  <nd ref="5059608002"/>
  <nd ref="5059608004"/>
  <nd ref="5059608003"/>
  <nd ref="1696764387"/>
  <nd ref="1696764352"/>
  <nd ref="5059608005"/>
  <nd ref="5059608006"/>
  <nd ref="5059608007"/>
  <nd ref="5059608008"/>
  <nd ref="1696764305"/>
  <nd ref="5059608009"/>
  <nd ref="1696764298"/>
  <nd ref="1696764296"/>
  <nd ref="5059608010"/>
  <nd ref="1696764280"/>
  <nd ref="5059608011"/>
  <nd ref="5059608012"/>
  <nd ref="5059608013"/>
  <nd ref="1696764260"/>
  <nd ref="1696764257"/>
  <nd ref="5059608014"/>
  <nd ref="5059608015"/>
  <nd ref="1696764250"/>
  <nd ref="1696764247"/>
  <nd ref="1696764229"/>
  <nd ref="1696764217"/>
  <nd ref="1696764218"/>
  <nd ref="1696764227"/>
  <nd ref="1696764245"/>
  <nd ref="1696764269"/>
  <nd ref="1696764271"/>
  <nd ref="1696764294"/>
  <nd ref="1696764316"/>
  <nd ref="1696764360"/>
  <nd ref="1696764390"/>
  <nd ref="1696764416"/>
  <nd ref="1696764427"/>
  <tag k="natural" v="coastline"/>
 </way>
 <way id="36737725" visible="true" version="10" changeset="88965791" timestamp="2020-08-05T07:36:07Z" user="lenux" uid="563357">
  <nd ref="356982901"/>
  <nd ref="7786603006"/>
  <nd ref="586118662"/>
  <tag k="admin_level" v="2"/>
  <tag k="border_type" v="nation"/>
  <tag k="boundary" v="administrative"/>
  <tag k="boundary_type" v="territorial_waters"/>
  <tag k="left:country" v="Georgia; GE"/>
  <tag k="left:state" v="Turkey"/>
  <tag k="maritime" v="yes"/>
  <tag k="name" v="Border - Turkey - Georgia"/>
  <tag k="note" v="fixed"/>
  <tag k="right:country" v="Turkey; TR"/>
  <tag k="right:state" v="Georgia"/>
  <tag k="source" v="Topographic map 1:50 000"/>
 </way>
 <way id="45981000" visible="true" version="9" changeset="63371825" timestamp="2018-10-10T08:29:00Z" user="Qotola" uid="8746535">
  <nd ref="586118662"/>
  <nd ref="1802526054"/>
  <nd ref="4254191709"/>
  <nd ref="846876983"/>
  <nd ref="427027712"/>
  <nd ref="427027714"/>
  <nd ref="427027715"/>
  <nd ref="427027717"/>
  <nd ref="427027719"/>
  <nd ref="427027720"/>
  <nd ref="427027722"/>
  <nd ref="427027723"/>
  <nd ref="427027724"/>
  <nd ref="427027725"/>
  <nd ref="427027726"/>
  <nd ref="427027727"/>
  <nd ref="427027728"/>
  <nd ref="427027729"/>
  <nd ref="427027730"/>
  <nd ref="427027731"/>
  <nd ref="427027732"/>
  <nd ref="427027733"/>
  <nd ref="427027734"/>
  <nd ref="427027735"/>
  <nd ref="427027736"/>
  <nd ref="427027738"/>
  <nd ref="427027739"/>
  <nd ref="427027740"/>
  <nd ref="427027741"/>
  <nd ref="427027743"/>
  <nd ref="427027744"/>
  <nd ref="427027746"/>
  <nd ref="427027748"/>
  <nd ref="427027749"/>
  <nd ref="427027751"/>
  <nd ref="427027752"/>
  <tag k="admin_level" v="2"/>
  <tag k="border_type" v="nation"/>
  <tag k="boundary" v="administrative"/>
  <tag k="left:country" v="Georgia; GE"/>
  <tag k="name" v="Border - Turkey - Georgia"/>
  <tag k="note" v="fixed"/>
  <tag k="right:country" v="Turkey; TR"/>
  <tag k="source" v="Topographic map 1:50 000"/>
 </way>
 <way id="79589963" visible="true" version="9" changeset="74907794" timestamp="2019-09-25T12:33:30Z" user="Nesim" uid="1386706">
  <nd ref="928842272"/>
  <nd ref="5198064596"/>
  <nd ref="5198064597"/>
  <nd ref="1295886042"/>
  <nd ref="928842273"/>
  <nd ref="1295886387"/>
  <nd ref="1295886354"/>
  <nd ref="928842274"/>
  <nd ref="928842275"/>
  <nd ref="928842276"/>
  <nd ref="1295886345"/>
  <nd ref="928842277"/>
  <nd ref="928842278"/>
  <nd ref="928842279"/>
  <nd ref="5198108599"/>
  <nd ref="5198108600"/>
  <nd ref="1295871544"/>
  <nd ref="5198108598"/>
  <nd ref="928842272"/>
  <tag k="is_in" v="Turkey, Artvin, Kemalpaşa"/>
  <tag k="is_in:country" v="Turkey"/>
  <tag k="is_in:country_code" v="TR"/>
  <tag k="is_in:district" v="Kemalpaşa"/>
  <tag k="is_in:region" v="Artvin"/>
  <tag k="landuse" v="residential"/>
  <tag k="name" v="Sarp"/>
  <tag k="name:en" v="Sarpi"/>
  <tag k="name:ka" v="სარფი"/>
 </way>
 <way id="79591496" visible="true" version="10" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="928923399"/>
  <nd ref="5198069034"/>
  <nd ref="5198069035"/>
  <nd ref="5198069033"/>
  <nd ref="5198069036"/>
  <nd ref="5198069038"/>
  <nd ref="5198069037"/>
  <nd ref="5198069039"/>
  <nd ref="928923400"/>
  <nd ref="5198069040"/>
  <nd ref="5198069041"/>
  <nd ref="5198069042"/>
  <nd ref="5198069043"/>
  <nd ref="5198069044"/>
  <nd ref="5198069045"/>
  <nd ref="928923401"/>
  <nd ref="5198064591"/>
  <nd ref="928923402"/>
  <nd ref="1844021706"/>
  <nd ref="5198064594"/>
  <nd ref="5198064592"/>
  <nd ref="5198064606"/>
  <nd ref="5838472251"/>
  <nd ref="5198064607"/>
  <nd ref="7217136368"/>
  <nd ref="928923399"/>
  <tag k="is_in:country" v="Georgia"/>
  <tag k="landuse" v="residential"/>
  <tag k="name" v="სარფი"/>
  <tag k="name:en" v="Sarpi"/>
  <tag k="name:ka" v="სარფი"/>
  <tag k="name:ru" v="Сарпи"/>
  <tag k="place" v="village"/>
 </way>
 <way id="89931682" visible="true" version="3" changeset="53340052" timestamp="2017-10-29T12:08:40Z" user="Sal73x" uid="1293386">
  <nd ref="1042394859"/>
  <nd ref="1042394843"/>
  <nd ref="5198064608"/>
  <nd ref="1042394839"/>
  <nd ref="1042394856"/>
  <nd ref="1042394859"/>
  <tag k="building" v="yes"/>
  <tag k="name" v="Duty Free"/>
  <tag k="shop" v="supermarket"/>
 </way>
 <way id="114389802" visible="true" version="4" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066">
  <nd ref="1295871531"/>
  <nd ref="1295871508"/>
  <nd ref="5198110250"/>
  <nd ref="5198110230"/>
  <nd ref="1295871533"/>
  <nd ref="1295871531"/>
  <tag k="building" v="yes"/>
  <tag k="layer" v="1"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="114389803" visible="true" version="3" changeset="17148625" timestamp="2013-07-30T06:58:49Z" user="Dmitry2013" uid="1185631">
  <nd ref="1295871566"/>
  <nd ref="1295871542"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114389804" visible="true" version="3" changeset="17148625" timestamp="2013-07-30T06:58:49Z" user="Dmitry2013" uid="1185631">
  <nd ref="1295871571"/>
  <nd ref="1295871551"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114389805" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:11Z" user="erenbostan" uid="899249">
  <nd ref="1295871550"/>
  <nd ref="5398581581"/>
  <nd ref="1295871535"/>
  <nd ref="5398581582"/>
  <nd ref="1295871513"/>
  <nd ref="5398581580"/>
  <nd ref="1295871561"/>
  <nd ref="5398581578"/>
  <nd ref="1295871530"/>
  <nd ref="5398581579"/>
  <nd ref="1295871573"/>
  <nd ref="5398581577"/>
  <nd ref="1295871566"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="114389806" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:40Z" user="Sal73x" uid="1293386">
  <nd ref="1295871558"/>
  <nd ref="5198069049"/>
  <nd ref="5198069046"/>
  <nd ref="1295871568"/>
  <nd ref="1295871546"/>
  <nd ref="1295871539"/>
  <nd ref="1295871558"/>
  <tag k="amenity" v="shelter"/>
 </way>
 <way id="114389807" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:10Z" user="erenbostan" uid="899249">
  <nd ref="1295871548"/>
  <nd ref="5198108619"/>
  <nd ref="5198108616"/>
  <nd ref="1295871559"/>
  <nd ref="1295871526"/>
  <nd ref="5198110221"/>
  <nd ref="5198108620"/>
  <nd ref="1295871570"/>
  <nd ref="1295871548"/>
  <tag k="building" v="yes"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="114389808" visible="true" version="5" changeset="56186471" timestamp="2018-02-08T15:27:11Z" user="erenbostan" uid="899249">
  <nd ref="1295871542"/>
  <nd ref="5398581575"/>
  <nd ref="5398581576"/>
  <nd ref="5100406300"/>
  <nd ref="1295871571"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="114389809" visible="true" version="5" changeset="56186471" timestamp="2018-02-08T15:27:11Z" user="erenbostan" uid="899249">
  <nd ref="1295871510"/>
  <nd ref="5059649287"/>
  <nd ref="5059649290"/>
  <nd ref="5059649289"/>
  <nd ref="5059649288"/>
  <nd ref="1295871575"/>
  <nd ref="5398581585"/>
  <nd ref="1295871538"/>
  <nd ref="1295871564"/>
  <nd ref="1295871540"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="114389810" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:11Z" user="erenbostan" uid="899249">
  <nd ref="1295871540"/>
  <nd ref="5398581584"/>
  <nd ref="1295871537"/>
  <nd ref="5398581583"/>
  <nd ref="1295871519"/>
  <nd ref="1295871550"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114389811" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:10Z" user="erenbostan" uid="899249">
  <nd ref="1295871541"/>
  <nd ref="5398581563"/>
  <nd ref="5398581564"/>
  <nd ref="1295871528"/>
  <nd ref="5398581532"/>
  <nd ref="5398581533"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114389812" visible="true" version="5" changeset="56186471" timestamp="2018-02-08T15:27:12Z" user="erenbostan" uid="899249">
  <nd ref="5059649272"/>
  <nd ref="5059649281"/>
  <nd ref="5398581596"/>
  <nd ref="5398581597"/>
  <nd ref="1295871510"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114389815" visible="true" version="3" changeset="17148625" timestamp="2013-07-30T06:58:50Z" user="Dmitry2013" uid="1185631">
  <nd ref="1295871551"/>
  <nd ref="1295871541"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="114389816" visible="true" version="6" changeset="56186471" timestamp="2018-02-08T15:27:12Z" user="erenbostan" uid="899249">
  <nd ref="1295871560"/>
  <nd ref="5059649280"/>
  <nd ref="5059649279"/>
  <nd ref="2291888275"/>
  <nd ref="1295871517"/>
  <nd ref="5398581594"/>
  <nd ref="5059649274"/>
  <nd ref="5059649273"/>
  <nd ref="5398581595"/>
  <nd ref="5059649272"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="114389817" visible="true" version="1" changeset="8214395" timestamp="2011-05-22T10:13:34Z" user="katpatuka" uid="17497">
  <nd ref="1295871553"/>
  <nd ref="1295871520"/>
  <nd ref="1295871515"/>
  <nd ref="1295871563"/>
  <nd ref="1295871553"/>
  <tag k="building" v="yes"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="114389818" visible="true" version="5" changeset="79519831" timestamp="2020-01-13T14:05:44Z" user="Robot8A" uid="393359">
  <nd ref="1295861739"/>
  <nd ref="5398581586"/>
  <nd ref="5398581587"/>
  <nd ref="5398581588"/>
  <nd ref="5398581589"/>
  <nd ref="5398581590"/>
  <nd ref="5398581591"/>
  <nd ref="1295871560"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="name" v="Kemalpaşa Tüneli"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="114392376" visible="true" version="2" changeset="51968302" timestamp="2017-09-12T10:35:34Z" user="erkinalp" uid="113816">
  <nd ref="1295886192"/>
  <nd ref="1295886010"/>
  <nd ref="1295886348"/>
  <nd ref="1295886080"/>
  <nd ref="1295885941"/>
  <nd ref="1295886390"/>
  <nd ref="1295886239"/>
  <nd ref="1295886320"/>
  <nd ref="1295886179"/>
  <nd ref="1295886139"/>
  <nd ref="1295885985"/>
  <nd ref="1295886216"/>
  <nd ref="1295886056"/>
  <nd ref="1295886021"/>
  <nd ref="1295886363"/>
  <nd ref="1295886047"/>
  <nd ref="1295886395"/>
  <nd ref="1295886353"/>
  <nd ref="1295886207"/>
  <nd ref="1295885946"/>
  <nd ref="1295886282"/>
  <nd ref="1295886243"/>
  <nd ref="1295886084"/>
  <nd ref="1295886372"/>
  <nd ref="1295886224"/>
  <nd ref="1295886186"/>
  <nd ref="1295886027"/>
  <nd ref="5100406290"/>
  <nd ref="5100406291"/>
  <tag k="highway" v="tertiary"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="114392377" visible="true" version="2" changeset="51452135" timestamp="2017-08-26T07:34:59Z" user="penom" uid="436145">
  <nd ref="1295886292"/>
  <nd ref="1295886271"/>
  <nd ref="1295886011"/>
  <nd ref="1295886349"/>
  <nd ref="1295886307"/>
  <nd ref="1295886166"/>
  <nd ref="1295885949"/>
  <nd ref="1295886286"/>
  <nd ref="1295886246"/>
  <nd ref="1295886087"/>
  <nd ref="1295886324"/>
  <nd ref="1295886183"/>
  <nd ref="1295886142"/>
  <nd ref="1295885990"/>
  <nd ref="1295886175"/>
  <nd ref="1295886016"/>
  <nd ref="1295885981"/>
  <nd ref="1295886315"/>
  <nd ref="1295886051"/>
  <nd ref="1295886399"/>
  <nd ref="1295886357"/>
  <nd ref="1295886211"/>
  <nd ref="5059649328"/>
  <nd ref="1295886292"/>
  <tag k="landuse" v="residential"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="114392385" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:09Z" user="erenbostan" uid="899249">
  <nd ref="1295886256"/>
  <nd ref="5398581119"/>
  <nd ref="5398581118"/>
  <nd ref="5398581117"/>
  <nd ref="1295886100"/>
  <nd ref="5398581116"/>
  <nd ref="1295886342"/>
  <tag k="highway" v="residential"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="115656283" visible="true" version="3" changeset="90212285" timestamp="2020-08-31T21:53:51Z" user="A-U-X" uid="5673274">
  <nd ref="1306050752"/>
  <nd ref="1306050245"/>
  <nd ref="1306049367"/>
  <nd ref="1306050046"/>
  <nd ref="1306047975"/>
  <nd ref="1306048947"/>
  <nd ref="1306047475"/>
  <nd ref="1306047241"/>
  <nd ref="1306048438"/>
  <nd ref="1306047247"/>
  <nd ref="1306050040"/>
  <nd ref="1306050856"/>
  <nd ref="1306050788"/>
  <nd ref="1306047394"/>
  <nd ref="1306047410"/>
  <nd ref="1306047547"/>
  <nd ref="1306048115"/>
  <nd ref="1306048726"/>
  <nd ref="1306050622"/>
  <nd ref="1306047731"/>
  <nd ref="1306048846"/>
  <nd ref="1306048409"/>
  <nd ref="1306047787"/>
  <nd ref="1306048342"/>
  <nd ref="1306049764"/>
  <nd ref="1306049238"/>
  <nd ref="1306049285"/>
  <nd ref="1306049834"/>
  <nd ref="1306048170"/>
  <nd ref="1306047400"/>
  <nd ref="1306047565"/>
  <nd ref="1306047454"/>
  <nd ref="1306049253"/>
  <nd ref="1306048145"/>
  <nd ref="1306049255"/>
  <nd ref="1306050229"/>
  <nd ref="1306048270"/>
  <nd ref="1306047262"/>
  <nd ref="1306049356"/>
  <nd ref="1306048197"/>
  <nd ref="1306049221"/>
  <nd ref="1306048887"/>
  <nd ref="1306049966"/>
  <nd ref="1306047739"/>
  <nd ref="1306047266"/>
  <nd ref="1306048422"/>
  <nd ref="1306047550"/>
  <nd ref="1306048334"/>
  <nd ref="1306047825"/>
  <nd ref="1306048529"/>
  <nd ref="1306047441"/>
  <nd ref="1306049066"/>
  <nd ref="1306047273"/>
  <nd ref="1306049131"/>
  <nd ref="1306049742"/>
  <nd ref="1306049239"/>
  <nd ref="1306050399"/>
  <nd ref="1306050936"/>
  <nd ref="1306047540"/>
  <nd ref="1306048090"/>
  <nd ref="1306049743"/>
  <nd ref="1306049472"/>
  <nd ref="1306047344"/>
  <nd ref="1306047271"/>
  <nd ref="1306047430"/>
  <nd ref="1306050593"/>
  <nd ref="1306050202"/>
  <nd ref="1306049919"/>
  <nd ref="1306049291"/>
  <nd ref="1306049109"/>
  <nd ref="1306050749"/>
  <nd ref="1306047647"/>
  <nd ref="1306049898"/>
  <nd ref="1306049995"/>
  <nd ref="1306048388"/>
  <nd ref="1306050130"/>
  <nd ref="1306049189"/>
  <nd ref="1306048923"/>
  <nd ref="1306049634"/>
  <nd ref="1306048494"/>
  <nd ref="1306050633"/>
  <nd ref="1306047473"/>
  <nd ref="1306050458"/>
  <nd ref="1306049586"/>
  <nd ref="1306049024"/>
  <nd ref="1306049187"/>
  <nd ref="1306047552"/>
  <nd ref="1306049865"/>
  <nd ref="1306047312"/>
  <nd ref="1306049256"/>
  <nd ref="1306050901"/>
  <nd ref="1306049166"/>
  <nd ref="1306047380"/>
  <nd ref="1306048770"/>
  <nd ref="1306048725"/>
  <nd ref="1306049340"/>
  <nd ref="1306047715"/>
  <nd ref="1306048473"/>
  <nd ref="1306047225"/>
  <nd ref="1306047605"/>
  <nd ref="1306049956"/>
  <nd ref="1306047940"/>
  <nd ref="1306050013"/>
  <nd ref="1306047219"/>
  <nd ref="1306048291"/>
  <nd ref="1306047240"/>
  <nd ref="1306049220"/>
  <nd ref="1306049215"/>
  <nd ref="1306049351"/>
  <nd ref="1306048449"/>
  <nd ref="7863033246"/>
  <nd ref="1306050601"/>
  <nd ref="1306048220"/>
  <nd ref="1306047285"/>
  <nd ref="1306048005"/>
  <nd ref="1306049083"/>
  <nd ref="1306049121"/>
  <nd ref="1306047522"/>
  <nd ref="1306047849"/>
  <nd ref="1306047683"/>
  <nd ref="1306049983"/>
  <nd ref="1306050486"/>
  <nd ref="1306047448"/>
  <nd ref="1306050524"/>
  <nd ref="1306050249"/>
  <nd ref="1306049524"/>
  <nd ref="1306048822"/>
  <nd ref="1306047480"/>
  <nd ref="1306047689"/>
  <nd ref="1306050182"/>
  <nd ref="1306049347"/>
  <nd ref="1306049929"/>
  <nd ref="1306047488"/>
  <nd ref="1306047656"/>
  <nd ref="1306049397"/>
  <nd ref="1306047431"/>
  <nd ref="1306049587"/>
  <nd ref="1306047845"/>
  <nd ref="1306049385"/>
  <nd ref="1306049057"/>
  <nd ref="1306050801"/>
  <nd ref="1306049372"/>
  <nd ref="1306048029"/>
  <nd ref="1306049535"/>
  <nd ref="1306049530"/>
  <nd ref="1306049867"/>
  <nd ref="1306049869"/>
  <nd ref="1306049790"/>
  <nd ref="1306047357"/>
  <nd ref="1306049923"/>
  <nd ref="1306050243"/>
  <nd ref="1306047913"/>
  <nd ref="1306047371"/>
  <nd ref="1306050293"/>
  <nd ref="1306049897"/>
  <nd ref="1306048687"/>
  <nd ref="1306048892"/>
  <nd ref="1306049366"/>
  <nd ref="1306049036"/>
  <nd ref="1306049314"/>
  <nd ref="1306047536"/>
  <nd ref="1306047256"/>
  <nd ref="1306050817"/>
  <nd ref="1306049085"/>
  <nd ref="1306049193"/>
  <nd ref="1306048777"/>
  <nd ref="1306050452"/>
  <nd ref="1306049202"/>
  <nd ref="1306050431"/>
  <nd ref="1306050450"/>
  <nd ref="1306049299"/>
  <nd ref="1306047418"/>
  <nd ref="1306048161"/>
  <nd ref="1306048823"/>
  <nd ref="1306049176"/>
  <nd ref="1306047585"/>
  <nd ref="1306050528"/>
  <nd ref="1306049063"/>
  <nd ref="1306048913"/>
  <nd ref="1306047508"/>
  <nd ref="1306047836"/>
  <nd ref="1306049501"/>
  <nd ref="1306050327"/>
  <nd ref="1306050750"/>
  <nd ref="1306048407"/>
  <nd ref="1306047346"/>
  <nd ref="1306049241"/>
  <nd ref="1306047458"/>
  <nd ref="1306047367"/>
  <nd ref="1306049234"/>
  <nd ref="1306047988"/>
  <nd ref="1306047299"/>
  <nd ref="1306047873"/>
  <nd ref="1306048336"/>
  <nd ref="1306049140"/>
  <nd ref="1306050644"/>
  <nd ref="1306048087"/>
  <nd ref="1306049191"/>
  <nd ref="1306047424"/>
  <nd ref="1306048650"/>
  <nd ref="1306050652"/>
  <nd ref="1306048435"/>
  <nd ref="1306047477"/>
  <nd ref="1306050919"/>
  <nd ref="1306047598"/>
  <nd ref="1306050402"/>
  <nd ref="1306047379"/>
  <nd ref="1306047842"/>
  <nd ref="1306049688"/>
  <nd ref="1306049518"/>
  <nd ref="1306048905"/>
  <nd ref="1306048907"/>
  <nd ref="1306050824"/>
  <nd ref="1306047252"/>
  <nd ref="1306047281"/>
  <nd ref="1306049828"/>
  <nd ref="1306049693"/>
  <nd ref="1306047906"/>
  <nd ref="1306047293"/>
  <nd ref="1306047295"/>
  <nd ref="1306049427"/>
  <nd ref="1306047296"/>
  <nd ref="1306050756"/>
  <nd ref="1306048020"/>
  <nd ref="1306050712"/>
  <nd ref="1306047501"/>
  <nd ref="1306049967"/>
  <nd ref="1306048014"/>
  <nd ref="1306050899"/>
  <nd ref="1306049097"/>
  <nd ref="1306048976"/>
  <nd ref="1306050905"/>
  <nd ref="1306049126"/>
  <nd ref="1306050839"/>
  <nd ref="1306048252"/>
  <nd ref="1306047494"/>
  <nd ref="1306048873"/>
  <nd ref="1306050085"/>
  <nd ref="1306047373"/>
  <nd ref="1306050645"/>
  <nd ref="1306050607"/>
  <nd ref="1306047416"/>
  <nd ref="1306049514"/>
  <nd ref="1306049996"/>
  <nd ref="1306049870"/>
  <nd ref="1306047442"/>
  <nd ref="1306047291"/>
  <nd ref="1306049289"/>
  <nd ref="1306049135"/>
  <nd ref="1306050120"/>
  <nd ref="1306049111"/>
  <nd ref="1306047461"/>
  <nd ref="1306050270"/>
  <nd ref="1306049425"/>
  <nd ref="1306049184"/>
  <nd ref="1306047471"/>
  <nd ref="1306048288"/>
  <nd ref="1306048699"/>
  <nd ref="1306050847"/>
  <nd ref="1306047232"/>
  <nd ref="1306049896"/>
  <nd ref="1306047650"/>
  <nd ref="1306049258"/>
  <nd ref="1306050786"/>
  <nd ref="1306050506"/>
  <nd ref="1306049891"/>
  <nd ref="1306050577"/>
  <nd ref="1306047235"/>
  <nd ref="1306047489"/>
  <nd ref="1306047223"/>
  <nd ref="1306049498"/>
  <nd ref="1306050934"/>
  <nd ref="1306049611"/>
  <nd ref="5813090321"/>
  <nd ref="1306047844"/>
  <nd ref="1306050867"/>
  <nd ref="5813090320"/>
  <nd ref="1306047889"/>
  <nd ref="1306048008"/>
  <nd ref="1306049098"/>
  <nd ref="1306047861"/>
  <nd ref="1306049054"/>
  <nd ref="1306048706"/>
  <nd ref="1306049070"/>
  <nd ref="1306049731"/>
  <nd ref="1306048159"/>
  <tag k="highway" v="residential"/>
  <tag k="source" v="JumpStart International"/>
  <tag k="surface" v="unpaved"/>
 </way>
 <way id="115656339" visible="true" version="2" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="1306048532"/>
  <nd ref="7863010717"/>
  <tag k="highway" v="service"/>
  <tag k="source" v="JumpStart International"/>
  <tag k="surface" v="stone"/>
 </way>
 <way id="115656343" visible="true" version="10" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="1306049850"/>
  <nd ref="1306049964"/>
  <nd ref="1306049497"/>
  <nd ref="1306050837"/>
  <nd ref="1306049123"/>
  <nd ref="1306047776"/>
  <nd ref="1306047834"/>
  <nd ref="1306050000"/>
  <nd ref="1306049027"/>
  <nd ref="1306048322"/>
  <nd ref="1306048767"/>
  <nd ref="1306047944"/>
  <nd ref="1306048050"/>
  <nd ref="1306047567"/>
  <nd ref="1306048268"/>
  <nd ref="1306047231"/>
  <nd ref="1306050364"/>
  <nd ref="1306048317"/>
  <nd ref="1306048630"/>
  <nd ref="1306047564"/>
  <nd ref="1306049376"/>
  <nd ref="1306047406"/>
  <nd ref="1306047479"/>
  <nd ref="1306049092"/>
  <nd ref="1306050461"/>
  <nd ref="1306048658"/>
  <nd ref="1306049268"/>
  <nd ref="1306049433"/>
  <nd ref="1306049169"/>
  <nd ref="1306047590"/>
  <nd ref="1306047310"/>
  <nd ref="1306050604"/>
  <nd ref="1306049025"/>
  <nd ref="1306048824"/>
  <nd ref="1306047269"/>
  <nd ref="1306050382"/>
  <nd ref="1306050719"/>
  <nd ref="1306050038"/>
  <nd ref="1306049317"/>
  <nd ref="1306049440"/>
  <nd ref="1306047798"/>
  <nd ref="1306049629"/>
  <nd ref="5838429433"/>
  <nd ref="1306049729"/>
  <nd ref="1306047532"/>
  <nd ref="1306047413"/>
  <nd ref="1306050071"/>
  <nd ref="1306049152"/>
  <nd ref="1306049368"/>
  <nd ref="1306047445"/>
  <nd ref="1306050523"/>
  <nd ref="6640872502"/>
  <nd ref="6640872503"/>
  <nd ref="1306047297"/>
  <nd ref="1306049274"/>
  <nd ref="1306050752"/>
  <nd ref="1306048669"/>
  <nd ref="1306048911"/>
  <nd ref="1306048903"/>
  <nd ref="1306049327"/>
  <nd ref="1306048032"/>
  <nd ref="1306050840"/>
  <nd ref="1306047750"/>
  <nd ref="1306050648"/>
  <nd ref="5198064593"/>
  <nd ref="1306047383"/>
  <nd ref="1306049862"/>
  <nd ref="1306048366"/>
  <nd ref="5100409458"/>
  <nd ref="5198064605"/>
  <nd ref="1306048532"/>
  <nd ref="1844021734"/>
  <tag k="highway" v="residential"/>
  <tag k="source" v="JumpStart International"/>
  <tag k="surface" v="paved"/>
 </way>
 <way id="115656359" visible="true" version="18" changeset="66702185" timestamp="2019-01-28T11:17:53Z" user="brogo" uid="63107">
  <nd ref="6241493615"/>
  <nd ref="182612804"/>
  <nd ref="5198064600"/>
  <nd ref="1581246947"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="115754460" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:09Z" user="erenbostan" uid="899249">
  <nd ref="1295886256"/>
  <nd ref="1306916134"/>
  <nd ref="5398581120"/>
  <nd ref="1306918944"/>
  <nd ref="5398581521"/>
  <nd ref="1306917333"/>
  <nd ref="1306915208"/>
  <nd ref="1306918417"/>
  <nd ref="5398581522"/>
  <nd ref="1306916493"/>
  <nd ref="5398581523"/>
  <nd ref="1306919154"/>
  <nd ref="1306917697"/>
  <nd ref="5398581527"/>
  <nd ref="5398581524"/>
  <nd ref="1306915580"/>
  <nd ref="1306918631"/>
  <nd ref="1306918653"/>
  <nd ref="5398581525"/>
  <nd ref="1306916940"/>
  <nd ref="1306919381"/>
  <nd ref="5398581526"/>
  <nd ref="1306918055"/>
  <nd ref="1306915980"/>
  <nd ref="1306918845"/>
  <nd ref="1306917209"/>
  <nd ref="1306915020"/>
  <nd ref="1306918325"/>
  <nd ref="1306916302"/>
  <nd ref="1306919058"/>
  <nd ref="1306917556"/>
  <nd ref="1306915430"/>
  <nd ref="1306918542"/>
  <nd ref="1306916773"/>
  <nd ref="1306919272"/>
  <nd ref="1306915798"/>
  <nd ref="1306918731"/>
  <nd ref="1306917033"/>
  <nd ref="1306914804"/>
  <nd ref="1306918142"/>
  <nd ref="1306916113"/>
  <tag k="highway" v="unclassified"/>
  <tag k="source" v="Bing"/>
 </way>
 <way id="120229279" visible="true" version="17" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="1306048067"/>
  <nd ref="1306050255"/>
  <nd ref="1306047470"/>
  <nd ref="1306049646"/>
  <nd ref="1306050891"/>
  <nd ref="1306049199"/>
  <nd ref="7863010718"/>
  <nd ref="4254185872"/>
  <nd ref="5838472247"/>
  <nd ref="6241493616"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="90"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="169081384" visible="true" version="7" changeset="78248315" timestamp="2019-12-11T08:31:34Z" user="Qotola" uid="8746535">
  <nd ref="27835892"/>
  <nd ref="27844953"/>
  <nd ref="27856661"/>
  <nd ref="27841064"/>
  <nd ref="27835839"/>
  <nd ref="27844533"/>
  <nd ref="1080358626"/>
  <nd ref="1080358411"/>
  <nd ref="1080358634"/>
  <nd ref="27871859"/>
  <nd ref="1080358462"/>
  <nd ref="1080358562"/>
  <nd ref="1080358639"/>
  <nd ref="27859981"/>
  <nd ref="1080358341"/>
  <nd ref="27870896"/>
  <nd ref="1080358352"/>
  <nd ref="1080358628"/>
  <nd ref="27839789"/>
  <nd ref="1696765057"/>
  <nd ref="1696765056"/>
  <nd ref="1696765054"/>
  <nd ref="1696765053"/>
  <nd ref="1696765051"/>
  <nd ref="1696765049"/>
  <nd ref="1696765047"/>
  <nd ref="1696765045"/>
  <nd ref="1696765044"/>
  <nd ref="1696765026"/>
  <nd ref="1696765023"/>
  <nd ref="1696765021"/>
  <nd ref="1696765019"/>
  <nd ref="1696765017"/>
  <nd ref="1696765016"/>
  <nd ref="1696765015"/>
  <nd ref="1696765014"/>
  <nd ref="1696765013"/>
  <nd ref="1696765012"/>
  <nd ref="1696765011"/>
  <nd ref="1696765007"/>
  <nd ref="1696765006"/>
  <nd ref="1696765003"/>
  <nd ref="1696764999"/>
  <nd ref="1696764996"/>
  <nd ref="1696764994"/>
  <nd ref="1696764991"/>
  <nd ref="1696764988"/>
  <nd ref="1802526121"/>
  <nd ref="1802526194"/>
  <nd ref="1802526090"/>
  <nd ref="1696764963"/>
  <nd ref="1696764959"/>
  <nd ref="1696764956"/>
  <nd ref="1696764955"/>
  <nd ref="1696764952"/>
  <nd ref="1696764943"/>
  <nd ref="1696764940"/>
  <nd ref="586118662"/>
  <tag k="natural" v="coastline"/>
 </way>
 <way id="169081388" visible="true" version="4" changeset="67102494" timestamp="2019-02-11T14:38:16Z" user="John_Harris" uid="3406358">
  <nd ref="1802526085"/>
  <nd ref="1802526147"/>
  <nd ref="1802526087"/>
  <nd ref="1802526111"/>
  <nd ref="1802526152"/>
  <nd ref="1802526180"/>
  <nd ref="1802526212"/>
  <nd ref="1802526149"/>
  <nd ref="1802526053"/>
  <nd ref="5198069024"/>
  <nd ref="1802526122"/>
  <nd ref="1802526139"/>
  <nd ref="1802526054"/>
  <nd ref="586118662"/>
  <nd ref="1696764940"/>
  <nd ref="1696764943"/>
  <nd ref="1696764952"/>
  <nd ref="1696764955"/>
  <nd ref="1696764956"/>
  <nd ref="1696764959"/>
  <nd ref="1696764963"/>
  <nd ref="1802526090"/>
  <nd ref="1802526085"/>
  <tag k="leisure" v="beach_resort"/>
  <tag k="name" v="სარფის პლაჟი"/>
  <tag k="name:en" v="Sarpi Beach"/>
  <tag k="name:ru" v="Пляж Сарпи"/>
  <tag k="natural" v="beach"/>
 </way>
 <way id="169081390" visible="true" version="2" changeset="23227708" timestamp="2014-06-27T19:36:34Z" user="brogo" uid="63107">
  <nd ref="1696764971"/>
  <nd ref="1696764976"/>
  <nd ref="1696764969"/>
  <nd ref="1696764965"/>
  <nd ref="1696764961"/>
  <nd ref="1696764967"/>
  <nd ref="1802526089"/>
  <nd ref="1696764971"/>
  <tag k="natural" v="coastline"/>
 </way>
 <way id="173623564" visible="true" version="9" changeset="63636421" timestamp="2018-10-18T08:38:49Z" user="Qotola" uid="8746535">
  <nd ref="846876983"/>
  <nd ref="5198069050"/>
  <nd ref="5198064603"/>
  <nd ref="1844021730"/>
  <nd ref="5198064598"/>
  <nd ref="5198064602"/>
  <nd ref="1844021663"/>
  <nd ref="5198064601"/>
  <nd ref="5198064599"/>
  <nd ref="5198069029"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="173623565" visible="true" version="1" changeset="12548668" timestamp="2012-07-30T14:09:32Z" user="moszkva ter" uid="495146">
  <nd ref="1844021656"/>
  <nd ref="1844021705"/>
  <nd ref="1844021696"/>
  <nd ref="1844021660"/>
  <nd ref="1844021631"/>
  <nd ref="1844021629"/>
  <nd ref="1844021620"/>
  <nd ref="1844021618"/>
  <nd ref="1844021651"/>
  <nd ref="1844021639"/>
  <nd ref="1844021643"/>
  <nd ref="1844021671"/>
  <nd ref="1844021700"/>
  <nd ref="1844021634"/>
  <nd ref="1844021601"/>
  <nd ref="1844021683"/>
  <nd ref="1844021668"/>
  <nd ref="1844021673"/>
  <nd ref="1844021667"/>
  <nd ref="1844021704"/>
  <nd ref="1844021718"/>
  <nd ref="1844021670"/>
  <nd ref="1844021726"/>
  <nd ref="1844021613"/>
  <nd ref="1844021662"/>
  <nd ref="1844021658"/>
  <nd ref="1844021615"/>
  <nd ref="1844021627"/>
  <nd ref="1844021624"/>
  <nd ref="1844021622"/>
  <nd ref="1844021692"/>
  <nd ref="1844021666"/>
  <nd ref="1844021679"/>
  <nd ref="1844021617"/>
  <nd ref="1844021587"/>
  <nd ref="1844021591"/>
  <nd ref="1844021687"/>
  <nd ref="1844021681"/>
  <tag k="natural" v="cliff"/>
 </way>
 <way id="173623566" visible="true" version="2" changeset="53340052" timestamp="2017-10-29T12:08:40Z" user="Sal73x" uid="1293386">
  <nd ref="1844021701"/>
  <nd ref="1844021595"/>
  <tag k="barrier" v="fence"/>
 </way>
 <way id="173623567" visible="true" version="5" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168">
  <nd ref="1844021609"/>
  <nd ref="1844021604"/>
  <nd ref="5198110254"/>
  <nd ref="1844021702"/>
  <nd ref="5198110255"/>
  <nd ref="1844021610"/>
  <nd ref="1844021636"/>
  <nd ref="7386154577"/>
  <nd ref="7386154578"/>
  <nd ref="1844021672"/>
  <nd ref="1844021665"/>
  <nd ref="1844021595"/>
  <nd ref="5198069023"/>
  <tag k="barrier" v="fence"/>
 </way>
 <way id="220069833" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:12Z" user="erenbostan" uid="899249">
  <nd ref="1295871517"/>
  <nd ref="5398581593"/>
  <nd ref="2291888280"/>
  <tag k="highway" v="trunk_link"/>
  <tag k="oneway" v="yes"/>
 </way>
 <way id="220069835" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:12Z" user="erenbostan" uid="899249">
  <nd ref="2291888278"/>
  <nd ref="5398581592"/>
  <nd ref="2291888275"/>
  <tag k="highway" v="trunk_link"/>
  <tag k="oneway" v="yes"/>
 </way>
 <way id="220069847" visible="true" version="4" changeset="56186471" timestamp="2018-02-08T15:27:08Z" user="erenbostan" uid="899249">
  <nd ref="2291888302"/>
  <nd ref="5398581104"/>
  <nd ref="2291888301"/>
  <nd ref="5398581103"/>
  <nd ref="5398581102"/>
  <nd ref="2291888298"/>
  <nd ref="2291888299"/>
  <nd ref="2291888302"/>
  <tag k="addr:country" v="TR"/>
  <tag k="amenity" v="place_of_worship"/>
  <tag k="building" v="yes"/>
  <tag k="religion" v="muslim"/>
 </way>
 <way id="234159660" visible="true" version="1" changeset="17416228" timestamp="2013-08-19T19:10:40Z" user="bigalxyz123" uid="481116">
  <nd ref="2424579549"/>
  <nd ref="2424579571"/>
  <nd ref="2424579557"/>
  <nd ref="2424579563"/>
  <nd ref="2424579594"/>
  <nd ref="2424579573"/>
  <nd ref="2424579581"/>
  <nd ref="2424579574"/>
  <nd ref="2424579564"/>
  <nd ref="2424579553"/>
  <nd ref="2424579588"/>
  <nd ref="2424579586"/>
  <nd ref="2424579562"/>
  <nd ref="2424579590"/>
  <nd ref="2424579559"/>
  <nd ref="2424579561"/>
  <nd ref="2424579542"/>
  <nd ref="2424579551"/>
  <nd ref="2424579556"/>
  <nd ref="2424579554"/>
  <nd ref="2424579550"/>
  <nd ref="2424579548"/>
  <nd ref="2424579544"/>
  <nd ref="2424579570"/>
  <nd ref="2424579575"/>
  <nd ref="2424579565"/>
  <nd ref="2424579546"/>
  <nd ref="2424579593"/>
  <nd ref="2424579587"/>
  <nd ref="2424579543"/>
  <tag k="highway" v="track"/>
 </way>
 <way id="304004444" visible="true" version="2" changeset="51968205" timestamp="2017-09-12T10:31:50Z" user="erkinalp" uid="113816">
  <nd ref="3085199009"/>
  <nd ref="3085199011"/>
  <nd ref="3085199013"/>
  <nd ref="3085199014"/>
  <nd ref="3085199016"/>
  <nd ref="3085199018"/>
  <nd ref="3085199019"/>
  <nd ref="3085199020"/>
  <nd ref="3085199021"/>
  <nd ref="3085199022"/>
  <nd ref="3085199023"/>
  <nd ref="3085199024"/>
  <nd ref="3085199025"/>
  <nd ref="3085199026"/>
  <nd ref="3085199027"/>
  <nd ref="3085199028"/>
  <nd ref="3085199029"/>
  <nd ref="3085199030"/>
  <nd ref="3085199031"/>
  <nd ref="3085199034"/>
  <nd ref="3085199035"/>
  <nd ref="3085199032"/>
  <nd ref="3085199033"/>
  <nd ref="3085199036"/>
  <nd ref="3085199037"/>
  <nd ref="3085199038"/>
  <nd ref="3085199039"/>
  <nd ref="3085199040"/>
  <nd ref="3085199041"/>
  <nd ref="3085199042"/>
  <nd ref="3085199043"/>
  <nd ref="3085199044"/>
  <nd ref="3085199045"/>
  <nd ref="3085199046"/>
  <nd ref="3085199047"/>
  <nd ref="3085199048"/>
  <nd ref="3085199049"/>
  <nd ref="3085199050"/>
  <nd ref="3085199051"/>
  <nd ref="3085199052"/>
  <nd ref="3085199053"/>
  <nd ref="3085199054"/>
  <nd ref="3085199055"/>
  <nd ref="3085199056"/>
  <nd ref="3085199057"/>
  <nd ref="3085199058"/>
  <nd ref="3085199059"/>
  <nd ref="3085199060"/>
  <nd ref="3085199061"/>
  <nd ref="3085199062"/>
  <nd ref="3085199064"/>
  <nd ref="3085199065"/>
  <nd ref="3085199063"/>
  <nd ref="3085199066"/>
  <nd ref="3085199067"/>
  <nd ref="3085199068"/>
  <nd ref="5100394022"/>
  <nd ref="5100394023"/>
  <nd ref="5100394024"/>
  <nd ref="5100394025"/>
  <nd ref="5100394026"/>
  <nd ref="5100394027"/>
  <nd ref="5100394028"/>
  <nd ref="5100394029"/>
  <nd ref="5100394030"/>
  <nd ref="5100394031"/>
  <nd ref="5100394032"/>
  <nd ref="5100394033"/>
  <nd ref="5100394034"/>
  <nd ref="5100394035"/>
  <nd ref="5100394036"/>
  <nd ref="5100394037"/>
  <nd ref="5100394038"/>
  <nd ref="5100394039"/>
  <nd ref="5100394040"/>
  <nd ref="5100394041"/>
  <nd ref="5100394042"/>
  <nd ref="5100394043"/>
  <nd ref="5100394044"/>
  <nd ref="5100394045"/>
  <nd ref="5100394046"/>
  <nd ref="5100394047"/>
  <nd ref="5100394048"/>
  <nd ref="5100394049"/>
  <nd ref="5100394050"/>
  <nd ref="5100394051"/>
  <nd ref="5100394052"/>
  <nd ref="5100394053"/>
  <nd ref="5100394054"/>
  <nd ref="5100394055"/>
  <nd ref="5100394056"/>
  <nd ref="5100394057"/>
  <nd ref="5100394058"/>
  <nd ref="5100394059"/>
  <nd ref="5100394060"/>
  <nd ref="5100394061"/>
  <nd ref="5100394062"/>
  <nd ref="5100394063"/>
  <nd ref="5100394064"/>
  <nd ref="5100394065"/>
  <nd ref="5100394066"/>
  <nd ref="5100394067"/>
  <nd ref="5100394068"/>
  <nd ref="5100394069"/>
  <nd ref="5100394070"/>
  <nd ref="5100394071"/>
  <nd ref="5100394072"/>
  <nd ref="5100394073"/>
  <nd ref="5100394074"/>
  <nd ref="5100394075"/>
  <nd ref="5100394076"/>
  <nd ref="5100394077"/>
  <nd ref="5100394078"/>
  <nd ref="5100394079"/>
  <nd ref="5100394080"/>
  <nd ref="5100394081"/>
  <nd ref="5100394082"/>
  <nd ref="5100394083"/>
  <nd ref="5100394084"/>
  <nd ref="5100394085"/>
  <nd ref="5100394086"/>
  <nd ref="5100394087"/>
  <nd ref="5100394088"/>
  <nd ref="5100394089"/>
  <nd ref="5100394090"/>
  <nd ref="5100394091"/>
  <nd ref="5100394092"/>
  <nd ref="5100394093"/>
  <nd ref="5100394094"/>
  <nd ref="5100394095"/>
  <nd ref="5100394096"/>
  <nd ref="5100394097"/>
  <nd ref="5100394098"/>
  <nd ref="5100394099"/>
  <nd ref="5100394100"/>
  <nd ref="5100394101"/>
  <nd ref="5100394102"/>
  <nd ref="5100394103"/>
  <nd ref="5100394104"/>
  <nd ref="5100394105"/>
  <nd ref="5100394106"/>
  <nd ref="5100394107"/>
  <nd ref="5100394108"/>
  <nd ref="5100394109"/>
  <nd ref="5100394110"/>
  <nd ref="5100394111"/>
  <nd ref="5100394112"/>
  <nd ref="5100394113"/>
  <nd ref="5100394114"/>
  <nd ref="5100394115"/>
  <nd ref="5100394116"/>
  <nd ref="5100394117"/>
  <tag k="highway" v="residential"/>
 </way>
 <way id="426106733" visible="true" version="12" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="1844021734"/>
  <nd ref="7863010715"/>
  <nd ref="5838472249"/>
  <nd ref="5838472248"/>
  <nd ref="6241493616"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="90"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="426106855" visible="true" version="8" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156">
  <nd ref="4254191709"/>
  <nd ref="4254191719"/>
  <nd ref="5198108603"/>
  <nd ref="4254191712"/>
  <nd ref="6375600238"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="name" v="სარფი"/>
  <tag k="name:ru" v="sarp"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="D 010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="426106856" visible="true" version="6" changeset="62786933" timestamp="2018-09-21T07:44:42Z" user="evgenykatyshev" uid="98099">
  <nd ref="5198108604"/>
  <nd ref="5398581541"/>
  <nd ref="5398581542"/>
  <nd ref="5398581534"/>
  <nd ref="5398581535"/>
  <nd ref="1295871562"/>
  <nd ref="5198110257"/>
  <nd ref="2291888304"/>
  <nd ref="5398581549"/>
  <nd ref="2291888305"/>
  <nd ref="5398581550"/>
  <nd ref="5198108611"/>
  <nd ref="5398581551"/>
  <nd ref="5398581548"/>
  <nd ref="846877160"/>
  <nd ref="5198108610"/>
  <nd ref="5398581552"/>
  <nd ref="5198108609"/>
  <nd ref="5398581553"/>
  <nd ref="846876983"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="D 010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="524044635" visible="true" version="1" changeset="51968230" timestamp="2017-09-12T10:32:59Z" user="erkinalp" uid="113816">
  <nd ref="5100399487"/>
  <nd ref="5100399488"/>
  <nd ref="5100399489"/>
  <nd ref="5100399490"/>
  <nd ref="5100399491"/>
  <nd ref="5100399492"/>
  <nd ref="5100399493"/>
  <nd ref="5100399494"/>
  <nd ref="5100399495"/>
  <nd ref="5100399496"/>
  <nd ref="5100399497"/>
  <nd ref="5100399498"/>
  <nd ref="5100399499"/>
  <nd ref="5100399500"/>
  <nd ref="5100399501"/>
  <nd ref="5100399502"/>
  <nd ref="5100399503"/>
  <nd ref="5100399504"/>
  <nd ref="5100399505"/>
  <nd ref="5100399506"/>
  <nd ref="5100399507"/>
  <nd ref="5100399508"/>
  <nd ref="5100399509"/>
  <nd ref="5100399510"/>
  <nd ref="5100399511"/>
  <nd ref="5100399512"/>
  <nd ref="5100399513"/>
  <nd ref="5100399514"/>
  <nd ref="5100399515"/>
  <tag k="highway" v="track"/>
 </way>
 <way id="524045826" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:08Z" user="erenbostan" uid="899249">
  <nd ref="5100406292"/>
  <nd ref="5398581092"/>
  <nd ref="5100406293"/>
  <nd ref="5398581091"/>
  <nd ref="5100406294"/>
  <nd ref="5398581088"/>
  <nd ref="5100406295"/>
  <nd ref="5100406296"/>
  <nd ref="5100406297"/>
  <nd ref="5100406298"/>
  <nd ref="5398581084"/>
  <nd ref="5100406299"/>
  <nd ref="2291888287"/>
  <tag k="highway" v="trunk"/>
  <tag k="lanes" v="1"/>
  <tag k="oneway" v="yes"/>
 </way>
 <way id="524045827" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:08Z" user="erenbostan" uid="899249">
  <nd ref="5100406292"/>
  <nd ref="846877091"/>
  <nd ref="5398581090"/>
  <nd ref="1295886111"/>
  <nd ref="5398581089"/>
  <nd ref="846876882"/>
  <nd ref="5398581086"/>
  <nd ref="5398581087"/>
  <nd ref="846876608"/>
  <nd ref="2291888288"/>
  <nd ref="5398581085"/>
  <nd ref="2291888287"/>
  <nd ref="5398581083"/>
  <nd ref="846876452"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97;AH5"/>
  <tag k="lanes" v="1"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="524045828" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:07Z" user="erenbostan" uid="899249">
  <nd ref="846876452"/>
  <nd ref="5398581082"/>
  <nd ref="2291888286"/>
  <nd ref="846877021"/>
  <nd ref="2291888285"/>
  <nd ref="2291888284"/>
  <nd ref="846876771"/>
  <nd ref="5398581081"/>
  <nd ref="846876538"/>
  <nd ref="2291888283"/>
  <nd ref="2291888282"/>
  <nd ref="846876245"/>
  <nd ref="5398581080"/>
  <nd ref="5398581079"/>
  <nd ref="5398581078"/>
  <nd ref="846877256"/>
  <nd ref="5398581077"/>
  <nd ref="5059649291"/>
  <nd ref="5059649292"/>
  <nd ref="5059649293"/>
  <nd ref="5059649294"/>
  <nd ref="846877106"/>
  <nd ref="846876913"/>
  <nd ref="5059649296"/>
  <nd ref="5059649300"/>
  <nd ref="5059649301"/>
  <nd ref="5059649302"/>
  <nd ref="846877246"/>
  <nd ref="5059649304"/>
  <nd ref="2291888280"/>
  <nd ref="2291888278"/>
  <nd ref="5059649309"/>
  <nd ref="5059649310"/>
  <nd ref="5059649311"/>
  <nd ref="5059649312"/>
  <nd ref="846877101"/>
  <nd ref="5059649313"/>
  <nd ref="5059649314"/>
  <nd ref="2291888274"/>
  <nd ref="846876900"/>
  <nd ref="5059649316"/>
  <nd ref="5059649315"/>
  <nd ref="846876623"/>
  <nd ref="5059649318"/>
  <nd ref="5059649319"/>
  <nd ref="846876318"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97;AH5"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="524045829" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:11Z" user="erenbostan" uid="899249">
  <nd ref="846876375"/>
  <nd ref="5398581572"/>
  <nd ref="5398581571"/>
  <nd ref="5398581570"/>
  <nd ref="5398581569"/>
  <nd ref="5398581573"/>
  <nd ref="5398581568"/>
  <nd ref="5398581567"/>
  <nd ref="5398581574"/>
  <nd ref="5398581566"/>
  <nd ref="5398581565"/>
  <tag k="highway" v="service"/>
  <tag k="service" v="emergency_access"/>
 </way>
 <way id="536644495" visible="true" version="10" changeset="63990885" timestamp="2018-10-29T20:29:52Z" user="Sofico" uid="6806086">
  <nd ref="1042394843"/>
  <nd ref="5198064609"/>
  <nd ref="5198064610"/>
  <nd ref="5198064611"/>
  <nd ref="5198064612"/>
  <nd ref="6023248535"/>
  <nd ref="5198064614"/>
  <nd ref="5198064615"/>
  <nd ref="5198064616"/>
  <nd ref="5198064617"/>
  <nd ref="5198069023"/>
  <nd ref="5198064618"/>
  <nd ref="5198064619"/>
  <nd ref="5198064620"/>
  <nd ref="5198069021"/>
  <nd ref="5198069022"/>
  <nd ref="1042394843"/>
  <tag k="addr:housenumber" v="1"/>
  <tag k="building" v="yes"/>
  <tag k="name" v="სარფი"/>
 </way>
 <way id="536644496" visible="true" version="3" changeset="56186471" timestamp="2018-02-08T15:27:10Z" user="erenbostan" uid="899249">
  <nd ref="5198069023"/>
  <nd ref="1844021698"/>
  <nd ref="182612804"/>
  <nd ref="5198064606"/>
  <nd ref="5198064592"/>
  <nd ref="5198064594"/>
  <nd ref="1844021706"/>
  <nd ref="1844021707"/>
  <nd ref="5198069028"/>
  <nd ref="5198064595"/>
  <nd ref="5198069025"/>
  <nd ref="1844021603"/>
  <nd ref="1844021641"/>
  <nd ref="5398581554"/>
  <nd ref="1844021685"/>
  <nd ref="5398581557"/>
  <nd ref="5398581556"/>
  <nd ref="5398581555"/>
  <nd ref="1844021654"/>
  <nd ref="5398581558"/>
  <nd ref="5198108595"/>
  <nd ref="5198108596"/>
  <nd ref="5198108608"/>
  <nd ref="5198108597"/>
  <nd ref="1844021597"/>
  <nd ref="5398581559"/>
  <nd ref="5398581560"/>
  <nd ref="1844021593"/>
  <nd ref="5198108607"/>
  <nd ref="5198108592"/>
  <nd ref="5198108591"/>
  <nd ref="1844021653"/>
  <nd ref="1844021688"/>
  <nd ref="5198110245"/>
  <nd ref="5198110246"/>
  <nd ref="5398581562"/>
  <nd ref="5398581561"/>
  <nd ref="5198110248"/>
  <tag k="barrier" v="fence"/>
 </way>
 <way id="536644497" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:35Z" user="Sal73x" uid="1293386">
  <nd ref="5198069025"/>
  <nd ref="5198069026"/>
  <nd ref="5198069027"/>
  <nd ref="1042394856"/>
  <nd ref="1042394839"/>
  <nd ref="1844021707"/>
  <nd ref="5198069028"/>
  <nd ref="5198064595"/>
  <nd ref="5198069025"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="536644498" visible="true" version="4" changeset="63636421" timestamp="2018-10-18T08:38:48Z" user="Qotola" uid="8746535">
  <nd ref="5198069029"/>
  <nd ref="1844021737"/>
  <nd ref="5198069030"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="536644499" visible="true" version="7" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535">
  <nd ref="5198069030"/>
  <nd ref="1844021720"/>
  <nd ref="5198064604"/>
  <nd ref="1844021727"/>
  <nd ref="1844021734"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="536644502" visible="true" version="5" changeset="63636421" timestamp="2018-10-18T08:38:48Z" user="Qotola" uid="8746535">
  <nd ref="5198069031"/>
  <nd ref="1081851657"/>
  <nd ref="5198108602"/>
  <nd ref="5198108601"/>
  <nd ref="4254191709"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="536644503" visible="true" version="4" changeset="63636421" timestamp="2018-10-18T08:38:48Z" user="Qotola" uid="8746535">
  <nd ref="1581246947"/>
  <nd ref="1844021669"/>
  <nd ref="5198069031"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="layer" v="-1"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="536644504" visible="true" version="1" changeset="53340052" timestamp="2017-10-29T12:08:36Z" user="Sal73x" uid="1293386">
  <nd ref="5198069046"/>
  <nd ref="5198069047"/>
  <nd ref="5198069048"/>
  <nd ref="5198069049"/>
  <nd ref="5198069046"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="536651670" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:08Z" user="erenbostan" uid="899249">
  <nd ref="5198108606"/>
  <nd ref="5398581543"/>
  <nd ref="5198108615"/>
  <nd ref="5398581107"/>
  <nd ref="5198108614"/>
  <nd ref="846876530"/>
  <nd ref="2291888303"/>
  <nd ref="5398581106"/>
  <nd ref="1204210334"/>
  <nd ref="2291888300"/>
  <nd ref="2291888297"/>
  <nd ref="1204210020"/>
  <nd ref="5398581101"/>
  <nd ref="2291888296"/>
  <nd ref="846876238"/>
  <nd ref="2291888295"/>
  <nd ref="846876523"/>
  <nd ref="2291888294"/>
  <nd ref="2291888293"/>
  <nd ref="2291888292"/>
  <nd ref="846876375"/>
  <nd ref="2291888291"/>
  <nd ref="5398581100"/>
  <nd ref="2291888290"/>
  <nd ref="5398581099"/>
  <nd ref="846876231"/>
  <nd ref="5398581098"/>
  <nd ref="2291888289"/>
  <nd ref="5398581097"/>
  <nd ref="5398581096"/>
  <nd ref="846877238"/>
  <nd ref="5398581095"/>
  <nd ref="5398581094"/>
  <nd ref="5398581093"/>
  <nd ref="5100406292"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97;AH5"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="536651671" visible="true" version="3" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066">
  <nd ref="5198108616"/>
  <nd ref="5198108617"/>
  <nd ref="5198108595"/>
  <nd ref="5198108619"/>
  <nd ref="5198108616"/>
  <tag k="building" v="roof"/>
  <tag k="layer" v="1"/>
 </way>
 <way id="536651672" visible="true" version="2" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066">
  <nd ref="5198108620"/>
  <nd ref="5198110221"/>
  <nd ref="5198110222"/>
  <nd ref="5198110223"/>
  <nd ref="5198108620"/>
  <tag k="building" v="roof"/>
  <tag k="layer" v="1"/>
 </way>
 <way id="536651673" visible="true" version="3" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066">
  <nd ref="5198110224"/>
  <nd ref="5198110225"/>
  <nd ref="5198110226"/>
  <nd ref="6375600237"/>
  <nd ref="5198110227"/>
  <nd ref="5198110224"/>
  <tag k="building" v="roof"/>
  <tag k="layer" v="1"/>
 </way>
 <way id="536651674" visible="true" version="2" changeset="71001350" timestamp="2019-06-06T19:21:12Z" user="Dilancelik" uid="9231066">
  <nd ref="6530152479"/>
  <nd ref="5198110231"/>
  <nd ref="5198110232"/>
  <nd ref="5198110233"/>
  <nd ref="5198110234"/>
  <nd ref="5198110235"/>
  <nd ref="6530152479"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="536651675" visible="true" version="1" changeset="53340576" timestamp="2017-10-29T12:33:06Z" user="Sal73x" uid="1293386">
  <nd ref="5198110236"/>
  <nd ref="5198110237"/>
  <nd ref="5198110238"/>
  <nd ref="5198110239"/>
  <nd ref="5198110236"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="536651678" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:10Z" user="erenbostan" uid="899249">
  <nd ref="5198110242"/>
  <nd ref="5398581538"/>
  <nd ref="5398581545"/>
  <nd ref="5198110250"/>
  <nd ref="5398581544"/>
  <nd ref="5198110243"/>
  <tag k="barrier" v="fence"/>
 </way>
 <way id="536651680" visible="true" version="2" changeset="56186471" timestamp="2018-02-08T15:27:09Z" user="erenbostan" uid="899249">
  <nd ref="5198108615"/>
  <nd ref="5398581539"/>
  <nd ref="5398581531"/>
  <nd ref="5398581540"/>
  <nd ref="5398581530"/>
  <nd ref="5398581529"/>
  <nd ref="5398581528"/>
  <nd ref="1295886274"/>
  <nd ref="1295886342"/>
  <nd ref="5398581115"/>
  <nd ref="1295886367"/>
  <nd ref="1295886024"/>
  <nd ref="5198108612"/>
  <nd ref="5398581114"/>
  <nd ref="5398581113"/>
  <nd ref="1295886061"/>
  <nd ref="5198108613"/>
  <nd ref="1295886220"/>
  <nd ref="5398581112"/>
  <nd ref="5398581108"/>
  <nd ref="1295886147"/>
  <nd ref="5398581111"/>
  <nd ref="5398581109"/>
  <nd ref="1295886194"/>
  <nd ref="1295886035"/>
  <nd ref="5398581110"/>
  <nd ref="1295886001"/>
  <nd ref="1295886337"/>
  <nd ref="1295886074"/>
  <nd ref="1295886421"/>
  <nd ref="1295886380"/>
  <nd ref="1295886232"/>
  <nd ref="1295886310"/>
  <nd ref="1295886170"/>
  <nd ref="1295886130"/>
  <nd ref="1295885978"/>
  <nd ref="1295886208"/>
  <nd ref="1295886048"/>
  <nd ref="1295886013"/>
  <nd ref="1295886393"/>
  <nd ref="1295886045"/>
  <nd ref="1295886265"/>
  <nd ref="1295886415"/>
  <nd ref="1295885969"/>
  <nd ref="1295886118"/>
  <nd ref="1295886374"/>
  <nd ref="1295886030"/>
  <nd ref="1295886068"/>
  <nd ref="1295886226"/>
  <nd ref="1295886038"/>
  <nd ref="1295886197"/>
  <nd ref="1295886233"/>
  <nd ref="1295886382"/>
  <nd ref="1295886159"/>
  <nd ref="1295886302"/>
  <nd ref="1295886341"/>
  <nd ref="1295886004"/>
  <nd ref="1295886412"/>
  <nd ref="1295886064"/>
  <nd ref="1295886109"/>
  <nd ref="1295886260"/>
  <nd ref="1295886026"/>
  <nd ref="1295886185"/>
  <nd ref="1295886223"/>
  <nd ref="1295886371"/>
  <nd ref="1295886192"/>
  <tag k="highway" v="tertiary"/>
  <tag k="source" v="bing"/>
 </way>
 <way id="559780808" visible="true" version="2" changeset="73433020" timestamp="2019-08-16T23:54:15Z" user="geografa" uid="129535">
  <nd ref="5398581533"/>
  <nd ref="5398581540"/>
  <nd ref="5198108604"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="name" v="Hopa-Sarp yolu"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="E 70 / D-010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="606305335" visible="true" version="3" changeset="78248315" timestamp="2019-12-11T08:31:34Z" user="Qotola" uid="8746535">
  <nd ref="6449823407"/>
  <nd ref="5748931100"/>
  <nd ref="5748864205"/>
  <nd ref="5176325525"/>
  <nd ref="5176325524"/>
  <nd ref="5176325526"/>
  <nd ref="5176325522"/>
  <nd ref="5176325527"/>
  <nd ref="5176325523"/>
  <nd ref="5176325521"/>
  <nd ref="5176312356"/>
  <nd ref="5176312355"/>
  <nd ref="5176312359"/>
  <nd ref="5176312357"/>
  <nd ref="5176312362"/>
  <nd ref="5176312360"/>
  <nd ref="5176312361"/>
  <nd ref="5176312358"/>
  <nd ref="5176312354"/>
  <nd ref="4938578404"/>
  <nd ref="4907923605"/>
  <nd ref="4907923598"/>
  <nd ref="4907923611"/>
  <nd ref="4907923597"/>
  <nd ref="4907923609"/>
  <nd ref="4907923602"/>
  <nd ref="4907923599"/>
  <nd ref="4907923600"/>
  <nd ref="4907923603"/>
  <nd ref="4907923610"/>
  <nd ref="4907923596"/>
  <nd ref="4907923606"/>
  <nd ref="7048758066"/>
  <nd ref="4907923592"/>
  <nd ref="4907923594"/>
  <nd ref="4907923607"/>
  <nd ref="4907923604"/>
  <nd ref="4907923593"/>
  <nd ref="4907923601"/>
  <nd ref="4907923595"/>
  <nd ref="4907923608"/>
  <nd ref="4781245041"/>
  <nd ref="4781245043"/>
  <nd ref="4781245042"/>
  <nd ref="4781245040"/>
  <nd ref="4841760200"/>
  <nd ref="4841760193"/>
  <nd ref="4841760203"/>
  <nd ref="4841760191"/>
  <nd ref="4841760189"/>
  <nd ref="4841760202"/>
  <nd ref="4841760213"/>
  <nd ref="4841760190"/>
  <nd ref="4841760197"/>
  <nd ref="4841760198"/>
  <nd ref="4841760199"/>
  <nd ref="4841760216"/>
  <nd ref="4841760194"/>
  <nd ref="4841760215"/>
  <nd ref="4841760208"/>
  <nd ref="4841760214"/>
  <nd ref="4841760210"/>
  <nd ref="4841760206"/>
  <nd ref="4841760195"/>
  <nd ref="4841760192"/>
  <nd ref="4841760201"/>
  <nd ref="4841760209"/>
  <nd ref="4841760207"/>
  <nd ref="4841760196"/>
  <nd ref="4841760205"/>
  <nd ref="4770346256"/>
  <nd ref="4770346254"/>
  <nd ref="4770346255"/>
  <nd ref="4841760204"/>
  <nd ref="4841760217"/>
  <nd ref="4841760212"/>
  <nd ref="4841760211"/>
  <nd ref="2817947838"/>
  <nd ref="2817947837"/>
  <tag k="cables" v="3"/>
  <tag k="power" v="line"/>
  <tag k="source" v="bing"/>
  <tag k="voltage" v="154000"/>
 </way>
 <way id="632435486" visible="true" version="2" changeset="63636421" timestamp="2018-10-18T08:38:46Z" user="Qotola" uid="8746535">
  <nd ref="928933769"/>
  <nd ref="1306049167"/>
  <nd ref="1306049648"/>
  <nd ref="1306048073"/>
  <nd ref="5838459486"/>
  <nd ref="1306049201"/>
  <nd ref="1306047472"/>
  <nd ref="1306048709"/>
  <nd ref="1306050893"/>
  <nd ref="1306047911"/>
  <nd ref="1306050068"/>
  <nd ref="1306047407"/>
  <nd ref="1306049520"/>
  <nd ref="1306050748"/>
  <nd ref="5838459485"/>
  <nd ref="1306049132"/>
  <nd ref="1306049941"/>
  <nd ref="1306048541"/>
  <nd ref="1306049391"/>
  <nd ref="1306047777"/>
  <nd ref="1306049067"/>
  <nd ref="1306047328"/>
  <nd ref="1306048344"/>
  <nd ref="5838458684"/>
  <nd ref="1306050544"/>
  <nd ref="1306047594"/>
  <nd ref="1306049813"/>
  <nd ref="1306047263"/>
  <nd ref="1306049300"/>
  <nd ref="1306050320"/>
  <nd ref="5838479640"/>
  <nd ref="1306048935"/>
  <nd ref="1306049680"/>
  <nd ref="1306048117"/>
  <nd ref="1306049218"/>
  <nd ref="1306048760"/>
  <nd ref="1306050932"/>
  <nd ref="1306048488"/>
  <nd ref="1306047730"/>
  <nd ref="1306049907"/>
  <nd ref="1306047311"/>
  <nd ref="1306049365"/>
  <nd ref="1306050485"/>
  <nd ref="1369932268"/>
  <nd ref="1306049049"/>
  <nd ref="1306049777"/>
  <nd ref="1306048283"/>
  <nd ref="1308962028"/>
  <nd ref="5838479641"/>
  <nd ref="1306049265"/>
  <nd ref="1306047573"/>
  <nd ref="1308962027"/>
  <nd ref="1306048883"/>
  <nd ref="1306048067"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="50"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="669721455" visible="true" version="2" changeset="69994558" timestamp="2019-05-07T18:27:28Z" user="richter_fn" uid="371522">
  <nd ref="6271823885"/>
  <nd ref="6271823886"/>
  <nd ref="6271823887"/>
  <nd ref="6271823888"/>
  <nd ref="6271823889"/>
  <nd ref="6271823890"/>
  <nd ref="6271823891"/>
  <nd ref="6271823892"/>
  <nd ref="6271823885"/>
  <tag k="amenity" v="place_of_worship"/>
  <tag k="building" v="yes"/>
  <tag k="denomination" v="orthodox"/>
  <tag k="religion" v="christian"/>
 </way>
 <way id="680870201" visible="true" version="1" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156">
  <nd ref="6375600238"/>
  <nd ref="6375600239"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="name" v="სარფი"/>
  <tag k="name:ru" v="sarp"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="D 010"/>
  <tag k="source" v="GPS"/>
  <tag k="tunnel" v="yes"/>
 </way>
 <way id="680870202" visible="true" version="1" changeset="68748506" timestamp="2019-04-01T10:19:45Z" user="LashaT" uid="6364156">
  <nd ref="6375600239"/>
  <nd ref="5198110229"/>
  <nd ref="5198110228"/>
  <nd ref="4254191714"/>
  <nd ref="5398581547"/>
  <nd ref="5398581546"/>
  <nd ref="4254191713"/>
  <nd ref="5198108605"/>
  <nd ref="5398581536"/>
  <nd ref="5398581537"/>
  <nd ref="5198108606"/>
  <tag k="highway" v="trunk"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="name" v="სარფი"/>
  <tag k="name:ru" v="sarp"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="D 010"/>
  <tag k="source" v="GPS"/>
 </way>
 <way id="772981689" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136320"/>
  <nd ref="7217136321"/>
  <nd ref="7217136322"/>
  <nd ref="7217136323"/>
  <nd ref="7217136320"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981694" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136340"/>
  <nd ref="7217136341"/>
  <nd ref="7217136342"/>
  <nd ref="7217136343"/>
  <nd ref="7217136340"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981695" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136344"/>
  <nd ref="7217136345"/>
  <nd ref="7217136346"/>
  <nd ref="7217136347"/>
  <nd ref="7217136344"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981696" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136348"/>
  <nd ref="7217136349"/>
  <nd ref="7217136350"/>
  <nd ref="7217136351"/>
  <nd ref="7217136348"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981697" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136352"/>
  <nd ref="7217136353"/>
  <nd ref="7217136354"/>
  <nd ref="7217136355"/>
  <nd ref="7217136352"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981698" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136356"/>
  <nd ref="7217136357"/>
  <nd ref="7217136358"/>
  <nd ref="7217136359"/>
  <nd ref="7217136356"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981699" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136360"/>
  <nd ref="7217136361"/>
  <nd ref="7217136362"/>
  <nd ref="7217136363"/>
  <nd ref="7217136360"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981700" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136364"/>
  <nd ref="7217136365"/>
  <nd ref="7217136366"/>
  <nd ref="7217136367"/>
  <nd ref="7217136364"/>
  <tag k="barrier" v="fence"/>
 </way>
 <way id="772981702" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217136381"/>
  <nd ref="7217136382"/>
  <nd ref="7217136383"/>
  <nd ref="7217136384"/>
  <nd ref="7217140485"/>
  <nd ref="7217140486"/>
  <nd ref="7217140487"/>
  <nd ref="7217136381"/>
  <tag k="name" v="Курортный комплекс &quot;Sunrise&quot;"/>
  <tag k="tourism" v="camp_site"/>
 </way>
 <way id="772981703" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140488"/>
  <nd ref="7217140489"/>
  <nd ref="7217140490"/>
  <nd ref="7217140491"/>
  <nd ref="7217140492"/>
  <nd ref="7217140493"/>
  <nd ref="7217140494"/>
  <nd ref="7217140495"/>
  <nd ref="7217140496"/>
  <nd ref="7217140497"/>
  <nd ref="7217140498"/>
  <nd ref="7217140499"/>
  <nd ref="7217140500"/>
  <nd ref="7217140501"/>
  <nd ref="7217140502"/>
  <nd ref="7217140503"/>
  <nd ref="7217140504"/>
  <nd ref="7217140505"/>
  <nd ref="7217140506"/>
  <nd ref="7217140507"/>
  <nd ref="7217140508"/>
  <nd ref="7217140509"/>
  <nd ref="7217140488"/>
  <tag k="natural" v="wood"/>
 </way>
 <way id="772981755" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140716"/>
  <nd ref="7217140717"/>
  <nd ref="7217140718"/>
  <nd ref="7217140719"/>
  <nd ref="7217140716"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981756" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140720"/>
  <nd ref="7217140721"/>
  <nd ref="7217140722"/>
  <nd ref="7217140723"/>
  <nd ref="7217140720"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981757" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140724"/>
  <nd ref="7217140725"/>
  <nd ref="7217140726"/>
  <nd ref="7217140727"/>
  <nd ref="7217140724"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981758" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140728"/>
  <nd ref="7217140729"/>
  <nd ref="7217140730"/>
  <nd ref="7217140731"/>
  <nd ref="7217140728"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981759" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140732"/>
  <nd ref="7217140733"/>
  <nd ref="7217140734"/>
  <nd ref="7217140735"/>
  <nd ref="7217140732"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="772981760" visible="true" version="1" changeset="81080649" timestamp="2020-02-16T20:07:04Z" user="AzurRu" uid="731064">
  <nd ref="7217140736"/>
  <nd ref="7217140737"/>
  <nd ref="7217140738"/>
  <nd ref="7217140739"/>
  <nd ref="7217140736"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="790012453" visible="true" version="1" changeset="83320104" timestamp="2020-04-09T16:39:46Z" user="Gorka115" uid="9458168">
  <nd ref="7386154576"/>
  <nd ref="7386154577"/>
  <nd ref="7386154578"/>
  <nd ref="7386154579"/>
  <nd ref="7386154576"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="793709541" visible="true" version="1" changeset="83795099" timestamp="2020-04-20T04:53:10Z" user="QuackLake" uid="10409516">
  <nd ref="1306049199"/>
  <nd ref="7424360037"/>
  <nd ref="7424360036"/>
  <nd ref="7424360035"/>
  <nd ref="7424360032"/>
  <nd ref="7424360034"/>
  <nd ref="7424360033"/>
  <tag k="highway" v="residential"/>
 </way>
 <way id="808526798" visible="true" version="1" changeset="85787152" timestamp="2020-05-26T18:32:57Z" user="alisarioglu55" uid="11165864">
  <nd ref="7560512632"/>
  <nd ref="7560512633"/>
  <nd ref="7560512634"/>
  <nd ref="7560512635"/>
  <nd ref="7560512636"/>
  <nd ref="7560512637"/>
  <nd ref="7560512638"/>
  <nd ref="7560512639"/>
  <nd ref="7560512640"/>
  <nd ref="7560512641"/>
  <nd ref="7560512642"/>
  <nd ref="7560512643"/>
  <nd ref="7560512644"/>
  <nd ref="7560512645"/>
  <nd ref="7560512646"/>
  <nd ref="7560512647"/>
  <nd ref="7560512648"/>
  <nd ref="7560512649"/>
  <nd ref="7560512650"/>
  <nd ref="7560512651"/>
  <nd ref="7560512652"/>
  <nd ref="7560512631"/>
  <nd ref="7560512653"/>
  <nd ref="7560512654"/>
  <nd ref="7560512655"/>
  <nd ref="7560512656"/>
  <nd ref="7560512657"/>
  <nd ref="7560512658"/>
  <nd ref="7560512659"/>
  <nd ref="7560512660"/>
  <nd ref="7560512661"/>
  <nd ref="7560512662"/>
  <nd ref="7560512663"/>
  <nd ref="7560512664"/>
  <nd ref="7560512665"/>
  <nd ref="7560512666"/>
  <nd ref="7560512667"/>
  <nd ref="7560512668"/>
  <nd ref="7560512669"/>
  <nd ref="7560512670"/>
  <nd ref="7560512671"/>
  <nd ref="7560512672"/>
  <nd ref="7560512673"/>
  <nd ref="7560512674"/>
  <nd ref="7560512675"/>
  <nd ref="7560512676"/>
  <nd ref="7560512677"/>
  <nd ref="7560512678"/>
  <nd ref="7560512679"/>
  <nd ref="7560512680"/>
  <nd ref="7560512681"/>
  <nd ref="7560512682"/>
  <nd ref="7560512683"/>
  <nd ref="7560512684"/>
  <nd ref="7560512685"/>
  <tag k="highway" v="residential"/>
  <tag k="source" v="digitalglobe"/>
 </way>
 <way id="836137773" visible="true" version="1" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535">
  <nd ref="6241493615"/>
  <nd ref="1844021734"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="10"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="836137774" visible="true" version="1" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535">
  <nd ref="6241493616"/>
  <nd ref="6640872501"/>
  <nd ref="6241493615"/>
  <tag k="access" v="yes"/>
  <tag k="bicycle" v="yes"/>
  <tag k="cycleway" v="no"/>
  <tag k="foot" v="yes"/>
  <tag k="highway" v="trunk"/>
  <tag k="horse" v="yes"/>
  <tag k="int_ref" v="E 70;E 97"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="90"/>
  <tag k="name" v="სენაკი-ფოთი-სარფი"/>
  <tag k="name:en" v="Senaki-Poti-Sarpi"/>
  <tag k="nat_ref" v="S 2"/>
  <tag k="oneway" v="yes"/>
  <tag k="ref" v="ს 2"/>
  <tag k="smoothness" v="good"/>
  <tag k="source" v="Bing"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="839946779" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274">
  <nd ref="7837957778"/>
  <nd ref="7837957779"/>
  <nd ref="7837957780"/>
  <nd ref="7837957781"/>
  <nd ref="7837957778"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="839946780" visible="true" version="1" changeset="89820890" timestamp="2020-08-23T20:14:05Z" user="A-U-X" uid="5673274">
  <nd ref="7837957782"/>
  <nd ref="7837957783"/>
  <nd ref="7837957784"/>
  <nd ref="7838028385"/>
  <nd ref="7837957782"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873086" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="6023248536"/>
  <nd ref="6023248537"/>
  <nd ref="6023248539"/>
  <nd ref="6023248541"/>
  <nd ref="1306047750"/>
  <tag k="highway" v="service"/>
  <tag k="source" v="JumpStart International"/>
  <tag k="surface" v="stone"/>
 </way>
 <way id="842873087" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010719"/>
  <nd ref="7863010720"/>
  <nd ref="7863010721"/>
  <nd ref="7863010722"/>
  <nd ref="7863010723"/>
  <nd ref="7863010724"/>
  <nd ref="7863010725"/>
  <nd ref="7863010726"/>
  <nd ref="7863010727"/>
  <nd ref="7863010728"/>
  <nd ref="7863010729"/>
  <nd ref="7863010730"/>
  <nd ref="7863010719"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873088" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010731"/>
  <nd ref="7863010732"/>
  <nd ref="7863010733"/>
  <nd ref="7863010734"/>
  <nd ref="7863010735"/>
  <nd ref="7863010736"/>
  <nd ref="7863010737"/>
  <nd ref="7863010738"/>
  <nd ref="7863010739"/>
  <nd ref="7863010740"/>
  <nd ref="7863010741"/>
  <nd ref="7863010742"/>
  <nd ref="7863010731"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873089" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010743"/>
  <nd ref="7863010744"/>
  <nd ref="7863010745"/>
  <nd ref="7863010746"/>
  <nd ref="7863010743"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873090" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010747"/>
  <nd ref="7863010748"/>
  <nd ref="7863010749"/>
  <nd ref="7863010750"/>
  <nd ref="7863010747"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873091" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010751"/>
  <nd ref="7863010752"/>
  <nd ref="7863010753"/>
  <nd ref="7863010754"/>
  <nd ref="7863010751"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873092" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010755"/>
  <nd ref="7863010756"/>
  <nd ref="7863010757"/>
  <nd ref="7863010758"/>
  <nd ref="7863010755"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873093" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010759"/>
  <nd ref="7863010760"/>
  <nd ref="7863010761"/>
  <nd ref="7863010762"/>
  <nd ref="7863010759"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873094" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010763"/>
  <nd ref="7863010764"/>
  <nd ref="7863010765"/>
  <nd ref="7863010766"/>
  <nd ref="7863010763"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873095" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010767"/>
  <nd ref="7863010768"/>
  <nd ref="7863010769"/>
  <nd ref="7863010770"/>
  <nd ref="7863010767"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873096" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010771"/>
  <nd ref="7863010772"/>
  <nd ref="7863010773"/>
  <nd ref="7863010774"/>
  <nd ref="7863010771"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873097" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010775"/>
  <nd ref="7863010776"/>
  <nd ref="7863010777"/>
  <nd ref="7863010778"/>
  <nd ref="7863010775"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873098" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010779"/>
  <nd ref="7863010780"/>
  <nd ref="7863010781"/>
  <nd ref="7863010782"/>
  <nd ref="7863010779"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873099" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863010783"/>
  <nd ref="7863010784"/>
  <nd ref="7863039885"/>
  <nd ref="7863039886"/>
  <nd ref="7863010783"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873100" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863039887"/>
  <nd ref="7863039888"/>
  <nd ref="7863039889"/>
  <nd ref="7863039890"/>
  <nd ref="7863039887"/>
  <tag k="building" v="yes"/>
 </way>
 <way id="842873101" visible="true" version="1" changeset="90212045" timestamp="2020-08-31T21:43:55Z" user="A-U-X" uid="5673274">
  <nd ref="7863039891"/>
  <nd ref="7863039892"/>
  <nd ref="7863039893"/>
  <nd ref="7863039894"/>
  <nd ref="7863039891"/>
  <tag k="building" v="yes"/>
 </way>
 <relation id="27057" visible="true" version="2783" changeset="64592950" timestamp="2018-11-17T10:48:38Z" user="aytfadc" uid="58255">
  <member type="relation" ref="3922855" role=""/>
  <member type="relation" ref="2195442" role=""/>
  <member type="relation" ref="2195441" role=""/>
  <member type="relation" ref="2195439" role=""/>
  <member type="relation" ref="2195440" role=""/>
  <member type="relation" ref="2195434" role=""/>
  <member type="relation" ref="2195432" role=""/>
  <member type="relation" ref="2195431" role=""/>
  <member type="relation" ref="2195433" role=""/>
  <member type="relation" ref="2195430" role=""/>
  <member type="relation" ref="2195415" role=""/>
  <member type="relation" ref="2195417" role=""/>
  <member type="relation" ref="2195416" role=""/>
  <member type="relation" ref="2195414" role=""/>
  <member type="relation" ref="2195409" role=""/>
  <member type="relation" ref="2195411" role=""/>
  <tag k="description" v="A Coruña - Bordeaux - Torino - Ljubljana - Zagreb - Beograd - Varna ... Samsun - Poti"/>
  <tag k="description:fr" v="E 70 La Corogne - Poti"/>
  <tag k="name" v="E 70 (Meta)"/>
  <tag k="name:bg" v="Европейски път Е70"/>
  <tag k="name:en" v="E 70 (Meta)"/>
  <tag k="name:fr" v="Route européenne E 70"/>
  <tag k="network" v="e-road"/>
  <tag k="ref" v="E 70"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q741488"/>
  <tag k="wikipedia" v="en:European route E70"/>
 </relation>
 <relation id="28699" visible="true" version="458" changeset="89914921" timestamp="2020-08-25T12:19:34Z" user="Qotola" uid="8746535">
  <member type="node" ref="1614277087" role="admin_centre"/>
  <member type="node" ref="432424985" role="label"/>
  <member type="way" ref="36737725" role="outer"/>
  <member type="way" ref="148974563" role="outer"/>
  <member type="way" ref="147942872" role="outer"/>
  <member type="way" ref="147895308" role="outer"/>
  <member type="way" ref="147895306" role="outer"/>
  <member type="way" ref="149558523" role="outer"/>
  <member type="way" ref="86041460" role="outer"/>
  <member type="way" ref="150585978" role="outer"/>
  <member type="way" ref="150585932" role="outer"/>
  <member type="way" ref="150466881" role="outer"/>
  <member type="way" ref="150466880" role="outer"/>
  <member type="way" ref="150469820" role="outer"/>
  <member type="way" ref="46521663" role="outer"/>
  <member type="way" ref="162468547" role="outer"/>
  <member type="way" ref="335337636" role="outer"/>
  <member type="way" ref="213113452" role="outer"/>
  <member type="way" ref="536611453" role="outer"/>
  <member type="way" ref="178144971" role="outer"/>
  <member type="way" ref="176847924" role="outer"/>
  <member type="way" ref="250353948" role="outer"/>
  <member type="way" ref="250346916" role="outer"/>
  <member type="way" ref="678172549" role="outer"/>
  <member type="way" ref="536611451" role="outer"/>
  <member type="way" ref="83103714" role="outer"/>
  <member type="way" ref="150470592" role="outer"/>
  <member type="way" ref="678172551" role="outer"/>
  <member type="way" ref="678172552" role="outer"/>
  <member type="way" ref="46521766" role="outer"/>
  <member type="way" ref="650287887" role="outer"/>
  <member type="way" ref="39351667" role="outer"/>
  <member type="way" ref="150485630" role="outer"/>
  <member type="way" ref="682786995" role="outer"/>
  <member type="way" ref="682786994" role="outer"/>
  <member type="way" ref="134834223" role="outer"/>
  <member type="way" ref="66941693" role="outer"/>
  <member type="way" ref="494276755" role="outer"/>
  <member type="way" ref="638766323" role="outer"/>
  <member type="way" ref="678172631" role="outer"/>
  <member type="way" ref="494276754" role="outer"/>
  <member type="way" ref="584136371" role="outer"/>
  <member type="way" ref="584136394" role="outer"/>
  <member type="way" ref="638766324" role="outer"/>
  <member type="way" ref="150490936" role="outer"/>
  <member type="way" ref="134834224" role="outer"/>
  <member type="way" ref="704535029" role="outer"/>
  <member type="way" ref="704535028" role="outer"/>
  <member type="way" ref="66942018" role="outer"/>
  <member type="way" ref="584775313" role="outer"/>
  <member type="way" ref="493200540" role="outer"/>
  <member type="way" ref="493200541" role="outer"/>
  <member type="way" ref="438405480" role="outer"/>
  <member type="way" ref="438405481" role="outer"/>
  <member type="way" ref="438405483" role="outer"/>
  <member type="way" ref="438405482" role="outer"/>
  <member type="way" ref="584775311" role="outer"/>
  <member type="way" ref="40696799" role="outer"/>
  <member type="way" ref="382195332" role="outer"/>
  <member type="way" ref="382195331" role="outer"/>
  <member type="way" ref="382195330" role="outer"/>
  <member type="way" ref="382195337" role="outer"/>
  <member type="way" ref="382195326" role="outer"/>
  <member type="way" ref="382195329" role="outer"/>
  <member type="way" ref="382195328" role="outer"/>
  <member type="way" ref="382195333" role="outer"/>
  <member type="way" ref="382195335" role="outer"/>
  <member type="way" ref="382195325" role="outer"/>
  <member type="way" ref="382195338" role="outer"/>
  <member type="way" ref="382195334" role="outer"/>
  <member type="way" ref="382195327" role="outer"/>
  <member type="way" ref="382195336" role="outer"/>
  <member type="way" ref="373895284" role="outer"/>
  <member type="way" ref="38313161" role="outer"/>
  <member type="way" ref="53638946" role="outer"/>
  <member type="way" ref="373895244" role="outer"/>
  <member type="way" ref="373895259" role="outer"/>
  <member type="way" ref="373895237" role="outer"/>
  <member type="way" ref="373895270" role="outer"/>
  <member type="way" ref="373895257" role="outer"/>
  <member type="way" ref="373895252" role="outer"/>
  <member type="way" ref="373895250" role="outer"/>
  <member type="way" ref="373895225" role="outer"/>
  <member type="way" ref="437269137" role="outer"/>
  <member type="way" ref="373877164" role="outer"/>
  <member type="way" ref="373877162" role="outer"/>
  <member type="way" ref="373877176" role="outer"/>
  <member type="way" ref="373877161" role="outer"/>
  <member type="way" ref="373877166" role="outer"/>
  <member type="way" ref="373877160" role="outer"/>
  <member type="way" ref="370788556" role="outer"/>
  <member type="way" ref="370788551" role="outer"/>
  <member type="way" ref="437261225" role="outer"/>
  <member type="way" ref="437261221" role="outer"/>
  <member type="way" ref="437261214" role="outer"/>
  <member type="way" ref="437261223" role="outer"/>
  <member type="way" ref="437261224" role="outer"/>
  <member type="way" ref="437261216" role="outer"/>
  <member type="way" ref="370788554" role="outer"/>
  <member type="way" ref="370788572" role="outer"/>
  <member type="way" ref="370653897" role="outer"/>
  <member type="way" ref="85798164" role="outer"/>
  <member type="way" ref="370653928" role="outer"/>
  <member type="way" ref="370653883" role="outer"/>
  <member type="way" ref="370653930" role="outer"/>
  <member type="way" ref="370499310" role="outer"/>
  <member type="way" ref="85798166" role="outer"/>
  <member type="way" ref="370499315" role="outer"/>
  <member type="way" ref="370499312" role="outer"/>
  <member type="way" ref="370499301" role="outer"/>
  <member type="way" ref="370653888" role="outer"/>
  <member type="way" ref="370653876" role="outer"/>
  <member type="way" ref="370499316" role="outer"/>
  <member type="way" ref="370499345" role="outer"/>
  <member type="way" ref="370499327" role="outer"/>
  <member type="way" ref="370499314" role="outer"/>
  <member type="way" ref="370499330" role="outer"/>
  <member type="way" ref="370499303" role="outer"/>
  <member type="way" ref="370015712" role="outer"/>
  <member type="way" ref="370015740" role="outer"/>
  <member type="way" ref="370653893" role="outer"/>
  <member type="way" ref="447533994" role="outer"/>
  <member type="way" ref="370653899" role="outer"/>
  <member type="way" ref="370015690" role="outer"/>
  <member type="way" ref="370015707" role="outer"/>
  <member type="way" ref="370015686" role="outer"/>
  <member type="way" ref="370015684" role="outer"/>
  <member type="way" ref="370015714" role="outer"/>
  <member type="way" ref="370015747" role="outer"/>
  <member type="way" ref="370015685" role="outer"/>
  <member type="way" ref="370015715" role="outer"/>
  <member type="way" ref="370015697" role="outer"/>
  <member type="way" ref="370015668" role="outer"/>
  <member type="way" ref="370015730" role="outer"/>
  <member type="way" ref="370015717" role="outer"/>
  <member type="way" ref="370015691" role="outer"/>
  <member type="way" ref="370015727" role="outer"/>
  <member type="way" ref="370015719" role="outer"/>
  <member type="way" ref="370015678" role="outer"/>
  <member type="way" ref="370015711" role="outer"/>
  <member type="way" ref="370015709" role="outer"/>
  <member type="way" ref="370015683" role="outer"/>
  <member type="way" ref="370015725" role="outer"/>
  <member type="way" ref="370104178" role="outer"/>
  <member type="way" ref="370104231" role="outer"/>
  <member type="way" ref="370104242" role="outer"/>
  <member type="way" ref="370104171" role="outer"/>
  <member type="way" ref="370104249" role="outer"/>
  <member type="way" ref="370104250" role="outer"/>
  <member type="way" ref="370104190" role="outer"/>
  <member type="way" ref="370104175" role="outer"/>
  <member type="way" ref="370104179" role="outer"/>
  <member type="way" ref="370104199" role="outer"/>
  <member type="way" ref="370104237" role="outer"/>
  <member type="way" ref="370104235" role="outer"/>
  <member type="way" ref="370104200" role="outer"/>
  <member type="way" ref="370104180" role="outer"/>
  <member type="way" ref="370104196" role="outer"/>
  <member type="way" ref="370104233" role="outer"/>
  <member type="way" ref="370104228" role="outer"/>
  <member type="way" ref="370104194" role="outer"/>
  <member type="way" ref="370104269" role="outer"/>
  <member type="way" ref="370241161" role="outer"/>
  <member type="way" ref="370241156" role="outer"/>
  <member type="way" ref="370241162" role="outer"/>
  <member type="way" ref="366670665" role="outer"/>
  <member type="way" ref="366670643" role="outer"/>
  <member type="way" ref="366670675" role="outer"/>
  <member type="way" ref="557315101" role="outer"/>
  <member type="way" ref="366670639" role="outer"/>
  <member type="way" ref="366670651" role="outer"/>
  <member type="way" ref="367251828" role="outer"/>
  <member type="way" ref="370104193" role="outer"/>
  <member type="way" ref="367251833" role="outer"/>
  <member type="way" ref="448271789" role="outer"/>
  <member type="way" ref="367251806" role="outer"/>
  <member type="way" ref="367251846" role="outer"/>
  <member type="way" ref="370104226" role="outer"/>
  <member type="way" ref="370104204" role="outer"/>
  <member type="way" ref="370104195" role="outer"/>
  <member type="way" ref="370104167" role="outer"/>
  <member type="way" ref="367251857" role="outer"/>
  <member type="way" ref="367251862" role="outer"/>
  <member type="way" ref="367251837" role="outer"/>
  <member type="way" ref="367251792" role="outer"/>
  <member type="way" ref="367251810" role="outer"/>
  <member type="way" ref="367251816" role="outer"/>
  <member type="way" ref="367251831" role="outer"/>
  <member type="way" ref="367251812" role="outer"/>
  <member type="way" ref="133435566" role="outer"/>
  <member type="way" ref="370241182" role="outer"/>
  <member type="way" ref="370241181" role="outer"/>
  <member type="way" ref="66964471" role="outer"/>
  <member type="way" ref="370241635" role="outer"/>
  <member type="way" ref="370241187" role="outer"/>
  <member type="way" ref="582543629" role="outer"/>
  <member type="way" ref="370241637" role="outer"/>
  <member type="way" ref="370241640" role="outer"/>
  <member type="way" ref="370241636" role="outer"/>
  <member type="way" ref="370241638" role="outer"/>
  <member type="way" ref="370241639" role="outer"/>
  <member type="way" ref="380082889" role="outer"/>
  <member type="way" ref="380728982" role="outer"/>
  <member type="way" ref="380728985" role="outer"/>
  <member type="way" ref="380082874" role="outer"/>
  <member type="way" ref="380082886" role="outer"/>
  <member type="way" ref="380082875" role="outer"/>
  <member type="way" ref="380082870" role="outer"/>
  <member type="way" ref="380082884" role="outer"/>
  <member type="way" ref="380082872" role="outer"/>
  <member type="way" ref="380082877" role="outer"/>
  <member type="way" ref="370241184" role="outer"/>
  <member type="way" ref="380082879" role="outer"/>
  <member type="way" ref="440853897" role="outer"/>
  <member type="way" ref="440853892" role="outer"/>
  <member type="way" ref="440853895" role="outer"/>
  <member type="way" ref="440853885" role="outer"/>
  <member type="way" ref="440853891" role="outer"/>
  <member type="way" ref="440853893" role="outer"/>
  <member type="way" ref="380082881" role="outer"/>
  <member type="way" ref="380047904" role="outer"/>
  <member type="way" ref="380047905" role="outer"/>
  <member type="way" ref="380047903" role="outer"/>
  <member type="way" ref="440662721" role="outer"/>
  <member type="way" ref="440662717" role="outer"/>
  <member type="way" ref="380728984" role="outer"/>
  <member type="way" ref="380728983" role="outer"/>
  <member type="way" ref="440744904" role="outer"/>
  <member type="way" ref="440662725" role="outer"/>
  <member type="way" ref="440744903" role="outer"/>
  <member type="way" ref="440744902" role="outer"/>
  <member type="way" ref="440744906" role="outer"/>
  <member type="way" ref="440744907" role="outer"/>
  <member type="way" ref="440662709" role="outer"/>
  <member type="way" ref="440662710" role="outer"/>
  <member type="way" ref="440662716" role="outer"/>
  <member type="way" ref="440662706" role="outer"/>
  <member type="way" ref="440662722" role="outer"/>
  <member type="way" ref="440744905" role="outer"/>
  <member type="way" ref="440662726" role="outer"/>
  <member type="way" ref="440662708" role="outer"/>
  <member type="way" ref="440662707" role="outer"/>
  <member type="way" ref="440662719" role="outer"/>
  <member type="way" ref="440662713" role="outer"/>
  <member type="way" ref="440662712" role="outer"/>
  <member type="way" ref="440744909" role="outer"/>
  <member type="way" ref="440744908" role="outer"/>
  <member type="way" ref="133435567" role="outer"/>
  <member type="way" ref="440853896" role="outer"/>
  <member type="way" ref="440853886" role="outer"/>
  <member type="way" ref="440662727" role="outer"/>
  <member type="way" ref="440662718" role="outer"/>
  <member type="way" ref="440853888" role="outer"/>
  <member type="way" ref="440853883" role="outer"/>
  <member type="way" ref="440853889" role="outer"/>
  <member type="way" ref="440662724" role="outer"/>
  <member type="way" ref="440853890" role="outer"/>
  <member type="way" ref="440853884" role="outer"/>
  <member type="way" ref="440853887" role="outer"/>
  <member type="way" ref="440853882" role="outer"/>
  <member type="way" ref="440853894" role="outer"/>
  <member type="way" ref="440662715" role="outer"/>
  <member type="way" ref="440662714" role="outer"/>
  <member type="way" ref="440662720" role="outer"/>
  <member type="way" ref="441068939" role="outer"/>
  <member type="way" ref="440662711" role="outer"/>
  <member type="way" ref="441068943" role="outer"/>
  <member type="way" ref="441068936" role="outer"/>
  <member type="way" ref="582946898" role="outer"/>
  <member type="way" ref="441068942" role="outer"/>
  <member type="way" ref="441068941" role="outer"/>
  <member type="way" ref="441068937" role="outer"/>
  <member type="way" ref="441068940" role="outer"/>
  <member type="way" ref="441068938" role="outer"/>
  <member type="way" ref="440662723" role="outer"/>
  <member type="way" ref="444062229" role="outer"/>
  <member type="way" ref="444062223" role="outer"/>
  <member type="way" ref="444062228" role="outer"/>
  <member type="way" ref="444062225" role="outer"/>
  <member type="way" ref="444062227" role="outer"/>
  <member type="way" ref="444062226" role="outer"/>
  <member type="way" ref="444062221" role="outer"/>
  <member type="way" ref="444062219" role="outer"/>
  <member type="way" ref="444062224" role="outer"/>
  <member type="way" ref="444062220" role="outer"/>
  <member type="way" ref="444062218" role="outer"/>
  <member type="way" ref="444062222" role="outer"/>
  <member type="way" ref="147978051" role="outer"/>
  <member type="way" ref="148094014" role="outer"/>
  <member type="way" ref="509499223" role="outer"/>
  <member type="way" ref="509499210" role="outer"/>
  <member type="way" ref="509499225" role="outer"/>
  <member type="way" ref="509499224" role="outer"/>
  <member type="way" ref="38313163" role="outer"/>
  <member type="way" ref="566888756" role="outer"/>
  <member type="way" ref="585125858" role="outer"/>
  <member type="way" ref="36837733" role="outer"/>
  <member type="way" ref="585125865" role="outer"/>
  <member type="way" ref="67069994" role="outer"/>
  <member type="way" ref="83009027" role="outer"/>
  <member type="way" ref="40696991" role="outer"/>
  <member type="way" ref="678172628" role="outer"/>
  <member type="way" ref="678172630" role="outer"/>
  <member type="way" ref="40696956" role="outer"/>
  <member type="way" ref="577821362" role="outer"/>
  <member type="way" ref="577821346" role="outer"/>
  <member type="way" ref="573209951" role="outer"/>
  <member type="way" ref="577821351" role="outer"/>
  <member type="way" ref="577821347" role="outer"/>
  <member type="way" ref="573209946" role="outer"/>
  <member type="way" ref="573213335" role="outer"/>
  <member type="way" ref="573213326" role="outer"/>
  <member type="way" ref="678172623" role="outer"/>
  <member type="way" ref="67070004" role="outer"/>
  <member type="way" ref="678172622" role="outer"/>
  <member type="way" ref="678172621" role="outer"/>
  <member type="way" ref="67070001" role="outer"/>
  <member type="way" ref="678172620" role="outer"/>
  <member type="way" ref="38313164" role="outer"/>
  <member type="way" ref="290131697" role="outer"/>
  <member type="way" ref="290131699" role="outer"/>
  <member type="way" ref="678172619" role="outer"/>
  <member type="way" ref="290131698" role="outer"/>
  <member type="way" ref="150295039" role="outer"/>
  <member type="way" ref="777773071" role="outer"/>
  <member type="way" ref="678172617" role="outer"/>
  <member type="way" ref="678172618" role="outer"/>
  <member type="way" ref="678172615" role="outer"/>
  <member type="way" ref="40963572" role="outer"/>
  <member type="way" ref="148315236" role="outer"/>
  <member type="way" ref="723125522" role="outer"/>
  <member type="way" ref="129694837" role="outer"/>
  <member type="way" ref="290390128" role="outer"/>
  <member type="way" ref="64497405" role="outer"/>
  <member type="way" ref="40963574" role="outer"/>
  <member type="way" ref="678172614" role="outer"/>
  <member type="way" ref="581589528" role="outer"/>
  <member type="way" ref="581265916" role="outer"/>
  <member type="way" ref="581265914" role="outer"/>
  <member type="way" ref="137991379" role="outer"/>
  <member type="way" ref="150455121" role="outer"/>
  <member type="way" ref="150455309" role="outer"/>
  <member type="way" ref="678172612" role="outer"/>
  <member type="way" ref="678172613" role="outer"/>
  <member type="way" ref="678172611" role="outer"/>
  <member type="way" ref="678172609" role="outer"/>
  <member type="way" ref="678172608" role="outer"/>
  <member type="way" ref="678172607" role="outer"/>
  <member type="way" ref="678172606" role="outer"/>
  <member type="way" ref="678172605" role="outer"/>
  <member type="way" ref="137991387" role="outer"/>
  <member type="way" ref="150455406" role="outer"/>
  <member type="way" ref="581265927" role="outer"/>
  <member type="way" ref="581215636" role="outer"/>
  <member type="way" ref="678172604" role="outer"/>
  <member type="way" ref="581215631" role="outer"/>
  <member type="way" ref="678172603" role="outer"/>
  <member type="way" ref="678172602" role="outer"/>
  <member type="way" ref="678172601" role="outer"/>
  <member type="way" ref="137991377" role="outer"/>
  <member type="way" ref="678172599" role="outer"/>
  <member type="way" ref="678172600" role="outer"/>
  <member type="way" ref="678172598" role="outer"/>
  <member type="way" ref="150450985" role="outer"/>
  <member type="way" ref="36808042" role="outer"/>
  <member type="way" ref="150450107" role="outer"/>
  <member type="way" ref="178295925" role="outer"/>
  <member type="way" ref="178299362" role="outer"/>
  <member type="way" ref="283675601" role="outer"/>
  <member type="way" ref="150449725" role="outer"/>
  <member type="way" ref="150454546" role="outer"/>
  <member type="way" ref="148312422" role="outer"/>
  <member type="way" ref="362953510" role="outer"/>
  <member type="way" ref="178454367" role="outer"/>
  <member type="way" ref="295357156" role="outer"/>
  <member type="way" ref="148072457" role="outer"/>
  <member type="way" ref="632458654" role="outer"/>
  <member type="way" ref="632458655" role="outer"/>
  <member type="way" ref="36808040" role="outer"/>
  <member type="way" ref="45382566" role="outer"/>
  <member type="way" ref="46343837" role="outer"/>
  <member type="way" ref="36808116" role="outer"/>
  <member type="way" ref="148071609" role="outer"/>
  <member type="way" ref="149401756" role="outer"/>
  <member type="way" ref="36808038" role="outer"/>
  <member type="way" ref="840527578" role="outer"/>
  <member type="way" ref="46343836" role="outer"/>
  <member type="way" ref="148062453" role="outer"/>
  <member type="way" ref="36808036" role="outer"/>
  <member type="way" ref="785278629" role="outer"/>
  <member type="way" ref="149342593" role="outer"/>
  <member type="way" ref="149342124" role="outer"/>
  <member type="way" ref="120306836" role="outer"/>
  <member type="way" ref="120224502" role="outer"/>
  <member type="way" ref="149341726" role="outer"/>
  <member type="way" ref="120224567" role="outer"/>
  <member type="way" ref="149340900" role="outer"/>
  <member type="way" ref="120929933" role="outer"/>
  <member type="way" ref="236851396" role="outer"/>
  <member type="way" ref="147963473" role="outer"/>
  <member type="way" ref="148976126" role="outer"/>
  <member type="way" ref="120393073" role="outer"/>
  <member type="way" ref="38426013" role="outer"/>
  <member type="way" ref="114389584" role="outer"/>
  <member type="way" ref="148975624" role="outer"/>
  <member type="way" ref="136477223" role="outer"/>
  <member type="way" ref="148975272" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="relation" ref="1996871" role="subarea"/>
  <member type="relation" ref="1995970" role="subarea"/>
  <member type="relation" ref="1995971" role="subarea"/>
  <member type="relation" ref="1997289" role="subarea"/>
  <member type="relation" ref="2000091" role="subarea"/>
  <member type="relation" ref="2000090" role="subarea"/>
  <member type="relation" ref="1997284" role="subarea"/>
  <member type="relation" ref="1996076" role="subarea"/>
  <member type="relation" ref="1996031" role="subarea"/>
  <member type="relation" ref="2000092" role="subarea"/>
  <member type="relation" ref="2000040" role="subarea"/>
  <member type="relation" ref="3572912" role="subarea"/>
  <member type="relation" ref="1152717" role="subarea"/>
  <tag k="addr:country" v="GE"/>
  <tag k="admin_level" v="2"/>
  <tag k="alt_name:eo" v="Kartvelujo"/>
  <tag k="border_type" v="International"/>
  <tag k="boundary" v="administrative"/>
  <tag k="default_language" v="ka"/>
  <tag k="flag" v="http://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg"/>
  <tag k="int_name" v="Georgia"/>
  <tag k="int_ref" v="GE"/>
  <tag k="ISO3166-1" v="GE"/>
  <tag k="ISO3166-1:alpha2" v="GE"/>
  <tag k="ISO3166-1:alpha3" v="GEO"/>
  <tag k="ISO3166-1:numeric" v="268"/>
  <tag k="name" v="საქართველო"/>
  <tag k="name:ab" v="Қырҭтәыла"/>
  <tag k="name:ace" v="Georgia"/>
  <tag k="name:af" v="Georgië"/>
  <tag k="name:als" v="Georgien"/>
  <tag k="name:am" v="ጂዮርጂያ"/>
  <tag k="name:an" v="Cheorchia"/>
  <tag k="name:ang" v="Georgia"/>
  <tag k="name:ar" v="جورجيا"/>
  <tag k="name:arc" v="ܓܘܪܓܝܐ"/>
  <tag k="name:arz" v="جيورجيا"/>
  <tag k="name:ast" v="Xeorxa"/>
  <tag k="name:av" v="Гуржи"/>
  <tag k="name:az" v="Gürcüstan"/>
  <tag k="name:bar" v="Georgien"/>
  <tag k="name:bat-smg" v="Grozėjė"/>
  <tag k="name:bcl" v="Georgya"/>
  <tag k="name:be" v="Грузія"/>
  <tag k="name:be-tarask" v="Грузія"/>
  <tag k="name:bg" v="Грузия"/>
  <tag k="name:bjn" v="Jorjiya"/>
  <tag k="name:bn" v="জর্জিয়া (রাষ্ট্র)"/>
  <tag k="name:bo" v="འཇོར་ཇི་ཡ། (རྒྱལ་ཁབ།)"/>
  <tag k="name:br" v="Jorjia (bro)"/>
  <tag k="name:bs" v="Gruzija"/>
  <tag k="name:bxr" v="Гүрж"/>
  <tag k="name:ca" v="Geòrgia"/>
  <tag k="name:cdo" v="Gáh-lū-gék-ā"/>
  <tag k="name:ce" v="Гуьржийчоь"/>
  <tag k="name:ceb" v="Georgia"/>
  <tag k="name:ckb" v="گورجستان"/>
  <tag k="name:crh" v="Gürcistan"/>
  <tag k="name:cs" v="Gruzie"/>
  <tag k="name:csb" v="Grëzóńskô"/>
  <tag k="name:cu" v="Гєѡргїꙗ"/>
  <tag k="name:cv" v="Грузи"/>
  <tag k="name:cy" v="Georgia"/>
  <tag k="name:da" v="Georgien"/>
  <tag k="name:de" v="Georgien"/>
  <tag k="name:diq" v="Gurcıstan"/>
  <tag k="name:dsb" v="Georgiska"/>
  <tag k="name:dv" v="ޖޯޖިޔާ (ޤައުމު)"/>
  <tag k="name:dz" v="ཇཽ་ཇཱ"/>
  <tag k="name:ee" v="Georgia"/>
  <tag k="name:el" v="Γεωργία"/>
  <tag k="name:en" v="Georgia"/>
  <tag k="name:eo" v="Kartvelio"/>
  <tag k="name:es" v="Georgia"/>
  <tag k="name:et" v="Gruusia"/>
  <tag k="name:eu" v="Georgia"/>
  <tag k="name:ext" v="Geólgia"/>
  <tag k="name:fa" v="گرجستان"/>
  <tag k="name:fi" v="Georgia"/>
  <tag k="name:fiu-vro" v="Gruusia"/>
  <tag k="name:fo" v="Georgia (land)"/>
  <tag k="name:fr" v="Géorgie"/>
  <tag k="name:frp" v="Jôrg·ie"/>
  <tag k="name:frr" v="Georgien"/>
  <tag k="name:fy" v="Geörgje"/>
  <tag k="name:ga" v="An tSeoirsia"/>
  <tag k="name:gag" v="Gruziya"/>
  <tag k="name:gd" v="A' Chairtbheil"/>
  <tag k="name:gl" v="Xeorxia - საქართველო"/>
  <tag k="name:gu" v="જ્યોર્જીયા (દેશ)"/>
  <tag k="name:gv" v="Yn Çhorshey"/>
  <tag k="name:hak" v="Kak-lû-kit-â"/>
  <tag k="name:haw" v="Keokia"/>
  <tag k="name:he" v="גאורגיה"/>
  <tag k="name:hi" v="जॉर्जिया"/>
  <tag k="name:hif" v="Georgia"/>
  <tag k="name:hr" v="Gruzija"/>
  <tag k="name:hsb" v="Georgiska"/>
  <tag k="name:ht" v="Jeoji"/>
  <tag k="name:hu" v="Grúzia"/>
  <tag k="name:hy" v="Վրաստան"/>
  <tag k="name:ia" v="Georgia"/>
  <tag k="name:id" v="Georgia"/>
  <tag k="name:ie" v="Georgia"/>
  <tag k="name:ilo" v="Georgia"/>
  <tag k="name:io" v="Gruzia"/>
  <tag k="name:is" v="Georgía"/>
  <tag k="name:it" v="Georgia"/>
  <tag k="name:ja" v="グルジア"/>
  <tag k="name:jv" v="Georgia"/>
  <tag k="name:ka" v="საქართველო"/>
  <tag k="name:kaa" v="Gruziya"/>
  <tag k="name:kbd" v="Хъырцей"/>
  <tag k="name:kk" v="Грузия"/>
  <tag k="name:kn" v="ಜಾರ್ಜಿಯ"/>
  <tag k="name:ko" v="조지아 (국가)"/>
  <tag k="name:krc" v="Гюрджю"/>
  <tag k="name:ku" v="Gurcistan"/>
  <tag k="name:kv" v="Грузия"/>
  <tag k="name:kw" v="Pow Grouzi"/>
  <tag k="name:ky" v="Грузия"/>
  <tag k="name:la" v="Georgia"/>
  <tag k="name:lb" v="Georgien"/>
  <tag k="name:lbe" v="Гуржисттан"/>
  <tag k="name:lez" v="Гуржистан"/>
  <tag k="name:li" v="Georgië"/>
  <tag k="name:lij" v="Geòrgia"/>
  <tag k="name:lmo" v="Georgia"/>
  <tag k="name:lt" v="Gruzija"/>
  <tag k="name:ltg" v="Gruzeja"/>
  <tag k="name:lv" v="Gruzija"/>
  <tag k="name:mdf" v="Грузие"/>
  <tag k="name:mhr" v="Грузий"/>
  <tag k="name:mi" v="Hōria"/>
  <tag k="name:min" v="Georgia"/>
  <tag k="name:mk" v="Грузија"/>
  <tag k="name:ml" v="ജോർജ്ജിയ"/>
  <tag k="name:mn" v="Гүрж"/>
  <tag k="name:mr" v="जॉर्जिया"/>
  <tag k="name:ms" v="Georgia"/>
  <tag k="name:mt" v="Ġeorġja"/>
  <tag k="name:my" v="ဂျော်ဂျီယာနိုင်ငံ"/>
  <tag k="name:mzn" v="گرجستون"/>
  <tag k="name:na" v="Djiordjiya"/>
  <tag k="name:nah" v="Georgia"/>
  <tag k="name:nan" v="Sakartvelo"/>
  <tag k="name:nds" v="Georgien"/>
  <tag k="name:ne" v="जर्जिया (देश)"/>
  <tag k="name:new" v="ज्योर्जिया"/>
  <tag k="name:nl" v="Georgië"/>
  <tag k="name:nn" v="Georgia"/>
  <tag k="name:no" v="Georgia"/>
  <tag k="name:nov" v="Georgia"/>
  <tag k="name:nv" v="Jóojah (Kéyah)"/>
  <tag k="name:oc" v="Georgia (Caucàs)"/>
  <tag k="name:or" v="ଜର୍ଜିଆ"/>
  <tag k="name:os" v="Гуырдзыстон"/>
  <tag k="name:pam" v="Georgya"/>
  <tag k="name:pih" v="Jorja"/>
  <tag k="name:pl" v="Gruzja"/>
  <tag k="name:pms" v="Geòrgia"/>
  <tag k="name:pnb" v="گرجستان"/>
  <tag k="name:pnt" v="Γρουζία"/>
  <tag k="name:ps" v="ګرجستان"/>
  <tag k="name:pt" v="Geórgia"/>
  <tag k="name:qu" v="Kartulsuyu"/>
  <tag k="name:ro" v="Georgia"/>
  <tag k="name:ru" v="Грузия"/>
  <tag k="name:rw" v="Geworugiya"/>
  <tag k="name:sah" v="Грузия"/>
  <tag k="name:sc" v="Georgia"/>
  <tag k="name:scn" v="Giorgia"/>
  <tag k="name:sco" v="Georgie"/>
  <tag k="name:se" v="Georgia"/>
  <tag k="name:sh" v="Gruzija"/>
  <tag k="name:si" v="ජෝර්ජියා (රට)"/>
  <tag k="name:sk" v="Gruzínsko"/>
  <tag k="name:sl" v="Gruzija"/>
  <tag k="name:smn" v="Georgia"/>
  <tag k="name:sms" v="Georgia"/>
  <tag k="name:so" v="Joorjiya"/>
  <tag k="name:sq" v="Gjeorgjia"/>
  <tag k="name:sr" v="Грузија"/>
  <tag k="name:ss" v="IJojiya"/>
  <tag k="name:stq" v="Georgien"/>
  <tag k="name:su" v="Géorgia"/>
  <tag k="name:sv" v="Georgien"/>
  <tag k="name:sw" v="Georgia (nchi)"/>
  <tag k="name:szl" v="Gruzyjo"/>
  <tag k="name:ta" v="சியார்சியா (நாடு)"/>
  <tag k="name:te" v="జార్జియా (దేశం)"/>
  <tag k="name:tg" v="Гурҷистон"/>
  <tag k="name:th" v="ประเทศจอร์เจีย"/>
  <tag k="name:tk" v="Gruziýa"/>
  <tag k="name:tl" v="Heorhiya"/>
  <tag k="name:tok" v="ma Katelo"/>
  <tag k="name:tr" v="Gürcistan"/>
  <tag k="name:tt" v="Гөрҗистан"/>
  <tag k="name:tzl" v="Cartavia"/>
  <tag k="name:udm" v="Грузия"/>
  <tag k="name:ug" v="گرۇزىيە"/>
  <tag k="name:uk" v="Грузія"/>
  <tag k="name:ur" v="جارجیا"/>
  <tag k="name:uz" v="Gurjiston"/>
  <tag k="name:vec" v="Zorzania"/>
  <tag k="name:vep" v="Gruzii"/>
  <tag k="name:vi" v="Gruzia"/>
  <tag k="name:vo" v="Grusiyän"/>
  <tag k="name:war" v="Georgia"/>
  <tag k="name:wo" v="Jeoorji"/>
  <tag k="name:wuu" v="格鲁吉亚"/>
  <tag k="name:xal" v="Гүрҗмүдин Орн"/>
  <tag k="name:xmf" v="საქორთუო"/>
  <tag k="name:yi" v="גרוזיע"/>
  <tag k="name:yo" v="Georgia"/>
  <tag k="name:yue" v="格魯吉亞"/>
  <tag k="name:zea" v="Georhië"/>
  <tag k="name:zh" v="格鲁吉亚"/>
  <tag k="population" v="3729500"/>
  <tag k="population:date" v="2015"/>
  <tag k="relation" v="nation"/>
  <tag k="source:population" v="wikipedia"/>
  <tag k="timezone" v="Asia/Tbilisi"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q230"/>
  <tag k="wikipedia" v="en:Georgia (country)"/>
 </relation>
 <relation id="174737" visible="true" version="307" changeset="90738441" timestamp="2020-09-11T06:39:36Z" user="Nesim" uid="1386706">
  <member type="node" ref="424298326" role="label"/>
  <member type="node" ref="25869410" role="admin_centre"/>
  <member type="way" ref="356819839" role="outer"/>
  <member type="way" ref="356824727" role="outer"/>
  <member type="way" ref="57782498" role="outer"/>
  <member type="way" ref="57782490" role="outer"/>
  <member type="way" ref="32426121" role="outer"/>
  <member type="way" ref="31878704" role="outer"/>
  <member type="way" ref="31878707" role="outer"/>
  <member type="way" ref="31878696" role="outer"/>
  <member type="way" ref="31878699" role="outer"/>
  <member type="way" ref="82288597" role="outer"/>
  <member type="way" ref="31878719" role="outer"/>
  <member type="way" ref="611854371" role="outer"/>
  <member type="way" ref="611854372" role="outer"/>
  <member type="way" ref="32401720" role="outer"/>
  <member type="way" ref="32401724" role="outer"/>
  <member type="way" ref="31878711" role="outer"/>
  <member type="way" ref="31878702" role="outer"/>
  <member type="way" ref="31878725" role="outer"/>
  <member type="way" ref="31878730" role="outer"/>
  <member type="way" ref="31878761" role="outer"/>
  <member type="way" ref="31878767" role="outer"/>
  <member type="way" ref="31878748" role="outer"/>
  <member type="way" ref="31878782" role="outer"/>
  <member type="way" ref="31878772" role="outer"/>
  <member type="way" ref="31878777" role="outer"/>
  <member type="way" ref="31878795" role="outer"/>
  <member type="way" ref="31878798" role="outer"/>
  <member type="way" ref="31878785" role="outer"/>
  <member type="way" ref="31878790" role="outer"/>
  <member type="way" ref="31878814" role="outer"/>
  <member type="way" ref="31878803" role="outer"/>
  <member type="way" ref="31878815" role="outer"/>
  <member type="way" ref="31878788" role="outer"/>
  <member type="way" ref="31878784" role="outer"/>
  <member type="way" ref="303869041" role="outer"/>
  <member type="way" ref="31878791" role="outer"/>
  <member type="way" ref="303869047" role="outer"/>
  <member type="way" ref="46768554" role="outer"/>
  <member type="way" ref="374589013" role="outer"/>
  <member type="way" ref="795525816" role="outer"/>
  <member type="way" ref="132346969" role="outer"/>
  <member type="way" ref="795849424" role="outer"/>
  <member type="way" ref="132346496" role="outer"/>
  <member type="way" ref="795849427" role="outer"/>
  <member type="way" ref="132346155" role="outer"/>
  <member type="way" ref="795849432" role="outer"/>
  <member type="way" ref="82540656" role="outer"/>
  <member type="way" ref="82540658" role="outer"/>
  <member type="way" ref="82590847" role="outer"/>
  <member type="way" ref="82536516" role="outer"/>
  <member type="way" ref="795849495" role="outer"/>
  <member type="way" ref="795849489" role="outer"/>
  <member type="way" ref="795849486" role="outer"/>
  <member type="way" ref="132345343" role="outer"/>
  <member type="way" ref="223337827" role="outer"/>
  <member type="way" ref="82590872" role="outer"/>
  <member type="way" ref="796746184" role="outer"/>
  <member type="way" ref="82590844" role="outer"/>
  <member type="way" ref="796746187" role="outer"/>
  <member type="way" ref="82590862" role="outer"/>
  <member type="way" ref="132342275" role="outer"/>
  <member type="way" ref="132342274" role="outer"/>
  <member type="way" ref="132342268" role="outer"/>
  <member type="way" ref="82542620" role="outer"/>
  <member type="way" ref="478424875" role="outer"/>
  <member type="way" ref="37326634" role="outer"/>
  <member type="way" ref="796746190" role="outer"/>
  <member type="way" ref="132339647" role="outer"/>
  <member type="way" ref="796746195" role="outer"/>
  <member type="way" ref="132339649" role="outer"/>
  <member type="way" ref="132339643" role="outer"/>
  <member type="way" ref="132339631" role="outer"/>
  <member type="way" ref="132339618" role="outer"/>
  <member type="way" ref="531468743" role="outer"/>
  <member type="way" ref="796746198" role="outer"/>
  <member type="way" ref="796746205" role="outer"/>
  <member type="way" ref="796746209" role="outer"/>
  <member type="way" ref="132339648" role="outer"/>
  <member type="way" ref="531475123" role="outer"/>
  <member type="way" ref="132338224" role="outer"/>
  <member type="way" ref="531475121" role="outer"/>
  <member type="way" ref="134541734" role="outer"/>
  <member type="way" ref="796746239" role="outer"/>
  <member type="way" ref="132337967" role="outer"/>
  <member type="way" ref="846310347" role="outer"/>
  <member type="way" ref="846310346" role="outer"/>
  <member type="way" ref="132335788" role="outer"/>
  <member type="way" ref="846310352" role="outer"/>
  <member type="way" ref="796862166" role="outer"/>
  <member type="way" ref="846318042" role="outer"/>
  <member type="way" ref="846318049" role="outer"/>
  <member type="way" ref="132335786" role="outer"/>
  <member type="way" ref="132334537" role="outer"/>
  <member type="way" ref="33050091" role="outer"/>
  <member type="way" ref="364377904" role="outer"/>
  <member type="way" ref="364377895" role="outer"/>
  <member type="way" ref="364377898" role="outer"/>
  <member type="way" ref="794841530" role="outer"/>
  <member type="way" ref="33049272" role="outer"/>
  <member type="way" ref="132332913" role="outer"/>
  <member type="way" ref="15219812" role="outer"/>
  <member type="way" ref="840061286" role="outer"/>
  <member type="way" ref="840061284" role="outer"/>
  <member type="way" ref="840082001" role="outer"/>
  <member type="way" ref="840082004" role="outer"/>
  <member type="way" ref="840082007" role="outer"/>
  <member type="way" ref="795041610" role="outer"/>
  <member type="way" ref="132331729" role="outer"/>
  <member type="way" ref="123849113" role="outer"/>
  <member type="way" ref="795041588" role="outer"/>
  <member type="way" ref="93601735" role="outer"/>
  <member type="way" ref="794890036" role="outer"/>
  <member type="way" ref="129901506" role="outer"/>
  <member type="way" ref="129901507" role="outer"/>
  <member type="way" ref="129786238" role="outer"/>
  <member type="way" ref="33049345" role="outer"/>
  <member type="way" ref="800821348" role="outer"/>
  <member type="way" ref="825181237" role="outer"/>
  <member type="way" ref="825181238" role="outer"/>
  <member type="way" ref="132353393" role="outer"/>
  <member type="way" ref="132353390" role="outer"/>
  <member type="way" ref="800821355" role="outer"/>
  <member type="way" ref="132353396" role="outer"/>
  <member type="way" ref="132353387" role="outer"/>
  <member type="way" ref="132353399" role="outer"/>
  <member type="way" ref="551156240" role="outer"/>
  <member type="way" ref="132353385" role="outer"/>
  <member type="way" ref="15219944" role="outer"/>
  <member type="way" ref="132355968" role="outer"/>
  <member type="way" ref="132355971" role="outer"/>
  <member type="way" ref="132355974" role="outer"/>
  <member type="way" ref="95347614" role="outer"/>
  <member type="way" ref="132357267" role="outer"/>
  <member type="way" ref="132357265" role="outer"/>
  <member type="way" ref="132357268" role="outer"/>
  <member type="way" ref="132357274" role="outer"/>
  <member type="way" ref="95697928" role="outer"/>
  <member type="way" ref="132364287" role="outer"/>
  <member type="way" ref="132364350" role="outer"/>
  <member type="way" ref="663447852" role="outer"/>
  <member type="way" ref="663446015" role="outer"/>
  <member type="way" ref="132364300" role="outer"/>
  <member type="way" ref="663315892" role="outer"/>
  <member type="way" ref="801442716" role="outer"/>
  <member type="way" ref="132364322" role="outer"/>
  <member type="way" ref="288606516" role="outer"/>
  <member type="way" ref="663316915" role="outer"/>
  <member type="way" ref="132364316" role="outer"/>
  <member type="way" ref="132364353" role="outer"/>
  <member type="way" ref="132364293" role="outer"/>
  <member type="way" ref="663587447" role="outer"/>
  <member type="way" ref="15221706" role="outer"/>
  <member type="way" ref="440741895" role="outer"/>
  <member type="way" ref="10158600" role="outer"/>
  <member type="way" ref="440957589" role="outer"/>
  <member type="way" ref="132397487" role="outer"/>
  <member type="way" ref="132397486" role="outer"/>
  <member type="way" ref="440956921" role="outer"/>
  <member type="way" ref="132397488" role="outer"/>
  <member type="way" ref="440956918" role="outer"/>
  <member type="way" ref="132397489" role="outer"/>
  <member type="way" ref="440956920" role="outer"/>
  <member type="way" ref="83192197" role="outer"/>
  <member type="way" ref="440740537" role="outer"/>
  <member type="way" ref="132398610" role="outer"/>
  <member type="way" ref="132398631" role="outer"/>
  <member type="way" ref="132398643" role="outer"/>
  <member type="way" ref="440957124" role="outer"/>
  <member type="way" ref="132398626" role="outer"/>
  <member type="way" ref="132398620" role="outer"/>
  <member type="way" ref="132398630" role="outer"/>
  <member type="way" ref="440957125" role="outer"/>
  <member type="way" ref="440739751" role="outer"/>
  <member type="way" ref="440957123" role="outer"/>
  <member type="way" ref="132398604" role="outer"/>
  <member type="way" ref="132398638" role="outer"/>
  <member type="way" ref="132398639" role="outer"/>
  <member type="way" ref="132398634" role="outer"/>
  <member type="way" ref="132398609" role="outer"/>
  <member type="way" ref="440957225" role="outer"/>
  <member type="way" ref="132398606" role="outer"/>
  <member type="way" ref="132398636" role="outer"/>
  <member type="way" ref="132398611" role="outer"/>
  <member type="way" ref="132537011" role="outer"/>
  <member type="way" ref="440738449" role="outer"/>
  <member type="way" ref="132398607" role="outer"/>
  <member type="way" ref="132398628" role="outer"/>
  <member type="way" ref="132398595" role="outer"/>
  <member type="way" ref="132537010" role="outer"/>
  <member type="way" ref="132398633" role="outer"/>
  <member type="way" ref="440958800" role="outer"/>
  <member type="way" ref="132398608" role="outer"/>
  <member type="way" ref="440958802" role="outer"/>
  <member type="way" ref="132398614" role="outer"/>
  <member type="way" ref="132398599" role="outer"/>
  <member type="way" ref="440958801" role="outer"/>
  <member type="way" ref="132398605" role="outer"/>
  <member type="way" ref="132399610" role="outer"/>
  <member type="way" ref="132399618" role="outer"/>
  <member type="way" ref="440738448" role="outer"/>
  <member type="way" ref="132399611" role="outer"/>
  <member type="way" ref="179142114" role="outer"/>
  <member type="way" ref="440958799" role="outer"/>
  <member type="way" ref="132399616" role="outer"/>
  <member type="way" ref="132399614" role="outer"/>
  <member type="way" ref="132399615" role="outer"/>
  <member type="way" ref="440958798" role="outer"/>
  <member type="way" ref="132399617" role="outer"/>
  <member type="way" ref="132399613" role="outer"/>
  <member type="way" ref="83619751" role="outer"/>
  <member type="way" ref="132400688" role="outer"/>
  <member type="way" ref="132400692" role="outer"/>
  <member type="way" ref="132400690" role="outer"/>
  <member type="way" ref="132400689" role="outer"/>
  <member type="way" ref="132400691" role="outer"/>
  <member type="way" ref="440594414" role="outer"/>
  <member type="way" ref="178953049" role="outer"/>
  <member type="way" ref="22754479" role="outer"/>
  <member type="way" ref="108581186" role="outer"/>
  <member type="way" ref="108576261" role="outer"/>
  <member type="way" ref="108576252" role="outer"/>
  <member type="way" ref="782401964" role="outer"/>
  <member type="way" ref="108588823" role="outer"/>
  <member type="way" ref="782401961" role="outer"/>
  <member type="way" ref="231214201" role="outer"/>
  <member type="way" ref="83619747" role="outer"/>
  <member type="way" ref="108626649" role="outer"/>
  <member type="way" ref="46343015" role="outer"/>
  <member type="way" ref="83619713" role="outer"/>
  <member type="way" ref="782625317" role="outer"/>
  <member type="way" ref="108641212" role="outer"/>
  <member type="way" ref="108683658" role="outer"/>
  <member type="way" ref="782625315" role="outer"/>
  <member type="way" ref="83619719" role="outer"/>
  <member type="way" ref="108685603" role="outer"/>
  <member type="way" ref="83619727" role="outer"/>
  <member type="way" ref="109012501" role="outer"/>
  <member type="way" ref="109012920" role="outer"/>
  <member type="way" ref="109148897" role="outer"/>
  <member type="way" ref="121488538" role="outer"/>
  <member type="way" ref="82897452" role="outer"/>
  <member type="way" ref="121458247" role="outer"/>
  <member type="way" ref="136472636" role="outer"/>
  <member type="way" ref="121455826" role="outer"/>
  <member type="way" ref="121475928" role="outer"/>
  <member type="way" ref="121553800" role="outer"/>
  <member type="way" ref="121563246" role="outer"/>
  <member type="way" ref="109161724" role="outer"/>
  <member type="way" ref="136472618" role="outer"/>
  <member type="way" ref="132401606" role="outer"/>
  <member type="way" ref="132401602" role="outer"/>
  <member type="way" ref="132401607" role="outer"/>
  <member type="way" ref="132401603" role="outer"/>
  <member type="way" ref="132401604" role="outer"/>
  <member type="way" ref="785278628" role="outer"/>
  <member type="way" ref="132401605" role="outer"/>
  <member type="way" ref="549197240" role="outer"/>
  <member type="way" ref="136472617" role="outer"/>
  <member type="way" ref="132401608" role="outer"/>
  <member type="way" ref="120393077" role="outer"/>
  <member type="way" ref="16077776" role="outer"/>
  <member type="way" ref="149342593" role="outer"/>
  <member type="way" ref="149342124" role="outer"/>
  <member type="way" ref="120306836" role="outer"/>
  <member type="way" ref="120224502" role="outer"/>
  <member type="way" ref="149341726" role="outer"/>
  <member type="way" ref="120224567" role="outer"/>
  <member type="way" ref="149340900" role="outer"/>
  <member type="way" ref="120929933" role="outer"/>
  <member type="way" ref="236851396" role="outer"/>
  <member type="way" ref="147963473" role="outer"/>
  <member type="way" ref="148976126" role="outer"/>
  <member type="way" ref="120393073" role="outer"/>
  <member type="way" ref="38426013" role="outer"/>
  <member type="way" ref="114389584" role="outer"/>
  <member type="way" ref="148975624" role="outer"/>
  <member type="way" ref="136477223" role="outer"/>
  <member type="way" ref="148975272" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="way" ref="36737725" role="outer"/>
  <member type="way" ref="38425500" role="outer"/>
  <member type="way" ref="31878693" role="outer"/>
  <member type="way" ref="31878695" role="outer"/>
  <member type="way" ref="31878689" role="outer"/>
  <member type="way" ref="31878691" role="outer"/>
  <member type="way" ref="31878687" role="outer"/>
  <member type="way" ref="31878742" role="outer"/>
  <member type="way" ref="82285211" role="outer"/>
  <member type="way" ref="31878728" role="outer"/>
  <member type="way" ref="82285210" role="outer"/>
  <member type="way" ref="31878717" role="outer"/>
  <member type="way" ref="31878709" role="outer"/>
  <member type="way" ref="82285212" role="outer"/>
  <member type="way" ref="31878779" role="outer"/>
  <member type="way" ref="31878769" role="outer"/>
  <member type="way" ref="31878760" role="outer"/>
  <member type="way" ref="31878752" role="outer"/>
  <member type="way" ref="31878801" role="outer"/>
  <member type="way" ref="31878806" role="outer"/>
  <member type="way" ref="31878812" role="outer"/>
  <member type="way" ref="82285621" role="outer"/>
  <member type="way" ref="31878805" role="outer"/>
  <member type="way" ref="31878792" role="outer"/>
  <member type="way" ref="31878797" role="outer"/>
  <member type="way" ref="31878789" role="outer"/>
  <member type="way" ref="31878765" role="outer"/>
  <member type="way" ref="31878794" role="outer"/>
  <member type="way" ref="31878804" role="outer"/>
  <member type="way" ref="31878781" role="outer"/>
  <member type="way" ref="31878813" role="outer"/>
  <member type="way" ref="82287167" role="outer"/>
  <member type="way" ref="31878744" role="outer"/>
  <member type="way" ref="31878747" role="outer"/>
  <member type="way" ref="82287170" role="outer"/>
  <member type="way" ref="31878771" role="outer"/>
  <member type="way" ref="46420246" role="outer"/>
  <member type="way" ref="642878012" role="outer"/>
  <member type="way" ref="255234404" role="outer"/>
  <member type="way" ref="115125767" role="outer"/>
  <member type="way" ref="143103195" role="outer"/>
  <member type="way" ref="255234403" role="outer"/>
  <member type="way" ref="255224067" role="outer"/>
  <member type="way" ref="396870714" role="outer"/>
  <member type="way" ref="255224066" role="outer"/>
  <member type="way" ref="250479497" role="outer"/>
  <member type="way" ref="396870715" role="outer"/>
  <member type="way" ref="232113238" role="outer"/>
  <member type="way" ref="136156973" role="outer"/>
  <member type="way" ref="136156954" role="outer"/>
  <member type="way" ref="396870698" role="outer"/>
  <member type="way" ref="372360092" role="outer"/>
  <member type="way" ref="396870699" role="outer"/>
  <member type="way" ref="387066088" role="outer"/>
  <member type="way" ref="396870700" role="outer"/>
  <member type="way" ref="372360091" role="outer"/>
  <member type="way" ref="99228408" role="outer"/>
  <member type="way" ref="143105020" role="outer"/>
  <member type="way" ref="372360102" role="outer"/>
  <member type="way" ref="128922515" role="outer"/>
  <member type="way" ref="116904876" role="outer"/>
  <member type="way" ref="196920028" role="outer"/>
  <member type="way" ref="387164274" role="outer"/>
  <member type="way" ref="387164276" role="outer"/>
  <member type="way" ref="387164302" role="outer"/>
  <member type="way" ref="490046196" role="outer"/>
  <member type="way" ref="387164299" role="outer"/>
  <member type="way" ref="16107279" role="outer"/>
  <member type="way" ref="96870784" role="outer"/>
  <member type="way" ref="96870785" role="outer"/>
  <member type="way" ref="81623520" role="outer"/>
  <member type="way" ref="136107349" role="outer"/>
  <member type="way" ref="96870814" role="outer"/>
  <member type="way" ref="96870796" role="outer"/>
  <member type="way" ref="96718494" role="outer"/>
  <member type="way" ref="96718491" role="outer"/>
  <member type="way" ref="96718488" role="outer"/>
  <member type="way" ref="81623582" role="outer"/>
  <member type="way" ref="397161353" role="outer"/>
  <member type="way" ref="397161354" role="outer"/>
  <member type="way" ref="136150497" role="outer"/>
  <member type="way" ref="136150498" role="outer"/>
  <member type="way" ref="123870323" role="outer"/>
  <member type="way" ref="123787869" role="outer"/>
  <member type="way" ref="761616419" role="outer"/>
  <member type="way" ref="761616418" role="outer"/>
  <member type="way" ref="123870326" role="outer"/>
  <member type="way" ref="123870330" role="outer"/>
  <member type="way" ref="175594704" role="outer"/>
  <member type="way" ref="123870333" role="outer"/>
  <member type="way" ref="123870329" role="outer"/>
  <member type="way" ref="123787815" role="outer"/>
  <member type="way" ref="123787836" role="outer"/>
  <member type="way" ref="123796159" role="outer"/>
  <member type="way" ref="175594698" role="outer"/>
  <member type="way" ref="123802840" role="outer"/>
  <member type="way" ref="700454850" role="outer"/>
  <member type="way" ref="700454851" role="outer"/>
  <member type="way" ref="123802834" role="outer"/>
  <member type="way" ref="123802838" role="outer"/>
  <member type="way" ref="123802837" role="outer"/>
  <member type="way" ref="249713965" role="outer"/>
  <member type="way" ref="629945154" role="outer"/>
  <member type="way" ref="249713964" role="outer"/>
  <member type="way" ref="249703213" role="outer"/>
  <member type="way" ref="136165223" role="outer"/>
  <member type="way" ref="249718805" role="outer"/>
  <member type="way" ref="249700287" role="outer"/>
  <member type="way" ref="249700289" role="outer"/>
  <member type="way" ref="300092119" role="outer"/>
  <member type="way" ref="123873450" role="outer"/>
  <member type="way" ref="123873461" role="outer"/>
  <member type="way" ref="32312818" role="outer"/>
  <member type="way" ref="46421312" role="outer"/>
  <member type="way" ref="46421309" role="outer"/>
  <member type="way" ref="356952649" role="outer"/>
  <member type="way" ref="82288606" role="outer"/>
  <member type="way" ref="82288621" role="outer"/>
  <member type="way" ref="82288618" role="outer"/>
  <member type="way" ref="356952648" role="outer"/>
  <member type="way" ref="356819847" role="outer"/>
  <member type="way" ref="773881112" role="outer"/>
  <tag k="admin_level" v="2"/>
  <tag k="alt_name:ar" v="تركيا"/>
  <tag k="alt_name:eo" v="Turkujo"/>
  <tag k="boundary" v="administrative"/>
  <tag k="default_language" v="tr"/>
  <tag k="flag" v="http://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"/>
  <tag k="int_name" v="Turkey"/>
  <tag k="is_in:continent" v="Asia"/>
  <tag k="is_in:continent_1" v="Europe"/>
  <tag k="ISO3166-1" v="TR"/>
  <tag k="ISO3166-1:alpha2" v="TR"/>
  <tag k="ISO3166-1:alpha3" v="TUR"/>
  <tag k="ISO3166-1:numeric" v="792"/>
  <tag k="name" v="Türkiye"/>
  <tag k="name:ab" v="Ҭырқәтәыла"/>
  <tag k="name:ace" v="Turuki"/>
  <tag k="name:af" v="Turkye"/>
  <tag k="name:ak" v="Turki"/>
  <tag k="name:als" v="Türkei"/>
  <tag k="name:am" v="ቱርክ"/>
  <tag k="name:an" v="Turquía"/>
  <tag k="name:ang" v="Turcland"/>
  <tag k="name:ar" v="تركيا"/>
  <tag k="name:arc" v="ܛܘܪܩܝܐ"/>
  <tag k="name:arz" v="توركيا"/>
  <tag k="name:ast" v="Turquía"/>
  <tag k="name:av" v="Туркия"/>
  <tag k="name:ay" v="Turkiya"/>
  <tag k="name:az" v="Türkiyə"/>
  <tag k="name:ba" v="Төркиә"/>
  <tag k="name:bar" v="Tiakei"/>
  <tag k="name:bat-smg" v="Torkėjė"/>
  <tag k="name:bcl" v="Turkiya"/>
  <tag k="name:be" v="Турцыя"/>
  <tag k="name:be-tarask" v="Турэччына"/>
  <tag k="name:bg" v="Турция"/>
  <tag k="name:bi" v="Turkey"/>
  <tag k="name:bjn" v="Turki"/>
  <tag k="name:bn" v="তুরস"/>
  <tag k="name:bo" v="ཏུར་ཀི།"/>
  <tag k="name:bpy" v="তুরস্ক"/>
  <tag k="name:br" v="Turkia"/>
  <tag k="name:bs" v="Turska"/>
  <tag k="name:bug" v="Turki"/>
  <tag k="name:bxr" v="Тюрк Улас"/>
  <tag k="name:ca" v="Turquia"/>
  <tag k="name:cbk-zam" v="Turquía"/>
  <tag k="name:cdo" v="Tū-ī-gì"/>
  <tag k="name:ce" v="Туркойчоь"/>
  <tag k="name:ceb" v="Turkiya"/>
  <tag k="name:chr" v="ᎬᏂᏱ"/>
  <tag k="name:chy" v="Turkey"/>
  <tag k="name:ckb" v="تورکیا"/>
  <tag k="name:cr" v="ᑐᕒᑭ"/>
  <tag k="name:crh" v="Türkiye"/>
  <tag k="name:cs" v="Turecko"/>
  <tag k="name:csb" v="Tëreckô"/>
  <tag k="name:cu" v="Тѷрци"/>
  <tag k="name:cv" v="Турци"/>
  <tag k="name:cy" v="Twrci"/>
  <tag k="name:da" v="Tyrkiet"/>
  <tag k="name:de" v="Türkei"/>
  <tag k="name:diq" v="Tırkiya"/>
  <tag k="name:dsb" v="Turkojska"/>
  <tag k="name:dv" v="ތުރުކީވިލާތް"/>
  <tag k="name:ee" v="Turkey"/>
  <tag k="name:el" v="Τουρκία"/>
  <tag k="name:eml" v="Turchî"/>
  <tag k="name:en" v="Turkey"/>
  <tag k="name:eo" v="Turkio"/>
  <tag k="name:es" v="Turquía"/>
  <tag k="name:et" v="Türgi"/>
  <tag k="name:eu" v="Turkia"/>
  <tag k="name:ext" v="Turquia"/>
  <tag k="name:fa" v="ترکیه"/>
  <tag k="name:fi" v="Turkki"/>
  <tag k="name:fiu-vro" v="Türgü"/>
  <tag k="name:fo" v="Turkaland"/>
  <tag k="name:fr" v="Turquie"/>
  <tag k="name:frp" v="Turquie"/>
  <tag k="name:frr" v="Türkei"/>
  <tag k="name:fy" v="Turkije"/>
  <tag k="name:ga" v="An Tuirc"/>
  <tag k="name:gag" v="Türkiye"/>
  <tag k="name:gan" v="土耳其"/>
  <tag k="name:gd" v="An Tuirc"/>
  <tag k="name:gl" v="Turquía"/>
  <tag k="name:gn" v="Tuykia"/>
  <tag k="name:gu" v="તુર્કસ્તાન"/>
  <tag k="name:gv" v="Yn Turkee"/>
  <tag k="name:ha" v="Turkiyya"/>
  <tag k="name:hak" v="Thú-ngí-khì"/>
  <tag k="name:haw" v="Tureke"/>
  <tag k="name:he" v="טורקיה"/>
  <tag k="name:hi" v="तुर्की"/>
  <tag k="name:hif" v="Turkey"/>
  <tag k="name:hr" v="Turska"/>
  <tag k="name:hsb" v="Turkowska"/>
  <tag k="name:ht" v="Tiki"/>
  <tag k="name:hu" v="Törökország"/>
  <tag k="name:hy" v="Թուրքիա"/>
  <tag k="name:ia" v="Turchia"/>
  <tag k="name:id" v="Turki"/>
  <tag k="name:ie" v="Turcia"/>
  <tag k="name:ik" v="Turkey"/>
  <tag k="name:ilo" v="Turkia"/>
  <tag k="name:io" v="Turkia"/>
  <tag k="name:is" v="Tyrkland"/>
  <tag k="name:it" v="Turchia"/>
  <tag k="name:ja" v="トルコ"/>
  <tag k="name:jbo" v="turk"/>
  <tag k="name:jv" v="Turki"/>
  <tag k="name:ka" v="თურქეთი"/>
  <tag k="name:kaa" v="Tu'rkiya"/>
  <tag k="name:kab" v="Tturk"/>
  <tag k="name:kbd" v="Тырку"/>
  <tag k="name:kg" v="Turki"/>
  <tag k="name:ki" v="Turkey"/>
  <tag k="name:kk" v="Түркия"/>
  <tag k="name:kl" v="Tyrkia"/>
  <tag k="name:kn" v="ಟರ್ಕಿ"/>
  <tag k="name:ko" v="터키"/>
  <tag k="name:koi" v="Тюркия"/>
  <tag k="name:krc" v="Тюрк"/>
  <tag k="name:ku" v="Tirkiye"/>
  <tag k="name:kv" v="Турция"/>
  <tag k="name:kw" v="Turki"/>
  <tag k="name:ky" v="Түркия Республикасы"/>
  <tag k="name:la" v="Turcia"/>
  <tag k="name:lad" v="Turkiya"/>
  <tag k="name:lb" v="Tierkei"/>
  <tag k="name:lbe" v="Туркия"/>
  <tag k="name:lez" v="Турция"/>
  <tag k="name:lg" v="Buturuki"/>
  <tag k="name:li" v="Turkije"/>
  <tag k="name:lij" v="Turchia"/>
  <tag k="name:lmo" v="Türchia"/>
  <tag k="name:ln" v="Turkí"/>
  <tag k="name:lt" v="Turkija"/>
  <tag k="name:ltg" v="Turceja"/>
  <tag k="name:lv" v="Turcija"/>
  <tag k="name:lzh" v="土耳其"/>
  <tag k="name:mdf" v="Туркамастор"/>
  <tag k="name:mg" v="Torkia"/>
  <tag k="name:mhr" v="Турций"/>
  <tag k="name:mi" v="Tākei"/>
  <tag k="name:mk" v="Турција"/>
  <tag k="name:ml" v="തുർക്കി"/>
  <tag k="name:mn" v="Турк"/>
  <tag k="name:mr" v="तुर्कस्तान"/>
  <tag k="name:mrj" v="Турци"/>
  <tag k="name:ms" v="Turki"/>
  <tag k="name:mt" v="Turkija"/>
  <tag k="name:mwl" v="Turquie"/>
  <tag k="name:my" v="တူရကီနိုင်ငံ"/>
  <tag k="name:mzn" v="ترکیه"/>
  <tag k="name:na" v="Terki"/>
  <tag k="name:nah" v="Turquia"/>
  <tag k="name:nan" v="Türkiye"/>
  <tag k="name:nap" v="Turchia"/>
  <tag k="name:nds" v="Törkie"/>
  <tag k="name:nds-nl" v="Turkije"/>
  <tag k="name:ne" v="टर्की"/>
  <tag k="name:new" v="टर्की"/>
  <tag k="name:nl" v="Turkije"/>
  <tag k="name:nn" v="Tyrkia"/>
  <tag k="name:no" v="Tyrkia"/>
  <tag k="name:nov" v="Turkia"/>
  <tag k="name:nrm" v="Turtchie"/>
  <tag k="name:nso" v="Turkey"/>
  <tag k="name:nv" v="Tʼóok Bikéyah"/>
  <tag k="name:oc" v="Turquia"/>
  <tag k="name:or" v="ତୁର୍କୀ"/>
  <tag k="name:os" v="Турк"/>
  <tag k="name:pa" v="ਤੁਰਕੀ"/>
  <tag k="name:pam" v="Turkia"/>
  <tag k="name:pap" v="Turkia"/>
  <tag k="name:pcd" v="Turkie"/>
  <tag k="name:pdc" v="Turkie"/>
  <tag k="name:pih" v="Turkii"/>
  <tag k="name:pl" v="Turcja"/>
  <tag k="name:pms" v="Turchìa"/>
  <tag k="name:pnb" v="ترکی"/>
  <tag k="name:pnt" v="Τουρκία"/>
  <tag k="name:ps" v="تورکيه"/>
  <tag k="name:pt" v="Turquia"/>
  <tag k="name:qu" v="Turkiya"/>
  <tag k="name:rm" v="Tirchia"/>
  <tag k="name:rmy" v="Turkiya"/>
  <tag k="name:rn" v="Turukiya"/>
  <tag k="name:ro" v="Turcia"/>
  <tag k="name:roa-rup" v="Turchia"/>
  <tag k="name:roa-tara" v="Turchie"/>
  <tag k="name:ru" v="Турция"/>
  <tag k="name:rue" v="Турція"/>
  <tag k="name:rw" v="Turukiya"/>
  <tag k="name:sa" v="तुर्की"/>
  <tag k="name:sah" v="Түркийэ"/>
  <tag k="name:sc" v="Turkia"/>
  <tag k="name:scn" v="Turchìa"/>
  <tag k="name:sco" v="Turkey"/>
  <tag k="name:se" v="Durka"/>
  <tag k="name:sh" v="Turska"/>
  <tag k="name:si" v="තුර්කිය"/>
  <tag k="name:sk" v="Turecko"/>
  <tag k="name:sl" v="Turčija"/>
  <tag k="name:smn" v="Turkki"/>
  <tag k="name:sms" v="Turkk"/>
  <tag k="name:so" v="Turki"/>
  <tag k="name:sq" v="Turqia"/>
  <tag k="name:sr" v="Турска"/>
  <tag k="name:srn" v="Turkiyakondre"/>
  <tag k="name:ss" v="IThekhi"/>
  <tag k="name:stq" v="Turkäi"/>
  <tag k="name:su" v="Turki"/>
  <tag k="name:sv" v="Turkiet"/>
  <tag k="name:sw" v="Uturuki"/>
  <tag k="name:szl" v="Turcyjo"/>
  <tag k="name:ta" v="துருக்கி"/>
  <tag k="name:te" v="టర్కీ"/>
  <tag k="name:tet" v="Turkia"/>
  <tag k="name:tg" v="Туркия"/>
  <tag k="name:th" v="ประเทศตุรกี"/>
  <tag k="name:tk" v="Türkiýe"/>
  <tag k="name:tl" v="Turkiya"/>
  <tag k="name:tpi" v="Teki"/>
  <tag k="name:tr" v="Türkiye"/>
  <tag k="name:tt" v="Төркия"/>
  <tag k="name:tum" v="Turkey"/>
  <tag k="name:tw" v="Turkey"/>
  <tag k="name:tzl" v="Türchia"/>
  <tag k="name:tzl_1" v="ma Tuki"/>
  <tag k="name:udm" v="Турция"/>
  <tag k="name:ug" v="تۈركىيە جۇمھۇرىيىتى"/>
  <tag k="name:uk" v="Туреччина"/>
  <tag k="name:ur" v="ترکی"/>
  <tag k="name:uz" v="Turkiya"/>
  <tag k="name:vec" v="Turchia"/>
  <tag k="name:vep" v="Turcii"/>
  <tag k="name:vi" v="Thổ Nhĩ Kỳ"/>
  <tag k="name:vls" v="Turkeye"/>
  <tag k="name:vo" v="Türkän"/>
  <tag k="name:wa" v="Tourkeye"/>
  <tag k="name:war" v="Turkeya"/>
  <tag k="name:wo" v="Tirki"/>
  <tag k="name:wuu" v="土耳其"/>
  <tag k="name:xal" v="Түргүдин Орн"/>
  <tag k="name:xmf" v="თურქეთი"/>
  <tag k="name:yi" v="טערקיי"/>
  <tag k="name:yo" v="Túrkì"/>
  <tag k="name:yue" v="土耳其"/>
  <tag k="name:za" v="Dujwjgiz"/>
  <tag k="name:zea" v="Turkije"/>
  <tag k="name:zh" v="土耳其"/>
  <tag k="name:zh-Hans" v="土耳其"/>
  <tag k="name:zh-Hant" v="土耳其"/>
  <tag k="name:zu" v="ITheki"/>
  <tag k="official_name" v="Türkiye Cumhuriyeti"/>
  <tag k="official_name:cs" v="Turecká republika"/>
  <tag k="official_name:de" v="Republik Turkei"/>
  <tag k="official_name:el" v="Δημοκρατία της Τουρκίας"/>
  <tag k="official_name:en" v="Republic of Turkey"/>
  <tag k="official_name:eo" v="Turka Respubliko"/>
  <tag k="official_name:es" v="República de Turquía"/>
  <tag k="official_name:fi" v="Turkin tasavalta"/>
  <tag k="official_name:fr" v="République de Turquie"/>
  <tag k="official_name:he" v="הרפובליקה הטורקית"/>
  <tag k="official_name:ku" v="Komara Tirkiyeyê"/>
  <tag k="official_name:ru" v="Турецкая Республика"/>
  <tag k="official_name:zh" v="土耳其共和國/土耳其共和国"/>
  <tag k="official_name:zh-Hans" v="土耳其共和国"/>
  <tag k="official_name:zh-Hant" v="土耳其共和國"/>
  <tag k="population" v="79814871"/>
  <tag k="timezone" v="Europe/Istanbul"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q43"/>
  <tag k="wikipedia" v="tr:Türkiye"/>
 </relation>
 <relation id="176922" visible="true" version="679" changeset="88596741" timestamp="2020-07-28T05:20:29Z" user="Aka_Bob" uid="415497">
  <member type="node" ref="6285514452" role=""/>
  <member type="way" ref="738650699" role=""/>
  <member type="way" ref="738650700" role=""/>
  <member type="way" ref="280580021" role=""/>
  <member type="way" ref="598089878" role=""/>
  <member type="way" ref="399509764" role=""/>
  <member type="way" ref="586001061" role=""/>
  <member type="way" ref="586000610" role=""/>
  <member type="way" ref="822377301" role=""/>
  <member type="way" ref="586000609" role=""/>
  <member type="way" ref="586007830" role=""/>
  <member type="way" ref="822377298" role=""/>
  <member type="way" ref="489830915" role=""/>
  <member type="way" ref="280575747" role=""/>
  <member type="way" ref="238763877" role=""/>
  <member type="way" ref="821963274" role=""/>
  <member type="way" ref="821963275" role=""/>
  <member type="way" ref="271817759" role=""/>
  <member type="way" ref="392046403" role=""/>
  <member type="way" ref="271823259" role=""/>
  <member type="way" ref="568618190" role=""/>
  <member type="way" ref="611792871" role=""/>
  <member type="way" ref="568618189" role=""/>
  <member type="way" ref="758643295" role=""/>
  <member type="way" ref="490026024" role=""/>
  <member type="way" ref="490026023" role=""/>
  <member type="way" ref="662293636" role=""/>
  <member type="way" ref="662293635" role=""/>
  <member type="way" ref="706232059" role=""/>
  <member type="way" ref="83664220" role=""/>
  <member type="way" ref="710370901" role=""/>
  <member type="way" ref="710370900" role=""/>
  <member type="way" ref="174758999" role=""/>
  <member type="way" ref="83664222" role=""/>
  <member type="way" ref="174758998" role=""/>
  <member type="way" ref="240180100" role=""/>
  <member type="way" ref="518880380" role=""/>
  <member type="way" ref="391437774" role=""/>
  <member type="way" ref="391636850" role=""/>
  <member type="way" ref="240180098" role=""/>
  <member type="way" ref="44653912" role=""/>
  <member type="way" ref="182646395" role=""/>
  <member type="way" ref="290012904" role=""/>
  <member type="way" ref="290012901" role=""/>
  <member type="way" ref="395957182" role=""/>
  <member type="way" ref="182646397" role=""/>
  <member type="way" ref="290012360" role=""/>
  <member type="way" ref="239553911" role=""/>
  <member type="way" ref="230512156" role=""/>
  <member type="way" ref="426983186" role=""/>
  <member type="way" ref="490033821" role=""/>
  <member type="way" ref="490033819" role=""/>
  <member type="way" ref="391636854" role=""/>
  <member type="way" ref="172994476" role=""/>
  <member type="way" ref="271838358" role=""/>
  <member type="way" ref="620915389" role=""/>
  <member type="way" ref="620917076" role=""/>
  <member type="way" ref="620917077" role=""/>
  <member type="way" ref="620917080" role=""/>
  <member type="way" ref="620917082" role=""/>
  <member type="way" ref="426303236" role=""/>
  <member type="way" ref="426303234" role=""/>
  <member type="way" ref="183964722" role=""/>
  <member type="way" ref="183964720" role=""/>
  <member type="way" ref="183964717" role=""/>
  <member type="way" ref="183964719" role=""/>
  <member type="way" ref="412739267" role=""/>
  <member type="way" ref="412739265" role=""/>
  <member type="way" ref="83745449" role=""/>
  <member type="way" ref="620923402" role=""/>
  <member type="way" ref="473277493" role=""/>
  <member type="way" ref="473277487" role=""/>
  <member type="way" ref="176102876" role=""/>
  <member type="way" ref="187916613" role=""/>
  <member type="way" ref="167996875" role=""/>
  <member type="way" ref="190835781" role=""/>
  <member type="way" ref="701989905" role=""/>
  <member type="way" ref="216218163" role=""/>
  <member type="way" ref="216218162" role=""/>
  <member type="way" ref="689732366" role=""/>
  <member type="way" ref="708928238" role=""/>
  <member type="way" ref="744538139" role=""/>
  <member type="way" ref="172429386" role=""/>
  <member type="way" ref="172429382" role=""/>
  <member type="way" ref="481673796" role=""/>
  <member type="way" ref="490035223" role=""/>
  <member type="way" ref="490035220" role=""/>
  <member type="way" ref="621552588" role=""/>
  <member type="way" ref="621551390" role=""/>
  <member type="way" ref="172412884" role=""/>
  <member type="way" ref="434984002" role=""/>
  <member type="way" ref="621553056" role=""/>
  <member type="way" ref="434984004" role=""/>
  <member type="way" ref="434984001" role=""/>
  <member type="way" ref="481673795" role=""/>
  <member type="way" ref="481673794" role=""/>
  <member type="way" ref="415265962" role=""/>
  <member type="way" ref="415265961" role=""/>
  <member type="way" ref="481673792" role=""/>
  <member type="way" ref="491620547" role=""/>
  <member type="way" ref="491620546" role=""/>
  <member type="way" ref="216214491" role=""/>
  <member type="way" ref="622380189" role=""/>
  <member type="way" ref="622380191" role=""/>
  <member type="way" ref="228503395" role=""/>
  <member type="way" ref="622387919" role=""/>
  <member type="way" ref="622378594" role=""/>
  <member type="way" ref="622378595" role=""/>
  <member type="way" ref="622377435" role=""/>
  <member type="way" ref="622375792" role=""/>
  <member type="way" ref="622375476" role=""/>
  <member type="way" ref="622374082" role=""/>
  <member type="way" ref="622374627" role=""/>
  <member type="way" ref="622374632" role=""/>
  <member type="way" ref="622374635" role=""/>
  <member type="way" ref="622374639" role=""/>
  <member type="way" ref="622374641" role=""/>
  <member type="way" ref="622374642" role=""/>
  <member type="way" ref="622374646" role=""/>
  <member type="way" ref="622374647" role=""/>
  <member type="way" ref="622374652" role=""/>
  <member type="way" ref="622374655" role=""/>
  <member type="way" ref="228503397" role=""/>
  <member type="way" ref="228503399" role=""/>
  <member type="way" ref="228503390" role=""/>
  <member type="way" ref="622399070" role=""/>
  <member type="way" ref="622395733" role=""/>
  <member type="way" ref="622394541" role=""/>
  <member type="way" ref="622394547" role=""/>
  <member type="way" ref="579494365" role=""/>
  <member type="way" ref="570357948" role=""/>
  <member type="way" ref="570357949" role=""/>
  <member type="way" ref="622403348" role=""/>
  <member type="way" ref="622403911" role=""/>
  <member type="way" ref="622406566" role=""/>
  <member type="way" ref="622409450" role=""/>
  <member type="way" ref="622411939" role=""/>
  <member type="way" ref="622411946" role=""/>
  <member type="way" ref="622413132" role=""/>
  <member type="way" ref="622416108" role=""/>
  <member type="way" ref="622416110" role=""/>
  <member type="way" ref="622416112" role=""/>
  <member type="way" ref="622418461" role=""/>
  <member type="way" ref="622419116" role=""/>
  <member type="way" ref="622425270" role=""/>
  <member type="way" ref="622425256" role=""/>
  <member type="way" ref="622425260" role=""/>
  <member type="way" ref="622428821" role=""/>
  <member type="way" ref="622428819" role=""/>
  <member type="way" ref="622430552" role=""/>
  <member type="way" ref="622430563" role=""/>
  <member type="way" ref="570336415" role=""/>
  <member type="way" ref="759492480" role=""/>
  <member type="way" ref="759492479" role=""/>
  <member type="way" ref="759492478" role=""/>
  <member type="way" ref="759492477" role=""/>
  <member type="way" ref="759492476" role=""/>
  <member type="way" ref="759492475" role=""/>
  <member type="way" ref="759492474" role=""/>
  <member type="way" ref="759492473" role=""/>
  <member type="way" ref="759492472" role=""/>
  <member type="way" ref="759492471" role=""/>
  <member type="way" ref="759492470" role=""/>
  <member type="way" ref="759492468" role=""/>
  <member type="way" ref="759492469" role=""/>
  <member type="way" ref="759492467" role=""/>
  <member type="way" ref="759492466" role=""/>
  <member type="way" ref="759492465" role=""/>
  <member type="way" ref="759492464" role=""/>
  <member type="way" ref="579494364" role=""/>
  <member type="way" ref="228503392" role=""/>
  <member type="way" ref="622401992" role=""/>
  <member type="way" ref="204556239" role=""/>
  <member type="way" ref="281790351" role=""/>
  <member type="way" ref="533877641" role=""/>
  <member type="way" ref="533877642" role=""/>
  <member type="way" ref="238553640" role=""/>
  <member type="way" ref="488191076" role=""/>
  <member type="way" ref="493699343" role=""/>
  <member type="way" ref="500685722" role=""/>
  <member type="way" ref="527772934" role=""/>
  <member type="way" ref="500685726" role=""/>
  <member type="way" ref="193562789" role=""/>
  <member type="way" ref="193561614" role=""/>
  <member type="way" ref="193562791" role=""/>
  <member type="way" ref="41392247" role=""/>
  <member type="way" ref="41392264" role=""/>
  <member type="way" ref="167415997" role=""/>
  <member type="way" ref="292713127" role=""/>
  <member type="way" ref="292713124" role=""/>
  <member type="way" ref="292713126" role=""/>
  <member type="way" ref="167415996" role=""/>
  <member type="way" ref="527773829" role=""/>
  <member type="way" ref="527773823" role=""/>
  <member type="way" ref="184740097" role=""/>
  <member type="way" ref="265432349" role=""/>
  <member type="way" ref="466870553" role=""/>
  <member type="way" ref="466870552" role=""/>
  <member type="way" ref="265432350" role=""/>
  <member type="way" ref="229011132" role=""/>
  <member type="way" ref="358886559" role=""/>
  <member type="way" ref="166012746" role=""/>
  <member type="way" ref="166012726" role=""/>
  <member type="way" ref="166012747" role=""/>
  <member type="way" ref="399284551" role=""/>
  <member type="way" ref="493694562" role=""/>
  <member type="way" ref="166012729" role=""/>
  <member type="way" ref="582486202" role=""/>
  <member type="way" ref="128372587" role=""/>
  <member type="way" ref="526476316" role=""/>
  <member type="way" ref="526476315" role=""/>
  <member type="way" ref="376814023" role=""/>
  <member type="way" ref="376814022" role=""/>
  <member type="way" ref="527515498" role=""/>
  <member type="way" ref="500685744" role=""/>
  <member type="way" ref="166012745" role=""/>
  <member type="way" ref="758620695" role=""/>
  <member type="way" ref="758620696" role=""/>
  <member type="way" ref="166012754" role=""/>
  <member type="way" ref="166012759" role=""/>
  <member type="way" ref="166012752" role=""/>
  <member type="way" ref="166012757" role=""/>
  <member type="way" ref="166012724" role=""/>
  <member type="way" ref="166012721" role=""/>
  <member type="way" ref="166012734" role=""/>
  <member type="way" ref="166012735" role=""/>
  <member type="way" ref="166012758" role=""/>
  <member type="way" ref="163910294" role=""/>
  <member type="way" ref="163910295" role=""/>
  <member type="way" ref="166014802" role=""/>
  <member type="way" ref="166014803" role=""/>
  <member type="way" ref="227917285" role=""/>
  <member type="way" ref="166014804" role=""/>
  <member type="way" ref="166014806" role=""/>
  <member type="way" ref="166014805" role=""/>
  <member type="way" ref="163911118" role=""/>
  <member type="way" ref="163911117" role=""/>
  <member type="way" ref="228485966" role=""/>
  <member type="way" ref="659570279" role=""/>
  <member type="way" ref="127623296" role=""/>
  <member type="way" ref="127623295" role=""/>
  <member type="way" ref="166869048" role=""/>
  <member type="way" ref="227918836" role=""/>
  <member type="way" ref="166869047" role=""/>
  <member type="way" ref="659570999" role=""/>
  <member type="way" ref="227901598" role=""/>
  <member type="way" ref="158848195" role=""/>
  <member type="way" ref="228478067" role=""/>
  <member type="way" ref="228027854" role=""/>
  <member type="way" ref="123434564" role=""/>
  <member type="way" ref="123434563" role=""/>
  <member type="way" ref="227965805" role=""/>
  <member type="way" ref="227917286" role=""/>
  <member type="way" ref="148789846" role=""/>
  <member type="way" ref="228496219" role=""/>
  <member type="way" ref="227903260" role=""/>
  <member type="way" ref="227903261" role=""/>
  <member type="way" ref="158848023" role=""/>
  <member type="way" ref="537136077" role=""/>
  <member type="way" ref="537136076" role=""/>
  <member type="way" ref="158848024" role=""/>
  <member type="way" ref="26641346" role=""/>
  <member type="way" ref="227962951" role=""/>
  <member type="way" ref="575427648" role=""/>
  <member type="way" ref="565179903" role=""/>
  <member type="way" ref="228186901" role=""/>
  <member type="way" ref="228049617" role=""/>
  <member type="way" ref="228049619" role=""/>
  <member type="way" ref="228186446" role=""/>
  <member type="way" ref="218877627" role=""/>
  <member type="way" ref="352368179" role=""/>
  <member type="way" ref="352368193" role=""/>
  <member type="way" ref="352368195" role=""/>
  <member type="way" ref="352368145" role=""/>
  <member type="way" ref="250770928" role=""/>
  <member type="way" ref="250780824" role=""/>
  <member type="way" ref="250780826" role=""/>
  <member type="way" ref="199901515" role=""/>
  <member type="way" ref="242813539" role="forward"/>
  <member type="way" ref="250780821" role="forward"/>
  <member type="way" ref="536651670" role=""/>
  <member type="way" ref="524045827" role=""/>
  <member type="way" ref="524045828" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="170509198" role=""/>
  <member type="way" ref="169862183" role=""/>
  <member type="way" ref="267214427" role=""/>
  <member type="way" ref="703209587" role=""/>
  <member type="way" ref="703209874" role=""/>
  <member type="way" ref="513096154" role=""/>
  <member type="way" ref="486316873" role=""/>
  <member type="way" ref="529119209" role=""/>
  <member type="way" ref="797792169" role=""/>
  <member type="way" ref="233780723" role=""/>
  <member type="way" ref="233780718" role=""/>
  <member type="way" ref="233780712" role=""/>
  <member type="way" ref="821861826" role=""/>
  <member type="way" ref="821861827" role=""/>
  <member type="way" ref="821861825" role=""/>
  <member type="way" ref="821861824" role=""/>
  <member type="way" ref="187719251" role=""/>
  <member type="way" ref="187719246" role=""/>
  <member type="way" ref="190835762" role=""/>
  <member type="way" ref="178751259" role=""/>
  <member type="way" ref="178751289" role=""/>
  <member type="way" ref="211887373" role=""/>
  <member type="way" ref="211887362" role=""/>
  <member type="way" ref="483377345" role=""/>
  <member type="way" ref="483377344" role=""/>
  <member type="way" ref="263348957" role=""/>
  <member type="way" ref="263348954" role=""/>
  <member type="way" ref="212067584" role=""/>
  <member type="way" ref="212067637" role=""/>
  <member type="way" ref="212067516" role=""/>
  <member type="way" ref="212067597" role=""/>
  <member type="way" ref="212067517" role=""/>
  <member type="way" ref="212067519" role=""/>
  <member type="way" ref="212067544" role=""/>
  <member type="way" ref="212067523" role=""/>
  <member type="way" ref="83813164" role=""/>
  <member type="way" ref="171350230" role=""/>
  <member type="way" ref="171350229" role=""/>
  <member type="way" ref="802161292" role=""/>
  <member type="way" ref="298487251" role=""/>
  <member type="way" ref="298487253" role=""/>
  <member type="way" ref="113603205" role=""/>
  <member type="way" ref="153020159" role=""/>
  <member type="way" ref="606004756" role=""/>
  <member type="way" ref="606004757" role=""/>
  <member type="way" ref="220697732" role=""/>
  <member type="way" ref="220697735" role=""/>
  <member type="way" ref="212437078" role=""/>
  <member type="way" ref="212437075" role=""/>
  <member type="way" ref="212439614" role=""/>
  <member type="way" ref="212439618" role=""/>
  <member type="way" ref="481819798" role=""/>
  <member type="way" ref="481819790" role=""/>
  <member type="way" ref="197567120" role=""/>
  <member type="way" ref="197567204" role=""/>
  <member type="way" ref="197567175" role=""/>
  <member type="way" ref="197567181" role=""/>
  <member type="way" ref="22887083" role=""/>
  <member type="way" ref="197557640" role=""/>
  <member type="way" ref="197557627" role=""/>
  <member type="way" ref="22887082" role=""/>
  <member type="way" ref="143836598" role=""/>
  <member type="way" ref="83813128" role=""/>
  <member type="way" ref="56242949" role=""/>
  <member type="way" ref="22886751" role=""/>
  <member type="way" ref="56242947" role=""/>
  <member type="way" ref="83813140" role=""/>
  <member type="way" ref="173467967" role=""/>
  <member type="way" ref="173467922" role=""/>
  <member type="way" ref="22883420" role=""/>
  <member type="way" ref="50372886" role=""/>
  <member type="way" ref="116822737" role=""/>
  <member type="way" ref="83813158" role=""/>
  <member type="way" ref="83813124" role=""/>
  <member type="way" ref="22883074" role=""/>
  <member type="way" ref="622799486" role=""/>
  <member type="way" ref="622800734" role=""/>
  <member type="way" ref="622800735" role=""/>
  <member type="way" ref="622800743" role=""/>
  <member type="way" ref="622800746" role=""/>
  <member type="way" ref="143640556" role=""/>
  <member type="way" ref="83813181" role=""/>
  <member type="way" ref="83813150" role=""/>
  <member type="way" ref="22883089" role=""/>
  <member type="way" ref="570358550" role=""/>
  <member type="way" ref="570358552" role=""/>
  <member type="way" ref="620822486" role=""/>
  <member type="way" ref="620822487" role=""/>
  <member type="way" ref="22883141" role=""/>
  <member type="way" ref="622689585" role=""/>
  <member type="way" ref="143640571" role=""/>
  <member type="way" ref="492397511" role=""/>
  <member type="way" ref="492397506" role=""/>
  <member type="way" ref="83813162" role=""/>
  <member type="way" ref="83813148" role=""/>
  <member type="way" ref="137705363" role=""/>
  <member type="way" ref="137705360" role=""/>
  <member type="way" ref="31102575" role=""/>
  <member type="way" ref="31102574" role=""/>
  <member type="way" ref="137705366" role=""/>
  <member type="way" ref="310347035" role=""/>
  <member type="way" ref="310347034" role=""/>
  <member type="way" ref="83813185" role=""/>
  <member type="way" ref="391636871" role=""/>
  <member type="way" ref="83813156" role=""/>
  <member type="way" ref="391636866" role=""/>
  <member type="way" ref="137705369" role=""/>
  <member type="way" ref="137705367" role=""/>
  <member type="way" ref="52976482" role=""/>
  <member type="way" ref="110296426" role=""/>
  <member type="way" ref="143345605" role=""/>
  <member type="way" ref="113598676" role=""/>
  <member type="way" ref="759478354" role=""/>
  <member type="way" ref="113598662" role=""/>
  <member type="way" ref="113598688" role=""/>
  <member type="way" ref="137705388" role=""/>
  <member type="way" ref="52976667" role=""/>
  <member type="way" ref="52976666" role=""/>
  <member type="way" ref="52976650" role=""/>
  <member type="way" ref="113598672" role=""/>
  <member type="way" ref="52976626" role=""/>
  <member type="way" ref="52976618" role=""/>
  <member type="way" ref="622443577" role=""/>
  <member type="way" ref="318392750" role=""/>
  <member type="way" ref="83813184" role=""/>
  <member type="way" ref="318392756" role=""/>
  <member type="way" ref="318392743" role=""/>
  <member type="way" ref="622443578" role=""/>
  <member type="way" ref="31102577" role=""/>
  <member type="way" ref="31102576" role=""/>
  <member type="way" ref="113598661" role=""/>
  <member type="way" ref="190835772" role=""/>
  <member type="way" ref="137705382" role=""/>
  <member type="way" ref="137705372" role=""/>
  <member type="way" ref="137705393" role=""/>
  <member type="way" ref="137705390" role=""/>
  <member type="way" ref="137705392" role=""/>
  <member type="way" ref="137705380" role=""/>
  <member type="way" ref="143345603" role=""/>
  <member type="way" ref="137705368" role=""/>
  <member type="way" ref="52976481" role=""/>
  <member type="way" ref="83813137" role=""/>
  <member type="way" ref="190835757" role=""/>
  <member type="way" ref="310347036" role=""/>
  <member type="way" ref="310347037" role=""/>
  <member type="way" ref="143640595" role=""/>
  <member type="way" ref="137628857" role=""/>
  <member type="way" ref="52976499" role=""/>
  <member type="way" ref="52976510" role=""/>
  <member type="way" ref="83813183" role=""/>
  <member type="way" ref="83813151" role=""/>
  <member type="way" ref="143640574" role=""/>
  <member type="way" ref="492397513" role=""/>
  <member type="way" ref="492397509" role=""/>
  <member type="way" ref="620822488" role=""/>
  <member type="way" ref="570358544" role=""/>
  <member type="way" ref="622742431" role=""/>
  <member type="way" ref="570358547" role=""/>
  <member type="way" ref="143640586" role=""/>
  <member type="way" ref="622689583" role=""/>
  <member type="way" ref="622689584" role=""/>
  <member type="way" ref="183108075" role=""/>
  <member type="way" ref="183108074" role=""/>
  <member type="way" ref="143640590" role=""/>
  <member type="way" ref="143640565" role=""/>
  <member type="way" ref="143640578" role=""/>
  <member type="way" ref="622796781" role=""/>
  <member type="way" ref="143831057" role=""/>
  <member type="way" ref="622800747" role=""/>
  <member type="way" ref="622800742" role=""/>
  <member type="way" ref="622800736" role=""/>
  <member type="way" ref="622799487" role=""/>
  <member type="way" ref="143831050" role=""/>
  <member type="way" ref="143640581" role=""/>
  <member type="way" ref="143831053" role=""/>
  <member type="way" ref="143831048" role=""/>
  <member type="way" ref="143831046" role=""/>
  <member type="way" ref="173467808" role=""/>
  <member type="way" ref="173467933" role=""/>
  <member type="way" ref="143836593" role=""/>
  <member type="way" ref="190835755" role=""/>
  <member type="way" ref="190835756" role=""/>
  <member type="way" ref="167370763" role=""/>
  <member type="way" ref="143836597" role=""/>
  <member type="way" ref="153013698" role=""/>
  <member type="way" ref="197557646" role=""/>
  <member type="way" ref="197557653" role=""/>
  <member type="way" ref="153013695" role=""/>
  <member type="way" ref="197567166" role=""/>
  <member type="way" ref="197567152" role=""/>
  <member type="way" ref="197567171" role=""/>
  <member type="way" ref="197567188" role=""/>
  <member type="way" ref="481819785" role=""/>
  <member type="way" ref="481819794" role=""/>
  <member type="way" ref="212439625" role=""/>
  <member type="way" ref="212439617" role=""/>
  <member type="way" ref="212437079" role=""/>
  <member type="way" ref="212437074" role=""/>
  <member type="way" ref="220697731" role=""/>
  <member type="way" ref="220697734" role=""/>
  <member type="way" ref="220697733" role=""/>
  <member type="way" ref="220697730" role=""/>
  <member type="way" ref="153020158" role=""/>
  <member type="way" ref="750665500" role=""/>
  <member type="way" ref="750665501" role=""/>
  <member type="way" ref="153020160" role=""/>
  <member type="way" ref="298487252" role=""/>
  <member type="way" ref="298487254" role=""/>
  <member type="way" ref="171350231" role=""/>
  <member type="way" ref="171350228" role=""/>
  <member type="way" ref="212067617" role=""/>
  <member type="way" ref="212067656" role=""/>
  <member type="way" ref="212067558" role=""/>
  <member type="way" ref="212067643" role=""/>
  <member type="way" ref="212067661" role=""/>
  <member type="way" ref="212067538" role=""/>
  <member type="way" ref="212067561" role=""/>
  <member type="way" ref="212067525" role=""/>
  <member type="way" ref="263348956" role=""/>
  <member type="way" ref="263348955" role=""/>
  <member type="way" ref="483377342" role=""/>
  <member type="way" ref="483377343" role=""/>
  <member type="way" ref="211887377" role=""/>
  <member type="way" ref="211887369" role=""/>
  <member type="way" ref="190835764" role=""/>
  <member type="way" ref="178751244" role=""/>
  <member type="way" ref="178751263" role=""/>
  <member type="way" ref="197575164" role=""/>
  <member type="way" ref="771702667" role=""/>
  <member type="way" ref="771702666" role=""/>
  <member type="way" ref="153026958" role=""/>
  <member type="way" ref="771702664" role=""/>
  <member type="way" ref="771703288" role=""/>
  <member type="way" ref="210822578" role=""/>
  <member type="way" ref="771704545" role=""/>
  <member type="way" ref="771704546" role=""/>
  <member type="way" ref="169979027" role=""/>
  <member type="way" ref="189990660" role=""/>
  <member type="way" ref="189990668" role=""/>
  <member type="way" ref="189990674" role=""/>
  <member type="way" ref="771707629" role=""/>
  <member type="way" ref="771707628" role=""/>
  <member type="way" ref="771707627" role=""/>
  <member type="way" ref="189986081" role=""/>
  <member type="way" ref="189986064" role=""/>
  <member type="way" ref="771707625" role=""/>
  <member type="way" ref="190002213" role=""/>
  <member type="way" ref="771707622" role=""/>
  <member type="way" ref="190002182" role=""/>
  <member type="way" ref="190002210" role=""/>
  <member type="way" ref="190002257" role=""/>
  <member type="way" ref="771707620" role=""/>
  <member type="way" ref="333774799" role=""/>
  <member type="way" ref="771707619" role=""/>
  <member type="way" ref="380706430" role=""/>
  <member type="way" ref="380706428" role=""/>
  <member type="way" ref="380706429" role=""/>
  <member type="way" ref="771710301" role=""/>
  <member type="way" ref="382209300" role=""/>
  <member type="way" ref="382209304" role=""/>
  <member type="way" ref="380706424" role=""/>
  <member type="way" ref="333774803" role=""/>
  <member type="way" ref="771710300" role=""/>
  <member type="way" ref="334965816" role=""/>
  <member type="way" ref="190480008" role=""/>
  <member type="way" ref="190592840" role=""/>
  <member type="way" ref="378250072" role=""/>
  <member type="way" ref="378250070" role=""/>
  <member type="way" ref="190592883" role=""/>
  <member type="way" ref="334965815" role=""/>
  <member type="way" ref="334965817" role=""/>
  <member type="way" ref="376181412" role=""/>
  <member type="way" ref="376181414" role=""/>
  <member type="way" ref="334965805" role=""/>
  <member type="way" ref="334965801" role=""/>
  <member type="way" ref="334451605" role=""/>
  <member type="way" ref="334451607" role=""/>
  <member type="way" ref="190697333" role=""/>
  <member type="way" ref="190697330" role=""/>
  <member type="way" ref="334965800" role=""/>
  <member type="way" ref="489717827" role=""/>
  <member type="way" ref="489717828" role=""/>
  <member type="way" ref="334965803" role=""/>
  <member type="way" ref="334968152" role=""/>
  <member type="way" ref="334968153" role=""/>
  <member type="way" ref="210846733" role=""/>
  <member type="way" ref="210846725" role=""/>
  <member type="way" ref="190701063" role=""/>
  <member type="way" ref="190701154" role=""/>
  <member type="way" ref="190701166" role=""/>
  <member type="way" ref="190701108" role=""/>
  <member type="way" ref="190701090" role=""/>
  <member type="way" ref="190701147" role=""/>
  <member type="way" ref="211228532" role=""/>
  <member type="way" ref="211228529" role=""/>
  <member type="way" ref="320768989" role=""/>
  <member type="way" ref="320768988" role=""/>
  <member type="way" ref="190794018" role=""/>
  <member type="way" ref="190794022" role=""/>
  <member type="way" ref="334968162" role=""/>
  <member type="way" ref="190798745" role=""/>
  <member type="way" ref="190798739" role=""/>
  <member type="way" ref="334968156" role=""/>
  <member type="way" ref="334968158" role=""/>
  <member type="way" ref="190809394" role=""/>
  <member type="way" ref="190809401" role=""/>
  <member type="way" ref="336037082" role=""/>
  <member type="way" ref="336037083" role=""/>
  <member type="way" ref="190809925" role=""/>
  <member type="way" ref="190809905" role=""/>
  <member type="way" ref="334970130" role=""/>
  <member type="way" ref="334970131" role=""/>
  <member type="way" ref="334970134" role=""/>
  <member type="way" ref="526996405" role=""/>
  <member type="way" ref="607477311" role=""/>
  <member type="way" ref="559806364" role=""/>
  <member type="way" ref="141129835" role=""/>
  <member type="way" ref="232619403" role=""/>
  <member type="way" ref="489007318" role=""/>
  <member type="way" ref="489007316" role=""/>
  <member type="way" ref="141129841" role=""/>
  <member type="way" ref="141129839" role=""/>
  <member type="way" ref="255989448" role=""/>
  <member type="way" ref="255989449" role=""/>
  <member type="way" ref="141129834" role=""/>
  <member type="way" ref="255989450" role=""/>
  <member type="way" ref="255989451" role=""/>
  <member type="way" ref="141129837" role=""/>
  <member type="way" ref="30163371" role=""/>
  <member type="way" ref="30163333" role=""/>
  <member type="way" ref="489007315" role=""/>
  <member type="way" ref="489007317" role=""/>
  <member type="way" ref="232619378" role=""/>
  <member type="way" ref="141129840" role=""/>
  <member type="way" ref="30163370" role=""/>
  <member type="way" ref="796368083" role=""/>
  <member type="way" ref="796368082" role=""/>
  <member type="way" ref="612021656" role=""/>
  <member type="way" ref="612021657" role=""/>
  <member type="way" ref="538580526" role=""/>
  <member type="way" ref="115095368" role=""/>
  <member type="way" ref="794674385" role=""/>
  <member type="way" ref="516588160" role=""/>
  <member type="way" ref="516588153" role=""/>
  <member type="way" ref="794674386" role=""/>
  <member type="way" ref="794674387" role=""/>
  <member type="way" ref="516588153" role=""/>
  <member type="way" ref="794674386" role=""/>
  <member type="way" ref="794674387" role=""/>
  <member type="way" ref="141921485" role=""/>
  <member type="way" ref="338597504" role=""/>
  <member type="way" ref="334986137" role=""/>
  <member type="way" ref="22887894" role=""/>
  <member type="way" ref="181647014" role=""/>
  <member type="way" ref="334986135" role=""/>
  <member type="way" ref="334986134" role=""/>
  <member type="way" ref="181647017" role=""/>
  <member type="way" ref="391636913" role=""/>
  <member type="way" ref="22887930" role=""/>
  <member type="way" ref="643748288" role=""/>
  <member type="way" ref="643748285" role=""/>
  <member type="way" ref="421282388" role=""/>
  <member type="way" ref="255992311" role=""/>
  <member type="way" ref="141921483" role=""/>
  <member type="way" ref="141921493" role=""/>
  <member type="way" ref="141921487" role=""/>
  <member type="way" ref="183250527" role=""/>
  <member type="way" ref="794683310" role=""/>
  <member type="way" ref="794683309" role=""/>
  <member type="way" ref="794683312" role=""/>
  <member type="way" ref="189716495" role=""/>
  <member type="way" ref="173426606" role=""/>
  <member type="way" ref="173426604" role=""/>
  <member type="way" ref="173426600" role=""/>
  <member type="way" ref="173426602" role=""/>
  <member type="way" ref="713925627" role=""/>
  <member type="way" ref="173426599" role=""/>
  <member type="way" ref="22888142" role=""/>
  <member type="way" ref="22888138" role=""/>
  <member type="way" ref="173426601" role=""/>
  <member type="way" ref="173426603" role=""/>
  <member type="way" ref="795685711" role=""/>
  <member type="way" ref="688082622" role=""/>
  <member type="way" ref="22888170" role=""/>
  <member type="way" ref="22888172" role=""/>
  <member type="way" ref="336037090" role=""/>
  <member type="way" ref="526991718" role=""/>
  <member type="way" ref="137811436" role=""/>
  <member type="way" ref="610452218" role=""/>
  <member type="way" ref="137811437" role=""/>
  <member type="way" ref="22813261" role=""/>
  <member type="way" ref="448326468" role=""/>
  <member type="way" ref="330215749" role=""/>
  <member type="way" ref="107539482" role=""/>
  <member type="way" ref="795685714" role=""/>
  <member type="way" ref="232619368" role=""/>
  <member type="way" ref="525454174" role=""/>
  <member type="way" ref="232619402" role=""/>
  <member type="way" ref="607477309" role=""/>
  <member type="way" ref="190918489" role=""/>
  <member type="way" ref="334970133" role=""/>
  <member type="way" ref="334970132" role=""/>
  <member type="way" ref="300991082" role=""/>
  <member type="way" ref="334970129" role=""/>
  <member type="way" ref="190809909" role=""/>
  <member type="way" ref="190809920" role=""/>
  <member type="way" ref="336037086" role=""/>
  <member type="way" ref="336037084" role=""/>
  <member type="way" ref="190809343" role=""/>
  <member type="way" ref="190809342" role=""/>
  <member type="way" ref="334968163" role=""/>
  <member type="way" ref="334968159" role=""/>
  <member type="way" ref="190803270" role=""/>
  <member type="way" ref="190798740" role=""/>
  <member type="way" ref="334968161" role=""/>
  <member type="way" ref="336037085" role=""/>
  <member type="way" ref="190798714" role=""/>
  <member type="way" ref="190794040" role=""/>
  <member type="way" ref="334968160" role=""/>
  <member type="way" ref="334968157" role=""/>
  <member type="way" ref="320768991" role=""/>
  <member type="way" ref="320768990" role=""/>
  <member type="way" ref="211228531" role=""/>
  <member type="way" ref="211228530" role=""/>
  <member type="way" ref="190794033" role=""/>
  <member type="way" ref="190701102" role=""/>
  <member type="way" ref="190701098" role=""/>
  <member type="way" ref="190701152" role=""/>
  <member type="way" ref="190701170" role=""/>
  <member type="way" ref="190701096" role=""/>
  <member type="way" ref="210846732" role=""/>
  <member type="way" ref="210846727" role=""/>
  <member type="way" ref="334968155" role=""/>
  <member type="way" ref="334968154" role=""/>
  <member type="way" ref="334965814" role=""/>
  <member type="way" ref="334965804" role=""/>
  <member type="way" ref="489717829" role=""/>
  <member type="way" ref="489717830" role=""/>
  <member type="way" ref="192542025" role=""/>
  <member type="way" ref="190697341" role=""/>
  <member type="way" ref="334451608" role=""/>
  <member type="way" ref="334451606" role=""/>
  <member type="way" ref="334965813" role=""/>
  <member type="way" ref="334965802" role=""/>
  <member type="way" ref="376181415" role=""/>
  <member type="way" ref="376181413" role=""/>
  <member type="way" ref="334965811" role=""/>
  <member type="way" ref="334965812" role=""/>
  <member type="way" ref="190592867" role=""/>
  <member type="way" ref="378250071" role=""/>
  <member type="way" ref="378250073" role=""/>
  <member type="way" ref="190592862" role=""/>
  <member type="way" ref="334965806" role=""/>
  <member type="way" ref="333774802" role=""/>
  <member type="way" ref="771710299" role=""/>
  <member type="way" ref="190592858" role=""/>
  <member type="way" ref="211772188" role=""/>
  <member type="way" ref="211772198" role=""/>
  <member type="way" ref="380706426" role=""/>
  <member type="way" ref="382209302" role=""/>
  <member type="way" ref="382209301" role=""/>
  <member type="way" ref="771710302" role=""/>
  <member type="way" ref="333774800" role=""/>
  <member type="way" ref="380706425" role=""/>
  <member type="way" ref="380706427" role=""/>
  <member type="way" ref="333774801" role=""/>
  <member type="way" ref="771707618" role=""/>
  <member type="way" ref="190002173" role=""/>
  <member type="way" ref="771707621" role=""/>
  <member type="way" ref="190002175" role=""/>
  <member type="way" ref="190002226" role=""/>
  <member type="way" ref="190002178" role=""/>
  <member type="way" ref="190016710" role=""/>
  <member type="way" ref="771707623" role=""/>
  <member type="way" ref="771707624" role=""/>
  <member type="way" ref="189986077" role=""/>
  <member type="way" ref="189986068" role=""/>
  <member type="way" ref="771707626" role=""/>
  <member type="way" ref="189986076" role=""/>
  <member type="way" ref="189990663" role=""/>
  <member type="way" ref="189990682" role=""/>
  <member type="way" ref="169979031" role=""/>
  <member type="way" ref="169979035" role=""/>
  <member type="way" ref="771702668" role=""/>
  <member type="way" ref="771702665" role=""/>
  <member type="way" ref="771703290" role=""/>
  <member type="way" ref="771703289" role=""/>
  <member type="way" ref="482833143" role=""/>
  <member type="way" ref="771704544" role=""/>
  <member type="way" ref="771704547" role=""/>
  <member type="way" ref="22776741" role=""/>
  <member type="way" ref="263253485" role=""/>
  <member type="way" ref="22776726" role=""/>
  <member type="way" ref="22776751" role=""/>
  <member type="way" ref="22776847" role=""/>
  <member type="way" ref="22776845" role=""/>
  <member type="way" ref="22776851" role=""/>
  <member type="way" ref="22776850" role=""/>
  <member type="way" ref="22776886" role=""/>
  <member type="way" ref="22776885" role=""/>
  <member type="way" ref="55971843" role=""/>
  <member type="way" ref="192898319" role=""/>
  <member type="way" ref="192898321" role=""/>
  <member type="way" ref="482636731" role=""/>
  <member type="way" ref="482636730" role=""/>
  <member type="way" ref="482636746" role=""/>
  <member type="way" ref="482636747" role=""/>
  <member type="way" ref="367424605" role=""/>
  <member type="way" ref="475724164" role=""/>
  <member type="way" ref="323036387" role=""/>
  <member type="way" ref="475724167" role=""/>
  <member type="way" ref="55805749" role=""/>
  <member type="way" ref="475247280" role=""/>
  <member type="way" ref="475247282" role=""/>
  <member type="way" ref="38282182" role=""/>
  <member type="way" ref="89557385" role=""/>
  <member type="way" ref="221153675" role=""/>
  <member type="way" ref="221153676" role=""/>
  <member type="way" ref="89557392" role=""/>
  <member type="way" ref="482596084" role=""/>
  <member type="way" ref="20264632" role=""/>
  <member type="way" ref="671008677" role=""/>
  <member type="way" ref="671008678" role=""/>
  <member type="way" ref="367423982" role=""/>
  <member type="way" ref="367423981" role=""/>
  <member type="way" ref="367423980" role=""/>
  <member type="way" ref="20264680" role=""/>
  <member type="way" ref="367423979" role=""/>
  <member type="way" ref="367421850" role=""/>
  <member type="way" ref="367421851" role=""/>
  <member type="way" ref="367421852" role=""/>
  <member type="way" ref="367421531" role="forward"/>
  <member type="way" ref="367421530" role="forward"/>
  <member type="way" ref="687735666" role="forward"/>
  <member type="way" ref="692701614" role="forward"/>
  <member type="way" ref="669455331" role="forward"/>
  <member type="way" ref="298591747" role="forward"/>
  <member type="way" ref="298591744" role="forward"/>
  <member type="way" ref="298591753" role="forward"/>
  <member type="way" ref="692698814" role="forward"/>
  <member type="way" ref="669457173" role="forward"/>
  <member type="way" ref="89555202" role=""/>
  <member type="way" ref="367421294" role=""/>
  <member type="way" ref="89555199" role=""/>
  <member type="way" ref="367420991" role=""/>
  <member type="way" ref="669458632" role=""/>
  <member type="way" ref="89555201" role=""/>
  <member type="way" ref="488844241" role=""/>
  <member type="way" ref="488844240" role=""/>
  <member type="way" ref="367420852" role=""/>
  <member type="way" ref="367420851" role=""/>
  <member type="way" ref="431406195" role=""/>
  <member type="way" ref="367420850" role=""/>
  <member type="way" ref="319466286" role=""/>
  <member type="way" ref="319466285" role=""/>
  <member type="way" ref="367420849" role=""/>
  <member type="way" ref="122633151" role=""/>
  <member type="way" ref="353201965" role=""/>
  <member type="way" ref="647760099" role=""/>
  <member type="way" ref="353201971" role=""/>
  <member type="way" ref="89555200" role=""/>
  <member type="way" ref="233390096" role=""/>
  <member type="way" ref="233390093" role=""/>
  <member type="way" ref="222028968" role=""/>
  <member type="way" ref="222091940" role=""/>
  <member type="way" ref="444625556" role=""/>
  <member type="way" ref="444625555" role=""/>
  <member type="way" ref="445530271" role=""/>
  <member type="way" ref="445530270" role=""/>
  <member type="way" ref="257307318" role=""/>
  <member type="way" ref="257307320" role=""/>
  <member type="way" ref="367419992" role=""/>
  <member type="way" ref="230249301" role=""/>
  <member type="way" ref="230249294" role=""/>
  <member type="way" ref="209907553" role=""/>
  <member type="way" ref="372060640" role=""/>
  <member type="way" ref="240501971" role=""/>
  <member type="way" ref="42652683" role=""/>
  <member type="way" ref="538627150" role=""/>
  <member type="way" ref="385204716" role=""/>
  <member type="way" ref="538627402" role=""/>
  <member type="way" ref="538627404" role=""/>
  <member type="way" ref="538627413" role=""/>
  <member type="way" ref="538627411" role=""/>
  <member type="way" ref="365722737" role=""/>
  <member type="way" ref="365722735" role=""/>
  <member type="way" ref="444338369" role=""/>
  <member type="way" ref="538627419" role=""/>
  <member type="way" ref="538627418" role=""/>
  <member type="way" ref="385204722" role=""/>
  <member type="way" ref="307906328" role=""/>
  <member type="way" ref="281770149" role=""/>
  <member type="way" ref="281770149" role=""/>
  <member type="way" ref="281770149" role=""/>
  <member type="way" ref="281770154" role=""/>
  <member type="way" ref="314773018" role=""/>
  <member type="way" ref="281770156" role=""/>
  <member type="way" ref="314773012" role=""/>
  <member type="way" ref="314773011" role=""/>
  <member type="way" ref="314773016" role=""/>
  <member type="way" ref="22735404" role=""/>
  <member type="way" ref="23456586" role=""/>
  <member type="way" ref="441708231" role=""/>
  <member type="way" ref="467823832" role=""/>
  <member type="way" ref="405890627" role=""/>
  <member type="way" ref="467823817" role=""/>
  <member type="way" ref="618941615" role=""/>
  <member type="way" ref="532912453" role=""/>
  <member type="way" ref="335064420" role=""/>
  <member type="way" ref="335064417" role=""/>
  <member type="way" ref="260093826" role=""/>
  <member type="way" ref="245018752" role=""/>
  <member type="way" ref="22733286" role=""/>
  <member type="way" ref="539905160" role=""/>
  <member type="way" ref="124976539" role=""/>
  <member type="way" ref="211082885" role=""/>
  <member type="way" ref="27461543" role=""/>
  <member type="way" ref="335064422" role=""/>
  <member type="way" ref="335064418" role=""/>
  <member type="way" ref="335064421" role=""/>
  <member type="way" ref="335064419" role=""/>
  <member type="way" ref="618941617" role=""/>
  <member type="way" ref="618941616" role=""/>
  <member type="way" ref="185869342" role=""/>
  <member type="way" ref="124982794" role=""/>
  <member type="way" ref="590916719" role=""/>
  <member type="way" ref="590916718" role=""/>
  <member type="way" ref="590916717" role=""/>
  <member type="way" ref="590916716" role=""/>
  <member type="way" ref="23456588" role=""/>
  <member type="way" ref="444338377" role=""/>
  <member type="way" ref="27009404" role=""/>
  <member type="way" ref="230093586" role=""/>
  <member type="way" ref="125591264" role=""/>
  <member type="way" ref="301511266" role=""/>
  <member type="way" ref="301511266" role=""/>
  <member type="way" ref="311211584" role=""/>
  <member type="way" ref="538627421" role=""/>
  <member type="way" ref="538627420" role=""/>
  <member type="way" ref="385204721" role=""/>
  <member type="way" ref="385204719" role=""/>
  <member type="way" ref="365722734" role=""/>
  <member type="way" ref="365722736" role=""/>
  <member type="way" ref="538627416" role=""/>
  <member type="way" ref="538627414" role=""/>
  <member type="way" ref="83599567" role=""/>
  <member type="way" ref="83599560" role=""/>
  <member type="way" ref="83599592" role=""/>
  <member type="way" ref="83599577" role=""/>
  <member type="way" ref="629010310" role=""/>
  <member type="way" ref="629010309" role=""/>
  <member type="way" ref="747900436" role=""/>
  <member type="way" ref="747900435" role=""/>
  <member type="way" ref="747900434" role=""/>
  <member type="way" ref="754136289" role=""/>
  <member type="way" ref="754136288" role=""/>
  <member type="way" ref="747900433" role=""/>
  <member type="way" ref="747900432" role=""/>
  <member type="way" ref="747900431" role=""/>
  <member type="way" ref="747900429" role=""/>
  <member type="way" ref="747900430" role=""/>
  <member type="way" ref="643973246" role=""/>
  <member type="way" ref="643973247" role=""/>
  <member type="way" ref="241880753" role=""/>
  <member type="way" ref="241880752" role=""/>
  <member type="way" ref="25217411" role=""/>
  <member type="way" ref="25217413" role=""/>
  <member type="way" ref="629015755" role=""/>
  <member type="way" ref="92136001" role=""/>
  <member type="way" ref="629015756" role=""/>
  <member type="way" ref="406049788" role=""/>
  <member type="way" ref="663088260" role=""/>
  <member type="way" ref="83599580" role=""/>
  <member type="way" ref="663088259" role=""/>
  <member type="way" ref="706863679" role=""/>
  <member type="way" ref="706863678" role=""/>
  <member type="way" ref="31101846" role=""/>
  <member type="way" ref="442088503" role=""/>
  <member type="way" ref="575059294" role=""/>
  <member type="way" ref="44023579" role=""/>
  <member type="way" ref="202494081" role=""/>
  <member type="way" ref="312731976" role=""/>
  <member type="way" ref="312731977" role=""/>
  <member type="way" ref="309188310" role=""/>
  <member type="way" ref="311983759" role=""/>
  <member type="way" ref="22873677" role=""/>
  <member type="way" ref="340967476" role=""/>
  <member type="way" ref="148190975" role=""/>
  <member type="way" ref="521941147" role=""/>
  <member type="way" ref="521941149" role=""/>
  <member type="way" ref="521941150" role=""/>
  <member type="way" ref="521941156" role=""/>
  <member type="way" ref="521941161" role=""/>
  <member type="way" ref="524709676" role=""/>
  <member type="way" ref="521941166" role=""/>
  <member type="way" ref="524709675" role=""/>
  <member type="way" ref="349879518" role=""/>
  <member type="way" ref="521941175" role=""/>
  <member type="way" ref="521941182" role=""/>
  <member type="way" ref="147089425" role=""/>
  <member type="way" ref="349879517" role=""/>
  <member type="way" ref="521941196" role=""/>
  <member type="way" ref="356945643" role=""/>
  <member type="way" ref="521941202" role=""/>
  <member type="way" ref="521941219" role=""/>
  <member type="way" ref="406823772" role=""/>
  <member type="way" ref="369361617" role=""/>
  <member type="way" ref="521941242" role=""/>
  <member type="way" ref="521941248" role=""/>
  <member type="way" ref="521941251" role=""/>
  <member type="way" ref="339754882" role=""/>
  <member type="way" ref="521941270" role=""/>
  <member type="way" ref="521941284" role=""/>
  <member type="way" ref="423427534" role=""/>
  <member type="way" ref="521941338" role=""/>
  <member type="way" ref="369455450" role=""/>
  <member type="way" ref="521941382" role=""/>
  <member type="way" ref="369455449" role=""/>
  <member type="way" ref="366453524" role=""/>
  <member type="way" ref="366453525" role=""/>
  <member type="way" ref="22776159" role=""/>
  <member type="way" ref="22776200" role=""/>
  <member type="way" ref="22776201" role=""/>
  <member type="way" ref="22776202" role=""/>
  <member type="way" ref="22776171" role=""/>
  <member type="way" ref="22776204" role=""/>
  <member type="way" ref="22776205" role=""/>
  <member type="way" ref="313928556" role=""/>
  <member type="way" ref="188388454" role=""/>
  <member type="way" ref="188388451" role="forward"/>
  <member type="way" ref="762990479" role="forward"/>
  <member type="way" ref="762990480" role="forward"/>
  <member type="way" ref="28518672" role="forward"/>
  <member type="way" ref="616783158" role="forward"/>
  <member type="way" ref="629010306" role="forward"/>
  <member type="way" ref="629010307" role="forward"/>
  <member type="way" ref="629010308" role=""/>
  <member type="way" ref="629010303" role=""/>
  <member type="way" ref="629010304" role="forward"/>
  <member type="way" ref="188391307" role="forward"/>
  <member type="way" ref="83599589" role="forward"/>
  <member type="way" ref="311448172" role="forward"/>
  <member type="way" ref="762990477" role="forward"/>
  <member type="way" ref="762990478" role="forward"/>
  <member type="way" ref="493281819" role=""/>
  <member type="way" ref="493281816" role=""/>
  <member type="way" ref="188386718" role=""/>
  <member type="way" ref="188386722" role=""/>
  <member type="way" ref="188386726" role=""/>
  <member type="way" ref="821861828" role=""/>
  <member type="way" ref="188281153" role=""/>
  <member type="way" ref="762990481" role=""/>
  <member type="way" ref="762990483" role=""/>
  <member type="way" ref="762990482" role=""/>
  <member type="way" ref="188749755" role=""/>
  <member type="way" ref="188749756" role=""/>
  <member type="way" ref="762990484" role=""/>
  <member type="way" ref="187864280" role=""/>
  <member type="way" ref="187865282" role=""/>
  <member type="way" ref="187865281" role=""/>
  <member type="way" ref="187865441" role=""/>
  <member type="way" ref="187865442" role=""/>
  <member type="way" ref="187867844" role=""/>
  <member type="way" ref="187867841" role=""/>
  <member type="way" ref="187868527" role=""/>
  <member type="way" ref="187868525" role=""/>
  <member type="way" ref="187868741" role=""/>
  <member type="way" ref="187812181" role=""/>
  <member type="way" ref="187812180" role=""/>
  <member type="way" ref="187812179" role=""/>
  <member type="way" ref="187812182" role=""/>
  <member type="way" ref="187865440" role=""/>
  <member type="way" ref="187865439" role=""/>
  <member type="way" ref="187867835" role=""/>
  <member type="way" ref="262032962" role=""/>
  <member type="way" ref="762990486" role=""/>
  <member type="way" ref="762990485" role=""/>
  <member type="way" ref="188749754" role=""/>
  <member type="way" ref="188749753" role=""/>
  <member type="way" ref="188281151" role=""/>
  <member type="way" ref="188281155" role=""/>
  <member type="way" ref="821861829" role=""/>
  <member type="way" ref="188386730" role=""/>
  <member type="way" ref="188386728" role=""/>
  <member type="way" ref="188386723" role=""/>
  <member type="way" ref="188386721" role=""/>
  <member type="way" ref="629010305" role=""/>
  <member type="way" ref="83599579" role=""/>
  <member type="way" ref="538627409" role=""/>
  <member type="way" ref="538627410" role=""/>
  <member type="way" ref="538627405" role=""/>
  <member type="way" ref="582561830" role=""/>
  <member type="way" ref="538627407" role=""/>
  <member type="way" ref="385204718" role=""/>
  <member type="way" ref="538627149" role=""/>
  <member type="way" ref="124982795" role=""/>
  <member type="way" ref="431386944" role=""/>
  <member type="way" ref="394954729" role=""/>
  <member type="way" ref="659669314" role=""/>
  <member type="way" ref="209907554" role=""/>
  <member type="way" ref="372060638" role=""/>
  <member type="way" ref="230249305" role=""/>
  <member type="way" ref="230249297" role=""/>
  <member type="way" ref="367419993" role=""/>
  <member type="way" ref="237913659" role=""/>
  <member type="way" ref="257307319" role=""/>
  <member type="way" ref="222005941" role=""/>
  <member type="way" ref="440509809" role=""/>
  <member type="way" ref="440509810" role=""/>
  <member type="way" ref="222091939" role=""/>
  <member type="way" ref="233390095" role=""/>
  <member type="way" ref="233390094" role=""/>
  <member type="way" ref="353201972" role=""/>
  <member type="way" ref="353201970" role=""/>
  <member type="way" ref="42652687" role=""/>
  <member type="way" ref="22568643" role=""/>
  <member type="way" ref="391729021" role=""/>
  <member type="way" ref="691952292" role=""/>
  <member type="way" ref="699841803" role=""/>
  <member type="way" ref="699841804" role=""/>
  <member type="way" ref="391729019" role=""/>
  <member type="way" ref="228049616" role=""/>
  <member type="way" ref="493447599" role=""/>
  <member type="way" ref="821709927" role=""/>
  <member type="way" ref="821709926" role=""/>
  <member type="way" ref="821709925" role=""/>
  <member type="way" ref="669668058" role=""/>
  <member type="way" ref="821625114" role=""/>
  <member type="way" ref="821625113" role=""/>
  <member type="way" ref="575099447" role=""/>
  <member type="way" ref="92868459" role=""/>
  <member type="way" ref="92868470" role=""/>
  <member type="way" ref="28514699" role=""/>
  <member type="way" ref="202494091" role=""/>
  <member type="way" ref="628994965" role=""/>
  <member type="way" ref="628994964" role=""/>
  <member type="way" ref="669668063" role=""/>
  <member type="way" ref="202494062" role=""/>
  <member type="way" ref="202494064" role=""/>
  <member type="way" ref="493463155" role=""/>
  <member type="way" ref="92433119" role=""/>
  <member type="way" ref="92433160" role=""/>
  <member type="way" ref="435936196" role=""/>
  <member type="way" ref="340250880" role=""/>
  <member type="way" ref="493466859" role=""/>
  <member type="way" ref="493467284" role=""/>
  <member type="way" ref="493468399" role=""/>
  <member type="way" ref="821709915" role=""/>
  <member type="way" ref="340250878" role=""/>
  <member type="way" ref="493466701" role=""/>
  <member type="way" ref="696421766" role=""/>
  <member type="way" ref="600806634" role=""/>
  <member type="way" ref="623414657" role=""/>
  <member type="way" ref="623414656" role=""/>
  <member type="way" ref="600806637" role=""/>
  <member type="way" ref="493471235" role=""/>
  <member type="way" ref="493473299" role=""/>
  <member type="way" ref="493473301" role=""/>
  <member type="way" ref="481800635" role=""/>
  <member type="way" ref="481800636" role=""/>
  <member type="way" ref="821861821" role=""/>
  <member type="way" ref="481800631" role=""/>
  <member type="way" ref="481800632" role=""/>
  <member type="way" ref="821861816" role=""/>
  <member type="way" ref="821861815" role=""/>
  <member type="way" ref="83599586" role=""/>
  <member type="way" ref="83599585" role=""/>
  <member type="way" ref="493441975" role=""/>
  <member type="way" ref="481797986" role=""/>
  <member type="way" ref="493436840" role=""/>
  <member type="way" ref="278143540" role=""/>
  <member type="way" ref="278143539" role=""/>
  <member type="way" ref="28514700" role=""/>
  <member type="way" ref="28514701" role=""/>
  <member type="way" ref="49103041" role=""/>
  <member type="way" ref="628994971" role=""/>
  <member type="way" ref="628994969" role=""/>
  <member type="way" ref="821709924" role=""/>
  <member type="way" ref="669668059" role=""/>
  <member type="way" ref="821709923" role=""/>
  <member type="way" ref="92868461" role=""/>
  <member type="way" ref="628994966" role=""/>
  <member type="way" ref="202494063" role=""/>
  <member type="way" ref="202494071" role=""/>
  <member type="way" ref="202494085" role=""/>
  <member type="way" ref="202494066" role=""/>
  <member type="way" ref="92868416" role=""/>
  <member type="way" ref="628994963" role=""/>
  <member type="way" ref="669668064" role=""/>
  <member type="way" ref="169008126" role=""/>
  <member type="way" ref="202494074" role=""/>
  <member type="way" ref="211342288" role=""/>
  <member type="way" ref="324691984" role=""/>
  <member type="way" ref="541359107" role=""/>
  <member type="way" ref="541358854" role=""/>
  <member type="way" ref="185441508" role=""/>
  <member type="way" ref="475735892" role=""/>
  <member type="way" ref="475735893" role=""/>
  <member type="way" ref="185441509" role=""/>
  <member type="way" ref="58778341" role=""/>
  <member type="way" ref="375213260" role=""/>
  <member type="way" ref="375213262" role=""/>
  <member type="way" ref="323946495" role=""/>
  <member type="way" ref="323946497" role=""/>
  <member type="way" ref="375213838" role=""/>
  <member type="way" ref="375213837" role=""/>
  <member type="way" ref="375213840" role=""/>
  <member type="way" ref="375213839" role=""/>
  <member type="way" ref="353186592" role=""/>
  <member type="way" ref="323946494" role=""/>
  <member type="way" ref="323946500" role=""/>
  <member type="way" ref="375213842" role=""/>
  <member type="way" ref="375213841" role=""/>
  <member type="way" ref="375215142" role=""/>
  <member type="way" ref="375215143" role=""/>
  <member type="way" ref="323946496" role=""/>
  <member type="way" ref="323946498" role=""/>
  <member type="way" ref="375215144" role=""/>
  <member type="way" ref="375215145" role=""/>
  <member type="way" ref="375215472" role=""/>
  <member type="way" ref="375215473" role=""/>
  <member type="way" ref="367807109" role=""/>
  <member type="way" ref="185567991" role=""/>
  <member type="way" ref="411478400" role=""/>
  <member type="way" ref="413376485" role=""/>
  <member type="way" ref="411478402" role=""/>
  <member type="way" ref="185567992" role=""/>
  <member type="way" ref="375216744" role=""/>
  <member type="way" ref="375216745" role=""/>
  <member type="way" ref="346687356" role=""/>
  <member type="way" ref="346687513" role=""/>
  <member type="way" ref="184471643" role=""/>
  <member type="way" ref="184471642" role=""/>
  <member type="way" ref="42790736" role=""/>
  <member type="way" ref="457170101" role=""/>
  <member type="way" ref="457157812" role=""/>
  <member type="way" ref="424028247" role=""/>
  <member type="way" ref="424028246" role=""/>
  <member type="way" ref="22771508" role=""/>
  <member type="way" ref="366453530" role=""/>
  <member type="way" ref="366277766" role=""/>
  <member type="way" ref="366277767" role=""/>
  <member type="way" ref="22776700" role=""/>
  <member type="way" ref="496253227" role=""/>
  <member type="way" ref="22776704" role=""/>
  <member type="way" ref="22776164" role=""/>
  <member type="way" ref="22776705" role=""/>
  <member type="way" ref="22776679" role=""/>
  <member type="way" ref="22776681" role=""/>
  <member type="way" ref="366453528" role=""/>
  <member type="way" ref="366453527" role=""/>
  <member type="way" ref="366453526" role=""/>
  <member type="way" ref="22776402" role=""/>
  <member type="way" ref="22776405" role=""/>
  <member type="way" ref="232619420" role=""/>
  <member type="way" ref="107899479" role=""/>
  <member type="way" ref="107899469" role=""/>
  <member type="way" ref="31103266" role=""/>
  <member type="way" ref="139269481" role=""/>
  <member type="way" ref="111827693" role=""/>
  <member type="way" ref="42790655" role=""/>
  <member type="way" ref="20337084" role=""/>
  <member type="way" ref="20340561" role=""/>
  <member type="way" ref="137780874" role=""/>
  <member type="way" ref="137780872" role=""/>
  <member type="way" ref="113610835" role=""/>
  <member type="way" ref="20340184" role=""/>
  <member type="way" ref="417812285" role=""/>
  <member type="way" ref="417812292" role=""/>
  <member type="way" ref="599766221" role=""/>
  <member type="way" ref="413115542" role=""/>
  <member type="way" ref="413115541" role=""/>
  <member type="way" ref="20340550" role=""/>
  <member type="way" ref="79633327" role=""/>
  <member type="way" ref="413106666" role=""/>
  <member type="way" ref="413106671" role=""/>
  <member type="way" ref="413115545" role=""/>
  <member type="way" ref="318052099" role=""/>
  <member type="way" ref="413106661" role=""/>
  <member type="way" ref="149786658" role=""/>
  <member type="way" ref="413106649" role=""/>
  <member type="way" ref="413106648" role=""/>
  <member type="way" ref="413106642" role=""/>
  <member type="way" ref="413106640" role=""/>
  <member type="way" ref="413115548" role=""/>
  <member type="way" ref="413115549" role=""/>
  <member type="way" ref="413115552" role=""/>
  <member type="way" ref="413115553" role=""/>
  <member type="way" ref="413115556" role=""/>
  <member type="way" ref="413115557" role=""/>
  <member type="way" ref="413115560" role=""/>
  <member type="way" ref="413115561" role=""/>
  <member type="way" ref="413115564" role=""/>
  <member type="way" ref="413115569" role=""/>
  <member type="way" ref="413115573" role=""/>
  <member type="way" ref="413115572" role=""/>
  <member type="way" ref="413106639" role=""/>
  <member type="way" ref="413106636" role=""/>
  <member type="way" ref="460870560" role=""/>
  <member type="way" ref="460870561" role=""/>
  <member type="way" ref="413106633" role=""/>
  <member type="way" ref="413106628" role=""/>
  <member type="way" ref="413115585" role=""/>
  <member type="way" ref="413115589" role=""/>
  <member type="way" ref="413115575" role=""/>
  <member type="way" ref="413115577" role=""/>
  <member type="way" ref="413115579" role=""/>
  <member type="way" ref="413115581" role=""/>
  <member type="way" ref="415764361" role=""/>
  <member type="way" ref="415764362" role=""/>
  <member type="way" ref="415764363" role=""/>
  <member type="way" ref="415764365" role=""/>
  <member type="way" ref="549308210" role=""/>
  <member type="way" ref="460740741" role=""/>
  <member type="way" ref="22794288" role=""/>
  <member type="way" ref="20334374" role=""/>
  <member type="way" ref="460740714" role=""/>
  <member type="way" ref="417775516" role=""/>
  <member type="way" ref="330199566" role=""/>
  <member type="way" ref="22794296" role=""/>
  <member type="way" ref="460740723" role=""/>
  <member type="way" ref="460740729" role=""/>
  <member type="way" ref="549308211" role=""/>
  <member type="way" ref="415764366" role=""/>
  <member type="way" ref="415764355" role=""/>
  <member type="way" ref="415764359" role=""/>
  <member type="way" ref="413115590" role=""/>
  <member type="way" ref="413115578" role=""/>
  <member type="way" ref="413115576" role=""/>
  <member type="way" ref="413115574" role=""/>
  <member type="way" ref="113610825" role=""/>
  <member type="way" ref="413115586" role=""/>
  <member type="way" ref="413106632" role=""/>
  <member type="way" ref="413106629" role=""/>
  <member type="way" ref="460870559" role=""/>
  <member type="way" ref="460870558" role=""/>
  <member type="way" ref="413106638" role=""/>
  <member type="way" ref="413106637" role=""/>
  <member type="way" ref="413115571" role=""/>
  <member type="way" ref="413115570" role=""/>
  <member type="way" ref="413115568" role=""/>
  <member type="way" ref="413115566" role=""/>
  <member type="way" ref="413115558" role=""/>
  <member type="way" ref="413115559" role=""/>
  <member type="way" ref="413115555" role=""/>
  <member type="way" ref="413115554" role=""/>
  <member type="way" ref="413115550" role=""/>
  <member type="way" ref="413115551" role=""/>
  <member type="way" ref="413115546" role=""/>
  <member type="way" ref="413115547" role=""/>
  <member type="way" ref="413106641" role=""/>
  <member type="way" ref="413106643" role=""/>
  <member type="way" ref="413106651" role=""/>
  <member type="way" ref="413106650" role=""/>
  <member type="way" ref="113610821" role=""/>
  <member type="way" ref="149786654" role=""/>
  <member type="way" ref="318052098" role=""/>
  <member type="way" ref="318052100" role=""/>
  <member type="way" ref="413106673" role=""/>
  <member type="way" ref="413106668" role=""/>
  <member type="way" ref="113610829" role=""/>
  <member type="way" ref="113610833" role=""/>
  <member type="way" ref="413115540" role=""/>
  <member type="way" ref="413115543" role=""/>
  <member type="way" ref="138583977" role=""/>
  <member type="way" ref="417812301" role=""/>
  <member type="way" ref="599766224" role=""/>
  <member type="way" ref="113610823" role=""/>
  <member type="way" ref="417812309" role=""/>
  <member type="way" ref="417812314" role=""/>
  <member type="way" ref="113610827" role=""/>
  <member type="way" ref="137780873" role=""/>
  <member type="way" ref="137780871" role=""/>
  <member type="way" ref="113610837" role=""/>
  <member type="way" ref="113610831" role=""/>
  <member type="way" ref="113610822" role=""/>
  <member type="way" ref="139269482" role=""/>
  <member type="way" ref="232619347" role=""/>
  <member type="way" ref="113610832" role=""/>
  <member type="way" ref="107899491" role=""/>
  <member type="way" ref="107899484" role=""/>
  <member type="way" ref="107899495" role=""/>
  <member type="way" ref="107899486" role=""/>
  <member type="way" ref="298852647" role=""/>
  <member type="way" ref="391745295" role=""/>
  <member type="way" ref="660431369" role=""/>
  <member type="way" ref="20337421" role=""/>
  <member type="way" ref="137330059" role=""/>
  <member type="way" ref="232619423" role=""/>
  <member type="way" ref="119009501" role=""/>
  <member type="way" ref="205197565" role=""/>
  <member type="way" ref="205197555" role=""/>
  <member type="way" ref="242824088" role=""/>
  <member type="way" ref="692927644" role=""/>
  <member type="way" ref="352863907" role="forward"/>
  <member type="way" ref="352863906" role="forward"/>
  <member type="way" ref="352863903" role="forward"/>
  <member type="way" ref="355291901" role="forward"/>
  <member type="way" ref="352863900" role="forward"/>
  <member type="way" ref="352863892" role="forward"/>
  <member type="way" ref="352863905" role="forward"/>
  <member type="way" ref="352863891" role="forward"/>
  <member type="way" ref="497630954" role="forward"/>
  <member type="way" ref="497630956" role="forward"/>
  <member type="way" ref="352863904" role="forward"/>
  <member type="way" ref="497630962" role="forward"/>
  <member type="way" ref="497630960" role="forward"/>
  <member type="way" ref="497623601" role="forward"/>
  <member type="way" ref="497623606" role="forward"/>
  <member type="way" ref="352863902" role="forward"/>
  <member type="way" ref="497623604" role="forward"/>
  <member type="way" ref="131336088" role=""/>
  <member type="way" ref="232619431" role=""/>
  <member type="way" ref="489007410" role=""/>
  <member type="way" ref="489007411" role=""/>
  <member type="way" ref="129285367" role=""/>
  <member type="way" ref="22812893" role=""/>
  <member type="way" ref="489007636" role=""/>
  <member type="way" ref="489007637" role=""/>
  <member type="way" ref="22812745" role=""/>
  <member type="way" ref="202957780" role=""/>
  <member type="way" ref="22812902" role=""/>
  <member type="way" ref="176304844" role=""/>
  <member type="way" ref="203619579" role="forward"/>
  <member type="way" ref="203619583" role=""/>
  <member type="way" ref="624247084" role=""/>
  <member type="way" ref="624247083" role=""/>
  <member type="way" ref="624247082" role=""/>
  <member type="way" ref="624247081" role=""/>
  <member type="way" ref="629250452" role=""/>
  <member type="way" ref="407745405" role=""/>
  <member type="way" ref="407720976" role=""/>
  <member type="way" ref="399064426" role=""/>
  <member type="way" ref="407720977" role=""/>
  <member type="way" ref="399064429" role=""/>
  <member type="way" ref="407720979" role=""/>
  <member type="way" ref="399064432" role=""/>
  <member type="way" ref="407720980" role=""/>
  <member type="way" ref="399064435" role=""/>
  <member type="way" ref="492491434" role=""/>
  <member type="way" ref="630222641" role=""/>
  <member type="way" ref="630222640" role=""/>
  <member type="way" ref="758285958" role=""/>
  <member type="way" ref="25216367" role=""/>
  <member type="way" ref="203619552" role=""/>
  <member type="way" ref="203619553" role=""/>
  <member type="way" ref="282856549" role=""/>
  <member type="way" ref="282856553" role=""/>
  <member type="way" ref="431535910" role=""/>
  <member type="way" ref="575067979" role=""/>
  <member type="way" ref="399064077" role=""/>
  <member type="way" ref="399064078" role=""/>
  <member type="way" ref="399064079" role=""/>
  <member type="way" ref="399064082" role=""/>
  <member type="way" ref="407745404" role=""/>
  <member type="way" ref="629250454" role=""/>
  <member type="way" ref="399064424" role=""/>
  <member type="way" ref="399064425" role=""/>
  <member type="way" ref="399064427" role=""/>
  <member type="way" ref="399064428" role=""/>
  <member type="way" ref="399064430" role=""/>
  <member type="way" ref="399064431" role=""/>
  <member type="way" ref="399064433" role=""/>
  <member type="way" ref="399064434" role=""/>
  <member type="way" ref="492491435" role=""/>
  <member type="way" ref="265498541" role=""/>
  <member type="way" ref="202494135" role=""/>
  <member type="way" ref="202494180" role=""/>
  <member type="way" ref="202494359" role=""/>
  <member type="way" ref="202494247" role=""/>
  <member type="way" ref="439763916" role=""/>
  <member type="way" ref="439763917" role=""/>
  <member type="way" ref="123171352" role=""/>
  <member type="way" ref="659643470" role=""/>
  <member type="way" ref="22568625" role=""/>
  <member type="way" ref="22568204" role=""/>
  <member type="way" ref="372059811" role=""/>
  <member type="way" ref="210011685" role=""/>
  <member type="way" ref="539712859" role=""/>
  <member type="way" ref="658376167" role=""/>
  <member type="way" ref="210011741" role=""/>
  <member type="way" ref="658376169" role=""/>
  <member type="way" ref="210011689" role=""/>
  <member type="way" ref="210011708" role=""/>
  <member type="way" ref="49854533" role=""/>
  <member type="way" ref="324837512" role=""/>
  <member type="way" ref="318392740" role=""/>
  <member type="way" ref="318392733" role=""/>
  <member type="way" ref="318392735" role=""/>
  <member type="way" ref="318392738" role=""/>
  <member type="way" ref="622443568" role=""/>
  <member type="way" ref="622443569" role=""/>
  <member type="way" ref="622439895" role=""/>
  <member type="way" ref="622435906" role=""/>
  <member type="way" ref="622438329" role=""/>
  <member type="way" ref="622435758" role=""/>
  <member type="way" ref="622435759" role=""/>
  <member type="way" ref="622435637" role=""/>
  <member type="way" ref="622435561" role=""/>
  <member type="way" ref="622435544" role=""/>
  <member type="way" ref="622435543" role=""/>
  <member type="way" ref="622435541" role=""/>
  <member type="way" ref="218963378" role=""/>
  <member type="way" ref="572984965" role=""/>
  <member type="way" ref="622430560" role=""/>
  <member type="way" ref="622411940" role=""/>
  <member type="way" ref="622416102" role=""/>
  <member type="way" ref="622416116" role=""/>
  <member type="way" ref="622418455" role=""/>
  <member type="way" ref="622419121" role=""/>
  <member type="way" ref="622425265" role=""/>
  <member type="way" ref="622428816" role=""/>
  <member type="way" ref="622430557" role=""/>
  <member type="way" ref="622411935" role=""/>
  <member type="way" ref="622409458" role=""/>
  <member type="way" ref="622405769" role=""/>
  <member type="way" ref="622403904" role=""/>
  <member type="way" ref="622403351" role=""/>
  <member type="way" ref="510343778" role=""/>
  <member type="way" ref="218963389" role=""/>
  <member type="way" ref="218963392" role=""/>
  <member type="way" ref="218963387" role=""/>
  <member type="way" ref="622401995" role=""/>
  <member type="way" ref="622401991" role=""/>
  <member type="way" ref="228503391" role=""/>
  <member type="way" ref="622399072" role=""/>
  <member type="way" ref="622395732" role=""/>
  <member type="way" ref="622394545" role=""/>
  <member type="way" ref="622394543" role=""/>
  <member type="way" ref="113598674" role=""/>
  <member type="way" ref="167505402" role=""/>
  <member type="way" ref="167505403" role=""/>
  <member type="way" ref="167505409" role=""/>
  <member type="way" ref="167505404" role=""/>
  <member type="way" ref="38997422" role=""/>
  <member type="way" ref="622380184" role=""/>
  <member type="way" ref="622380186" role=""/>
  <member type="way" ref="113598684" role=""/>
  <member type="way" ref="622378593" role=""/>
  <member type="way" ref="228503396" role=""/>
  <member type="way" ref="622378592" role=""/>
  <member type="way" ref="22896463" role=""/>
  <member type="way" ref="622377434" role=""/>
  <member type="way" ref="491620544" role=""/>
  <member type="way" ref="622374656" role=""/>
  <member type="way" ref="622374650" role=""/>
  <member type="way" ref="622374653" role=""/>
  <member type="way" ref="622374649" role=""/>
  <member type="way" ref="622374644" role=""/>
  <member type="way" ref="622374643" role=""/>
  <member type="way" ref="622374637" role=""/>
  <member type="way" ref="622374636" role=""/>
  <member type="way" ref="622374630" role=""/>
  <member type="way" ref="622374633" role=""/>
  <member type="way" ref="622374629" role=""/>
  <member type="way" ref="622374080" role=""/>
  <member type="way" ref="622375477" role=""/>
  <member type="way" ref="622375793" role=""/>
  <member type="way" ref="622375791" role=""/>
  <member type="way" ref="491620545" role=""/>
  <member type="way" ref="621555594" role=""/>
  <member type="way" ref="208070013" role=""/>
  <member type="way" ref="481673793" role=""/>
  <member type="way" ref="434984007" role=""/>
  <member type="way" ref="621553055" role=""/>
  <member type="way" ref="434984006" role=""/>
  <member type="way" ref="434984008" role=""/>
  <member type="way" ref="621551387" role=""/>
  <member type="way" ref="172429384" role=""/>
  <member type="way" ref="490035221" role=""/>
  <member type="way" ref="490035224" role=""/>
  <member type="way" ref="481673797" role=""/>
  <member type="way" ref="172429383" role=""/>
  <member type="way" ref="216218164" role=""/>
  <member type="way" ref="689732124" role=""/>
  <member type="way" ref="744538140" role=""/>
  <member type="way" ref="708928237" role=""/>
  <member type="way" ref="216218161" role=""/>
  <member type="way" ref="701989906" role=""/>
  <member type="way" ref="22896499" role=""/>
  <member type="way" ref="190835790" role=""/>
  <member type="way" ref="176102873" role=""/>
  <member type="way" ref="176102871" role=""/>
  <member type="way" ref="473277490" role=""/>
  <member type="way" ref="473277491" role=""/>
  <member type="way" ref="83745480" role=""/>
  <member type="way" ref="183964716" role=""/>
  <member type="way" ref="620923401" role=""/>
  <member type="way" ref="412739264" role=""/>
  <member type="way" ref="412739266" role=""/>
  <member type="way" ref="183964718" role=""/>
  <member type="way" ref="83745435" role=""/>
  <member type="way" ref="183964723" role=""/>
  <member type="way" ref="183964721" role=""/>
  <member type="way" ref="426303230" role=""/>
  <member type="way" ref="426303237" role=""/>
  <member type="way" ref="620917078" role=""/>
  <member type="way" ref="620915388" role=""/>
  <member type="way" ref="271838362" role=""/>
  <member type="way" ref="172994481" role=""/>
  <member type="way" ref="172994477" role=""/>
  <member type="way" ref="490033823" role=""/>
  <member type="way" ref="490033817" role=""/>
  <member type="way" ref="271838356" role=""/>
  <member type="way" ref="537702849" role=""/>
  <member type="way" ref="172994479" role=""/>
  <member type="way" ref="172994478" role=""/>
  <member type="way" ref="22897643" role=""/>
  <member type="way" ref="589657966" role=""/>
  <member type="way" ref="22888157" role=""/>
  <member type="way" ref="526991719" role=""/>
  <member type="way" ref="22888171" role=""/>
  <member type="way" ref="22888174" role=""/>
  <member type="way" ref="22871705" role=""/>
  <member type="way" ref="103522405" role=""/>
  <member type="way" ref="189716492" role=""/>
  <member type="way" ref="189716493" role=""/>
  <member type="way" ref="794683314" role=""/>
  <member type="way" ref="534497275" role=""/>
  <member type="way" ref="794683311" role=""/>
  <member type="way" ref="141921486" role=""/>
  <member type="way" ref="141921490" role=""/>
  <member type="way" ref="141921482" role=""/>
  <member type="way" ref="141921484" role=""/>
  <member type="way" ref="232619367" role=""/>
  <member type="way" ref="22887938" role=""/>
  <member type="way" ref="255992309" role=""/>
  <member type="way" ref="421282376" role=""/>
  <member type="way" ref="643748292" role=""/>
  <member type="way" ref="643748296" role=""/>
  <member type="way" ref="516588156" role=""/>
  <member type="way" ref="794674384" role=""/>
  <member type="way" ref="255992310" role=""/>
  <member type="way" ref="255992308" role=""/>
  <member type="way" ref="538580527" role=""/>
  <member type="way" ref="761962989" role="forward"/>
  <member type="way" ref="761962988" role="forward"/>
  <member type="way" ref="25245014" role="forward"/>
  <member type="way" ref="821963287" role="forward"/>
  <member type="way" ref="488511872" role="forward"/>
  <member type="way" ref="821963286" role="forward"/>
  <member type="way" ref="189189162" role="forward"/>
  <member type="way" ref="671202198" role="forward"/>
  <member type="way" ref="821963278" role="forward"/>
  <member type="way" ref="821963279" role="forward"/>
  <member type="way" ref="821963282" role="forward"/>
  <member type="way" ref="658672351" role="forward"/>
  <member type="way" ref="189184067" role=""/>
  <member type="way" ref="301724592" role=""/>
  <member type="way" ref="301724581" role=""/>
  <member type="way" ref="25245468" role=""/>
  <member type="way" ref="649057080" role=""/>
  <member type="way" ref="649057074" role=""/>
  <member type="way" ref="25241018" role=""/>
  <member type="way" ref="93883733" role=""/>
  <member type="way" ref="649057078" role=""/>
  <member type="way" ref="649057075" role=""/>
  <member type="way" ref="649057079" role=""/>
  <member type="way" ref="649931641" role=""/>
  <member type="way" ref="93883742" role=""/>
  <member type="way" ref="671185921" role=""/>
  <member type="way" ref="671185923" role=""/>
  <member type="way" ref="31100911" role=""/>
  <member type="way" ref="31100912" role=""/>
  <member type="way" ref="301724588" role=""/>
  <member type="way" ref="301724609" role=""/>
  <member type="way" ref="301724606" role=""/>
  <member type="way" ref="93890683" role="route"/>
  <member type="way" ref="93890705" role=""/>
  <member type="way" ref="301724602" role=""/>
  <member type="way" ref="93890691" role=""/>
  <member type="way" ref="93890658" role=""/>
  <member type="way" ref="93890725" role=""/>
  <member type="way" ref="93890663" role=""/>
  <member type="way" ref="93890723" role=""/>
  <member type="way" ref="93890661" role=""/>
  <member type="way" ref="301724597" role=""/>
  <member type="way" ref="301724579" role=""/>
  <member type="way" ref="93890669" role=""/>
  <member type="way" ref="93890688" role=""/>
  <member type="way" ref="93890713" role=""/>
  <member type="way" ref="93890728" role=""/>
  <member type="way" ref="93890714" role=""/>
  <member type="way" ref="301724577" role=""/>
  <member type="way" ref="301724586" role=""/>
  <member type="way" ref="488528231" role=""/>
  <member type="way" ref="761969126" role=""/>
  <member type="way" ref="761969125" role=""/>
  <member type="way" ref="761968999" role=""/>
  <member type="way" ref="761968998" role=""/>
  <member type="way" ref="674024783" role=""/>
  <member type="way" ref="343279159" role=""/>
  <member type="way" ref="202494068" role=""/>
  <member type="way" ref="263420594" role=""/>
  <member type="way" ref="263413631" role=""/>
  <member type="way" ref="263413630" role=""/>
  <member type="way" ref="452059919" role=""/>
  <member type="way" ref="452059917" role=""/>
  <member type="way" ref="242702979" role=""/>
  <member type="way" ref="489824525" role=""/>
  <member type="way" ref="233402596" role=""/>
  <member type="way" ref="233402595" role=""/>
  <member type="way" ref="25241024" role=""/>
  <member type="way" ref="300728596" role=""/>
  <member type="way" ref="300728595" role=""/>
  <member type="way" ref="300728597" role=""/>
  <member type="way" ref="235088902" role=""/>
  <member type="way" ref="235088903" role=""/>
  <member type="way" ref="658672350" role="forward"/>
  <member type="way" ref="235088906" role=""/>
  <member type="way" ref="235088904" role=""/>
  <member type="way" ref="671112204" role=""/>
  <member type="way" ref="300728609" role=""/>
  <member type="way" ref="233402601" role=""/>
  <member type="way" ref="627551680" role=""/>
  <member type="way" ref="235086622" role="forward"/>
  <member type="way" ref="189184097" role=""/>
  <member type="way" ref="821963283" role="forward"/>
  <member type="way" ref="821963281" role="forward"/>
  <member type="way" ref="821963280" role="forward"/>
  <member type="way" ref="671202197" role="forward"/>
  <member type="way" ref="300737884" role="forward"/>
  <member type="way" ref="821963284" role="forward"/>
  <member type="way" ref="821963285" role="forward"/>
  <member type="way" ref="761962991" role="forward"/>
  <member type="way" ref="761962990" role="forward"/>
  <member type="way" ref="238763869" role=""/>
  <member type="way" ref="238763867" role=""/>
  <member type="way" ref="586000612" role=""/>
  <member type="way" ref="822377300" role=""/>
  <member type="way" ref="194790035" role=""/>
  <member type="way" ref="282856547" role=""/>
  <member type="way" ref="282856545" role=""/>
  <member type="way" ref="282856550" role=""/>
  <member type="way" ref="431535944" role=""/>
  <member type="way" ref="431535941" role=""/>
  <member type="way" ref="448436409" role=""/>
  <member type="way" ref="738656188" role=""/>
  <member type="way" ref="738656187" role=""/>
  <member type="way" ref="271817754" role=""/>
  <member type="way" ref="282856548" role=""/>
  <member type="way" ref="521941206" role=""/>
  <member type="way" ref="521941200" role=""/>
  <member type="way" ref="147017412" role=""/>
  <member type="way" ref="521941187" role=""/>
  <member type="way" ref="521941185" role=""/>
  <member type="way" ref="521941179" role=""/>
  <member type="way" ref="521941173" role=""/>
  <member type="way" ref="524709677" role=""/>
  <member type="way" ref="521941170" role=""/>
  <member type="way" ref="521941164" role=""/>
  <member type="way" ref="521941159" role=""/>
  <member type="way" ref="521941152" role=""/>
  <member type="way" ref="521941151" role=""/>
  <member type="way" ref="148520161" role=""/>
  <member type="way" ref="89097303" role=""/>
  <member type="way" ref="174529645" role=""/>
  <member type="way" ref="629248297" role=""/>
  <member type="way" ref="680656066" role=""/>
  <member type="way" ref="680656065" role=""/>
  <member type="way" ref="629248296" role=""/>
  <member type="way" ref="312731973" role=""/>
  <member type="way" ref="312731975" role=""/>
  <member type="way" ref="628055759" role=""/>
  <member type="way" ref="628055760" role=""/>
  <member type="way" ref="628061010" role=""/>
  <member type="way" ref="628061011" role=""/>
  <member type="way" ref="628061013" role=""/>
  <member type="way" ref="628061012" role=""/>
  <member type="way" ref="628061014" role=""/>
  <member type="way" ref="628061015" role=""/>
  <member type="way" ref="311979231" role=""/>
  <member type="way" ref="312612690" role=""/>
  <member type="way" ref="680655369" role=""/>
  <member type="way" ref="680655386" role=""/>
  <member type="way" ref="680655228" role=""/>
  <member type="way" ref="680655229" role=""/>
  <member type="way" ref="464796344" role=""/>
  <member type="way" ref="464796346" role=""/>
  <member type="way" ref="464796351" role=""/>
  <member type="way" ref="370875258" role=""/>
  <member type="way" ref="821621324" role=""/>
  <member type="way" ref="821621325" role=""/>
  <member type="way" ref="821642872" role=""/>
  <member type="way" ref="821642874" role=""/>
  <member type="way" ref="464796356" role=""/>
  <member type="way" ref="819345950" role=""/>
  <member type="way" ref="209288476" role=""/>
  <member type="way" ref="391729020" role=""/>
  <member type="way" ref="391729022" role=""/>
  <member type="way" ref="228049618" role=""/>
  <member type="way" ref="40758342" role=""/>
  <member type="way" ref="488528232" role=""/>
  <member type="way" ref="294402573" role=""/>
  <member type="way" ref="294402574" role=""/>
  <member type="way" ref="25246737" role=""/>
  <member type="way" ref="215425593" role=""/>
  <member type="way" ref="301724666" role=""/>
  <member type="way" ref="301724625" role=""/>
  <member type="way" ref="821977685" role=""/>
  <member type="way" ref="216542626" role=""/>
  <member type="way" ref="301724643" role=""/>
  <member type="way" ref="216542635" role=""/>
  <member type="way" ref="216542640" role=""/>
  <member type="way" ref="215425603" role=""/>
  <member type="way" ref="216542627" role=""/>
  <member type="way" ref="674207083" role=""/>
  <member type="way" ref="215425610" role=""/>
  <member type="way" ref="294402583" role=""/>
  <member type="way" ref="294402613" role=""/>
  <member type="way" ref="31101004" role=""/>
  <member type="way" ref="31101002" role=""/>
  <member type="way" ref="150836875" role=""/>
  <member type="way" ref="821995307" role=""/>
  <member type="way" ref="464794240" role=""/>
  <member type="way" ref="821995308" role=""/>
  <member type="way" ref="488597160" role=""/>
  <member type="way" ref="493826021" role=""/>
  <member type="way" ref="493826022" role=""/>
  <member type="way" ref="622181271" role=""/>
  <member type="way" ref="488598444" role=""/>
  <member type="way" ref="369224069" role=""/>
  <member type="way" ref="821995312" role=""/>
  <member type="way" ref="821995314" role=""/>
  <member type="way" ref="25256639" role=""/>
  <member type="way" ref="91792185" role=""/>
  <member type="way" ref="629181019" role=""/>
  <member type="way" ref="629181020" role=""/>
  <member type="way" ref="821995316" role=""/>
  <member type="way" ref="302643117" role=""/>
  <member type="way" ref="302643142" role=""/>
  <member type="way" ref="201352756" role=""/>
  <member type="way" ref="201352758" role=""/>
  <member type="way" ref="821995320" role=""/>
  <member type="way" ref="242692103" role=""/>
  <member type="way" ref="147017417" role=""/>
  <member type="way" ref="302643121" role=""/>
  <member type="way" ref="302643123" role=""/>
  <member type="way" ref="302643167" role=""/>
  <member type="way" ref="302643161" role=""/>
  <member type="way" ref="302643164" role=""/>
  <member type="way" ref="302643115" role=""/>
  <member type="way" ref="821999014" role=""/>
  <member type="way" ref="521941142" role=""/>
  <member type="way" ref="521941131" role=""/>
  <member type="way" ref="521941124" role=""/>
  <member type="way" ref="521941118" role=""/>
  <member type="way" ref="521941117" role=""/>
  <member type="way" ref="521941113" role=""/>
  <member type="way" ref="521941112" role=""/>
  <member type="way" ref="302643118" role=""/>
  <member type="way" ref="521941107" role=""/>
  <member type="way" ref="521941108" role=""/>
  <member type="way" ref="302643119" role=""/>
  <member type="way" ref="150406130" role=""/>
  <member type="way" ref="150406132" role=""/>
  <member type="way" ref="302643153" role=""/>
  <member type="way" ref="488598446" role=""/>
  <member type="way" ref="369224067" role=""/>
  <member type="way" ref="25241010" role=""/>
  <member type="way" ref="369224071" role=""/>
  <member type="way" ref="369224190" role=""/>
  <member type="way" ref="493826023" role=""/>
  <member type="way" ref="493826020" role=""/>
  <member type="way" ref="821995306" role=""/>
  <member type="way" ref="301724644" role=""/>
  <member type="way" ref="301724627" role=""/>
  <member type="way" ref="301724653" role=""/>
  <member type="way" ref="301724631" role=""/>
  <member type="way" ref="301724616" role=""/>
  <member type="way" ref="301724630" role=""/>
  <member type="way" ref="674207084" role=""/>
  <member type="way" ref="301724650" role=""/>
  <member type="way" ref="464794239" role=""/>
  <member type="way" ref="215425599" role=""/>
  <member type="way" ref="242692075" role=""/>
  <member type="way" ref="301724578" role=""/>
  <member type="way" ref="821995315" role=""/>
  <member type="way" ref="821995313" role=""/>
  <member type="way" ref="821995311" role=""/>
  <member type="way" ref="488598790" role=""/>
  <member type="way" ref="369358934" role=""/>
  <member type="way" ref="369455447" role=""/>
  <member type="way" ref="521941374" role=""/>
  <member type="way" ref="521941362" role=""/>
  <member type="way" ref="521941357" role=""/>
  <member type="way" ref="147017419" role=""/>
  <member type="way" ref="423427535" role=""/>
  <member type="way" ref="369361613" role=""/>
  <member type="way" ref="339754368" role=""/>
  <member type="way" ref="521941229" role=""/>
  <member type="way" ref="521941403" role=""/>
  <member type="way" ref="521941413" role=""/>
  <member type="way" ref="369455448" role=""/>
  <member type="way" ref="558008636" role=""/>
  <member type="way" ref="558008635" role=""/>
  <member type="way" ref="521941445" role=""/>
  <member type="way" ref="521941463" role=""/>
  <member type="way" ref="521941482" role=""/>
  <member type="way" ref="821999018" role=""/>
  <member type="way" ref="150406131" role=""/>
  <member type="way" ref="150406129" role=""/>
  <member type="way" ref="521941111" role=""/>
  <member type="way" ref="521941116" role=""/>
  <member type="way" ref="521941121" role=""/>
  <member type="way" ref="521941122" role=""/>
  <member type="way" ref="521941128" role=""/>
  <member type="way" ref="521941134" role=""/>
  <member type="way" ref="521941139" role=""/>
  <member type="way" ref="22873623" role=""/>
  <member type="way" ref="193659939" role=""/>
  <member type="way" ref="821999015" role=""/>
  <member type="way" ref="302643122" role=""/>
  <member type="way" ref="302643163" role=""/>
  <member type="way" ref="302643169" role=""/>
  <member type="way" ref="821995323" role=""/>
  <member type="way" ref="302643120" role=""/>
  <member type="way" ref="358510871" role=""/>
  <member type="way" ref="302643134" role=""/>
  <member type="way" ref="91792184" role=""/>
  <member type="way" ref="201352755" role=""/>
  <member type="way" ref="201352757" role=""/>
  <member type="way" ref="25254442" role=""/>
  <member type="way" ref="821995319" role=""/>
  <member type="way" ref="821995318" role=""/>
  <member type="way" ref="91792307" role=""/>
  <member type="way" ref="821995317" role=""/>
  <member type="way" ref="488530183" role=""/>
  <member type="way" ref="821977684" role=""/>
  <member type="way" ref="674207082" role=""/>
  <member type="way" ref="301724645" role=""/>
  <member type="way" ref="216542638" role=""/>
  <member type="way" ref="216542624" role=""/>
  <member type="way" ref="627575929" role=""/>
  <member type="way" ref="40495905" role=""/>
  <member type="way" ref="228053562" role=""/>
  <member type="way" ref="228469984" role=""/>
  <member type="way" ref="228053561" role=""/>
  <member type="way" ref="22568146" role=""/>
  <member type="way" ref="22568153" role=""/>
  <member type="way" ref="659643471" role=""/>
  <member type="way" ref="22568624" role=""/>
  <member type="way" ref="210011728" role=""/>
  <member type="way" ref="228184592" role=""/>
  <member type="way" ref="539712858" role=""/>
  <member type="way" ref="539712860" role=""/>
  <member type="way" ref="658376168" role=""/>
  <member type="way" ref="210011704" role=""/>
  <member type="way" ref="658376170" role=""/>
  <member type="way" ref="210011744" role=""/>
  <member type="way" ref="210011735" role=""/>
  <member type="way" ref="627546159" role=""/>
  <member type="way" ref="242702993" role=""/>
  <member type="way" ref="352368188" role=""/>
  <member type="way" ref="352368183" role=""/>
  <member type="way" ref="352368178" role=""/>
  <member type="way" ref="376198935" role=""/>
  <member type="way" ref="376198936" role=""/>
  <member type="way" ref="376198938" role=""/>
  <member type="way" ref="376198937" role=""/>
  <member type="way" ref="467458091" role=""/>
  <member type="way" ref="467458092" role=""/>
  <member type="way" ref="352368738" role=""/>
  <member type="way" ref="352368736" role=""/>
  <member type="way" ref="352378103" role=""/>
  <member type="way" ref="352368733" role=""/>
  <member type="way" ref="352368744" role=""/>
  <member type="way" ref="352378105" role=""/>
  <member type="way" ref="376025334" role=""/>
  <member type="way" ref="376025333" role=""/>
  <member type="way" ref="352368740" role=""/>
  <member type="way" ref="352368749" role=""/>
  <member type="way" ref="352379535" role=""/>
  <member type="way" ref="352379547" role=""/>
  <member type="way" ref="376196253" role=""/>
  <member type="way" ref="109982901" role=""/>
  <member type="way" ref="391437775" role=""/>
  <member type="way" ref="518878844" role=""/>
  <member type="way" ref="518878843" role=""/>
  <member type="way" ref="240180099" role=""/>
  <member type="way" ref="240180097" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="392046400" role=""/>
  <member type="way" ref="586137176" role=""/>
  <member type="way" ref="586137173" role=""/>
  <member type="way" ref="758643294" role=""/>
  <member type="way" ref="174750063" role=""/>
  <member type="way" ref="738656190" role=""/>
  <member type="way" ref="738656189" role=""/>
  <member type="way" ref="22953901" role=""/>
  <member type="way" ref="448436408" role=""/>
  <member type="way" ref="83640619" role=""/>
  <member type="way" ref="282856551" role=""/>
  <member type="way" ref="431535942" role=""/>
  <member type="way" ref="431535943" role=""/>
  <member type="way" ref="629193606" role=""/>
  <member type="way" ref="529119095" role=""/>
  <member type="way" ref="355254066" role=""/>
  <member type="way" ref="406823775" role=""/>
  <member type="way" ref="137306594" role=""/>
  <member type="way" ref="137313921" role="forward"/>
  <member type="way" ref="42790656" role="forward"/>
  <member type="way" ref="435272562" role=""/>
  <member type="way" ref="435272561" role=""/>
  <member type="way" ref="250847292" role=""/>
  <member type="way" ref="428789563" role=""/>
  <member type="way" ref="428789562" role=""/>
  <member type="way" ref="358614902" role=""/>
  <member type="way" ref="358597311" role=""/>
  <member type="way" ref="358597310" role=""/>
  <member type="way" ref="358614904" role=""/>
  <member type="way" ref="242819263" role=""/>
  <member type="way" ref="42790744" role=""/>
  <member type="way" ref="428789560" role=""/>
  <member type="way" ref="58402044" role=""/>
  <member type="way" ref="435272560" role=""/>
  <member type="way" ref="435272563" role=""/>
  <member type="way" ref="428789567" role=""/>
  <member type="way" ref="428789561" role=""/>
  <member type="way" ref="250847293" role=""/>
  <member type="way" ref="358614905" role=""/>
  <member type="way" ref="358597309" role=""/>
  <member type="way" ref="358597308" role=""/>
  <member type="way" ref="358614903" role=""/>
  <member type="way" ref="250847291" role=""/>
  <member type="way" ref="428789559" role=""/>
  <member type="way" ref="428789558" role="forward"/>
  <member type="way" ref="301724589" role=""/>
  <member type="way" ref="202499739" role=""/>
  <member type="way" ref="25216369" role=""/>
  <member type="way" ref="109980716" role=""/>
  <member type="way" ref="182646383" role=""/>
  <member type="way" ref="490032607" role=""/>
  <member type="way" ref="490032602" role=""/>
  <member type="way" ref="493468398" role=""/>
  <member type="way" ref="821709914" role=""/>
  <member type="way" ref="493468711" role=""/>
  <member type="way" ref="600806638" role=""/>
  <member type="way" ref="493471233" role=""/>
  <member type="way" ref="493471232" role=""/>
  <member type="way" ref="493471231" role=""/>
  <member type="way" ref="493473298" role=""/>
  <member type="way" ref="31101509" role=""/>
  <member type="way" ref="31101510" role=""/>
  <member type="way" ref="312612694" role=""/>
  <member type="way" ref="493474320" role=""/>
  <member type="way" ref="25217612" role=""/>
  <member type="way" ref="338581544" role=""/>
  <member type="way" ref="821861823" role=""/>
  <member type="way" ref="821861822" role=""/>
  <member type="way" ref="83599575" role=""/>
  <member type="way" ref="338579631" role=""/>
  <member type="way" ref="338581780" role=""/>
  <member type="way" ref="481800634" role=""/>
  <member type="way" ref="481800633" role=""/>
  <member type="way" ref="481800630" role=""/>
  <member type="way" ref="481800629" role=""/>
  <member type="way" ref="493465343" role=""/>
  <member type="way" ref="643107144" role=""/>
  <member type="way" ref="92433091" role=""/>
  <member type="way" ref="92433171" role=""/>
  <member type="way" ref="73890159" role=""/>
  <member type="way" ref="366453529" role=""/>
  <member type="way" ref="366453531" role=""/>
  <member type="way" ref="73890166" role=""/>
  <member type="way" ref="192898318" role=""/>
  <member type="way" ref="496253221" role=""/>
  <member type="way" ref="192898320" role=""/>
  <member type="way" ref="399509763" role=""/>
  <member type="way" ref="265495104" role=""/>
  <member type="way" ref="441979399" role=""/>
  <member type="way" ref="439404700" role=""/>
  <member type="way" ref="439214253" role=""/>
  <member type="way" ref="137330060" role=""/>
  <member type="way" ref="119009493" role=""/>
  <member type="way" ref="119009506" role=""/>
  <member type="way" ref="42790746" role="forward"/>
  <member type="way" ref="138744219" role="forward"/>
  <member type="way" ref="298989223" role="forward"/>
  <member type="way" ref="80261966" role="forward"/>
  <member type="way" ref="139828846" role="forward"/>
  <member type="way" ref="139829399" role="forward"/>
  <member type="way" ref="139828765" role="forward"/>
  <member type="way" ref="482974166" role="forward"/>
  <member type="way" ref="482974173" role="forward"/>
  <member type="way" ref="482974168" role="forward"/>
  <member type="way" ref="482974172" role="forward"/>
  <member type="way" ref="497599614" role="forward"/>
  <member type="way" ref="497603375" role="forward"/>
  <member type="way" ref="497603377" role=""/>
  <member type="way" ref="42790743" role=""/>
  <member type="way" ref="428789557" role="forward"/>
  <member type="way" ref="493474321" role=""/>
  <member type="way" ref="493158640" role=""/>
  <member type="way" ref="821621323" role=""/>
  <member type="way" ref="821621322" role=""/>
  <member type="way" ref="821642871" role=""/>
  <member type="way" ref="821642873" role=""/>
  <member type="way" ref="174529644" role=""/>
  <member type="way" ref="497623602" role=""/>
  <member type="way" ref="137313938" role=""/>
  <member type="way" ref="497623605" role="forward"/>
  <member type="way" ref="497623603" role="forward"/>
  <member type="way" ref="137313937" role="forward"/>
  <member type="way" ref="497630963" role="forward"/>
  <member type="way" ref="497630961" role="forward"/>
  <member type="way" ref="233711935" role="forward"/>
  <member type="way" ref="497630955" role="forward"/>
  <member type="way" ref="497630957" role="forward"/>
  <member type="way" ref="119009500" role="forward"/>
  <member type="way" ref="138950228" role="forward"/>
  <member type="way" ref="138950229" role="forward"/>
  <member type="way" ref="352863901" role="forward"/>
  <member type="way" ref="242824462" role="forward"/>
  <member type="way" ref="298781449" role="forward"/>
  <member type="way" ref="242824087" role="forward"/>
  <member type="way" ref="298781448" role="forward"/>
  <member type="way" ref="352379544" role=""/>
  <member type="way" ref="348453094" role=""/>
  <member type="way" ref="174536344" role=""/>
  <member type="way" ref="174536343" role=""/>
  <member type="way" ref="174536349" role=""/>
  <member type="way" ref="348453093" role=""/>
  <member type="way" ref="395272681" role=""/>
  <member type="way" ref="562168001" role=""/>
  <member type="way" ref="562168004" role=""/>
  <member type="way" ref="562168005" role=""/>
  <member type="way" ref="395272680" role=""/>
  <member type="way" ref="22717449" role=""/>
  <member type="way" ref="488191074" role=""/>
  <member type="way" ref="488191075" role=""/>
  <member type="way" ref="493699332" role=""/>
  <member type="way" ref="38269341" role=""/>
  <member type="way" ref="193562790" role=""/>
  <member type="way" ref="165998251" role=""/>
  <member type="way" ref="22721414" role=""/>
  <member type="way" ref="22721415" role=""/>
  <member type="way" ref="700032265" role=""/>
  <member type="way" ref="700032264" role=""/>
  <member type="way" ref="62386437" role=""/>
  <member type="way" ref="166012738" role=""/>
  <member type="way" ref="166012715" role=""/>
  <member type="way" ref="493699334" role=""/>
  <member type="way" ref="500685718" role=""/>
  <member type="way" ref="245814568" role=""/>
  <member type="way" ref="128372588" role=""/>
  <member type="way" ref="292713125" role=""/>
  <member type="way" ref="500685745" role=""/>
  <member type="way" ref="447688216" role=""/>
  <member type="way" ref="629028368" role=""/>
  <member type="way" ref="379516442" role=""/>
  <member type="way" ref="435519893" role=""/>
  <member type="way" ref="493655188" role=""/>
  <member type="way" ref="447688212" role=""/>
  <member type="way" ref="629028369" role=""/>
  <member type="way" ref="492491432" role=""/>
  <member type="way" ref="493655191" role=""/>
  <member type="way" ref="587938414" role=""/>
  <member type="way" ref="645591393" role="forward"/>
  <member type="way" ref="493699337" role=""/>
  <member type="way" ref="250780822" role="forward"/>
  <member type="way" ref="324691991" role="forward"/>
  <member type="way" ref="324691990" role="forward"/>
  <member type="way" ref="324691979" role="forward"/>
  <member type="way" ref="324691983" role="forward"/>
  <member type="way" ref="324691978" role="forward"/>
  <member type="way" ref="324691985" role="forward"/>
  <member type="way" ref="497599591" role="forward"/>
  <member type="way" ref="139829423" role="forward"/>
  <member type="way" ref="301620757" role="forward"/>
  <member type="way" ref="482974174" role="forward"/>
  <member type="way" ref="482974169" role="forward"/>
  <member type="way" ref="482974171" role="forward"/>
  <member type="way" ref="497599617" role="forward"/>
  <member type="way" ref="497599572" role="forward"/>
  <member type="way" ref="298989224" role="forward"/>
  <member type="way" ref="298989226" role="forward"/>
  <member type="way" ref="298989225" role="forward"/>
  <member type="way" ref="497623593" role="forward"/>
  <member type="way" ref="497623594" role="forward"/>
  <member type="way" ref="822377297" role=""/>
  <member type="way" ref="489830914" role=""/>
  <member type="way" ref="489830916" role=""/>
  <member type="way" ref="280575746" role=""/>
  <member type="way" ref="280575748" role=""/>
  <member type="way" ref="607973059" role=""/>
  <member type="way" ref="391671109" role=""/>
  <member type="way" ref="493655189" role=""/>
  <member type="way" ref="575062182" role=""/>
  <member type="way" ref="493655190" role=""/>
  <member type="way" ref="399065061" role=""/>
  <member type="way" ref="575063980" role=""/>
  <member type="way" ref="493658255" role=""/>
  <member type="way" ref="448612168" role=""/>
  <member type="way" ref="397703701" role=""/>
  <member type="way" ref="629024055" role=""/>
  <member type="way" ref="397703703" role=""/>
  <member type="way" ref="448612166" role=""/>
  <member type="way" ref="448612170" role=""/>
  <member type="way" ref="493659055" role=""/>
  <member type="way" ref="202494329" role=""/>
  <member type="way" ref="202494193" role=""/>
  <member type="way" ref="574537062" role=""/>
  <member type="way" ref="574537063" role=""/>
  <member type="way" ref="202494381" role=""/>
  <member type="way" ref="202494220" role=""/>
  <member type="way" ref="202494216" role=""/>
  <member type="way" ref="202494175" role=""/>
  <member type="way" ref="202494347" role=""/>
  <member type="way" ref="202494176" role=""/>
  <member type="way" ref="202494310" role=""/>
  <member type="way" ref="202494275" role=""/>
  <member type="way" ref="202494383" role=""/>
  <member type="way" ref="202494233" role=""/>
  <member type="way" ref="644510803" role=""/>
  <member type="way" ref="644510804" role=""/>
  <member type="way" ref="644048077" role=""/>
  <member type="way" ref="644048078" role=""/>
  <member type="way" ref="644048073" role=""/>
  <member type="way" ref="644048074" role=""/>
  <member type="way" ref="574537044" role=""/>
  <member type="way" ref="406597284" role=""/>
  <member type="way" ref="629024056" role=""/>
  <member type="way" ref="574537061" role=""/>
  <member type="way" ref="406597292" role=""/>
  <member type="way" ref="574537052" role=""/>
  <member type="way" ref="629024053" role=""/>
  <member type="way" ref="629024054" role=""/>
  <member type="way" ref="574537064" role=""/>
  <member type="way" ref="574537065" role=""/>
  <member type="way" ref="575062179" role=""/>
  <member type="way" ref="575062178" role=""/>
  <member type="way" ref="629024052" role=""/>
  <member type="way" ref="629024049" role=""/>
  <member type="way" ref="575059293" role=""/>
  <member type="way" ref="644510802" role=""/>
  <member type="way" ref="644510801" role=""/>
  <member type="way" ref="644048080" role=""/>
  <member type="way" ref="644048079" role=""/>
  <member type="way" ref="644048076" role=""/>
  <member type="way" ref="644048075" role=""/>
  <member type="way" ref="574812997" role=""/>
  <member type="way" ref="574537038" role=""/>
  <member type="way" ref="574537047" role=""/>
  <member type="way" ref="575102074" role=""/>
  <member type="way" ref="575102075" role=""/>
  <member type="way" ref="493464109" role=""/>
  <member type="way" ref="430710038" role=""/>
  <member type="way" ref="671109893" role=""/>
  <member type="way" ref="657833165" role=""/>
  <member type="way" ref="657833166" role=""/>
  <member type="way" ref="674024782" role=""/>
  <member type="way" ref="761969001" role=""/>
  <member type="way" ref="761969000" role=""/>
  <member type="way" ref="761969128" role=""/>
  <member type="way" ref="761969127" role=""/>
  <member type="way" ref="300737863" role=""/>
  <member type="way" ref="671185924" role=""/>
  <member type="way" ref="671185922" role=""/>
  <member type="way" ref="301724608" role=""/>
  <member type="way" ref="300737878" role=""/>
  <member type="way" ref="300737864" role=""/>
  <member type="way" ref="300737875" role=""/>
  <member type="way" ref="300737865" role=""/>
  <member type="way" ref="300737871" role=""/>
  <member type="way" ref="301724668" role=""/>
  <member type="way" ref="649057077" role=""/>
  <member type="way" ref="649057076" role=""/>
  <member type="way" ref="300737881" role=""/>
  <member type="way" ref="300737869" role=""/>
  <member type="way" ref="300737877" role=""/>
  <member type="way" ref="300737882" role=""/>
  <member type="way" ref="680655379" role=""/>
  <member type="way" ref="680655226" role=""/>
  <member type="way" ref="680655227" role=""/>
  <tag k="int_ref" v="AH5"/>
  <tag k="name" v="Asian Highway AH5"/>
  <tag k="name:de" v="Asiatische Fernstraße 5"/>
  <tag k="name:en" v="Asian Highway AH5"/>
  <tag k="name:ru" v="Азиатский маршрут AH5"/>
  <tag k="network" v="AsianHighway"/>
  <tag k="ref" v="AH5"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q4651742"/>
  <tag k="wikipedia" v="en:AH5"/>
  <tag k="wikipedia:en" v="AH5"/>
 </relation>
 <relation id="223448" visible="true" version="22" changeset="57081912" timestamp="2018-03-11T13:56:09Z" user="katpatuka" uid="17497">
  <member type="way" ref="305918073" role="outer"/>
  <member type="way" ref="136059168" role="outer"/>
  <member type="way" ref="136064213" role="outer"/>
  <member type="way" ref="136064212" role="outer"/>
  <member type="way" ref="136052780" role="outer"/>
  <member type="way" ref="284310616" role="outer"/>
  <member type="way" ref="96033749" role="outer"/>
  <member type="way" ref="136477219" role="outer"/>
  <member type="way" ref="15220798" role="outer"/>
  <member type="way" ref="120393078" role="outer"/>
  <member type="way" ref="136477224" role="outer"/>
  <member type="way" ref="120393082" role="outer"/>
  <member type="way" ref="120393074" role="outer"/>
  <member type="way" ref="38426013" role="outer"/>
  <member type="way" ref="114389584" role="outer"/>
  <member type="way" ref="148975624" role="outer"/>
  <member type="way" ref="136477223" role="outer"/>
  <member type="way" ref="148975272" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="way" ref="36737725" role="outer"/>
  <member type="way" ref="38425500" role="outer"/>
  <member type="way" ref="31878693" role="outer"/>
  <member type="way" ref="15895475" role="outer"/>
  <member type="way" ref="136477220" role="outer"/>
  <member type="way" ref="96033747" role="outer"/>
  <member type="way" ref="136477222" role="outer"/>
  <member type="way" ref="127478998" role="outer"/>
  <member type="node" ref="2908518369" role="label"/>
  <member type="relation" ref="1838467" role="subarea"/>
  <member type="relation" ref="1838466" role="subarea"/>
  <member type="relation" ref="1838462" role="subarea"/>
  <member type="relation" ref="1838463" role="subarea"/>
  <member type="relation" ref="1596278" role="subarea"/>
  <member type="relation" ref="1838465" role="subarea"/>
  <member type="relation" ref="1838464" role="subarea"/>
  <member type="relation" ref="1385155" role="subarea"/>
  <member type="relation" ref="8101358" role="subarea"/>
  <tag k="admin_level" v="4"/>
  <tag k="boundary" v="administrative"/>
  <tag k="is_in:continent" v="Asia"/>
  <tag k="is_in:country" v="Turkey"/>
  <tag k="is_in:country_code" v="TR"/>
  <tag k="ISO3166-2" v="TR-08"/>
  <tag k="name" v="Artvin"/>
  <tag k="name:de" v="Artvin"/>
  <tag k="name:en" v="Artvin"/>
  <tag k="name:es" v="Artvin"/>
  <tag k="name:fr" v="Artvin"/>
  <tag k="name:ru" v="Артвин"/>
  <tag k="name:tr" v="Artvin"/>
  <tag k="name:uk" v="Артвін"/>
  <tag k="network" v="TR-provinces"/>
  <tag k="ref:NUTS" v="TR905"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q43745"/>
  <tag k="wikipedia" v="tr:Artvin (il)"/>
 </relation>
 <relation id="371024" visible="true" version="476" changeset="90791533" timestamp="2020-09-12T11:31:41Z" user="Alikam" uid="3997418">
  <member type="way" ref="275184975" role=""/>
  <member type="way" ref="276163434" role=""/>
  <member type="way" ref="276163435" role=""/>
  <member type="way" ref="274055401" role=""/>
  <member type="way" ref="274055400" role=""/>
  <member type="way" ref="248463361" role=""/>
  <member type="way" ref="248463365" role=""/>
  <member type="way" ref="248463364" role=""/>
  <member type="way" ref="230106730" role=""/>
  <member type="way" ref="706574528" role=""/>
  <member type="way" ref="230106741" role=""/>
  <member type="way" ref="230106739" role=""/>
  <member type="way" ref="230106737" role=""/>
  <member type="way" ref="230106361" role=""/>
  <member type="way" ref="230106376" role=""/>
  <member type="way" ref="704810818" role=""/>
  <member type="way" ref="230106357" role=""/>
  <member type="way" ref="230106360" role=""/>
  <member type="way" ref="758108590" role=""/>
  <member type="way" ref="230105467" role=""/>
  <member type="way" ref="230105479" role=""/>
  <member type="way" ref="230105475" role=""/>
  <member type="way" ref="230105482" role=""/>
  <member type="way" ref="230105471" role=""/>
  <member type="way" ref="230105483" role=""/>
  <member type="way" ref="230105470" role=""/>
  <member type="way" ref="230105476" role=""/>
  <member type="way" ref="230105468" role=""/>
  <member type="way" ref="230105465" role=""/>
  <member type="way" ref="230112819" role=""/>
  <member type="way" ref="230112818" role=""/>
  <member type="way" ref="307180455" role=""/>
  <member type="way" ref="307180466" role=""/>
  <member type="way" ref="307180465" role=""/>
  <member type="way" ref="307180459" role=""/>
  <member type="way" ref="307180462" role=""/>
  <member type="way" ref="307180463" role=""/>
  <member type="way" ref="307180461" role=""/>
  <member type="way" ref="307180460" role=""/>
  <member type="way" ref="133392475" role="forward"/>
  <member type="way" ref="133392476" role=""/>
  <member type="way" ref="133392469" role=""/>
  <member type="way" ref="133392470" role=""/>
  <member type="way" ref="133392471" role=""/>
  <member type="way" ref="186870757" role="forward"/>
  <member type="way" ref="195746377" role="forward"/>
  <member type="way" ref="62377858" role=""/>
  <member type="way" ref="66050188" role=""/>
  <member type="way" ref="66049979" role=""/>
  <member type="way" ref="66050158" role=""/>
  <member type="way" ref="66049990" role=""/>
  <member type="way" ref="148505731" role=""/>
  <member type="way" ref="148505730" role=""/>
  <member type="way" ref="66050094" role=""/>
  <member type="way" ref="66050020" role=""/>
  <member type="way" ref="62377855" role=""/>
  <member type="way" ref="757114152" role=""/>
  <member type="way" ref="115592058" role=""/>
  <member type="way" ref="757114152" role=""/>
  <member type="way" ref="66050114" role=""/>
  <member type="way" ref="66050181" role=""/>
  <member type="way" ref="140792175" role=""/>
  <member type="way" ref="140792196" role=""/>
  <member type="way" ref="66050041" role=""/>
  <member type="way" ref="66049999" role=""/>
  <member type="way" ref="66050193" role=""/>
  <member type="way" ref="66049970" role=""/>
  <member type="way" ref="66050148" role=""/>
  <member type="way" ref="220136654" role=""/>
  <member type="way" ref="220136653" role=""/>
  <member type="way" ref="66050199" role=""/>
  <member type="way" ref="66050120" role=""/>
  <member type="way" ref="66050173" role=""/>
  <member type="way" ref="66050165" role=""/>
  <member type="way" ref="66050065" role=""/>
  <member type="way" ref="66050126" role=""/>
  <member type="way" ref="230676997" role=""/>
  <member type="way" ref="230676998" role=""/>
  <member type="way" ref="274795916" role=""/>
  <member type="way" ref="274795915" role=""/>
  <member type="way" ref="274795895" role=""/>
  <member type="way" ref="274795905" role=""/>
  <member type="way" ref="62377865" role=""/>
  <member type="way" ref="62377881" role=""/>
  <member type="way" ref="79224911" role="backward"/>
  <member type="way" ref="195746368" role="backward"/>
  <member type="way" ref="79224888" role=""/>
  <member type="way" ref="79174456" role=""/>
  <member type="way" ref="288450113" role=""/>
  <member type="way" ref="308263789" role=""/>
  <member type="way" ref="371552207" role=""/>
  <member type="way" ref="371552206" role=""/>
  <member type="way" ref="308263790" role=""/>
  <member type="way" ref="284842451" role=""/>
  <member type="way" ref="284842450" role=""/>
  <member type="way" ref="308263791" role=""/>
  <member type="way" ref="79224900" role=""/>
  <member type="way" ref="273588785" role=""/>
  <member type="way" ref="273588780" role=""/>
  <member type="way" ref="62377837" role=""/>
  <member type="way" ref="62377923" role=""/>
  <member type="way" ref="195746364" role=""/>
  <member type="way" ref="195746381" role="forward"/>
  <member type="way" ref="99753872" role="forward"/>
  <member type="way" ref="279792834" role="forward"/>
  <member type="way" ref="258614047" role="forward"/>
  <member type="way" ref="279792835" role="forward"/>
  <member type="way" ref="99753936" role="forward"/>
  <member type="way" ref="99753869" role=""/>
  <member type="way" ref="81246441" role=""/>
  <member type="way" ref="81246467" role=""/>
  <member type="way" ref="99753827" role=""/>
  <member type="way" ref="231337806" role=""/>
  <member type="way" ref="230414401" role=""/>
  <member type="way" ref="208081529" role=""/>
  <member type="way" ref="231337805" role=""/>
  <member type="way" ref="4417503" role=""/>
  <member type="way" ref="99703495" role=""/>
  <member type="way" ref="66069164" role=""/>
  <member type="way" ref="66069035" role=""/>
  <member type="way" ref="66069132" role=""/>
  <member type="way" ref="277017222" role=""/>
  <member type="way" ref="230415348" role=""/>
  <member type="way" ref="208081533" role=""/>
  <member type="way" ref="69969061" role=""/>
  <member type="way" ref="276981298" role=""/>
  <member type="way" ref="62377847" role=""/>
  <member type="way" ref="276981296" role=""/>
  <member type="way" ref="208081524" role=""/>
  <member type="way" ref="231308080" role=""/>
  <member type="way" ref="99998722" role=""/>
  <member type="way" ref="99998700" role=""/>
  <member type="way" ref="235480475" role=""/>
  <member type="way" ref="235480470" role=""/>
  <member type="way" ref="62377850" role=""/>
  <member type="way" ref="62377870" role=""/>
  <member type="way" ref="4413521" role=""/>
  <member type="way" ref="99869138" role=""/>
  <member type="way" ref="99869100" role=""/>
  <member type="way" ref="231308554" role="forward"/>
  <member type="way" ref="689092607" role=""/>
  <member type="way" ref="250431116" role=""/>
  <member type="way" ref="66069009" role="forward"/>
  <member type="way" ref="689092606" role="forward"/>
  <member type="way" ref="410062488" role=""/>
  <member type="way" ref="689092605" role="forward"/>
  <member type="way" ref="689092604" role="forward"/>
  <member type="way" ref="99869065" role="forward"/>
  <member type="way" ref="115088089" role=""/>
  <member type="way" ref="205499937" role=""/>
  <member type="way" ref="69969056" role=""/>
  <member type="way" ref="99869108" role=""/>
  <member type="way" ref="233592918" role=""/>
  <member type="way" ref="233592929" role=""/>
  <member type="way" ref="71105620" role=""/>
  <member type="way" ref="71105598" role=""/>
  <member type="way" ref="71105606" role=""/>
  <member type="way" ref="668672582" role=""/>
  <member type="way" ref="709196691" role=""/>
  <member type="way" ref="668672581" role=""/>
  <member type="way" ref="66068954" role=""/>
  <member type="way" ref="66069059" role=""/>
  <member type="way" ref="66069109" role=""/>
  <member type="way" ref="66068914" role=""/>
  <member type="way" ref="66069185" role=""/>
  <member type="way" ref="227927692" role=""/>
  <member type="way" ref="227927693" role=""/>
  <member type="way" ref="454973181" role=""/>
  <member type="way" ref="227927703" role=""/>
  <member type="way" ref="66069099" role=""/>
  <member type="way" ref="232223018" role=""/>
  <member type="way" ref="232223019" role=""/>
  <member type="way" ref="691415605" role=""/>
  <member type="way" ref="691415606" role=""/>
  <member type="way" ref="691415607" role=""/>
  <member type="way" ref="491538767" role=""/>
  <member type="way" ref="491538766" role=""/>
  <member type="way" ref="274122149" role=""/>
  <member type="way" ref="274122151" role=""/>
  <member type="way" ref="274122156" role=""/>
  <member type="way" ref="710876495" role=""/>
  <member type="way" ref="580584834" role=""/>
  <member type="way" ref="66068941" role=""/>
  <member type="way" ref="274122157" role=""/>
  <member type="way" ref="274122152" role=""/>
  <member type="way" ref="701773908" role=""/>
  <member type="way" ref="229960581" role=""/>
  <member type="way" ref="207930684" role=""/>
  <member type="way" ref="491581647" role=""/>
  <member type="way" ref="188863663" role=""/>
  <member type="way" ref="689134152" role="forward"/>
  <member type="way" ref="169835252" role="forward"/>
  <member type="way" ref="66068925" role="forward"/>
  <member type="way" ref="586409085" role="forward"/>
  <member type="way" ref="586409086" role="forward"/>
  <member type="way" ref="586409084" role="forward"/>
  <member type="way" ref="586410821" role="forward"/>
  <member type="way" ref="586410820" role="forward"/>
  <member type="way" ref="169835255" role="forward"/>
  <member type="way" ref="689134174" role="forward"/>
  <member type="way" ref="195746362" role="forward"/>
  <member type="way" ref="86094899" role="forward"/>
  <member type="way" ref="86094872" role="forward"/>
  <member type="way" ref="86094884" role="forward"/>
  <member type="way" ref="86094879" role="forward"/>
  <member type="way" ref="189030135" role="forward"/>
  <member type="way" ref="189030131" role="forward"/>
  <member type="way" ref="189067212" role="forward"/>
  <member type="way" ref="189067215" role="forward"/>
  <member type="way" ref="499876894" role="forward"/>
  <member type="way" ref="502730034" role="forward"/>
  <member type="way" ref="189030133" role="forward"/>
  <member type="way" ref="189030139" role="forward"/>
  <member type="way" ref="189030226" role=""/>
  <member type="way" ref="499876891" role="forward"/>
  <member type="way" ref="502769510" role="forward"/>
  <member type="way" ref="502778807" role="forward"/>
  <member type="way" ref="499869892" role="forward"/>
  <member type="way" ref="499869273" role="forward"/>
  <member type="way" ref="427371366" role="forward"/>
  <member type="way" ref="702639064" role="forward"/>
  <member type="way" ref="702639061" role="forward"/>
  <member type="way" ref="86094873" role="forward"/>
  <member type="way" ref="427371367" role="forward"/>
  <member type="way" ref="212340689" role="forward"/>
  <member type="way" ref="427088044" role="forward"/>
  <member type="way" ref="427085023" role="backward"/>
  <member type="way" ref="427085025" role="forward"/>
  <member type="way" ref="427095409" role="forward"/>
  <member type="way" ref="427074269" role="forward"/>
  <member type="way" ref="168913335" role="forward"/>
  <member type="way" ref="168913337" role="forward"/>
  <member type="way" ref="164519866" role="forward"/>
  <member type="way" ref="168913359" role="forward"/>
  <member type="way" ref="496689024" role="forward"/>
  <member type="way" ref="264072471" role="forward"/>
  <member type="way" ref="426660850" role="forward"/>
  <member type="way" ref="425991157" role="forward"/>
  <member type="way" ref="426426979" role="forward"/>
  <member type="way" ref="251558258" role="forward"/>
  <member type="way" ref="251558259" role="forward"/>
  <member type="way" ref="103079945" role="forward"/>
  <member type="way" ref="83077696" role="forward"/>
  <member type="way" ref="273712950" role="forward"/>
  <member type="way" ref="437030673" role="forward"/>
  <member type="way" ref="273714313" role="forward"/>
  <member type="way" ref="553291151" role="backward"/>
  <member type="way" ref="437032359" role="backward"/>
  <member type="way" ref="437030675" role="forward"/>
  <member type="way" ref="498107057" role="forward"/>
  <member type="way" ref="498107055" role="forward"/>
  <member type="way" ref="8009991" role="forward"/>
  <member type="way" ref="88116295" role="forward"/>
  <member type="way" ref="88116088" role="forward"/>
  <member type="way" ref="425573428" role=""/>
  <member type="way" ref="425573420" role="forward"/>
  <member type="way" ref="558365570" role="forward"/>
  <member type="way" ref="558365569" role="forward"/>
  <member type="way" ref="183428194" role="forward"/>
  <member type="way" ref="183428192" role="forward"/>
  <member type="way" ref="425580966" role="forward"/>
  <member type="way" ref="8009993" role="forward"/>
  <member type="way" ref="127071918" role="forward"/>
  <member type="way" ref="554991492" role="forward"/>
  <member type="way" ref="144876086" role="forward"/>
  <member type="way" ref="144876079" role="forward"/>
  <member type="way" ref="504640245" role="forward"/>
  <member type="way" ref="425085787" role="forward"/>
  <member type="way" ref="425085782" role="forward"/>
  <member type="way" ref="213128201" role=""/>
  <member type="way" ref="698253169" role="forward"/>
  <member type="way" ref="39695649" role="forward"/>
  <member type="way" ref="8009994" role="forward"/>
  <member type="way" ref="213127827" role="forward"/>
  <member type="way" ref="213127830" role="forward"/>
  <member type="way" ref="674893149" role="forward"/>
  <member type="way" ref="213194472" role="forward"/>
  <member type="way" ref="336720970" role="forward"/>
  <member type="way" ref="336720974" role="forward"/>
  <member type="way" ref="429773150" role="forward"/>
  <member type="way" ref="39695603" role="forward"/>
  <member type="way" ref="8009998" role="forward"/>
  <member type="way" ref="506740783" role="forward"/>
  <member type="way" ref="506740778" role="forward"/>
  <member type="way" ref="331459275" role="forward"/>
  <member type="way" ref="331459273" role="forward"/>
  <member type="way" ref="331457588" role="forward"/>
  <member type="way" ref="331457589" role="forward"/>
  <member type="way" ref="134364953" role="forward"/>
  <member type="way" ref="134364947" role="forward"/>
  <member type="way" ref="375768026" role="forward"/>
  <member type="way" ref="134374047" role="forward"/>
  <member type="way" ref="134374052" role="forward"/>
  <member type="way" ref="180485536" role="forward"/>
  <member type="way" ref="180485538" role="forward"/>
  <member type="way" ref="71376569" role="forward"/>
  <member type="way" ref="71376577" role="forward"/>
  <member type="way" ref="8010001" role="forward"/>
  <member type="way" ref="178084701" role="forward"/>
  <member type="way" ref="178084755" role="forward"/>
  <member type="way" ref="178084681" role="forward"/>
  <member type="way" ref="178084737" role="forward"/>
  <member type="way" ref="53058219" role="forward"/>
  <member type="way" ref="813552536" role="forward"/>
  <member type="way" ref="813552537" role="forward"/>
  <member type="way" ref="30906756" role="forward"/>
  <member type="way" ref="178084720" role="forward"/>
  <member type="way" ref="178084743" role="forward"/>
  <member type="way" ref="92418905" role="forward"/>
  <member type="way" ref="92418892" role="forward"/>
  <member type="way" ref="92418896" role="forward"/>
  <member type="way" ref="92418912" role="forward"/>
  <member type="way" ref="92419448" role="forward"/>
  <member type="way" ref="92419455" role="forward"/>
  <member type="way" ref="92419421" role="forward"/>
  <member type="way" ref="92419427" role="forward"/>
  <member type="way" ref="92419446" role="forward"/>
  <member type="way" ref="92419431" role="forward"/>
  <member type="way" ref="92419435" role="forward"/>
  <member type="way" ref="92419456" role="forward"/>
  <member type="way" ref="92419422" role="forward"/>
  <member type="way" ref="92419425" role="forward"/>
  <member type="way" ref="92419444" role="forward"/>
  <member type="way" ref="92419429" role="forward"/>
  <member type="way" ref="92419441" role="forward"/>
  <member type="way" ref="92419424" role="forward"/>
  <member type="way" ref="92419428" role="forward"/>
  <member type="way" ref="92419443" role="forward"/>
  <member type="way" ref="92419437" role="forward"/>
  <member type="way" ref="92419433" role="forward"/>
  <member type="way" ref="92419460" role="forward"/>
  <member type="way" ref="92419459" role="forward"/>
  <member type="way" ref="92419432" role="forward"/>
  <member type="way" ref="92419434" role="forward"/>
  <member type="way" ref="92419438" role="forward"/>
  <member type="way" ref="92419442" role="forward"/>
  <member type="way" ref="178084678" role="forward"/>
  <member type="way" ref="178084721" role="forward"/>
  <member type="way" ref="92419420" role="forward"/>
  <member type="way" ref="92419426" role="forward"/>
  <member type="way" ref="92420327" role="forward"/>
  <member type="way" ref="92420334" role="forward"/>
  <member type="way" ref="178084739" role="forward"/>
  <member type="way" ref="178084665" role="forward"/>
  <member type="way" ref="178084676" role="forward"/>
  <member type="way" ref="92420333" role="forward"/>
  <member type="way" ref="92419423" role="forward"/>
  <member type="way" ref="92419436" role="forward"/>
  <member type="way" ref="92420326" role="forward"/>
  <member type="way" ref="178084722" role="forward"/>
  <member type="way" ref="92419430" role="forward"/>
  <member type="way" ref="92419450" role="forward"/>
  <member type="way" ref="178084732" role="forward"/>
  <member type="way" ref="178084703" role="forward"/>
  <member type="way" ref="178084683" role="forward"/>
  <member type="way" ref="178084648" role="forward"/>
  <member type="way" ref="178084663" role="forward"/>
  <member type="way" ref="178084748" role="forward"/>
  <member type="way" ref="178084673" role="forward"/>
  <member type="way" ref="178084744" role="forward"/>
  <member type="way" ref="178084723" role="forward"/>
  <member type="way" ref="178084651" role="forward"/>
  <member type="way" ref="178084727" role="forward"/>
  <member type="way" ref="178084730" role="forward"/>
  <member type="way" ref="178084691" role="forward"/>
  <member type="way" ref="178084759" role="forward"/>
  <member type="way" ref="178084735" role="forward"/>
  <member type="way" ref="178084700" role="forward"/>
  <member type="way" ref="178084687" role="forward"/>
  <member type="way" ref="178084741" role="forward"/>
  <member type="way" ref="178084734" role="forward"/>
  <member type="way" ref="178084667" role="forward"/>
  <member type="way" ref="178084754" role="forward"/>
  <member type="way" ref="676653736" role="forward"/>
  <member type="way" ref="683142040" role="forward"/>
  <member type="way" ref="178084653" role="forward"/>
  <member type="way" ref="157285568" role="forward"/>
  <member type="way" ref="92421921" role="forward"/>
  <member type="way" ref="92421901" role="forward"/>
  <member type="way" ref="708428716" role="forward"/>
  <member type="way" ref="331321831" role=""/>
  <member type="way" ref="39694062" role="forward"/>
  <member type="way" ref="331321367" role="forward"/>
  <member type="way" ref="692948588" role="forward"/>
  <member type="way" ref="698189052" role="forward"/>
  <member type="way" ref="189169526" role="forward"/>
  <member type="way" ref="189169525" role="forward"/>
  <member type="way" ref="676423996" role=""/>
  <member type="way" ref="698241774" role="forward"/>
  <member type="way" ref="27663720" role="forward"/>
  <member type="way" ref="693022957" role="forward"/>
  <member type="way" ref="331321182" role=""/>
  <member type="way" ref="71390693" role="forward"/>
  <member type="way" ref="331320224" role=""/>
  <member type="way" ref="698850177" role="forward"/>
  <member type="way" ref="299675453" role="forward"/>
  <member type="way" ref="299675455" role="forward"/>
  <member type="way" ref="733219470" role="forward"/>
  <member type="way" ref="207157840" role="forward"/>
  <member type="way" ref="711300013" role="forward"/>
  <member type="way" ref="484260886" role=""/>
  <member type="way" ref="207157837" role="forward"/>
  <member type="way" ref="299675457" role="forward"/>
  <member type="way" ref="299675460" role="forward"/>
  <member type="way" ref="306847181" role="forward"/>
  <member type="way" ref="306847182" role="forward"/>
  <member type="way" ref="71390698" role="forward"/>
  <member type="way" ref="209731945" role="backward"/>
  <member type="way" ref="209731939" role="forward"/>
  <member type="way" ref="743313429" role="forward"/>
  <member type="way" ref="743313428" role="forward"/>
  <member type="way" ref="743313424" role="forward"/>
  <member type="way" ref="743313425" role="forward"/>
  <member type="way" ref="331001797" role="forward"/>
  <member type="way" ref="331001794" role="forward"/>
  <member type="way" ref="331001793" role="forward"/>
  <member type="way" ref="209724825" role="backward"/>
  <member type="way" ref="721574216" role="forward"/>
  <member type="way" ref="302890960" role=""/>
  <member type="way" ref="331001790" role="forward"/>
  <member type="way" ref="92466602" role="forward"/>
  <member type="way" ref="706570687" role="forward"/>
  <member type="way" ref="92466614" role="forward"/>
  <member type="way" ref="92466637" role="forward"/>
  <member type="way" ref="92470284" role="forward"/>
  <member type="way" ref="92470288" role="forward"/>
  <member type="way" ref="622318184" role="forward"/>
  <member type="way" ref="622318185" role="forward"/>
  <member type="way" ref="92469159" role="forward"/>
  <member type="way" ref="92469168" role="forward"/>
  <member type="way" ref="312149225" role="forward"/>
  <member type="way" ref="330999577" role="forward"/>
  <member type="way" ref="71390737" role="forward"/>
  <member type="way" ref="108959113" role="forward"/>
  <member type="way" ref="108959109" role="forward"/>
  <member type="way" ref="157284789" role="forward"/>
  <member type="way" ref="157284819" role="forward"/>
  <member type="way" ref="157284791" role="forward"/>
  <member type="way" ref="157284814" role="forward"/>
  <member type="way" ref="92472584" role="forward"/>
  <member type="way" ref="92472561" role="forward"/>
  <member type="way" ref="157284803" role="forward"/>
  <member type="way" ref="157284823" role="forward"/>
  <member type="way" ref="71390739" role="forward"/>
  <member type="way" ref="157284794" role="forward"/>
  <member type="way" ref="230126348" role="forward"/>
  <member type="way" ref="230126349" role="forward"/>
  <member type="way" ref="157284816" role="forward"/>
  <member type="way" ref="157284821" role="forward"/>
  <member type="way" ref="71390726" role="forward"/>
  <member type="way" ref="71390740" role="forward"/>
  <member type="way" ref="496417796" role="forward"/>
  <member type="way" ref="496417795" role="forward"/>
  <member type="way" ref="729345836" role="forward"/>
  <member type="way" ref="330983058" role="forward"/>
  <member type="way" ref="330983062" role="forward"/>
  <member type="way" ref="729345840" role="forward"/>
  <member type="way" ref="778562648" role="forward"/>
  <member type="way" ref="729345853" role="forward"/>
  <member type="way" ref="307110353" role="forward"/>
  <member type="way" ref="307110352" role="forward"/>
  <member type="way" ref="307108221" role="forward"/>
  <member type="way" ref="307108208" role="forward"/>
  <member type="way" ref="307108215" role="forward"/>
  <member type="way" ref="307108211" role="forward"/>
  <member type="way" ref="71390736" role="forward"/>
  <member type="way" ref="71390696" role="forward"/>
  <member type="way" ref="307108229" role="forward"/>
  <member type="way" ref="307108224" role="forward"/>
  <member type="way" ref="71390729" role="forward"/>
  <member type="way" ref="71390720" role="forward"/>
  <member type="way" ref="307108213" role="forward"/>
  <member type="way" ref="307108226" role="forward"/>
  <member type="way" ref="307108214" role="forward"/>
  <member type="way" ref="307108223" role="forward"/>
  <member type="way" ref="307108216" role="forward"/>
  <member type="way" ref="307108225" role="forward"/>
  <member type="way" ref="73812629" role="forward"/>
  <member type="way" ref="73812627" role="forward"/>
  <member type="way" ref="213202983" role="forward"/>
  <member type="way" ref="71390713" role="forward"/>
  <member type="way" ref="73812625" role="forward"/>
  <member type="way" ref="188863664" role="forward"/>
  <member type="way" ref="66069150" role="forward"/>
  <member type="way" ref="586409083" role="forward"/>
  <member type="way" ref="586409087" role="forward"/>
  <member type="way" ref="586409082" role="forward"/>
  <member type="way" ref="586410822" role="forward"/>
  <member type="way" ref="586410819" role="forward"/>
  <member type="way" ref="169835253" role="forward"/>
  <member type="way" ref="689134170" role=""/>
  <member type="way" ref="169835254" role="forward"/>
  <member type="way" ref="689134148" role=""/>
  <member type="way" ref="189030140" role="forward"/>
  <member type="way" ref="189030132" role="forward"/>
  <member type="way" ref="86094903" role="forward"/>
  <member type="way" ref="86094891" role="forward"/>
  <member type="way" ref="189030137" role="forward"/>
  <member type="way" ref="189030136" role="forward"/>
  <member type="way" ref="189067214" role="forward"/>
  <member type="way" ref="189067211" role="forward"/>
  <member type="way" ref="189030138" role="forward"/>
  <member type="way" ref="502730031" role="forward"/>
  <member type="way" ref="502730036" role="forward"/>
  <member type="way" ref="499876893" role="forward"/>
  <member type="way" ref="189030134" role="forward"/>
  <member type="way" ref="499876890" role="forward"/>
  <member type="way" ref="189030226" role=""/>
  <member type="way" ref="502769511" role="forward"/>
  <member type="way" ref="189067216" role="forward"/>
  <member type="way" ref="86094882" role="forward"/>
  <member type="way" ref="702639065" role="forward"/>
  <member type="way" ref="702639066" role="forward"/>
  <member type="way" ref="427371368" role="forward"/>
  <member type="way" ref="427371365" role="forward"/>
  <member type="way" ref="189108057" role="forward"/>
  <member type="way" ref="499869274" role="forward"/>
  <member type="way" ref="499869890" role="forward"/>
  <member type="way" ref="499874446" role="forward"/>
  <member type="way" ref="168913334" role="forward"/>
  <member type="way" ref="168913333" role="forward"/>
  <member type="way" ref="209262721" role="forward"/>
  <member type="way" ref="496689023" role="forward"/>
  <member type="way" ref="427074267" role="forward"/>
  <member type="way" ref="427074265" role="forward"/>
  <member type="way" ref="427080686" role="forward"/>
  <member type="way" ref="427095407" role="forward"/>
  <member type="way" ref="427085024" role="forward"/>
  <member type="way" ref="209262722" role="forward"/>
  <member type="way" ref="426888084" role="forward"/>
  <member type="way" ref="251558234" role="forward"/>
  <member type="way" ref="426670755" role="forward"/>
  <member type="way" ref="103120713" role="forward"/>
  <member type="way" ref="426426978" role="forward"/>
  <member type="way" ref="212406710" role="forward"/>
  <member type="way" ref="426660852" role="forward"/>
  <member type="way" ref="103079947" role="forward"/>
  <member type="way" ref="103079956" role="forward"/>
  <member type="way" ref="273714312" role="forward"/>
  <member type="way" ref="778060472" role="forward"/>
  <member type="way" ref="273712948" role="forward"/>
  <member type="way" ref="437030674" role="forward"/>
  <member type="way" ref="498107054" role="forward"/>
  <member type="way" ref="498107053" role="forward"/>
  <member type="way" ref="88116342" role="forward"/>
  <member type="way" ref="88116151" role="forward"/>
  <member type="way" ref="425573413" role="forward"/>
  <member type="way" ref="558365571" role="forward"/>
  <member type="way" ref="558365568" role="forward"/>
  <member type="way" ref="183428193" role="forward"/>
  <member type="way" ref="183428195" role="forward"/>
  <member type="way" ref="425580967" role="forward"/>
  <member type="way" ref="425580969" role="forward"/>
  <member type="way" ref="144876088" role="forward"/>
  <member type="way" ref="554991490" role="forward"/>
  <member type="way" ref="144876082" role="forward"/>
  <member type="way" ref="504640244" role="forward"/>
  <member type="way" ref="337604564" role="forward"/>
  <member type="way" ref="698253170" role="forward"/>
  <member type="way" ref="213128201" role=""/>
  <member type="way" ref="71376581" role="forward"/>
  <member type="way" ref="425085766" role="forward"/>
  <member type="way" ref="71376573" role="forward"/>
  <member type="way" ref="213127836" role="forward"/>
  <member type="way" ref="213127823" role="forward"/>
  <member type="way" ref="674893148" role="forward"/>
  <member type="way" ref="213194474" role="forward"/>
  <member type="way" ref="336720975" role="forward"/>
  <member type="way" ref="336720971" role="forward"/>
  <member type="way" ref="525733691" role="forward"/>
  <member type="way" ref="71376580" role="forward"/>
  <member type="way" ref="420600997" role="forward"/>
  <member type="way" ref="195746495" role="forward"/>
  <member type="way" ref="506740781" role="forward"/>
  <member type="way" ref="331462147" role="forward"/>
  <member type="way" ref="331459274" role="forward"/>
  <member type="way" ref="331459272" role="forward"/>
  <member type="way" ref="71376570" role="forward"/>
  <member type="way" ref="331457587" role="forward"/>
  <member type="way" ref="331457586" role="forward"/>
  <member type="way" ref="134364943" role="forward"/>
  <member type="way" ref="134364951" role="forward"/>
  <member type="way" ref="375759338" role="forward"/>
  <member type="way" ref="134374051" role="forward"/>
  <member type="way" ref="134374049" role="forward"/>
  <member type="way" ref="180485539" role="forward"/>
  <member type="way" ref="180485537" role="forward"/>
  <member type="way" ref="71376571" role="forward"/>
  <member type="way" ref="71376574" role="forward"/>
  <member type="way" ref="180485535" role="forward"/>
  <member type="way" ref="178084706" role="forward"/>
  <member type="way" ref="178084682" role="forward"/>
  <member type="way" ref="178084758" role="forward"/>
  <member type="way" ref="178084674" role="forward"/>
  <member type="way" ref="53058223" role="forward"/>
  <member type="way" ref="813552539" role="forward"/>
  <member type="way" ref="813552538" role="forward"/>
  <member type="way" ref="178084650" role="forward"/>
  <member type="way" ref="178084644" role="forward"/>
  <member type="way" ref="178084728" role="forward"/>
  <member type="way" ref="178084750" role="forward"/>
  <member type="way" ref="178084679" role="forward"/>
  <member type="way" ref="178084675" role="forward"/>
  <member type="way" ref="178084694" role="forward"/>
  <member type="way" ref="178084646" role="forward"/>
  <member type="way" ref="178084656" role="forward"/>
  <member type="way" ref="178084752" role="forward"/>
  <member type="way" ref="178084664" role="forward"/>
  <member type="way" ref="178084685" role="forward"/>
  <member type="way" ref="178084716" role="forward"/>
  <member type="way" ref="178084670" role="forward"/>
  <member type="way" ref="178084680" role="forward"/>
  <member type="way" ref="178084724" role="forward"/>
  <member type="way" ref="178084686" role="forward"/>
  <member type="way" ref="178084707" role="forward"/>
  <member type="way" ref="178084717" role="forward"/>
  <member type="way" ref="178084715" role="forward"/>
  <member type="way" ref="178084713" role="forward"/>
  <member type="way" ref="178084711" role="forward"/>
  <member type="way" ref="178084719" role="forward"/>
  <member type="way" ref="178084757" role="forward"/>
  <member type="way" ref="178084690" role="forward"/>
  <member type="way" ref="178084684" role="forward"/>
  <member type="way" ref="178084692" role="forward"/>
  <member type="way" ref="178084659" role="forward"/>
  <member type="way" ref="178084657" role="forward"/>
  <member type="way" ref="178084749" role="forward"/>
  <member type="way" ref="178084733" role="forward"/>
  <member type="way" ref="178084699" role="forward"/>
  <member type="way" ref="178084689" role="forward"/>
  <member type="way" ref="178084709" role="forward"/>
  <member type="way" ref="178084698" role="forward"/>
  <member type="way" ref="178084666" role="forward"/>
  <member type="way" ref="178084702" role="forward"/>
  <member type="way" ref="178084672" role="forward"/>
  <member type="way" ref="178084660" role="forward"/>
  <member type="way" ref="178084655" role="forward"/>
  <member type="way" ref="178084718" role="forward"/>
  <member type="way" ref="178084654" role="forward"/>
  <member type="way" ref="178084710" role="forward"/>
  <member type="way" ref="178084714" role="forward"/>
  <member type="way" ref="178084725" role="forward"/>
  <member type="way" ref="178084726" role="forward"/>
  <member type="way" ref="178084688" role="forward"/>
  <member type="way" ref="178084649" role="forward"/>
  <member type="way" ref="178084731" role="forward"/>
  <member type="way" ref="178084677" role="forward"/>
  <member type="way" ref="178084668" role="forward"/>
  <member type="way" ref="178084647" role="forward"/>
  <member type="way" ref="178084697" role="forward"/>
  <member type="way" ref="178084747" role="forward"/>
  <member type="way" ref="178084658" role="forward"/>
  <member type="way" ref="178084745" role="forward"/>
  <member type="way" ref="178084708" role="forward"/>
  <member type="way" ref="178084652" role="forward"/>
  <member type="way" ref="178084712" role="forward"/>
  <member type="way" ref="178084740" role="forward"/>
  <member type="way" ref="178084693" role="forward"/>
  <member type="way" ref="178084645" role="forward"/>
  <member type="way" ref="178084736" role="forward"/>
  <member type="way" ref="178084671" role="forward"/>
  <member type="way" ref="178084705" role="forward"/>
  <member type="way" ref="178084746" role="forward"/>
  <member type="way" ref="178084729" role="forward"/>
  <member type="way" ref="178084704" role="forward"/>
  <member type="way" ref="178084753" role="forward"/>
  <member type="way" ref="178084695" role="forward"/>
  <member type="way" ref="92421908" role="forward"/>
  <member type="way" ref="676653734" role="forward"/>
  <member type="way" ref="92421900" role="forward"/>
  <member type="way" ref="698189051" role="forward"/>
  <member type="way" ref="512899949" role=""/>
  <member type="way" ref="189169528" role="forward"/>
  <member type="way" ref="331321366" role="forward"/>
  <member type="way" ref="331321368" role="forward"/>
  <member type="way" ref="331321831" role="forward"/>
  <member type="way" ref="708428717" role="forward"/>
  <member type="way" ref="189169527" role="forward"/>
  <member type="way" ref="698241775" role="forward"/>
  <member type="way" ref="676423996" role=""/>
  <member type="way" ref="71054868" role="forward"/>
  <member type="way" ref="71054893" role="forward"/>
  <member type="way" ref="551975695" role="forward"/>
  <member type="way" ref="733219471" role="forward"/>
  <member type="way" ref="299675454" role="forward"/>
  <member type="way" ref="693022958" role="forward"/>
  <member type="way" ref="331320224" role=""/>
  <member type="way" ref="698850178" role="forward"/>
  <member type="way" ref="331321182" role=""/>
  <member type="way" ref="299675458" role="forward"/>
  <member type="way" ref="299675459" role="forward"/>
  <member type="way" ref="484260886" role=""/>
  <member type="way" ref="711300014" role="forward"/>
  <member type="way" ref="299675456" role="forward"/>
  <member type="way" ref="71054895" role="forward"/>
  <member type="way" ref="306847183" role="forward"/>
  <member type="way" ref="306847184" role="forward"/>
  <member type="way" ref="71054885" role="forward"/>
  <member type="way" ref="209724828" role="backward"/>
  <member type="way" ref="92466518" role="forward"/>
  <member type="way" ref="302890960" role=""/>
  <member type="way" ref="721574217" role="forward"/>
  <member type="way" ref="331001789" role="forward"/>
  <member type="way" ref="331001792" role="forward"/>
  <member type="way" ref="331001791" role="forward"/>
  <member type="way" ref="743313427" role="forward"/>
  <member type="way" ref="743313426" role="forward"/>
  <member type="way" ref="743313431" role="forward"/>
  <member type="way" ref="743313430" role="forward"/>
  <member type="way" ref="706570688" role="forward"/>
  <member type="way" ref="92466615" role="forward"/>
  <member type="way" ref="92466636" role="forward"/>
  <member type="way" ref="92470291" role="forward"/>
  <member type="way" ref="92470283" role="forward"/>
  <member type="way" ref="622318183" role="forward"/>
  <member type="way" ref="622318182" role="forward"/>
  <member type="way" ref="92469172" role="forward"/>
  <member type="way" ref="92469165" role="forward"/>
  <member type="way" ref="71390700" role="forward"/>
  <member type="way" ref="108959116" role="forward"/>
  <member type="way" ref="108959112" role="forward"/>
  <member type="way" ref="157284810" role="forward"/>
  <member type="way" ref="157284800" role="forward"/>
  <member type="way" ref="157284820" role="forward"/>
  <member type="way" ref="157284818" role="forward"/>
  <member type="way" ref="92472566" role="forward"/>
  <member type="way" ref="92472559" role="forward"/>
  <member type="way" ref="157284793" role="forward"/>
  <member type="way" ref="157284806" role="forward"/>
  <member type="way" ref="71054858" role="forward"/>
  <member type="way" ref="71054881" role="forward"/>
  <member type="way" ref="230126350" role="forward"/>
  <member type="way" ref="230126347" role="forward"/>
  <member type="way" ref="157284824" role="forward"/>
  <member type="way" ref="157284808" role="forward"/>
  <member type="way" ref="71054905" role="forward"/>
  <member type="way" ref="71054890" role="forward"/>
  <member type="way" ref="496417798" role="forward"/>
  <member type="way" ref="496417797" role="forward"/>
  <member type="way" ref="729345839" role="forward"/>
  <member type="way" ref="307110358" role="forward"/>
  <member type="way" ref="307110355" role="forward"/>
  <member type="way" ref="71054882" role="forward"/>
  <member type="way" ref="330977913" role="forward"/>
  <member type="way" ref="307108218" role="forward"/>
  <member type="way" ref="307108209" role="forward"/>
  <member type="way" ref="307108220" role="forward"/>
  <member type="way" ref="307108230" role="forward"/>
  <member type="way" ref="71054877" role="forward"/>
  <member type="way" ref="307108231" role="forward"/>
  <member type="way" ref="307108227" role="forward"/>
  <member type="way" ref="71054880" role="forward"/>
  <member type="way" ref="71054908" role="forward"/>
  <member type="way" ref="307108210" role="forward"/>
  <member type="way" ref="307108217" role="forward"/>
  <member type="way" ref="307108228" role="forward"/>
  <member type="way" ref="307108212" role="forward"/>
  <member type="way" ref="307108222" role="forward"/>
  <member type="way" ref="307108219" role="forward"/>
  <member type="way" ref="157249981" role="forward"/>
  <member type="way" ref="157249990" role="forward"/>
  <member type="way" ref="157249965" role="forward"/>
  <member type="way" ref="157249997" role="forward"/>
  <member type="way" ref="157249960" role="forward"/>
  <member type="way" ref="213202974" role="forward"/>
  <member type="way" ref="213202980" role="forward"/>
  <member type="way" ref="213202975" role="forward"/>
  <member type="way" ref="213202977" role="forward"/>
  <member type="way" ref="213202985" role="forward"/>
  <member type="way" ref="213202981" role="forward"/>
  <member type="way" ref="157249969" role="forward"/>
  <member type="way" ref="157249939" role=""/>
  <member type="way" ref="213202982" role=""/>
  <member type="way" ref="213202973" role=""/>
  <member type="way" ref="213202979" role=""/>
  <member type="way" ref="213202984" role=""/>
  <member type="way" ref="213202978" role=""/>
  <member type="way" ref="213202976" role=""/>
  <member type="way" ref="189260085" role="forward"/>
  <member type="way" ref="189260078" role="forward"/>
  <member type="way" ref="189260083" role="forward"/>
  <member type="way" ref="189260081" role="forward"/>
  <member type="way" ref="189260074" role="forward"/>
  <member type="way" ref="189260076" role="forward"/>
  <member type="way" ref="71390722" role="forward"/>
  <member type="way" ref="189260052" role="forward"/>
  <member type="way" ref="189260053" role="forward"/>
  <member type="way" ref="259550824" role="forward"/>
  <member type="way" ref="259550826" role="forward"/>
  <member type="way" ref="407756136" role="forward"/>
  <member type="way" ref="189264633" role="forward"/>
  <member type="way" ref="189264630" role="forward"/>
  <member type="way" ref="189264635" role="forward"/>
  <member type="way" ref="189264636" role="forward"/>
  <member type="way" ref="189260086" role="forward"/>
  <member type="way" ref="189260079" role="forward"/>
  <member type="way" ref="189260084" role="forward"/>
  <member type="way" ref="189260082" role="forward"/>
  <member type="way" ref="189260073" role="forward"/>
  <member type="way" ref="189260077" role="forward"/>
  <member type="way" ref="189260080" role="forward"/>
  <member type="way" ref="189260075" role="forward"/>
  <member type="way" ref="189264637" role="forward"/>
  <member type="way" ref="259550823" role="forward"/>
  <member type="way" ref="259550825" role="forward"/>
  <member type="way" ref="189264632" role="forward"/>
  <member type="way" ref="189264631" role="forward"/>
  <member type="way" ref="189264634" role="forward"/>
  <member type="way" ref="307180450" role=""/>
  <member type="way" ref="307180456" role=""/>
  <member type="way" ref="307180451" role=""/>
  <member type="way" ref="307180449" role=""/>
  <member type="way" ref="307180452" role=""/>
  <member type="way" ref="307180457" role=""/>
  <member type="way" ref="307180453" role=""/>
  <member type="way" ref="307180458" role=""/>
  <member type="way" ref="307180454" role=""/>
  <member type="way" ref="131708482" role=""/>
  <member type="way" ref="307180464" role=""/>
  <member type="way" ref="307180467" role=""/>
  <member type="way" ref="230112817" role=""/>
  <member type="way" ref="230112820" role=""/>
  <member type="way" ref="230105473" role=""/>
  <member type="way" ref="230105477" role=""/>
  <member type="way" ref="230105472" role=""/>
  <member type="way" ref="230105484" role=""/>
  <member type="way" ref="230105466" role=""/>
  <member type="way" ref="230105485" role=""/>
  <member type="way" ref="230105474" role=""/>
  <member type="way" ref="230105480" role=""/>
  <member type="way" ref="230105469" role=""/>
  <member type="way" ref="230105481" role=""/>
  <member type="way" ref="758108591" role=""/>
  <member type="way" ref="230106358" role=""/>
  <member type="way" ref="230106359" role=""/>
  <member type="way" ref="230106376" role=""/>
  <member type="way" ref="704810817" role=""/>
  <member type="way" ref="230106362" role=""/>
  <member type="way" ref="230106363" role=""/>
  <member type="way" ref="230106738" role=""/>
  <member type="way" ref="706574527" role=""/>
  <member type="way" ref="230106741" role=""/>
  <member type="way" ref="230106732" role=""/>
  <member type="way" ref="230106728" role=""/>
  <member type="way" ref="230098707" role=""/>
  <member type="way" ref="230098704" role=""/>
  <member type="way" ref="191439775" role=""/>
  <member type="way" ref="732086880" role=""/>
  <member type="way" ref="732086881" role=""/>
  <member type="way" ref="760458992" role=""/>
  <member type="way" ref="760458993" role=""/>
  <member type="way" ref="191439774" role=""/>
  <member type="way" ref="157076032" role="forward"/>
  <member type="way" ref="230098705" role="forward"/>
  <member type="way" ref="230098706" role="forward"/>
  <member type="way" ref="760458991" role="forward"/>
  <member type="way" ref="760458990" role="forward"/>
  <member type="way" ref="732086878" role="forward"/>
  <member type="way" ref="732086879" role="forward"/>
  <member type="way" ref="230098703" role="forward"/>
  <member type="way" ref="230098702" role="forward"/>
  <member type="way" ref="475706054" role=""/>
  <member type="way" ref="488526748" role="forward"/>
  <member type="way" ref="488526745" role="forward"/>
  <member type="way" ref="488526745" role="forward"/>
  <member type="way" ref="696330933" role="forward"/>
  <member type="way" ref="157249971" role="forward"/>
  <member type="way" ref="480696846" role="forward"/>
  <member type="way" ref="480696842" role="forward"/>
  <member type="way" ref="475706034" role="forward"/>
  <member type="way" ref="475706032" role="forward"/>
  <member type="way" ref="464298038" role="forward"/>
  <member type="way" ref="464298043" role="forward"/>
  <member type="way" ref="741312392" role="forward"/>
  <member type="way" ref="741312393" role="forward"/>
  <member type="way" ref="741312394" role="forward"/>
  <member type="way" ref="132926609" role="forward"/>
  <member type="way" ref="132926602" role="forward"/>
  <member type="way" ref="209415771" role=""/>
  <member type="way" ref="740711068" role=""/>
  <member type="way" ref="500296605" role="forward"/>
  <member type="way" ref="508036231" role="forward"/>
  <member type="way" ref="132926604" role="forward"/>
  <member type="way" ref="132926607" role="forward"/>
  <member type="way" ref="132926612" role="forward"/>
  <member type="way" ref="760793639" role="forward"/>
  <member type="way" ref="132926605" role="forward"/>
  <member type="way" ref="132928015" role="forward"/>
  <member type="way" ref="132928019" role="forward"/>
  <member type="way" ref="132928017" role="forward"/>
  <member type="way" ref="132928021" role="forward"/>
  <member type="way" ref="164534441" role="forward"/>
  <member type="way" ref="132928013" role="forward"/>
  <member type="way" ref="135667543" role="forward"/>
  <member type="way" ref="48068818" role="forward"/>
  <member type="way" ref="466240624" role="forward"/>
  <member type="way" ref="499395220" role="forward"/>
  <member type="way" ref="499395219" role="forward"/>
  <member type="way" ref="715062001" role="forward"/>
  <member type="way" ref="713317495" role="forward"/>
  <member type="way" ref="713317496" role="forward"/>
  <member type="way" ref="713317493" role="forward"/>
  <member type="way" ref="484987700" role="forward"/>
  <member type="way" ref="484987699" role="forward"/>
  <member type="way" ref="307250967" role="forward"/>
  <member type="way" ref="307250972" role="forward"/>
  <member type="way" ref="307250970" role="forward"/>
  <member type="way" ref="307250966" role="forward"/>
  <member type="way" ref="53011531" role="forward"/>
  <member type="way" ref="347315551" role="forward"/>
  <member type="way" ref="424820271" role="forward"/>
  <member type="way" ref="424820273" role="forward"/>
  <member type="way" ref="347315552" role="forward"/>
  <member type="way" ref="569916830" role="forward"/>
  <member type="way" ref="569916829" role="forward"/>
  <member type="way" ref="135783639" role="forward"/>
  <member type="way" ref="465623280" role="forward"/>
  <member type="way" ref="135783633" role="forward"/>
  <member type="way" ref="135783662" role="forward"/>
  <member type="way" ref="135783669" role="forward"/>
  <member type="way" ref="135783637" role="forward"/>
  <member type="way" ref="230728234" role="forward"/>
  <member type="way" ref="230728233" role="forward"/>
  <member type="way" ref="135783643" role="forward"/>
  <member type="way" ref="135783634" role="forward"/>
  <member type="way" ref="135783644" role="forward"/>
  <member type="way" ref="135783649" role="forward"/>
  <member type="way" ref="135783666" role="forward"/>
  <member type="way" ref="135783664" role="forward"/>
  <member type="way" ref="135783638" role="forward"/>
  <member type="way" ref="135783632" role="forward"/>
  <member type="way" ref="250462779" role="forward"/>
  <member type="way" ref="628376974" role="forward"/>
  <member type="way" ref="628376973" role="forward"/>
  <member type="way" ref="465519836" role="forward"/>
  <member type="way" ref="465519838" role="forward"/>
  <member type="way" ref="220046414" role="forward"/>
  <member type="way" ref="220046415" role="forward"/>
  <member type="way" ref="426106856" role=""/>
  <member type="way" ref="559780808" role="forward"/>
  <member type="way" ref="114389811" role="forward"/>
  <member type="way" ref="114389815" role="forward"/>
  <member type="way" ref="114389804" role="forward"/>
  <member type="way" ref="114389808" role="forward"/>
  <member type="way" ref="114389803" role="forward"/>
  <member type="way" ref="114389805" role="forward"/>
  <member type="way" ref="114389810" role="forward"/>
  <member type="way" ref="114389809" role="forward"/>
  <member type="way" ref="114389812" role="forward"/>
  <member type="way" ref="114389816" role="forward"/>
  <member type="way" ref="114389818" role="forward"/>
  <member type="way" ref="114389592" role="forward"/>
  <member type="way" ref="114389576" role="forward"/>
  <member type="way" ref="114389594" role="forward"/>
  <member type="way" ref="114389593" role="forward"/>
  <member type="way" ref="220069826" role="forward"/>
  <member type="way" ref="559780810" role="forward"/>
  <member type="way" ref="559780809" role="forward"/>
  <member type="way" ref="559780812" role="forward"/>
  <member type="way" ref="559780811" role="forward"/>
  <member type="way" ref="832505575" role="forward"/>
  <member type="way" ref="746446840" role="forward"/>
  <member type="way" ref="746446841" role="forward"/>
  <member type="way" ref="746446842" role="forward"/>
  <member type="way" ref="277267719" role="forward"/>
  <member type="way" ref="277267720" role="forward"/>
  <member type="way" ref="186495988" role="forward"/>
  <member type="way" ref="186495990" role="forward"/>
  <member type="way" ref="96589960" role="forward"/>
  <member type="way" ref="96589858" role="forward"/>
  <member type="way" ref="96589913" role="forward"/>
  <member type="way" ref="367784454" role="forward"/>
  <member type="way" ref="367784457" role="forward"/>
  <member type="way" ref="96589859" role="forward"/>
  <member type="way" ref="96589918" role="forward"/>
  <member type="way" ref="231787744" role="forward"/>
  <member type="way" ref="96589906" role="forward"/>
  <member type="way" ref="96589951" role="forward"/>
  <member type="way" ref="231787740" role="forward"/>
  <member type="way" ref="96589854" role="forward"/>
  <member type="way" ref="96589962" role="forward"/>
  <member type="way" ref="220888357" role="forward"/>
  <member type="way" ref="326148261" role="forward"/>
  <member type="way" ref="326148260" role="forward"/>
  <member type="way" ref="231787743" role="forward"/>
  <member type="way" ref="274356315" role="forward"/>
  <member type="way" ref="274356309" role="forward"/>
  <member type="way" ref="220888345" role="forward"/>
  <member type="way" ref="220888356" role="forward"/>
  <member type="way" ref="231787741" role="forward"/>
  <member type="way" ref="277265534" role="forward"/>
  <member type="way" ref="277265536" role="forward"/>
  <member type="way" ref="73827532" role="forward"/>
  <member type="way" ref="96589910" role="forward"/>
  <member type="way" ref="96589924" role="forward"/>
  <member type="way" ref="367784448" role="forward"/>
  <member type="way" ref="367784456" role="forward"/>
  <member type="way" ref="96589903" role="forward"/>
  <member type="way" ref="96589936" role="forward"/>
  <member type="way" ref="231787739" role="forward"/>
  <member type="way" ref="73823399" role="forward"/>
  <member type="way" ref="73823393" role="forward"/>
  <member type="way" ref="231787745" role="forward"/>
  <member type="way" ref="96589920" role="forward"/>
  <member type="way" ref="96589959" role="forward"/>
  <member type="way" ref="96589882" role="forward"/>
  <member type="way" ref="74294929" role=""/>
  <member type="way" ref="74294932" role=""/>
  <member type="way" ref="326148258" role=""/>
  <member type="way" ref="326148259" role=""/>
  <member type="way" ref="231787742" role=""/>
  <member type="way" ref="274356318" role=""/>
  <member type="way" ref="274356312" role=""/>
  <member type="way" ref="73823396" role=""/>
  <member type="way" ref="73823397" role=""/>
  <member type="way" ref="231787738" role=""/>
  <member type="way" ref="74294911" role=""/>
  <member type="way" ref="277265533" role=""/>
  <member type="way" ref="277265535" role=""/>
  <member type="way" ref="220888352" role=""/>
  <member type="way" ref="59740756" role=""/>
  <member type="way" ref="276589929" role="forward"/>
  <member type="way" ref="539435678" role=""/>
  <member type="way" ref="539435680" role=""/>
  <member type="way" ref="28511584" role=""/>
  <member type="way" ref="539435681" role=""/>
  <member type="way" ref="539435679" role=""/>
  <member type="way" ref="28511586" role=""/>
  <member type="way" ref="157111162" role=""/>
  <member type="way" ref="276589917" role=""/>
  <member type="way" ref="276589925" role=""/>
  <member type="way" ref="276589919" role=""/>
  <member type="way" ref="276589928" role=""/>
  <member type="way" ref="276589920" role=""/>
  <member type="way" ref="276589921" role=""/>
  <member type="way" ref="613513036" role=""/>
  <member type="way" ref="573711696" role=""/>
  <member type="way" ref="573711696" role=""/>
  <member type="way" ref="702642883" role="forward"/>
  <member type="way" ref="276589916" role="forward"/>
  <member type="way" ref="276589927" role="forward"/>
  <member type="way" ref="613513037" role="forward"/>
  <member type="way" ref="276589915" role="forward"/>
  <member type="way" ref="276589923" role="forward"/>
  <member type="way" ref="702642884" role=""/>
  <member type="way" ref="613513029" role=""/>
  <member type="way" ref="613513032" role=""/>
  <member type="way" ref="717912759" role=""/>
  <member type="way" ref="220888334" role=""/>
  <member type="way" ref="220888348" role=""/>
  <member type="way" ref="573711691" role=""/>
  <member type="way" ref="573711692" role=""/>
  <member type="way" ref="220888341" role=""/>
  <member type="way" ref="390305641" role=""/>
  <member type="way" ref="390305642" role=""/>
  <member type="way" ref="220888340" role=""/>
  <member type="way" ref="191468570" role="forward"/>
  <member type="way" ref="191468568" role="forward"/>
  <member type="way" ref="191468571" role="forward"/>
  <member type="way" ref="220888324" role="forward"/>
  <member type="way" ref="220888329" role="forward"/>
  <member type="way" ref="220888323" role="forward"/>
  <member type="way" ref="220888326" role="forward"/>
  <member type="way" ref="195746404" role="forward"/>
  <member type="way" ref="220888346" role="forward"/>
  <member type="way" ref="195746374" role="forward"/>
  <member type="way" ref="220888322" role="forward"/>
  <member type="way" ref="220888328" role="forward"/>
  <member type="way" ref="220888318" role="forward"/>
  <member type="way" ref="220069823" role="forward"/>
  <member type="way" ref="220069824" role="forward"/>
  <member type="way" ref="610589771" role="forward"/>
  <member type="way" ref="610589770" role="forward"/>
  <member type="way" ref="191468569" role="forward"/>
  <member type="way" ref="191468575" role="forward"/>
  <member type="way" ref="220888330" role="forward"/>
  <member type="way" ref="220888331" role="forward"/>
  <member type="way" ref="613459406" role="forward"/>
  <member type="way" ref="614004460" role="forward"/>
  <member type="way" ref="614004458" role="forward"/>
  <member type="way" ref="613459411" role="forward"/>
  <member type="way" ref="614004454" role="forward"/>
  <member type="way" ref="614004453" role="forward"/>
  <member type="way" ref="220959798" role="forward"/>
  <member type="way" ref="220959799" role="forward"/>
  <member type="way" ref="220888327" role="forward"/>
  <member type="way" ref="220888320" role="forward"/>
  <member type="way" ref="220888321" role="forward"/>
  <member type="way" ref="220888325" role="forward"/>
  <member type="way" ref="191453126" role="forward"/>
  <member type="way" ref="191453125" role="forward"/>
  <member type="way" ref="191446758" role="forward"/>
  <member type="way" ref="191446756" role="forward"/>
  <member type="way" ref="191446759" role="forward"/>
  <member type="way" ref="191446757" role="forward"/>
  <member type="way" ref="157111155" role="forward"/>
  <member type="way" ref="59777955" role="forward"/>
  <member type="way" ref="220285665" role="forward"/>
  <member type="way" ref="220285664" role="forward"/>
  <member type="way" ref="195746365" role="forward"/>
  <member type="way" ref="195746370" role="forward"/>
  <member type="way" ref="177783562" role="forward"/>
  <member type="way" ref="177783564" role="forward"/>
  <member type="way" ref="177783568" role="forward"/>
  <member type="way" ref="177783563" role="forward"/>
  <member type="way" ref="177783559" role="forward"/>
  <member type="way" ref="177783558" role="forward"/>
  <member type="way" ref="53015766" role="forward"/>
  <member type="way" ref="755509996" role="forward"/>
  <member type="way" ref="82283296" role="forward"/>
  <member type="way" ref="82283298" role="forward"/>
  <member type="way" ref="288798453" role="forward"/>
  <member type="way" ref="288798451" role="forward"/>
  <member type="way" ref="248475427" role="forward"/>
  <member type="way" ref="248475428" role="forward"/>
  <member type="way" ref="152592555" role="forward"/>
  <member type="way" ref="152592556" role="forward"/>
  <member type="way" ref="152592552" role="forward"/>
  <member type="way" ref="152592554" role="forward"/>
  <member type="way" ref="613513031" role="forward"/>
  <member type="way" ref="276589937" role="forward"/>
  <member type="way" ref="613513042" role="forward"/>
  <member type="way" ref="276589918" role="forward"/>
  <member type="way" ref="220285667" role="forward"/>
  <member type="way" ref="71376575" role="forward"/>
  <member type="way" ref="157111158" role="forward"/>
  <member type="way" ref="191446762" role="forward"/>
  <member type="way" ref="191446764" role="forward"/>
  <member type="way" ref="191446763" role="forward"/>
  <member type="way" ref="191446760" role="forward"/>
  <member type="way" ref="191453129" role="forward"/>
  <member type="way" ref="191453128" role="forward"/>
  <member type="way" ref="220888344" role="forward"/>
  <member type="way" ref="220888337" role="forward"/>
  <member type="way" ref="220888351" role="forward"/>
  <member type="way" ref="220888355" role="forward"/>
  <member type="way" ref="220959800" role="forward"/>
  <member type="way" ref="220959801" role="forward"/>
  <member type="way" ref="614004452" role="forward"/>
  <member type="way" ref="614004451" role="forward"/>
  <member type="way" ref="613459413" role="forward"/>
  <member type="way" ref="613459416" role="forward"/>
  <member type="way" ref="614004457" role="forward"/>
  <member type="way" ref="614004456" role="forward"/>
  <member type="way" ref="613459421" role="forward"/>
  <member type="way" ref="613459420" role="forward"/>
  <member type="way" ref="613513025" role="forward"/>
  <member type="way" ref="220888354" role="forward"/>
  <member type="way" ref="220888332" role="forward"/>
  <member type="way" ref="191468578" role="forward"/>
  <member type="way" ref="191468577" role="forward"/>
  <member type="way" ref="610589769" role="forward"/>
  <member type="way" ref="220069825" role="forward"/>
  <member type="way" ref="220069827" role="forward"/>
  <member type="way" ref="220888333" role="forward"/>
  <member type="way" ref="220888353" role="forward"/>
  <member type="way" ref="195746400" role="forward"/>
  <member type="way" ref="220888347" role="forward"/>
  <member type="way" ref="195746396" role="forward"/>
  <member type="way" ref="191468580" role="forward"/>
  <member type="way" ref="191468576" role="forward"/>
  <member type="way" ref="220888338" role="forward"/>
  <member type="way" ref="220888335" role="forward"/>
  <member type="way" ref="191468579" role="forward"/>
  <member type="way" ref="191468581" role="forward"/>
  <member type="way" ref="191468582" role="forward"/>
  <member type="way" ref="220888342" role="forward"/>
  <member type="way" ref="390305639" role="forward"/>
  <member type="way" ref="390305640" role="forward"/>
  <member type="way" ref="220888349" role="forward"/>
  <member type="way" ref="573711693" role="forward"/>
  <member type="way" ref="573711694" role="forward"/>
  <member type="way" ref="220888343" role="forward"/>
  <member type="way" ref="220888339" role="forward"/>
  <member type="way" ref="220888350" role="forward"/>
  <member type="way" ref="613513030" role="forward"/>
  <member type="way" ref="613513032" role="forward"/>
  <member type="way" ref="613513026" role="forward"/>
  <member type="way" ref="220285666" role="forward"/>
  <member type="way" ref="195746367" role="forward"/>
  <member type="way" ref="195746363" role="forward"/>
  <member type="way" ref="177783571" role="forward"/>
  <member type="way" ref="177783569" role="forward"/>
  <member type="way" ref="177783560" role="forward"/>
  <member type="way" ref="177783565" role="forward"/>
  <member type="way" ref="177783566" role="forward"/>
  <member type="way" ref="177783561" role="forward"/>
  <member type="way" ref="177783567" role="forward"/>
  <member type="way" ref="82283290" role="forward"/>
  <member type="way" ref="755509994" role="forward"/>
  <member type="way" ref="82283288" role="forward"/>
  <member type="way" ref="152592553" role="forward"/>
  <member type="way" ref="248475430" role="forward"/>
  <member type="way" ref="248475429" role="forward"/>
  <member type="way" ref="288798452" role="forward"/>
  <member type="way" ref="288798450" role="forward"/>
  <member type="way" ref="152592558" role="forward"/>
  <member type="way" ref="53015767" role="forward"/>
  <member type="way" ref="152592551" role="forward"/>
  <member type="way" ref="152592559" role="forward"/>
  <member type="way" ref="152592560" role="forward"/>
  <member type="way" ref="48068815" role="forward"/>
  <member type="way" ref="465519837" role="forward"/>
  <member type="way" ref="465519835" role="forward"/>
  <member type="way" ref="628376977" role="forward"/>
  <member type="way" ref="628376975" role="forward"/>
  <member type="way" ref="135783641" role="forward"/>
  <member type="way" ref="135783661" role="forward"/>
  <member type="way" ref="135783665" role="forward"/>
  <member type="way" ref="135783647" role="forward"/>
  <member type="way" ref="135783663" role="forward"/>
  <member type="way" ref="135783636" role="forward"/>
  <member type="way" ref="135783640" role="forward"/>
  <member type="way" ref="135783645" role="forward"/>
  <member type="way" ref="230728235" role="forward"/>
  <member type="way" ref="230728236" role="forward"/>
  <member type="way" ref="48068819" role="forward"/>
  <member type="way" ref="135783631" role="forward"/>
  <member type="way" ref="135783642" role="forward"/>
  <member type="way" ref="135783635" role="forward"/>
  <member type="way" ref="135783667" role="forward"/>
  <member type="way" ref="465623282" role="forward"/>
  <member type="way" ref="465623281" role="forward"/>
  <member type="way" ref="569916831" role="forward"/>
  <member type="way" ref="569916832" role="forward"/>
  <member type="way" ref="424820274" role="forward"/>
  <member type="way" ref="424820272" role="forward"/>
  <member type="way" ref="53011528" role="forward"/>
  <member type="way" ref="347315550" role="forward"/>
  <member type="way" ref="347315553" role="forward"/>
  <member type="way" ref="48068817" role="forward"/>
  <member type="way" ref="307250969" role="forward"/>
  <member type="way" ref="307250971" role="forward"/>
  <member type="way" ref="307250968" role="forward"/>
  <member type="way" ref="307250965" role="forward"/>
  <member type="way" ref="484987703" role="forward"/>
  <member type="way" ref="484987701" role="forward"/>
  <member type="way" ref="715062000" role="forward"/>
  <member type="way" ref="713317498" role="forward"/>
  <member type="way" ref="713317497" role="forward"/>
  <member type="way" ref="715062002" role="forward"/>
  <member type="way" ref="471117128" role="forward"/>
  <member type="way" ref="499395218" role="forward"/>
  <member type="way" ref="499395217" role="forward"/>
  <member type="way" ref="466240637" role="forward"/>
  <member type="way" ref="135667544" role="forward"/>
  <member type="way" ref="132926608" role="forward"/>
  <member type="way" ref="164534440" role="forward"/>
  <member type="way" ref="132928016" role="forward"/>
  <member type="way" ref="132928020" role="forward"/>
  <member type="way" ref="132928014" role="forward"/>
  <member type="way" ref="132928018" role="forward"/>
  <member type="way" ref="132926611" role="forward"/>
  <member type="way" ref="132926606" role="forward"/>
  <member type="way" ref="132926603" role="forward"/>
  <member type="way" ref="132926601" role="forward"/>
  <member type="way" ref="508036232" role="forward"/>
  <member type="way" ref="209415771" role=""/>
  <member type="way" ref="740711068" role=""/>
  <member type="way" ref="508036234" role="forward"/>
  <member type="way" ref="132926610" role="forward"/>
  <member type="way" ref="740711067" role="forward"/>
  <member type="way" ref="132924704" role="forward"/>
  <member type="way" ref="464298047" role="forward"/>
  <member type="way" ref="464298039" role="forward"/>
  <member type="way" ref="475706033" role="forward"/>
  <member type="way" ref="475706035" role="forward"/>
  <member type="way" ref="480696849" role="forward"/>
  <member type="way" ref="480696848" role="forward"/>
  <member type="way" ref="157249953" role="forward"/>
  <member type="way" ref="475964702" role="forward"/>
  <member type="way" ref="696330932" role="forward"/>
  <member type="way" ref="488526751" role="forward"/>
  <member type="way" ref="480885876" role="forward"/>
  <member type="way" ref="488526732" role="forward"/>
  <member type="way" ref="133392472" role="forward"/>
  <member type="way" ref="133392477" role="forward"/>
  <member type="way" ref="133392473" role="forward"/>
  <member type="way" ref="133392474" role="forward"/>
  <member type="way" ref="66042739" role=""/>
  <member type="way" ref="66042829" role=""/>
  <member type="way" ref="66042812" role=""/>
  <member type="way" ref="66042747" role=""/>
  <member type="way" ref="66042840" role=""/>
  <member type="way" ref="66042774" role=""/>
  <member type="way" ref="221487427" role=""/>
  <member type="way" ref="221487428" role=""/>
  <member type="way" ref="66042785" role=""/>
  <member type="way" ref="221488650" role=""/>
  <member type="way" ref="221488649" role=""/>
  <member type="way" ref="62377844" role=""/>
  <member type="way" ref="495252650" role=""/>
  <member type="way" ref="495252649" role=""/>
  <member type="way" ref="62377846" role=""/>
  <member type="way" ref="495208428" role=""/>
  <member type="way" ref="495208424" role=""/>
  <member type="way" ref="495208429" role=""/>
  <member type="way" ref="495208423" role=""/>
  <member type="way" ref="331635348" role=""/>
  <member type="way" ref="331635347" role=""/>
  <member type="way" ref="495208427" role=""/>
  <member type="way" ref="495208426" role=""/>
  <member type="way" ref="512739406" role=""/>
  <member type="way" ref="512739407" role=""/>
  <member type="way" ref="243192631" role=""/>
  <member type="way" ref="512739410" role=""/>
  <member type="way" ref="512739409" role=""/>
  <member type="way" ref="512739408" role=""/>
  <member type="way" ref="62369749" role="forward"/>
  <member type="way" ref="425766849" role="forward"/>
  <member type="way" ref="658389628" role=""/>
  <member type="way" ref="711240573" role="forward"/>
  <member type="way" ref="62369784" role="forward"/>
  <member type="way" ref="99467741" role="forward"/>
  <member type="way" ref="99467562" role="forward"/>
  <member type="way" ref="711240572" role="forward"/>
  <member type="way" ref="658389628" role=""/>
  <member type="way" ref="31902827" role="forward"/>
  <member type="way" ref="99467796" role="forward"/>
  <member type="way" ref="99467755" role="forward"/>
  <member type="way" ref="99467645" role="forward"/>
  <member type="way" ref="99467585" role="forward"/>
  <member type="way" ref="31903224" role="forward"/>
  <member type="way" ref="99467563" role="forward"/>
  <member type="way" ref="99584029" role=""/>
  <member type="way" ref="230628474" role="forward"/>
  <member type="way" ref="230628475" role="forward"/>
  <member type="way" ref="99583846" role="forward"/>
  <member type="way" ref="99583794" role="forward"/>
  <member type="way" ref="195746361" role="forward"/>
  <member type="way" ref="31902829" role="forward"/>
  <member type="way" ref="195746360" role="forward"/>
  <member type="way" ref="89667482" role="forward"/>
  <member type="way" ref="89667392" role="forward"/>
  <member type="way" ref="89667457" role="forward"/>
  <member type="way" ref="89667402" role="forward"/>
  <member type="way" ref="89667358" role="forward"/>
  <member type="way" ref="99505984" role="forward"/>
  <member type="way" ref="99505972" role="forward"/>
  <member type="way" ref="99583997" role="forward"/>
  <member type="way" ref="31903223" role="forward"/>
  <member type="way" ref="99583988" role="forward"/>
  <member type="way" ref="99505976" role="forward"/>
  <member type="way" ref="31902381" role="forward"/>
  <member type="way" ref="89667470" role="forward"/>
  <member type="way" ref="89667454" role="forward"/>
  <member type="way" ref="89667208" role="forward"/>
  <member type="way" ref="89667450" role="forward"/>
  <member type="way" ref="89667439" role="forward"/>
  <member type="way" ref="31902821" role="forward"/>
  <member type="way" ref="89667271" role=""/>
  <member type="way" ref="89667264" role=""/>
  <member type="way" ref="89667247" role=""/>
  <member type="way" ref="89667463" role="forward"/>
  <member type="way" ref="89667195" role="forward"/>
  <member type="way" ref="89667381" role="forward"/>
  <member type="way" ref="495050704" role="forward"/>
  <member type="way" ref="89667406" role="forward"/>
  <member type="way" ref="89667369" role="forward"/>
  <member type="way" ref="89667472" role=""/>
  <member type="way" ref="62364812" role=""/>
  <member type="way" ref="622650470" role=""/>
  <member type="way" ref="622650470" role=""/>
  <member type="way" ref="711958611" role=""/>
  <member type="way" ref="711958610" role=""/>
  <member type="way" ref="742515287" role=""/>
  <member type="way" ref="495046236" role=""/>
  <member type="way" ref="495046235" role=""/>
  <member type="way" ref="704825736" role=""/>
  <member type="way" ref="622650456" role=""/>
  <member type="way" ref="511026190" role=""/>
  <member type="way" ref="711957953" role=""/>
  <member type="way" ref="622650469" role=""/>
  <member type="way" ref="511026193" role=""/>
  <member type="way" ref="622650453" role=""/>
  <member type="way" ref="711321834" role=""/>
  <member type="way" ref="473314009" role=""/>
  <member type="way" ref="622654165" role=""/>
  <member type="way" ref="473314008" role=""/>
  <member type="way" ref="62364828" role=""/>
  <member type="way" ref="185698590" role="forward"/>
  <member type="way" ref="62357775" role="forward"/>
  <member type="way" ref="195746413" role="forward"/>
  <member type="way" ref="195746493" role="forward"/>
  <member type="way" ref="307673552" role="backward"/>
  <member type="way" ref="122006638" role="forward"/>
  <member type="way" ref="136572014" role="forward"/>
  <member type="way" ref="195746501" role="forward"/>
  <member type="way" ref="195746508" role="forward"/>
  <member type="way" ref="122006639" role="forward"/>
  <member type="way" ref="307673274" role=""/>
  <member type="way" ref="89667255" role=""/>
  <member type="way" ref="89667327" role=""/>
  <member type="way" ref="307674666" role=""/>
  <member type="way" ref="307674668" role=""/>
  <member type="way" ref="89667250" role=""/>
  <member type="way" ref="89667424" role=""/>
  <member type="way" ref="89667239" role=""/>
  <member type="way" ref="89667462" role=""/>
  <member type="way" ref="89667389" role=""/>
  <member type="way" ref="89667444" role=""/>
  <member type="way" ref="89667216" role=""/>
  <member type="way" ref="89667483" role=""/>
  <member type="way" ref="312498363" role=""/>
  <member type="way" ref="239316399" role=""/>
  <member type="way" ref="239316401" role=""/>
  <member type="way" ref="706668992" role=""/>
  <member type="way" ref="563549838" role=""/>
  <member type="way" ref="135909344" role=""/>
  <member type="way" ref="184960112" role="forward"/>
  <member type="way" ref="184960111" role="forward"/>
  <member type="way" ref="184960109" role=""/>
  <member type="way" ref="184960113" role="forward"/>
  <member type="way" ref="184960114" role="forward"/>
  <member type="way" ref="59779740" role=""/>
  <member type="way" ref="434364006" role=""/>
  <member type="way" ref="434364008" role=""/>
  <member type="way" ref="233441086" role="forward"/>
  <member type="way" ref="59779758" role="forward"/>
  <member type="way" ref="435233562" role="forward"/>
  <member type="way" ref="435233563" role="forward"/>
  <member type="way" ref="233229885" role="forward"/>
  <member type="way" ref="233229884" role="forward"/>
  <member type="way" ref="698228847" role="forward"/>
  <member type="way" ref="698228848" role="forward"/>
  <member type="way" ref="300123702" role="forward"/>
  <member type="way" ref="233441082" role="forward"/>
  <member type="way" ref="59779760" role="forward"/>
  <member type="way" ref="698693103" role="forward"/>
  <member type="way" ref="233226861" role="forward"/>
  <member type="way" ref="59779714" role="forward"/>
  <member type="way" ref="59779763" role="forward"/>
  <member type="way" ref="233243456" role="forward"/>
  <member type="way" ref="435233560" role="forward"/>
  <member type="way" ref="435233554" role="forward"/>
  <member type="way" ref="435233559" role="forward"/>
  <member type="way" ref="435233553" role="forward"/>
  <member type="way" ref="434415818" role="forward"/>
  <member type="way" ref="434415816" role="forward"/>
  <member type="way" ref="233243466" role="forward"/>
  <member type="way" ref="486221759" role="forward"/>
  <member type="way" ref="184960117" role="forward"/>
  <member type="way" ref="195746366" role="forward"/>
  <member type="way" ref="59779761" role="forward"/>
  <member type="way" ref="59779736" role="forward"/>
  <member type="way" ref="710997591" role="forward"/>
  <member type="way" ref="302682979" role=""/>
  <member type="way" ref="59779755" role="forward"/>
  <member type="way" ref="302685607" role=""/>
  <member type="way" ref="710997012" role="forward"/>
  <member type="way" ref="233229897" role="forward"/>
  <member type="way" ref="435233561" role="forward"/>
  <member type="way" ref="435233564" role="forward"/>
  <member type="way" ref="300123708" role="forward"/>
  <member type="way" ref="233226863" role="forward"/>
  <member type="way" ref="698228849" role="forward"/>
  <member type="way" ref="698228850" role="forward"/>
  <member type="way" ref="233226869" role="forward"/>
  <member type="way" ref="233226864" role="forward"/>
  <member type="way" ref="698693104" role="forward"/>
  <member type="way" ref="39839695" role="forward"/>
  <member type="way" ref="39839694" role="forward"/>
  <member type="way" ref="233234717" role="forward"/>
  <member type="way" ref="434415815" role="forward"/>
  <member type="way" ref="434415817" role="forward"/>
  <member type="way" ref="435233556" role="forward"/>
  <member type="way" ref="435233558" role="forward"/>
  <member type="way" ref="435233555" role="forward"/>
  <member type="way" ref="435233557" role="forward"/>
  <member type="way" ref="59779768" role="forward"/>
  <member type="way" ref="233243455" role="forward"/>
  <member type="way" ref="233243464" role="forward"/>
  <member type="way" ref="486221762" role="forward"/>
  <member type="way" ref="59779770" role="forward"/>
  <member type="way" ref="39839400" role="forward"/>
  <member type="way" ref="38020243" role="forward"/>
  <member type="way" ref="710997593" role="forward"/>
  <member type="way" ref="302682979" role=""/>
  <member type="way" ref="195746376" role="forward"/>
  <member type="way" ref="710997013" role=""/>
  <member type="way" ref="302685607" role=""/>
  <member type="way" ref="302685601" role=""/>
  <member type="way" ref="302685610" role=""/>
  <member type="way" ref="302685608" role=""/>
  <member type="way" ref="302685602" role=""/>
  <member type="way" ref="302685612" role=""/>
  <member type="way" ref="302685605" role=""/>
  <member type="way" ref="302685611" role=""/>
  <member type="way" ref="302685613" role=""/>
  <member type="way" ref="302685614" role=""/>
  <member type="way" ref="302685603" role=""/>
  <member type="way" ref="704768220" role=""/>
  <member type="way" ref="302689357" role=""/>
  <member type="way" ref="302689352" role=""/>
  <member type="way" ref="710996842" role=""/>
  <member type="way" ref="302689351" role=""/>
  <member type="way" ref="302689359" role=""/>
  <member type="way" ref="302689356" role=""/>
  <member type="way" ref="302689358" role=""/>
  <member type="way" ref="302689363" role=""/>
  <member type="way" ref="302689361" role=""/>
  <member type="way" ref="302689350" role=""/>
  <member type="way" ref="302689355" role=""/>
  <member type="way" ref="302689354" role=""/>
  <member type="way" ref="302689353" role=""/>
  <member type="way" ref="302689362" role=""/>
  <member type="way" ref="706644308" role=""/>
  <member type="way" ref="302689921" role=""/>
  <member type="way" ref="302685604" role=""/>
  <member type="way" ref="96824826" role=""/>
  <member type="way" ref="96824829" role=""/>
  <member type="way" ref="302688715" role=""/>
  <member type="way" ref="710996841" role=""/>
  <member type="way" ref="307558979" role=""/>
  <member type="way" ref="302689357" role=""/>
  <member type="way" ref="704768219" role=""/>
  <member type="way" ref="96824824" role=""/>
  <member type="way" ref="96824825" role=""/>
  <member type="way" ref="302689921" role=""/>
  <member type="way" ref="706644309" role=""/>
  <member type="way" ref="706568766" role=""/>
  <member type="way" ref="661351492" role=""/>
  <member type="way" ref="302689920" role=""/>
  <member type="way" ref="96824827" role=""/>
  <member type="way" ref="16376900" role=""/>
  <member type="way" ref="276163428" role=""/>
  <member type="way" ref="276163429" role=""/>
  <member type="way" ref="275184977" role=""/>
  <member type="way" ref="275185610" role=""/>
  <member type="way" ref="275362724" role=""/>
  <member type="way" ref="276162449" role=""/>
  <member type="way" ref="276162447" role=""/>
  <member type="way" ref="276162448" role=""/>
  <member type="way" ref="16376691" role=""/>
  <member type="way" ref="38020239" role=""/>
  <member type="way" ref="38020240" role=""/>
  <member type="way" ref="566430581" role=""/>
  <member type="way" ref="566432010" role=""/>
  <member type="way" ref="566432010" role=""/>
  <member type="way" ref="566430582" role=""/>
  <member type="way" ref="566432005" role=""/>
  <member type="way" ref="566432005" role=""/>
  <member type="way" ref="710996201" role=""/>
  <member type="way" ref="706652576" role=""/>
  <member type="way" ref="566430588" role=""/>
  <member type="way" ref="566430588" role=""/>
  <member type="way" ref="566430586" role=""/>
  <member type="way" ref="566430586" role=""/>
  <member type="way" ref="566430587" role=""/>
  <member type="way" ref="83673922" role=""/>
  <member type="way" ref="83673921" role=""/>
  <member type="way" ref="710995700" role=""/>
  <member type="way" ref="566430584" role=""/>
  <member type="way" ref="566430583" role=""/>
  <member type="way" ref="566430587" role=""/>
  <member type="way" ref="710941262" role=""/>
  <member type="way" ref="566875827" role=""/>
  <member type="way" ref="710936678" role=""/>
  <member type="way" ref="710995701" role=""/>
  <member type="way" ref="566435862" role=""/>
  <member type="way" ref="566435862" role=""/>
  <member type="way" ref="710982258" role=""/>
  <member type="way" ref="710945491" role=""/>
  <member type="way" ref="566436701" role=""/>
  <member type="way" ref="566436701" role=""/>
  <member type="way" ref="710945490" role=""/>
  <member type="way" ref="710981134" role=""/>
  <member type="way" ref="566875829" role=""/>
  <member type="way" ref="566875829" role=""/>
  <member type="way" ref="710981133" role=""/>
  <member type="way" ref="566435857" role=""/>
  <member type="way" ref="730995525" role=""/>
  <member type="way" ref="730995534" role=""/>
  <member type="way" ref="730995535" role=""/>
  <member type="way" ref="730995524" role=""/>
  <member type="way" ref="83673919" role=""/>
  <member type="way" ref="710941261" role=""/>
  <member type="way" ref="83673915" role=""/>
  <member type="way" ref="710936679" role=""/>
  <member type="way" ref="710982259" role=""/>
  <member type="way" ref="706652575" role=""/>
  <member type="way" ref="710996202" role=""/>
  <member type="way" ref="120284724" role=""/>
  <member type="way" ref="120284719" role=""/>
  <member type="way" ref="120284726" role=""/>
  <member type="way" ref="235968661" role=""/>
  <member type="way" ref="235968662" role=""/>
  <member type="way" ref="120197443" role=""/>
  <member type="way" ref="120197486" role=""/>
  <member type="way" ref="120197347" role=""/>
  <member type="way" ref="120197517" role=""/>
  <member type="way" ref="120197445" role=""/>
  <member type="way" ref="120197394" role=""/>
  <member type="way" ref="120197380" role=""/>
  <member type="way" ref="661684703" role=""/>
  <member type="way" ref="706648327" role=""/>
  <member type="way" ref="661684706" role=""/>
  <member type="way" ref="47053531" role=""/>
  <member type="way" ref="661684700" role=""/>
  <member type="way" ref="706925487" role=""/>
  <member type="way" ref="47053536" role=""/>
  <member type="way" ref="780434994" role="forward"/>
  <member type="way" ref="195746407" role="forward"/>
  <member type="way" ref="662891320" role=""/>
  <member type="way" ref="780434993" role=""/>
  <member type="way" ref="706921333" role=""/>
  <member type="way" ref="780434992" role=""/>
  <member type="way" ref="779512559" role=""/>
  <member type="way" ref="706921334" role=""/>
  <member type="way" ref="706921332" role=""/>
  <member type="way" ref="780434992" role=""/>
  <member type="way" ref="706921333" role=""/>
  <member type="way" ref="780434993" role=""/>
  <member type="way" ref="779512559" role=""/>
  <member type="way" ref="120402639" role=""/>
  <member type="way" ref="779512558" role=""/>
  <member type="way" ref="120402640" role=""/>
  <member type="way" ref="120402630" role="forward"/>
  <member type="way" ref="661684678" role=""/>
  <member type="way" ref="706925486" role=""/>
  <member type="way" ref="661684700" role=""/>
  <member type="way" ref="661684685" role=""/>
  <member type="way" ref="661684706" role=""/>
  <member type="way" ref="706648328" role=""/>
  <member type="way" ref="120402635" role="forward"/>
  <member type="way" ref="120402645" role="forward"/>
  <member type="way" ref="47053028" role=""/>
  <member type="way" ref="120402617" role=""/>
  <member type="way" ref="120402629" role=""/>
  <member type="way" ref="779512561" role=""/>
  <member type="way" ref="120402614" role=""/>
  <member type="way" ref="120402621" role=""/>
  <member type="way" ref="120402618" role=""/>
  <member type="way" ref="47053050" role=""/>
  <member type="way" ref="96255514" role=""/>
  <member type="way" ref="120402646" role=""/>
  <member type="way" ref="47053022" role=""/>
  <member type="way" ref="47053070" role=""/>
  <member type="way" ref="47053065" role=""/>
  <member type="way" ref="752925401" role=""/>
  <member type="way" ref="752925402" role=""/>
  <member type="way" ref="175981522" role=""/>
  <member type="way" ref="175981523" role=""/>
  <member type="way" ref="751781464" role=""/>
  <member type="way" ref="751781463" role=""/>
  <member type="way" ref="47053060" role=""/>
  <member type="way" ref="211424080" role=""/>
  <member type="way" ref="211424079" role=""/>
  <member type="way" ref="96065426" role=""/>
  <member type="way" ref="217399945" role=""/>
  <member type="way" ref="217399946" role=""/>
  <member type="way" ref="217399944" role=""/>
  <member type="way" ref="509925664" role=""/>
  <member type="way" ref="47053003" role=""/>
  <member type="way" ref="47053002" role=""/>
  <member type="way" ref="96419889" role=""/>
  <member type="way" ref="96419827" role=""/>
  <member type="way" ref="682843852" role=""/>
  <member type="way" ref="846669109" role=""/>
  <member type="way" ref="846669113" role=""/>
  <member type="way" ref="846669112" role=""/>
  <member type="way" ref="708753616" role=""/>
  <member type="way" ref="846669111" role=""/>
  <member type="way" ref="846669110" role=""/>
  <member type="way" ref="47053001" role=""/>
  <member type="way" ref="8597454" role=""/>
  <member type="way" ref="191526957" role=""/>
  <member type="way" ref="288822838" role=""/>
  <member type="way" ref="288822837" role=""/>
  <member type="way" ref="191526960" role=""/>
  <member type="way" ref="191526954" role=""/>
  <member type="way" ref="191526956" role=""/>
  <member type="way" ref="191526955" role=""/>
  <member type="way" ref="191526953" role=""/>
  <member type="way" ref="191526959" role=""/>
  <member type="way" ref="191526951" role=""/>
  <member type="way" ref="191526958" role=""/>
  <member type="way" ref="191526952" role=""/>
  <member type="way" ref="48075278" role=""/>
  <member type="way" ref="48075281" role=""/>
  <member type="way" ref="48075297" role=""/>
  <member type="way" ref="48075268" role=""/>
  <member type="way" ref="194102812" role=""/>
  <member type="way" ref="696077982" role=""/>
  <member type="way" ref="696077983" role=""/>
  <member type="way" ref="194102810" role=""/>
  <member type="way" ref="194102811" role=""/>
  <member type="way" ref="194102815" role=""/>
  <member type="way" ref="194102814" role=""/>
  <member type="way" ref="194102813" role=""/>
  <member type="way" ref="48075375" role=""/>
  <member type="way" ref="685171889" role=""/>
  <member type="way" ref="685171888" role=""/>
  <member type="way" ref="491944018" role=""/>
  <member type="way" ref="71122968" role=""/>
  <member type="way" ref="96568919" role=""/>
  <member type="way" ref="96568896" role=""/>
  <member type="way" ref="96569072" role="forward"/>
  <member type="way" ref="96569032" role="forward"/>
  <member type="way" ref="96580445" role=""/>
  <member type="way" ref="96580387" role=""/>
  <member type="way" ref="211427794" role=""/>
  <member type="way" ref="48075338" role=""/>
  <member type="way" ref="491947822" role=""/>
  <member type="way" ref="491947825" role=""/>
  <member type="way" ref="211427795" role=""/>
  <member type="way" ref="211427790" role=""/>
  <member type="way" ref="211427796" role=""/>
  <member type="way" ref="211427797" role=""/>
  <member type="way" ref="211427792" role=""/>
  <member type="way" ref="211427800" role=""/>
  <member type="way" ref="211427793" role=""/>
  <member type="way" ref="211427799" role=""/>
  <member type="way" ref="211427791" role=""/>
  <member type="way" ref="211427798" role=""/>
  <member type="way" ref="367784447" role=""/>
  <member type="way" ref="96589883" role=""/>
  <member type="way" ref="96590173" role=""/>
  <member type="way" ref="71122967" role=""/>
  <member type="way" ref="71122970" role=""/>
  <member type="way" ref="233226860" role="forward"/>
  <member type="way" ref="698698725" role="forward"/>
  <member type="way" ref="233229899" role="forward"/>
  <member type="way" ref="233229878" role="forward"/>
  <member type="way" ref="300123703" role="forward"/>
  <member type="way" ref="233234714" role="forward"/>
  <member type="way" ref="233234715" role="forward"/>
  <member type="way" ref="274053354" role=""/>
  <member type="way" ref="563549838" role=""/>
  <member type="way" ref="706668993" role=""/>
  <member type="way" ref="189247104" role="forward"/>
  <member type="way" ref="189247109" role="forward"/>
  <member type="way" ref="189247096" role="forward"/>
  <member type="way" ref="189247098" role="forward"/>
  <member type="way" ref="189247095" role="forward"/>
  <member type="way" ref="189247092" role="forward"/>
  <member type="way" ref="189247090" role="forward"/>
  <member type="way" ref="189247108" role="forward"/>
  <member type="way" ref="189247086" role="forward"/>
  <member type="way" ref="189247107" role="forward"/>
  <member type="way" ref="189247119" role="forward"/>
  <member type="way" ref="189247111" role="forward"/>
  <member type="way" ref="186337732" role="forward"/>
  <member type="way" ref="189247079" role="forward"/>
  <member type="way" ref="189247093" role="forward"/>
  <member type="way" ref="189247123" role="forward"/>
  <member type="way" ref="189247077" role="forward"/>
  <member type="way" ref="189247091" role="forward"/>
  <member type="way" ref="189247087" role="forward"/>
  <member type="way" ref="189247100" role="forward"/>
  <member type="way" ref="486460276" role="forward"/>
  <member type="way" ref="486460279" role="forward"/>
  <member type="way" ref="375768018" role="forward"/>
  <member type="way" ref="375768025" role="forward"/>
  <member type="way" ref="186337731" role="forward"/>
  <member type="way" ref="486460277" role="forward"/>
  <member type="way" ref="486460278" role="forward"/>
  <member type="way" ref="375768016" role="forward"/>
  <member type="way" ref="375768017" role="forward"/>
  <member type="way" ref="189247101" role="forward"/>
  <member type="way" ref="375761045" role="forward"/>
  <member type="way" ref="375761055" role="forward"/>
  <member type="way" ref="375761050" role="forward"/>
  <member type="way" ref="375761056" role="forward"/>
  <member type="way" ref="229960570" role=""/>
  <member type="way" ref="207930685" role=""/>
  <member type="way" ref="491581646" role=""/>
  <member type="way" ref="491581645" role=""/>
  <member type="way" ref="491538764" role=""/>
  <member type="way" ref="491538761" role=""/>
  <member type="way" ref="229960583" role=""/>
  <member type="way" ref="274122155" role=""/>
  <member type="way" ref="274122158" role=""/>
  <member type="way" ref="580584834" role=""/>
  <member type="way" ref="710876496" role=""/>
  <member type="way" ref="274122154" role=""/>
  <member type="way" ref="274122153" role=""/>
  <member type="way" ref="425175768" role=""/>
  <member type="way" ref="229960582" role=""/>
  <member type="way" ref="229960580" role=""/>
  <member type="way" ref="426106855" role=""/>
  <member type="way" ref="680870201" role=""/>
  <member type="way" ref="680870202" role=""/>
  <member type="way" ref="536651670" role="forward"/>
  <member type="way" ref="524045827" role="forward"/>
  <member type="way" ref="524045828" role="forward"/>
  <member type="way" ref="73827521" role="forward"/>
  <member type="way" ref="114389582" role="forward"/>
  <member type="way" ref="114389578" role="forward"/>
  <member type="way" ref="114389579" role="forward"/>
  <member type="way" ref="114389577" role="forward"/>
  <member type="way" ref="114389589" role=""/>
  <member type="way" ref="746446839" role=""/>
  <member type="way" ref="427088047" role="forward"/>
  <member type="way" ref="106995900" role="forward"/>
  <member type="way" ref="107107859" role="forward"/>
  <member type="way" ref="107107844" role="forward"/>
  <member type="way" ref="107107860" role="forward"/>
  <member type="way" ref="107107855" role="forward"/>
  <member type="way" ref="88116149" role="forward"/>
  <member type="way" ref="250773218" role="forward"/>
  <member type="way" ref="250773215" role="forward"/>
  <member type="way" ref="285241639" role="forward"/>
  <member type="way" ref="285241644" role="forward"/>
  <member type="way" ref="437030677" role="forward"/>
  <member type="way" ref="437030676" role="forward"/>
  <member type="way" ref="509925600" role=""/>
  <member type="way" ref="509925606" role=""/>
  <member type="way" ref="396008180" role=""/>
  <member type="way" ref="509925596" role=""/>
  <member type="way" ref="107107853" role="backward"/>
  <member type="way" ref="107107858" role="backward"/>
  <member type="way" ref="107107847" role="backward"/>
  <member type="way" ref="107107861" role="backward"/>
  <member type="way" ref="15221658" role="backward"/>
  <member type="way" ref="88116223" role="backward"/>
  <member type="way" ref="88116291" role="backward"/>
  <member type="way" ref="250773217" role="backward"/>
  <member type="way" ref="250773216" role="backward"/>
  <member type="way" ref="168913339" role="forward"/>
  <member type="way" ref="173230834" role="forward"/>
  <member type="way" ref="427054166" role="forward"/>
  <member type="way" ref="427053087" role="forward"/>
  <member type="way" ref="166704399" role="forward"/>
  <member type="way" ref="166704401" role="forward"/>
  <member type="way" ref="166704400" role="forward"/>
  <member type="way" ref="427054168" role=""/>
  <member type="way" ref="427053086" role=""/>
  <member type="way" ref="166704408" role=""/>
  <member type="way" ref="166704404" role=""/>
  <member type="way" ref="166704407" role=""/>
  <member type="way" ref="166704405" role=""/>
  <member type="way" ref="166704398" role=""/>
  <member type="way" ref="166704402" role=""/>
  <member type="way" ref="490349631" role=""/>
  <member type="way" ref="490349633" role=""/>
  <member type="way" ref="559804375" role=""/>
  <member type="way" ref="490349634" role=""/>
  <member type="way" ref="559804372" role=""/>
  <member type="way" ref="559804377" role=""/>
  <member type="way" ref="582834814" role=""/>
  <member type="way" ref="559819177" role=""/>
  <member type="way" ref="559819178" role=""/>
  <member type="way" ref="559819179" role=""/>
  <member type="way" ref="559819181" role=""/>
  <member type="way" ref="559819176" role=""/>
  <member type="way" ref="559819175" role=""/>
  <member type="way" ref="582834811" role=""/>
  <member type="way" ref="231308549" role=""/>
  <tag k="description" v="Route from Yassıören (D 020) - Tayakadın - İstanbul / Karasu (D 650) - Zonguldak - Bartın - İnebolu - Sinop - Samsun - Ordu - Giresun - Tirebolu - Trabzon - Of - Rize - Hopa - Ardahan - Ölçek - Akçakale (D 060)"/>
  <tag k="network" v="TR-roads"/>
  <tag k="ref" v="D 010"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
 </relation>
 <relation id="1726294" visible="true" version="44" changeset="83050260" timestamp="2020-04-03T18:51:53Z" user="bora can" uid="1822925">
  <member type="way" ref="333319602" role="outer"/>
  <member type="way" ref="333319601" role="outer"/>
  <member type="way" ref="333319603" role="outer"/>
  <member type="way" ref="105333320" role="outer"/>
  <member type="way" ref="105497304" role="outer"/>
  <member type="way" ref="290193302" role="outer"/>
  <member type="way" ref="302602919" role="outer"/>
  <member type="way" ref="302602920" role="outer"/>
  <member type="way" ref="172662361" role="outer"/>
  <member type="way" ref="15243434" role="outer"/>
  <member type="way" ref="15272599" role="outer"/>
  <member type="way" ref="136276832" role="outer"/>
  <member type="way" ref="130176420" role="outer"/>
  <member type="way" ref="130176419" role="outer"/>
  <member type="way" ref="15889180" role="outer"/>
  <member type="way" ref="130176418" role="outer"/>
  <member type="way" ref="114440064" role="outer"/>
  <member type="way" ref="15221303" role="outer"/>
  <member type="way" ref="136068448" role="outer"/>
  <member type="way" ref="136068449" role="outer"/>
  <member type="way" ref="136059172" role="outer"/>
  <member type="way" ref="273965276" role="outer"/>
  <member type="way" ref="127475250" role="outer"/>
  <member type="way" ref="136059173" role="outer"/>
  <member type="way" ref="15895477" role="outer"/>
  <member type="way" ref="305918073" role="outer"/>
  <member type="way" ref="136059168" role="outer"/>
  <member type="way" ref="136064213" role="outer"/>
  <member type="way" ref="136064212" role="outer"/>
  <member type="way" ref="136052780" role="outer"/>
  <member type="way" ref="284310616" role="outer"/>
  <member type="way" ref="96033749" role="outer"/>
  <member type="way" ref="136477219" role="outer"/>
  <member type="way" ref="15220798" role="outer"/>
  <member type="way" ref="120393078" role="outer"/>
  <member type="way" ref="136477224" role="outer"/>
  <member type="way" ref="120393082" role="outer"/>
  <member type="way" ref="120393074" role="outer"/>
  <member type="way" ref="38426013" role="outer"/>
  <member type="way" ref="114389584" role="outer"/>
  <member type="way" ref="148975624" role="outer"/>
  <member type="way" ref="136477223" role="outer"/>
  <member type="way" ref="148975272" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="way" ref="36737725" role="outer"/>
  <member type="way" ref="38425500" role="outer"/>
  <member type="way" ref="31878693" role="outer"/>
  <member type="way" ref="31878695" role="outer"/>
  <member type="way" ref="31878689" role="outer"/>
  <member type="way" ref="31878691" role="outer"/>
  <member type="way" ref="31878687" role="outer"/>
  <member type="way" ref="31878742" role="outer"/>
  <member type="way" ref="82285211" role="outer"/>
  <member type="way" ref="31878728" role="outer"/>
  <member type="way" ref="82285210" role="outer"/>
  <member type="way" ref="31878717" role="outer"/>
  <member type="way" ref="31878709" role="outer"/>
  <member type="way" ref="82285212" role="outer"/>
  <member type="way" ref="31878779" role="outer"/>
  <member type="way" ref="31878769" role="outer"/>
  <member type="way" ref="31878760" role="outer"/>
  <member type="way" ref="31878752" role="outer"/>
  <member type="way" ref="31878801" role="outer"/>
  <member type="way" ref="31878806" role="outer"/>
  <member type="way" ref="31878812" role="outer"/>
  <member type="way" ref="82285621" role="outer"/>
  <member type="way" ref="31878805" role="outer"/>
  <member type="way" ref="31878792" role="outer"/>
  <member type="way" ref="31878797" role="outer"/>
  <member type="way" ref="31878789" role="outer"/>
  <member type="way" ref="31878765" role="outer"/>
  <member type="way" ref="31878794" role="outer"/>
  <member type="way" ref="31878804" role="outer"/>
  <member type="way" ref="15094066" role="outer"/>
  <member type="way" ref="83724664" role="outer"/>
  <member type="way" ref="96821485" role="outer"/>
  <member type="way" ref="96821505" role="outer"/>
  <member type="way" ref="83724665" role="outer"/>
  <member type="way" ref="96821455" role="outer"/>
  <member type="way" ref="83634831" role="outer"/>
  <member type="way" ref="83724668" role="outer"/>
  <member type="way" ref="96704648" role="outer"/>
  <member type="way" ref="83673930" role="outer"/>
  <member type="way" ref="82419988" role="outer"/>
  <member type="way" ref="15253785" role="outer"/>
  <member type="way" ref="787541792" role="outer"/>
  <member type="way" ref="787541793" role="outer"/>
  <member type="way" ref="700216272" role="outer"/>
  <member type="way" ref="787541796" role="outer"/>
  <member type="way" ref="96704650" role="outer"/>
  <member type="way" ref="787541795" role="outer"/>
  <member type="way" ref="733780022" role="outer"/>
  <member type="way" ref="787541794" role="outer"/>
  <member type="way" ref="700240753" role="outer"/>
  <member type="way" ref="733781494" role="outer"/>
  <member type="way" ref="787541788" role="outer"/>
  <member type="way" ref="787541789" role="outer"/>
  <member type="way" ref="787560435" role="outer"/>
  <member type="way" ref="133614817" role="outer"/>
  <member type="way" ref="787560433" role="outer"/>
  <member type="way" ref="787560432" role="outer"/>
  <member type="way" ref="787665779" role="outer"/>
  <member type="way" ref="787665778" role="outer"/>
  <member type="way" ref="15244611" role="outer"/>
  <member type="way" ref="83045311" role="outer"/>
  <member type="way" ref="119996541" role="outer"/>
  <member type="way" ref="37329985" role="outer"/>
  <member type="way" ref="37329984" role="outer"/>
  <member type="way" ref="119996547" role="outer"/>
  <member type="way" ref="119996529" role="outer"/>
  <member type="way" ref="134104179" role="outer"/>
  <member type="way" ref="134104178" role="outer"/>
  <member type="way" ref="132658829" role="outer"/>
  <member type="way" ref="119996526" role="outer"/>
  <member type="way" ref="15254895" role="outer"/>
  <member type="way" ref="119996548" role="outer"/>
  <member type="way" ref="119996534" role="outer"/>
  <member type="way" ref="90580351" role="outer"/>
  <member type="way" ref="15244498" role="outer"/>
  <member type="way" ref="83603928" role="outer"/>
  <member type="way" ref="15244374" role="outer"/>
  <member type="way" ref="82533608" role="outer"/>
  <member type="way" ref="90580339" role="outer"/>
  <member type="way" ref="90580322" role="outer"/>
  <member type="way" ref="110693146" role="outer"/>
  <member type="way" ref="110693156" role="outer"/>
  <member type="way" ref="90580319" role="outer"/>
  <member type="way" ref="15255799" role="outer"/>
  <member type="way" ref="15256296" role="outer"/>
  <member type="way" ref="110693167" role="outer"/>
  <member type="way" ref="134199349" role="outer"/>
  <member type="way" ref="15243776" role="outer"/>
  <member type="way" ref="134199348" role="outer"/>
  <member type="way" ref="100772424" role="outer"/>
  <member type="way" ref="134199347" role="outer"/>
  <member type="way" ref="100772545" role="outer"/>
  <member type="way" ref="134196435" role="outer"/>
  <member type="way" ref="134135597" role="outer"/>
  <member type="way" ref="100876046" role="outer"/>
  <member type="way" ref="136819613" role="outer"/>
  <member type="way" ref="134136369" role="outer"/>
  <member type="way" ref="105333364" role="outer"/>
  <member type="way" ref="15256707" role="outer"/>
  <member type="way" ref="105333189" role="outer"/>
  <member type="way" ref="105482432" role="outer"/>
  <member type="way" ref="369361190" role="outer"/>
  <tag k="admin_level" v="3"/>
  <tag k="border_type" v="region"/>
  <tag k="boundary" v="administrative"/>
  <tag k="cg_ref" v="TR-2"/>
  <tag k="is_in:country_code" v="TR"/>
  <tag k="name" v="Karadeniz Bölgesi"/>
  <tag k="name:ar" v="منطقة البحر الأسود"/>
  <tag k="name:az" v="Qara dəniz bölgəsi"/>
  <tag k="name:be" v="Чарнаморскі рэгіён"/>
  <tag k="name:ca" v="Regió de la Mar Negra"/>
  <tag k="name:ckb" v="ناوچەی زەریای ڕەش"/>
  <tag k="name:cs" v="Černomořský region"/>
  <tag k="name:de" v="Schwarzmeerregion"/>
  <tag k="name:el" v="Διαμέρισμα Μαύρης Θάλασσας"/>
  <tag k="name:en" v="Black Sea Region"/>
  <tag k="name:eo" v="Nigra-Mara regiono"/>
  <tag k="name:es" v="Región del Mar Negro"/>
  <tag k="name:fa" v="ناحیه دریای سیاه"/>
  <tag k="name:fr" v="Région de la mer Noire"/>
  <tag k="name:he" v="מחוז הים השחור"/>
  <tag k="name:hu" v="Fekete-tengeri régió"/>
  <tag k="name:hy" v="Սևծովյան տարածաշրջան"/>
  <tag k="name:it" v="Regione del Mar Nero"/>
  <tag k="name:ja" v="黒海地方"/>
  <tag k="name:ka" v="შავი ზღვის რეგიონი"/>
  <tag k="name:ku" v="Herêma Deryaya Reş"/>
  <tag k="name:nl" v="Zwarte Zeeregio"/>
  <tag k="name:pt" v="Região do Mar Negro"/>
  <tag k="name:ro" v="Regiunea Mării Negre"/>
  <tag k="name:ru" v="Черноморский регион"/>
  <tag k="name:sk" v="Čiernomorský región"/>
  <tag k="name:sl" v="Črno morje"/>
  <tag k="name:sw" v="Kanda ya Bahari Nyeusi"/>
  <tag k="name:tr" v="Karadeniz Bölgesi"/>
  <tag k="name:ug" v="قارا دېڭىز رايونى"/>
  <tag k="name:uk" v="Чорноморський регіон"/>
  <tag k="name:ur" v="بحیرہ اسود علاقہ"/>
  <tag k="name:zh" v="黑海地區"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q155533"/>
  <tag k="wikipedia" v="tr:Karadeniz Bölgesi"/>
 </relation>
 <relation id="1995970" visible="true" version="40" changeset="77707076" timestamp="2019-11-29T05:27:26Z" user="A67-A67" uid="553736">
  <member type="way" ref="147968458" role="outer"/>
  <member type="way" ref="148977328" role="outer"/>
  <member type="way" ref="147960184" role="outer"/>
  <member type="way" ref="147859547" role="outer"/>
  <member type="way" ref="215384299" role="outer"/>
  <member type="way" ref="185305054" role="outer"/>
  <member type="way" ref="148974563" role="outer"/>
  <member type="way" ref="36737725" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="148975272" role="outer"/>
  <member type="way" ref="136477223" role="outer"/>
  <member type="way" ref="148975624" role="outer"/>
  <member type="way" ref="114389584" role="outer"/>
  <member type="way" ref="38426013" role="outer"/>
  <member type="way" ref="120393073" role="outer"/>
  <member type="way" ref="148976126" role="outer"/>
  <member type="way" ref="147966490" role="outer"/>
  <member type="node" ref="160257516" role="admin_centre"/>
  <member type="relation" ref="2009237" role="subarea"/>
  <member type="relation" ref="2009240" role="subarea"/>
  <member type="relation" ref="2009239" role="subarea"/>
  <member type="relation" ref="2009238" role="subarea"/>
  <member type="relation" ref="2009242" role="subarea"/>
  <member type="relation" ref="2009241" role="subarea"/>
  <tag k="admin_level" v="4"/>
  <tag k="alt_name:ku" v="Acaristan;Acarî"/>
  <tag k="boundary" v="administrative"/>
  <tag k="ISO3166-2" v="GE-AJ"/>
  <tag k="name" v="აჭარის ავტონომიური რესპუბლიკა"/>
  <tag k="name:ca" v="Adjària"/>
  <tag k="name:de" v="Autonome Republik Adscharien"/>
  <tag k="name:en" v="Autonomous Republic of Adjara"/>
  <tag k="name:es" v="Ayaria"/>
  <tag k="name:fr" v="Adjarie"/>
  <tag k="name:it" v="Repubblica Autonoma Agiara"/>
  <tag k="name:ka" v="აჭარის ავტონომიური რესპუბლიკა"/>
  <tag k="name:ku" v="Komara Xweserî ya Acaristanê"/>
  <tag k="name:nl" v="Adzjarië"/>
  <tag k="name:ru" v="Аджарская Автономная Республика"/>
  <tag k="name:uk" v="Аджарська Автономна Республіка"/>
  <tag k="population" v="376016"/>
  <tag k="source:population" v="Wikipedia"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q45693"/>
  <tag k="wikipedia" v="ru:Аджария"/>
 </relation>
 <relation id="2009238" visible="true" version="36" changeset="81607038" timestamp="2020-02-28T20:58:16Z" user="Garmin-User" uid="177389">
  <member type="node" ref="540555081" role="admin_centre"/>
  <member type="way" ref="148974171" role="outer"/>
  <member type="way" ref="148974168" role="outer"/>
  <member type="way" ref="114389590" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <member type="way" ref="169081384" role="outer"/>
  <member type="way" ref="175053894" role="outer"/>
  <member type="way" ref="175054881" role="outer"/>
  <member type="way" ref="175054879" role="outer"/>
  <member type="way" ref="126197522" role="outer"/>
  <member type="way" ref="600660217" role="outer"/>
  <member type="way" ref="175055237" role="outer"/>
  <member type="way" ref="175055235" role="outer"/>
  <member type="way" ref="127864543" role="outer"/>
  <member type="way" ref="127864546" role="outer"/>
  <member type="way" ref="175057213" role="outer"/>
  <member type="way" ref="175057202" role="outer"/>
  <member type="way" ref="175057206" role="outer"/>
  <member type="way" ref="175057215" role="outer"/>
  <member type="way" ref="175057201" role="outer"/>
  <member type="way" ref="40091884" role="outer"/>
  <member type="way" ref="175057211" role="outer"/>
  <tag k="admin_level" v="6"/>
  <tag k="boundary" v="administrative"/>
  <tag k="int_name" v="Khelvachauris Raioni"/>
  <tag k="name" v="ხელვაჩაურის რაიონი"/>
  <tag k="name:de" v="Munizipalität Chelwatschauri"/>
  <tag k="name:en" v="Khelvachauri Municipality"/>
  <tag k="name:ka" v="ხელვაჩაურის რაიონი"/>
  <tag k="name:ru" v="Хелвачаурский муниципалитет"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q175786"/>
  <tag k="wikipedia" v="en:Khelvachauri Municipality"/>
 </relation>
 <relation id="2195409" visible="true" version="176" changeset="88774255" timestamp="2020-07-31T09:39:33Z" user="Alkım Ludo Fokseven Özkazanç" uid="3969484">
  <member type="way" ref="758108591" role=""/>
  <member type="way" ref="758108592" role=""/>
  <member type="way" ref="758108590" role=""/>
  <member type="way" ref="230105467" role=""/>
  <member type="way" ref="230105479" role=""/>
  <member type="way" ref="230105475" role=""/>
  <member type="way" ref="230105482" role=""/>
  <member type="way" ref="230105471" role=""/>
  <member type="way" ref="230105483" role=""/>
  <member type="way" ref="230105470" role=""/>
  <member type="way" ref="230105476" role=""/>
  <member type="way" ref="230105468" role=""/>
  <member type="way" ref="230105465" role=""/>
  <member type="way" ref="230112819" role=""/>
  <member type="way" ref="230112818" role=""/>
  <member type="way" ref="307180455" role=""/>
  <member type="way" ref="307180466" role=""/>
  <member type="way" ref="307180465" role=""/>
  <member type="way" ref="307180459" role=""/>
  <member type="way" ref="307180462" role=""/>
  <member type="way" ref="307180463" role=""/>
  <member type="way" ref="307180461" role=""/>
  <member type="way" ref="307180460" role=""/>
  <member type="way" ref="307180456" role=""/>
  <member type="way" ref="307180450" role=""/>
  <member type="way" ref="189264634" role=""/>
  <member type="way" ref="189264631" role=""/>
  <member type="way" ref="189264632" role=""/>
  <member type="way" ref="189264637" role=""/>
  <member type="way" ref="259550823" role=""/>
  <member type="way" ref="259550825" role=""/>
  <member type="way" ref="189260075" role=""/>
  <member type="way" ref="189260080" role=""/>
  <member type="way" ref="189260077" role=""/>
  <member type="way" ref="189260073" role=""/>
  <member type="way" ref="189260082" role=""/>
  <member type="way" ref="189260084" role=""/>
  <member type="way" ref="189260079" role=""/>
  <member type="way" ref="189260086" role=""/>
  <member type="way" ref="157249969" role=""/>
  <member type="way" ref="213202981" role=""/>
  <member type="way" ref="213202985" role=""/>
  <member type="way" ref="213202977" role=""/>
  <member type="way" ref="213202975" role=""/>
  <member type="way" ref="213202980" role=""/>
  <member type="way" ref="213202974" role=""/>
  <member type="way" ref="157249960" role=""/>
  <member type="way" ref="157249997" role=""/>
  <member type="way" ref="157249965" role=""/>
  <member type="way" ref="157249990" role=""/>
  <member type="way" ref="157249981" role=""/>
  <member type="way" ref="307108219" role=""/>
  <member type="way" ref="307108222" role=""/>
  <member type="way" ref="307108212" role=""/>
  <member type="way" ref="307108228" role=""/>
  <member type="way" ref="307108217" role=""/>
  <member type="way" ref="307108210" role=""/>
  <member type="way" ref="71054908" role=""/>
  <member type="way" ref="71054880" role=""/>
  <member type="way" ref="307108227" role=""/>
  <member type="way" ref="307108231" role=""/>
  <member type="way" ref="71054877" role=""/>
  <member type="way" ref="71054882" role=""/>
  <member type="way" ref="330977913" role=""/>
  <member type="way" ref="307108218" role=""/>
  <member type="way" ref="307108209" role=""/>
  <member type="way" ref="307108220" role=""/>
  <member type="way" ref="307108230" role=""/>
  <member type="way" ref="307110355" role=""/>
  <member type="way" ref="307110358" role=""/>
  <member type="way" ref="729345838" role=""/>
  <member type="way" ref="729345839" role=""/>
  <member type="way" ref="496417797" role=""/>
  <member type="way" ref="496417798" role=""/>
  <member type="way" ref="71054890" role=""/>
  <member type="way" ref="71054905" role=""/>
  <member type="way" ref="157284808" role=""/>
  <member type="way" ref="157284824" role=""/>
  <member type="way" ref="230126347" role=""/>
  <member type="way" ref="230126350" role=""/>
  <member type="way" ref="71054881" role=""/>
  <member type="way" ref="71054858" role=""/>
  <member type="way" ref="157284806" role=""/>
  <member type="way" ref="157284793" role=""/>
  <member type="way" ref="92472559" role=""/>
  <member type="way" ref="92472566" role=""/>
  <member type="way" ref="157284818" role=""/>
  <member type="way" ref="157284820" role=""/>
  <member type="way" ref="157284800" role=""/>
  <member type="way" ref="157284810" role=""/>
  <member type="way" ref="108959112" role=""/>
  <member type="way" ref="108959116" role=""/>
  <member type="way" ref="71390700" role=""/>
  <member type="way" ref="92469165" role=""/>
  <member type="way" ref="92469172" role=""/>
  <member type="way" ref="622318182" role=""/>
  <member type="way" ref="622318183" role=""/>
  <member type="way" ref="92470283" role=""/>
  <member type="way" ref="92470291" role=""/>
  <member type="way" ref="92466636" role=""/>
  <member type="way" ref="706570688" role=""/>
  <member type="way" ref="92469160" role=""/>
  <member type="way" ref="706570687" role=""/>
  <member type="way" ref="92466614" role=""/>
  <member type="way" ref="92466637" role=""/>
  <member type="way" ref="92470284" role=""/>
  <member type="way" ref="92470288" role=""/>
  <member type="way" ref="622318184" role=""/>
  <member type="way" ref="622318185" role=""/>
  <member type="way" ref="92469159" role=""/>
  <member type="way" ref="92469168" role=""/>
  <member type="way" ref="312149225" role=""/>
  <member type="way" ref="330999577" role=""/>
  <member type="way" ref="71390737" role=""/>
  <member type="way" ref="108959113" role=""/>
  <member type="way" ref="108959109" role=""/>
  <member type="way" ref="157284789" role=""/>
  <member type="way" ref="157284819" role=""/>
  <member type="way" ref="157284791" role=""/>
  <member type="way" ref="157284814" role=""/>
  <member type="way" ref="92472584" role=""/>
  <member type="way" ref="92472561" role=""/>
  <member type="way" ref="157284803" role=""/>
  <member type="way" ref="157284823" role=""/>
  <member type="way" ref="71390739" role=""/>
  <member type="way" ref="157284794" role=""/>
  <member type="way" ref="230126348" role=""/>
  <member type="way" ref="230126349" role=""/>
  <member type="way" ref="157284816" role=""/>
  <member type="way" ref="157284821" role=""/>
  <member type="way" ref="71390726" role=""/>
  <member type="way" ref="71390740" role=""/>
  <member type="way" ref="496417796" role=""/>
  <member type="way" ref="496417795" role=""/>
  <member type="way" ref="729345836" role=""/>
  <member type="way" ref="330983058" role=""/>
  <member type="way" ref="330983062" role=""/>
  <member type="way" ref="132926602" role=""/>
  <member type="way" ref="132926609" role=""/>
  <member type="way" ref="741312394" role=""/>
  <member type="way" ref="741312393" role=""/>
  <member type="way" ref="741312392" role=""/>
  <member type="way" ref="464298043" role=""/>
  <member type="way" ref="464298038" role=""/>
  <member type="way" ref="475706032" role=""/>
  <member type="way" ref="475706034" role=""/>
  <member type="way" ref="480696842" role=""/>
  <member type="way" ref="480696846" role=""/>
  <member type="way" ref="157249971" role=""/>
  <member type="way" ref="475706039" role=""/>
  <member type="way" ref="475706041" role=""/>
  <member type="way" ref="475706044" role=""/>
  <member type="way" ref="475706048" role=""/>
  <member type="way" ref="230098702" role=""/>
  <member type="way" ref="230098703" role=""/>
  <member type="way" ref="732086879" role=""/>
  <member type="way" ref="732086878" role=""/>
  <member type="way" ref="230098706" role=""/>
  <member type="way" ref="760458991" role=""/>
  <member type="way" ref="760458990" role=""/>
  <member type="way" ref="230098705" role=""/>
  <member type="way" ref="157076032" role=""/>
  <member type="way" ref="230106728" role=""/>
  <member type="way" ref="230106732" role=""/>
  <member type="way" ref="230106741" role=""/>
  <member type="way" ref="230106739" role=""/>
  <member type="way" ref="230106737" role=""/>
  <member type="way" ref="230106361" role=""/>
  <member type="way" ref="230106376" role=""/>
  <member type="way" ref="704810818" role=""/>
  <member type="way" ref="230106357" role=""/>
  <member type="way" ref="230106360" role=""/>
  <member type="way" ref="706574528" role=""/>
  <member type="way" ref="230106730" role=""/>
  <member type="way" ref="230098707" role=""/>
  <member type="way" ref="230098704" role=""/>
  <member type="way" ref="732086881" role=""/>
  <member type="way" ref="760458992" role=""/>
  <member type="way" ref="760458993" role=""/>
  <member type="way" ref="732086880" role=""/>
  <member type="way" ref="191439775" role=""/>
  <member type="way" ref="191439774" role=""/>
  <member type="way" ref="475706054" role=""/>
  <member type="way" ref="475706051" role=""/>
  <member type="way" ref="475706046" role=""/>
  <member type="way" ref="475706040" role=""/>
  <member type="way" ref="475706038" role=""/>
  <member type="way" ref="480696848" role=""/>
  <member type="way" ref="480696849" role=""/>
  <member type="way" ref="475706035" role=""/>
  <member type="way" ref="475706033" role=""/>
  <member type="way" ref="464298039" role=""/>
  <member type="way" ref="464298047" role=""/>
  <member type="way" ref="132924704" role=""/>
  <member type="way" ref="740711067" role=""/>
  <member type="way" ref="132926610" role=""/>
  <member type="way" ref="508036234" role=""/>
  <member type="way" ref="740711068" role=""/>
  <member type="way" ref="209415771" role=""/>
  <member type="way" ref="508036232" role=""/>
  <member type="way" ref="132926601" role=""/>
  <member type="way" ref="132926603" role=""/>
  <member type="way" ref="132926606" role=""/>
  <member type="way" ref="132926611" role=""/>
  <member type="way" ref="132928018" role=""/>
  <member type="way" ref="132928014" role=""/>
  <member type="way" ref="132928020" role=""/>
  <member type="way" ref="132928016" role=""/>
  <member type="way" ref="164534440" role=""/>
  <member type="way" ref="132926608" role=""/>
  <member type="way" ref="135667544" role=""/>
  <member type="way" ref="466240637" role=""/>
  <member type="way" ref="499395217" role=""/>
  <member type="way" ref="499395218" role=""/>
  <member type="way" ref="471117128" role=""/>
  <member type="way" ref="715062002" role=""/>
  <member type="way" ref="713317492" role=""/>
  <member type="way" ref="713317491" role=""/>
  <member type="way" ref="713317490" role=""/>
  <member type="way" ref="484987701" role=""/>
  <member type="way" ref="484987703" role=""/>
  <member type="way" ref="307250965" role=""/>
  <member type="way" ref="307250968" role=""/>
  <member type="way" ref="307250971" role=""/>
  <member type="way" ref="307250969" role=""/>
  <member type="way" ref="48068817" role=""/>
  <member type="way" ref="347315553" role=""/>
  <member type="way" ref="347315550" role=""/>
  <member type="way" ref="53011528" role=""/>
  <member type="way" ref="424820272" role=""/>
  <member type="way" ref="424820274" role=""/>
  <member type="way" ref="569916832" role=""/>
  <member type="way" ref="569916831" role=""/>
  <member type="way" ref="465623281" role=""/>
  <member type="way" ref="465623282" role=""/>
  <member type="way" ref="135783667" role=""/>
  <member type="way" ref="135783635" role=""/>
  <member type="way" ref="135783642" role=""/>
  <member type="way" ref="135783631" role=""/>
  <member type="way" ref="48068819" role=""/>
  <member type="way" ref="230728236" role=""/>
  <member type="way" ref="230728235" role=""/>
  <member type="way" ref="135783645" role=""/>
  <member type="way" ref="135783640" role=""/>
  <member type="way" ref="135783636" role=""/>
  <member type="way" ref="135783663" role=""/>
  <member type="way" ref="135783647" role=""/>
  <member type="way" ref="135783665" role=""/>
  <member type="way" ref="135783661" role=""/>
  <member type="way" ref="135783641" role=""/>
  <member type="way" ref="248463364" role=""/>
  <member type="way" ref="248463365" role=""/>
  <member type="way" ref="628376975" role=""/>
  <member type="way" ref="628376977" role=""/>
  <member type="way" ref="465519835" role=""/>
  <member type="way" ref="465519837" role=""/>
  <member type="way" ref="48068815" role=""/>
  <member type="way" ref="152592554" role=""/>
  <member type="way" ref="152592552" role=""/>
  <member type="way" ref="152592556" role=""/>
  <member type="way" ref="152592555" role=""/>
  <member type="way" ref="248475428" role=""/>
  <member type="way" ref="248475427" role=""/>
  <member type="way" ref="288798451" role=""/>
  <member type="way" ref="288798453" role=""/>
  <member type="way" ref="82283298" role=""/>
  <member type="way" ref="82283296" role=""/>
  <member type="way" ref="755509996" role=""/>
  <member type="way" ref="53015766" role=""/>
  <member type="way" ref="177783558" role=""/>
  <member type="way" ref="177783559" role=""/>
  <member type="way" ref="177783563" role=""/>
  <member type="way" ref="177783568" role=""/>
  <member type="way" ref="177783564" role=""/>
  <member type="way" ref="177783562" role=""/>
  <member type="way" ref="195746370" role=""/>
  <member type="way" ref="195746365" role=""/>
  <member type="way" ref="220285664" role=""/>
  <member type="way" ref="220285665" role=""/>
  <member type="way" ref="59777955" role=""/>
  <member type="way" ref="157111155" role=""/>
  <member type="way" ref="191446757" role=""/>
  <member type="way" ref="191446759" role=""/>
  <member type="way" ref="191446756" role=""/>
  <member type="way" ref="191446758" role=""/>
  <member type="way" ref="191453125" role=""/>
  <member type="way" ref="191453126" role=""/>
  <member type="way" ref="220888325" role=""/>
  <member type="way" ref="220888321" role=""/>
  <member type="way" ref="220888320" role=""/>
  <member type="way" ref="220888327" role=""/>
  <member type="way" ref="220959799" role=""/>
  <member type="way" ref="220959798" role=""/>
  <member type="way" ref="614004453" role=""/>
  <member type="way" ref="614004454" role=""/>
  <member type="way" ref="613459411" role=""/>
  <member type="way" ref="614004458" role=""/>
  <member type="way" ref="614004460" role=""/>
  <member type="way" ref="613459406" role=""/>
  <member type="way" ref="220888331" role=""/>
  <member type="way" ref="220888330" role=""/>
  <member type="way" ref="191468575" role=""/>
  <member type="way" ref="191468569" role=""/>
  <member type="way" ref="610589770" role=""/>
  <member type="way" ref="610589771" role=""/>
  <member type="way" ref="220069824" role=""/>
  <member type="way" ref="220069823" role=""/>
  <member type="way" ref="220888318" role=""/>
  <member type="way" ref="220888328" role=""/>
  <member type="way" ref="220888322" role=""/>
  <member type="way" ref="195746374" role=""/>
  <member type="way" ref="220888346" role=""/>
  <member type="way" ref="195746404" role=""/>
  <member type="way" ref="220888326" role=""/>
  <member type="way" ref="220888323" role=""/>
  <member type="way" ref="220888329" role=""/>
  <member type="way" ref="220888324" role=""/>
  <member type="way" ref="191468571" role=""/>
  <member type="way" ref="191468568" role=""/>
  <member type="way" ref="191468570" role=""/>
  <member type="way" ref="220888340" role=""/>
  <member type="way" ref="390305642" role=""/>
  <member type="way" ref="390305641" role=""/>
  <member type="way" ref="220888341" role=""/>
  <member type="way" ref="573711692" role=""/>
  <member type="way" ref="573711691" role=""/>
  <member type="way" ref="220888348" role=""/>
  <member type="way" ref="220888334" role=""/>
  <member type="way" ref="717912759" role=""/>
  <member type="way" ref="613513030" role=""/>
  <member type="way" ref="220888350" role=""/>
  <member type="way" ref="220888339" role=""/>
  <member type="way" ref="220888343" role=""/>
  <member type="way" ref="573711694" role=""/>
  <member type="way" ref="573711693" role=""/>
  <member type="way" ref="220888349" role=""/>
  <member type="way" ref="390305640" role=""/>
  <member type="way" ref="390305639" role=""/>
  <member type="way" ref="220888342" role=""/>
  <member type="way" ref="191468582" role=""/>
  <member type="way" ref="191468581" role=""/>
  <member type="way" ref="191468579" role=""/>
  <member type="way" ref="220888335" role=""/>
  <member type="way" ref="220888338" role=""/>
  <member type="way" ref="191468576" role=""/>
  <member type="way" ref="191468580" role=""/>
  <member type="way" ref="195746396" role=""/>
  <member type="way" ref="220888347" role=""/>
  <member type="way" ref="195746400" role=""/>
  <member type="way" ref="220888353" role=""/>
  <member type="way" ref="220888333" role=""/>
  <member type="way" ref="220069827" role=""/>
  <member type="way" ref="220069825" role=""/>
  <member type="way" ref="610589769" role=""/>
  <member type="way" ref="191468577" role=""/>
  <member type="way" ref="191468578" role=""/>
  <member type="way" ref="220888332" role=""/>
  <member type="way" ref="220888354" role=""/>
  <member type="way" ref="613513025" role=""/>
  <member type="way" ref="613459420" role=""/>
  <member type="way" ref="613459421" role=""/>
  <member type="way" ref="614004456" role=""/>
  <member type="way" ref="614004457" role=""/>
  <member type="way" ref="613459416" role=""/>
  <member type="way" ref="613459413" role=""/>
  <member type="way" ref="614004451" role=""/>
  <member type="way" ref="614004452" role=""/>
  <member type="way" ref="220959801" role=""/>
  <member type="way" ref="220959800" role=""/>
  <member type="way" ref="220888355" role=""/>
  <member type="way" ref="220888351" role=""/>
  <member type="way" ref="220888337" role=""/>
  <member type="way" ref="220888344" role=""/>
  <member type="way" ref="191453128" role=""/>
  <member type="way" ref="191453129" role=""/>
  <member type="way" ref="191446760" role=""/>
  <member type="way" ref="191446763" role=""/>
  <member type="way" ref="191446764" role=""/>
  <member type="way" ref="191446762" role=""/>
  <member type="way" ref="157111158" role=""/>
  <member type="way" ref="71376575" role=""/>
  <member type="way" ref="220285667" role=""/>
  <member type="way" ref="220285666" role=""/>
  <member type="way" ref="195746367" role=""/>
  <member type="way" ref="195746363" role=""/>
  <member type="way" ref="177783571" role=""/>
  <member type="way" ref="177783569" role=""/>
  <member type="way" ref="177783560" role=""/>
  <member type="way" ref="177783565" role=""/>
  <member type="way" ref="177783566" role=""/>
  <member type="way" ref="177783561" role=""/>
  <member type="way" ref="177783567" role=""/>
  <member type="way" ref="755509994" role=""/>
  <member type="way" ref="82283290" role=""/>
  <member type="way" ref="82283288" role=""/>
  <member type="way" ref="288798450" role=""/>
  <member type="way" ref="288798452" role=""/>
  <member type="way" ref="248475429" role=""/>
  <member type="way" ref="248475430" role=""/>
  <member type="way" ref="152592553" role=""/>
  <member type="way" ref="152592558" role=""/>
  <member type="way" ref="53015767" role=""/>
  <member type="way" ref="152592551" role=""/>
  <member type="way" ref="152592559" role=""/>
  <member type="way" ref="152592560" role=""/>
  <member type="way" ref="220046415" role=""/>
  <member type="way" ref="220046414" role=""/>
  <member type="way" ref="465519838" role=""/>
  <member type="way" ref="465519836" role=""/>
  <member type="way" ref="628376973" role=""/>
  <member type="way" ref="628376974" role=""/>
  <member type="way" ref="250462779" role=""/>
  <member type="way" ref="248463361" role=""/>
  <member type="way" ref="135783632" role=""/>
  <member type="way" ref="135783638" role=""/>
  <member type="way" ref="135783664" role=""/>
  <member type="way" ref="135783666" role=""/>
  <member type="way" ref="135783649" role=""/>
  <member type="way" ref="135783644" role=""/>
  <member type="way" ref="135783634" role=""/>
  <member type="way" ref="135783643" role=""/>
  <member type="way" ref="230728233" role=""/>
  <member type="way" ref="230728234" role=""/>
  <member type="way" ref="135783637" role=""/>
  <member type="way" ref="135783669" role=""/>
  <member type="way" ref="135783662" role=""/>
  <member type="way" ref="135783633" role=""/>
  <member type="way" ref="465623280" role=""/>
  <member type="way" ref="135783639" role=""/>
  <member type="way" ref="569916829" role=""/>
  <member type="way" ref="569916830" role=""/>
  <member type="way" ref="347315552" role=""/>
  <member type="way" ref="424820273" role=""/>
  <member type="way" ref="424820271" role=""/>
  <member type="way" ref="347315551" role=""/>
  <member type="way" ref="53011531" role=""/>
  <member type="way" ref="307250966" role=""/>
  <member type="way" ref="307250970" role=""/>
  <member type="way" ref="307250972" role=""/>
  <member type="way" ref="307250967" role=""/>
  <member type="way" ref="484987699" role=""/>
  <member type="way" ref="484987700" role=""/>
  <member type="way" ref="713317493" role=""/>
  <member type="way" ref="713317489" role=""/>
  <member type="way" ref="713317488" role=""/>
  <member type="way" ref="713317487" role=""/>
  <member type="way" ref="499395219" role=""/>
  <member type="way" ref="499395220" role=""/>
  <member type="way" ref="466240624" role=""/>
  <member type="way" ref="48068818" role=""/>
  <member type="way" ref="135667543" role=""/>
  <member type="way" ref="132928013" role=""/>
  <member type="way" ref="164534441" role=""/>
  <member type="way" ref="132928021" role=""/>
  <member type="way" ref="132928017" role=""/>
  <member type="way" ref="132928019" role=""/>
  <member type="way" ref="132928015" role=""/>
  <member type="way" ref="132926605" role=""/>
  <member type="way" ref="760793639" role=""/>
  <member type="way" ref="132926612" role=""/>
  <member type="way" ref="132926607" role=""/>
  <member type="way" ref="132926604" role=""/>
  <member type="way" ref="508036231" role=""/>
  <member type="way" ref="500296605" role=""/>
  <member type="way" ref="733219472" role=""/>
  <member type="way" ref="706574527" role=""/>
  <member type="way" ref="230106738" role=""/>
  <member type="way" ref="230106363" role=""/>
  <member type="way" ref="230106362" role=""/>
  <member type="way" ref="704810817" role=""/>
  <member type="way" ref="230106359" role=""/>
  <member type="way" ref="230106358" role=""/>
  <member type="way" ref="230105481" role=""/>
  <member type="way" ref="230105469" role=""/>
  <member type="way" ref="230105480" role=""/>
  <member type="way" ref="230105474" role=""/>
  <member type="way" ref="230105485" role=""/>
  <member type="way" ref="230105466" role=""/>
  <member type="way" ref="230105484" role=""/>
  <member type="way" ref="230105472" role=""/>
  <member type="way" ref="230105477" role=""/>
  <member type="way" ref="230105473" role=""/>
  <member type="way" ref="230112820" role=""/>
  <member type="way" ref="230112817" role=""/>
  <member type="way" ref="307180467" role=""/>
  <member type="way" ref="307180464" role=""/>
  <member type="way" ref="131708482" role=""/>
  <member type="way" ref="307180454" role=""/>
  <member type="way" ref="307180458" role=""/>
  <member type="way" ref="307180453" role=""/>
  <member type="way" ref="307180457" role=""/>
  <member type="way" ref="307180452" role=""/>
  <member type="way" ref="307180449" role=""/>
  <member type="way" ref="307180451" role=""/>
  <member type="way" ref="189264636" role=""/>
  <member type="way" ref="189264635" role=""/>
  <member type="way" ref="189264630" role=""/>
  <member type="way" ref="189264633" role=""/>
  <member type="way" ref="407756136" role=""/>
  <member type="way" ref="259550826" role=""/>
  <member type="way" ref="259550824" role=""/>
  <member type="way" ref="189260053" role=""/>
  <member type="way" ref="189260052" role=""/>
  <member type="way" ref="71390722" role=""/>
  <member type="way" ref="189260076" role=""/>
  <member type="way" ref="189260074" role=""/>
  <member type="way" ref="189260081" role=""/>
  <member type="way" ref="189260083" role=""/>
  <member type="way" ref="189260078" role=""/>
  <member type="way" ref="189260085" role=""/>
  <member type="way" ref="213202976" role=""/>
  <member type="way" ref="213202978" role=""/>
  <member type="way" ref="213202984" role=""/>
  <member type="way" ref="213202979" role=""/>
  <member type="way" ref="213202973" role=""/>
  <member type="way" ref="213202982" role=""/>
  <member type="way" ref="157249939" role=""/>
  <member type="way" ref="73812625" role=""/>
  <member type="way" ref="71390713" role=""/>
  <member type="way" ref="213202983" role=""/>
  <member type="way" ref="73812627" role=""/>
  <member type="way" ref="73812629" role=""/>
  <member type="way" ref="307108225" role=""/>
  <member type="way" ref="307108216" role=""/>
  <member type="way" ref="307108223" role=""/>
  <member type="way" ref="307108214" role=""/>
  <member type="way" ref="307108226" role=""/>
  <member type="way" ref="307108213" role=""/>
  <member type="way" ref="71390720" role=""/>
  <member type="way" ref="71390729" role=""/>
  <member type="way" ref="307108224" role=""/>
  <member type="way" ref="307108229" role=""/>
  <member type="way" ref="71390696" role=""/>
  <member type="way" ref="71390736" role=""/>
  <member type="way" ref="307108211" role=""/>
  <member type="way" ref="307108215" role=""/>
  <member type="way" ref="307108208" role=""/>
  <member type="way" ref="307108221" role=""/>
  <member type="way" ref="307110352" role=""/>
  <member type="way" ref="307110353" role=""/>
  <member type="way" ref="729345853" role=""/>
  <member type="way" ref="778562648" role=""/>
  <member type="way" ref="729345840" role=""/>
  <member type="way" ref="613513032" role=""/>
  <member type="way" ref="613513026" role=""/>
  <member type="way" ref="573711696" role=""/>
  <member type="way" ref="613513036" role=""/>
  <member type="way" ref="276589921" role=""/>
  <member type="way" ref="276589920" role=""/>
  <member type="way" ref="276589928" role=""/>
  <member type="way" ref="276589919" role=""/>
  <member type="way" ref="276589925" role=""/>
  <member type="way" ref="276589917" role=""/>
  <member type="way" ref="157111162" role=""/>
  <member type="way" ref="28511586" role=""/>
  <member type="way" ref="539435679" role=""/>
  <member type="way" ref="539435681" role=""/>
  <member type="way" ref="28511584" role=""/>
  <member type="way" ref="277265536" role=""/>
  <member type="way" ref="277265534" role=""/>
  <member type="way" ref="231787741" role=""/>
  <member type="way" ref="220888356" role=""/>
  <member type="way" ref="220888345" role=""/>
  <member type="way" ref="274356309" role=""/>
  <member type="way" ref="274356315" role=""/>
  <member type="way" ref="231787743" role=""/>
  <member type="way" ref="326148260" role=""/>
  <member type="way" ref="326148261" role=""/>
  <member type="way" ref="220888357" role=""/>
  <member type="way" ref="96589962" role=""/>
  <member type="way" ref="96589854" role=""/>
  <member type="way" ref="231787740" role=""/>
  <member type="way" ref="96589951" role=""/>
  <member type="way" ref="96589906" role=""/>
  <member type="way" ref="231787744" role=""/>
  <member type="way" ref="96589918" role=""/>
  <member type="way" ref="96589859" role=""/>
  <member type="way" ref="367784457" role=""/>
  <member type="way" ref="367784454" role=""/>
  <member type="way" ref="96589913" role=""/>
  <member type="way" ref="96589858" role=""/>
  <member type="way" ref="96589960" role=""/>
  <member type="way" ref="186495990" role=""/>
  <member type="way" ref="746446839" role=""/>
  <member type="way" ref="114389589" role=""/>
  <member type="way" ref="114389577" role=""/>
  <member type="way" ref="114389579" role=""/>
  <member type="way" ref="114389578" role=""/>
  <member type="way" ref="114389582" role=""/>
  <member type="way" ref="73827521" role=""/>
  <member type="way" ref="524045828" role=""/>
  <member type="way" ref="524045827" role=""/>
  <member type="way" ref="536651670" role=""/>
  <member type="way" ref="680870202" role=""/>
  <member type="way" ref="680870201" role=""/>
  <member type="way" ref="426106855" role=""/>
  <member type="way" ref="702642883" role=""/>
  <member type="way" ref="276589916" role=""/>
  <member type="way" ref="276589927" role=""/>
  <member type="way" ref="613513037" role=""/>
  <member type="way" ref="276589915" role=""/>
  <member type="way" ref="276589923" role=""/>
  <member type="way" ref="276589918" role=""/>
  <member type="way" ref="276589929" role=""/>
  <member type="way" ref="59740756" role=""/>
  <member type="way" ref="220888352" role=""/>
  <member type="way" ref="539435678" role=""/>
  <member type="way" ref="539435680" role=""/>
  <member type="way" ref="277265535" role=""/>
  <member type="way" ref="277265533" role=""/>
  <member type="way" ref="74294911" role=""/>
  <member type="way" ref="231787738" role=""/>
  <member type="way" ref="73823397" role=""/>
  <member type="way" ref="73823396" role=""/>
  <member type="way" ref="274356312" role=""/>
  <member type="way" ref="274356318" role=""/>
  <member type="way" ref="231787742" role=""/>
  <member type="way" ref="74294932" role=""/>
  <member type="way" ref="326148258" role=""/>
  <member type="way" ref="326148259" role=""/>
  <member type="way" ref="74294929" role=""/>
  <member type="way" ref="96589882" role=""/>
  <member type="way" ref="96589959" role=""/>
  <member type="way" ref="96589920" role=""/>
  <member type="way" ref="231787745" role=""/>
  <member type="way" ref="73823393" role=""/>
  <member type="way" ref="73823399" role=""/>
  <member type="way" ref="231787739" role=""/>
  <member type="way" ref="96589936" role=""/>
  <member type="way" ref="96589903" role=""/>
  <member type="way" ref="367784456" role=""/>
  <member type="way" ref="367784448" role=""/>
  <member type="way" ref="96589924" role=""/>
  <member type="way" ref="96589910" role=""/>
  <member type="way" ref="73827532" role=""/>
  <member type="way" ref="186495988" role=""/>
  <member type="way" ref="277267720" role=""/>
  <member type="way" ref="277267719" role=""/>
  <member type="way" ref="746446842" role=""/>
  <member type="way" ref="746446841" role=""/>
  <member type="way" ref="746446840" role=""/>
  <member type="way" ref="832505575" role=""/>
  <member type="way" ref="559780811" role=""/>
  <member type="way" ref="559780812" role=""/>
  <member type="way" ref="559780809" role=""/>
  <member type="way" ref="559780810" role=""/>
  <member type="way" ref="220069826" role=""/>
  <member type="way" ref="114389593" role=""/>
  <member type="way" ref="114389594" role=""/>
  <member type="way" ref="114389576" role=""/>
  <member type="way" ref="114389592" role=""/>
  <member type="way" ref="114389818" role=""/>
  <member type="way" ref="114389816" role=""/>
  <member type="way" ref="114389812" role=""/>
  <member type="way" ref="114389809" role=""/>
  <member type="way" ref="114389810" role=""/>
  <member type="way" ref="114389805" role=""/>
  <member type="way" ref="114389803" role=""/>
  <member type="way" ref="114389808" role=""/>
  <member type="way" ref="114389804" role=""/>
  <member type="way" ref="114389815" role=""/>
  <member type="way" ref="114389811" role=""/>
  <member type="way" ref="559780808" role=""/>
  <member type="way" ref="426106856" role=""/>
  <member type="way" ref="92466615" role=""/>
  <member type="way" ref="92466518" role=""/>
  <member type="way" ref="302890960" role=""/>
  <member type="way" ref="721574217" role=""/>
  <member type="way" ref="331001789" role=""/>
  <member type="way" ref="331001792" role=""/>
  <member type="way" ref="331001791" role=""/>
  <member type="way" ref="743313427" role=""/>
  <member type="way" ref="743313426" role=""/>
  <member type="way" ref="743313431" role=""/>
  <member type="way" ref="743313430" role=""/>
  <member type="way" ref="71054885" role=""/>
  <member type="way" ref="71054895" role=""/>
  <member type="way" ref="306847183" role=""/>
  <member type="way" ref="306847184" role=""/>
  <member type="way" ref="299675456" role=""/>
  <member type="way" ref="299675459" role=""/>
  <member type="way" ref="484260886" role=""/>
  <member type="way" ref="711300013" role=""/>
  <member type="way" ref="207157840" role=""/>
  <member type="way" ref="711300014" role=""/>
  <member type="way" ref="92466602" role=""/>
  <member type="way" ref="331001790" role=""/>
  <member type="way" ref="721574216" role=""/>
  <member type="way" ref="331001793" role=""/>
  <member type="way" ref="331001794" role=""/>
  <member type="way" ref="331001797" role=""/>
  <member type="way" ref="743313425" role=""/>
  <member type="way" ref="743313424" role=""/>
  <member type="way" ref="743313428" role=""/>
  <member type="way" ref="743313429" role=""/>
  <member type="way" ref="209731939" role=""/>
  <member type="way" ref="71390698" role=""/>
  <member type="way" ref="306847182" role=""/>
  <member type="way" ref="306847181" role=""/>
  <member type="way" ref="299675460" role=""/>
  <member type="way" ref="299675457" role=""/>
  <member type="way" ref="207157837" role=""/>
  <member type="way" ref="189169525" role=""/>
  <member type="way" ref="189169526" role=""/>
  <member type="way" ref="698189052" role=""/>
  <member type="way" ref="512899949" role=""/>
  <member type="way" ref="698189051" role=""/>
  <member type="way" ref="189169527" role=""/>
  <member type="way" ref="71054868" role=""/>
  <member type="way" ref="676423996" role=""/>
  <member type="way" ref="698241775" role=""/>
  <member type="way" ref="71054893" role=""/>
  <member type="way" ref="299675458" role=""/>
  <member type="way" ref="331321182" role=""/>
  <member type="way" ref="693022957" role=""/>
  <member type="way" ref="27663720" role=""/>
  <member type="way" ref="698241774" role=""/>
  <member type="way" ref="558365571" role=""/>
  <member type="way" ref="558365568" role=""/>
  <member type="way" ref="183428193" role=""/>
  <member type="way" ref="183428195" role=""/>
  <member type="way" ref="425580967" role=""/>
  <member type="way" ref="425580969" role=""/>
  <member type="way" ref="554991490" role=""/>
  <member type="way" ref="144876088" role=""/>
  <member type="way" ref="144876082" role=""/>
  <member type="way" ref="504640244" role=""/>
  <member type="way" ref="337604564" role=""/>
  <member type="way" ref="425085766" role=""/>
  <member type="way" ref="506740783" role=""/>
  <member type="way" ref="8009998" role=""/>
  <member type="way" ref="39695603" role=""/>
  <member type="way" ref="429773150" role=""/>
  <member type="way" ref="336720974" role=""/>
  <member type="way" ref="336720970" role=""/>
  <member type="way" ref="213194472" role=""/>
  <member type="way" ref="674893149" role=""/>
  <member type="way" ref="213127830" role=""/>
  <member type="way" ref="213127827" role=""/>
  <member type="way" ref="8009994" role=""/>
  <member type="way" ref="39695649" role=""/>
  <member type="way" ref="698253169" role=""/>
  <member type="way" ref="213128201" role=""/>
  <member type="way" ref="71376581" role=""/>
  <member type="way" ref="698253170" role=""/>
  <member type="way" ref="71376573" role=""/>
  <member type="way" ref="213127836" role=""/>
  <member type="way" ref="213127823" role=""/>
  <member type="way" ref="674893148" role=""/>
  <member type="way" ref="213194474" role=""/>
  <member type="way" ref="336720975" role=""/>
  <member type="way" ref="336720971" role=""/>
  <member type="way" ref="525733691" role=""/>
  <member type="way" ref="420600997" role=""/>
  <member type="way" ref="71376580" role=""/>
  <member type="way" ref="195746495" role=""/>
  <member type="way" ref="506740781" role=""/>
  <member type="way" ref="331462147" role=""/>
  <member type="way" ref="425085782" role=""/>
  <member type="way" ref="425085787" role=""/>
  <member type="way" ref="504640245" role=""/>
  <member type="way" ref="144876079" role=""/>
  <member type="way" ref="144876086" role=""/>
  <member type="way" ref="554991492" role=""/>
  <member type="way" ref="127071918" role=""/>
  <member type="way" ref="8009993" role=""/>
  <member type="way" ref="425580966" role=""/>
  <member type="way" ref="183428192" role=""/>
  <member type="way" ref="183428194" role=""/>
  <member type="way" ref="558365569" role=""/>
  <member type="way" ref="558365570" role=""/>
  <member type="way" ref="425573420" role=""/>
  <member type="way" ref="425085789" role=""/>
  <member type="way" ref="506740778" role=""/>
  <member type="way" ref="692948588" role=""/>
  <member type="way" ref="331321367" role=""/>
  <member type="way" ref="39694062" role=""/>
  <member type="way" ref="331321831" role=""/>
  <member type="way" ref="708428717" role=""/>
  <member type="way" ref="92421900" role=""/>
  <member type="way" ref="92421908" role=""/>
  <member type="way" ref="676653735" role=""/>
  <member type="way" ref="502375307" role=""/>
  <member type="way" ref="178084695" role=""/>
  <member type="way" ref="178084753" role=""/>
  <member type="way" ref="178084704" role=""/>
  <member type="way" ref="178084729" role=""/>
  <member type="way" ref="178084746" role=""/>
  <member type="way" ref="178084705" role=""/>
  <member type="way" ref="178084671" role=""/>
  <member type="way" ref="178084736" role=""/>
  <member type="way" ref="178084645" role=""/>
  <member type="way" ref="178084693" role=""/>
  <member type="way" ref="178084740" role=""/>
  <member type="way" ref="178084712" role=""/>
  <member type="way" ref="178084652" role=""/>
  <member type="way" ref="178084708" role=""/>
  <member type="way" ref="178084745" role=""/>
  <member type="way" ref="178084658" role=""/>
  <member type="way" ref="178084747" role=""/>
  <member type="way" ref="178084697" role=""/>
  <member type="way" ref="178084647" role=""/>
  <member type="way" ref="178084668" role=""/>
  <member type="way" ref="178084677" role=""/>
  <member type="way" ref="178084731" role=""/>
  <member type="way" ref="178084649" role=""/>
  <member type="way" ref="178084688" role=""/>
  <member type="way" ref="178084726" role=""/>
  <member type="way" ref="178084725" role=""/>
  <member type="way" ref="178084714" role=""/>
  <member type="way" ref="178084710" role=""/>
  <member type="way" ref="178084654" role=""/>
  <member type="way" ref="178084718" role=""/>
  <member type="way" ref="178084655" role=""/>
  <member type="way" ref="178084660" role=""/>
  <member type="way" ref="178084672" role=""/>
  <member type="way" ref="178084702" role=""/>
  <member type="way" ref="178084666" role=""/>
  <member type="way" ref="178084698" role=""/>
  <member type="way" ref="178084709" role=""/>
  <member type="way" ref="178084689" role=""/>
  <member type="way" ref="178084699" role=""/>
  <member type="way" ref="178084733" role=""/>
  <member type="way" ref="178084749" role=""/>
  <member type="way" ref="178084657" role=""/>
  <member type="way" ref="178084659" role=""/>
  <member type="way" ref="178084692" role=""/>
  <member type="way" ref="178084684" role=""/>
  <member type="way" ref="178084690" role=""/>
  <member type="way" ref="178084757" role=""/>
  <member type="way" ref="178084719" role=""/>
  <member type="way" ref="178084711" role=""/>
  <member type="way" ref="178084713" role=""/>
  <member type="way" ref="178084715" role=""/>
  <member type="way" ref="178084717" role=""/>
  <member type="way" ref="178084707" role=""/>
  <member type="way" ref="178084686" role=""/>
  <member type="way" ref="178084724" role=""/>
  <member type="way" ref="178084680" role=""/>
  <member type="way" ref="178084670" role=""/>
  <member type="way" ref="178084716" role=""/>
  <member type="way" ref="178084685" role=""/>
  <member type="way" ref="178084664" role=""/>
  <member type="way" ref="178084752" role=""/>
  <member type="way" ref="178084656" role=""/>
  <member type="way" ref="178084646" role=""/>
  <member type="way" ref="178084694" role=""/>
  <member type="way" ref="178084675" role=""/>
  <member type="way" ref="178084679" role=""/>
  <member type="way" ref="178084750" role=""/>
  <member type="way" ref="178084728" role=""/>
  <member type="way" ref="178084644" role=""/>
  <member type="way" ref="178084650" role=""/>
  <member type="way" ref="813552538" role=""/>
  <member type="way" ref="813552539" role=""/>
  <member type="way" ref="53058223" role=""/>
  <member type="way" ref="178084674" role=""/>
  <member type="way" ref="178084758" role=""/>
  <member type="way" ref="178084682" role=""/>
  <member type="way" ref="178084706" role=""/>
  <member type="way" ref="180485535" role=""/>
  <member type="way" ref="71376574" role=""/>
  <member type="way" ref="71376571" role=""/>
  <member type="way" ref="180485537" role=""/>
  <member type="way" ref="180485539" role=""/>
  <member type="way" ref="134374049" role=""/>
  <member type="way" ref="134374051" role=""/>
  <member type="way" ref="189247101" role=""/>
  <member type="way" ref="375768017" role=""/>
  <member type="way" ref="375768016" role=""/>
  <member type="way" ref="486460278" role=""/>
  <member type="way" ref="486460277" role=""/>
  <member type="way" ref="186337731" role=""/>
  <member type="way" ref="189247077" role=""/>
  <member type="way" ref="375761056" role=""/>
  <member type="way" ref="375761055" role=""/>
  <member type="way" ref="189247091" role=""/>
  <member type="way" ref="189247123" role=""/>
  <member type="way" ref="189247111" role=""/>
  <member type="way" ref="189247107" role=""/>
  <member type="way" ref="189247086" role=""/>
  <member type="way" ref="189247098" role=""/>
  <member type="way" ref="189247092" role=""/>
  <member type="way" ref="189247104" role=""/>
  <member type="way" ref="375759338" role=""/>
  <member type="way" ref="134364951" role=""/>
  <member type="way" ref="134364943" role=""/>
  <member type="way" ref="71376570" role=""/>
  <member type="way" ref="331457587" role=""/>
  <member type="way" ref="331457586" role=""/>
  <member type="way" ref="331459272" role=""/>
  <member type="way" ref="691414083" role=""/>
  <member type="way" ref="708428716" role=""/>
  <member type="way" ref="92421901" role=""/>
  <member type="way" ref="92421921" role=""/>
  <member type="way" ref="157285568" role=""/>
  <member type="way" ref="676802913" role=""/>
  <member type="way" ref="676802910" role=""/>
  <member type="way" ref="564757316" role=""/>
  <member type="way" ref="683142040" role=""/>
  <member type="way" ref="676653736" role=""/>
  <member type="way" ref="178084754" role=""/>
  <member type="way" ref="178084667" role=""/>
  <member type="way" ref="178084734" role=""/>
  <member type="way" ref="178084741" role=""/>
  <member type="way" ref="178084687" role=""/>
  <member type="way" ref="178084700" role=""/>
  <member type="way" ref="178084735" role=""/>
  <member type="way" ref="178084759" role=""/>
  <member type="way" ref="178084691" role=""/>
  <member type="way" ref="178084730" role=""/>
  <member type="way" ref="178084727" role=""/>
  <member type="way" ref="178084651" role=""/>
  <member type="way" ref="178084723" role=""/>
  <member type="way" ref="178084744" role=""/>
  <member type="way" ref="178084673" role=""/>
  <member type="way" ref="178084748" role=""/>
  <member type="way" ref="178084663" role=""/>
  <member type="way" ref="178084648" role=""/>
  <member type="way" ref="178084683" role=""/>
  <member type="way" ref="178084703" role=""/>
  <member type="way" ref="178084732" role=""/>
  <member type="way" ref="92419450" role=""/>
  <member type="way" ref="92419430" role=""/>
  <member type="way" ref="178084722" role=""/>
  <member type="way" ref="92420326" role=""/>
  <member type="way" ref="92419436" role=""/>
  <member type="way" ref="92419423" role=""/>
  <member type="way" ref="92420333" role=""/>
  <member type="way" ref="178084676" role=""/>
  <member type="way" ref="178084665" role=""/>
  <member type="way" ref="178084739" role=""/>
  <member type="way" ref="92420334" role=""/>
  <member type="way" ref="92420327" role=""/>
  <member type="way" ref="92419426" role=""/>
  <member type="way" ref="92419420" role=""/>
  <member type="way" ref="178084721" role=""/>
  <member type="way" ref="178084678" role=""/>
  <member type="way" ref="92419442" role=""/>
  <member type="way" ref="92419438" role=""/>
  <member type="way" ref="92419434" role=""/>
  <member type="way" ref="92419432" role=""/>
  <member type="way" ref="92419459" role=""/>
  <member type="way" ref="92419460" role=""/>
  <member type="way" ref="92419433" role=""/>
  <member type="way" ref="92419437" role=""/>
  <member type="way" ref="92419443" role=""/>
  <member type="way" ref="92419428" role=""/>
  <member type="way" ref="92419424" role=""/>
  <member type="way" ref="92419441" role=""/>
  <member type="way" ref="92419429" role=""/>
  <member type="way" ref="92419444" role=""/>
  <member type="way" ref="92419425" role=""/>
  <member type="way" ref="92419422" role=""/>
  <member type="way" ref="92419456" role=""/>
  <member type="way" ref="92419435" role=""/>
  <member type="way" ref="92419431" role=""/>
  <member type="way" ref="92419446" role=""/>
  <member type="way" ref="92419427" role=""/>
  <member type="way" ref="92419421" role=""/>
  <member type="way" ref="92419455" role=""/>
  <member type="way" ref="92419448" role=""/>
  <member type="way" ref="92418912" role=""/>
  <member type="way" ref="92418896" role=""/>
  <member type="way" ref="92418892" role=""/>
  <member type="way" ref="92418905" role=""/>
  <member type="way" ref="178084743" role=""/>
  <member type="way" ref="178084720" role=""/>
  <member type="way" ref="30906756" role=""/>
  <member type="way" ref="813552537" role=""/>
  <member type="way" ref="813552536" role=""/>
  <member type="way" ref="53058219" role=""/>
  <member type="way" ref="178084737" role=""/>
  <member type="way" ref="178084681" role=""/>
  <member type="way" ref="178084755" role=""/>
  <member type="way" ref="178084701" role=""/>
  <member type="way" ref="8010001" role=""/>
  <member type="way" ref="71376577" role=""/>
  <member type="way" ref="71376569" role=""/>
  <member type="way" ref="180485538" role=""/>
  <member type="way" ref="180485536" role=""/>
  <member type="way" ref="134374052" role=""/>
  <member type="way" ref="134374047" role=""/>
  <member type="way" ref="375768026" role=""/>
  <member type="way" ref="375768025" role=""/>
  <member type="way" ref="375768018" role=""/>
  <member type="way" ref="486460279" role=""/>
  <member type="way" ref="486460276" role=""/>
  <member type="way" ref="189247100" role=""/>
  <member type="way" ref="189247087" role=""/>
  <member type="way" ref="189247079" role=""/>
  <member type="way" ref="375761050" role=""/>
  <member type="way" ref="375761045" role=""/>
  <member type="way" ref="189247093" role=""/>
  <member type="way" ref="186337732" role=""/>
  <member type="way" ref="189247119" role=""/>
  <member type="way" ref="189247108" role=""/>
  <member type="way" ref="189247090" role=""/>
  <member type="way" ref="189247096" role=""/>
  <member type="way" ref="189247095" role=""/>
  <member type="way" ref="189247109" role=""/>
  <member type="way" ref="134364947" role=""/>
  <member type="way" ref="134364953" role=""/>
  <member type="way" ref="331457589" role=""/>
  <member type="way" ref="331457588" role=""/>
  <member type="way" ref="331459273" role=""/>
  <member type="way" ref="331459275" role=""/>
  <member type="way" ref="691414082" role=""/>
  <member type="way" ref="189169528" role=""/>
  <member type="way" ref="71390693" role=""/>
  <member type="way" ref="331320224" role=""/>
  <member type="way" ref="698850178" role=""/>
  <member type="way" ref="698850177" role=""/>
  <member type="way" ref="299675453" role=""/>
  <member type="way" ref="299675455" role=""/>
  <member type="way" ref="733219470" role=""/>
  <member type="way" ref="613513029" role=""/>
  <member type="way" ref="702642884" role=""/>
  <member type="way" ref="551975695" role=""/>
  <member type="way" ref="733219471" role=""/>
  <member type="way" ref="299675454" role=""/>
  <member type="way" ref="693022958" role=""/>
  <member type="way" ref="331321366" role=""/>
  <member type="way" ref="331321368" role=""/>
  <member type="way" ref="331459274" role=""/>
  <member type="way" ref="425573428" role=""/>
  <member type="way" ref="88116088" role=""/>
  <member type="way" ref="88116295" role=""/>
  <member type="way" ref="8009991" role=""/>
  <member type="way" ref="498107055" role=""/>
  <member type="way" ref="498107057" role=""/>
  <member type="way" ref="437030675" role=""/>
  <member type="way" ref="553291151" role=""/>
  <member type="way" ref="437032359" role=""/>
  <member type="way" ref="285241645" role=""/>
  <member type="way" ref="250773216" role=""/>
  <member type="way" ref="250773217" role=""/>
  <member type="way" ref="88116291" role=""/>
  <member type="way" ref="88116223" role=""/>
  <member type="way" ref="107107853" role=""/>
  <member type="way" ref="107107858" role=""/>
  <member type="way" ref="107107847" role=""/>
  <member type="way" ref="107107861" role=""/>
  <member type="way" ref="15221658" role=""/>
  <member type="way" ref="425573413" role=""/>
  <member type="way" ref="88116151" role=""/>
  <member type="way" ref="498107054" role=""/>
  <member type="way" ref="498107053" role=""/>
  <member type="way" ref="88116342" role=""/>
  <member type="way" ref="437030676" role=""/>
  <member type="way" ref="437030677" role=""/>
  <member type="way" ref="285241644" role=""/>
  <member type="way" ref="285241639" role=""/>
  <member type="way" ref="250773215" role=""/>
  <member type="way" ref="250773218" role=""/>
  <member type="way" ref="88116149" role=""/>
  <member type="way" ref="106995900" role=""/>
  <member type="way" ref="107107859" role=""/>
  <member type="way" ref="107107844" role=""/>
  <member type="way" ref="107107860" role=""/>
  <member type="way" ref="107107855" role=""/>
  <member type="way" ref="331461803" role=""/>
  <tag k="description" v="E70 - East Turkey"/>
  <tag k="network" v="e-road"/>
  <tag k="ref" v="E 70"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q741488"/>
  <tag k="wikipedia" v="en:European route E70"/>
 </relation>
 <relation id="2195411" visible="true" version="123" changeset="90301520" timestamp="2020-09-02T11:36:46Z" user="Geirangerfjord" uid="10334749">
  <member type="way" ref="544283318" role="forward"/>
  <member type="way" ref="175034770" role="forward"/>
  <member type="way" ref="586590312" role="forward"/>
  <member type="way" ref="441659663" role="forward"/>
  <member type="way" ref="231500674" role=""/>
  <member type="way" ref="416027657" role="forward"/>
  <member type="way" ref="441670936" role="forward"/>
  <member type="way" ref="175036546" role="forward"/>
  <member type="way" ref="544227402" role="forward"/>
  <member type="way" ref="528652339" role="forward"/>
  <member type="way" ref="544284948" role="forward"/>
  <member type="way" ref="544284949" role="forward"/>
  <member type="way" ref="544227403" role="forward"/>
  <member type="way" ref="544298618" role="forward"/>
  <member type="way" ref="231500633" role="forward"/>
  <member type="way" ref="40128640" role=""/>
  <member type="way" ref="439421037" role=""/>
  <member type="way" ref="294404050" role=""/>
  <member type="way" ref="544227406" role=""/>
  <member type="way" ref="544227405" role=""/>
  <member type="way" ref="544284951" role=""/>
  <member type="way" ref="401521973" role=""/>
  <member type="way" ref="401521970" role=""/>
  <member type="way" ref="401521972" role=""/>
  <member type="way" ref="401521971" role=""/>
  <member type="way" ref="401412818" role=""/>
  <member type="way" ref="544284955" role=""/>
  <member type="way" ref="544284953" role=""/>
  <member type="way" ref="123449467" role=""/>
  <member type="way" ref="420091231" role=""/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <member type="way" ref="115656359" role=""/>
  <member type="way" ref="536644503" role=""/>
  <member type="way" ref="536644502" role=""/>
  <member type="way" ref="588581937" role=""/>
  <member type="way" ref="588888108" role=""/>
  <member type="way" ref="654398327" role=""/>
  <member type="way" ref="174921086" role="forward"/>
  <member type="way" ref="544320747" role="forward"/>
  <member type="way" ref="734942291" role="forward"/>
  <member type="way" ref="127301041" role=""/>
  <member type="way" ref="120126078" role=""/>
  <member type="way" ref="30529198" role=""/>
  <member type="way" ref="333354143" role=""/>
  <member type="way" ref="333354144" role=""/>
  <member type="way" ref="333354146" role=""/>
  <member type="way" ref="333354145" role=""/>
  <member type="way" ref="616795645" role=""/>
  <member type="way" ref="616795637" role=""/>
  <member type="way" ref="616795648" role=""/>
  <member type="way" ref="120171983" role="forward"/>
  <member type="way" ref="101179115" role=""/>
  <member type="way" ref="101179194" role=""/>
  <member type="way" ref="101184972" role=""/>
  <member type="way" ref="120171984" role=""/>
  <member type="way" ref="93419734" role=""/>
  <member type="way" ref="93419733" role=""/>
  <member type="way" ref="93187598" role=""/>
  <member type="way" ref="442147771" role=""/>
  <member type="way" ref="93187600" role=""/>
  <member type="way" ref="516939711" role=""/>
  <member type="way" ref="516939710" role=""/>
  <member type="way" ref="26343349" role=""/>
  <member type="way" ref="442147772" role=""/>
  <member type="way" ref="28087693" role=""/>
  <member type="way" ref="28087694" role=""/>
  <member type="way" ref="630216979" role=""/>
  <member type="way" ref="102254972" role=""/>
  <member type="way" ref="102254668" role=""/>
  <member type="way" ref="27120571" role=""/>
  <member type="way" ref="28087677" role=""/>
  <member type="way" ref="332916538" role=""/>
  <member type="way" ref="332916537" role=""/>
  <member type="way" ref="120284871" role=""/>
  <member type="way" ref="93181179" role="forward"/>
  <member type="way" ref="76559022" role="forward"/>
  <member type="way" ref="76559023" role="forward"/>
  <member type="way" ref="93180525" role=""/>
  <member type="way" ref="633894244" role=""/>
  <member type="way" ref="303742596" role=""/>
  <member type="way" ref="293854556" role=""/>
  <member type="way" ref="549400935" role=""/>
  <member type="way" ref="453743050" role=""/>
  <member type="way" ref="700425379" role=""/>
  <member type="way" ref="432060111" role=""/>
  <member type="way" ref="453743041" role=""/>
  <member type="way" ref="453743042" role=""/>
  <member type="way" ref="453743043" role=""/>
  <member type="way" ref="453743044" role=""/>
  <member type="way" ref="453743045" role=""/>
  <member type="way" ref="453743046" role=""/>
  <member type="way" ref="453743047" role=""/>
  <member type="way" ref="453743048" role=""/>
  <member type="way" ref="453743034" role=""/>
  <member type="way" ref="453743033" role=""/>
  <member type="way" ref="553734111" role=""/>
  <member type="way" ref="453743036" role=""/>
  <member type="way" ref="453743039" role=""/>
  <member type="way" ref="453743038" role=""/>
  <member type="way" ref="661694194" role=""/>
  <member type="way" ref="661694193" role=""/>
  <member type="way" ref="453743025" role=""/>
  <member type="way" ref="453743026" role=""/>
  <member type="way" ref="453743028" role=""/>
  <member type="way" ref="453743040" role=""/>
  <member type="way" ref="453743029" role=""/>
  <member type="way" ref="453743023" role=""/>
  <member type="way" ref="661694192" role=""/>
  <member type="way" ref="712450072" role=""/>
  <member type="way" ref="453743032" role=""/>
  <member type="way" ref="453743037" role=""/>
  <member type="way" ref="724088846" role=""/>
  <member type="way" ref="437768635" role=""/>
  <member type="way" ref="295735361" role=""/>
  <member type="way" ref="295735362" role=""/>
  <member type="way" ref="724088842" role=""/>
  <member type="way" ref="514129474" role=""/>
  <member type="way" ref="458288066" role=""/>
  <member type="way" ref="458288075" role=""/>
  <member type="way" ref="215187991" role=""/>
  <member type="way" ref="297726005" role=""/>
  <member type="way" ref="297726004" role=""/>
  <member type="way" ref="297726003" role=""/>
  <member type="way" ref="297726006" role=""/>
  <member type="way" ref="297726002" role=""/>
  <member type="way" ref="297726001" role=""/>
  <member type="way" ref="297726000" role=""/>
  <member type="way" ref="297725998" role=""/>
  <member type="way" ref="297725997" role=""/>
  <member type="way" ref="297725999" role=""/>
  <member type="way" ref="245659296" role=""/>
  <member type="way" ref="245659295" role=""/>
  <member type="way" ref="297726007" role=""/>
  <member type="way" ref="297725996" role=""/>
  <member type="way" ref="294042058" role=""/>
  <member type="way" ref="596137524" role=""/>
  <member type="way" ref="544222582" role=""/>
  <member type="way" ref="547296513" role=""/>
  <member type="way" ref="123449468" role=""/>
  <member type="way" ref="544284952" role=""/>
  <member type="way" ref="544284954" role=""/>
  <member type="way" ref="398318156" role=""/>
  <member type="way" ref="130730799" role=""/>
  <member type="way" ref="130730800" role=""/>
  <member type="way" ref="120226281" role=""/>
  <member type="way" ref="120226276" role=""/>
  <member type="way" ref="127872358" role=""/>
  <member type="way" ref="544284950" role=""/>
  <member type="way" ref="231500636" role=""/>
  <member type="way" ref="656699860" role=""/>
  <member type="way" ref="401406278" role=""/>
  <member type="way" ref="586598837" role=""/>
  <member type="way" ref="498205745" role=""/>
  <member type="way" ref="586598838" role=""/>
  <member type="way" ref="544227407" role=""/>
  <member type="way" ref="426106733" role=""/>
  <member type="way" ref="836137773" role=""/>
  <member type="way" ref="536644499" role=""/>
  <member type="way" ref="536644498" role=""/>
  <member type="way" ref="173623564" role=""/>
  <member type="way" ref="642079702" role="forward"/>
  <member type="way" ref="93180515" role="forward"/>
  <member type="way" ref="93180519" role="forward"/>
  <member type="way" ref="93180509" role="forward"/>
  <member type="way" ref="591431170" role=""/>
  <member type="way" ref="93301488" role=""/>
  <member type="way" ref="93301489" role=""/>
  <member type="way" ref="543782244" role=""/>
  <member type="way" ref="118317322" role=""/>
  <member type="way" ref="118317231" role=""/>
  <member type="way" ref="543780211" role=""/>
  <member type="way" ref="120223290" role=""/>
  <member type="way" ref="79524344" role=""/>
  <member type="way" ref="79524357" role=""/>
  <member type="way" ref="175050848" role=""/>
  <member type="way" ref="591998658" role=""/>
  <member type="way" ref="654398328" role=""/>
  <member type="way" ref="654398329" role=""/>
  <member type="way" ref="392557605" role=""/>
  <member type="way" ref="588575476" role=""/>
  <member type="way" ref="588888105" role=""/>
  <member type="way" ref="175034766" role="forward"/>
  <member type="way" ref="547264534" role="forward"/>
  <member type="way" ref="546274622" role="forward"/>
  <member type="way" ref="821114305" role=""/>
  <member type="way" ref="34910875" role="forward"/>
  <member type="way" ref="441670935" role="forward"/>
  <member type="way" ref="416027656" role="forward"/>
  <member type="way" ref="547440067" role="forward"/>
  <member type="way" ref="119276433" role="forward"/>
  <member type="way" ref="441670933" role="forward"/>
  <member type="way" ref="441670932" role="forward"/>
  <member type="way" ref="511895472" role="forward"/>
  <member type="way" ref="511895470" role="forward"/>
  <member type="way" ref="175045379" role="forward"/>
  <member type="way" ref="606737751" role=""/>
  <member type="way" ref="623290760" role=""/>
  <member type="way" ref="712452981" role=""/>
  <member type="way" ref="597745917" role=""/>
  <member type="way" ref="606737759" role=""/>
  <member type="way" ref="175029421" role="forward"/>
  <member type="way" ref="294404051" role="forward"/>
  <member type="way" ref="123451992" role="forward"/>
  <member type="way" ref="130629480" role="forward"/>
  <member type="way" ref="408237219" role=""/>
  <member type="way" ref="123451996" role=""/>
  <member type="way" ref="544150346" role="forward"/>
  <member type="way" ref="481989074" role=""/>
  <member type="way" ref="734942289" role=""/>
  <member type="way" ref="544150347" role="forward"/>
  <member type="way" ref="414985586" role="forward"/>
  <member type="way" ref="96046859" role="forward"/>
  <member type="way" ref="441659646" role="forward"/>
  <member type="way" ref="294404052" role="forward"/>
  <member type="way" ref="543780209" role=""/>
  <member type="way" ref="543780208" role=""/>
  <member type="way" ref="543780210" role=""/>
  <member type="way" ref="442147767" role=""/>
  <member type="way" ref="442147760" role="forward"/>
  <member type="way" ref="712452977" role="forward"/>
  <member type="way" ref="130629279" role="forward"/>
  <member type="way" ref="511895469" role="forward"/>
  <member type="way" ref="511895471" role="forward"/>
  <member type="way" ref="119276390" role="forward"/>
  <member type="way" ref="119276415" role="forward"/>
  <member type="way" ref="442147761" role="forward"/>
  <member type="way" ref="544320746" role="forward"/>
  <member type="way" ref="174921087" role="forward"/>
  <member type="way" ref="543779008" role="forward"/>
  <member type="way" ref="734942292" role=""/>
  <tag k="description" v="E70 - Georgia"/>
  <tag k="network" v="e-road"/>
  <tag k="ref" v="E 70"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q741488"/>
  <tag k="wikipedia" v="en:European route E70"/>
 </relation>
 <relation id="3346319" visible="true" version="631" changeset="90301520" timestamp="2020-09-02T11:36:46Z" user="Geirangerfjord" uid="10334749">
  <member type="way" ref="825184425" role=""/>
  <member type="way" ref="808634299" role=""/>
  <member type="way" ref="808634298" role=""/>
  <member type="way" ref="808634302" role=""/>
  <member type="way" ref="575265615" role=""/>
  <member type="way" ref="694957626" role=""/>
  <member type="way" ref="808634322" role=""/>
  <member type="way" ref="808634321" role=""/>
  <member type="way" ref="808634334" role=""/>
  <member type="way" ref="808634324" role=""/>
  <member type="way" ref="808634325" role=""/>
  <member type="way" ref="808634343" role=""/>
  <member type="way" ref="808634350" role=""/>
  <member type="way" ref="808634347" role=""/>
  <member type="way" ref="808634346" role=""/>
  <member type="way" ref="808634291" role=""/>
  <member type="way" ref="808634290" role=""/>
  <member type="way" ref="808634269" role=""/>
  <member type="way" ref="808634271" role=""/>
  <member type="way" ref="808634273" role=""/>
  <member type="way" ref="808634276" role=""/>
  <member type="way" ref="808634277" role=""/>
  <member type="way" ref="808634280" role=""/>
  <member type="way" ref="808634279" role=""/>
  <member type="way" ref="808634287" role=""/>
  <member type="way" ref="694957616" role=""/>
  <member type="way" ref="808634286" role=""/>
  <member type="way" ref="808634288" role=""/>
  <member type="way" ref="694957609" role="forward"/>
  <member type="way" ref="493400015" role="forward"/>
  <member type="way" ref="714353398" role="forward"/>
  <member type="way" ref="699355548" role="forward"/>
  <member type="way" ref="699355549" role="forward"/>
  <member type="way" ref="699355551" role="forward"/>
  <member type="way" ref="699355550" role="forward"/>
  <member type="way" ref="575090726" role="forward"/>
  <member type="way" ref="599427370" role="forward"/>
  <member type="way" ref="575083999" role="forward"/>
  <member type="way" ref="585588044" role="forward"/>
  <member type="way" ref="724667117" role="forward"/>
  <member type="way" ref="646231520" role="forward"/>
  <member type="way" ref="768609301" role="forward"/>
  <member type="way" ref="563816553" role="forward"/>
  <member type="way" ref="563816551" role="forward"/>
  <member type="way" ref="416511890" role="forward"/>
  <member type="way" ref="416518593" role="forward"/>
  <member type="way" ref="416518591" role="forward"/>
  <member type="way" ref="645736324" role="forward"/>
  <member type="way" ref="645736318" role="forward"/>
  <member type="way" ref="645736317" role="forward"/>
  <member type="way" ref="645736322" role="forward"/>
  <member type="way" ref="645736321" role="forward"/>
  <member type="way" ref="757841180" role="forward"/>
  <member type="way" ref="757841179" role="forward"/>
  <member type="way" ref="645736326" role="forward"/>
  <member type="way" ref="367436661" role="forward"/>
  <member type="way" ref="367436657" role="forward"/>
  <member type="way" ref="706974889" role="forward"/>
  <member type="way" ref="706974890" role="forward"/>
  <member type="way" ref="246990228" role="forward"/>
  <member type="way" ref="706974895" role="forward"/>
  <member type="way" ref="668866602" role=""/>
  <member type="way" ref="575265600" role=""/>
  <member type="way" ref="694957620" role=""/>
  <member type="way" ref="717935768" role=""/>
  <member type="way" ref="717935766" role=""/>
  <member type="way" ref="694957621" role=""/>
  <member type="way" ref="694957623" role=""/>
  <member type="way" ref="694957622" role=""/>
  <member type="way" ref="808634345" role=""/>
  <member type="way" ref="808634344" role=""/>
  <member type="way" ref="694957624" role=""/>
  <member type="way" ref="575265610" role=""/>
  <member type="way" ref="575265607" role=""/>
  <member type="way" ref="808634326" role=""/>
  <member type="way" ref="808634327" role=""/>
  <member type="way" ref="575265609" role=""/>
  <member type="way" ref="800543786" role=""/>
  <member type="way" ref="800543787" role=""/>
  <member type="way" ref="575265613" role=""/>
  <member type="way" ref="575265627" role=""/>
  <member type="way" ref="808634301" role=""/>
  <member type="way" ref="808634300" role=""/>
  <member type="way" ref="575265618" role="forward"/>
  <member type="way" ref="575265619" role="backward"/>
  <member type="way" ref="694957608" role="forward"/>
  <member type="way" ref="699355545" role="forward"/>
  <member type="way" ref="699355546" role="forward"/>
  <member type="way" ref="699355547" role="forward"/>
  <member type="way" ref="575090725" role="forward"/>
  <member type="way" ref="575083998" role="forward"/>
  <member type="way" ref="416524217" role="forward"/>
  <member type="way" ref="585588043" role="forward"/>
  <member type="way" ref="646231510" role="forward"/>
  <member type="way" ref="646231515" role="forward"/>
  <member type="way" ref="768609302" role="forward"/>
  <member type="way" ref="563816552" role="forward"/>
  <member type="way" ref="344983794" role="forward"/>
  <member type="way" ref="829956019" role="forward"/>
  <member type="way" ref="829956014" role="forward"/>
  <member type="way" ref="829956015" role="forward"/>
  <member type="way" ref="829956018" role="forward"/>
  <member type="way" ref="416518592" role="forward"/>
  <member type="way" ref="416518590" role="forward"/>
  <member type="way" ref="645736323" role="forward"/>
  <member type="way" ref="645736316" role="forward"/>
  <member type="way" ref="645736315" role="forward"/>
  <member type="way" ref="645736319" role="forward"/>
  <member type="way" ref="645736320" role="forward"/>
  <member type="way" ref="645736325" role="forward"/>
  <member type="way" ref="757841181" role="forward"/>
  <member type="way" ref="757841178" role="forward"/>
  <member type="way" ref="367436660" role="forward"/>
  <member type="way" ref="367436653" role="forward"/>
  <member type="way" ref="706974891" role="forward"/>
  <member type="way" ref="706974892" role="forward"/>
  <member type="way" ref="706974888" role="forward"/>
  <member type="way" ref="706974887" role="forward"/>
  <member type="way" ref="575083997" role="forward"/>
  <member type="way" ref="660914147" role=""/>
  <member type="way" ref="513331950" role=""/>
  <member type="way" ref="575074808" role=""/>
  <member type="way" ref="812603270" role=""/>
  <member type="way" ref="812603265" role=""/>
  <member type="way" ref="812603267" role=""/>
  <member type="way" ref="812603266" role=""/>
  <member type="way" ref="575285995" role=""/>
  <member type="way" ref="246989523" role=""/>
  <member type="way" ref="582342527" role=""/>
  <member type="way" ref="401332060" role=""/>
  <member type="way" ref="246989525" role=""/>
  <member type="way" ref="22171707" role=""/>
  <member type="way" ref="401332054" role=""/>
  <member type="way" ref="22171622" role=""/>
  <member type="way" ref="706657960" role=""/>
  <member type="way" ref="246989524" role=""/>
  <member type="way" ref="575285996" role=""/>
  <member type="way" ref="338359771" role=""/>
  <member type="way" ref="401337095" role=""/>
  <member type="way" ref="575285997" role=""/>
  <member type="way" ref="410590115" role="forward"/>
  <member type="way" ref="813433482" role="forward"/>
  <member type="way" ref="813433483" role="forward"/>
  <member type="way" ref="813433484" role="forward"/>
  <member type="way" ref="813433485" role="forward"/>
  <member type="way" ref="813433486" role="forward"/>
  <member type="way" ref="683976082" role="forward"/>
  <member type="way" ref="683976083" role="forward"/>
  <member type="way" ref="813433481" role="forward"/>
  <member type="way" ref="653560620" role="forward"/>
  <member type="way" ref="628214519" role="forward"/>
  <member type="way" ref="683976084" role="forward"/>
  <member type="way" ref="683976085" role="forward"/>
  <member type="way" ref="575285998" role=""/>
  <member type="way" ref="813439342" role=""/>
  <member type="way" ref="130847369" role=""/>
  <member type="way" ref="401346159" role=""/>
  <member type="way" ref="401346158" role=""/>
  <member type="way" ref="401346161" role=""/>
  <member type="way" ref="683454124" role=""/>
  <member type="way" ref="310986648" role=""/>
  <member type="way" ref="401346162" role=""/>
  <member type="way" ref="310986645" role=""/>
  <member type="way" ref="401346160" role=""/>
  <member type="way" ref="130847372" role=""/>
  <member type="way" ref="411675660" role=""/>
  <member type="way" ref="130847371" role=""/>
  <member type="way" ref="232473351" role=""/>
  <member type="way" ref="375092106" role=""/>
  <member type="way" ref="401347860" role=""/>
  <member type="way" ref="401349187" role=""/>
  <member type="way" ref="375092107" role=""/>
  <member type="way" ref="401350532" role=""/>
  <member type="way" ref="130847370" role=""/>
  <member type="way" ref="401377299" role=""/>
  <member type="way" ref="80265587" role=""/>
  <member type="way" ref="401569122" role=""/>
  <member type="way" ref="813882494" role=""/>
  <member type="way" ref="411697558" role=""/>
  <member type="way" ref="401569121" role=""/>
  <member type="way" ref="401571173" role=""/>
  <member type="way" ref="679684397" role=""/>
  <member type="way" ref="401571174" role=""/>
  <member type="way" ref="828749627" role=""/>
  <member type="way" ref="679684395" role=""/>
  <member type="way" ref="679794949" role=""/>
  <member type="way" ref="80265586" role=""/>
  <member type="way" ref="828749628" role=""/>
  <member type="way" ref="226353763" role=""/>
  <member type="way" ref="700406087" role=""/>
  <member type="way" ref="700406088" role=""/>
  <member type="way" ref="700404458" role=""/>
  <member type="way" ref="700404460" role=""/>
  <member type="way" ref="191197628" role=""/>
  <member type="way" ref="191197632" role=""/>
  <member type="way" ref="679684402" role=""/>
  <member type="way" ref="191197627" role=""/>
  <member type="way" ref="442737270" role=""/>
  <member type="way" ref="191197626" role=""/>
  <member type="way" ref="442737269" role=""/>
  <member type="way" ref="22323252" role="forward"/>
  <member type="way" ref="757222681" role="forward"/>
  <member type="way" ref="40705941" role="forward"/>
  <member type="way" ref="54046013" role="forward"/>
  <member type="way" ref="294207452" role="forward"/>
  <member type="way" ref="22323228" role="forward"/>
  <member type="way" ref="294207451" role="forward"/>
  <member type="way" ref="40422128" role="forward"/>
  <member type="way" ref="192679977" role=""/>
  <member type="way" ref="313351528" role=""/>
  <member type="way" ref="313351638" role=""/>
  <member type="way" ref="192679975" role=""/>
  <member type="way" ref="191202823" role=""/>
  <member type="way" ref="27068795" role="forward"/>
  <member type="way" ref="821114305" role=""/>
  <member type="way" ref="231500674" role=""/>
  <member type="way" ref="118181459" role="forward"/>
  <member type="way" ref="186894418" role="forward"/>
  <member type="way" ref="118181550" role="forward"/>
  <member type="way" ref="118181462" role="forward"/>
  <member type="way" ref="262899077" role="forward"/>
  <member type="way" ref="262899555" role="forward"/>
  <member type="way" ref="118181479" role="forward"/>
  <member type="way" ref="36356265" role=""/>
  <member type="way" ref="118181523" role="forward"/>
  <member type="way" ref="377780456" role="forward"/>
  <member type="way" ref="173668707" role="forward"/>
  <member type="way" ref="228552464" role="forward"/>
  <member type="way" ref="119440278" role="forward"/>
  <member type="way" ref="118181474" role="forward"/>
  <member type="way" ref="73868701" role=""/>
  <member type="way" ref="4424659" role=""/>
  <member type="way" ref="129116726" role=""/>
  <member type="way" ref="125045348" role=""/>
  <member type="way" ref="125018050" role=""/>
  <member type="way" ref="129116730" role=""/>
  <member type="way" ref="187812297" role=""/>
  <member type="way" ref="734896813" role=""/>
  <member type="way" ref="734896812" role=""/>
  <member type="way" ref="125018051" role=""/>
  <member type="way" ref="185268190" role=""/>
  <member type="way" ref="185268189" role=""/>
  <member type="way" ref="36356513" role=""/>
  <member type="way" ref="186957876" role=""/>
  <member type="way" ref="186957875" role=""/>
  <member type="way" ref="266343674" role=""/>
  <member type="way" ref="266343673" role=""/>
  <member type="way" ref="129672958" role=""/>
  <member type="way" ref="315129231" role=""/>
  <member type="way" ref="791013309" role=""/>
  <member type="way" ref="295641650" role=""/>
  <member type="way" ref="96932508" role=""/>
  <member type="way" ref="96932509" role="forward"/>
  <member type="way" ref="96932507" role="forward"/>
  <member type="way" ref="187816512" role=""/>
  <member type="way" ref="119440272" role=""/>
  <member type="way" ref="142817998" role="forward"/>
  <member type="way" ref="692182700" role="forward"/>
  <member type="way" ref="692182709" role="forward"/>
  <member type="way" ref="692182708" role="forward"/>
  <member type="way" ref="38197272" role="forward"/>
  <member type="way" ref="142817996" role="forward"/>
  <member type="way" ref="692182702" role="forward"/>
  <member type="way" ref="692182703" role="forward"/>
  <member type="way" ref="692182704" role="forward"/>
  <member type="way" ref="692182706" role="forward"/>
  <member type="way" ref="692182707" role="forward"/>
  <member type="way" ref="219153230" role="forward"/>
  <member type="way" ref="302083651" role=""/>
  <member type="way" ref="257564959" role=""/>
  <member type="way" ref="90630078" role=""/>
  <member type="way" ref="186951435" role=""/>
  <member type="way" ref="90843334" role=""/>
  <member type="way" ref="187501546" role=""/>
  <member type="way" ref="187501547" role=""/>
  <member type="way" ref="187501548" role=""/>
  <member type="way" ref="36355462" role=""/>
  <member type="way" ref="35649470" role="forward"/>
  <member type="way" ref="96267569" role="forward"/>
  <member type="way" ref="481870058" role="forward"/>
  <member type="way" ref="481870059" role="forward"/>
  <member type="way" ref="96267572" role="forward"/>
  <member type="way" ref="35649477" role="forward"/>
  <member type="way" ref="172138469" role=""/>
  <member type="way" ref="96267537" role=""/>
  <member type="way" ref="96267538" role=""/>
  <member type="way" ref="34536005" role=""/>
  <member type="way" ref="23484589" role=""/>
  <member type="way" ref="265607571" role=""/>
  <member type="way" ref="265607582" role=""/>
  <member type="way" ref="96273521" role=""/>
  <member type="way" ref="309043723" role=""/>
  <member type="way" ref="763841420" role=""/>
  <member type="way" ref="763841419" role=""/>
  <member type="way" ref="309043722" role=""/>
  <member type="way" ref="96167568" role=""/>
  <member type="way" ref="96167565" role=""/>
  <member type="way" ref="614579457" role="forward"/>
  <member type="way" ref="53003789" role="forward"/>
  <member type="way" ref="53003787" role="forward"/>
  <member type="way" ref="730317007" role="forward"/>
  <member type="way" ref="132930786" role="forward"/>
  <member type="way" ref="132930771" role="forward"/>
  <member type="way" ref="730317008" role="forward"/>
  <member type="way" ref="132930837" role="forward"/>
  <member type="way" ref="464630046" role="forward"/>
  <member type="way" ref="464630047" role="forward"/>
  <member type="way" ref="132930761" role="forward"/>
  <member type="way" ref="132926608" role="forward"/>
  <member type="way" ref="135667544" role="forward"/>
  <member type="way" ref="466240637" role="forward"/>
  <member type="way" ref="499395217" role="forward"/>
  <member type="way" ref="499395218" role="forward"/>
  <member type="way" ref="471117128" role="forward"/>
  <member type="way" ref="715062002" role="forward"/>
  <member type="way" ref="713317492" role=""/>
  <member type="way" ref="713317491" role=""/>
  <member type="way" ref="713317490" role=""/>
  <member type="way" ref="713317487" role=""/>
  <member type="way" ref="713317488" role=""/>
  <member type="way" ref="713317489" role=""/>
  <member type="way" ref="713317493" role="forward"/>
  <member type="way" ref="484987700" role="forward"/>
  <member type="way" ref="484987699" role="forward"/>
  <member type="way" ref="307250967" role="forward"/>
  <member type="way" ref="307250972" role="forward"/>
  <member type="way" ref="307250970" role="forward"/>
  <member type="way" ref="307250966" role="forward"/>
  <member type="way" ref="53011531" role="forward"/>
  <member type="way" ref="347315551" role="forward"/>
  <member type="way" ref="424820271" role="forward"/>
  <member type="way" ref="424820273" role="forward"/>
  <member type="way" ref="347315552" role="forward"/>
  <member type="way" ref="569916830" role="forward"/>
  <member type="way" ref="569916829" role="forward"/>
  <member type="way" ref="135783639" role="forward"/>
  <member type="way" ref="465623280" role="forward"/>
  <member type="way" ref="135783633" role="forward"/>
  <member type="way" ref="135783662" role="forward"/>
  <member type="way" ref="135783669" role="forward"/>
  <member type="way" ref="135783637" role="forward"/>
  <member type="way" ref="230728234" role="forward"/>
  <member type="way" ref="230728233" role="forward"/>
  <member type="way" ref="135783643" role="forward"/>
  <member type="way" ref="135783634" role="forward"/>
  <member type="way" ref="135783644" role="forward"/>
  <member type="way" ref="135783649" role="forward"/>
  <member type="way" ref="135783666" role="forward"/>
  <member type="way" ref="135783664" role="forward"/>
  <member type="way" ref="135783638" role="forward"/>
  <member type="way" ref="135783632" role="forward"/>
  <member type="way" ref="248463361" role="forward"/>
  <member type="way" ref="250462779" role="forward"/>
  <member type="way" ref="628376974" role="forward"/>
  <member type="way" ref="628376973" role="forward"/>
  <member type="way" ref="465519836" role="forward"/>
  <member type="way" ref="465519838" role="forward"/>
  <member type="way" ref="220046414" role="forward"/>
  <member type="way" ref="220046415" role="forward"/>
  <member type="way" ref="152592560" role="forward"/>
  <member type="way" ref="152592559" role="forward"/>
  <member type="way" ref="152592551" role="forward"/>
  <member type="way" ref="53015767" role="forward"/>
  <member type="way" ref="152592558" role="forward"/>
  <member type="way" ref="152592553" role="forward"/>
  <member type="way" ref="248475430" role="forward"/>
  <member type="way" ref="248475429" role="forward"/>
  <member type="way" ref="288798452" role="forward"/>
  <member type="way" ref="288798450" role="forward"/>
  <member type="way" ref="82283288" role="forward"/>
  <member type="way" ref="82283290" role="forward"/>
  <member type="way" ref="755509994" role="forward"/>
  <member type="way" ref="177783567" role="forward"/>
  <member type="way" ref="177783561" role="forward"/>
  <member type="way" ref="177783566" role="forward"/>
  <member type="way" ref="177783565" role="forward"/>
  <member type="way" ref="177783560" role="forward"/>
  <member type="way" ref="177783569" role="forward"/>
  <member type="way" ref="177783571" role="forward"/>
  <member type="way" ref="195746363" role="forward"/>
  <member type="way" ref="195746367" role="forward"/>
  <member type="way" ref="220285666" role="forward"/>
  <member type="way" ref="220285667" role="forward"/>
  <member type="way" ref="71376575" role="forward"/>
  <member type="way" ref="157111158" role="forward"/>
  <member type="way" ref="191446762" role="forward"/>
  <member type="way" ref="191446764" role="forward"/>
  <member type="way" ref="191446763" role="forward"/>
  <member type="way" ref="191446760" role="forward"/>
  <member type="way" ref="191453129" role="forward"/>
  <member type="way" ref="191453128" role="forward"/>
  <member type="way" ref="220888344" role="forward"/>
  <member type="way" ref="220888337" role="forward"/>
  <member type="way" ref="220888351" role="forward"/>
  <member type="way" ref="220888355" role="forward"/>
  <member type="way" ref="220959800" role="forward"/>
  <member type="way" ref="220959801" role="forward"/>
  <member type="way" ref="614004452" role="forward"/>
  <member type="way" ref="614004451" role="forward"/>
  <member type="way" ref="613459413" role="forward"/>
  <member type="way" ref="613459416" role="forward"/>
  <member type="way" ref="614004457" role="forward"/>
  <member type="way" ref="614004456" role="forward"/>
  <member type="way" ref="613459421" role="forward"/>
  <member type="way" ref="613459420" role="forward"/>
  <member type="way" ref="613513025" role="forward"/>
  <member type="way" ref="220888354" role="forward"/>
  <member type="way" ref="220888332" role="forward"/>
  <member type="way" ref="191468578" role="forward"/>
  <member type="way" ref="191468577" role="forward"/>
  <member type="way" ref="610589769" role="forward"/>
  <member type="way" ref="220069825" role="forward"/>
  <member type="way" ref="220069827" role="forward"/>
  <member type="way" ref="220888333" role="forward"/>
  <member type="way" ref="220888353" role="forward"/>
  <member type="way" ref="195746400" role="forward"/>
  <member type="way" ref="220888347" role="forward"/>
  <member type="way" ref="195746396" role="forward"/>
  <member type="way" ref="191468580" role="forward"/>
  <member type="way" ref="191468576" role="forward"/>
  <member type="way" ref="220888338" role="forward"/>
  <member type="way" ref="220888335" role="forward"/>
  <member type="way" ref="191468579" role="forward"/>
  <member type="way" ref="191468581" role="forward"/>
  <member type="way" ref="191468582" role="forward"/>
  <member type="way" ref="220888342" role="forward"/>
  <member type="way" ref="390305639" role="forward"/>
  <member type="way" ref="390305640" role="forward"/>
  <member type="way" ref="220888349" role="forward"/>
  <member type="way" ref="573711693" role="forward"/>
  <member type="way" ref="573711694" role="forward"/>
  <member type="way" ref="220888343" role="forward"/>
  <member type="way" ref="220888339" role="forward"/>
  <member type="way" ref="220888350" role="forward"/>
  <member type="way" ref="613513030" role="forward"/>
  <member type="way" ref="416528590" role=""/>
  <member type="way" ref="694957614" role=""/>
  <member type="way" ref="694957615" role=""/>
  <member type="way" ref="694957612" role=""/>
  <member type="way" ref="575265630" role=""/>
  <member type="way" ref="808634282" role=""/>
  <member type="way" ref="808634281" role=""/>
  <member type="way" ref="575090729" role="forward"/>
  <member type="way" ref="575265598" role="forward"/>
  <member type="way" ref="668866605" role="forward"/>
  <member type="way" ref="700404464" role=""/>
  <member type="way" ref="191197629" role=""/>
  <member type="way" ref="226353764" role=""/>
  <member type="way" ref="191197633" role=""/>
  <member type="way" ref="231930269" role=""/>
  <member type="way" ref="700406090" role=""/>
  <member type="way" ref="692393503" role="link"/>
  <member type="way" ref="250098318" role="forward"/>
  <member type="way" ref="250096424" role="forward"/>
  <member type="way" ref="73533437" role="forward"/>
  <member type="way" ref="692393497" role="forward"/>
  <member type="way" ref="57793626" role="forward"/>
  <member type="way" ref="79142971" role="forward"/>
  <member type="way" ref="444901392" role="forward"/>
  <member type="way" ref="198265188" role="forward"/>
  <member type="way" ref="198265197" role="forward"/>
  <member type="way" ref="198265189" role="forward"/>
  <member type="way" ref="79142972" role="forward"/>
  <member type="way" ref="79142977" role="forward"/>
  <member type="way" ref="442768356" role="forward"/>
  <member type="way" ref="198265192" role="forward"/>
  <member type="way" ref="79142962" role="forward"/>
  <member type="way" ref="368701007" role="forward"/>
  <member type="way" ref="120472121" role="forward"/>
  <member type="way" ref="120472122" role="forward"/>
  <member type="way" ref="79142976" role="forward"/>
  <member type="way" ref="79142978" role="link"/>
  <member type="way" ref="108105467" role=""/>
  <member type="way" ref="41415967" role="forward"/>
  <member type="way" ref="108105470" role="forward"/>
  <member type="way" ref="108105468" role=""/>
  <member type="way" ref="41415958" role=""/>
  <member type="way" ref="41415959" role=""/>
  <member type="way" ref="36335011" role=""/>
  <member type="way" ref="36335010" role=""/>
  <member type="way" ref="75250342" role="forward"/>
  <member type="way" ref="75250352" role="forward"/>
  <member type="way" ref="75250335" role=""/>
  <member type="way" ref="57403717" role=""/>
  <member type="way" ref="194030112" role=""/>
  <member type="way" ref="203804890" role=""/>
  <member type="way" ref="203804876" role=""/>
  <member type="way" ref="382024682" role=""/>
  <member type="way" ref="78475138" role=""/>
  <member type="way" ref="57403718" role=""/>
  <member type="way" ref="203749166" role=""/>
  <member type="way" ref="203749178" role=""/>
  <member type="way" ref="107549080" role=""/>
  <member type="way" ref="550210900" role=""/>
  <member type="way" ref="550210899" role=""/>
  <member type="way" ref="107549069" role=""/>
  <member type="way" ref="81160005" role=""/>
  <member type="way" ref="81148804" role=""/>
  <member type="way" ref="49107372" role=""/>
  <member type="way" ref="777232166" role=""/>
  <member type="way" ref="777232167" role=""/>
  <member type="way" ref="81145708" role=""/>
  <member type="way" ref="81145707" role=""/>
  <member type="way" ref="81145532" role=""/>
  <member type="way" ref="81145531" role=""/>
  <member type="way" ref="203712815" role=""/>
  <member type="way" ref="74338869" role=""/>
  <member type="way" ref="81113685" role=""/>
  <member type="way" ref="81145192" role=""/>
  <member type="way" ref="777232169" role=""/>
  <member type="way" ref="777232168" role=""/>
  <member type="way" ref="81145190" role=""/>
  <member type="way" ref="74338870" role=""/>
  <member type="way" ref="107546791" role=""/>
  <member type="way" ref="74338871" role=""/>
  <member type="way" ref="107546787" role=""/>
  <member type="way" ref="81090029" role=""/>
  <member type="way" ref="74338859" role=""/>
  <member type="way" ref="107546784" role=""/>
  <member type="way" ref="83156896" role=""/>
  <member type="way" ref="83156898" role=""/>
  <member type="way" ref="83156894" role=""/>
  <member type="way" ref="83156892" role=""/>
  <member type="way" ref="74338861" role=""/>
  <member type="way" ref="83285625" role=""/>
  <member type="way" ref="74338863" role=""/>
  <member type="way" ref="83288840" role=""/>
  <member type="way" ref="83288839" role=""/>
  <member type="way" ref="83289448" role=""/>
  <member type="way" ref="74338866" role=""/>
  <member type="way" ref="680713191" role=""/>
  <member type="way" ref="202681885" role=""/>
  <member type="way" ref="680713192" role=""/>
  <member type="way" ref="202681902" role=""/>
  <member type="way" ref="40094164" role=""/>
  <member type="way" ref="40094166" role=""/>
  <member type="way" ref="83247398" role=""/>
  <member type="way" ref="83247397" role=""/>
  <member type="way" ref="318510204" role=""/>
  <member type="way" ref="78446309" role=""/>
  <member type="way" ref="318510205" role=""/>
  <member type="way" ref="318510206" role=""/>
  <member type="way" ref="318510207" role=""/>
  <member type="way" ref="551099210" role=""/>
  <member type="way" ref="680713189" role=""/>
  <member type="way" ref="551099209" role=""/>
  <member type="way" ref="74338821" role=""/>
  <member type="way" ref="74338828" role=""/>
  <member type="way" ref="48458763" role=""/>
  <member type="way" ref="201449658" role=""/>
  <member type="way" ref="200299868" role=""/>
  <member type="way" ref="80765411" role=""/>
  <member type="way" ref="202403366" role=""/>
  <member type="way" ref="202407314" role=""/>
  <member type="way" ref="209552235" role=""/>
  <member type="way" ref="72519486" role=""/>
  <member type="way" ref="80757142" role=""/>
  <member type="way" ref="202410918" role=""/>
  <member type="way" ref="202418443" role=""/>
  <member type="way" ref="232804566" role=""/>
  <member type="way" ref="232804564" role=""/>
  <member type="way" ref="232804565" role=""/>
  <member type="way" ref="48458716" role=""/>
  <member type="way" ref="232804567" role=""/>
  <member type="way" ref="80761814" role=""/>
  <member type="way" ref="119936099" role=""/>
  <member type="way" ref="48458276" role=""/>
  <member type="way" ref="323754093" role=""/>
  <member type="way" ref="119936102" role=""/>
  <member type="way" ref="202172276" role=""/>
  <member type="way" ref="202172275" role=""/>
  <member type="way" ref="80728956" role=""/>
  <member type="way" ref="80728955" role=""/>
  <member type="way" ref="202169880" role=""/>
  <member type="way" ref="202169877" role=""/>
  <member type="way" ref="74338780" role=""/>
  <member type="way" ref="80728957" role=""/>
  <member type="way" ref="202158877" role=""/>
  <member type="way" ref="202158880" role=""/>
  <member type="way" ref="202158307" role=""/>
  <member type="way" ref="202158305" role=""/>
  <member type="way" ref="80738049" role=""/>
  <member type="way" ref="80738050" role=""/>
  <member type="way" ref="291856101" role=""/>
  <member type="way" ref="74338782" role=""/>
  <member type="way" ref="88656594" role=""/>
  <member type="way" ref="88697830" role=""/>
  <member type="way" ref="88697829" role=""/>
  <member type="way" ref="36348139" role=""/>
  <member type="way" ref="36348136" role=""/>
  <member type="way" ref="80718760" role=""/>
  <member type="way" ref="80718759" role=""/>
  <member type="way" ref="202019894" role=""/>
  <member type="way" ref="202019904" role=""/>
  <member type="way" ref="87352725" role=""/>
  <member type="way" ref="471687964" role=""/>
  <member type="way" ref="471687962" role=""/>
  <member type="way" ref="169468557" role=""/>
  <member type="way" ref="446829905" role="forward"/>
  <member type="way" ref="446829908" role="forward"/>
  <member type="way" ref="207602449" role="forward"/>
  <member type="way" ref="608643109" role="forward"/>
  <member type="way" ref="207602456" role="forward"/>
  <member type="way" ref="207602448" role="forward"/>
  <member type="way" ref="244125313" role="forward"/>
  <member type="way" ref="131241816" role="backward"/>
  <member type="way" ref="244125309" role="forward"/>
  <member type="way" ref="625024453" role="forward"/>
  <member type="way" ref="244125316" role="forward"/>
  <member type="way" ref="244125317" role="forward"/>
  <member type="way" ref="458434954" role="forward"/>
  <member type="way" ref="815624102" role="forward"/>
  <member type="way" ref="208972822" role="forward"/>
  <member type="way" ref="155109972" role="forward"/>
  <member type="way" ref="207625930" role="forward"/>
  <member type="way" ref="207625942" role="forward"/>
  <member type="way" ref="505585281" role="forward"/>
  <member type="way" ref="209098611" role="forward"/>
  <member type="way" ref="155304942" role="forward"/>
  <member type="way" ref="785848226" role="forward"/>
  <member type="way" ref="145086689" role="forward"/>
  <member type="way" ref="162580825" role="forward"/>
  <member type="way" ref="370163290" role="forward"/>
  <member type="way" ref="370163291" role="forward"/>
  <member type="way" ref="162580819" role="forward"/>
  <member type="way" ref="162580820" role="forward"/>
  <member type="way" ref="370163292" role="forward"/>
  <member type="way" ref="370163293" role="forward"/>
  <member type="way" ref="162580828" role="forward"/>
  <member type="way" ref="160070095" role="forward"/>
  <member type="way" ref="54236320" role="forward"/>
  <member type="way" ref="54236311" role="forward"/>
  <member type="way" ref="101787398" role="forward"/>
  <member type="way" ref="48975939" role="forward"/>
  <member type="way" ref="54150670" role="forward"/>
  <member type="way" ref="625171745" role="forward"/>
  <member type="way" ref="54150650" role="forward"/>
  <member type="way" ref="101787400" role="forward"/>
  <member type="way" ref="32652712" role="forward"/>
  <member type="way" ref="594478781" role="forward"/>
  <member type="way" ref="737579424" role="forward"/>
  <member type="way" ref="594474913" role="forward"/>
  <member type="way" ref="551700804" role="forward"/>
  <member type="way" ref="551700805" role="forward"/>
  <member type="way" ref="48702267" role="forward"/>
  <member type="way" ref="101787384" role="forward"/>
  <member type="way" ref="52019424" role="forward"/>
  <member type="way" ref="52019425" role="forward"/>
  <member type="way" ref="101787387" role="forward"/>
  <member type="way" ref="370022806" role="forward"/>
  <member type="way" ref="101787399" role="forward"/>
  <member type="way" ref="52017048" role="forward"/>
  <member type="way" ref="52017049" role="forward"/>
  <member type="way" ref="48975943" role="forward"/>
  <member type="way" ref="101787395" role="forward"/>
  <member type="way" ref="53452981" role="forward"/>
  <member type="way" ref="48975944" role="forward"/>
  <member type="way" ref="71340646" role="forward"/>
  <member type="way" ref="71340649" role="forward"/>
  <member type="way" ref="176230617" role="forward"/>
  <member type="way" ref="176230623" role="forward"/>
  <member type="way" ref="77347612" role="forward"/>
  <member type="way" ref="202981100" role="forward"/>
  <member type="way" ref="202981093" role="forward"/>
  <member type="way" ref="446131968" role="forward"/>
  <member type="way" ref="77787182" role="forward"/>
  <member type="way" ref="126523063" role="forward"/>
  <member type="way" ref="299315462" role="forward"/>
  <member type="way" ref="202981099" role="forward"/>
  <member type="way" ref="202981096" role="forward"/>
  <member type="way" ref="202981095" role="forward"/>
  <member type="way" ref="546605657" role="forward"/>
  <member type="way" ref="208141575" role="forward"/>
  <member type="way" ref="207602460" role="forward"/>
  <member type="way" ref="608643110" role="forward"/>
  <member type="way" ref="207602451" role="forward"/>
  <member type="way" ref="244125314" role="forward"/>
  <member type="way" ref="207602452" role="forward"/>
  <member type="way" ref="207602455" role="forward"/>
  <member type="way" ref="295190720" role="forward"/>
  <member type="way" ref="244125324" role="forward"/>
  <member type="way" ref="244125323" role="forward"/>
  <member type="way" ref="244125318" role="forward"/>
  <member type="way" ref="207625932" role="forward"/>
  <member type="way" ref="207625935" role="forward"/>
  <member type="way" ref="209443772" role="forward"/>
  <member type="way" ref="369991622" role="forward"/>
  <member type="way" ref="155109982" role="forward"/>
  <member type="way" ref="111682795" role="forward"/>
  <member type="way" ref="48975949" role="forward"/>
  <member type="way" ref="155864747" role="forward"/>
  <member type="way" ref="155864732" role="forward"/>
  <member type="way" ref="369991621" role="forward"/>
  <member type="way" ref="369991620" role="forward"/>
  <member type="way" ref="155864741" role="forward"/>
  <member type="way" ref="369991703" role="forward"/>
  <member type="way" ref="330495645" role="forward"/>
  <member type="way" ref="369991698" role="forward"/>
  <member type="way" ref="602641068" role="forward"/>
  <member type="way" ref="51552982" role="forward"/>
  <member type="way" ref="54236321" role="forward"/>
  <member type="way" ref="546591447" role="forward"/>
  <member type="way" ref="101810146" role="forward"/>
  <member type="way" ref="54239735" role="forward"/>
  <member type="way" ref="54150654" role="forward"/>
  <member type="way" ref="54150671" role="forward"/>
  <member type="way" ref="101810148" role="forward"/>
  <member type="way" ref="464934119" role="forward"/>
  <member type="way" ref="464934116" role="forward"/>
  <member type="way" ref="464934113" role="forward"/>
  <member type="way" ref="464934114" role="forward"/>
  <member type="way" ref="464934115" role="forward"/>
  <member type="way" ref="836883123" role="forward"/>
  <member type="way" ref="101810147" role="forward"/>
  <member type="way" ref="26829240" role="forward"/>
  <member type="way" ref="52019423" role="forward"/>
  <member type="way" ref="52019422" role="forward"/>
  <member type="way" ref="101815340" role="forward"/>
  <member type="way" ref="101815338" role="forward"/>
  <member type="way" ref="53452980" role="forward"/>
  <member type="way" ref="53452982" role="forward"/>
  <member type="way" ref="101815334" role="forward"/>
  <member type="way" ref="26640691" role="forward"/>
  <member type="way" ref="298277938" role="forward"/>
  <member type="way" ref="71340658" role="forward"/>
  <member type="way" ref="71340651" role="forward"/>
  <member type="way" ref="176230612" role="forward"/>
  <member type="way" ref="176230619" role="forward"/>
  <member type="way" ref="83276712" role="forward"/>
  <member type="way" ref="48975941" role="forward"/>
  <member type="way" ref="48976810" role="forward"/>
  <member type="way" ref="56305000" role="forward"/>
  <member type="way" ref="45331538" role="forward"/>
  <member type="way" ref="45331534" role="forward"/>
  <member type="way" ref="83276709" role="forward"/>
  <member type="way" ref="83365448" role="forward"/>
  <member type="way" ref="47655836" role="forward"/>
  <member type="way" ref="78630120" role="forward"/>
  <member type="way" ref="78630084" role="forward"/>
  <member type="way" ref="46915713" role="forward"/>
  <member type="way" ref="46915715" role="forward"/>
  <member type="way" ref="38535932" role=""/>
  <member type="way" ref="53168455" role=""/>
  <member type="way" ref="101212719" role=""/>
  <member type="way" ref="101212716" role=""/>
  <member type="way" ref="82234766" role=""/>
  <member type="way" ref="99020025" role=""/>
  <member type="way" ref="99020028" role=""/>
  <member type="way" ref="37278832" role=""/>
  <member type="way" ref="38535920" role=""/>
  <member type="way" ref="37278830" role=""/>
  <member type="way" ref="37278829" role=""/>
  <member type="way" ref="45335993" role=""/>
  <member type="way" ref="83691085" role=""/>
  <member type="way" ref="83517383" role="forward"/>
  <member type="way" ref="83533704" role="forward"/>
  <member type="way" ref="83533698" role="forward"/>
  <member type="way" ref="51693935" role="forward"/>
  <member type="way" ref="50258930" role="forward"/>
  <member type="way" ref="46640032" role=""/>
  <member type="way" ref="99020026" role=""/>
  <member type="way" ref="99020027" role=""/>
  <member type="way" ref="58484647" role=""/>
  <member type="way" ref="56188354" role=""/>
  <member type="way" ref="56188360" role=""/>
  <member type="way" ref="58217645" role=""/>
  <member type="way" ref="58217375" role=""/>
  <member type="way" ref="46640034" role=""/>
  <member type="way" ref="46640033" role=""/>
  <member type="way" ref="46914835" role=""/>
  <member type="way" ref="235130600" role=""/>
  <member type="way" ref="57016170" role=""/>
  <member type="way" ref="83368244" role=""/>
  <member type="way" ref="83368238" role=""/>
  <member type="way" ref="175636578" role=""/>
  <member type="way" ref="175636579" role=""/>
  <member type="way" ref="46914851" role=""/>
  <member type="way" ref="46914854" role=""/>
  <member type="way" ref="46914855" role=""/>
  <member type="way" ref="48702193" role=""/>
  <member type="way" ref="615590682" role=""/>
  <member type="way" ref="48702189" role="forward"/>
  <member type="way" ref="78492854" role="forward"/>
  <member type="way" ref="300350636" role="forward"/>
  <member type="way" ref="48702191" role="forward"/>
  <member type="way" ref="300350635" role="forward"/>
  <member type="way" ref="320791297" role="forward"/>
  <member type="way" ref="48702192" role="forward"/>
  <member type="way" ref="48702190" role="forward"/>
  <member type="way" ref="78492849" role="forward"/>
  <member type="way" ref="101235913" role="forward"/>
  <member type="way" ref="49247498" role="forward"/>
  <member type="way" ref="52119459" role="forward"/>
  <member type="way" ref="48702188" role="forward"/>
  <member type="way" ref="53787709" role="forward"/>
  <member type="way" ref="718325004" role=""/>
  <member type="way" ref="444580050" role=""/>
  <member type="way" ref="444580051" role=""/>
  <member type="way" ref="718324608" role=""/>
  <member type="way" ref="104372165" role=""/>
  <member type="way" ref="444580058" role=""/>
  <member type="way" ref="320188688" role=""/>
  <member type="way" ref="444580055" role=""/>
  <member type="way" ref="444580057" role=""/>
  <member type="way" ref="553220923" role=""/>
  <member type="way" ref="519662450" role=""/>
  <member type="way" ref="444580063" role=""/>
  <member type="way" ref="444580065" role=""/>
  <member type="way" ref="444580066" role=""/>
  <member type="way" ref="444580060" role=""/>
  <member type="way" ref="552551415" role=""/>
  <member type="way" ref="552551416" role=""/>
  <member type="way" ref="444580062" role=""/>
  <member type="way" ref="444580068" role=""/>
  <member type="way" ref="444580056" role=""/>
  <member type="way" ref="552133619" role=""/>
  <member type="way" ref="444580059" role=""/>
  <member type="way" ref="444580061" role=""/>
  <member type="way" ref="444580053" role=""/>
  <member type="way" ref="444580054" role=""/>
  <member type="way" ref="444580067" role=""/>
  <member type="way" ref="553225657" role=""/>
  <member type="way" ref="553225662" role=""/>
  <member type="way" ref="553225669" role=""/>
  <member type="way" ref="444580052" role=""/>
  <member type="way" ref="553225675" role=""/>
  <member type="way" ref="553225680" role=""/>
  <member type="way" ref="444580064" role=""/>
  <member type="way" ref="553225685" role=""/>
  <member type="way" ref="553225691" role=""/>
  <member type="way" ref="553225696" role=""/>
  <member type="way" ref="553225702" role=""/>
  <member type="way" ref="553225706" role=""/>
  <member type="way" ref="553225711" role=""/>
  <member type="way" ref="810254717" role=""/>
  <member type="way" ref="719656898" role=""/>
  <member type="way" ref="719656899" role=""/>
  <member type="way" ref="719656900" role=""/>
  <member type="way" ref="443491821" role=""/>
  <member type="way" ref="443491823" role=""/>
  <member type="way" ref="808142941" role=""/>
  <member type="way" ref="443491822" role=""/>
  <member type="way" ref="718248499" role=""/>
  <member type="way" ref="718247587" role=""/>
  <member type="way" ref="718247221" role=""/>
  <member type="way" ref="718327310" role=""/>
  <member type="way" ref="718327965" role=""/>
  <member type="way" ref="53056959" role=""/>
  <member type="way" ref="53057012" role=""/>
  <member type="way" ref="54602470" role=""/>
  <member type="way" ref="443375009" role=""/>
  <member type="way" ref="718336445" role=""/>
  <member type="way" ref="443375010" role=""/>
  <member type="way" ref="54602478" role=""/>
  <member type="way" ref="102573956" role=""/>
  <member type="way" ref="437455902" role=""/>
  <member type="way" ref="437455903" role=""/>
  <member type="way" ref="718336159" role=""/>
  <member type="way" ref="718326593" role=""/>
  <member type="way" ref="53057023" role=""/>
  <member type="way" ref="320188687" role=""/>
  <member type="way" ref="79299063" role=""/>
  <member type="way" ref="102572707" role=""/>
  <member type="way" ref="79299056" role=""/>
  <member type="way" ref="79299075" role=""/>
  <member type="way" ref="668425454" role=""/>
  <member type="way" ref="668425450" role=""/>
  <member type="way" ref="320188672" role=""/>
  <member type="way" ref="28312109" role=""/>
  <member type="way" ref="79563003" role=""/>
  <member type="way" ref="809122213" role=""/>
  <member type="way" ref="809122212" role=""/>
  <member type="way" ref="320163696" role=""/>
  <member type="way" ref="380141829" role=""/>
  <member type="way" ref="380141831" role=""/>
  <member type="way" ref="380141828" role=""/>
  <member type="way" ref="380141827" role=""/>
  <member type="way" ref="380141830" role=""/>
  <member type="way" ref="380369161" role=""/>
  <member type="way" ref="380369160" role=""/>
  <member type="way" ref="380611054" role=""/>
  <member type="way" ref="380611056" role=""/>
  <member type="way" ref="46183571" role=""/>
  <member type="way" ref="28312113" role=""/>
  <member type="way" ref="89226513" role=""/>
  <member type="way" ref="89226524" role=""/>
  <member type="way" ref="320159995" role=""/>
  <member type="way" ref="71020246" role=""/>
  <member type="way" ref="672290396" role=""/>
  <member type="way" ref="56060152" role=""/>
  <member type="way" ref="61119009" role=""/>
  <member type="way" ref="672290389" role=""/>
  <member type="way" ref="320159993" role=""/>
  <member type="way" ref="672290388" role=""/>
  <member type="way" ref="682780986" role=""/>
  <member type="way" ref="668659799" role=""/>
  <member type="way" ref="668659798" role=""/>
  <member type="way" ref="60778025" role=""/>
  <member type="way" ref="682780976" role=""/>
  <member type="way" ref="682780970" role=""/>
  <member type="way" ref="682780951" role=""/>
  <member type="way" ref="682780952" role=""/>
  <member type="way" ref="682780949" role=""/>
  <member type="way" ref="682780950" role=""/>
  <member type="way" ref="71020249" role=""/>
  <member type="way" ref="682780944" role=""/>
  <member type="way" ref="682780943" role=""/>
  <member type="way" ref="682780942" role=""/>
  <member type="way" ref="178265045" role=""/>
  <member type="way" ref="178265044" role=""/>
  <member type="way" ref="320159992" role=""/>
  <member type="way" ref="683078559" role=""/>
  <member type="way" ref="185282967" role=""/>
  <member type="way" ref="56060806" role=""/>
  <member type="way" ref="56060799" role=""/>
  <member type="way" ref="320154627" role=""/>
  <member type="way" ref="185282970" role=""/>
  <member type="way" ref="320154624" role=""/>
  <member type="way" ref="185282974" role=""/>
  <member type="way" ref="245458026" role=""/>
  <member type="way" ref="185282977" role=""/>
  <member type="way" ref="185282975" role=""/>
  <member type="way" ref="185282972" role=""/>
  <member type="way" ref="320154625" role=""/>
  <member type="way" ref="185282971" role=""/>
  <member type="way" ref="71020239" role=""/>
  <member type="way" ref="28312371" role=""/>
  <member type="way" ref="28312370" role=""/>
  <member type="way" ref="83038969" role=""/>
  <member type="way" ref="83038984" role=""/>
  <member type="way" ref="320154630" role=""/>
  <member type="way" ref="185282986" role=""/>
  <member type="way" ref="81664445" role=""/>
  <member type="way" ref="83038985" role=""/>
  <member type="way" ref="83038979" role=""/>
  <member type="way" ref="309926360" role=""/>
  <member type="way" ref="676557593" role=""/>
  <member type="way" ref="676557594" role=""/>
  <member type="way" ref="309926358" role=""/>
  <member type="way" ref="311288977" role=""/>
  <member type="way" ref="28312118" role=""/>
  <member type="way" ref="40640151" role=""/>
  <member type="way" ref="309926359" role=""/>
  <member type="way" ref="320146840" role=""/>
  <member type="way" ref="83038972" role=""/>
  <member type="way" ref="83038982" role=""/>
  <member type="way" ref="83038983" role=""/>
  <member type="way" ref="83038974" role=""/>
  <member type="way" ref="185282982" role=""/>
  <member type="way" ref="185282984" role=""/>
  <member type="way" ref="83038989" role=""/>
  <member type="way" ref="83038976" role=""/>
  <member type="way" ref="185282985" role=""/>
  <member type="way" ref="185282981" role=""/>
  <member type="way" ref="320091952" role=""/>
  <member type="way" ref="81592357" role=""/>
  <member type="way" ref="81592316" role=""/>
  <member type="way" ref="320091960" role=""/>
  <member type="way" ref="161734991" role=""/>
  <member type="way" ref="161734988" role=""/>
  <member type="way" ref="161734993" role=""/>
  <member type="way" ref="161734989" role=""/>
  <member type="way" ref="161734992" role=""/>
  <member type="way" ref="161734990" role=""/>
  <member type="way" ref="185282983" role=""/>
  <member type="way" ref="185282980" role=""/>
  <member type="way" ref="103950722" role=""/>
  <member type="way" ref="89665683" role=""/>
  <member type="way" ref="127073828" role=""/>
  <member type="way" ref="81654446" role=""/>
  <member type="way" ref="127073827" role=""/>
  <member type="way" ref="81654436" role=""/>
  <member type="way" ref="89665684" role=""/>
  <member type="way" ref="320062525" role=""/>
  <member type="way" ref="109698229" role=""/>
  <member type="way" ref="82122744" role=""/>
  <member type="way" ref="161056239" role=""/>
  <member type="way" ref="161056234" role=""/>
  <member type="way" ref="109561095" role=""/>
  <member type="way" ref="161056237" role=""/>
  <member type="way" ref="161056235" role=""/>
  <member type="way" ref="127075979" role=""/>
  <member type="way" ref="28312120" role=""/>
  <member type="way" ref="99054503" role=""/>
  <member type="way" ref="108063362" role=""/>
  <member type="way" ref="91738839" role=""/>
  <member type="way" ref="91738837" role=""/>
  <member type="way" ref="91738832" role=""/>
  <member type="way" ref="114113351" role=""/>
  <member type="way" ref="114138632" role=""/>
  <member type="way" ref="114139176" role=""/>
  <member type="way" ref="114113350" role=""/>
  <member type="way" ref="28312121" role=""/>
  <member type="way" ref="220040729" role=""/>
  <member type="way" ref="81426756" role=""/>
  <member type="way" ref="81426771" role=""/>
  <member type="way" ref="66985113" role=""/>
  <member type="way" ref="608696171" role=""/>
  <member type="way" ref="608696172" role=""/>
  <member type="way" ref="161061762" role=""/>
  <member type="way" ref="96857126" role=""/>
  <member type="way" ref="96857147" role=""/>
  <member type="way" ref="66985118" role=""/>
  <member type="way" ref="81426758" role=""/>
  <member type="way" ref="81426784" role=""/>
  <member type="way" ref="89672065" role=""/>
  <member type="way" ref="185253986" role=""/>
  <member type="way" ref="89672074" role=""/>
  <member type="way" ref="28312122" role=""/>
  <member type="way" ref="32650944" role=""/>
  <member type="way" ref="315491769" role=""/>
  <member type="way" ref="82122636" role=""/>
  <member type="way" ref="404911541" role=""/>
  <member type="way" ref="82122695" role=""/>
  <member type="way" ref="430623615" role=""/>
  <member type="way" ref="430623614" role=""/>
  <member type="way" ref="107530313" role=""/>
  <member type="way" ref="89644456" role=""/>
  <member type="way" ref="185257181" role=""/>
  <member type="way" ref="185257183" role=""/>
  <member type="way" ref="185257182" role=""/>
  <member type="way" ref="257166997" role=""/>
  <member type="way" ref="89644445" role=""/>
  <member type="way" ref="185259703" role=""/>
  <member type="way" ref="81446739" role=""/>
  <member type="way" ref="81446742" role=""/>
  <member type="way" ref="81446736" role=""/>
  <member type="way" ref="81446745" role=""/>
  <member type="way" ref="336951343" role=""/>
  <member type="way" ref="336951344" role=""/>
  <member type="way" ref="185259702" role=""/>
  <member type="way" ref="185259705" role=""/>
  <member type="way" ref="124500791" role=""/>
  <member type="way" ref="124500790" role=""/>
  <member type="way" ref="88807800" role=""/>
  <member type="way" ref="50371951" role=""/>
  <member type="way" ref="495843225" role=""/>
  <member type="way" ref="157522577" role=""/>
  <member type="way" ref="157522576" role=""/>
  <member type="way" ref="88807799" role=""/>
  <member type="way" ref="89452496" role=""/>
  <member type="way" ref="89452494" role=""/>
  <member type="way" ref="185259701" role=""/>
  <member type="way" ref="185259704" role=""/>
  <member type="way" ref="315625859" role=""/>
  <member type="way" ref="315625858" role=""/>
  <member type="way" ref="88817425" role=""/>
  <member type="way" ref="91615950" role=""/>
  <member type="way" ref="91619109" role=""/>
  <member type="way" ref="93139302" role=""/>
  <member type="way" ref="93139304" role=""/>
  <member type="way" ref="185259706" role=""/>
  <member type="way" ref="185278437" role=""/>
  <member type="way" ref="88817445" role=""/>
  <member type="way" ref="185278436" role=""/>
  <member type="way" ref="477139415" role=""/>
  <member type="way" ref="482838712" role=""/>
  <member type="way" ref="370381789" role=""/>
  <member type="way" ref="477138794" role=""/>
  <member type="way" ref="88702666" role=""/>
  <member type="way" ref="96787102" role=""/>
  <member type="way" ref="92002622" role=""/>
  <member type="way" ref="92002624" role=""/>
  <member type="way" ref="88702659" role=""/>
  <member type="way" ref="81446729" role=""/>
  <member type="way" ref="81446720" role=""/>
  <member type="way" ref="97521841" role=""/>
  <member type="way" ref="72792186" role=""/>
  <member type="way" ref="72792273" role=""/>
  <member type="way" ref="796311984" role=""/>
  <member type="way" ref="97521860" role=""/>
  <member type="way" ref="137394529" role=""/>
  <member type="way" ref="109510148" role=""/>
  <member type="way" ref="93593861" role=""/>
  <member type="way" ref="28312127" role=""/>
  <member type="way" ref="31179296" role=""/>
  <member type="way" ref="31179307" role=""/>
  <member type="way" ref="93339504" role=""/>
  <member type="way" ref="93339508" role=""/>
  <member type="way" ref="31179300" role=""/>
  <member type="way" ref="31179270" role=""/>
  <member type="way" ref="31179268" role=""/>
  <member type="way" ref="97935293" role=""/>
  <member type="way" ref="97935291" role=""/>
  <member type="way" ref="149722073" role=""/>
  <member type="way" ref="31179533" role=""/>
  <member type="way" ref="31179272" role=""/>
  <member type="way" ref="52560032" role=""/>
  <member type="way" ref="441876797" role=""/>
  <member type="way" ref="137293262" role=""/>
  <member type="way" ref="52378978" role=""/>
  <member type="way" ref="52378998" role=""/>
  <member type="way" ref="577254250" role=""/>
  <member type="way" ref="52337201" role=""/>
  <member type="way" ref="428431676" role=""/>
  <member type="way" ref="137293263" role=""/>
  <member type="way" ref="137293574" role=""/>
  <member type="way" ref="52337212" role=""/>
  <member type="way" ref="137293575" role=""/>
  <member type="way" ref="506215081" role=""/>
  <member type="way" ref="36350190" role=""/>
  <member type="way" ref="335313706" role=""/>
  <member type="way" ref="335313705" role=""/>
  <member type="way" ref="213902903" role=""/>
  <member type="way" ref="213902901" role=""/>
  <member type="way" ref="213902899" role=""/>
  <member type="way" ref="213902898" role=""/>
  <member type="way" ref="213902900" role=""/>
  <member type="way" ref="52333339" role=""/>
  <member type="way" ref="52333355" role=""/>
  <member type="way" ref="213902907" role=""/>
  <member type="way" ref="213902904" role=""/>
  <member type="way" ref="213902906" role=""/>
  <member type="way" ref="213902905" role=""/>
  <member type="way" ref="213902908" role=""/>
  <member type="way" ref="77625925" role=""/>
  <member type="way" ref="487656849" role=""/>
  <member type="way" ref="36350242" role=""/>
  <member type="way" ref="52244908" role=""/>
  <member type="way" ref="577227635" role=""/>
  <member type="way" ref="52243774" role=""/>
  <member type="way" ref="52243773" role=""/>
  <member type="way" ref="213902911" role=""/>
  <member type="way" ref="213902912" role=""/>
  <member type="way" ref="667118215" role=""/>
  <member type="way" ref="52243779" role=""/>
  <member type="way" ref="213902902" role=""/>
  <member type="way" ref="183814353" role=""/>
  <member type="way" ref="183814358" role=""/>
  <member type="way" ref="52242562" role=""/>
  <member type="way" ref="52242561" role=""/>
  <member type="way" ref="52242580" role=""/>
  <member type="way" ref="577229948" role=""/>
  <member type="way" ref="52242579" role=""/>
  <member type="way" ref="183834991" role=""/>
  <member type="way" ref="213902897" role=""/>
  <member type="way" ref="213902896" role=""/>
  <member type="way" ref="109515366" role=""/>
  <member type="way" ref="130297725" role=""/>
  <member type="way" ref="725868488" role=""/>
  <member type="way" ref="725868489" role=""/>
  <member type="way" ref="213902894" role=""/>
  <member type="way" ref="36350271" role=""/>
  <member type="way" ref="36350275" role=""/>
  <member type="way" ref="213902892" role=""/>
  <member type="way" ref="213902893" role=""/>
  <member type="way" ref="109514539" role=""/>
  <member type="way" ref="213544039" role=""/>
  <member type="way" ref="130297620" role=""/>
  <member type="way" ref="31179492" role=""/>
  <member type="way" ref="31010652" role=""/>
  <member type="way" ref="31010651" role=""/>
  <member type="way" ref="583406833" role=""/>
  <member type="way" ref="213544047" role=""/>
  <member type="way" ref="213544046" role=""/>
  <member type="way" ref="38353875" role=""/>
  <member type="way" ref="740685757" role=""/>
  <member type="way" ref="740685758" role=""/>
  <member type="way" ref="740685759" role=""/>
  <member type="way" ref="255822311" role=""/>
  <member type="way" ref="740685761" role=""/>
  <member type="way" ref="740685756" role=""/>
  <member type="way" ref="740685755" role=""/>
  <member type="way" ref="740685753" role=""/>
  <member type="way" ref="740685763" role=""/>
  <member type="way" ref="740685764" role=""/>
  <member type="way" ref="38353874" role=""/>
  <member type="way" ref="740685765" role=""/>
  <member type="way" ref="740685766" role=""/>
  <member type="way" ref="129794711" role=""/>
  <member type="way" ref="129794712" role=""/>
  <member type="way" ref="445462534" role=""/>
  <member type="way" ref="433238483" role="forward"/>
  <member type="way" ref="740685767" role="forward"/>
  <member type="way" ref="445462522" role="forward"/>
  <member type="way" ref="740685768" role="forward"/>
  <member type="way" ref="364530923" role="forward"/>
  <member type="way" ref="364530922" role="forward"/>
  <member type="way" ref="451695532" role="forward"/>
  <member type="way" ref="444156906" role="forward"/>
  <member type="way" ref="444156905" role="forward"/>
  <member type="way" ref="426059667" role="forward"/>
  <member type="way" ref="31010643" role="forward"/>
  <member type="way" ref="436374145" role="forward"/>
  <member type="way" ref="444156903" role="forward"/>
  <member type="way" ref="444156904" role="forward"/>
  <member type="way" ref="444156451" role="forward"/>
  <member type="way" ref="444156902" role="forward"/>
  <member type="way" ref="291653592" role=""/>
  <member type="way" ref="129741938" role=""/>
  <member type="way" ref="129741934" role=""/>
  <member type="way" ref="31010650" role=""/>
  <member type="way" ref="31010649" role=""/>
  <member type="way" ref="291653594" role=""/>
  <member type="way" ref="291640765" role=""/>
  <member type="way" ref="291640774" role=""/>
  <member type="way" ref="746884523" role=""/>
  <member type="way" ref="45819084" role=""/>
  <member type="way" ref="45819113" role=""/>
  <member type="way" ref="133396950" role=""/>
  <member type="way" ref="133396951" role=""/>
  <member type="way" ref="51002662" role=""/>
  <member type="way" ref="118362334" role=""/>
  <member type="way" ref="118362419" role=""/>
  <member type="way" ref="51002633" role=""/>
  <member type="way" ref="51002641" role=""/>
  <member type="way" ref="746884524" role=""/>
  <member type="way" ref="51002661" role=""/>
  <member type="way" ref="41870207" role=""/>
  <member type="way" ref="41870206" role=""/>
  <member type="way" ref="257069533" role=""/>
  <member type="way" ref="41870203" role=""/>
  <member type="way" ref="257069534" role=""/>
  <member type="way" ref="41870202" role=""/>
  <member type="way" ref="41869112" role=""/>
  <member type="way" ref="41869111" role=""/>
  <member type="way" ref="41869110" role=""/>
  <member type="way" ref="41869109" role=""/>
  <member type="way" ref="41869108" role=""/>
  <member type="way" ref="41869107" role=""/>
  <member type="way" ref="34176417" role=""/>
  <member type="way" ref="34176416" role=""/>
  <member type="way" ref="133404277" role=""/>
  <member type="way" ref="133404272" role=""/>
  <member type="way" ref="34176411" role=""/>
  <member type="way" ref="34176410" role=""/>
  <member type="way" ref="34176413" role=""/>
  <member type="way" ref="747754568" role=""/>
  <member type="way" ref="34176412" role=""/>
  <member type="way" ref="291619966" role=""/>
  <member type="way" ref="34176397" role=""/>
  <member type="way" ref="34176396" role=""/>
  <member type="way" ref="549786441" role=""/>
  <member type="way" ref="34176383" role=""/>
  <member type="way" ref="495247617" role=""/>
  <member type="way" ref="495247618" role=""/>
  <member type="way" ref="495247619" role=""/>
  <member type="way" ref="34176382" role=""/>
  <member type="way" ref="14554213" role=""/>
  <member type="way" ref="114183786" role=""/>
  <member type="way" ref="114183773" role=""/>
  <member type="way" ref="165479666" role=""/>
  <member type="way" ref="746630284" role=""/>
  <member type="way" ref="746630285" role=""/>
  <member type="way" ref="114190136" role=""/>
  <member type="way" ref="114190006" role=""/>
  <member type="way" ref="547443151" role=""/>
  <member type="way" ref="747125114" role=""/>
  <member type="way" ref="747125115" role=""/>
  <member type="way" ref="33722609" role=""/>
  <member type="way" ref="747125113" role=""/>
  <member type="way" ref="33722608" role=""/>
  <member type="way" ref="495237794" role=""/>
  <member type="way" ref="495237797" role=""/>
  <member type="way" ref="545420378" role=""/>
  <member type="way" ref="203591839" role=""/>
  <member type="way" ref="203591836" role=""/>
  <member type="way" ref="114853707" role=""/>
  <member type="way" ref="114853825" role=""/>
  <member type="way" ref="163700063" role=""/>
  <member type="way" ref="288220936" role=""/>
  <member type="way" ref="288220939" role=""/>
  <member type="way" ref="288220937" role=""/>
  <member type="way" ref="288220938" role=""/>
  <member type="way" ref="291563362" role=""/>
  <member type="way" ref="32953986" role=""/>
  <member type="way" ref="163700064" role=""/>
  <member type="way" ref="288194252" role=""/>
  <member type="way" ref="368420515" role=""/>
  <member type="way" ref="368420508" role=""/>
  <member type="way" ref="731839806" role=""/>
  <member type="way" ref="32953987" role=""/>
  <member type="way" ref="112456296" role=""/>
  <member type="way" ref="112456402" role=""/>
  <member type="way" ref="368420504" role=""/>
  <member type="way" ref="368420495" role=""/>
  <member type="way" ref="288194254" role=""/>
  <member type="way" ref="705659769" role=""/>
  <member type="way" ref="81266484" role=""/>
  <member type="way" ref="81266478" role=""/>
  <member type="way" ref="288194255" role=""/>
  <member type="way" ref="251737043" role=""/>
  <member type="way" ref="251737042" role=""/>
  <member type="way" ref="731835464" role=""/>
  <member type="way" ref="551199414" role=""/>
  <member type="way" ref="551199415" role=""/>
  <member type="way" ref="551199413" role=""/>
  <member type="way" ref="747272466" role=""/>
  <member type="way" ref="747272465" role=""/>
  <member type="way" ref="106085492" role=""/>
  <member type="way" ref="106085494" role=""/>
  <member type="way" ref="367760751" role=""/>
  <member type="way" ref="367760750" role=""/>
  <member type="way" ref="367760749" role=""/>
  <member type="way" ref="32971324" role=""/>
  <member type="way" ref="502750260" role=""/>
  <member type="way" ref="551323791" role=""/>
  <member type="way" ref="551325554" role=""/>
  <member type="way" ref="551323789" role=""/>
  <member type="way" ref="551323786" role=""/>
  <member type="way" ref="551325553" role=""/>
  <member type="way" ref="32971326" role=""/>
  <member type="way" ref="551323784" role=""/>
  <member type="way" ref="549772620" role=""/>
  <member type="way" ref="551323782" role="forward"/>
  <member type="way" ref="551196795" role="forward"/>
  <member type="way" ref="32971442" role="forward"/>
  <member type="way" ref="551197873" role="forward"/>
  <member type="way" ref="32971469" role="forward"/>
  <member type="way" ref="32971470" role="forward"/>
  <member type="way" ref="551197874" role="forward"/>
  <member type="way" ref="551197875" role="forward"/>
  <member type="way" ref="551197876" role="forward"/>
  <member type="way" ref="599532233" role="forward"/>
  <member type="way" ref="551194930" role="forward"/>
  <member type="way" ref="551194931" role="forward"/>
  <member type="way" ref="600796893" role="forward"/>
  <member type="way" ref="32971332" role="forward"/>
  <member type="way" ref="551197872" role="forward"/>
  <member type="way" ref="551197871" role="forward"/>
  <member type="way" ref="32828865" role="forward"/>
  <member type="way" ref="32828864" role="forward"/>
  <member type="way" ref="289209989" role="forward"/>
  <member type="way" ref="551197877" role="forward"/>
  <member type="way" ref="551194925" role="forward"/>
  <member type="way" ref="551194924" role="forward"/>
  <member type="way" ref="551194933" role="forward"/>
  <member type="way" ref="551194932" role="forward"/>
  <member type="way" ref="32971444" role="forward"/>
  <member type="way" ref="105830465" role=""/>
  <member type="way" ref="27061803" role=""/>
  <member type="way" ref="27061798" role="forward"/>
  <member type="way" ref="9656191" role="forward"/>
  <member type="way" ref="338642941" role="forward"/>
  <member type="way" ref="338642939" role="forward"/>
  <member type="way" ref="27061797" role="forward"/>
  <member type="way" ref="338642937" role="forward"/>
  <member type="way" ref="9655609" role="forward"/>
  <member type="way" ref="692387654" role="forward"/>
  <member type="way" ref="338642940" role="link"/>
  <member type="way" ref="338642935" role="link"/>
  <member type="way" ref="81189942" role=""/>
  <member type="way" ref="338642938" role=""/>
  <member type="way" ref="496413087" role=""/>
  <member type="way" ref="105799252" role=""/>
  <member type="way" ref="709997671" role=""/>
  <member type="way" ref="500527078" role=""/>
  <member type="way" ref="338642942" role=""/>
  <member type="way" ref="338642936" role=""/>
  <member type="way" ref="105799265" role=""/>
  <member type="way" ref="500506671" role=""/>
  <member type="way" ref="81189943" role=""/>
  <member type="way" ref="551219183" role=""/>
  <member type="way" ref="549772618" role=""/>
  <member type="way" ref="36943683" role=""/>
  <member type="way" ref="551210522" role=""/>
  <member type="way" ref="551210521" role=""/>
  <member type="way" ref="266320894" role=""/>
  <member type="way" ref="266320895" role=""/>
  <member type="way" ref="180131848" role=""/>
  <member type="way" ref="180131857" role=""/>
  <member type="way" ref="36943684" role=""/>
  <member type="way" ref="195934337" role=""/>
  <member type="way" ref="195934335" role=""/>
  <member type="way" ref="712063925" role=""/>
  <member type="way" ref="195735079" role=""/>
  <member type="way" ref="217528834" role=""/>
  <member type="way" ref="549772617" role=""/>
  <member type="way" ref="32953989" role=""/>
  <member type="way" ref="217528831" role=""/>
  <member type="way" ref="217528832" role=""/>
  <member type="way" ref="217528833" role=""/>
  <member type="way" ref="217528830" role=""/>
  <member type="way" ref="217528835" role=""/>
  <member type="way" ref="217527373" role=""/>
  <member type="way" ref="217527339" role=""/>
  <member type="way" ref="217527338" role=""/>
  <member type="way" ref="217527340" role=""/>
  <member type="way" ref="20815284" role=""/>
  <member type="way" ref="549772616" role=""/>
  <member type="way" ref="45861007" role=""/>
  <member type="way" ref="145116497" role=""/>
  <member type="way" ref="145116506" role=""/>
  <member type="way" ref="718375130" role=""/>
  <member type="way" ref="718375136" role=""/>
  <member type="way" ref="149117792" role=""/>
  <member type="way" ref="718375135" role=""/>
  <member type="way" ref="38375967" role="forward"/>
  <member type="way" ref="718375133" role=""/>
  <member type="way" ref="173397679" role=""/>
  <member type="way" ref="45861004" role=""/>
  <member type="way" ref="145240392" role=""/>
  <member type="way" ref="45861005" role=""/>
  <member type="way" ref="148064342" role=""/>
  <member type="way" ref="303418496" role=""/>
  <member type="way" ref="145228428" role=""/>
  <member type="way" ref="30896875" role=""/>
  <member type="way" ref="30896876" role=""/>
  <member type="way" ref="218474615" role=""/>
  <member type="way" ref="30896873" role=""/>
  <member type="way" ref="30896874" role=""/>
  <member type="way" ref="218474613" role=""/>
  <member type="way" ref="451682290" role=""/>
  <member type="way" ref="312050609" role=""/>
  <member type="way" ref="792439546" role=""/>
  <member type="way" ref="792439547" role=""/>
  <member type="way" ref="27466721" role="forward"/>
  <member type="way" ref="219153233" role="forward"/>
  <member type="way" ref="219153237" role="forward"/>
  <member type="way" ref="32829745" role="forward"/>
  <member type="way" ref="219153235" role="forward"/>
  <member type="way" ref="219153231" role="forward"/>
  <member type="way" ref="219153239" role="forward"/>
  <member type="way" ref="219153232" role="forward"/>
  <member type="way" ref="145236830" role="forward"/>
  <member type="way" ref="219153234" role="forward"/>
  <member type="way" ref="27466718" role="forward"/>
  <member type="way" ref="220214612" role="forward"/>
  <member type="way" ref="517451483" role=""/>
  <member type="way" ref="488468641" role=""/>
  <member type="way" ref="517051548" role=""/>
  <member type="way" ref="512315433" role=""/>
  <member type="way" ref="493919129" role=""/>
  <member type="way" ref="149906515" role=""/>
  <member type="way" ref="512315966" role=""/>
  <member type="way" ref="512315967" role=""/>
  <member type="way" ref="512315968" role=""/>
  <member type="way" ref="512315969" role=""/>
  <member type="way" ref="512315970" role=""/>
  <member type="way" ref="149906516" role=""/>
  <member type="way" ref="512315971" role=""/>
  <member type="way" ref="512316808" role=""/>
  <member type="way" ref="465351573" role=""/>
  <member type="way" ref="478784180" role=""/>
  <member type="way" ref="145121943" role=""/>
  <member type="way" ref="478784178" role=""/>
  <member type="way" ref="347067344" role=""/>
  <member type="way" ref="490922617" role=""/>
  <member type="way" ref="340245269" role=""/>
  <member type="way" ref="310473252" role=""/>
  <member type="way" ref="470488759" role=""/>
  <member type="way" ref="310024682" role=""/>
  <member type="way" ref="310024684" role=""/>
  <member type="way" ref="312049101" role=""/>
  <member type="way" ref="396860286" role=""/>
  <member type="way" ref="310475720" role=""/>
  <member type="way" ref="466073916" role=""/>
  <member type="way" ref="468365218" role=""/>
  <member type="way" ref="469925149" role=""/>
  <member type="way" ref="145121939" role=""/>
  <member type="way" ref="489876612" role=""/>
  <member type="way" ref="396823104" role=""/>
  <member type="way" ref="253192589" role=""/>
  <member type="way" ref="32829744" role=""/>
  <member type="way" ref="37326088" role="forward"/>
  <member type="way" ref="37326087" role="forward"/>
  <member type="way" ref="53747723" role="forward"/>
  <member type="way" ref="53747726" role="forward"/>
  <member type="way" ref="30888791" role="forward"/>
  <member type="way" ref="544482331" role=""/>
  <member type="way" ref="404542444" role=""/>
  <member type="way" ref="551065358" role=""/>
  <member type="way" ref="601728435" role=""/>
  <member type="way" ref="512554112" role=""/>
  <member type="way" ref="225395213" role=""/>
  <member type="way" ref="225394932" role=""/>
  <member type="way" ref="225394939" role=""/>
  <member type="way" ref="225394930" role=""/>
  <member type="way" ref="225394942" role=""/>
  <member type="way" ref="225394931" role=""/>
  <member type="way" ref="225394934" role=""/>
  <member type="way" ref="225394936" role=""/>
  <member type="way" ref="345224079" role=""/>
  <member type="way" ref="345224093" role=""/>
  <member type="way" ref="345224087" role=""/>
  <member type="way" ref="146167456" role=""/>
  <member type="way" ref="31128609" role=""/>
  <member type="way" ref="31063909" role=""/>
  <member type="way" ref="31063910" role=""/>
  <member type="way" ref="462039744" role=""/>
  <member type="way" ref="147007560" role=""/>
  <member type="way" ref="452463104" role=""/>
  <member type="way" ref="452463105" role=""/>
  <member type="way" ref="452463106" role=""/>
  <member type="way" ref="147125852" role=""/>
  <member type="way" ref="835851910" role=""/>
  <member type="way" ref="835851911" role=""/>
  <member type="way" ref="335187585" role=""/>
  <member type="way" ref="386905170" role=""/>
  <member type="way" ref="386902570" role=""/>
  <member type="way" ref="335570535" role=""/>
  <member type="way" ref="484326263" role=""/>
  <member type="way" ref="335570533" role=""/>
  <member type="way" ref="335570529" role=""/>
  <member type="way" ref="536920041" role=""/>
  <member type="way" ref="484326264" role=""/>
  <member type="way" ref="335570532" role=""/>
  <member type="way" ref="501226085" role=""/>
  <member type="way" ref="501226086" role=""/>
  <member type="way" ref="147125856" role=""/>
  <member type="way" ref="147125857" role=""/>
  <member type="way" ref="147125843" role=""/>
  <member type="way" ref="243434877" role=""/>
  <member type="way" ref="148306171" role=""/>
  <member type="way" ref="243434876" role=""/>
  <member type="way" ref="501226084" role=""/>
  <member type="way" ref="253843395" role=""/>
  <member type="way" ref="253843396" role=""/>
  <member type="way" ref="253843398" role=""/>
  <member type="way" ref="348725702" role=""/>
  <member type="way" ref="501226080" role=""/>
  <member type="way" ref="148301918" role=""/>
  <member type="way" ref="32508553" role=""/>
  <member type="way" ref="32508550" role="forward"/>
  <member type="way" ref="191880546" role="forward"/>
  <member type="way" ref="191875707" role="forward"/>
  <member type="way" ref="191880545" role="forward"/>
  <member type="way" ref="32508557" role="forward"/>
  <member type="way" ref="301327288" role=""/>
  <member type="way" ref="301327289" role=""/>
  <member type="way" ref="230151978" role=""/>
  <member type="way" ref="191875708" role=""/>
  <member type="way" ref="149715578" role=""/>
  <member type="way" ref="589447872" role=""/>
  <member type="way" ref="589447873" role=""/>
  <member type="way" ref="149715577" role=""/>
  <member type="way" ref="191875711" role=""/>
  <member type="way" ref="230151981" role=""/>
  <member type="way" ref="191875712" role=""/>
  <member type="way" ref="191875702" role=""/>
  <member type="way" ref="191875705" role=""/>
  <member type="way" ref="307246140" role=""/>
  <member type="way" ref="307246158" role=""/>
  <member type="way" ref="191875706" role=""/>
  <member type="way" ref="191875710" role=""/>
  <member type="way" ref="296907309" role=""/>
  <member type="way" ref="191875709" role=""/>
  <member type="way" ref="32897854" role=""/>
  <member type="way" ref="32897869" role="forward"/>
  <member type="way" ref="9655520" role="link"/>
  <member type="way" ref="614579452" role="forward"/>
  <member type="way" ref="91789110" role=""/>
  <member type="way" ref="614579459" role="forward"/>
  <member type="way" ref="614579451" role="forward"/>
  <member type="way" ref="97156518" role=""/>
  <member type="way" ref="180995630" role="forward"/>
  <member type="way" ref="210195803" role="forward"/>
  <member type="way" ref="180995627" role="forward"/>
  <member type="way" ref="180995628" role="forward"/>
  <member type="way" ref="91789134" role="forward"/>
  <member type="way" ref="180995629" role="forward"/>
  <member type="way" ref="37901695" role=""/>
  <member type="way" ref="97208706" role=""/>
  <member type="way" ref="97208705" role=""/>
  <member type="way" ref="96963488" role=""/>
  <member type="way" ref="96963487" role=""/>
  <member type="way" ref="614590342" role="forward"/>
  <member type="way" ref="614590341" role="forward"/>
  <member type="way" ref="96171556" role=""/>
  <member type="way" ref="614590331" role="forward"/>
  <member type="way" ref="27068794" role="forward"/>
  <member type="way" ref="27068793" role=""/>
  <member type="way" ref="27068796" role="forward"/>
  <member type="way" ref="32897905" role="forward"/>
  <member type="way" ref="27068797" role=""/>
  <member type="way" ref="27068792" role="forward"/>
  <member type="way" ref="45766363" role="forward"/>
  <member type="way" ref="32897903" role="forward"/>
  <member type="way" ref="32897866" role=""/>
  <member type="way" ref="32897871" role="forward"/>
  <member type="way" ref="81237547" role=""/>
  <member type="way" ref="81237546" role="forward"/>
  <member type="way" ref="443081305" role="forward"/>
  <member type="way" ref="81237548" role="forward"/>
  <member type="way" ref="87173947" role=""/>
  <member type="way" ref="87173948" role=""/>
  <member type="way" ref="87174318" role=""/>
  <member type="way" ref="87174321" role=""/>
  <member type="way" ref="107580079" role=""/>
  <member type="way" ref="107580071" role=""/>
  <member type="way" ref="36335008" role=""/>
  <member type="way" ref="25356865" role=""/>
  <member type="way" ref="198315886" role=""/>
  <member type="way" ref="198315924" role="forward"/>
  <member type="way" ref="81209271" role="forward"/>
  <member type="way" ref="81209184" role=""/>
  <member type="way" ref="119920031" role=""/>
  <member type="way" ref="119920026" role=""/>
  <member type="way" ref="36334621" role=""/>
  <member type="way" ref="82303190" role=""/>
  <member type="way" ref="82303189" role=""/>
  <member type="way" ref="82300760" role=""/>
  <member type="way" ref="82300761" role=""/>
  <member type="way" ref="36334981" role=""/>
  <member type="way" ref="36334982" role=""/>
  <member type="way" ref="119917668" role=""/>
  <member type="way" ref="119917669" role=""/>
  <member type="way" ref="81300286" role=""/>
  <member type="way" ref="17637354" role="forward"/>
  <member type="way" ref="81300274" role="forward"/>
  <member type="way" ref="198691621" role=""/>
  <member type="way" ref="198691616" role=""/>
  <member type="way" ref="119917559" role=""/>
  <member type="way" ref="119917561" role=""/>
  <member type="way" ref="36334975" role=""/>
  <member type="way" ref="81322497" role=""/>
  <member type="way" ref="81349454" role=""/>
  <member type="way" ref="81349453" role=""/>
  <member type="way" ref="36334974" role=""/>
  <member type="way" ref="36334971" role=""/>
  <member type="way" ref="81385007" role=""/>
  <member type="way" ref="83709545" role=""/>
  <member type="way" ref="36334966" role=""/>
  <member type="way" ref="36334965" role=""/>
  <member type="way" ref="82375141" role=""/>
  <member type="way" ref="82375140" role=""/>
  <member type="way" ref="199211956" role=""/>
  <member type="way" ref="199211984" role=""/>
  <member type="way" ref="17637699" role=""/>
  <member type="way" ref="36334959" role=""/>
  <member type="way" ref="82591352" role=""/>
  <member type="way" ref="82591351" role=""/>
  <member type="way" ref="36334950" role=""/>
  <member type="way" ref="169139697" role=""/>
  <member type="way" ref="17639488" role=""/>
  <member type="way" ref="194025180" role=""/>
  <member type="way" ref="194025181" role=""/>
  <member type="way" ref="36334943" role=""/>
  <member type="way" ref="26605211" role=""/>
  <member type="way" ref="82681570" role=""/>
  <member type="way" ref="82681572" role=""/>
  <member type="way" ref="169228946" role=""/>
  <member type="way" ref="169228952" role=""/>
  <member type="way" ref="197050245" role=""/>
  <member type="way" ref="197050241" role=""/>
  <member type="way" ref="82877721" role=""/>
  <member type="way" ref="82877722" role=""/>
  <member type="way" ref="82739298" role=""/>
  <member type="way" ref="82739825" role=""/>
  <member type="way" ref="82739294" role=""/>
  <member type="way" ref="102623593" role=""/>
  <member type="way" ref="102623849" role=""/>
  <member type="way" ref="135691814" role=""/>
  <member type="way" ref="102623484" role=""/>
  <member type="way" ref="102623306" role=""/>
  <member type="way" ref="102623621" role=""/>
  <member type="way" ref="124025596" role=""/>
  <member type="way" ref="102623298" role=""/>
  <member type="way" ref="102604680" role=""/>
  <member type="way" ref="102603579" role=""/>
  <member type="way" ref="102604140" role=""/>
  <member type="way" ref="135691815" role=""/>
  <member type="way" ref="102603943" role=""/>
  <member type="way" ref="102603580" role=""/>
  <member type="way" ref="102603691" role=""/>
  <member type="way" ref="222882982" role="forward"/>
  <member type="way" ref="222882974" role="forward"/>
  <member type="way" ref="222882978" role=""/>
  <member type="way" ref="120000299" role="forward"/>
  <member type="way" ref="222882969" role="forward"/>
  <member type="way" ref="222887863" role=""/>
  <member type="way" ref="222887862" role="forward"/>
  <member type="way" ref="222887859" role="forward"/>
  <member type="way" ref="692394666" role="forward"/>
  <member type="way" ref="477885632" role="forward"/>
  <member type="way" ref="222887858" role="forward"/>
  <member type="way" ref="222887854" role="forward"/>
  <member type="way" ref="692394667" role="forward"/>
  <member type="way" ref="410082434" role="link"/>
  <member type="way" ref="222887857" role="link"/>
  <member type="way" ref="222887856" role=""/>
  <member type="way" ref="163196037" role=""/>
  <member type="way" ref="594564520" role="forward"/>
  <member type="way" ref="102603202" role="forward"/>
  <member type="way" ref="409752198" role="forward"/>
  <member type="way" ref="408504744" role="forward"/>
  <member type="way" ref="120002616" role="forward"/>
  <member type="way" ref="416055315" role=""/>
  <member type="way" ref="434339633" role=""/>
  <member type="way" ref="102602959" role=""/>
  <member type="way" ref="102604467" role=""/>
  <member type="way" ref="102603064" role=""/>
  <member type="way" ref="102605536" role=""/>
  <member type="way" ref="102488229" role=""/>
  <member type="way" ref="102488122" role=""/>
  <member type="way" ref="102488615" role=""/>
  <member type="way" ref="102488557" role=""/>
  <member type="way" ref="102336358" role=""/>
  <member type="way" ref="26343348" role=""/>
  <member type="way" ref="630738571" role=""/>
  <member type="way" ref="630738567" role=""/>
  <member type="way" ref="630738602" role=""/>
  <member type="way" ref="630738601" role=""/>
  <member type="way" ref="28087686" role=""/>
  <member type="way" ref="28087687" role=""/>
  <member type="way" ref="591616224" role=""/>
  <member type="way" ref="127301041" role=""/>
  <member type="way" ref="120126078" role=""/>
  <member type="way" ref="30529198" role=""/>
  <member type="way" ref="333354143" role=""/>
  <member type="way" ref="333354144" role=""/>
  <member type="way" ref="333354146" role=""/>
  <member type="way" ref="333354145" role=""/>
  <member type="way" ref="616795645" role="forward"/>
  <member type="way" ref="332916537" role="forward"/>
  <member type="way" ref="616795637" role=""/>
  <member type="way" ref="616795648" role="forward"/>
  <member type="way" ref="120284871" role="forward"/>
  <member type="way" ref="332916538" role=""/>
  <member type="way" ref="28087677" role=""/>
  <member type="way" ref="27120571" role=""/>
  <member type="way" ref="102254668" role=""/>
  <member type="way" ref="102254972" role=""/>
  <member type="way" ref="630216979" role=""/>
  <member type="way" ref="28087694" role=""/>
  <member type="way" ref="28087693" role=""/>
  <member type="way" ref="442147772" role=""/>
  <member type="way" ref="26343349" role=""/>
  <member type="way" ref="516939710" role=""/>
  <member type="way" ref="516939711" role=""/>
  <member type="way" ref="93187600" role=""/>
  <member type="way" ref="442147771" role=""/>
  <member type="way" ref="93187598" role=""/>
  <member type="way" ref="93419733" role=""/>
  <member type="way" ref="93419734" role=""/>
  <member type="way" ref="120171984" role=""/>
  <member type="way" ref="101184972" role=""/>
  <member type="way" ref="101179194" role=""/>
  <member type="way" ref="101179115" role=""/>
  <member type="way" ref="120171983" role=""/>
  <member type="way" ref="596137524" role=""/>
  <member type="way" ref="294042058" role=""/>
  <member type="way" ref="297725996" role=""/>
  <member type="way" ref="297726007" role=""/>
  <member type="way" ref="245659295" role=""/>
  <member type="way" ref="245659296" role=""/>
  <member type="way" ref="297725999" role=""/>
  <member type="way" ref="297725997" role=""/>
  <member type="way" ref="297725998" role=""/>
  <member type="way" ref="297726000" role=""/>
  <member type="way" ref="297726001" role=""/>
  <member type="way" ref="297726002" role=""/>
  <member type="way" ref="297726006" role=""/>
  <member type="way" ref="297726003" role=""/>
  <member type="way" ref="297726004" role=""/>
  <member type="way" ref="297726005" role=""/>
  <member type="way" ref="215187991" role=""/>
  <member type="way" ref="458288075" role=""/>
  <member type="way" ref="458288066" role=""/>
  <member type="way" ref="514129474" role=""/>
  <member type="way" ref="724088842" role=""/>
  <member type="way" ref="295735362" role=""/>
  <member type="way" ref="295735361" role=""/>
  <member type="way" ref="724088846" role=""/>
  <member type="way" ref="437768635" role=""/>
  <member type="way" ref="453743037" role=""/>
  <member type="way" ref="453743032" role=""/>
  <member type="way" ref="712450072" role=""/>
  <member type="way" ref="661694192" role=""/>
  <member type="way" ref="453743023" role=""/>
  <member type="way" ref="453743029" role=""/>
  <member type="way" ref="453743040" role=""/>
  <member type="way" ref="453743028" role=""/>
  <member type="way" ref="453743026" role=""/>
  <member type="way" ref="453743025" role=""/>
  <member type="way" ref="661694193" role=""/>
  <member type="way" ref="661694194" role=""/>
  <member type="way" ref="453743038" role=""/>
  <member type="way" ref="453743039" role=""/>
  <member type="way" ref="453743036" role=""/>
  <member type="way" ref="553734111" role=""/>
  <member type="way" ref="453743033" role=""/>
  <member type="way" ref="453743034" role=""/>
  <member type="way" ref="453743048" role=""/>
  <member type="way" ref="453743047" role=""/>
  <member type="way" ref="453743046" role=""/>
  <member type="way" ref="453743045" role=""/>
  <member type="way" ref="453743044" role=""/>
  <member type="way" ref="453743043" role=""/>
  <member type="way" ref="453743042" role=""/>
  <member type="way" ref="453743041" role=""/>
  <member type="way" ref="432060111" role=""/>
  <member type="way" ref="700425379" role=""/>
  <member type="way" ref="453743050" role=""/>
  <member type="way" ref="549400935" role=""/>
  <member type="way" ref="633894244" role=""/>
  <member type="way" ref="93180525" role="forward"/>
  <member type="way" ref="76559023" role="forward"/>
  <member type="way" ref="76559022" role="forward"/>
  <member type="way" ref="93181179" role="forward"/>
  <member type="way" ref="303742596" role="forward"/>
  <member type="way" ref="293854556" role="forward"/>
  <member type="way" ref="642079702" role="forward"/>
  <member type="way" ref="93180515" role="forward"/>
  <member type="way" ref="93180519" role="forward"/>
  <member type="way" ref="93180509" role="forward"/>
  <member type="way" ref="591431170" role=""/>
  <member type="way" ref="93301488" role=""/>
  <member type="way" ref="93301489" role=""/>
  <member type="way" ref="543782244" role=""/>
  <member type="way" ref="118317322" role=""/>
  <member type="way" ref="118317231" role=""/>
  <member type="way" ref="543780211" role=""/>
  <member type="way" ref="120223290" role=""/>
  <member type="way" ref="79524344" role=""/>
  <member type="way" ref="79524357" role=""/>
  <member type="way" ref="175050848" role=""/>
  <member type="way" ref="119276415" role=""/>
  <member type="way" ref="442147761" role="forward"/>
  <member type="way" ref="442147760" role="forward"/>
  <member type="way" ref="442147767" role="forward"/>
  <member type="way" ref="547440067" role="forward"/>
  <member type="way" ref="119276433" role="forward"/>
  <member type="way" ref="441670933" role="forward"/>
  <member type="way" ref="441670932" role="forward"/>
  <member type="way" ref="511895472" role="forward"/>
  <member type="way" ref="511895470" role="forward"/>
  <member type="way" ref="175045379" role="forward"/>
  <member type="way" ref="543780209" role="link"/>
  <member type="way" ref="543780208" role="forward"/>
  <member type="way" ref="606737751" role=""/>
  <member type="way" ref="623290760" role=""/>
  <member type="way" ref="712452981" role=""/>
  <member type="way" ref="597745917" role=""/>
  <member type="way" ref="606737759" role=""/>
  <member type="way" ref="175029421" role="forward"/>
  <member type="way" ref="294404051" role="forward"/>
  <member type="way" ref="123451992" role="forward"/>
  <member type="way" ref="130629480" role="forward"/>
  <member type="way" ref="408237219" role="forward"/>
  <member type="way" ref="123451996" role="forward"/>
  <member type="way" ref="294404052" role="forward"/>
  <member type="way" ref="441659646" role="forward"/>
  <member type="way" ref="96046859" role="forward"/>
  <member type="way" ref="414985586" role="forward"/>
  <member type="way" ref="544150347" role="forward"/>
  <member type="way" ref="734942289" role="forward"/>
  <member type="way" ref="481989074" role="forward"/>
  <member type="way" ref="544150346" role="link"/>
  <member type="way" ref="734942292" role="forward"/>
  <member type="way" ref="34910875" role="forward"/>
  <member type="way" ref="441670935" role="forward"/>
  <member type="way" ref="416027656" role="forward"/>
  <member type="way" ref="528652339" role="forward"/>
  <member type="way" ref="544284948" role="forward"/>
  <member type="way" ref="544284949" role="forward"/>
  <member type="way" ref="498205745" role="forward"/>
  <member type="way" ref="586598837" role="forward"/>
  <member type="way" ref="401406278" role="forward"/>
  <member type="way" ref="656699860" role="forward"/>
  <member type="way" ref="231500636" role="forward"/>
  <member type="way" ref="127872358" role="forward"/>
  <member type="way" ref="120226276" role="forward"/>
  <member type="way" ref="120226281" role="forward"/>
  <member type="way" ref="130730800" role="forward"/>
  <member type="way" ref="130730799" role="forward"/>
  <member type="way" ref="398318156" role="forward"/>
  <member type="way" ref="544284952" role="forward"/>
  <member type="way" ref="123449468" role="forward"/>
  <member type="way" ref="547296513" role="forward"/>
  <member type="way" ref="544222582" role="forward"/>
  <member type="way" ref="123449467" role="forward"/>
  <member type="way" ref="420091231" role="forward"/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <member type="way" ref="115656359" role="forward"/>
  <member type="way" ref="536644503" role="forward"/>
  <member type="way" ref="536644502" role="forward"/>
  <member type="way" ref="426106855" role="forward"/>
  <member type="way" ref="680870201" role="forward"/>
  <member type="way" ref="680870202" role="forward"/>
  <member type="way" ref="536651670" role="forward"/>
  <member type="way" ref="524045827" role="forward"/>
  <member type="way" ref="524045828" role="forward"/>
  <member type="way" ref="73827521" role="forward"/>
  <member type="way" ref="114389582" role="forward"/>
  <member type="way" ref="114389578" role="forward"/>
  <member type="way" ref="114389579" role="forward"/>
  <member type="way" ref="114389577" role="forward"/>
  <member type="way" ref="114389589" role="forward"/>
  <member type="way" ref="746446839" role="forward"/>
  <member type="way" ref="186495990" role="forward"/>
  <member type="way" ref="96589960" role="forward"/>
  <member type="way" ref="96589858" role="forward"/>
  <member type="way" ref="96589913" role="forward"/>
  <member type="way" ref="367784454" role="forward"/>
  <member type="way" ref="367784457" role="forward"/>
  <member type="way" ref="96589859" role="forward"/>
  <member type="way" ref="96589918" role="forward"/>
  <member type="way" ref="231787744" role="forward"/>
  <member type="way" ref="96589906" role="forward"/>
  <member type="way" ref="96589951" role="forward"/>
  <member type="way" ref="231787740" role="forward"/>
  <member type="way" ref="96589854" role="forward"/>
  <member type="way" ref="96589962" role="forward"/>
  <member type="way" ref="220888357" role="forward"/>
  <member type="way" ref="326148261" role="forward"/>
  <member type="way" ref="326148260" role="forward"/>
  <member type="way" ref="231787743" role="forward"/>
  <member type="way" ref="274356315" role="forward"/>
  <member type="way" ref="274356309" role="forward"/>
  <member type="way" ref="220888345" role="forward"/>
  <member type="way" ref="220888356" role="forward"/>
  <member type="way" ref="231787741" role="forward"/>
  <member type="way" ref="277265534" role="forward"/>
  <member type="way" ref="277265536" role="forward"/>
  <member type="way" ref="28511584" role="forward"/>
  <member type="way" ref="539435681" role="forward"/>
  <member type="way" ref="539435679" role="forward"/>
  <member type="way" ref="28511586" role="forward"/>
  <member type="way" ref="157111162" role="forward"/>
  <member type="way" ref="276589917" role="forward"/>
  <member type="way" ref="276589925" role="forward"/>
  <member type="way" ref="276589919" role="forward"/>
  <member type="way" ref="276589928" role="forward"/>
  <member type="way" ref="276589920" role="forward"/>
  <member type="way" ref="276589921" role="forward"/>
  <member type="way" ref="613513036" role="forward"/>
  <member type="way" ref="654312117" role="forward"/>
  <member type="way" ref="723972812" role="forward"/>
  <member type="way" ref="723972813" role="forward"/>
  <member type="way" ref="654312115" role="forward"/>
  <member type="way" ref="654312116" role="forward"/>
  <member type="way" ref="329760396" role="forward"/>
  <member type="way" ref="329761952" role=""/>
  <member type="way" ref="194160342" role="forward"/>
  <member type="way" ref="194160341" role="forward"/>
  <member type="way" ref="194160343" role=""/>
  <member type="way" ref="17329380" role="forward"/>
  <member type="way" ref="287750382" role="forward"/>
  <member type="way" ref="287750380" role="forward"/>
  <member type="way" ref="17329125" role="forward"/>
  <member type="way" ref="131234032" role="forward"/>
  <member type="way" ref="304756622" role="forward"/>
  <member type="way" ref="843238460" role="forward"/>
  <member type="way" ref="193973166" role="forward"/>
  <member type="way" ref="193973163" role="forward"/>
  <member type="way" ref="231655572" role="forward"/>
  <member type="way" ref="42039125" role="forward"/>
  <member type="way" ref="623417662" role=""/>
  <member type="way" ref="42039479" role=""/>
  <member type="way" ref="42039480" role=""/>
  <member type="way" ref="793507046" role=""/>
  <member type="way" ref="793507044" role=""/>
  <member type="way" ref="793507045" role=""/>
  <member type="way" ref="793507039" role=""/>
  <member type="way" ref="793507038" role=""/>
  <member type="way" ref="793507037" role=""/>
  <member type="way" ref="793507035" role=""/>
  <member type="way" ref="793507034" role=""/>
  <member type="way" ref="287926121" role=""/>
  <member type="way" ref="793507026" role=""/>
  <member type="way" ref="42039481" role="forward"/>
  <member type="way" ref="88214988" role="forward"/>
  <member type="way" ref="88214986" role="forward"/>
  <member type="way" ref="131238803" role="forward"/>
  <member type="way" ref="793507043" role=""/>
  <member type="way" ref="544284954" role="link"/>
  <member type="way" ref="401412818" role="forward"/>
  <member type="way" ref="401521971" role="forward"/>
  <member type="way" ref="401521972" role="forward"/>
  <member type="way" ref="401521970" role="forward"/>
  <member type="way" ref="401521973" role="forward"/>
  <member type="way" ref="544284955" role="forward"/>
  <member type="way" ref="544284953" role="link"/>
  <member type="way" ref="544227403" role="link"/>
  <member type="way" ref="231500633" role="forward"/>
  <member type="way" ref="544298618" role="forward"/>
  <member type="way" ref="40128640" role="forward"/>
  <member type="way" ref="439421037" role="forward"/>
  <member type="way" ref="294404050" role="forward"/>
  <member type="way" ref="544227406" role="forward"/>
  <member type="way" ref="544227405" role="forward"/>
  <member type="way" ref="544284951" role="forward"/>
  <member type="way" ref="546274622" role="forward"/>
  <member type="way" ref="547264534" role="forward"/>
  <member type="way" ref="175034766" role="forward"/>
  <member type="way" ref="588888105" role="forward"/>
  <member type="way" ref="588575476" role="forward"/>
  <member type="way" ref="392557605" role="forward"/>
  <member type="way" ref="654398329" role="forward"/>
  <member type="way" ref="654398328" role="forward"/>
  <member type="way" ref="591998658" role="forward"/>
  <member type="way" ref="544320746" role="forward"/>
  <member type="way" ref="174921087" role="forward"/>
  <member type="way" ref="543779008" role="link"/>
  <member type="way" ref="734942291" role="forward"/>
  <member type="way" ref="543780210" role="link"/>
  <member type="way" ref="119276390" role="forward"/>
  <member type="way" ref="511895471" role="forward"/>
  <member type="way" ref="511895469" role="forward"/>
  <member type="way" ref="130629279" role="forward"/>
  <member type="way" ref="712452977" role="forward"/>
  <member type="way" ref="544227402" role="link"/>
  <member type="way" ref="175036546" role="forward"/>
  <member type="way" ref="441670936" role="forward"/>
  <member type="way" ref="416027657" role="forward"/>
  <member type="way" ref="269498800" role="link"/>
  <member type="way" ref="222882970" role="link"/>
  <member type="way" ref="330410362" role="link"/>
  <member type="way" ref="426106733" role="link"/>
  <member type="way" ref="536644499" role="forward"/>
  <member type="way" ref="536644498" role="forward"/>
  <member type="way" ref="173623564" role="forward"/>
  <member type="way" ref="426106856" role="forward"/>
  <member type="way" ref="559780808" role="forward"/>
  <member type="way" ref="114389811" role="forward"/>
  <member type="way" ref="544284950" role="link"/>
  <member type="way" ref="544227407" role="link"/>
  <member type="way" ref="614590333" role="forward"/>
  <member type="way" ref="34536004" role=""/>
  <member type="way" ref="96963483" role=""/>
  <member type="way" ref="96963482" role=""/>
  <member type="way" ref="93305566" role=""/>
  <member type="way" ref="24475930" role=""/>
  <member type="way" ref="111802188" role=""/>
  <member type="way" ref="111802187" role=""/>
  <member type="way" ref="672978949" role=""/>
  <member type="way" ref="277706452" role=""/>
  <member type="way" ref="277706453" role=""/>
  <member type="way" ref="96417898" role=""/>
  <member type="way" ref="96417902" role=""/>
  <member type="way" ref="268075883" role=""/>
  <member type="way" ref="268075884" role=""/>
  <member type="way" ref="442113430" role=""/>
  <member type="way" ref="442113429" role=""/>
  <member type="way" ref="290349019" role=""/>
  <member type="way" ref="268333253" role=""/>
  <member type="way" ref="229838027" role=""/>
  <member type="way" ref="672977373" role=""/>
  <member type="way" ref="765341080" role=""/>
  <member type="way" ref="765341079" role=""/>
  <member type="way" ref="229838028" role=""/>
  <member type="way" ref="209281357" role=""/>
  <member type="way" ref="209281356" role=""/>
  <member type="way" ref="27323215" role=""/>
  <member type="way" ref="226987009" role=""/>
  <member type="way" ref="226987006" role=""/>
  <member type="way" ref="205782123" role=""/>
  <member type="way" ref="205782122" role=""/>
  <member type="way" ref="205806212" role=""/>
  <member type="way" ref="209261972" role=""/>
  <member type="way" ref="366437952" role=""/>
  <member type="way" ref="236369546" role=""/>
  <member type="way" ref="133656104" role=""/>
  <member type="way" ref="133656105" role=""/>
  <member type="way" ref="236369547" role=""/>
  <member type="way" ref="238972374" role=""/>
  <member type="way" ref="238972369" role=""/>
  <member type="way" ref="270438111" role=""/>
  <member type="way" ref="270438113" role=""/>
  <member type="way" ref="672969762" role=""/>
  <member type="way" ref="672969761" role=""/>
  <member type="way" ref="665846783" role="forward"/>
  <member type="way" ref="784646785" role="forward"/>
  <member type="way" ref="672953762" role="forward"/>
  <member type="way" ref="575265620" role="forward"/>
  <member type="way" ref="660413231" role="forward"/>
  <member type="way" ref="551210529" role=""/>
  <member type="way" ref="410334530" role=""/>
  <member type="way" ref="410334529" role=""/>
  <member type="way" ref="410357293" role=""/>
  <member type="way" ref="551219170" role=""/>
  <member type="way" ref="551219171" role=""/>
  <member type="way" ref="551219174" role=""/>
  <member type="way" ref="551219172" role=""/>
  <member type="way" ref="551219180" role=""/>
  <member type="way" ref="746480787" role=""/>
  <member type="way" ref="551219181" role=""/>
  <member type="way" ref="551308468" role=""/>
  <member type="way" ref="230710985" role=""/>
  <member type="way" ref="307193831" role=""/>
  <member type="way" ref="307193823" role=""/>
  <member type="way" ref="307193830" role=""/>
  <member type="way" ref="307193826" role=""/>
  <member type="way" ref="307193832" role=""/>
  <member type="way" ref="307193820" role=""/>
  <member type="way" ref="307193834" role=""/>
  <member type="way" ref="307193829" role=""/>
  <member type="way" ref="307193833" role=""/>
  <member type="way" ref="307193827" role=""/>
  <member type="way" ref="307193817" role=""/>
  <member type="way" ref="307193824" role=""/>
  <member type="way" ref="307193818" role=""/>
  <member type="way" ref="307193825" role=""/>
  <member type="way" ref="53003779" role=""/>
  <member type="way" ref="307193835" role=""/>
  <member type="way" ref="307193828" role=""/>
  <member type="way" ref="307193821" role=""/>
  <member type="way" ref="307193819" role=""/>
  <member type="way" ref="683381303" role=""/>
  <member type="way" ref="683381307" role=""/>
  <member type="way" ref="683381306" role=""/>
  <member type="way" ref="683381309" role=""/>
  <member type="way" ref="683381308" role=""/>
  <member type="way" ref="683381305" role=""/>
  <member type="way" ref="53003782" role=""/>
  <member type="way" ref="53003781" role=""/>
  <member type="way" ref="53003780" role=""/>
  <member type="way" ref="53003773" role=""/>
  <member type="way" ref="583645815" role="forward"/>
  <member type="way" ref="583642455" role="forward"/>
  <member type="way" ref="583642446" role="forward"/>
  <member type="way" ref="583642448" role="forward"/>
  <member type="way" ref="330407846" role="forward"/>
  <member type="way" ref="221518665" role="forward"/>
  <member type="way" ref="221518661" role="forward"/>
  <member type="way" ref="288394216" role="forward"/>
  <member type="way" ref="330304144" role="forward"/>
  <member type="way" ref="161622558" role="forward"/>
  <member type="way" ref="161622553" role="forward"/>
  <member type="way" ref="330304064" role="forward"/>
  <member type="way" ref="330304065" role="forward"/>
  <member type="way" ref="161622549" role="forward"/>
  <member type="way" ref="364281588" role="forward"/>
  <member type="way" ref="364281598" role="forward"/>
  <member type="way" ref="161622555" role="forward"/>
  <member type="way" ref="161622556" role="forward"/>
  <member type="way" ref="161622551" role="forward"/>
  <member type="way" ref="161622559" role="forward"/>
  <member type="way" ref="161622554" role="forward"/>
  <member type="way" ref="161622560" role="forward"/>
  <member type="way" ref="161622552" role="forward"/>
  <member type="way" ref="172824859" role="forward"/>
  <member type="way" ref="230710989" role="forward"/>
  <member type="way" ref="230710995" role="forward"/>
  <member type="way" ref="230710999" role="forward"/>
  <member type="way" ref="230710994" role="forward"/>
  <member type="way" ref="230711007" role="forward"/>
  <member type="way" ref="679125119" role="forward"/>
  <member type="way" ref="230711029" role="forward"/>
  <member type="way" ref="230711017" role="forward"/>
  <member type="way" ref="230711001" role="forward"/>
  <member type="way" ref="354780070" role="forward"/>
  <member type="way" ref="230711034" role="forward"/>
  <member type="way" ref="354778195" role="forward"/>
  <member type="way" ref="354778196" role="forward"/>
  <member type="way" ref="221454606" role="forward"/>
  <member type="way" ref="221454604" role="forward"/>
  <member type="way" ref="219768925" role="forward"/>
  <member type="way" ref="219768930" role="forward"/>
  <member type="way" ref="701063603" role="forward"/>
  <member type="way" ref="393044288" role=""/>
  <member type="way" ref="715736356" role="forward"/>
  <member type="way" ref="499395219" role="forward"/>
  <member type="way" ref="499395220" role="forward"/>
  <member type="way" ref="466240624" role="forward"/>
  <member type="way" ref="48068818" role="forward"/>
  <member type="way" ref="135667543" role="forward"/>
  <member type="way" ref="132928013" role="forward"/>
  <member type="way" ref="164534441" role="forward"/>
  <member type="way" ref="132930852" role="forward"/>
  <member type="way" ref="132930829" role="forward"/>
  <member type="way" ref="730748764" role="forward"/>
  <member type="way" ref="132930775" role="forward"/>
  <member type="way" ref="132930788" role="forward"/>
  <member type="way" ref="637935074" role="forward"/>
  <member type="way" ref="133037891" role=""/>
  <member type="way" ref="701028266" role="forward"/>
  <member type="way" ref="699390532" role="forward"/>
  <member type="way" ref="133037890" role=""/>
  <member type="way" ref="699390533" role="forward"/>
  <member type="way" ref="637935075" role="forward"/>
  <member type="way" ref="637935076" role="forward"/>
  <member type="way" ref="637935072" role="forward"/>
  <member type="way" ref="219768933" role="forward"/>
  <member type="way" ref="637935101" role="forward"/>
  <member type="way" ref="637935102" role="forward"/>
  <member type="way" ref="619145316" role="forward"/>
  <member type="way" ref="619145317" role="forward"/>
  <member type="way" ref="715736357" role="forward"/>
  <member type="way" ref="219768932" role="forward"/>
  <member type="way" ref="619145318" role=""/>
  <member type="way" ref="219768928" role="forward"/>
  <member type="way" ref="619138816" role="forward"/>
  <member type="way" ref="619138815" role="forward"/>
  <member type="way" ref="637935100" role="forward"/>
  <member type="way" ref="637935099" role="forward"/>
  <member type="way" ref="637935073" role="forward"/>
  <member type="way" ref="53003788" role="forward"/>
  <member type="way" ref="637935077" role="forward"/>
  <member type="way" ref="701028267" role="forward"/>
  <member type="way" ref="613513029" role="forward"/>
  <member type="way" ref="702642884" role="forward"/>
  <member type="way" ref="573711696" role=""/>
  <member type="way" ref="702642883" role="forward"/>
  <member type="way" ref="276589916" role="forward"/>
  <member type="way" ref="276589927" role="forward"/>
  <member type="way" ref="613513037" role="forward"/>
  <member type="way" ref="276589915" role="forward"/>
  <member type="way" ref="276589923" role="forward"/>
  <member type="way" ref="276589918" role="forward"/>
  <member type="way" ref="276589929" role="forward"/>
  <member type="way" ref="59740756" role="forward"/>
  <member type="way" ref="220888352" role="forward"/>
  <member type="way" ref="539435678" role="forward"/>
  <member type="way" ref="539435680" role="forward"/>
  <member type="way" ref="277265535" role="forward"/>
  <member type="way" ref="277265533" role="forward"/>
  <member type="way" ref="74294911" role="forward"/>
  <member type="way" ref="231787738" role="forward"/>
  <member type="way" ref="73823397" role="forward"/>
  <member type="way" ref="73823396" role="forward"/>
  <member type="way" ref="274356312" role="forward"/>
  <member type="way" ref="274356318" role="forward"/>
  <member type="way" ref="231787742" role="forward"/>
  <member type="way" ref="74294932" role="forward"/>
  <member type="way" ref="326148258" role="forward"/>
  <member type="way" ref="326148259" role="forward"/>
  <member type="way" ref="74294929" role="forward"/>
  <member type="way" ref="96589882" role="forward"/>
  <member type="way" ref="96589959" role="forward"/>
  <member type="way" ref="96589920" role="forward"/>
  <member type="way" ref="231787745" role="forward"/>
  <member type="way" ref="73823393" role="forward"/>
  <member type="way" ref="73823399" role="forward"/>
  <member type="way" ref="231787739" role="forward"/>
  <member type="way" ref="96589936" role="forward"/>
  <member type="way" ref="96589903" role="forward"/>
  <member type="way" ref="367784456" role="forward"/>
  <member type="way" ref="367784448" role="forward"/>
  <member type="way" ref="96589924" role="forward"/>
  <member type="way" ref="96589910" role="forward"/>
  <member type="way" ref="73827532" role="forward"/>
  <member type="way" ref="186495988" role="forward"/>
  <member type="way" ref="277267720" role="forward"/>
  <member type="way" ref="277267719" role="forward"/>
  <member type="way" ref="746446842" role="forward"/>
  <member type="way" ref="746446841" role="forward"/>
  <member type="way" ref="746446840" role="forward"/>
  <member type="way" ref="832505575" role="forward"/>
  <member type="way" ref="559780811" role="forward"/>
  <member type="way" ref="559780812" role="forward"/>
  <member type="way" ref="559780809" role="forward"/>
  <member type="way" ref="559780810" role="forward"/>
  <member type="way" ref="220069826" role="forward"/>
  <member type="way" ref="114389593" role="forward"/>
  <member type="way" ref="114389594" role="forward"/>
  <member type="way" ref="114389576" role="forward"/>
  <member type="way" ref="114389592" role="forward"/>
  <member type="way" ref="114389818" role="forward"/>
  <member type="way" ref="114389816" role="forward"/>
  <member type="way" ref="114389812" role="forward"/>
  <member type="way" ref="114389809" role="forward"/>
  <member type="way" ref="114389810" role="forward"/>
  <member type="way" ref="114389805" role="forward"/>
  <member type="way" ref="114389803" role="forward"/>
  <member type="way" ref="114389808" role="forward"/>
  <member type="way" ref="114389804" role="forward"/>
  <member type="way" ref="114389815" role="forward"/>
  <member type="way" ref="836137773" role="backward"/>
  <member type="way" ref="307193836" role=""/>
  <member type="way" ref="307193822" role=""/>
  <member type="way" ref="683381304" role=""/>
  <member type="way" ref="583642451" role="forward"/>
  <member type="way" ref="583642454" role="forward"/>
  <member type="way" ref="583642447" role="forward"/>
  <member type="way" ref="288394576" role="forward"/>
  <member type="way" ref="330407843" role="forward"/>
  <member type="way" ref="288394577" role="forward"/>
  <member type="way" ref="330407842" role="forward"/>
  <member type="way" ref="330304067" role="forward"/>
  <member type="way" ref="288394217" role="forward"/>
  <member type="way" ref="364281593" role="forward"/>
  <member type="way" ref="364281592" role="forward"/>
  <member type="way" ref="364281591" role="forward"/>
  <member type="way" ref="364281594" role="forward"/>
  <member type="way" ref="330304068" role="forward"/>
  <member type="way" ref="161622557" role="forward"/>
  <member type="way" ref="161622561" role="forward"/>
  <member type="way" ref="364281589" role="forward"/>
  <member type="way" ref="364281599" role="forward"/>
  <member type="way" ref="364281590" role="forward"/>
  <member type="way" ref="364281595" role="forward"/>
  <member type="way" ref="364281587" role="forward"/>
  <member type="way" ref="364281597" role="forward"/>
  <member type="way" ref="364281596" role="forward"/>
  <member type="way" ref="53060775" role="forward"/>
  <member type="way" ref="721522250" role="forward"/>
  <member type="way" ref="330304062" role=""/>
  <member type="way" ref="721522249" role="forward"/>
  <member type="way" ref="330302947" role="forward"/>
  <member type="way" ref="330302946" role="forward"/>
  <member type="way" ref="514885677" role="forward"/>
  <member type="way" ref="514885676" role="forward"/>
  <member type="way" ref="330302945" role="forward"/>
  <member type="way" ref="330302944" role="forward"/>
  <member type="way" ref="690250917" role="forward"/>
  <member type="way" ref="690250874" role="forward"/>
  <member type="way" ref="690250877" role="forward"/>
  <member type="way" ref="690250886" role="forward"/>
  <member type="way" ref="690250912" role="forward"/>
  <member type="way" ref="690232153" role="forward"/>
  <member type="way" ref="690250929" role="forward"/>
  <member type="way" ref="690250933" role="forward"/>
  <member type="way" ref="690250944" role="forward"/>
  <member type="way" ref="690250946" role="forward"/>
  <member type="way" ref="690250959" role="forward"/>
  <member type="way" ref="690250961" role="forward"/>
  <member type="way" ref="690250964" role="forward"/>
  <member type="way" ref="690250965" role="forward"/>
  <member type="way" ref="690250967" role="forward"/>
  <member type="way" ref="690250970" role="forward"/>
  <member type="way" ref="690250973" role="forward"/>
  <member type="way" ref="690250975" role="forward"/>
  <member type="way" ref="793571949" role="forward"/>
  <member type="way" ref="793571965" role="forward"/>
  <member type="way" ref="793571966" role="forward"/>
  <member type="way" ref="690250978" role="forward"/>
  <member type="way" ref="690250979" role="forward"/>
  <member type="way" ref="690250981" role="forward"/>
  <member type="way" ref="690250996" role="forward"/>
  <member type="way" ref="690250995" role="forward"/>
  <member type="way" ref="690232148" role="forward"/>
  <member type="way" ref="690232144" role="forward"/>
  <member type="way" ref="690232150" role="forward"/>
  <member type="way" ref="690232138" role="forward"/>
  <member type="way" ref="690232137" role="forward"/>
  <member type="way" ref="690232163" role="forward"/>
  <member type="way" ref="690232157" role="forward"/>
  <member type="way" ref="690232156" role="forward"/>
  <member type="way" ref="690232162" role="forward"/>
  <member type="way" ref="690232172" role="forward"/>
  <member type="way" ref="172824864" role="forward"/>
  <member type="way" ref="172824863" role="forward"/>
  <member type="way" ref="172824858" role="forward"/>
  <member type="way" ref="172835194" role="forward"/>
  <member type="way" ref="172835195" role="forward"/>
  <member type="way" ref="172835191" role="forward"/>
  <member type="way" ref="172835186" role="forward"/>
  <member type="way" ref="690250920" role="forward"/>
  <member type="way" ref="690250871" role="forward"/>
  <member type="way" ref="690250881" role="forward"/>
  <member type="way" ref="690250892" role="forward"/>
  <member type="way" ref="690250907" role="forward"/>
  <member type="way" ref="690232154" role="forward"/>
  <member type="way" ref="690250930" role="forward"/>
  <member type="way" ref="690250931" role="forward"/>
  <member type="way" ref="690250941" role="forward"/>
  <member type="way" ref="690250949" role="forward"/>
  <member type="way" ref="690250960" role="forward"/>
  <member type="way" ref="690250962" role="forward"/>
  <member type="way" ref="690250963" role="forward"/>
  <member type="way" ref="690250966" role="forward"/>
  <member type="way" ref="690250968" role="forward"/>
  <member type="way" ref="690250972" role="forward"/>
  <member type="way" ref="690250974" role="forward"/>
  <member type="way" ref="793571968" role="forward"/>
  <member type="way" ref="793571967" role="forward"/>
  <member type="way" ref="690250976" role="forward"/>
  <member type="way" ref="690250977" role="forward"/>
  <member type="way" ref="690250980" role="forward"/>
  <member type="way" ref="690250982" role="forward"/>
  <member type="way" ref="690250997" role="forward"/>
  <member type="way" ref="690250998" role="forward"/>
  <member type="way" ref="690232142" role="forward"/>
  <member type="way" ref="690232143" role="forward"/>
  <member type="way" ref="690232155" role="forward"/>
  <member type="way" ref="690232139" role="forward"/>
  <member type="way" ref="690232140" role="forward"/>
  <member type="way" ref="690232160" role="forward"/>
  <member type="way" ref="690232158" role="forward"/>
  <member type="way" ref="690232159" role="forward"/>
  <member type="way" ref="690232161" role="forward"/>
  <member type="way" ref="690232181" role="forward"/>
  <member type="way" ref="194160546" role=""/>
  <member type="way" ref="702644420" role="forward"/>
  <member type="way" ref="690232171" role="forward"/>
  <member type="way" ref="690232167" role="forward"/>
  <member type="way" ref="690232166" role="forward"/>
  <member type="way" ref="690232170" role="forward"/>
  <member type="way" ref="690232174" role="forward"/>
  <member type="way" ref="690232175" role="forward"/>
  <member type="way" ref="194160355" role="forward"/>
  <member type="way" ref="723981319" role="forward"/>
  <member type="way" ref="702644419" role="forward"/>
  <member type="way" ref="690232168" role="forward"/>
  <member type="way" ref="690232164" role="forward"/>
  <member type="way" ref="690232165" role="forward"/>
  <member type="way" ref="690232169" role="forward"/>
  <member type="way" ref="690232176" role="forward"/>
  <member type="way" ref="690232177" role="forward"/>
  <member type="way" ref="654312118" role="forward"/>
  <member type="way" ref="723981318" role="forward"/>
  <member type="way" ref="654312119" role=""/>
  <member type="way" ref="194160359" role="forward"/>
  <member type="way" ref="36334203" role="forward"/>
  <member type="way" ref="194160358" role="forward"/>
  <member type="way" ref="194160344" role="forward"/>
  <member type="way" ref="329761953" role="forward"/>
  <member type="way" ref="287750384" role="forward"/>
  <member type="way" ref="287750383" role="forward"/>
  <member type="way" ref="287750381" role="forward"/>
  <member type="way" ref="223088363" role="forward"/>
  <member type="way" ref="88213543" role="forward"/>
  <member type="way" ref="619146334" role=""/>
  <member type="way" ref="88213566" role="forward"/>
  <member type="way" ref="747058930" role="forward"/>
  <member type="way" ref="747058931" role="forward"/>
  <member type="way" ref="747058934" role="forward"/>
  <member type="way" ref="747058935" role="forward"/>
  <member type="way" ref="114430674" role="forward"/>
  <member type="way" ref="721525676" role="forward"/>
  <member type="way" ref="708742133" role="forward"/>
  <member type="way" ref="747058932" role="forward"/>
  <member type="way" ref="747058936" role="forward"/>
  <member type="way" ref="747058933" role="forward"/>
  <member type="way" ref="114430651" role="forward"/>
  <member type="way" ref="114430671" role="forward"/>
  <member type="way" ref="721525677" role="forward"/>
  <member type="way" ref="114437861" role=""/>
  <member type="way" ref="114430520" role="forward"/>
  <member type="way" ref="88213549" role="forward"/>
  <member type="way" ref="721518084" role="forward"/>
  <member type="way" ref="209610522" role="forward"/>
  <member type="way" ref="209610523" role="forward"/>
  <member type="way" ref="209610524" role="forward"/>
  <member type="way" ref="131238804" role="forward"/>
  <member type="way" ref="623424081" role="forward"/>
  <member type="way" ref="721518083" role="forward"/>
  <member type="way" ref="86479990" role="forward"/>
  <member type="way" ref="86479979" role="forward"/>
  <member type="way" ref="793507033" role=""/>
  <member type="way" ref="793507036" role=""/>
  <member type="way" ref="701063604" role="forward"/>
  <member type="way" ref="219768929" role="forward"/>
  <member type="way" ref="221454598" role="forward"/>
  <member type="way" ref="221454601" role="forward"/>
  <member type="way" ref="219768934" role="forward"/>
  <member type="way" ref="53003783" role="forward"/>
  <member type="way" ref="219768935" role="forward"/>
  <member type="way" ref="219768931" role="forward"/>
  <member type="way" ref="230711032" role="forward"/>
  <member type="way" ref="230710991" role="forward"/>
  <member type="way" ref="219768927" role="forward"/>
  <member type="way" ref="230711023" role="forward"/>
  <member type="way" ref="679125118" role="forward"/>
  <member type="way" ref="679125128" role="forward"/>
  <member type="way" ref="679125129" role="forward"/>
  <member type="way" ref="679125124" role="forward"/>
  <member type="way" ref="679125125" role="forward"/>
  <member type="way" ref="793542161" role="forward"/>
  <member type="way" ref="793542162" role="forward"/>
  <member type="way" ref="793542163" role="forward"/>
  <member type="way" ref="793542164" role="forward"/>
  <member type="way" ref="793542165" role="forward"/>
  <member type="way" ref="793542166" role="forward"/>
  <member type="way" ref="793542167" role="forward"/>
  <member type="way" ref="793542168" role="forward"/>
  <member type="way" ref="679125126" role="forward"/>
  <member type="way" ref="718375137" role="forward"/>
  <member type="way" ref="718375134" role="forward"/>
  <member type="way" ref="173397678" role="forward"/>
  <member type="way" ref="613513032" role="forward"/>
  <member type="way" ref="613513026" role="forward"/>
  <member type="way" ref="484987701" role="forward"/>
  <member type="way" ref="484987703" role="forward"/>
  <member type="way" ref="307250965" role="forward"/>
  <member type="way" ref="307250968" role="forward"/>
  <member type="way" ref="307250971" role="forward"/>
  <member type="way" ref="307250969" role="forward"/>
  <member type="way" ref="48068817" role="forward"/>
  <member type="way" ref="347315553" role="forward"/>
  <member type="way" ref="347315550" role="forward"/>
  <member type="way" ref="53011528" role="forward"/>
  <member type="way" ref="424820272" role="forward"/>
  <member type="way" ref="424820274" role="forward"/>
  <member type="way" ref="569916832" role="forward"/>
  <member type="way" ref="569916831" role="forward"/>
  <member type="way" ref="465623281" role="forward"/>
  <member type="way" ref="465623282" role="forward"/>
  <member type="way" ref="135783667" role="forward"/>
  <member type="way" ref="135783635" role="forward"/>
  <member type="way" ref="135783642" role="forward"/>
  <member type="way" ref="135783631" role="forward"/>
  <member type="way" ref="48068819" role="forward"/>
  <member type="way" ref="230728236" role="forward"/>
  <member type="way" ref="230728235" role="forward"/>
  <member type="way" ref="135783645" role="forward"/>
  <member type="way" ref="135783640" role="forward"/>
  <member type="way" ref="135783636" role="forward"/>
  <member type="way" ref="135783663" role="forward"/>
  <member type="way" ref="135783647" role="forward"/>
  <member type="way" ref="135783665" role="forward"/>
  <member type="way" ref="135783661" role="forward"/>
  <member type="way" ref="135783641" role="forward"/>
  <member type="way" ref="248463364" role="forward"/>
  <member type="way" ref="248463365" role="forward"/>
  <member type="way" ref="628376975" role="forward"/>
  <member type="way" ref="628376977" role="forward"/>
  <member type="way" ref="465519835" role="forward"/>
  <member type="way" ref="465519837" role="forward"/>
  <member type="way" ref="48068815" role="forward"/>
  <member type="way" ref="152592554" role="forward"/>
  <member type="way" ref="152592552" role="forward"/>
  <member type="way" ref="152592556" role="forward"/>
  <member type="way" ref="152592555" role="forward"/>
  <member type="way" ref="248475428" role="forward"/>
  <member type="way" ref="248475427" role="forward"/>
  <member type="way" ref="288798451" role="forward"/>
  <member type="way" ref="288798453" role="forward"/>
  <member type="way" ref="82283298" role="forward"/>
  <member type="way" ref="82283296" role="forward"/>
  <member type="way" ref="755509996" role="forward"/>
  <member type="way" ref="53015766" role="forward"/>
  <member type="way" ref="177783558" role="forward"/>
  <member type="way" ref="177783559" role="forward"/>
  <member type="way" ref="177783563" role="forward"/>
  <member type="way" ref="177783568" role="forward"/>
  <member type="way" ref="177783564" role="forward"/>
  <member type="way" ref="177783562" role="forward"/>
  <member type="way" ref="195746370" role="forward"/>
  <member type="way" ref="195746365" role="forward"/>
  <member type="way" ref="220285664" role="forward"/>
  <member type="way" ref="220285665" role="forward"/>
  <member type="way" ref="59777955" role="forward"/>
  <member type="way" ref="157111155" role="forward"/>
  <member type="way" ref="191446757" role="forward"/>
  <member type="way" ref="191446759" role="forward"/>
  <member type="way" ref="191446756" role="forward"/>
  <member type="way" ref="191446758" role="forward"/>
  <member type="way" ref="191453125" role="forward"/>
  <member type="way" ref="191453126" role="forward"/>
  <member type="way" ref="220888325" role="forward"/>
  <member type="way" ref="220888321" role="forward"/>
  <member type="way" ref="220888320" role="forward"/>
  <member type="way" ref="220888327" role="forward"/>
  <member type="way" ref="220959799" role="forward"/>
  <member type="way" ref="220959798" role="forward"/>
  <member type="way" ref="614004453" role="forward"/>
  <member type="way" ref="614004454" role="forward"/>
  <member type="way" ref="613459411" role="forward"/>
  <member type="way" ref="614004458" role="forward"/>
  <member type="way" ref="614004460" role="forward"/>
  <member type="way" ref="613459406" role="forward"/>
  <member type="way" ref="220888331" role="forward"/>
  <member type="way" ref="220888330" role="forward"/>
  <member type="way" ref="191468575" role="forward"/>
  <member type="way" ref="191468569" role="forward"/>
  <member type="way" ref="610589770" role="forward"/>
  <member type="way" ref="610589771" role="forward"/>
  <member type="way" ref="220069824" role="forward"/>
  <member type="way" ref="220069823" role="forward"/>
  <member type="way" ref="220888318" role="forward"/>
  <member type="way" ref="220888328" role="forward"/>
  <member type="way" ref="220888322" role="forward"/>
  <member type="way" ref="195746374" role="forward"/>
  <member type="way" ref="220888346" role="forward"/>
  <member type="way" ref="195746404" role="forward"/>
  <member type="way" ref="220888326" role="forward"/>
  <member type="way" ref="220888323" role="forward"/>
  <member type="way" ref="220888329" role="forward"/>
  <member type="way" ref="220888324" role="forward"/>
  <member type="way" ref="191468571" role="forward"/>
  <member type="way" ref="191468568" role="forward"/>
  <member type="way" ref="191468570" role="forward"/>
  <member type="way" ref="220888340" role="forward"/>
  <member type="way" ref="390305642" role="forward"/>
  <member type="way" ref="390305641" role="forward"/>
  <member type="way" ref="220888341" role="forward"/>
  <member type="way" ref="573711692" role="forward"/>
  <member type="way" ref="573711691" role="forward"/>
  <member type="way" ref="220888348" role="forward"/>
  <member type="way" ref="220888334" role="forward"/>
  <member type="way" ref="717912759" role="forward"/>
  <member type="way" ref="4424601" role="forward"/>
  <member type="way" ref="36355553" role="forward"/>
  <member type="way" ref="186894414" role="forward"/>
  <member type="way" ref="118181540" role="forward"/>
  <member type="way" ref="118181520" role="forward"/>
  <member type="way" ref="262899076" role="forward"/>
  <member type="way" ref="262899556" role="forward"/>
  <member type="way" ref="231655571" role="forward"/>
  <member type="way" ref="193973164" role="forward"/>
  <member type="way" ref="193973165" role="forward"/>
  <member type="way" ref="304756621" role="forward"/>
  <member type="way" ref="843238461" role="forward"/>
  <member type="way" ref="441659663" role="forward"/>
  <member type="way" ref="586590312" role="forward"/>
  <member type="way" ref="175034770" role="forward"/>
  <member type="way" ref="544283318" role="forward"/>
  <member type="way" ref="588581937" role="forward"/>
  <member type="way" ref="588888108" role="forward"/>
  <member type="way" ref="654398327" role="forward"/>
  <member type="way" ref="174921086" role="forward"/>
  <member type="way" ref="544320747" role="forward"/>
  <tag k="description" v="E 97 Херсон - Ашкале"/>
  <tag k="description:fr" v="E 97 Kherson - Aşkale"/>
  <tag k="e-road:class" v="A-intermediate"/>
  <tag k="name" v="European route E 97"/>
  <tag k="name:de" v="Europastraße 97"/>
  <tag k="name:fr" v="Route européenne E 97"/>
  <tag k="name:ru" v="Европейский маршрут E 97"/>
  <tag k="name:uk" v="ЄвропейсЬкий маршрут E 97"/>
  <tag k="network" v="e-road"/>
  <tag k="ref" v="E 97"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q784392"/>
  <tag k="wikipedia" v="en:European route E97"/>
 </relation>
 <relation id="7771816" visible="true" version="44" changeset="89257981" timestamp="2020-08-11T14:50:11Z" user="Qotola" uid="8746535">
  <member type="way" ref="543780211" role=""/>
  <member type="way" ref="120223290" role=""/>
  <member type="way" ref="79524344" role=""/>
  <member type="way" ref="79524357" role=""/>
  <member type="way" ref="175050848" role=""/>
  <member type="way" ref="119276415" role="forward"/>
  <member type="way" ref="442147760" role="forward"/>
  <member type="way" ref="442147767" role="forward"/>
  <member type="way" ref="547440066" role="forward"/>
  <member type="way" ref="533090674" role="forward"/>
  <member type="way" ref="383939314" role="forward"/>
  <member type="way" ref="119276433" role="forward"/>
  <member type="way" ref="441670933" role="forward"/>
  <member type="way" ref="441670932" role="forward"/>
  <member type="way" ref="511895472" role="forward"/>
  <member type="way" ref="511895470" role="forward"/>
  <member type="way" ref="175045379" role="forward"/>
  <member type="way" ref="712452977" role="forward"/>
  <member type="way" ref="130629279" role="forward"/>
  <member type="way" ref="511895469" role="forward"/>
  <member type="way" ref="511895471" role="forward"/>
  <member type="way" ref="119276390" role="forward"/>
  <member type="way" ref="442147761" role="forward"/>
  <member type="way" ref="543780208" role="forward"/>
  <member type="way" ref="606737751" role=""/>
  <member type="way" ref="623290760" role=""/>
  <member type="way" ref="712452981" role=""/>
  <member type="way" ref="597745917" role=""/>
  <member type="way" ref="606737759" role=""/>
  <member type="way" ref="294404052" role="forward"/>
  <member type="way" ref="441659646" role="forward"/>
  <member type="way" ref="96046859" role="forward"/>
  <member type="way" ref="414985586" role="forward"/>
  <member type="way" ref="544150347" role="forward"/>
  <member type="way" ref="734942289" role="forward"/>
  <member type="way" ref="481989074" role="forward"/>
  <member type="way" ref="734942291" role="forward"/>
  <member type="way" ref="543779008" role="forward"/>
  <member type="way" ref="734942292" role="forward"/>
  <member type="way" ref="123451996" role="forward"/>
  <member type="way" ref="408237219" role="forward"/>
  <member type="way" ref="130629480" role="forward"/>
  <member type="way" ref="123451992" role="forward"/>
  <member type="way" ref="294404051" role="forward"/>
  <member type="way" ref="175029421" role="forward"/>
  <member type="way" ref="120226281" role="forward"/>
  <member type="way" ref="130730800" role="forward"/>
  <member type="way" ref="130730799" role="forward"/>
  <member type="way" ref="398318156" role="forward"/>
  <member type="way" ref="544284952" role="forward"/>
  <member type="way" ref="123449468" role="forward"/>
  <member type="way" ref="547296513" role="forward"/>
  <member type="way" ref="544222582" role="forward"/>
  <member type="way" ref="123449467" role="forward"/>
  <member type="way" ref="420091231" role="forward"/>
  <member type="way" ref="544284955" role="forward"/>
  <member type="way" ref="401412818" role="forward"/>
  <member type="way" ref="401521971" role="forward"/>
  <member type="way" ref="401521972" role="forward"/>
  <member type="way" ref="401521970" role="forward"/>
  <member type="way" ref="401521973" role="forward"/>
  <member type="way" ref="544284951" role="forward"/>
  <member type="way" ref="544227405" role="forward"/>
  <member type="way" ref="544227406" role="forward"/>
  <member type="way" ref="294404050" role="forward"/>
  <member type="way" ref="439421037" role="forward"/>
  <member type="way" ref="40128640" role="forward"/>
  <member type="way" ref="231500633" role="forward"/>
  <member type="way" ref="544298618" role="forward"/>
  <member type="way" ref="544227402" role="forward"/>
  <member type="way" ref="528652339" role="forward"/>
  <member type="way" ref="161978216" role="forward"/>
  <member type="way" ref="544406447" role="forward"/>
  <member type="way" ref="122658000" role="forward"/>
  <member type="way" ref="471504123" role="forward"/>
  <member type="way" ref="544406445" role="forward"/>
  <member type="way" ref="544284949" role="forward"/>
  <member type="way" ref="498205745" role="forward"/>
  <member type="way" ref="586598838" role="backward"/>
  <member type="way" ref="392563198" role=""/>
  <member type="way" ref="488998683" role=""/>
  <member type="way" ref="547303100" role=""/>
  <member type="way" ref="296471656" role=""/>
  <member type="way" ref="34905732" role=""/>
  <member type="way" ref="668448007" role=""/>
  <member type="way" ref="489728525" role=""/>
  <member type="way" ref="231316679" role=""/>
  <member type="way" ref="696679962" role="forward"/>
  <member type="way" ref="34912055" role="forward"/>
  <member type="way" ref="546502700" role="forward"/>
  <member type="way" ref="692398515" role="forward"/>
  <member type="way" ref="162600729" role="forward"/>
  <member type="way" ref="130630787" role="forward"/>
  <member type="way" ref="294414179" role="forward"/>
  <member type="way" ref="544069327" role="forward"/>
  <member type="way" ref="476017137" role="forward"/>
  <member type="way" ref="162600728" role="forward"/>
  <member type="way" ref="544069325" role="forward"/>
  <member type="way" ref="461296343" role="forward"/>
  <member type="way" ref="461296341" role="forward"/>
  <member type="way" ref="391748547" role="forward"/>
  <member type="way" ref="161978214" role="forward"/>
  <member type="way" ref="544429591" role="forward"/>
  <member type="way" ref="122657966" role="forward"/>
  <member type="way" ref="692398517" role="forward"/>
  <member type="way" ref="441670934" role="forward"/>
  <member type="way" ref="586598837" role="forward"/>
  <member type="way" ref="401406278" role="forward"/>
  <member type="way" ref="656699860" role="forward"/>
  <member type="way" ref="231500636" role="forward"/>
  <member type="way" ref="127872358" role="forward"/>
  <member type="way" ref="120226276" role="forward"/>
  <member type="way" ref="673893128" role="backward"/>
  <member type="way" ref="544150344" role="backward"/>
  <member type="way" ref="673893129" role="forward"/>
  <member type="way" ref="161414398" role="forward"/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <tag k="name" v="17"/>
  <tag k="network" v="batauto.ge"/>
  <tag k="operator" v="batauto.ge"/>
  <tag k="ref" v="17"/>
  <tag k="route" v="bus"/>
  <tag k="type" v="route"/>
 </relation>
 <relation id="7777921" visible="true" version="27" changeset="90301520" timestamp="2020-09-02T11:36:46Z" user="Geirangerfjord" uid="10334749">
  <member type="node" ref="6456231684" role="platform"/>
  <member type="node" ref="1757030236" role="stop"/>
  <member type="node" ref="2967917294" role="platform"/>
  <member type="node" ref="6456231886" role="stop"/>
  <member type="node" ref="4249246290" role="platform"/>
  <member type="node" ref="6456231887" role="stop"/>
  <member type="node" ref="5314525122" role="platform"/>
  <member type="node" ref="6456231891" role="stop"/>
  <member type="node" ref="6456231890" role="platform"/>
  <member type="node" ref="6456231892" role="stop"/>
  <member type="node" ref="6456231893" role="platform"/>
  <member type="node" ref="6456231894" role="stop"/>
  <member type="node" ref="6456231895" role="platform"/>
  <member type="node" ref="6456231897" role="stop"/>
  <member type="node" ref="6456231899" role="platform"/>
  <member type="node" ref="6456231900" role="stop"/>
  <member type="node" ref="6456231901" role="platform"/>
  <member type="node" ref="6456231902" role="stop"/>
  <member type="node" ref="6456231903" role="platform"/>
  <member type="node" ref="6456231904" role="stop"/>
  <member type="node" ref="6456231905" role="platform"/>
  <member type="node" ref="6446690363" role="stop"/>
  <member type="node" ref="4268542591" role="platform"/>
  <member type="node" ref="6446690377" role="stop"/>
  <member type="node" ref="6446690378" role="platform"/>
  <member type="node" ref="4038382726" role="stop"/>
  <member type="node" ref="6446690381" role="platform"/>
  <member type="node" ref="6456231908" role="platform"/>
  <member type="node" ref="6456231912" role="platform"/>
  <member type="node" ref="6456231914" role="platform"/>
  <member type="node" ref="6456231915" role="platform"/>
  <member type="node" ref="6456231917" role="platform"/>
  <member type="node" ref="6456231919" role="platform"/>
  <member type="node" ref="6456231920" role="platform"/>
  <member type="node" ref="6456231921" role="platform"/>
  <member type="node" ref="6456231923" role="platform"/>
  <member type="node" ref="6456231943" role="platform"/>
  <member type="node" ref="6456231944" role="platform"/>
  <member type="node" ref="6456231947" role="platform"/>
  <member type="node" ref="6456231951" role="platform"/>
  <member type="node" ref="4244892391" role="platform"/>
  <member type="node" ref="6456231952" role="platform"/>
  <member type="node" ref="6456231955" role="platform"/>
  <member type="node" ref="6456231956" role="platform"/>
  <member type="node" ref="4328504491" role="platform"/>
  <member type="node" ref="4328503989" role="platform"/>
  <member type="node" ref="6456231957" role="platform"/>
  <member type="node" ref="6456231959" role="platform"/>
  <member type="node" ref="6456231961" role="platform"/>
  <member type="node" ref="6456231962" role="platform"/>
  <member type="way" ref="461298300" role=""/>
  <member type="way" ref="734942292" role=""/>
  <member type="way" ref="174921087" role=""/>
  <member type="way" ref="544320746" role=""/>
  <member type="way" ref="591998658" role=""/>
  <member type="way" ref="654398328" role=""/>
  <member type="way" ref="654398329" role=""/>
  <member type="way" ref="392557605" role=""/>
  <member type="way" ref="588575476" role=""/>
  <member type="way" ref="588888105" role=""/>
  <member type="way" ref="175034766" role=""/>
  <member type="way" ref="547264534" role=""/>
  <member type="way" ref="546274622" role=""/>
  <member type="way" ref="821114305" role=""/>
  <member type="way" ref="34910875" role=""/>
  <member type="way" ref="441670935" role=""/>
  <member type="way" ref="416027656" role=""/>
  <member type="way" ref="528652339" role=""/>
  <member type="way" ref="544284948" role=""/>
  <member type="way" ref="544284949" role=""/>
  <member type="way" ref="498205745" role=""/>
  <member type="way" ref="586598837" role=""/>
  <member type="way" ref="401406278" role=""/>
  <member type="way" ref="656699860" role=""/>
  <member type="way" ref="231500636" role=""/>
  <member type="way" ref="127872358" role=""/>
  <member type="way" ref="120226276" role=""/>
  <member type="way" ref="120226281" role=""/>
  <member type="way" ref="130730800" role=""/>
  <member type="way" ref="130730799" role=""/>
  <member type="way" ref="398318156" role=""/>
  <member type="way" ref="544284952" role=""/>
  <member type="way" ref="123449468" role=""/>
  <member type="way" ref="547296513" role=""/>
  <member type="way" ref="544222582" role=""/>
  <member type="way" ref="123449467" role=""/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <tag k="name" v="№16"/>
  <tag k="name:en" v="Bus 16: Tbilisi square - Sarpi"/>
  <tag k="name:ru" v="Автобус №16: Тбилисская площадь - Сарпи"/>
  <tag k="operator" v="batauto.ge"/>
  <tag k="public_transport:version" v="2"/>
  <tag k="ref" v="16"/>
  <tag k="route" v="bus"/>
  <tag k="type" v="route"/>
 </relation>
 <relation id="7884303" visible="true" version="97" changeset="88876766" timestamp="2020-08-03T12:20:58Z" user="aytfadc" uid="58255">
  <member type="relation" ref="2147162" role=""/>
  <member type="relation" ref="72825" role=""/>
  <member type="relation" ref="26802" role=""/>
  <member type="relation" ref="2133091" role=""/>
  <member type="relation" ref="2147287" role=""/>
  <member type="relation" ref="76274" role=""/>
  <member type="relation" ref="60745" role=""/>
  <member type="relation" ref="73447" role=""/>
  <member type="relation" ref="48042" role=""/>
  <member type="relation" ref="35065" role=""/>
  <member type="relation" ref="26791" role=""/>
  <member type="relation" ref="2332838" role=""/>
  <member type="relation" ref="52831" role=""/>
  <member type="relation" ref="103222" role=""/>
  <member type="relation" ref="190821" role=""/>
  <member type="relation" ref="74673" role=""/>
  <member type="relation" ref="36947" role=""/>
  <member type="relation" ref="74693" role=""/>
  <member type="relation" ref="21359" role=""/>
  <member type="relation" ref="74696" role=""/>
  <member type="relation" ref="32943" role=""/>
  <member type="relation" ref="78013" role=""/>
  <member type="relation" ref="2817296" role=""/>
  <member type="relation" ref="72927" role=""/>
  <member type="relation" ref="48100" role=""/>
  <member type="relation" ref="79090" role=""/>
  <member type="relation" ref="33702" role=""/>
  <member type="relation" ref="84339" role=""/>
  <member type="relation" ref="20990" role=""/>
  <member type="relation" ref="78826" role=""/>
  <member type="relation" ref="2817637" role=""/>
  <member type="relation" ref="78509" role=""/>
  <member type="relation" ref="72170" role=""/>
  <member type="relation" ref="2148378" role=""/>
  <member type="relation" ref="31354" role=""/>
  <member type="relation" ref="27539" role=""/>
  <member type="relation" ref="2223656" role=""/>
  <member type="relation" ref="56555" role=""/>
  <member type="relation" ref="26621" role=""/>
  <member type="relation" ref="32572" role=""/>
  <member type="relation" ref="84338" role=""/>
  <member type="relation" ref="23063" role=""/>
  <member type="relation" ref="57817" role=""/>
  <member type="relation" ref="20773" role=""/>
  <member type="relation" ref="80523" role=""/>
  <member type="relation" ref="80043" role=""/>
  <member type="relation" ref="73057" role=""/>
  <member type="relation" ref="31491" role=""/>
  <member type="relation" ref="75486" role=""/>
  <member type="relation" ref="80053" role=""/>
  <member type="relation" ref="2148636" role=""/>
  <member type="relation" ref="108340" role=""/>
  <member type="relation" ref="77040" role=""/>
  <member type="relation" ref="21572" role=""/>
  <member type="relation" ref="6410283" role=""/>
  <member type="relation" ref="3010573" role=""/>
  <member type="relation" ref="2399357" role=""/>
  <member type="relation" ref="144173" role=""/>
  <member type="relation" ref="20869" role=""/>
  <member type="relation" ref="1652434" role=""/>
  <member type="relation" ref="3529513" role=""/>
  <member type="relation" ref="77546" role=""/>
  <member type="relation" ref="92308" role=""/>
  <member type="relation" ref="33232" role=""/>
  <member type="relation" ref="38304" role=""/>
  <member type="relation" ref="6263623" role=""/>
  <member type="relation" ref="38260" role=""/>
  <member type="relation" ref="572256" role=""/>
  <member type="relation" ref="27057" role=""/>
  <member type="relation" ref="38345" role=""/>
  <member type="relation" ref="77376" role=""/>
  <member type="relation" ref="38373" role=""/>
  <member type="relation" ref="186923" role=""/>
  <member type="relation" ref="2092611" role=""/>
  <member type="relation" ref="110270" role=""/>
  <member type="relation" ref="2399364" role=""/>
  <member type="relation" ref="69720" role=""/>
  <member type="relation" ref="38273" role=""/>
  <member type="relation" ref="1998065" role=""/>
  <member type="relation" ref="38258" role=""/>
  <member type="relation" ref="92877" role=""/>
  <member type="relation" ref="33698" role=""/>
  <member type="relation" ref="6410380" role=""/>
  <member type="relation" ref="7698875" role=""/>
  <member type="relation" ref="164014" role=""/>
  <member type="relation" ref="156092" role=""/>
  <member type="relation" ref="156514" role=""/>
  <member type="relation" ref="27994" role=""/>
  <member type="relation" ref="2048368" role=""/>
  <member type="relation" ref="158701" role=""/>
  <member type="relation" ref="34253" role=""/>
  <member type="relation" ref="1084054" role=""/>
  <member type="relation" ref="2314106" role=""/>
  <member type="relation" ref="158573" role=""/>
  <member type="relation" ref="3346319" role=""/>
  <member type="relation" ref="158700" role=""/>
  <member type="relation" ref="281674" role=""/>
  <member type="relation" ref="125452" role=""/>
  <member type="relation" ref="2094111" role=""/>
  <member type="relation" ref="2817790" role=""/>
  <member type="relation" ref="28929" role=""/>
  <member type="relation" ref="1789104" role=""/>
  <member type="relation" ref="2817677" role=""/>
  <member type="relation" ref="7215270" role=""/>
  <member type="relation" ref="2817773" role=""/>
  <member type="relation" ref="2817782" role=""/>
  <member type="relation" ref="215393" role=""/>
  <member type="relation" ref="963630" role=""/>
  <member type="relation" ref="6252885" role=""/>
  <member type="relation" ref="75433" role=""/>
  <member type="relation" ref="75438" role=""/>
  <member type="relation" ref="78271" role=""/>
  <member type="relation" ref="68577" role=""/>
  <member type="relation" ref="68590" role=""/>
  <member type="relation" ref="80485" role=""/>
  <member type="relation" ref="32973" role=""/>
  <member type="relation" ref="61501" role=""/>
  <member type="relation" ref="32953" role=""/>
  <member type="relation" ref="3206788" role=""/>
  <member type="relation" ref="214487" role=""/>
  <member type="relation" ref="190840" role=""/>
  <member type="relation" ref="78837" role=""/>
  <member type="relation" ref="75144" role=""/>
  <member type="relation" ref="78840" role=""/>
  <member type="relation" ref="17502" role=""/>
  <member type="relation" ref="68591" role=""/>
  <member type="relation" ref="172531" role=""/>
  <member type="relation" ref="2745034" role=""/>
  <member type="relation" ref="2745035" role=""/>
  <member type="relation" ref="6266559" role=""/>
  <member type="relation" ref="3904095" role=""/>
  <member type="relation" ref="88503" role=""/>
  <member type="relation" ref="79765" role=""/>
  <member type="relation" ref="73498" role=""/>
  <member type="relation" ref="6839261" role=""/>
  <member type="relation" ref="68585" role=""/>
  <member type="relation" ref="84451" role=""/>
  <member type="relation" ref="86739" role=""/>
  <member type="relation" ref="21900" role=""/>
  <member type="relation" ref="229973" role=""/>
  <member type="relation" ref="85936" role=""/>
  <member type="relation" ref="228525" role=""/>
  <member type="relation" ref="67631" role=""/>
  <member type="relation" ref="5196088" role=""/>
  <member type="relation" ref="3905533" role=""/>
  <member type="relation" ref="3905549" role=""/>
  <member type="relation" ref="108203" role=""/>
  <member type="relation" ref="3906144" role=""/>
  <member type="relation" ref="6252938" role=""/>
  <member type="relation" ref="79015" role=""/>
  <member type="relation" ref="82573" role=""/>
  <member type="relation" ref="229810" role=""/>
  <member type="relation" ref="6411395" role=""/>
  <member type="relation" ref="2121922" role=""/>
  <member type="relation" ref="2122034" role=""/>
  <member type="relation" ref="38267" role=""/>
  <member type="relation" ref="38441" role=""/>
  <member type="relation" ref="38284" role=""/>
  <member type="relation" ref="6266611" role=""/>
  <member type="relation" ref="38317" role=""/>
  <member type="relation" ref="4072955" role=""/>
  <member type="relation" ref="154327" role=""/>
  <member type="relation" ref="6266680" role=""/>
  <member type="relation" ref="38625" role=""/>
  <member type="relation" ref="170359" role=""/>
  <member type="relation" ref="976097" role=""/>
  <member type="relation" ref="899167" role=""/>
  <member type="relation" ref="976263" role=""/>
  <member type="relation" ref="73457" role=""/>
  <member type="relation" ref="75490" role=""/>
  <member type="relation" ref="900573" role=""/>
  <member type="relation" ref="1175648" role=""/>
  <member type="relation" ref="92329" role=""/>
  <member type="relation" ref="6449113" role=""/>
  <member type="relation" ref="6410448" role=""/>
  <member type="relation" ref="6410454" role=""/>
  <member type="relation" ref="38436" role=""/>
  <member type="relation" ref="38437" role=""/>
  <member type="relation" ref="2194571" role=""/>
  <member type="relation" ref="38303" role=""/>
  <member type="relation" ref="6410456" role=""/>
  <member type="relation" ref="6410463" role=""/>
  <member type="relation" ref="1650459" role=""/>
  <member type="relation" ref="1722968" role=""/>
  <member type="relation" ref="3906304" role=""/>
  <member type="relation" ref="70885" role=""/>
  <member type="relation" ref="1202486" role=""/>
  <member type="relation" ref="74886" role=""/>
  <member type="relation" ref="6266476" role=""/>
  <member type="relation" ref="1824555" role=""/>
  <member type="relation" ref="4028594" role=""/>
  <member type="relation" ref="2328885" role=""/>
  <member type="relation" ref="2603148" role=""/>
  <member type="relation" ref="2329192" role=""/>
  <member type="relation" ref="1086284" role=""/>
  <member type="relation" ref="38352" role=""/>
  <member type="relation" ref="270398" role=""/>
  <member type="relation" ref="2770644" role=""/>
  <member type="relation" ref="3344515" role=""/>
  <member type="relation" ref="89529" role=""/>
  <member type="relation" ref="6410467" role=""/>
  <member type="relation" ref="3970914" role=""/>
  <member type="relation" ref="6448422" role=""/>
  <member type="relation" ref="6410473" role=""/>
  <member type="relation" ref="6256177" role=""/>
  <member type="relation" ref="6256246" role=""/>
  <member type="relation" ref="6401532" role=""/>
  <member type="relation" ref="6402208" role=""/>
  <member type="relation" ref="6402214" role=""/>
  <member type="relation" ref="6256280" role=""/>
  <member type="relation" ref="6410490" role=""/>
  <member type="relation" ref="5640676" role=""/>
  <member type="relation" ref="1844441" role=""/>
  <member type="relation" ref="102595" role=""/>
  <member type="relation" ref="5513689" role=""/>
  <member type="relation" ref="255782" role=""/>
  <member type="relation" ref="6410526" role=""/>
  <member type="relation" ref="74910" role=""/>
  <member type="relation" ref="89532" role=""/>
  <member type="relation" ref="6449009" role=""/>
  <member type="relation" ref="147056" role=""/>
  <member type="relation" ref="147976" role=""/>
  <member type="relation" ref="142946" role=""/>
  <member type="relation" ref="1930294" role=""/>
  <member type="relation" ref="400179" role=""/>
  <member type="relation" ref="361393" role=""/>
  <member type="relation" ref="6411362" role=""/>
  <member type="relation" ref="6897625" role=""/>
  <member type="relation" ref="6923666" role=""/>
  <member type="relation" ref="4243136" role=""/>
  <member type="relation" ref="1770166" role=""/>
  <member type="relation" ref="5866045" role=""/>
  <member type="relation" ref="5944201" role=""/>
  <member type="relation" ref="5864974" role=""/>
  <member type="relation" ref="5864975" role=""/>
  <member type="relation" ref="5864976" role=""/>
  <member type="relation" ref="5864977" role=""/>
  <member type="relation" ref="5942710" role=""/>
  <member type="relation" ref="5864978" role=""/>
  <member type="relation" ref="8418873" role=""/>
  <member type="relation" ref="8235498" role=""/>
  <member type="relation" ref="8542404" role=""/>
  <member type="relation" ref="8235463" role=""/>
  <member type="relation" ref="8235454" role=""/>
  <member type="relation" ref="7591671" role=""/>
  <member type="relation" ref="6482805" role=""/>
  <member type="relation" ref="6424928" role=""/>
  <member type="relation" ref="7588949" role=""/>
  <tag k="int_network" v="e-road"/>
  <tag k="name" v="Routes européennes"/>
  <tag k="name:an" v="Rete de carreteras europeas"/>
  <tag k="name:be" v="Сетка міжнародных еўрапейскіх аўтадарог"/>
  <tag k="name:bg" v="Европейска пътна мрежа"/>
  <tag k="name:bs" v="Međunarodna mreža E-puteva"/>
  <tag k="name:ca" v="Xarxa de carreteres europees"/>
  <tag k="name:cs" v="Evropské silnice"/>
  <tag k="name:cv" v="Европа автомаршручĕсем"/>
  <tag k="name:da" v="Europaveje"/>
  <tag k="name:de" v="Europastraßen"/>
  <tag k="name:el" v="Διεθνές δίκτυο Ε-οδών"/>
  <tag k="name:en" v="International European route network"/>
  <tag k="name:eo" v="Eŭropa ŝoseo"/>
  <tag k="name:es" v="Red de Carreteras Europeas"/>
  <tag k="name:et" v="Rahvusvaheline E-teede võrk"/>
  <tag k="name:fi" v="Eurooppatiet"/>
  <tag k="name:fr" v="Routes européennes"/>
  <tag k="name:hr" v="Europska mreža međunarodnih puteva"/>
  <tag k="name:hu" v="Európai úthálózat"/>
  <tag k="name:is" v="Evrópuvegur"/>
  <tag k="name:it" v="Strade europee"/>
  <tag k="name:ja" v="欧州自動車道路"/>
  <tag k="name:ka" v="ევროპის საერთაშორისო E საავტომობილო მაგისტრალების ქსელი"/>
  <tag k="name:ko" v="유럽 고속도로"/>
  <tag k="name:lb" v="Europastrooss"/>
  <tag k="name:lt" v="Tarptautinis Europos kelių tinklas"/>
  <tag k="name:nl" v="E-routenetwerk"/>
  <tag k="name:nn" v="Europavegar"/>
  <tag k="name:no" v="Europaveier"/>
  <tag k="name:pl" v="Międzynarodowa sieć tras europejskich"/>
  <tag k="name:pt" v="Estradas europeias"/>
  <tag k="name:ro" v="Rețeaua de drumuri europene"/>
  <tag k="name:sk" v="Európska cesta"/>
  <tag k="name:sl" v="Vseevropsko cestno omrežje"/>
  <tag k="name:sr" v="Европска мрежа међународних путева"/>
  <tag k="name:sr-Latn" v="Evropska mreža međunarodnih puteva"/>
  <tag k="name:sv" v="Europavägar"/>
  <tag k="name:tr" v="Avrupa E-yolları"/>
  <tag k="name:uk" v="Мережа європейських автошляхів"/>
  <tag k="name:zh" v="欧洲高速公路"/>
  <tag k="network" v="Europaveje"/>
  <tag k="start_date" v="1975"/>
  <tag k="type" v="network"/>
  <tag k="wikidata" v="Q106123"/>
  <tag k="wikipedia" v="en:International E-road network"/>
 </relation>
 <relation id="8101358" visible="true" version="1" changeset="57081912" timestamp="2018-03-11T13:56:09Z" user="katpatuka" uid="17497">
  <member type="node" ref="5470950475" role="label"/>
  <member type="node" ref="1295886150" role="admin_centre"/>
  <member type="way" ref="568701329" role="outer"/>
  <member type="way" ref="568701330" role="outer"/>
  <member type="way" ref="186511241" role="outer"/>
  <member type="way" ref="4523936" role="outer"/>
  <member type="way" ref="45981000" role="outer"/>
  <tag k="admin_level" v="6"/>
  <tag k="alt_name" v="Kemalpaşa ilçesi,Kemalpaşa District"/>
  <tag k="boundary" v="administrative"/>
  <tag k="is_in:country_code" v="TR"/>
  <tag k="name" v="Kemalpaşa"/>
  <tag k="name:ka" v="ქემალფაშა"/>
  <tag k="name:ru" v="Хопа"/>
  <tag k="network" v="TR08-districts"/>
  <tag k="type" v="boundary"/>
  <tag k="wikidata" v="Q4817429"/>
  <tag k="wikipedia" v="tr:Kemalpaşa, Artvin"/>
 </relation>
 <relation id="8452839" visible="true" version="33" changeset="90301520" timestamp="2020-09-02T11:36:46Z" user="Geirangerfjord" uid="10334749">
  <member type="way" ref="26343348" role=""/>
  <member type="way" ref="630738571" role=""/>
  <member type="way" ref="630738567" role=""/>
  <member type="way" ref="630738602" role=""/>
  <member type="way" ref="630738601" role=""/>
  <member type="way" ref="28087686" role=""/>
  <member type="way" ref="28087687" role=""/>
  <member type="way" ref="591616224" role=""/>
  <member type="way" ref="127301041" role=""/>
  <member type="way" ref="120126078" role=""/>
  <member type="way" ref="30529198" role=""/>
  <member type="way" ref="333354143" role=""/>
  <member type="way" ref="333354144" role=""/>
  <member type="way" ref="333354146" role=""/>
  <member type="way" ref="333354145" role=""/>
  <member type="way" ref="616795648" role=""/>
  <member type="way" ref="616795637" role=""/>
  <member type="way" ref="120284871" role=""/>
  <member type="way" ref="616795645" role=""/>
  <member type="way" ref="332916537" role=""/>
  <member type="way" ref="332916538" role=""/>
  <member type="way" ref="28087677" role=""/>
  <member type="way" ref="27120571" role=""/>
  <member type="way" ref="102254668" role=""/>
  <member type="way" ref="102254972" role=""/>
  <member type="way" ref="630216979" role=""/>
  <member type="way" ref="28087694" role=""/>
  <member type="way" ref="28087693" role=""/>
  <member type="way" ref="442147772" role=""/>
  <member type="way" ref="26343349" role=""/>
  <member type="way" ref="516939710" role=""/>
  <member type="way" ref="516939711" role=""/>
  <member type="way" ref="93187600" role=""/>
  <member type="way" ref="442147771" role=""/>
  <member type="way" ref="93187598" role=""/>
  <member type="way" ref="93419733" role=""/>
  <member type="way" ref="93419734" role=""/>
  <member type="way" ref="120171984" role=""/>
  <member type="way" ref="101184972" role=""/>
  <member type="way" ref="101179194" role=""/>
  <member type="way" ref="101179115" role=""/>
  <member type="way" ref="120171983" role=""/>
  <member type="way" ref="596137524" role=""/>
  <member type="way" ref="294042058" role=""/>
  <member type="way" ref="297725996" role=""/>
  <member type="way" ref="297726007" role=""/>
  <member type="way" ref="245659295" role=""/>
  <member type="way" ref="245659296" role=""/>
  <member type="way" ref="297725999" role=""/>
  <member type="way" ref="297725997" role=""/>
  <member type="way" ref="297725998" role=""/>
  <member type="way" ref="297726000" role=""/>
  <member type="way" ref="297726001" role=""/>
  <member type="way" ref="297726002" role=""/>
  <member type="way" ref="297726006" role=""/>
  <member type="way" ref="297726003" role=""/>
  <member type="way" ref="297726004" role=""/>
  <member type="way" ref="297726005" role=""/>
  <member type="way" ref="215187991" role=""/>
  <member type="way" ref="458288075" role=""/>
  <member type="way" ref="458288066" role=""/>
  <member type="way" ref="514129474" role=""/>
  <member type="way" ref="724088842" role=""/>
  <member type="way" ref="295735362" role=""/>
  <member type="way" ref="295735361" role=""/>
  <member type="way" ref="724088846" role=""/>
  <member type="way" ref="437768635" role=""/>
  <member type="way" ref="453743037" role=""/>
  <member type="way" ref="453743032" role=""/>
  <member type="way" ref="712450072" role=""/>
  <member type="way" ref="661694192" role=""/>
  <member type="way" ref="453743023" role=""/>
  <member type="way" ref="453743029" role=""/>
  <member type="way" ref="453743040" role=""/>
  <member type="way" ref="453743028" role=""/>
  <member type="way" ref="453743026" role=""/>
  <member type="way" ref="453743025" role=""/>
  <member type="way" ref="661694193" role=""/>
  <member type="way" ref="661694194" role=""/>
  <member type="way" ref="453743038" role=""/>
  <member type="way" ref="453743039" role=""/>
  <member type="way" ref="453743036" role=""/>
  <member type="way" ref="553734111" role=""/>
  <member type="way" ref="453743033" role=""/>
  <member type="way" ref="453743034" role=""/>
  <member type="way" ref="453743048" role=""/>
  <member type="way" ref="453743047" role=""/>
  <member type="way" ref="453743046" role=""/>
  <member type="way" ref="453743045" role=""/>
  <member type="way" ref="453743044" role=""/>
  <member type="way" ref="453743043" role=""/>
  <member type="way" ref="453743042" role=""/>
  <member type="way" ref="453743041" role=""/>
  <member type="way" ref="432060111" role=""/>
  <member type="way" ref="700425379" role=""/>
  <member type="way" ref="453743050" role=""/>
  <member type="way" ref="549400935" role=""/>
  <member type="way" ref="633894244" role=""/>
  <member type="way" ref="93180525" role=""/>
  <member type="way" ref="76559023" role=""/>
  <member type="way" ref="76559022" role=""/>
  <member type="way" ref="93181179" role=""/>
  <member type="way" ref="93180509" role=""/>
  <member type="way" ref="93180519" role=""/>
  <member type="way" ref="93180515" role=""/>
  <member type="way" ref="642079702" role=""/>
  <member type="way" ref="293854556" role=""/>
  <member type="way" ref="303742596" role=""/>
  <member type="way" ref="437768632" role=""/>
  <member type="way" ref="591431170" role=""/>
  <member type="way" ref="93301488" role=""/>
  <member type="way" ref="93301489" role=""/>
  <member type="way" ref="543782244" role=""/>
  <member type="way" ref="118317322" role=""/>
  <member type="way" ref="118317231" role=""/>
  <member type="way" ref="543780211" role=""/>
  <member type="way" ref="120223290" role=""/>
  <member type="way" ref="79524344" role=""/>
  <member type="way" ref="79524357" role=""/>
  <member type="way" ref="175050848" role=""/>
  <member type="way" ref="442147761" role=""/>
  <member type="way" ref="543780209" role=""/>
  <member type="way" ref="442147760" role=""/>
  <member type="way" ref="119276415" role=""/>
  <member type="way" ref="442147767" role=""/>
  <member type="way" ref="543780210" role=""/>
  <member type="way" ref="543780208" role=""/>
  <member type="way" ref="119276390" role=""/>
  <member type="way" ref="547440067" role=""/>
  <member type="way" ref="119276433" role=""/>
  <member type="way" ref="441670933" role=""/>
  <member type="way" ref="441670932" role=""/>
  <member type="way" ref="511895470" role=""/>
  <member type="way" ref="175045379" role=""/>
  <member type="way" ref="712452977" role=""/>
  <member type="way" ref="130629279" role=""/>
  <member type="way" ref="511895469" role=""/>
  <member type="way" ref="606737751" role=""/>
  <member type="way" ref="623290760" role=""/>
  <member type="way" ref="712452981" role=""/>
  <member type="way" ref="597745917" role=""/>
  <member type="way" ref="606737759" role=""/>
  <member type="way" ref="175029421" role=""/>
  <member type="way" ref="294404051" role=""/>
  <member type="way" ref="123451992" role=""/>
  <member type="way" ref="130629480" role=""/>
  <member type="way" ref="408237219" role=""/>
  <member type="way" ref="123451996" role=""/>
  <member type="way" ref="544150346" role=""/>
  <member type="way" ref="481989074" role=""/>
  <member type="way" ref="734942289" role=""/>
  <member type="way" ref="734942291" role=""/>
  <member type="way" ref="544150347" role=""/>
  <member type="way" ref="414985586" role=""/>
  <member type="way" ref="96046859" role=""/>
  <member type="way" ref="441659646" role=""/>
  <member type="way" ref="294404052" role=""/>
  <member type="way" ref="543779008" role=""/>
  <member type="way" ref="174921087" role=""/>
  <member type="way" ref="734942292" role=""/>
  <member type="way" ref="544320746" role=""/>
  <member type="way" ref="591998658" role=""/>
  <member type="way" ref="392557605" role=""/>
  <member type="way" ref="588575476" role=""/>
  <member type="way" ref="588888105" role=""/>
  <member type="way" ref="175034766" role=""/>
  <member type="way" ref="547264534" role=""/>
  <member type="way" ref="416027657" role=""/>
  <member type="way" ref="231500674" role=""/>
  <member type="way" ref="441659663" role=""/>
  <member type="way" ref="586590312" role=""/>
  <member type="way" ref="175034770" role=""/>
  <member type="way" ref="544283318" role=""/>
  <member type="way" ref="588581937" role=""/>
  <member type="way" ref="588888108" role=""/>
  <member type="way" ref="654398327" role=""/>
  <member type="way" ref="174921086" role=""/>
  <member type="way" ref="544320747" role=""/>
  <member type="way" ref="546274622" role=""/>
  <member type="way" ref="821114305" role=""/>
  <member type="way" ref="34910875" role=""/>
  <member type="way" ref="441670935" role=""/>
  <member type="way" ref="416027656" role=""/>
  <member type="way" ref="544227402" role=""/>
  <member type="way" ref="175036546" role=""/>
  <member type="way" ref="441670936" role=""/>
  <member type="way" ref="544298618" role=""/>
  <member type="way" ref="231500633" role=""/>
  <member type="way" ref="544227403" role=""/>
  <member type="way" ref="544284949" role=""/>
  <member type="way" ref="544284948" role=""/>
  <member type="way" ref="528652339" role=""/>
  <member type="way" ref="40128640" role=""/>
  <member type="way" ref="439421037" role=""/>
  <member type="way" ref="294404050" role=""/>
  <member type="way" ref="544227407" role=""/>
  <member type="way" ref="656699860" role=""/>
  <member type="way" ref="401406278" role=""/>
  <member type="way" ref="586598837" role=""/>
  <member type="way" ref="498205745" role=""/>
  <member type="way" ref="544227406" role=""/>
  <member type="way" ref="544227405" role=""/>
  <member type="way" ref="231500636" role=""/>
  <member type="way" ref="127872358" role=""/>
  <member type="way" ref="120226276" role=""/>
  <member type="way" ref="120226281" role=""/>
  <member type="way" ref="130730800" role=""/>
  <member type="way" ref="130730799" role=""/>
  <member type="way" ref="398318156" role=""/>
  <member type="way" ref="544284954" role=""/>
  <member type="way" ref="401412818" role=""/>
  <member type="way" ref="401521971" role=""/>
  <member type="way" ref="401521972" role=""/>
  <member type="way" ref="401521970" role=""/>
  <member type="way" ref="401521973" role=""/>
  <member type="way" ref="544284950" role=""/>
  <member type="way" ref="544284955" role=""/>
  <member type="way" ref="544284953" role=""/>
  <member type="way" ref="123449467" role=""/>
  <member type="way" ref="420091231" role=""/>
  <member type="way" ref="123449468" role=""/>
  <member type="way" ref="547296513" role=""/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <member type="way" ref="836137773" role=""/>
  <member type="way" ref="536644499" role=""/>
  <member type="way" ref="536644498" role=""/>
  <member type="way" ref="173623564" role=""/>
  <member type="way" ref="426106733" role=""/>
  <member type="way" ref="115656359" role=""/>
  <member type="way" ref="536644503" role=""/>
  <member type="way" ref="536644502" role=""/>
  <tag k="name" v="ს 2"/>
  <tag k="network" v="ge:national"/>
  <tag k="ref" v="ს 2"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikidata" v="Q1638717"/>
  <tag k="wikipedia" v="ka:საქართველოს საავტომობილო მაგისტრალი ს2"/>
 </relation>
 <relation id="9569759" visible="true" version="3" changeset="79354735" timestamp="2020-01-08T20:13:55Z" user="Linda_Esperanto" uid="77904">
  <member type="relation" ref="7777921" role=""/>
  <member type="relation" ref="9570574" role=""/>
  <tag k="name" v="№16"/>
  <tag k="name:en" v="Bus 16"/>
  <tag k="name:ru" v="Автобус №16"/>
  <tag k="operator" v="batauto.ge"/>
  <tag k="ref" v="16"/>
  <tag k="route_master" v="bus"/>
  <tag k="type" v="route_master"/>
 </relation>
 <relation id="9570574" visible="true" version="6" changeset="90301520" timestamp="2020-09-02T11:36:46Z" user="Geirangerfjord" uid="10334749">
  <member type="node" ref="6456231962" role="platform"/>
  <member type="node" ref="5853449685" role="platform"/>
  <member type="node" ref="2966470683" role="platform"/>
  <member type="node" ref="6456231960" role="platform"/>
  <member type="node" ref="6456231958" role="platform"/>
  <member type="node" ref="4336879789" role="platform"/>
  <member type="node" ref="4328504089" role="platform"/>
  <member type="node" ref="4330876702" role="platform"/>
  <member type="node" ref="6456231954" role="platform"/>
  <member type="node" ref="6456231953" role="platform"/>
  <member type="node" ref="4246301308" role="platform"/>
  <member type="node" ref="6456231950" role="platform"/>
  <member type="node" ref="6456231949" role="platform"/>
  <member type="node" ref="6456231948" role="platform"/>
  <member type="node" ref="6456231946" role="platform"/>
  <member type="node" ref="6456231945" role="platform"/>
  <member type="node" ref="4246301309" role="platform"/>
  <member type="node" ref="6456231924" role="platform"/>
  <member type="node" ref="6456231922" role="platform"/>
  <member type="node" ref="4246301310" role="platform"/>
  <member type="node" ref="6456231918" role="platform"/>
  <member type="node" ref="6456231916" role="platform"/>
  <member type="node" ref="4246301311" role="platform"/>
  <member type="node" ref="6456231913" role="platform"/>
  <member type="node" ref="4246418096" role="platform"/>
  <member type="node" ref="6456231909" role="platform"/>
  <member type="node" ref="5838541669" role="stop"/>
  <member type="node" ref="4246311794" role="platform"/>
  <member type="node" ref="6456231906" role="stop"/>
  <member type="node" ref="6456231907" role="platform"/>
  <member type="node" ref="6446690364" role="stop"/>
  <member type="node" ref="4268537897" role="platform"/>
  <member type="node" ref="6446690375" role="stop"/>
  <member type="node" ref="6446690376" role="platform"/>
  <member type="node" ref="6446690373" role="stop"/>
  <member type="node" ref="6446690374" role="platform"/>
  <member type="node" ref="4396496168" role="stop"/>
  <member type="node" ref="6446690372" role="platform"/>
  <member type="node" ref="6456231896" role="stop"/>
  <member type="node" ref="6456231898" role="platform"/>
  <member type="node" ref="6446690370" role="stop"/>
  <member type="node" ref="6446690371" role="platform"/>
  <member type="node" ref="6446690368" role="stop"/>
  <member type="node" ref="6446690369" role="platform"/>
  <member type="node" ref="6446690367" role="stop"/>
  <member type="node" ref="6446690366" role="platform"/>
  <member type="node" ref="6131996178" role="stop"/>
  <member type="node" ref="4249168591" role="platform"/>
  <member type="node" ref="6446690365" role="stop"/>
  <member type="node" ref="4249246289" role="platform"/>
  <member type="node" ref="6456231885" role="stop"/>
  <member type="node" ref="4249202391" role="platform"/>
  <member type="node" ref="6448193122" role="stop"/>
  <member type="node" ref="6448193123" role="platform"/>
  <member type="node" ref="6448193120" role="stop"/>
  <member type="node" ref="6448193121" role="platform"/>
  <member type="way" ref="120229279" role=""/>
  <member type="way" ref="836137774" role=""/>
  <member type="way" ref="632435486" role=""/>
  <member type="way" ref="117221757" role=""/>
  <member type="way" ref="117221698" role=""/>
  <member type="way" ref="441813082" role=""/>
  <member type="way" ref="96567082" role=""/>
  <member type="way" ref="96567084" role=""/>
  <member type="way" ref="117228185" role=""/>
  <member type="way" ref="117228059" role=""/>
  <member type="way" ref="120227079" role=""/>
  <member type="way" ref="40130381" role=""/>
  <member type="way" ref="441813081" role=""/>
  <member type="way" ref="398318164" role=""/>
  <member type="way" ref="420091231" role=""/>
  <member type="way" ref="544284955" role=""/>
  <member type="way" ref="401412818" role=""/>
  <member type="way" ref="401521971" role=""/>
  <member type="way" ref="401521972" role=""/>
  <member type="way" ref="401521970" role=""/>
  <member type="way" ref="401521973" role=""/>
  <member type="way" ref="544284951" role=""/>
  <member type="way" ref="544227405" role=""/>
  <member type="way" ref="544227406" role=""/>
  <member type="way" ref="294404050" role=""/>
  <member type="way" ref="439421037" role=""/>
  <member type="way" ref="40128640" role=""/>
  <member type="way" ref="231500633" role=""/>
  <member type="way" ref="544298618" role=""/>
  <member type="way" ref="175036546" role=""/>
  <member type="way" ref="441670936" role=""/>
  <member type="way" ref="416027657" role=""/>
  <member type="way" ref="231500674" role=""/>
  <member type="way" ref="441659663" role=""/>
  <member type="way" ref="586590312" role=""/>
  <member type="way" ref="175034770" role=""/>
  <member type="way" ref="544283318" role=""/>
  <member type="way" ref="588581937" role=""/>
  <member type="way" ref="588888108" role=""/>
  <member type="way" ref="654398327" role=""/>
  <member type="way" ref="174921086" role=""/>
  <member type="way" ref="544320747" role=""/>
  <member type="way" ref="34920168" role=""/>
  <member type="way" ref="461298298" role=""/>
  <tag k="name" v="№16"/>
  <tag k="name:en" v="Bus 16: Sarpi - Tbilisi square"/>
  <tag k="name:ru" v="Автобус №16: Сарпи - Тбилисская площадь"/>
  <tag k="operator" v="batauto.ge"/>
  <tag k="public_transport:version" v="2"/>
  <tag k="ref" v="16"/>
  <tag k="route" v="bus"/>
  <tag k="type" v="route"/>
 </relation>
</osm>
`;

export const polygonResponse = `<?xml version="1.0" encoding="UTF-8"?>
 <osm><way id='1'>
 <bounds minlat='0' minlon='0' maxlat='1' maxlon='1'/>
 <nd lat='0' lon='0' />
 <nd lat='0' lon='1' />
 <nd lat='1' lon='1' />
 <nd lat='0' lon='0' />
 <tag k='area' v='yes' />
 </way></osm>
 `;

export const multiPolygonResponse = `<?xml version="1.0" encoding="UTF-8"?>
        <osm><relation id='1'>
        <bounds minlat='0' minlon='0' maxlat='1' maxlon='1'/>
        <member type='way' ref='1' role='outer'>
        <nd lat='0' lon='0' />
        <nd lat='0' lon='1' />
        <nd lat='1' lon='1' />
        <nd lat='1' lon='0' />
        <nd lat='0' lon='0' />
        </member>
        <member type='way' ref='2' role='outer'>
        <nd lat='1.1' lon='1.1' />
        <nd lat='1.1' lon='1.2' />
        <nd lat='1.2' lon='1.2' />
        <nd lat='1.1' lon='1.1' />
        </member>
        <member type='node' ref='1' role='admin_centre' lat='0.5' lon='0.5'/>
        <tag k='type' v='boundary' />
        </relation></osm>`;
