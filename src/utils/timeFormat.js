export function timeFormat(dateInput) {
	const date = new Date(dateInput)

	// Daftar nama hari dan bulan dalam Bahasa Indonesia
	const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	const bulan = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	]

	const namaHari = hari[date.getDay()]
	const tanggal = date.getDate()
	const namaBulan = bulan[date.getMonth()]
	const tahun = date.getFullYear()

	// Ambil jam dan menit
	let jam = date.getHours()
	const menit = date.getMinutes().toString().padStart(2, '0')

	// Format 12 jam + AM/PM
	const ampm = jam >= 12 ? 'PM' : 'AM'
	jam = jam % 12
	jam = jam ? jam : 12 // Jam 0 harus jadi 12

	return `${namaHari}, ${tanggal} ${namaBulan} ${tahun} - Jam ${jam}:${menit} ${ampm}`
}
