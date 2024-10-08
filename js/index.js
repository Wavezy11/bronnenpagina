document.addEventListener("DOMContentLoaded", function() {
    // Function to filter subjects based on search input
    function filterSubjects() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toLowerCase();
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            const subjects = category.querySelectorAll('.subject-container');
            let categoryHasMatch = false;
            subjects.forEach(subjectContainer => {
                const caption = subjectContainer.querySelector('p').innerText.toLowerCase();
                if (caption.includes(filter)) {
                    subjectContainer.style.display = ''; 
                    categoryHasMatch = true;
                } else {
                    subjectContainer.style.display = 'none'; 
                }
            });
            // Show or hide the category based on matches
            category.style.display = categoryHasMatch ? '' : 'none';
        });
    }

    // Koppel de filterSubjects functie aan het zoekveld
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterSubjects);
    }



    
    // Functie voor de tweede popup
    function showLinkPopup() {
        document.getElementById('linkPopupModal').style.display = "flex"; // Voor de linkpopup
    }
    
    // Sluit de modal als de close knop wordt geklikt
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            closeBtn.closest('.modal').style.display = 'none'; // Sluit de juiste modal
        }
    });
    
    // Sluit de modal als je buiten de modal klikt
    window.onclick = function(event) {
        document.querySelectorAll('.modal').forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    
    
    // Modal functionaliteit
    const subjectContainers = document.querySelectorAll('.subject-container');
    const modal = document.getElementById('popupModal');
    const closeModal = modal.querySelector('.close');
    const linksList = document.getElementById('linksList');
    const modalTitle = modal.querySelector('h2');

    subjectContainers.forEach(container => {
        container.addEventListener('click', () => {
            const subject = container.querySelector('p').innerText.trim();
            showModal(subject);
        });
    });

    function showModal(subject) {
        linksList.innerHTML = '';  
        modalTitle.innerText = `${subject} Links`;

        const links = {
            "Biologie": [
                {text: "AR - HoloAnatomy DEMO (EN) - HoloLens2", url: "https://www.microsoft.com/nl-nl/p/holoanatomy-demo/9p51d9mb58bh?activetab=pivot:overviewtab" },
                
                {text: "VR- Animal Anatomy Explorer (EN)", url: "https://www.microsoft.com/nl-nl/p/holoanatomy-demo/9p51d9mb58bh?activetab=pivot:overviewtab"},
                {text: "VR- High School Anatomy (EN)", url: "https://www.meta.com/nl-nl/experiences/high-school-anatomy-for-quest/5556243174447482/?ranking_trace=0_5556243174447482_QUESTSEARCH_4uyhAxOPjXo2tmKlY"},
                {text: "Polinator Park (EN)", url: "https://www.meta.com/nl-nl/experiences/pollinator-park/3630788480370853/"},
                {text: "Sharecare YOU (EN) Gratis PCVR Demo", url: "https://store.steampowered.com/app/753200/Sharecare_YOU/"},
                {text: "The Body VR: Journey Inside A Cell (EN)", url: "https://store.steampowered.com/app/451980/The_Body_VR_Journey_Inside_a_Cell/"},
                {text: "3D Organon VR Anatomy", url: "https://www.meta.com/nl-nl/experiences/3d-organon-xr/6218475558223281/?utm_source=sidequest"},
                {text: "Anatomy of a Chicken", url: "https://www.meta.com/nl-nl/experiences/anatomy-of-a-chicken/5447969805266454/?ranking_trace=0_5447969805266454_QUESTSEARCH_1DU2LmV17kXGOGs8h`"},
                {text: "Ebers Anatomy (EN)", url: "https://www.meta.com/nl-nl/experiences/5572994846061763/?ranking_trace=0_5572994846061763_QUESTSEARCH_0DM3v6EGFbexNEaY2#?"},
                {text: "Human Anatomy Puzzle (EN)", url: "https://www.meta.com/nl-nl/experiences/3972624426164613/?utm_source=www.google.com&utm_medium=oculusredirect#?s"},
                {text: "Human Anatomy VR (EN)", url: "https://www.meta.com/nl-nl/experiences/6527658207255000/?ranking_trace=0_6527658207255000_QUESTSEARCH_As2vKTxrX18Xx5vpO"},
                {text: "Human Anatomy VR (EN) - Gratis Trial", url: "https://www.oculus.com/experiences/quest/3662196457238336/?utm_source=sidequest"},
                {text: "Nano (EN) [Cellen]", url: "https://www.meta.com/nl-nl/experiences/5566073043488552/?ranking_trace=0_5566073043488552_QUESTSEARCH_8aSnEGIxcFWgdg8En#?"},
                {text: "Ocean Rift (EN)", url: "https://www.oculus.com/experiences/quest/2134272053250863/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "Ontleed-Simulator: Doornhaai (EN)", url: "https://store.steampowered.com/app/1205410/Dissection_Simulator_Dogfish_Edition/"},
                {text: "Ontleed-Simulator: Kat (EN)", url: "https://store.steampowered.com/app/1178570/Dissection_Simulator_Feline_Edition/"},
                {text: "Ontleed-Simulator: Kikker (EN)", url: "https://www.oculus.com/experiences/quest/3503368656441919/?utm_source=sidequest"},
                {text: "Ontleed-Simulator: Varken (EN)", url: "https://store.steampowered.com/app/1176080/Dissection_Simulator_Pig_Edition/"},
                {text: "Out of Scale: A Kurzgesagt Adventure (EN)", url: "https://www.meta.com/nl-nl/experiences/7270665009617359?ranking_trace=0_7270665009617359_QUESTSEARCH_GGXZwp2Kifvfx09sO_eyJwbGF0Zm9ybSI6ImFuZHJvaWQtNmRvZiIsInF1ZXJ5X3N0cmluZyI6ImVkdWNhdGlvbiIsImxvY2FsZSI6Im5sX05MIiwibnVtX2ZldGNoIjoxMSwic2VhcmNoX3JvdXRlIjoid2ViIiwidGFnX2lkcyI6W119_eyJzZWN0aW9uX2tleSI6IlNFQVJDSCJ9"},
            
           

            
            ],
            "CKV": [
                {text: "VR - First Touch (EN) [Schilderen in VR]", url: "https://www.oculus.com/experiences/quest/5808929989145615/"},
                {text: "VR - Gravity Sketch (EN) [3D Design]", url: "https://www.gravitysketch.com/"},
                {text: "VR - Open Brush (EN) [3D tekenen]", url: "https://openbrush.app/"},
                {text: "VR/AR - ShapesXR (EN) [3D/XR Design]", url: "https://www.shapesxr.com/"},
                {text: "VR 180° Video - Adam Savage's Tested VR", url: "https://www.meta.com/nl-nl/experiences/adam-savages-tested-vr/2586839431358655/"},
                {text: "MR - Pencil (EN) [Tekenlessen met echt potlood en papier]", url: "https://www.pencilxr.com/"},
                {text: "VR - Color Space (EN) [Kleurenboek]", url: "https://www.oculus.com/experiences/quest/2702419963135346/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Kingspray graffiti (EN)", url: "https://www.oculus.com/experiences/quest/2082941345119152/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Let's Create Pottery VR (EN) [Pottenbakken]", url: "https://www.oculus.com/experiences/quest/1891638294265934/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Painting VR (EN) [Schilderen in VR]", url: "https://www.oculus.com/experiences/quest/3106117596158066/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Tilt Brush (EN) [3D tekenen]", url: "https://www.tiltbrush.com/"},
                {text: "VR - Vermillion (EN) [VR Olieverfstudio]", url: "https://www.oculus.com/experiences/quest/4900967296622279/?utm_source=www.google.com&utm_medium=oculusredirect"}
             ],
            "GYM": [


                {text: "VR - GYM CLASS (EN) (ALLEEN QUEST 2!) [BASKETBALl]", url: "https://www.meta.com/nl-nl/experiences/gym-class-basketball-vr/3661420607275144/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Creed: Rise to Glory (EN) [Boksen] ", url: "https://www.oculus.com/experiences/quest/2366245336750543/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - Eleven Table Tennis VR (NL, EN) [Tafeltennis] ", url: "https://elevenvr.com/en/"}, 
                {text: "VR - First Person Tennis - The Real Tennis Simulator (EN) [Tennis] ", url: "https://www.oculus.com/experiences/quest/6119989094742166/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - FitXR (EN) [Fitness] ", url: "https://www.oculus.com/experiences/quest/2327205800645550/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - ForeVR Bowl (NL, EN) [Bowlen]", url: "https://www.oculus.com/experiences/quest/3420508614708029/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - ForeVR Cornhole (EN) [Zakjeswerpen] ", url: "https://www.oculus.com/experiences/quest/5011588462297991/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - ForeVR Darts (NL, EN) [Darten] ", url: "https://www.oculus.com/experiences/quest/3831620133609128/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - ForeVR Pool (NL, EN) [Poolen] ", url: "https://www.oculus.com/experiences/quest/4760607174068295/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - Golf 5 eClub (EN) [Golf] ", url: "https://www.oculus.com/experiences/quest/4113720305326115/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - GOLF+ (EN) [Golf] ", url: "https://www.oculus.com/experiences/quest/2412327085529357/"}, 
                {text: "VR - Premium Bowling (EN) [Bowlen] ", url: "https://www.oculus.com/experiences/quest/2773034772778845/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - Real VR Fishing (EN) [Vissen] ", url: "https://www.oculus.com/experiences/quest/2582932495064035/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - Rezzil Player (EN) [Reactievermogen + techniek verschillende sporten] ", url: "https://www.oculus.com/experiences/quest/3600836956645933/?utm_source=www.google.com&utm_medium=oculusredirect"}, 
                {text: "VR - Walkabout Mini Golf (EN) ", url: "https://www.oculus.com/experiences/quest/2462678267173943/"}, 
                {text: "VR - WIN Reality (EN) [Honkbal + softbal] ", url: "https://www.oculus.com/experiences/quest/3172399986210688/?utm_source=www.google.com&utm_medium=oculusredirect"}
 ],
            "Economie": [
                {text: "Gamification - GoFuture: Onderneem je eigen toekomst! (NL) ", url: "https://www.kuseema.nl/gofuture/"}
              
            ],

            "Mens & Maatschappij": [
                {text: "Gamification - Topomania (NL) ", url: "https://www.topomania.net/"},
                {text: "VR - Anne Frank House VR (NL, EN) ", url: "https://www.oculus.com/experiences/quest/1958100334295482/?locale=nl_NL"},
                {text: "VR - Mission: ISS: Quest ", url: "https://www.oculus.com/experiences/quest/2094303753986147/"},
                {text: "VR - Nefertari: Journey to Eternity (EN)  ", url: "https://store.steampowered.com/app/861400/Nefertari_Journey_to_Eternity/"},
                {text: "VR 360° Video - 1943 Berlin Blitz (EN) ", url: "https://www.oculus.com/experiences/rift/2178820058825941/"},
                {text: "VR 360° Video - Alcove (EN) ", url: "https://www.oculus.com/experiences/quest/3895528293794893/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR 360° Video - ecosphere (EN) ", url: "https://www.oculus.com/experiences/quest/2926036530794417/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR 360° Video - Oekraïne oorlogsschade ", url: "https://www.youtube.com/@ukrainewarinvr9208/videos"},
                {text: "VR 360° Video - WW1 Loopgraven ", url: "https://www.youtube.com/watch?v=92dNeGwf9Qs&ab_channel=Seymour%26Lerhn"},
                {text: "VR 360° Video - WW2 Anderson schuilplaats ", url: "https://www.youtube.com/watch?v=L76e6vVJbI0&ab_channel=Seymour%26Lerhn"},
                {text: "VR 360° Video - WW2 Slagveld ", url: "https://www.youtube.com/watch?v=vKe1K6J31wg&ab_channel=WargamingEurope"},
                {text: "VR 360° Video - WW2 Tanks ", url: "https://www.youtube.com/watch?v=RyAF3u_dpjw&ab_channel=WorldofTanks-OfficialChannel"},
                {text: "VR - Apollo 11 (EN) ", url: "https://www.meta.com/nl-nl/experiences/2164469606967296/"},
                {text: "VR - BRINK Traveler (EN) ", url: "https://www.oculus.com/experiences/quest/3635172946605196/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - National Geographic Explore VR (EN) ", url: "https://www.oculus.com/experiences/quest/2046607608728563/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Rome (EN) ", url: "https://www.meta.com/nl-nl/experiences/4121527391303603/#?"}
            ],

            "Scheikunde": [
                {text: "VR - MEL Chemistry VR Lessons (EN)", url: "https://www.oculus.com/experiences/go/1457959427660729/"},
                {text: "VR - Futuclass Education (EN) ", url: "https://www.meta.com/nl-nl/experiences/3900127736753019/#?"},
                {text: "VR - VLab Education (EN) [Scheikundig lab] ", url: "https://www.meta.com/nl-nl/experiences/6857662394342596/?ranking_trace=0_6857662394342596_QUESTSEARCH_2swkhfOhYgpZ41xWS#?"},
            ],
            "Talen": [
                {text: "VR - Noun Town: VR Language Learning (Van Engels naar meerdere andere talen) Gratis demo ", url: "https://www.meta.com/nl-nl/experiences/noun-town-language-learning/5520452821357227/?ranking_trace=0_5520452821357227_QUESTSEARCH_0VVVChdGtwK1FtoIP"},
                {text: "VR - SpeakAPP!-Kids [Presenteren] (EN) ", url: "https://play.google.com/store/apps/details?id=com.RadboudUniversiteit.SpeakAPPKids"},
                {text: "VR - VR Languages-IT Carlow (Engels, Duits, Spaans, Frans, Italiaans en Noors) ", url: "https://play.google.com/store/apps/details?id=com.RadboudUniversiteit.SpeakAPPKids"},
                {text: "Interactieve digitale lesmethode - Blink Engels ", url: "https://play.google.com/store/apps/details?id=com.RadboudUniversiteit.SpeakAPPKids"},
                {text: "Interactieve digitale lesmethode - Blink Nederlands ", url: "https://blink.nl/blink-nederlands-onderbouw/zo-werkt-het/"},
                {text: "VR - Immerse (EN) ", url: "https://www.meta.com/nl-nl/experiences/immerse-live-language-classes-ai-conversation-practice/3181432891940455/"},
                {text: "VR - ImmerseMe (EN) - beperkte trial ", url: "https://immerseme.co/#home"},
                {text: "VR - Language Lab (Nederlands, Engels, Spaans, Arabisch, Chinees, Frans, Duits, Hebreeuws, Italiaans, Japans, Koreaans, Portugees, Russisch en Oekraïens. ", url: "https://www.oculus.com/experiences/quest/3802077353226534/?ranking_trace=654641448482276_3802077353226534_SKYLINEWEB_09a04360-b332-4d20-be70-391e17dbc230"},
                {text: "VR - Mondly VR (Nederlands, Engels, Spaans, Duits, Frans, Italiaans, Portugees, Russisch, Japans, Chinees en nog veel meer.) ", url: "https://www.mondly.com/vr"},
                {text: "VR - Terra Alia (Chinees, Duits, Engels, Frans, Italiaans, Japans, Koreaans, Portugees, Russisch, Spaans) ", url: "https://www.meta.com/nl-nl/experiences/terra-alia-a-multilingual-adventure/7146257325418969/"},
                {text: "VR / Game-based-learning - Keep Talking and Nobody Explodes (NL, EN) ", url: "https://www.meta.com/nl-nl/experiences/terra-alia-a-multilingual-adventure/7146257325418969/"}
            ],
            "Techniek": [


                {text: "PC - FPV SkyDive [Drone Simulator] (EN) ", url: "https://store.steampowered.com/app/1278060/FPV_SkyDive__FPV_Drone_Simulator/"},
                {text: "VR - Short Circuit VR [elektronische circuits] (EN) ", url: "https://store.steampowered.com/app/970800/Short_Circuit_VR/"},
                {text: "VR - Training Elektrisch hoogspanningsstation (EN) ", url: "https://www.oculus.com/experiences/quest/3522494514525780/?utm_source=sidequest"},
                {text: "VR - Training Transformator oliemonsters (EN)", url: "https://www.oculus.com/experiences/quest/3522494514525780/?utm_source=sidequest"},
                {text: "VR - Training Veiligheid en gezondheid op het werk voor elektriciens (EN) ", url: "https://www.oculus.com/experiences/quest/3522494514525780/?utm_source=sidequest"},
                {text: "VR/MR - Arkio (EN) [Achitecteur] ", url: "https://www.meta.com/nl-nl/experiences/arkio/2280319701979278/"},
                {text: "PCVR - Wrench [automonteur-simulator] (EN) ", url: "https://store.steampowered.com/app/936720/Wrench/"},
                {text: "VR - Builder Simulator [Huis bouwen] (EN) ", url: "https://store.steampowered.com/app/2270940/Builder_Simulator_VR/"},
                {text: "VR - Car Mechanic Simulator (EN) ", url: "https://www.oculus.com/experiences/quest/4178846312215481/"},
                {text: "VR - Graafmachine VR (EN) ", url: "https://www.meta.com/nl-nl/experiences/6128709557192619/"},
                {text: "VR - Home Improvisation [meubelbouw] (EN) - HTC Vive ", url: "https://store.steampowered.com/app/357670/Home_Improvisation_Furniture_Sandbox/"},
                {text: "VR - Kitchen Assembly (EN) ", url: "https://www.meta.com/nl-nl/experiences/8235337643173443/"},
                {text: "VR - vrkshop [houtbewerking] (EN) ", url: "https://store.steampowered.com/app/1344530/vrkshop/"}
             
            ],


            "Softskills": [
                {text: "VR - Anti-pest 360° video (NL) [Gedragstraining]", url: "https://www.youtube.com/watch?v=VnJSVBVqAIg"},
                {text: "VR - Guided Meditation VR (EN) [Mediteren/zelfcontrole] ", url: "https://www.oculus.com/experiences/quest/3385318684883998/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Ovation (EN) [Presenteren] ", url: "https://www.ovationvr.com/"},
                {text: "VR - VirtualSpeech (EN) [Presenteren] ", url: "https://virtualspeech.com/blog/using-vr-to-improve-public-speaking-skills"}


            ],
            "Kennismaking VR": [
                {text: "*VR - First Steps for Quest 2 [Eerste ervaring met VR]", url: "https://www.oculus.com/experiences/quest/3675568169182204/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "*VR - First Steps for Quest 2 [Eerste ervaring met VR]", url: "https://www.oculus.com/experiences/quest/1642239225880682/"}
            ],
            "Website Iconen": [
                {text: "Internetopdrachten ", url: "https://www.meestersipke.nl/pagina/internetopdrachten"},
                {text: "Onderwijsnieuwsdienst", url: "https://www.onderwijsnieuwsdienst.nl/"}
            ],
            "Gamefication": [
                {text: "AR - Wintor (EN) [Tours met opdrachten, escape room] ", url: "https://www.wintor.com/features"},
                {text: "Website - (Virtuele) Bingokaarten maken ", url: "https://myfreebingocards.com/bingo-card-generator"},
                {text: "Website - Blooket Quiz met gamemodes (EN)", url: "https://www.blooket.com/"},
                {text: "Website - Kahoot Quiz (NL) ", url: "https://kahoot.com/schools-u/"},
                {text: "Website - Quizizz Quiz (NL) ", url: "https://quizizz.com/?lng=en"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
            ],
            "ICT": [
                {text: "Game-based-learning - Hardware Tycoon (EN)", url: "https://haxor1337.itch.io/hardware-tycoon"},
                {text: "Game-based-learning - Hardware Tycoon (EN)", url: "https://seppo.io/nl/"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
            ],
            "Digitale Geleerdheid": [
                {text: "VR 360° Video - Mediagebruik chatten & sexting (NL) ", url: "https://www.podiumvooronderwijs.nl/mediawijzer-vr#:~:text=Met%20360%20graden%20video's%20kijken,het%20lesmateriaal%20zijn%20gratis%20beschikbaar."},
                {text: "VR 360° Video - Cyberpesten (NL) ", url: "https://www.doe-iets-vr.nl/"}
            ],
            "Verschil AR, VR, MR": [
                {text: "Augmented Reality", url: "https://example.com/ar"},
                {text: "Virtual Reality", url: "https://example.com/vr"},
                {text: "Mixed Reality", url: "https://example.com/mr"}
            ],


              "Softskills": [
                {text: "VR - Anti-pest 360° video (NL) [Gedragstraining]", url: "https://www.youtube.com/watch?v=VnJSVBVqAIg"},
                {text: "VR - Guided Meditation VR (EN) [Mediteren/zelfcontrole] ", url: "https://www.oculus.com/experiences/quest/3385318684883998/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Ovation (EN) [Presenteren] ", url: "https://www.ovationvr.com/"},
                {text: "VR - VirtualSpeech (EN) [Presenteren] ", url: "https://virtualspeech.com/blog/using-vr-to-improve-public-speaking-skills"}


            ],
            "Kennismaking VR": [
                {text: "*VR - First Steps for Quest 2 [Eerste ervaring met VR]", url: "https://www.oculus.com/experiences/quest/3675568169182204/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "*VR - First Steps for Quest 2 [Eerste ervaring met VR]", url: "https://www.oculus.com/experiences/quest/1642239225880682/"}
            ],
            "Website Iconen": [
                {text: "Internetopdrachten ", url: "https://www.meestersipke.nl/pagina/internetopdrachten"},
                {text: "Onderwijsnieuwsdienst", url: "https://www.onderwijsnieuwsdienst.nl/"}
            ],
            "Gamefication": [
                {text: "AR - Wintor (EN) [Tours met opdrachten, escape room] ", url: "https://www.wintor.com/features"},
                {text: "Website - (Virtuele) Bingokaarten maken ", url: "https://myfreebingocards.com/bingo-card-generator"},
                {text: "Website - Blooket Quiz met gamemodes (EN)", url: "https://www.blooket.com/"},
                {text: "Website - Kahoot Quiz (NL) ", url: "https://kahoot.com/schools-u/"},
                {text: "Website - Quizizz Quiz (NL) ", url: "https://quizizz.com/?lng=en"},
                {text: "App - Seppo (NL, EN)", url: "https://seppo.io/nl/"},
            ],
            "Digitale Geleerdheid": [
                {text: "VR 360° Video - Mediagebruik chatten & sexting (NL) ", url: "https://www.podiumvooronderwijs.nl/mediawijzer-vr#:~:text=Met%20360%20graden%20video's%20kijken,het%20lesmateriaal%20zijn%20gratis%20beschikbaar."},
                {text: "VR 360° Video - Cyberpesten (NL) ", url: "https://www.doe-iets-vr.nl/"}
            ],
            "Verschil AR, VR, MR": [
                {text: "Augmented Reality", url: "https://example.com/ar"},
                {text: "Virtual Reality", url: "https://example.com/vr"},
                {text: "Mixed Reality", url: "https://example.com/mr"}
            ],

            "Meerdere vakken": [
                {text: "VR - StellarX (EN) [VR editor] ", url: "https://www.oculus.com/experiences/quest/8132958546745663/?utm_source=sidequest"},
                {text: "VR / AR - Fectar [Verschillende interactieve lessen] ", url: "https://www.fectar.com/use-cases/education/"},
                {text: "Serious gaming - Minecraft Education Editie (NL) ", url: "https://education.minecraft.net/nl-nl/resources/explore-lessons"},
                {text: "VR - Librarium (EN) [Studievaardigheden, verschillende vakken]  ", url: "https://www.oculus.com/experiences/quest/6291815170892714/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Zoe (VR Leerscenes maken) (EN)  ", url: "https://www.meta.com/nl-nl/experiences/5464660053555314/#?"},
            ],
            "Verzorging": [
                {text: "VR - Notes On Blindness (EN) ", url: "https://www.meta.com/nl-nl/experiences/1946326588770583/?ranking_trace=0_1946326588770583_QUESTSEARCH_0chQoznOf1j9PKfrW"},
                {text: "VR - See What I See: Virtual Reality Eye Disease Experience (EN) ", url: "https://www.nei.nih.gov/learn-about-eye-health/outreach-campaigns-and-resources/see-what-i-see-virtual-reality-eye-disease-experience"},
                {text: "VR - Barbershop Simulator VR (EN)  ", url: "https://store.steampowered.com/app/2109850/Barbershop_Simulator_VR/"},
                {text: "VR - Reanimatiesimulator / CPR Simulator (EN)  ", url: "https://www.oculus.com/experiences/quest/5019990081404984/?utm_source=sidequest"},
                {text: "VR - VR Bieb Zorg Trainingen (NL) - Gratis Demo  ", url: "https://vrbieb.nl/onze-trainingen/"},
            ],
            "Horeca": [
                {text: "VR - Cooking Simulator VR (EN) ", url: "https://store.steampowered.com/app/1358140/Cooking_Simulator_VR/"},
                {text: "VR - Lost Recipes (EN) ", url: "https://www.meta.com/nl-nl/experiences/lost-recipes/4584847304916084/"},
            ],
            "Beroepsgericht": [
                {text: "VR - Virtual Skillslab [Hospitality, kassatrainer, warehouse] (NL) Gratis demo", url: "https://demo.virtualskillslab.com/nl/requestaccount"}
        
            ],
            "Muziek": [
                {text: "VR - Guitar Strummer (EN) ", url: "https://sidequestvr.com/app/1900/guitar-strummer"},
                {text: "MR - PianoVision (EN) ", url: "https://www.meta.com/nl-nl/experiences/pianovision/5271074762922599/?utm_source=pianovision.com"},
                {text: "VR - GrooVR: Air Drumming (EN) ", url: "https://www.oculus.com/experiences/quest/4011466365558046/?utm_source=sidequest"},
                {text: "VR - Paradiddle [Drummen] (EN) ", url: "https://store.steampowered.com/app/685240/Paradiddle/"},
                {text: "VR - Tribe XR | DJ in Mixed Reality (EN) ", url: "https://www.oculus.com/experiences/quest/2055718171162796/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - VRtuos (Echte piano vereist!) (EN) ", url: "https://sidequestvr.com/app/494/vrtuos"},
            ],
            "Cursessen": [
                {text: "De AI-cursus voor Onderwijs ", url: "https://onderwijs.ai-cursus.nl/home"}
            
            ],
            "Spelgebasseerd Leren": [
                {text: "Seppo gamification tool met Suzanne Lustenhouwer", url: "https://www.youtube.com/watch?v=b2uMoWDph3M&embeds_referring_euri=https%3A%2F%2Finteractievetechnologie.yurls.net%2F&source_ve_path=Mjg2NjY"},
                
            ],
            "Leuke GYM": [
                {text: "VR - Beat Saber (EN), [Ritme] Gratis demo  ", url: "https://www.oculus.com/experiences/quest/1758986534231171/"},
                {text: "VR - Dance Central (EN) [Dansen] Gratis demo ", url: "https://www.oculus.com/experiences/quest/2444056018972158/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Echo VR (EN), [VR frisbee arena] ", url: "https://www.oculus.com/experiences/quest/2215004568539258/?utm_source=rakuten&utm_medium=affiliate&MID=43993&utm_campaign=TnL5HPStwNw-K_xCzndFP7CbF8svtiHnFw&LSNSUBSITE=Omitted_TnL5HPStwNw"},
                {text: "VR - Gorilla Tag (EN) [VR Tikkertje] ", url: "https://www.oculus.com/experiences/quest/4979055762136823/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - LES MILLS BODYCOMBAT (EN) [Fitness]", url: "https://www.oculus.com/experiences/quest/4015163475201433/?utm_source=www.google.com&utm_medium=oculusredirect"},
                {text: "VR - Nock: Bow + Arrow Soccer (EN) [Pijl en boog voetbal] ", url: "https://www.oculus.com/experiences/quest/5157404804284116/?utm_source=www.google.com&utm_medium=oculusredirect"},
            ],
        };

        if (links[subject]) {
            links[subject].forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>`;
                linksList.appendChild(li);
                // Add a line break after each link
                linksList.appendChild(document.createElement('br'));
                linksList.appendChild(document.createElement('br'));
            });
        } else {
            const li = document.createElement('li');
            li.innerText = "Geen beschikbare links voor dit vak.";
            linksList.appendChild(li);
        }
        modal.style.display = "block";
    }

    if (!localStorage.getItem('modalShown')) {
        showModal('Cookies'); // Show the modal with a default title
        localStorage.setItem('modalShown', 'true'); // Set the flag to indicate modal has been shown
    }

 
 

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
