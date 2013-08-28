Student = new Meteor.Collection('student');

if (Meteor.isClient) {
  Template.hello.students = function() {
    return Student.find();
  };

  Template.hello.events({
    'click img': function(e) {
      var id = $(e.target).attr('id');

      Student.update(id, {
        $inc: {
          score: 1
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    var data = [{
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/917146900007346.jpg",
      name: "Arathi",
      _id: "arathi.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/071280500011576.jpg",
      name: "Bie Yaqing",
      _id: "yaqing.bie.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/900295400006657.jpg",
      name: "Cai Yanru",
      _id: "yanru.cai.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/913561500002967.jpg",
      name: "Chan Jing Mei",
      _id: "jmchan.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/914043900007276.jpg",
      name: "Esther Yee Yi Hui",
      _id: "esther.yee.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/917520700012742.jpg",
      name: "Fransisca Fortunata",
      _id: "ffortunata.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/902607000012335.jpg",
      name: "Goh Chin Hong",
      _id: "chgoh.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/881272200002500.jpg",
      name: "Goh Kuang Quan",
      _id: "kqgoh.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/882413500005524.jpg",
      name: "Goh Lulong Kenneth",
      _id: "kenneth.goh.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/912159700007156.jpg",
      name: "Goh Mei Zhencelestine",
      _id: "mz.goh.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/881150600003584.jpg",
      name: "Heng Hua Tak Stephen",
      _id: "ht.heng.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/353015500002977.jpg",
      name: "Huang Ruijun",
      _id: "ruijunhuang.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/881578700005413.jpg",
      name: "Koh Bang Chuan",
      _id: "bckoh.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/881579200003593.jpg",
      name: "Koh Wei Kien Kenny",
      _id: "kenny.koh.2013"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/891837900011989.jpg",
      name: "Leow Jun Qiang Leslie",
      _id: "leslie.leow.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/066461400011566.jpg",
      name: "Lin Bin",
      _id: "bin.lin.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/871072200003549.jpg",
      name: "Liu Zhanhong",
      _id: "zhanhongliu.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/901418700012213.jpg",
      name: "Low Wen Guang",
      _id: "wenguanglow.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/920608500012814.jpg",
      name: "Low Yi Fang Jeanetta",
      _id: "jeanettalow.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/870779100004980.jpg",
      name: "Muhammad Faizal Sukim",
      _id: "mfaizal.s.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/893511700006439.jpg",
      name: "Poh Yin Zhu Jewelry",
      _id: "jewelry.poh.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/901274800006732.jpg",
      name: "Saraswathy Aruna Annamalai",
      _id: "saraswathya.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/067150900011568.jpg",
      name: "Sebastian Kiran Joy",
      _id: "kjsebastian.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/907308100012612.jpg",
      name: "Shih Fu Hua",
      _id: "fuhua.shih.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/902946700002845.jpg",
      name: "Siti Mardiana Binte Tumadi",
      _id: "sitim.t.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/872083300005059.jpg",
      name: "Tan Ban Chuan",
      _id: "bc.tan.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/870713800011871.jpg",
      name: "Tan Guo Hao",
      _id: "guohao.tan.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/880260100002473.jpg",
      name: "Tan Jian Wei",
      _id: "jianwei.tan.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/924925800013260.jpg",
      name: "Tan Rui Jia Noelle",
      _id: "noelle.tan.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/884633900002574.jpg",
      name: "Tan Wei Hao",
      _id: "weihao.tan.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/911792300007135.jpg",
      name: "Tang Shu Wen Charissa",
      _id: "shuwen.tang.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/892018500011994.jpg",
      name: "Victor Lee Hong Zhi",
      _id: "victor.lee.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/907182500012608.jpg",
      name: "Wang Fenglin",
      _id: "flwang.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/064762700011565.jpg",
      name: "Wang Zunhua",
      _id: "zunhua.wang.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/882081100002242.jpg",
      name: "Wee Shu Ling Samantha",
      _id: "samantha.w.2009"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/901341500006736.jpg",
      name: "Wong Cai Ling",
      _id: "cl.wong.2010"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/890150000002249.jpg",
      name: "Wong Si Hui",
      _id: "sihui.wong.2009"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/890581200011959.jpg",
      name: "Woo Han Theng Joel",
      _id: "joel.woo.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/891293400011975.jpg",
      name: "Wyner Lim Wei Han",
      _id: "wyner.lim.2011"
    }, {
      photo: "http://elearntools.smu.edu.sg/Tools/photos/m/102529100011593.jpg",
      name: "Zhang Zhongyun",
      _id: "zhang.zy.2011"
    }];

    if (Student.find().count() === 0) {
      for (var i = 0; i < data.length; i++) {
        Student.insert(data[i]);
      }
    }
  });
}