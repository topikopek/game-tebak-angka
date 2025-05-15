// angka komputer
var lagi = true;
while (lagi) {
  var comp = Math.random();
  if (comp < 0.1) {
    comp = 1;
  } else if (comp >= 0.1 && comp < 0.2) {
    comp = 2;
  } else if (comp >= 0.2 && comp < 0.3) {
    comp = 3;
  } else if (comp >= 0.3 && comp < 0.4) {
    comp = 4;
  } else if (comp >= 0.4 && comp < 0.5) {
    comp = 5;
  } else if (comp >= 0.5 && comp < 0.6) {
    comp = 6;
  } else if (comp >= 0.6 && comp < 0.7) {
    comp = 7;
  } else if (comp >= 0.7 && comp < 0.8) {
    comp = 8;
  } else if (comp >= 0.8 && comp < 0.9) {
    comp = 9;
  } else {
    comp = 10;
  }
  // pilihan angka
  var hasil = "";

  for (var c = 3; c >= 1; c--) {
    var p = prompt(
      "pilihlah angka dari 1 - 10\nkamu punya " + c + " Kesempatan"
    );
    if (p == null) {
      break;
    }

    p = parseInt(p);
    if (p < comp) {
      hasil = "Pilihanmu Rendah";
    } else if (p > comp) {
      hasil = "Pilihanmu Tinggi";
    } else if (p == comp) {
      hasil = "Pilihan Kamu Benar";
      break;
    } else {
      hasil = "inputan tidak valid";
    }
    if (c > 1) {
      alert(hasil + ", coba lagi\nkesempatanmu masih ada " + (c - 1));
    } else {
      alert("kesempatan kamu sudah habis\njawabannya ialah : " + comp);
    }
  }
  if (p == comp) {
    alert(hasil + "\nJawabannya ialah : " + comp);
  }
  lagi = confirm("mau main lagi?");
}
alert("Terima Kasih Sudah Bermain");
