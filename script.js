// pengulangan
var lagi = true;
var win = 0;
var lose = 0;
while (lagi) {
  // angka random comp
  var comp = Math.floor(Math.random() * 10) + 1;
  var hasil = "";

  for (var c = 3; c >= 1; c--) {
    var p = prompt(
      "Pilihlah angka dari 1 - 10\nKamu punya " + c + " Kesempatan"
    );
    if (p == null) {
      break;
    }
    p = parseInt(p);
    if (p == comp) {
      hasil = "Pilihan kamu benar";
      win++;
      break;
    } else if (p < comp) {
      hasil = "Pilihanmu Rendah";
    } else if (p > comp) {
      hasil = "Pilihanmu Tinggi";
    } else {
      hasil = "inputan tidak valid";
    }
    if (c > 1) {
      alert(
        "Salah, " + hasil + ", coba lagi\nkesempatanmu masih ada " + (c - 1)
      );
    } else {
      alert("Kesempatan kamu sudah habis\nJawabannya ialah : " + comp);
      lose++;
    }
  }

  if (p == comp) {
    alert(hasil + "\nJawabannya ialah : " + comp);
  }
  if (p !== null) {
    alert("Total Score\nWin : " + win + "\nLose : " + lose);
  } else {
    break;
  }
  lagi = confirm("Mau main lagi?");
}
alert(
  "Terima Kasih Sudah Bermain\nTotal Score\nWin : " + win + "\nLose : " + lose
);
