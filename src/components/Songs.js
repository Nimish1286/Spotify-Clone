const Songs = [
    {
        id: 1,
        favourite: false,
        songName:"Barsaat Ho Jaaye",
        artist:"Jubin Nautiyal,Payal Dev",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FBarsaat%20Ho%20Jaaye%20Jubin%20Nautiyal%20320%20Kbps.mp3?alt=media&token=f259a764-4353-4112-9bdf-2ee346affb2b",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FBarsaat.jpg?alt=media&token=62a038d0-1756-4251-8c31-15fd8cb017c3"
    },
    {
        id: 2,
        favourite: false,
        songName:"Kesariya",
        artist:"Arijit Singh",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FKesariya_320(PagalWorld.com.se).mp3?alt=media&token=31220008-88ca-4d5d-974c-a2af553d5541",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fkesariya.jpg?alt=media&token=ca606663-c1a3-4204-9a12-6941c820e39f"
    },
    {
        id: 3,
        favourite: false,
        songName:"Peaches",
        artist:"Diljit Dosanjh",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FPeaches%20Drive%20Thru%20320%20Kbps.mp3?alt=media&token=6aa3138d-872f-4914-a61d-1d6baaef54e5",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FPeaches.jpg?alt=media&token=4ef278bc-101e-45ed-abc7-0ecdd90e1b4c"
    },
    {
        id: 4,
        favourite: false,
        songName:"80-90",
        artist:"IKKY, Amrit Maan, Garry Sandhu",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2F80%2090%20Ikky%20320%20Kbps.mp3?alt=media&token=c5e3f0ef-afcd-4df2-9f59-c16e0026e3c0",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2F80-90.jpg?alt=media&token=a3a0ee3a-6a33-4f59-b468-1f48a3ad02db"
    },
    {
        id: 5,
        favourite: false,
        songName:"Qismat 2 - Title Track",
        artist:"Bpraak, Ammy Virk",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FQismat%202_320(PagalWorld.com.se).mp3?alt=media&token=2d3e2aee-744d-4aa9-b237-776c86eeba2d",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fqismat-2.jpg?alt=media&token=b868e0d9-2700-4221-a1ba-e7d351466afa"
    },
    {
        id: 6,
        favourite: false,
        songName:"Qismat Ki Hawa Kabhi Naram",
        artist:"C. Ramchandra",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FQismat%20Ki%20Hawa%20Kabhi%20Naram%20Albela%20320%20Kbps.mp3?alt=media&token=e99534ee-5b77-4a4c-b900-51d6fd525c17",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FQismatki.jpg?alt=media&token=c627b1de-db56-47d0-9feb-dfd6129c495d"
    },
    {
        id: 7,
        favourite: false,
        songName:"Night Changes",
        artist:"One Direction",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FNight-Changes_320(PagalWorld).mp3?alt=media&token=1bad264d-9d29-4969-afb3-ccb3dc931ccb",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FNightchanges.jpg?alt=media&token=8eb0f973-5684-4167-b9de-5d4f8dcd4ba3"
    },
    {
        id: 8,
        favourite: false,
        songName:"Lovely",
        artist:"Billie Eilish, Khalid",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FLovely_320(PagalWorld).mp3?alt=media&token=924f99b7-0273-498c-8173-ed0841a0bfa9",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Flovely.jpg?alt=media&token=9c433d4a-baf3-40b7-b0d0-0618df6e6cd5"
    },
    {
        id: 9,
        favourite: false,
        songName:"The Nights",
        artist:"Avicii",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FThe%20Nights%20-%20Avicii_320-%20%5BPagalWorld.NL%5D.mp3?alt=media&token=920fc641-97f9-4fc6-b389-0907c413ace8",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fthe-nights.jpg?alt=media&token=50ded4d6-5d76-4382-906e-e512c4572532"
    },
    {
        id: 10,
        favourite: false,
        songName:"The Night We Met",
        artist:"Lord Huron",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FLord_Huron_-_The_Night_We_Met_(ColdMP3.com).mp3?alt=media&token=77cee8d4-c961-429a-a72a-d0b511680d85",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fwemet.jpg?alt=media&token=9c352583-3efb-4102-b6f3-2a5ee79e173a"
    },
    {
        id: 11,
        favourite: false,
        songName:"Fairytale",
        artist:"Alexander Rybak",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FFairytale%20.mp3?alt=media&token=5a32cb97-62c3-464e-85e8-4a0912833169",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Ffairytale.jpg?alt=media&token=07f2bd92-e0bf-4aa8-980a-688b48add903"
    },
    {
        id: 12,
        favourite: false,
        songName:"Pasoori",
        artist:"Shae Gill, Ali Sethi, Coke Studio 14",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FPasoori%20-%20Shae%20Gill.mp3?alt=media&token=7aef64ad-4fec-4486-acf6-905d9d6c35ed",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FPasoori.jpg?alt=media&token=1d47a1e6-c8dd-456f-879d-9ae61455846f"
    },
    {
        id: 13,
        favourite: false,
        songName:"FRIENDS",
        artist:"Marshmello, Anne Marie",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FFriends_320(PagalWorld).mp3?alt=media&token=472c0b9f-3527-425c-b93c-c802ab1d1a18",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FFriends.jpg?alt=media&token=bcd8d339-44e5-42e6-a5f3-fbe00685361a"
    },
    {
        id: 14,
        favourite: false,
        songName:"Bones",
        artist:"Imagine Dragons",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FImagine%20Dragons%20-%20Bones_320-%20%5BPagalWorld.NL%5D.mp3?alt=media&token=258ff466-c9de-407d-bc16-49353e5296b1",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fbones.jpg?alt=media&token=db9a8051-fb86-4627-9e7d-bdaacd7ab228"
    },
    {
        id: 15,
        favourite: false,
        songName:"Hai Katha Sangram Ki",
        artist:"OST Mahabharata",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FHai%20Katha%20Sangram%20Ki-%20%5BPagalWorld.NL%5D.mp3?alt=media&token=fc072476-eaf5-4037-9186-a11449b92d74",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fhaikatha.jpg?alt=media&token=53ac12b2-6aa9-4f92-a6f7-143c476ced71"
    },
    {
        id: 16,
        favourite: false,
        songName:"Main Dhoondne Ko Zamaane Mein",
        artist:"Heartless",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2F02.%20Main%20Dhoondne%20Ko%20Zamaane%20Mein.mp3?alt=media&token=fc7f35aa-2d5e-4620-b551-8b4f27184deb",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fmain.jpg?alt=media&token=96dab588-b6da-48b3-882b-2970a675c468"
    },
    {
        id: 17,
        favourite: false,
        songName:"Bolo Har Har Har",
        artist:"Badshah, Mithoon, Mohit Chauhan",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2F01%20Bolo%20Har%20Har%20Har%20-%20Shivaay%20(Badshah)%20190Kbps.mp3?alt=media&token=7b98ef6d-c4f3-4363-92da-6e6c3a9ee22c",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FShivaay.jpg?alt=media&token=382b07ff-3829-445d-ad26-c7a10cc2efc1"
    },
    {
        id: 18,
        favourite: false,
        songName:"BROWN RANG",
        artist:"YO YO HONEY SINGH",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2F03%20Brown%20Rang%20-%20Yo%20Yo%20Honey%20Singh%20(PagalWorld.com)%20-190Kbps.mp3?alt=media&token=2468d447-4e81-4a0e-92e5-b37358d972a5",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fbrownrang.jpg?alt=media&token=3f717949-9034-4aca-93f5-b14679fe3a54"
    },
    {
        id: 19,
        favourite: false,
        songName:"Hare Krishna Hare Ram",
        artist:"Jubin Nautiyal",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FHare-Krishna-Hare-Rama_320(PagalWorld).mp3?alt=media&token=fb9a3227-3faf-4872-9c54-95e6bab6adc0",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fhare.jpg?alt=media&token=25a68719-70d1-4e71-9a6b-53f4e04c7491"
    },
    {
        id: 20,
        favourite: false,
        songName:"Ami Je Tomar",
        artist:"Shreya Ghoshal, Arijit Singh",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FAmi%20Je%20Tomar%20Bhool%20Bhulaiyaa%202%20320%20Kbps.mp3?alt=media&token=237a6158-790b-412d-bf43-92689fb33517",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fami-je-tomar.jpg?alt=media&token=030f0bbb-6b1c-409c-909b-10967fdc5e9d"
    },
    {
        id: 21,
        favourite: false,
        songName:"BHOOL BHULAIYAA 2-Title Track",
        artist:"Neeraj Shridhar",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FBhool%20Bhulaiyaa%202%20-%20Title%20Track.mp3?alt=media&token=0c2ba9f1-a633-4f62-ba6d-bd53854c4c6b",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2Fbhool22.jpg?alt=media&token=c78402b9-959f-4e6b-8e0b-1088888c205d"
    },
    {
        id: 22,
        favourite: false,
        songName:"Caran Caran",
        artist:"Parmish Verma",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FCaran%20Caran%20Parmish%20Verma%20320%20Kbps.mp3?alt=media&token=61605c32-c898-4105-90a3-052c13a8e4d0",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FCaran-Caran.jpg?alt=media&token=e1a37502-b85b-4594-9605-4c75f6a4e448"
    },
    {
        id: 23,
        favourite: false,
        songName:"Excuses",
        artist:"Ap Dhillon, Gurinder Gill, Intense",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FExcuses%20Ap%20Dhillon%20320%20Kbps.mp3?alt=media&token=5ef9d7eb-c5ee-425e-906f-4100ea718c0d",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FExcuses.jpg?alt=media&token=d60181fe-f617-4d19-ad9c-cca211c6989e"
    },
    {
        id: 24,
        favourite: false,
        songName:"Brown Munde",
        artist:"Ap Dhillon, Gminxr, Gurinder Gill",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/songs%2FBrown%20Munde%20Ap%20Dhillon%20320%20Kbps.mp3?alt=media&token=4e4bbf01-e025-4c6a-a7d7-5e3d30e3d237",
        imgsrc:"https://firebasestorage.googleapis.com/v0/b/spotify-clone-ae6f6.appspot.com/o/img%2FBrown-mm.jpg?alt=media&token=a4bf0a02-49e8-48d8-9236-925fbb7d21c0"
    },
];
export { Songs };