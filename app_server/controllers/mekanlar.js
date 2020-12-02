

/* GET home page. */

 const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
   {
   	'baslik': 'Anasayfa',
   	'footer': 'Can Kayacan 2020',
   	'sayfaBaslik':{
   		
   		'siteAd':'Mekan32',
   		'aciklama':'Isparta civarındaki mekanları keşfedin!'
   	},
   	'mekanlar':[
   	{
   		'ad':'Starbucks',
   		'adres':'Centrum Garden AVM',
   		'puan':5,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'12km'

   	},
   	{
   		'ad':'Kahve Dünyası',
   		'adres':'İyaş Park AVM',
   		'puan':5,
   		'imkanlar':['Çay','Kekler','Pastalar','Kahve'],
   		'mesafe':'6km'

   	},
   	{
   		'ad':'Nur Pastanesi',
   		'adres':'Merkez',
   		'puan':3,
   		'imkanlar':['Dondurma','Kekler','Pastalar'],
   		'mesafe':'2km'

   	},
   	{
   		'ad':'MackBear Coffee',
   		'adres':'Fatih Mahallesi',
   		'puan':4,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'5km'

   	},
   	{
   		'ad':'Burç Fırın',
   		'adres':'İyaşPark',
   		'puan':5,
   		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
   		'mesafe':'7km'

   	},


   	]
   }
   );
}
const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',{

  	'baslik':'Mekan Bigisi',
  	'footer': 'Can Kayacan',
  	'sayfaBaslik':'Starbucks',
  	'mekanBilgisi':{
  		'ad':'Starbucks',
  		'adres':'Centrum Garden AVM',
  		'puan':5,
  		'imkanlar':['Dünya Kahveleri','Pasta','Kek'],
  		'koordinatlar':{
  			'enlem':37.781885,
  			'boylam':30.566034
  		},
  		'saatler':[
  		 {
  			'gunler':'Pazartesi-Cuma',
  			'acilis':'07:00',
  			'kapanis':'23:00',
  			'kapali':false
  		 },
  		 {
  			'gunler':'Cumartesi',
  			'acilis':'09:00',
  			'kapanis':'22:30',
  			'kapali':false
  		 },
  		 {
  			'gunler':'Pazar',
  			
  			'kapali':true
  		 }
  		],
  		'yorumlar':[
  		 {
  			'yorumYapan':'Can Kayacan 2020',
  			'puan':3,
  			'tarih':'30 Kasım 2020',
  			'yorumMetni':'Kahveleri çok güzel'
  		 }

  		]
  	}
  });
}
 
const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle','footer': 'Can Kayacan 2020', });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}