// kondisi ternary ? true: false;
const login = false;
const masuk = login ? "selamat anda masuk" : "anda gagal login";
console.log(masuk);

// kondisi ternary &&
const upah = 7000000;
const kepuasan = upah > 6000000 && "Sudah Puas";
console.log(kepuasan);

// kondisi ternary ||
const jawaban = false;
const uji = jawaban || "jawaban anda salah";
console.log(uji);

// map & filter
const karyawan = [
    {
      nama: "budi",
      gaji: 7000000,
      umur: 26
    },
    {
      nama: "anggit",
      gaji: 8000000,
      umur: 27
    }
  ];
    // map (tampilkan nama karyawan)
  const map = karyawan.map((panggil) => panggil.nama );
  console.log(map)
    // map dengan kondisi kalikan gaji menjadi 2 kali lipat
  const map1 = karyawan.map((kali) => kali.gaji * 2);
  console.log(map1);
    // map dengan kondisi ? true : false
  const map2 = karyawan.map((jika) => 
    jika.gaji > 7500000 ? "merasa puas" : "tidak puas"
  );
  console.log(map2);
  
  
    //filter (tampilkan data karyawan yang umurnya diatas 26)
  const filter1 = karyawan.filter((panggil2) => panggil2.umur >26);
  console.log(filter1);