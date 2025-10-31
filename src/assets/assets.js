import appointment_img from './appointment_img.png'
import head from './head.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import logo1 from './logo1.svg'
import logo2 from './logo3.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './DeenImg/86_bapaye_amol.png'
import doc17 from './DeenImg/aBHIJIT_bAHETI.png'
import doc18 from './DeenImg/Abhijit-Bagade.png'
import doc19 from './DeenImg/Agarkhedkar_Nikhil.png'
import doc20 from './DeenImg/Amruta-bedekar.png'
import doc21 from './DeenImg/aphale-manasi.png'
import doc22 from './DeenImg/ATHALE_ANUJA.png'
import doc23 from './DeenImg/Babhulkar_Ashish.png'
import doc24 from './DeenImg/Bapat_Sunil.png'
import doc25 from './DeenImg/Barve_Raghav.png'
import doc26 from './DeenImg/Bhargavi_Atre.png'
import doc27 from './DeenImg/Deepa-Bapat.png'
import doc28 from './DeenImg/Dr_Girish_Bapat.png'
import doc29 from './DeenImg/Dr-Akole.png'
import doc30 from './DeenImg/DR-AMRUTA-BEKE.png'
import doc31 from './DeenImg/dr-Swapna-Athavale.png'
import doc33 from './DeenImg/Joban-Babhulkar.png'
import doc34 from './DeenImg/Madhavi-Bahulikar.png'
import doc35 from './DeenImg/Mahesh_Akhegaonkar.png'
import doc36 from './DeenImg/Nikhil-beke.png'
import doc37 from './DeenImg/Nikhil-Berry.png'
import doc38 from './DeenImg/Renu_Aagerkhedkar.png'
import doc39 from './DeenImg/Rujuta-bandishte.png'
import doc40 from './DeenImg/sagar-bandishte.png'
import doc41 from './DeenImg/Samidha_Bhagat.png'
import doc42 from './DeenImg/Smita-Athavale.png'
import doc43 from './DeenImg/Suchi-smita-behere.png'
import doc44 from './DeenImg/SUYOGBAGADE.png'
import doc45 from './DeenImg/Vrushali-athavale.png'
import doc46 from './DeenImg/Yash-Bahulikar.png'
import hosp1 from './DeenImg/Deenanath-Hosp.png'
import hosp2 from './Jehangir.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    head,
    group_profiles,
    logo,
    logo1,
    logo2,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const hospitals = [
    {
        id: 'hosp1',
        name: 'Deenanath Mangeshkar Hospital',
        image: hosp1,
        about: 'Deenanath Mangeshkar Hospital is a well-designed facility featuring a central atrium with four wings. It has 800 beds, 12 operation theaters, a state-of-the-art ICU, a blood bank, a digital radiology unit, and a kidney transplant unit, among other advanced services. Equipped with top-tier diagnostic and treatment equipment, it is staffed by highly skilled medical and administrative professionals. Pioneers in EMS in India, the hospital provides cardiac and trauma ambulance services. The hospital offers super-specialty care in cancer, cardiology, gastroenterology, joint replacement, urology, nephrology, and neurology, with a focus on patient and family needs.',
        address: {
            line1: 'Deenanath Mangeshkar Hospital Road, near Mhatre Bridge, Vakil Nagar',
            line2: 'Erandwane, Pune, Maharashtra 411004'
        },
        speciality: 'cancer, cardiology, gastroenterology, joint replacement, urology, nephrology, and neurology',
        phone: '+91 20 4015 1000 / 49153000',
        webLink: 'https://www.dmhospital.org/'
    },
    {
        id: 'hosp2',
        name: 'Jehangir Hospital',
        image: hosp2,
        about: 'Jehangir Hospital, with over seven decades of legacy, is one of Pune most respected healthcare institutions, serving over 15,000 inpatients and 200,000 outpatients annually. Backed by a dedicated team of 300+ consultants and 1,700 support staff, we are committed to providing quality care. Nationally and internationally recognized, the hospital holds accreditations from NABH for hospital, blood bank, and nursing excellence, as well as NABL for its lab.',
        address: {
            line1: ' 32, Sasoon Rd, opposite Railway Station, Central Excise Colony',
            line2: 'Sangamvadi, Pune, Maharashtra 411001'
        },
        speciality: 'Anaesthesiology, Cardiology, Dermatologist, Dentistry, Gastroenterologist, etc....',
        phone: '+91 20 6681 9999',
        webLink: 'https://www.jehangirhospital.com/'
    }
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        Hospital: 'Unknown',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        Hospital: 'Unknown',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        Hospital: 'Unknown',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        Hospital: 'Unknown',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        Hospital: 'Unknown',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        Hospital: 'Unknown',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        Hospital: 'Unknown',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        Hospital: 'Unknown',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        Hospital: 'Unknown',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        Hospital: 'Unknown',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        Hospital: 'Unknown',
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        Hospital: 'Unknown',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        Hospital: 'Unknown',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        Hospital: 'Unknown',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        Hospital: 'Unknown',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Bapaye Amol',
        image: doc16,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Gastroenterologist',
        degree: 'MBBS M.S. (GENERAL SURGERY), MD, FASGE, CERTIFICATE IN ADVANCE DIGNOSTIV THERAPEUTIC GI ENDOSCOPY (Germany), (FJGES) Fellowship of the Japanese Gastroenterological Endoscopy Society',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Abhijit Baheti',
        image: doc17,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Medicine',
        degree: 'MBBS MD (General Medicine), DM, DNB (Clinical Haematology)',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Abhijit Bagade',
        image: doc18,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Medicine',
        degree: 'MBBS MD Internal Medicine',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Agarkhedkar Nikhil',
        image: doc19,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Plastic Surgery',
        degree: 'MBBS M.S.(Gen. Surg), M.Ch.(Pl. Surg)',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Amruta Bedekar',
        image: doc20,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Anaesthesiology',
        degree: 'MBBS MD(Anaes), FRCA',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc21',
        name: 'Dr. Manasi Aphale',
        image: doc21,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Psychiatry',
        degree: 'MBBS MD(Psychiatry)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Anuja Athale',
        image: doc22,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Surgery',
        degree: 'MBBS DNB(GEN. SURG), MRCS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Ashish Badhulkar',
        image: doc23,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Shoulder and Sports Injuries',
        degree: 'MBBS D.Ortho,DNB(Ortho), MCH(Ortho)(Liverpool,UK),FRCS(Tr.& Ortho)',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc24',
        name: 'Dr. Sunil Bapat',
        image: doc24,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Anaesthesiology',
        degree: 'MBBS DGO, M.D (ANAESTHESIOLOGY)',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc25',
        name: 'Dr. Raghav Barve',
        image: doc25,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Orthopedics',
        degree: 'MBBS M.S ( Ortho), D.N.B ( Ortho), FELLOWSHIP IN Orthopedics(OXFORD UNI, UK)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc26',
        name: 'Dr. Atre Bhargavi',
        image: doc26,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Neurologist',
        degree: 'B.A. Bachelors in Audiology and Speech Language Pathology, MSc Speech Language Pathology',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc27',
        name: 'Dr. Chloe Evans',
        image: doc27,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc28',
        name: 'Dr. Girish Bapat',
        image: doc28,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Surgery',
        degree: 'MBBS MS(Gen. Surg), FRCS(Glasgow), FRCS(Gen. SUrg),Fellowship in advance laparoscopic obesity surgery',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc29',
        name: 'Dr. Akole Prasad',
        image: doc29,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Medicine',
        degree: 'MBBS DNB(Anaesthesiology), IDCCM',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc30',
        name: 'Dr. Amruta Beke',
        image: doc30,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Oncosurgery',
        degree: 'MBBS DNB(Gen. Surg), M.Ch.( Surgical Oncology ), Fellowship in Esophageal & GI Surgery (Tokyo University), Fellowship Thoracic surgery, Delhi',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc31',
        name: 'Dr. Swapna Athavale',
        image: doc31,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Plastic Surgery',
        degree: 'MBBS D.N.B. (GEN SURGERY), M.Ch. (PLASTIC SURGERY)',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc33',
        name: 'Dr. Joban Badhulkar',
        image: doc33,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Shoulder and Sports Injuries',
        degree: 'MBBS D.M.R.D, D.N.B. (Radio-Diagnosis)',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc34',
        name: 'Dr. Madhavi Bahulikar',
        image: doc34,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Gynaecologist',
        degree: 'MBBS D.N.B. (ObGyn), MRCOG UK, FOSGI Fellowship in Advance Laparoscopic Surgery',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc35',
        name: 'Dr. Mahesh Akhegaonkar',
        image: doc35,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Psychiatry',
        degree: 'MBBS D.P.M., PG DIP PSYCH (UK), MRCP (UK)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc36',
        name: 'Dr. Nikhil Beke',
        image: doc36,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Ophthalmology',
        degree: 'MBBS MS(Ophthalm), Trg. In Retina',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc37',
        name: 'Dr. Nikhil Berry',
        image: doc37,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Shoulder and Sports Injuries',
        degree: 'B.P.Th. M.P.Th.(Orthopedic)',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc38',
        name: 'Dr. Renu Aagerkhedkar',
        hospitalId: 'hosp1',
        image: doc38,
        Hospital: 'Deenanath Mangeshkar',
        speciality: 'Ophthalmology',
        degree: 'MBBS D.N.B, Fellow- Pediatric Ophthalmology and Strabismology, ICO Fellow - Neuro-Ophthalmology(USA)',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc39',
        name: 'Dr. Rujuta Bandishte',
        image: doc39,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Dentist',
        degree: 'BDS MDS (Orthodontist)',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc40',
        name: 'Dr. Sagar Bandishte',
        image: doc40,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Anaesthesiology',
        degree: 'MBBS MD(Anaesthesiology), DNB(Anaesthesiology)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc41',
        name: 'Dr. Samidha Bhagat',
        image: doc41,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Paediatrics',
        degree: 'MBBS DNB (PAED ), Fellowship in Pediatric Intensive care ( MUHS )DNB (PAED ), Fellowship in Pediatric Intensive care ( MUHS )DNB (PAED ), Fellowship in Pediatric Intensive care ( MUHS )DNB (PAED ), Fellowship in Pediatric Intensive care ( MUHS )DNB (PAED)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc42',
        name: 'Dr. Smita Athavale',
        image: doc42,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Dentist',
        degree: 'BDS MDS(PROSTHODONTIST)',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc43',
        name: 'Dr. Suchismita Behere',
        image: doc43,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Ophthalmology',
        degree: 'MBBS MS, DNB(Ophthalmology), International Council of Ophthalmology exam part II, Fellowship in Cornea and Refractive Surgery & Fellowship in Phacoemulsification',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc44',
        name: 'Dr. Suyog Bagade',
        image: doc44,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Anaesthesiology',
        degree: 'MBBS MD(Anaesthesiology)',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc45',
        name: 'Dr. Vrushali Athavale',
        image: doc45,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Ophthalmology',
        degree: 'MBBS MBBS, MS (Ophthalmology), Fellow in Vitreo retinal surgery',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc46',
        name: 'Dr. Yash Bahulikar',
        image: doc46,
        Hospital: 'Deenanath Mangeshkar',
        hospitalId: 'hosp1',
        speciality: 'Medicine',
        degree: 'MBBS M.D. ( General Medicine.)',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]