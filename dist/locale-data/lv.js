HandlebarsIntl.__addLocaleData({"locale":"lv","pluralRuleFunction":function (n) {var v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);n=Math.floor(n);if(n%10===0||n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19||v===2&&f%100===Math.floor(f%100)&&f%100>=11&&f%100<=19)return"zero";if(n%10===1&&((n%100!==11)||v===2&&f%10===1&&((f%100!==11)||(v!==2)&&f%10===1)))return"one";return"other";},"fields":{"second":{"displayName":"Sekundes","relative":{"0":"tagad"},"relativeTime":{"future":{"zero":"Pēc {0} sekundēm","one":"Pēc {0} sekundes","other":"Pēc {0} sekundēm"},"past":{"zero":"Pirms {0} sekundēm","one":"Pirms {0} sekundes","other":"Pirms {0} sekundēm"}}},"minute":{"displayName":"Minūtes","relativeTime":{"future":{"zero":"Pēc {0} minūtēm","one":"Pēc {0} minūtes","other":"Pēc {0} minūtēm"},"past":{"zero":"Pirms {0} minūtēm","one":"Pirms {0} minūtes","other":"Pirms {0} minūtēm"}}},"hour":{"displayName":"Stundas","relativeTime":{"future":{"zero":"Pēc {0} stundām","one":"Pēc {0} stundas","other":"Pēc {0} stundām"},"past":{"zero":"Pirms {0} stundām","one":"Pirms {0} stundas","other":"Pirms {0} stundām"}}},"day":{"displayName":"Diena","relative":{"0":"šodien","1":"rīt","2":"parīt","-2":"aizvakar","-1":"vakar"},"relativeTime":{"future":{"zero":"Pēc {0} dienām","one":"Pēc {0} dienas","other":"Pēc {0} dienām"},"past":{"zero":"Pirms {0} dienām","one":"Pirms {0} dienas","other":"Pirms {0} dienām"}}},"month":{"displayName":"Mēnesis","relative":{"0":"šomēnes","1":"nākammēnes","-1":"pagājušajā mēnesī"},"relativeTime":{"future":{"zero":"Pēc {0} mēnešiem","one":"Pēc {0} mēneša","other":"Pēc {0} mēnešiem"},"past":{"zero":"Pirms {0} mēnešiem","one":"Pirms {0} mēneša","other":"Pirms {0} mēnešiem"}}},"year":{"displayName":"Gads","relative":{"0":"šogad","1":"nākamgad","-1":"pagājušajā gadā"},"relativeTime":{"future":{"zero":"Pēc {0} gadiem","one":"Pēc {0} gada","other":"Pēc {0} gadiem"},"past":{"zero":"Pirms {0} gadiem","one":"Pirms {0} gada","other":"Pirms {0} gadiem"}}}}});