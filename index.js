const readline = require("node:readline");
const read = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const menu = [
  {
    nama: "mie ayam bakso",
    id: 1,
    price: 32000,
  },
  {
    nama: "mie ayam 1/2 bakso",
    id: 2,
    price: 32000,
  },
  {
    nama: "mie ayam",
    id: 3,
    price: 27000,
  },
  {
    nama: "bihun ayam bakso",
    id: 4,
    price: 32000,
  },
  {
    nama: "soto daging",
    id: 5,
    price: 21000,
  },
  {
    nama: "soto ayam",
    id: 6,
    price: 19000,
  },
];

function mintaPromise(question) {
  return new Promise((resolve) => {
    read.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function lihatMenu() {
  for (let { id, nama, price } of menu) {
    console.log(id + " " + nama + " - " + price);
  }

  let pilihan = Number(await mintaPromise("\nJumlah pesan makanan: "));

  if (pilihan < 1 || pilihan > 6) {
    console.log("\nJumlah pesanan tidak valid!");
    setTimeout(() => {
      return lihatMenu();
    }, 500);
  } else if (pilihan === 1) {
    console.log(menu[0].id, menu[0].nama, menu[0].price);
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else if (pilihan === 2) {
    console.log(menu[1].id, menu[1].nama, menu[1].price);
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else if (pilihan === 3) {
    console.log(menu[2].id, menu[2].nama, menu[2].price);
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else if (pilihan === 4) {
    console.log(`\n${menu[3].nama} - ${menu[3].price}`);
    console.log("------------------------");
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else if (pilihan === 5) {
    console.log(menu[4].id, menu[4].nama, menu[4].price);
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else if (pilihan === 6) {
    console.log(menu[5].id, menu[5].nama, menu[5].price);
    setTimeout(() => {
      return konfirmasi_pesanan();
    }, 500);
  } else {
    console.log(`Tidak ada opsi ${pilihan}!`);
  }
}

async function menuUtama() {
  console.log("\n====================");
  console.log("    PILIH OPSI");
  console.log("====================");

  console.log("1. Lihat Menu");
  console.log("2. Checkout Pesanan");
  console.log("3. History");
  console.log("4. Exit");
  console.log("\nketik exit jika ingin keluar");

  let pilihan = Number(await mintaPromise("\nPilih opsi: "));
  if (pilihan < 1 || pilihan > 4) {
    console.log("Pilihan menu tidak valid!");
    setTimeout(() => {
      return menuUtama();
    }, 500);
  } else if (pilihan === 1) {
    return lihatMenu();
  } else if (pilihan === 2) {
    return checkoutPesanan();
  } else if (pilihan === 3) {
    return history();
  } else if (pilihan === 4) {
    console.log("\nTerima kasih sudah berkunjung 😁");
    read.close();
  } else {
    console.log("Gagal pilih menu");
    return menuUtama();
  }
}
menuUtama();

async function konfirmasi_pesanan() {
  let konfirmasi = await mintaPromise(
    "\nApakah anda ingin konfirmasi pesanan? [y/n]: ",
  );

  if (konfirmasi === "y" || konfirmasi === "Y") {
    const menus = menu.forEach((x) => {
      console.log(x.id + ". " + x.nama + " - " + x.price);
    });
    setTimeout(() => {
      return menuUtama();
    }, 500);

    return menus;
  } else if (konfirmasi === "n" || konfirmasi === "N") {
    console.log("kembali ke menu utama...");
    setTimeout(() => {
      return menuUtama();
    }, 500);
  }
}

function checkoutPesanan() {
  console.log("ini pesanan");
}

function history() {
  console.log("ini pesanan");
}

// async function checkout() {
//   lihatMenu();

//   let option = Number(await mintaPromise("\nPilih menu makanan: "));

//   if (option < 1 || option > menu.length) {
//     console.log("Pilihan tidak valid!".trim());
//     return;
//   } else if (option === 1) {
//   }

//   let jumlah_makanan = Number(await mintaPromise("Jumlah pesan makanan: "));

//   if (jumlah_makanan < 1 || jumlah_makanan > menu.length) {
//     console.log("Jumlah tidak valid!");
//     return;
//   }

//   let index = option - 1;
//   let total = menu[index].price * jumlah;

//   console.log("\n====== DETAIL CHECKOUT ======");
//   console.log("Menu : " + menu[index].nama);
//   console.log("Harga : RP" + menu[index].price);
//   console.log("Jumlah : " + jumlah_makanan);
//   console.log("Total : " + total);

//   let konfirmasi = Number(await mintaPromise("konfirmasi pesanan? (y/n)"));

//   if (konfirmasi === "y" || konfirmasi === "Y") {
//     history_nama[jumlahHistory] = menu[index].nama;
//     history_jumlah[jumlahHistory] = jumlah_makanan;
//     history_total[jumlahHistory] = total;
//   }
// }

// function history() {
//   console.log("\n====== HISTORY PESANAN ======");

//   if (jumlahHistory === 0) {
//     console.log("Belum ada pesanan");
//     return;
//   }

//   for (let i = 0; i < jumlahHistory; i++) {
//     console.log("\nPesanan ke" + (i + 1));
//     console.log("Menu : " + history_nama[i]);
//     console.log("Jumlah : " + history_jumlah[i]);
//     console.log("Total : " + history_total[i]);
//   }
// }

// async function menuUtama() {
//   let jalan = true;
//   console.log("\n====== APLIKASI PEMESANAN ======");
//   console.log("1. Lihat menu");
//   console.log("2. Checkout");
//   console.log("3. History pemesanan");
//   console.log("4. Keluar");

//   while (jalan) {
//     let option = Number(await mintaPromise("Pilih menu: "));

//     switch (option) {
//       case 1:
//         lihatMenu();
//         break;
//       case 2:
//         checkout();
//         break;
//       case 3:
//         history();
//         break;
//       case 4:
//         jalan = false;
//         console.log("Terima kasih sudah berkunjung 😁");
//         break;

//       default:
//         console.log("Pilihan tidak ada");
//         break;
//     }
//   }

//   read.close();
// }
// menuUtama();
