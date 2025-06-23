// Список команд
const toggleActive = (num) => {
  $(`.cmd__${num} details summary div svg`).toggleClass("fillActive");
  $(`.cmd__${num} details summary svg`).toggleClass("transformActive");
};

const blockActive = () => toggleActive(1)
const blockActive2 = () => toggleActive(2);
const blockActive3 = () => toggleActive(3);
const blockActive4 = () => toggleActive(4);
const blockActive5 = () => toggleActive(5);
const blockActive6 = () => toggleActive(6);
const blockActive7 = () => toggleActive(7);
const blockActive8 = () => toggleActive(8);
const blockActive9 = () => toggleActive(9);
const blockActive10 = () => toggleActive(10);
const blockActive11 = () => toggleActive(11);
const blockActive12 = () => toggleActive(12);
const blockActive13 = () => toggleActive(13);
const blockActive14 = () => toggleActive(14);
const blockActive15 = () => toggleActive(15);
const blockActive16 = () => toggleActive(16);
const blockActive17 = () => toggleActive(17);
const blockActive18 = () => toggleActive(18);
const blockActive19 = () => toggleActive(19);
const blockActive20 = () => toggleActive(20);
const blockActive21 = () => toggleActive(21);
const blockActive22 = () => toggleActive(22);
const blockActive23 = () => toggleActive(23);
const blockActive24 = () => toggleActive(24);
const blockActive25 = () => toggleActive(25);
const blockActive26 = () => toggleActive(26);
const blockActive27 = () => toggleActive(27);
const blockActive28 = () => toggleActive(28);
const blockActive29 = () => toggleActive(29);
const blockActive30 = () => toggleActive(30);
const blockActive31 = () => toggleActive(31);
const blockActive32 = () => toggleActive(32);
const blockActive33 = () => toggleActive(33);
const blockActive34 = () => toggleActive(34);
const blockActive35 = () => toggleActive(35);
const blockActive36 = () => toggleActive(36);
const blockActive37 = () => toggleActive(37);
const blockActive38 = () => toggleActive(38);
const blockActive39 = () => toggleActive(39);
const blockActive40 = () => toggleActive(40);
const blockActive41 = () => toggleActive(41);
const blockActive42 = () => toggleActive(42);
const blockActive43 = () => toggleActive(43);
const blockActive44 = () => toggleActive(44);
const blockActive45 = () => toggleActive(45);
const blockActive46 = () => toggleActive(46);
const blockActive47 = () => toggleActive(47);
const blockActive48 = () => toggleActive(48);
const blockActive49 = () => toggleActive(49);
const blockActive50 = () => toggleActive(50);
const blockActive51 = () => toggleActive(51);
const blockActive52 = () => toggleActive(52);
const blockActive53 = () => toggleActive(53);
const blockActive54 = () => toggleActive(54);
const blockActive55 = () => toggleActive(55);
const blockActive56 = () => toggleActive(56);
const blockActive57 = () => toggleActive(57);
const blockActive58 = () => toggleActive(58);
const blockActive59 = () => toggleActive(59);
const blockActive60 = () => toggleActive(60);
const blockActive61 = () => toggleActive(61);
const blockActive62 = () => toggleActive(62);
const blockActive63 = () => toggleActive(63);
const blockActive64 = () => toggleActive(64);
const blockActive65 = () => toggleActive(65);
const blockActive66 = () => toggleActive(66);
const blockActive67 = () => toggleActive(67);
const blockActive68 = () => toggleActive(68);
const blockActive69 = () => toggleActive(69);
const blockActive70 = () => toggleActive(70);
const blockActive71 = () => toggleActive(71);
const blockActive72 = () => toggleActive(72);
const blockActive73 = () => toggleActive(73);
const blockActive74 = () => toggleActive(74);
const blockActive75 = () => toggleActive(75);
const blockActive76 = () => toggleActive(76);
const blockActive77 = () => toggleActive(77);
const blockActive78 = () => toggleActive(78);
const blockActive79 = () => toggleActive(79);
const blockActive80 = () => toggleActive(80);
const blockActive81 = () => toggleActive(81);
const blockActive82 = () => toggleActive(82);
const blockActive83 = () => toggleActive(83);
const blockActive84 = () => toggleActive(84);
const blockActive85 = () => toggleActive(85);
const blockActive86 = () => toggleActive(86);
const blockActive87 = () => toggleActive(87);
const blockActive88 = () => toggleActive(88);
const blockActive89 = () => toggleActive(89);
const blockActive90 = () => toggleActive(90);
const blockActive91 = () => toggleActive(91);
const blockActive92 = () => toggleActive(92);
const blockActive93 = () => toggleActive(93);
const blockActive94 = () => toggleActive(94);
const blockActive95 = () => toggleActive(95);

// Вкладки
const pink = "#e9cdeb";

// Все
$(".all_btn").on("click", () => {
  $(".all_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".main_btn, .rp_btn, .img_btn, .nsfw_btn").css("backgroundColor", "#242424")
  $(".main_btn, .rp_btn, .img_btn, .nsfw_btn").css("color", "#777")
  $(".basic, .rp, .img, .nsfw").show()
  $(".spanActive").text("Все команды (▽◕ ᴥ ◕▽)")
})

// Основное
$(".main_btn").on("click", () => {
  $(".main_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .rp_btn, .img_btn, .nsfw_btn").css("backgroundColor", "#242424")
  $(".all_btn, .rp_btn, .img_btn, .nsfw_btn").css("color", "#777")
  $(".rp, .img, .nsfw").hide()
  $(".basic").show()
  $(".spanActive").text("Основные команды бота (✯◡✯)")
})

// Ролевые
$(".rp_btn").on("click", () => {
  $(".rp_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .img_btn, .nsfw_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .img_btn, .nsfw_btn").css("color", "#777")
  $(".basic, .img, .nsfw").hide()
  $(".rp").show()
  $(".spanActive").text("Команды для ролевых игр ʕ ᵔᴥᵔ ʔ")
})

// Картинки
$(".img_btn").on("click", () => {
  $(".img_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .rp_btn, .nsfw_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .rp_btn, .nsfw_btn").css("color", "#777")
  $(".basic, .rp, .nsfw").hide()
  $(".img").show()
  $(".spanActive").text("Всеми любимые картинки ツ")
})

// NSFW-картинки
$(".nsfw_btn").on("click", () => {
  $(".nsfw_btn").attr("style", `background-color: ${pink} !important; color: black !important`);
  $(".all_btn, .main_btn, .img_btn, .rp_btn").css("backgroundColor", "#242424")
  $(".all_btn, .main_btn, .img_btn, .rp_btn").css("color", "#777")
  $(".basic, .img, .rp").hide()
  $(".nsfw").show()
  $(".spanActive").text("Нам это нравится~")
})

// Меню
const menu = () => {
  $(".menu").toggle()
  $(".menuActive").toggleClass("closeMenu")
  $(".closeMenu").text("✕")
  if (!$(".menuActive").hasClass("closeMenu")) {
    $(".menuActive").text("☰")
  }
}

// Copyright
const date = new Date().getFullYear()

$("#copyright").html(`&copy; Kamiko, 2023-${date}`)
