//Latihan 1
document.getElementById("pesan").textContent = "hello word";
console.log("hello word");

//Latihan 2
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

//Latihan 3
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

//Latihan 4
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

//Latihan 5
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// 6
function cekBilangan() {
const input = document.getElementById("bilangan").value;
const angka = Number(input);
const hasil = document.getElementById("hasilBilangan");
if (input.trim() === "" || !Number.isInteger(angka)) {
hasil.textContent = "Masukkan bilangan bulat yang valid.";
} else if (angka % 2 === 0) {
hasil.textContent = "Bilangan genap";
} else {
hasil.textContent = "Bilangan ganjil";
}
}

//7
function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}

//8
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
let total = 0;
daftarMenu.forEach((item) => {
if (item.checked) total += Number(item.value);
});
document.getElementById("total").textContent = total.toLocaleString("id-ID");
}


function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function tentukanStatus(nilai) {
    return nilai >= 60 ? "Lulus" : "Belum lulus";
}

function tampilkanHasil(nilaiAkhir) {
    document.getElementById("hasilAkhir").textContent =
        "Nilai akhir: " + nilaiAkhir.toFixed(2);

    document.getElementById("hasilPredikat").textContent =
        "Predikat: " + tentukanPredikat(nilaiAkhir);

    document.getElementById("hasilStatus").textContent =
        "Status kelulusan: " + tentukanStatus(nilaiAkhir);
}

document.getElementById("formNilai").addEventListener("submit",
    function(event) {
        event.preventDefault();

        const tugas = document.getElementById("tugas").valueAsNumber;
        const uts = document.getElementById("uts").valueAsNumber;
        const uas = document.getElementById("uas").valueAsNumber;
        const pesan = document.getElementById("pesan");

        if (
            !Number.isFinite(tugas) ||
            !Number.isFinite(uts) ||
            !Number.isFinite(uas) ||
            tugas < 0 || tugas > 100 ||
            uts < 0 || uts > 100 ||
            uas < 0 || uas > 100
        ) {
            pesan.textContent =
                "Error: Nilai harus berada pada rentang 0–100.";
            pesan.style.color = "red";
            return;
        }

        pesan.textContent = "";
        const akhir = hitungNilaiAkhir(tugas, uts, uas);

        tampilkanHasil(akhir);

        console.log("Nilai akhir:", akhir.toFixed(2));
        console.log("Predikat:", tentukanPredikat(akhir));
        console.log("Status:", tentukanStatus(akhir));
    }
);

document.getElementById("formNilai").addEventListener("reset",
    function() {
        document.getElementById("pesan").textContent = "";
        document.getElementById("hasilAkhir").textContent =
            "Nilai akhir: -";
        document.getElementById("hasilPredikat").textContent =
            "Predikat: -";
        document.getElementById("hasilStatus").textContent =
            "Status kelulusan: -";
    }
);