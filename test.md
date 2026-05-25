"Сайн байцгаана уу?ene udaa bi uurinhu hiisen Portfolio төслөө танилцуулahaar garj irlee.hicheelin suulin 1 saraas avhuulad bagiin bolon huviin tusul hiiher bolsn .busad huuhduud maani huviin tusul deeree portfolio hiihes ern tatgalzaj baisan bol bi esregeere portfolio hiih n minii 3 sar frontend surgaltand suugaad sursan medsen zuilsee haruulahad hamgiin tohiromjtoi n baisan

humuusd sonirholtoi shineleg baidlaar medeelel hurgeh zorilgotoi.

Вэб сайт маань нийт 10 ширхэг эргэдэг картын системээс бүрдсэн. Хэрэглэгчдэд ойлгомжтой байх үүднээс Англи болон Монгол хэлний сонголттойгоор (тус бүр 5 карт) мэдээллээ багцалсан. Карт бүр дээр
дарахад тухайн хэсгийн дэлгэрэнгүй агуулга гарч ирэхeer shiidsen.

Техникийн хамгийн том сорилт ба requestAnimationFrame:
Энэ төслийг хийхэд тулгарсан хамгийн том техникийн сорилт бол "Зогсолтгүй эргэх 3D хөдөлгөөнийг хэрхэн гацалт bagatai (smooth) харуулах вэ?" гэдэг асуудал байсан. Энгийн setInterval ашиглах нь
процессорыг их ачааллаж, хөдөлгөөнийг тасалдуулж харагдуулдаг талтай.

Үүнийг би requestAnimationFrame function ашиглан шийдсэн. Энэ нь:

1.  Дэлгэцийн Refresh Rate-тэй синхрончлогддог: Хөдөлгөөнийг секундэд 60 фреймээр (60 FPS) маш жигд харуулдаг.
2.  Гүйцэтгэл (Performance): Хэрэглэгч өөр таб руу шилжих үед анимейшн автоматаар түр зогсож, компьютерын нөөцийг хэмнэдэг давуу талтай.

Мөн вэб сайтын "Ambient" орчныг бүрдүүлэх background эффектүүд, 50 гаруй хөдөлгөөнт хэсгүүдийг (particles) Framer Motion ашиглан оновчтой шийдсэн нь төслийг маань илүү амьд харагдуулж байгаа юм.- Background-ийн тухай: "Background эффектүүд нь вэб сайтыг зүгээр нэг хуудас биш, харин нэгэн цогц орчин (environment) мэт харагдуулж байгаа" гэж хэлж болно.

Ирээдүйн зорилго:
Одоогоор картууд автоматаар эргэж байгаа ч, ирээдүйд хэрэглэгч хулгана болон "scroll" ашиглан хөдөлгөөнийг өөрөө удирдах (interactivity) функцийг нэмэхээр ажиллаж байна. Энэ бол миний хувьд дөнгөж эхлэл
бөгөөд цаашдаа 3D вэб технологи, WebGL, Three.js зэрэг илүү гүнзгий түвшний технологиудыг ашиглан дэлхийн хэмжээний бүтээлүүд хийх эрмэлзэлтэй байгаа.

Анхаарал хандуулсанд баярлалаа!"

---
