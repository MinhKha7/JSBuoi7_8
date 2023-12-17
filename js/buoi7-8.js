// Bài 1
var mang = [];
document.getElementById("themSo").onclick = function () {
  soNguyen = Number(document.getElementById("soNguyen").value);
  if (!Number.isInteger(soNguyen)) {
    alert("Chỉ được nhập số nguyên");
    document.getElementById("soNguyen").value = "";
    document.getElementById("soNguyen").focus();
  } else {
    mang.push(soNguyen);
    document.getElementById("soNguyen").value = "";
    document.getElementById("soNguyen").focus();

    document.getElementById("kq-0").innerHTML = mang;

    return mang;
  }
};

// 1.

document.getElementById("tinhTong").onclick = function () {
  var tong = 0;
  mang.forEach(function (soNguyenDuong) {
    if (soNguyenDuong > 0) {
      tong += soNguyenDuong;
    }
  });
  document.getElementById("kq-1").innerHTML = tong;
};

// 2.

document.getElementById("demSoDuong").onclick = function () {
  var demSoDuong = 0;
  mang.forEach(function (soNguyenDuong) {
    if (soNguyenDuong > 0) {
      demSoDuong++;
    }
  });
  document.getElementById("kq-2").innerHTML = demSoDuong;
};

// 3.
document.getElementById("timSoNhoNhat").onclick = function () {
  var soNhoNhat = 0;
  mang.forEach(function (soTrongMang) {
    if (soNhoNhat > soTrongMang) {
      soNhoNhat = soTrongMang;
    }
  });
  document.getElementById("kq-3").innerHTML = soNhoNhat;
};

// 4.
document.getElementById("timSoDuongNhoNhat").onclick = function () {
  for (i = 0; mang[i] < 0; i++) {}
  var soDuongNhoNhat = mang[i];
  mang.forEach(function (soTrongMang) {
    if (soDuongNhoNhat > soTrongMang && soTrongMang > 0) {
      soDuongNhoNhat = soTrongMang;
    }
  });
  document.getElementById("kq-4").innerHTML = soDuongNhoNhat;
};

// 5.
document.getElementById("timSoChanCuoi").onclick = function () {
  var soChanCuoi = -1;
  mang.forEach(function (soTrongMang) {
    if (soTrongMang % 2 === 0 && soTrongMang != 0) {
      soChanCuoi = soTrongMang;
    }
  });
  document.getElementById("kq-5").innerHTML = soChanCuoi;
};

// 6.
document.getElementById("doiCho").onclick = function () {
  var a = +document.getElementById("indexA").value;
  var b = +document.getElementById("indexB").value;
  var indexMax = mang.length - 1;

  if (a < 0 || b < 0 || a > indexMax || b > indexMax) {
    alert(`Chỉ được nhập từ 0 đến ${indexMax}`);
  } else {
    temp = mang[a];
    mang.splice(a, 1, mang[b]);
    mang.splice(b, 1, temp);
    document.getElementById("kq-6").innerHTML = mang;
  }
};

// 7.
document.getElementById("sapXep").onclick = function () {
  mang.sort();

  document.getElementById("kq-7").innerHTML = mang;
};

// 8.
document.getElementById("timSoNguyenTo").onclick = function () {
  var dem = 0;
  var soNguyenTo = -1;
  var doDaiMang = mang.length;

  for (i = 0; i <= doDaiMang - 1; i++) {
    if (mang[i] >= 2) {
      for (bienKiem = 1; bienKiem <= mang[i]; bienKiem++) {
        if (mang[i] % bienKiem === 0) {
          dem++;
        }
      }
      if (dem == 2) {
        soNguyenTo = mang[i];
        break;
      }
    }
    dem = 0;
  }

  document.getElementById("kq-8").innerHTML = soNguyenTo;
};

// 9.
var mang2 = [];
document.getElementById("themSoThuc").onclick = function () {
  soThuc = Number(document.getElementById("soThuc").value);
  mang2.push(soThuc);
  document.getElementById("soThuc").value = "";
  document.getElementById("soThuc").focus();

  document.getElementById("kq-9_1").innerHTML = mang2;

  return mang2;
};

document.getElementById("demSoNguyen").onclick = function () {
  var demSoNguyen = 0;
  mang2.forEach(function (soNguyen) {
    if (Number.isInteger(soNguyen)) {
      demSoNguyen++;
    }
  });
  document.getElementById("kq-9").innerHTML = demSoNguyen;
};

// 10.
function demSoDuong1() {
  var soDuong1 = 0;
  mang.forEach(function (num) {
    if (num > 0) {
      soDuong1++;
    }
  });
  mang2.forEach(function (num) {
    if (num > 0) {
      soDuong1++;
    }
  });
  return soDuong1;
}

function demSoAm1() {
  var soAm1 = 0;
  mang.forEach(function (num) {
    if (num < 0) {
      soAm1++;
    }
  });
  mang2.forEach(function (num) {
    if (num < 0) {
      soAm1++;
    }
  });
  return soAm1;
}

document.getElementById("soSanh").onclick = function () {
  var dauSoSanh = "";
  var soAm = demSoAm1();
  var soDuong = demSoDuong1();

  if (soAm > soDuong) {
    dauSoSanh = ">";
  } else if (soAm < soDuong) {
    dauSoSanh = "<";
  } else if ((soAm = soDuong)) {
    dauSoSanh = "=";
  }
  document.getElementById("kq-10").innerHTML = `Số Âm ${dauSoSanh} Số Dương`;
};
