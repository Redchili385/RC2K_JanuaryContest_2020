function contestData(){
    if(typeof(website) === "undefined"){
        website = websiteData()
        console.log(website);
    }
    let contest  = new Contest("Magnetic Fields Memorial Invitational 2022");

    const participantColors = generateDistinctColors(15)
    let colorIndex = 0
    const participantColor = () => participantColors[colorIndex++];

    let Erwto = new Participant(20, website.GetUserByName('Erwto'), participantColor(), 'G3', 'Seat Cordoba WRC');
    let Migger = new Participant(23, website.GetUserByName('Migger'), participantColor(), 'G3', 'Mitsubishi Lancer Evo IV');
    let SpartaRemixer = new Participant(26, website.GetUserByName('SpartaRemixerPL'), participantColor(), 'G2', 'Subaru Impreza WRC');
    let Ephemeral = new Participant(25, website.GetUserByName('Ephemeral'), participantColor(), 'G1', 'Seat Cordoba WRC');
    let XsaraTorrada = new Participant(27, website.GetUserByName('XsaraTorrada'), participantColor(), 'G3', 'Seat Cordoba WRC');
    let Lewsys = new Participant(14, website.GetUserByName('Lewsys'), participantColor(), 'G4', 'Mitsubishi Lancer Evo V');
    let sBinnala = new Participant(16, website.GetUserByName('sBinnala'), participantColor(), 'G4', 'Subaru Impreza WRC');
    let Linotrix = new Participant(2, website.GetUserByName('Linotrix'), participantColor(), 'G1', 'Mitsubishi Lancer Evo IV');
    let BrosTheTird = new Participant(30, website.GetUserByName('BrosTheThird'), participantColor(), 'G4', 'Subaru Impreza WRC');
    let datsun100aGTR = new Participant(58, website.GetUserByName('SForman135LS'), participantColor(), 'G4', 'Peugeot 206 WRC');
    let Woeringen1288 = new Participant(7, website.GetUserByName('Woeringen1288'), participantColor(), 'G3', 'Mitsubishi Lancer Evo V');
    let Pendzior = new Participant(8, website.GetUserByName('Pendzior'), participantColor(), 'G3', 'Proton Wira/Persona');
    let KarelPipa = new Participant(55, website.GetUserByName('Karel Pipa'), participantColor(), 'G3', 'Subaru Impreza WRC');
    let TheKetrab = new Participant(10, website.GetUserByName('TheKetrab'), participantColor(), 'G3', 'Mitsubishi Lancer Evo V');
    let Tribell = new Participant(39, website.GetUserByName('Tribell'), participantColor(), 'G3', 'Subaru Impreza WRC');
    contest.participants.push(Erwto, Ephemeral, Lewsys, sBinnala, Linotrix, BrosTheTird, Pendzior, KarelPipa, TheKetrab, datsun100aGTR, Tribell, Woeringen1288, XsaraTorrada, Migger, SpartaRemixer);

    contest.rallies = website.game.rallies;
    let rally, stage
    {
        rally = contest.rallies[0];  //Vauxall

        stage = rally.stages[0]; //Clocaenog
        wr = stage.AddRecord(BrosTheTird, "09:53.01", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1XhODz7YmfjH-VHB6xbc4U7j9Lj32vbns/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1990kzK7bUjn1sOasFoDsJ2e_9BlQQe41/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "08:31.44", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/16buq3nMAnE4AfQ4a7iLYrxJhSDzoOmVJ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1C9i3ZVIu-QQuWicOLZOcQ8YrcMcFiyXL/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "09:13.77", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ILtQkikD5_o7OAGDC728z91XLWAPugL1/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1SXeO5RTa8DfZpLqwxFNwMi9-Jw1JTtS7/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "09:11.51", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1pbm1GJe_JNGctzVCgQcuvrciClWTNmo0/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=3p8AMF7DBtE"
        wr = stage.AddRecord(Lewsys, "09:40.64", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14zwEmX4kzWjSnG2Ydgi8xFh4W-hm-Oye/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1DYjUb5rHr-SI4_jTmioYvXc36rr3hnac/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "08:21.07", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1KDuCoLJaiTIShwWeU8GrNTkEu6OJNmqr/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1ECRiNvFHBFiBJ_FgMISD3XiPiXTB5AKJ/view?usp=sharing"
        wr = stage.AddRecord(Migger, "08:53.80", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1HdaH4O_UzdD_eGHEYi_1F0qovdUb1QjT/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12yyNBI4n-E_cNxQfFSBLVqAbMs_BhDAl/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "08:56.25", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1fLN7dzPnxCIVgpgcE4HPBtLa7YrfLLZP/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=CmN1HVfUv1o"
        wr = stage.AddRecord(sBinnala, "09:09.48", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1MjDAUf2LhrAbONALCjydMjcDWb4ZKGUA/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1kL3ljdDKTFdMQ9Gg4-GDLSvlvbRtzcZo/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "08:58.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1pvSAad5IC_5LfOruaq127al0dCf_348I/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "09:01.37", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1sP5c-4XKA6tM3ye3YV-HQimhAKZqhWk8/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1CkF96UZFuTdo2f5Vp-Ro2HEYqsSeUuju/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "08:55.10", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11gWO9ITTPaYzEf0Fds5a4VroubaBbuuu/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1KBJL3BK4eMZNP400UL3VdwL_hSb9nkpL/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "09:31.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1xVlPowtwpaAkhWXqwxYJJmLO5Bk-DgS9/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1uMMqd91NZOl9ypJxLNyvo4DhBy_FOmZF/view?usp=sharing"
        
        stage = rally.stages[1]; //Penmachno
        wr = stage.AddRecord(BrosTheTird, "08:47.08", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1U_Dyr6B9sFR9j8u5nzMi71T6URPcY8eX/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "07:30.10", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jnpQmWUt1sCYG3EeTJNHUeXGYqLvNEDI/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1_ukQoBrQJICqqGB4bVROQ2O4xrLce9mB/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "08:07.83", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hvQ1qTV33pwPDPxOfeAoD9pMM98lYCtW/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "08:09.83", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/10SmBEeAVWAehLmThkJpfGHxlmwo3n5uY/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=P6vambBpIXs"
        wr = stage.AddRecord(Lewsys, "08:26.01", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1XqZX8g2pcRvMSxGBRAHrjelQ_ij7NlQh/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "07:13.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UeQ_2ma7NNOYepdmRjDPnMU8l1ED5lkR/view?usp=sharing"
        wr = stage.AddRecord(Migger, "07:49.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1SmSxBMi6l1eOvxNLGNhOzgZ6ufV9IibP/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "07:52.75", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1k7a8Kdib8CjcJUPdFDBk1v5qBIaidKd3/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=sTIixisSPYk"
        wr = stage.AddRecord(sBinnala, "07:58.76", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1PxL1Jsux4MCk58R0mtwgoapx6yP6CWFS/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "08:03.01", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1S30P9UiiMq3eeaaDZZTnr6l-FNkL74q2/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "07:57.07", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Pv7KpeO-8s2p8P8ZXBVjnCpc7w0Izspx/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "07:37.19", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1C4JPu78b3nB1zujj9h-TWidYgo5ix-zW/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/10iSR3b6Jj4Ymr03jj0dJFKnBQfLDZAvY/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "08:13.47", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1veZZRNePzWy8cGxcKXsjUSa02GCcPtMf/view?usp=sharing"
        
        stage = rally.stages[2]; //Myherin
        wr = stage.AddRecord(BrosTheTird, "12:35.62", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1gY8cC2DRyVCuwYI3BEiuO_vXeA_dwh8R/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "10:57.87", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Wx0K7VIBmpbFZyJbUeEuL-ULRPu1w5GS/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sJrGUVZh913SP_Zff0ZI-qo6_hDEiqED/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "11:45.20", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UG09RY8t5OX84EY4GLkYwpvRMClU0uNV/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "12:13.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1JNgz4zWMpRQUhVebiXahYQXve6FkUid3/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=BrO0QEqQmmg"
        wr = stage.AddRecord(Lewsys, "11:55.05", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1w9LxErE7NPlBWGTcAiMzTy4KZYSf5iFu/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "10:56.89", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RpLNpVKYtbVsEy3flpTw328UwKPw0sMh/view?usp=sharing"
        wr = stage.AddRecord(Migger, "11:32.67", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jG0GbRjlofZWh1go7o2-k8nr3oHj6Vlb/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "11:21.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1zBnTATYnlfoWgSgf_fCyLRZ7sagy3MOf/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "11:52.07", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1CRIh_upc204DU6f10CvU-75vniFMygSo/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "11:22.19", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1lFeAJkVV9ilbjB1JzI4M4bcwREI3EJ_C/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "11:41.95", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qhkuDw4V_6IMBuboxILAhHrVOe3w0BYB/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "11:36.12", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1R-ePCRMermYw5xhVMtUO3DKHyV08LFMT/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1qtX8m6WxsYfEtxNDCMz_NTfHoM-DTN_u/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "11:43.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hc_cYE3SghXYbD_H68Cv7km9HLwvPQ11/view?usp=sharing"
        
        stage = rally.stages[3]; //Hafren
        wr = stage.AddRecord(BrosTheTird, "12:49.26", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qQFO4wiURrHjoNMUunn7KJg2xQe3esX8/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "12:00.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tDdOY7RrCUcJX4Qn4qDC4nR7oSNpJC79/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/157Y61IUZSoOa_0jj_LhQsNOKkFEWBMI9/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "12:43.00", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1__3kRMV2Uxy28YMEPgDgrkKG_4j5ZUEP/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "13:32.35", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11K3d8w-SHBHcwJy2dVbud-DxahTKRyK4/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "12:28.49", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1eKflFPN62fGCwFwJsck3QZBspVV6SAPY/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "11:33.78", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ecW6SgkD0tc25yseIvWIeXtgtK579Vqq/view?usp=sharing"
        wr = stage.AddRecord(Migger, "12:20.81", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1cCjCJTAYWbs-cngbiOqOe5yIce1IXteN/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "12:21.50", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1VebO5NUF6ctaHCGQVdDV1JELHpthTRxe/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "11:59.51", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1td6NNqPe3hbfO9qIEFevvxVd0Fv58geA/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:14.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1H4V0AmuCMwqOSztpfOTKjEYex9lKvAS5/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "11:48.84", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jl00X2RijIwPQ66_ofUXGBi_qpXcXCZH/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "12:16.10", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1deeVyWEuRH3CBUFMkLbSVawA2Hir38zn/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1cqkInR9OzNTRTRcU26D-YLWT8ydpOurn/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "12:25.09", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qWnJgbvgXLGZ2r52XZj-2OLJ2LMbn5QL/view?usp=sharing"
        
        stage = rally.stages[4]; //Dyfi
        wr = stage.AddRecord(BrosTheTird, "13:09.24", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Lt8ffpQiHoXim8855kPMwkqx1kEy82sN/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "14:34.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1L8F1eV21x4eNopvXSLbDLYvj_-VrD6S3/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1dsDeoYzXY-sltQOdOqi-GA9s9P9i5pNd/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "13:13.67", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1r98V37upuPzeUf43A3X_xMe3ByjSPiop/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "14:34.51", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1E1s9yv0NfmkbqpzLUk_veouo6n6vBV2R/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=ygq3QEs4OyU"
        wr = stage.AddRecord(Lewsys, "12:52.82", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1IuC-dm6XUVt4n8bz13UzCxZkhI4yvu2i/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1_4Ho2jYYasOYXH9WoUuMY2NXPftAAHkW/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "11:54.02", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1kIP24Hn7VueHhkFkOdBJXRRpnRA8gPIH/view?usp=sharing"
        wr = stage.AddRecord(Migger, "12:48.36", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1f4Jqm04cxyjby_cweQnvZ2jOrop_LwPk/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "12:11.83", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1uUE9Ie0RQAK3bK-713W-vR4KPWCVF3jy/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "12:39.86", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/12jtT9uq1UASB50QKA6p2EnTIzCNS8jVh/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:47.50", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hEa5EqXSZQ18McpcLpH-DTmTpQ6NFy36/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "13:06.95", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1t_EnQ2SPbEIq3Gem6hAXaPC36UbmomUz/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "12:14.14", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1QnhviJMOH33kCSA0aEUHwkwO0a8swRlY/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1cqkInR9OzNTRTRcU26D-YLWT8ydpOurn/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "13:24.40", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1fiekfUn03gLKcs0FT4oBZln1dDYRxBf0/view?usp=sharing"
        
        stage = rally.stages[5]; //Gartheiniog
        wr = stage.AddRecord(BrosTheTird, "11:40.70", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tDQzYgq46OsgaOd2FxrHUDjMbbs-ff54/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1FvEKQOitH7cTiiWx0fyMrSDNPCDiyyvs/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "10:16.88", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1slMCipWIiS26BOddKb3i9wkMmb3N5hj8/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/11oe0FM4EKT9b-9X92mYHXoLc2gINe0S0/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "11:32.44", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tTd31voFPEnJaZEfDMAlniaat1ktoEEY/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1jInVY4OZhT36bPNl-myo3iN-uUBf3c_l/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "12:11.11", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1jQScRpqeNo7gs0wSrFVF0feI7-3LVax8/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=WYBwz1yhONA"
        wr = stage.AddRecord(Lewsys, "11:25.13", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Gp3jQYySBwZ1jlwIqVi6IHcpPDvVe2Hw/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-M59UcF_vIz1MlMHIw1_yStff74ysCiG/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "09:56.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RtsWXABCijekHJ6aEBOInNguyVm5hSMC/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1YZ0bdYkVBEax_uLfLfpMs6AZih95Zr-S/view?usp=sharing"
        wr = stage.AddRecord(Migger, "10:46.63", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1aAJBfGL-21QvMNo6g9JdfOROaq8iYn8R/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Rr8XfyqEAOl_WxbMuttPXQ9tsytiv6W5/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "10:42.29", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15H3aJhJdJuPKfiojOgqBxPn4qjpGU10Y/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sRIsyTUeCLNQkyCZHI75tU1FyTTC7v8d/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "11:50.05", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ujhVPcaUu6VKOzehaGswFYwEWyAFUaja/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1OXDHZlMrMUPNPvxxZoSIZ8fCj-brvQ-7/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "11:02.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19VgEnyeSFlIgZZ8Lc2wmBh30xOjjt2ya/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=nWqWmXk731c"
        wr = stage.AddRecord(TheKetrab, "11:08.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UQKwKIMdNDazqvcXNy7Bx_u9uCoM6Ql7/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1j8EmjtSH5wSt9paeFngtZxFFhoszuoRA/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "10:17.98", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YeL4IPwS-C5_hmpIq-DR2KTPGjqzQYqM/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/18Jyg6eN2ONlXZXaDGlI8pEZvvTv2Cnzp/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "11:25.64", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RUHPZrWZtWTXZ1wjXjrnNMzzgmHNn04s/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1IB2eKlBL8ucW9ZDOdIiMIEGspUAbMCb9/view?usp=sharing"
    }
    {
        rally = contest.rallies[1];  //Pirelli

        stage = rally.stages[0]; //Chirdonhead
        wr = stage.AddRecord(BrosTheTird, "18:48.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qR5CSTZjrYooMQ3bQKTs9ju9D1Sk5dai/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1ob9-cq_wEq9IoG0GYeQ6AdK3UE74fQm2/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "17:04.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1q4HV2hrdn9YoHXkXXq-Fhpgrmewtxfcz/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1VCdz3j1ED1MUf3MObFZVs_9o-2DpygN9/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "18:01.88", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1OS9REm7S1bZ5K8ujMOPlRZEZ9q_Ap4nW/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1A0nEnbwL9zuKIxqDglTfDDEa6L3k6HEd/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "20:14.88", "00:00.00", "No")
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=oP_-ayd9DVY"
        wr = stage.AddRecord(Lewsys, "18:21.54", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ClHxTKO3SU3X0BIkL3-4n-Z_wC1TqCaB/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1a18RvpIYOGW8K4lZVGJBqazGtWLCxk_m/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "17:32.81", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1O7ktgpgLMoX7Yc5NAZ10zfVxfpautsGi/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1RrHXlnEVdCk1gQYJYjhFM11IpPMN4rro/view?usp=sharing"
        wr = stage.AddRecord(Migger, "18:20.80", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1yU_EIf6R98N4x4CYC5QbGhWK7cL5HQTv/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1hxoe2tNJKnWA6yTRu1Fk7NfB2sO3KFlM/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "18:02.67", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ylY0ZOm5IJysOX06LBkh5JSMz8u16fZU/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1hwrWj7yNYANRtlpxc7UeTwT6WG9DPMxw/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "18:25.31", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1PkUKM66Tmv-klm5TI1sNItkSAUlqWGNi/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Ut_aViyOvK0xcDZIBngnTRoPsokJprf1/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "17:46.33", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1x6SsfHzcwfO-TuHc6SWioyZAO829iRyO/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=nO-7rJHmYvw"
        wr = stage.AddRecord(TheKetrab, "17:38.14", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1t_7RzK9QQ232FVWTjMpWJTdvI99o4C-c/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13xHWDlZHBOfDFyq7XO4rrHTtx5w7if5d/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "17:27.84", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1LJaYh-nUVs2HCbqKQOTw6jTQZQHN9Znm/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1fXSBx5MgCTpmxP9QF7k8dMA6WK0y9UzD/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "18:30.24", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1uIIbOq7p5Nkrs6gEH9CY_auTAzRmD940/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1vCk6WZSFO9wASnr5pfzXASPFF2WXT_B-/view?usp=sharing"
        
        stage = rally.stages[1]; //Falstone
        wr = stage.AddRecord(BrosTheTird, "16:04.70", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1G9Pp7nJssOQI3h72_e0gnre0cxi2WFKp/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "15:01.30", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1mB6BoZP2L0pftqfxAwaStihrReKlAHoY/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1cg3qDnD3Mha8rI2fj2TJYCl72wiShWqZ/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "15:22.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ul2x3hwkaOSC_YP7biBePC_cdDvvzq8w/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "15:51.96", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/14A0-AJJKV7lr7gVb4iZ_iHyyo4UQHnf_/view?usp=sharing"
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=dzDv-DydLLY"
        wr = stage.AddRecord(Lewsys, "15:56.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1zTd7WNULqNbGA3qBWGm-OHM6Y4q69mv6/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1FEaObVWWhz4m7AyWiCQwiv78mynnj68h/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "14:08.76", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tONn8yM0dW9yddO8r7_9Lm2Yr-ygyUjQ/view?usp=sharing"
        wr = stage.AddRecord(Migger, "16:17.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EuEwVXmnRtDdo5anPNX0CkEE06VQ39UV/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "15:04.57", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1plwErmUm9wtLt2NiFj7fGx-J6WWyFqS6/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "15:03.90", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1K69jOYmO0luzEbwQ-oWBixFEePZHDGPG/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "14:31.89", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ZqwxFn-ZhPV3-7aetnq-QWzeMyKTZC9s/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "14:39.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1uNBHb7K2QRz1XEoTGTkPk7JRDAfALoHS/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "14:28.88", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Z8PhThKEMRc2S-KEOqa5jodvz1tBFW81/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1o6gog_gLAagpctbE_XuJF2S9sv07OrmH/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "15:28.68", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-OVxcy0J77hXS8L76Zs9fjWxJqe1KOFQ/view?usp=sharing"
        
        stage = rally.stages[2]; //Kershope
        wr = stage.AddRecord(BrosTheTird, "13:42.42", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1tpcCUiR_zUK78GrfjmrQQ61yfYNh1uem/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "12:23.49", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1HD5OI06XzIPPaqgRwatorY4rIPix1UWz/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-Pmhf3Omv-g7iq7qdWvp95IQrx4zNfpc/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "14:55.54", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14P9vA8IsUGOGd_4wv96gRTe8yfwPfdB5/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13sMbB4a1HcZ0z5wodL7snGgPk16Cs4-j/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "13:38.97", "00:00.00", "No")
        wr.proofs["replay"] = "https://drive.google.com/file/d/1hgA1mu-3f2LYBrcQjTeMN6zy39DPXEPS/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "16:05.19", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1gzEJuF3_2-FK6O4b18-HuyUs-7fdfJhq/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "12:35.89", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14fJl2eki7vkE9XS1GqEEin2-bMuUuLvV/view?usp=sharing"
        wr = stage.AddRecord(Migger, "13:14.08", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1QkFd-Fc5UrqIhfqUUIkqdv3iTqSkpxrD/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "14:08.41", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1cpZMec8vkeqoF24wcn2L9akgLZRXpG15/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "16:55.25", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/115EfKh5OyKxVxh2K_7fGR-f-V7zTG6l6/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1nXVC0bEnZtb34KAxfWyv-otA05QPJP4b/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "12:55.46", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1WgXDC4vDVciDRUuhmOVf4VB2Ynan-Kud/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "13:50.50", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1PEcd4svob5X9lesvWwyYX_KfcpWY1sYX/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "13:01.72", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11QKUYNmkfW9YPktUf8Q3Zj0yZC-mfrla/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15rePXuaEste5bZiMXu25h2rMPMtozlgA/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "14:19.79", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1n0khiV1c5YR_3JxJjGc90gaJAHnNv5J4/view?usp=sharing"
        
        stage = rally.stages[3]; //Pundershaw
        wr = stage.AddRecord(BrosTheTird, "19:26.06", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1HOUI2qFAYV-7yEKGYobFwEccpXCUjh1f/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "15:32.34", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ulGLyr4siiHhuxX-TCHTsGldRdSFOvVV/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1tinf8W__sl1KJmeK-J74xEPs-hDWaZZS/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "17:17.19", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11ekihBX0k22ZVFYroe-dr31nkWOUaFNq/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "17:03.75", "00:00.00", "No")
        wr.proofs["youtube"] = "https://www.youtube.com/watch?v=RbpCCU65LW4"
        wr = stage.AddRecord(Lewsys, "17:18.28", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1gtU1et7fKBRj2jJJhBcHo-5eWvdDIE6h/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1nqUsKhNXhl0plX-A63GoAP3sxof0QW3u/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "15:25.72", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1GyEmE1JPJa7jU1h4nyLxyg2jqe1M6Zc7/view?usp=sharing"
        wr = stage.AddRecord(Migger, "17:20.50", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1f0UgE4rekb5sMbrW2g-5TuzDGn0XgM5R/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "17:06.52", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1nf-V_GusN5fHs-0XvgtSVBy8_5odWNjA/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "16:35.13", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1djMPi0birlkuPcYnDgtZwyCNspXiJLHj/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "15:49.11", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/172Vr95BkwayYFmmI66GsyApFTzUlYoXw/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "16:15.34", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Tv1UMgWH9ZqowOPGhZadpmot-tK2e0ha/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "15:58.46", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ZQV9vbfxEMpMj-tStMuri_SuqIQzk_0s/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sOvM6JNx07GXBgmF60yMc2wZoXks2Ked/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "19:42.09", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1F_EX4wP6yM6Hbq1OUK6ECTalSakGFmQD/view?usp=sharing"
        
        stage = rally.stages[4]; //Riccarton
        wr = stage.AddRecord(BrosTheTird, "08:30.35", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1HntyuRmbq9vBL6HO3M8CG8kjTNonOgMD/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "06:11.49", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RZ2Xfz4wcogY90Im8ESx3q8ZMHoZORWV/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/13xJYJn0HlpcZULXd9im4vgz_OwqDdPuH/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "07:10.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-z41Jc9YQ8u03wLnG8B8O7bUxXzV2-lX/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "07:16.12", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RSl6Zrf6BBlnkyyLPPu4_lylGqmQd0bN/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "No")
        wr = stage.AddRecord(Linotrix, "06:22.13", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1P39ngIo5fgQl3VJwwjFpLLl9t8P4511T/view?usp=sharing"
        wr = stage.AddRecord(Migger, "06:44.08", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1o8KFtVMwyp1NxqzObiFW-WpzWPmh7gPF/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "06:27.82", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1N61Xo1S2XDO0I0I5lKaeI8Q_2go2HYMg/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "06:46.05", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Z-l9bFjLWUwHeiAjhUla0aJqjxEe7GrS/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "06:40.54", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Dcd0_lfX80pyyoNRG8z091q6XuOg59nI/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "07:58.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1DLvpLeEYJm0U807uTectVD7YLa_zd33d/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "05:59.77", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YyIMSIuz556sV9pqK42HEuKFm8T4uvY-/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1-wI-pjQhwCIKw6hN8bzth2Ohfph91XUl/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "08:47.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1l5THCdflaRfAK6RZMYJCh47D9kJdT4we/view?usp=sharing"
        
        stage = rally.stages[5]; //Newcastleton
        wr = stage.AddRecord(BrosTheTird, "14:33.99", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1hlc6mE4VpvAdxaiCjE1wWC7y0kLVHysk/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "DNF", "DNF", "No")
        wr = stage.AddRecord(Ephemeral, "12:28.15", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1g0O5-xoWwPOaSdHmf-7VadgGtgm0HTG6/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/12AbC0OCqazUT-C7meW_PjVLC6DxAFNWh/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "13:18.93", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1iLMOq02WqHhMqrBpgTtWJCWA-370bsBZ/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "13:39.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1woKTxYqCs-ruNXK0mAzBadoG0-Tlduq_/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "DNF", "DNF", "No")
        wr = stage.AddRecord(Linotrix, "12:28.63", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1yZZO4O4mkhC6xY2tr8D_P8hwuug5hdIl/view?usp=sharing"
        wr = stage.AddRecord(Migger, "13:28.20", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1PvhX15-AG0YKu1bjmLMciAMCatmu7NPB/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "13:35.83", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/196Wk0kzs5EQP4Tg1ENJeHLiIhDtYISne/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "13:18.81", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1SfyzDr_Qlc1pHFHpaNDtVWSQFo0QS6Y5/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "13:04.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19ztAm-Slb6lcyxd7mv6Y57QhdyDp6lY_/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "13:05.16", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1J8qyG4mVFKZnfp4m87YYgtthSKH0GzXk/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "12:21.24", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1QIFlqRF6699SQfibfBIxVwD44td0Xgkw/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1qHS2GFEnzchrP2xBh9MeGd8WsDubl6J-/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "14:16.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RkAeX4mE0hhphiZRiZMJWvFNAXT9RRTZ/view?usp=sharing"
    }
    {
        rally = contest.rallies[2];  //RSAC

        stage = rally.stages[0]; //Twiglees
        wr = stage.AddRecord(BrosTheTird, "07:35.06", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EOMHNxOVL0OsbL-hE76K4t0mcGZtM478/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "07:42.64", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1H8oMFMr_CFxmFmoxmUWEfo1BxFgrzF-Y/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "07:01.16", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ziQK-z8dP2VbQBVsDxM_kUpFZB-oyN-j/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/19JH9N0FQxykF3m9BB5FKhpv0Nr44F7Uu/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "07:36.26", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1nj7CaKbSXIwWUhpdVms_c_UBoQAA9X6I/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "08:18.32", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/15pj3Go6i06Z4POu5jEZOG_kcsVILjCUP/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "07:48.29", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/18XxY9KxX3bY2NexlX__KTeUnlcjNXk_z/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Sz7Rf4z3iYrCuO5p4ZTG7xD1c-sOASgW/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "07:08.91", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1udhndIT57gtFgR5PD-APrnbL0O6KfxcS/view?usp=sharing"
        wr = stage.AddRecord(Migger, "07:49.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1pmP9xPF7MlBuS-ifSnhaFkarrEU7Yoex/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "09:59.65", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1DdmMScCZk13icHyEFXik73Uoq2K-L4AE/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "09:50.49", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UqTQCQowq6iZfssYH5MDsJ_4v23q1PSU/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "07:13.83", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/13Oumm_ik1gPvNiWm6iNUQa1qXdu2x5bw/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "07:15.73", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1zbIAdFpI6Sre2RIn0XmZrk9Ic_p5NOsp/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "07:00.46", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/108Ote3Js-BmWPsHd01e78vnj3M9Y7UAf/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1G0QFouS3G55PgQF4P4vvVCukUtVbF3xe/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "07:39.53", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YwXiZqXAKvfzHFn-gR-qZxbQpJa54vCF/view?usp=sharing"
        
        stage = rally.stages[1]; //Yair
        wr = stage.AddRecord(BrosTheTird, "04:28.15", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1l2yltOvH0vsSbmG85uAdjNeLhV_dzmh5/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "04:31.31", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1g6In5j1zNIzI78a7HOfq88p9hBJUa07U/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "04:10.58", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1TzfyurApq-3I69xIAjJDphT0pgE009GD/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sz6VqTTHcydKxF_WCTutbnbscjEwUaRC/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "04:31.21", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1gDF5vbmFmtwlx5wwHE4vDNMV-Zjybki-/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "04:59.54", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1VohTKupATGsuS_rHj_Sq9k85ZhdrFsaG/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "04:32.02", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1xg5UN7kBt4TajbXENIqIdNXzm79_UMvE/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/10Pt4JvWoyAFl3yfyNKFUBfQwojeMRjZu/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "04:06.20", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1IQdYFdqGb25YB95OCklwZ6YRgu1vO3ov/view?usp=sharing"
        wr = stage.AddRecord(Migger, "04:22.88", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1WI0YDDVQ3XJYWAAtsePxuw4JBNwHtXtA/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "04:23.97", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ClHk6FAYLpRT3EFVehLsZFB0ZVE277Tz/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "04:46.76", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1L4sjC23IZsD3vGZeeVwnOMntn11wltXQ/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "04:20.56", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1VIJQK2gU-790vop7SdjwqCidBpf7RDwk/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "04:17.61", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1vIgC13t0aCtK-rxvhuFUNR7AFYcjl_7K/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "04:08.55", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1-SndhvcKMls_u7gCOZsbNojtJxuhzJp4/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1p9517Coum5tlzoudOBMnJEIPWqpNr0jA/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "04:28.52", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1HnSThG92B8k0p0F4AYfaln6HYoG71X1z/view?usp=sharing"
        
        stage = rally.stages[2]; //Cardrona
        wr = stage.AddRecord(BrosTheTird, "04:51.15", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1YU9sc4B55PWvW4WWR34cyB_6ckrZ7qNX/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "04:54.58", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1_B8FVgwjAHZz446gANw5n7zIoK38cGdL/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "04:43.14", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1RKnPitS1TU5U2QzHrhSMqB7O2MyHPRAm/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1kAwLr_Tsz4ARG3QMdidKzXoUD4xN6LQl/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "04:56.07", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/16aN25JRAiKp8__2y7WgKUqNfZf9EI_8X/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "05:13.03", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1wmljXQz_vj6wiFt0-kVNFrFmlmaa6d9R/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "04:48.72", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1V-eFKl0DhNv9WoqcHssqmvogSX0TYZjJ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1mL1Aw0Lq5T4Bv7GRu4O0SONAXvuImfRq/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "04:45.19", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ePCQsgB8t-sq37nnHpUvIwUhPWIt414k/view?usp=sharing"
        wr = stage.AddRecord(Migger, "04:48.75", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1TZBLgqoqDokqMBFNfSrRxS1jXm8OIQs7/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "04:51.59", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1sugfZrrYrRcSiuEJeie2pK_Sl0h6VFSR/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "05:06.60", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1rTwEdhplFPRx-MCmRXCMEj6WxC0IPubn/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "04:46.39", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1UZEUC_Sm1nJvfqhzTxXVyxss_-7OG_aU/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "04:47.75", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/14G0l3Gjp4v7r0T_LskgawZY6Ah9Tu5nk/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "04:43.05", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1eCdLxBiXfv_q-BEvaU8gT-VDjLWuknlN/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1sErRe3iMaEjScsSXxn179KntxjSeNbaW/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "05:59.04", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1U4B732BPInwMdVMb8RJLbfKEcMsKZ6CX/view?usp=sharing"
        
        stage = rally.stages[3]; //Black Loch
        wr = stage.AddRecord(BrosTheTird, "06:04.06", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/19Tpw01V4gTKh2_UYyFUr3inI1Vni1hmf/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "05:43.71", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Q3xdIH3s4jnv1ZLT0B4nmlpYo90w3Y4V/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "05:41.73", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/16eMXa9gBqLaXMujlbecQMRmf_TYuaTnc/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/15inYenpmRc9uSlrP3IAV1GC42rgzQjd3/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "06:01.90", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1m_znDpl4fqEPh1Hq7kAQHJ9FJv_g0Q1Y/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "06:22.48", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1fXXaeQqD-viYQZplcoSetVnb7RbOiH_4/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "05:46.42", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1P3AE9ZqwjLra1K8z3-4l31Cd1TlMvyk-/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1QTWBkvL58Nv9MJnpHQ29rkqiJ7QpS3tA/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "05:29.06", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1vE0RNUOrdGUpx9GdB_ZWIkuHnCH02AuQ/view?usp=sharing"
        wr = stage.AddRecord(Migger, "05:52.82", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Z3XfDVaE7vkck7w_Wv_FcWprZv3tPBOQ/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "05:36.71", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1H__e7j-OcivPull-7ryzxXEjq8WtHM5e/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "06:39.86", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/11GsNGb_FJyf8Hl3AAxxIv_ds3qWuccph/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "05:43.24", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1GxSfScfLIQx42ZP47eghiq5kKdS9jkmN/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "05:32.30", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Wd967WvzX5hUlKf1XO3BZLaUpaeqcUBY/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "05:47.29", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1vxGWV-jHxqk7Iu1BhWEg-2YqzQIlXGAR/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1ynkmfm-kT1FHRjn4UW5a1BXlmOeWdlmO/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "06:13.09", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1nrDimHpIl6f0omcMOg2OXEccsuiW9uMf/view?usp=sharing"
        
        stage = rally.stages[4]; //Glentrool
        wr = stage.AddRecord(BrosTheTird, "15:46.02", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1htOQAj53NjurcnvpYePeXBiVhMEciL_8/view?usp=sharing"
        wr = stage.AddRecord(datsun100aGTR, "15:22.43", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1N9hg08jrF5oOCoqfSLFlTQ-l9tgGjCUu/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "14:39.53", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1O3Sw9a6IT5Sus1m36gLrrcFn47nLuUJu/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1bXjuGaf10RC6slhZ-oZwUTVEdP868vEQ/view?usp=sharing"
        wr = stage.AddRecord(Erwto, "15:41.14", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12RgPt1YqniHKj7m1Xoq1zw5PM_RvFOc9/view?usp=sharing"
        wr = stage.AddRecord(KarelPipa, "15:48.27", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1ArbjAj7-1hZKllG_wEFJwRrqfIgaorbM/view?usp=sharing"
        wr = stage.AddRecord(Lewsys, "15:10.95", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1EaIFaeVc7p7QHpw2PG6e15-hv8dyr8PZ/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1Iy1WCGPqPUXoYyRli9gincmpoX0UVyOV/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "14:16.99", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1qnJNr7ZlHZpMtkD_mamVD4MI2ZLQX5hJ/view?usp=sharing"
        wr = stage.AddRecord(Migger, "14:58.80", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/11kW-uGsICoTvKyvvsfcN1NLT3NvvkpPd/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "15:11.92", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/16V-3e8Y8DF85vnANjMBf1Jtz3qI-VqX9/view?usp=sharing"
        wr = stage.AddRecord(sBinnala, "15:35.67", "00:00.00", "Yes")
        wr.proofs["image"] = "https://drive.google.com/file/d/1d8pcBkwxPchYz67gVKX6Hra-sWmJOq2J/view?usp=sharing"
        wr = stage.AddRecord(SpartaRemixer, "14:59.15", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1Fe4OkyvrTzB7YY9T3b6lmIMBSUS8DqRa/view?usp=sharing"
        wr = stage.AddRecord(TheKetrab, "14:37.34", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1gMPf2OojG5AOpuHebguQWB6ThYfkCiN3/view?usp=sharing"
        wr = stage.AddRecord(Tribell, "14:59.39", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/12kUx76aD2TgkcOe2KXRsteDPvBUZUpZ3/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1JyN8UKo6dSVCJnpK10uBbU52IbmliKKp/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        wr = stage.AddRecord(XsaraTorrada, "15:44.15", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1pKO3m_8DKZiZ3z-slpXjER5WwBis_Sg9/view?usp=sharing"
        
        stage = rally.stages[5]; //Ae
        // wr = stage.AddRecord(BrosTheTird, "15:46.02", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1htOQAj53NjurcnvpYePeXBiVhMEciL_8/view?usp=sharing"
        // wr = stage.AddRecord(datsun100aGTR, "15:22.43", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1N9hg08jrF5oOCoqfSLFlTQ-l9tgGjCUu/view?usp=sharing"
        wr = stage.AddRecord(Ephemeral, "14:49.67", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1VXNSgjdulIfX9U8Qbpo8bz60O0gORSDu/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1R7Sy2lAdTsb_iY6QFqxPSdq4Uovhfkk4/view?usp=sharing"
        // wr = stage.AddRecord(Erwto, "15:41.14", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/12RgPt1YqniHKj7m1Xoq1zw5PM_RvFOc9/view?usp=sharing"
        // wr = stage.AddRecord(KarelPipa, "15:48.27", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1ArbjAj7-1hZKllG_wEFJwRrqfIgaorbM/view?usp=sharing"
        // wr = stage.AddRecord(Lewsys, "15:10.95", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1EaIFaeVc7p7QHpw2PG6e15-hv8dyr8PZ/view?usp=sharing"
        // wr.proofs["replay"] = "https://drive.google.com/file/d/1Iy1WCGPqPUXoYyRli9gincmpoX0UVyOV/view?usp=sharing"
        // wr = stage.AddRecord(Linotrix, "14:16.99", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1qnJNr7ZlHZpMtkD_mamVD4MI2ZLQX5hJ/view?usp=sharing"
        // wr = stage.AddRecord(Migger, "14:58.80", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/11kW-uGsICoTvKyvvsfcN1NLT3NvvkpPd/view?usp=sharing"
        // wr = stage.AddRecord(Pendzior, "15:11.92", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/16V-3e8Y8DF85vnANjMBf1Jtz3qI-VqX9/view?usp=sharing"
        // wr = stage.AddRecord(sBinnala, "15:35.67", "00:00.00", "Yes")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1d8pcBkwxPchYz67gVKX6Hra-sWmJOq2J/view?usp=sharing"
        // wr = stage.AddRecord(SpartaRemixer, "14:59.15", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1Fe4OkyvrTzB7YY9T3b6lmIMBSUS8DqRa/view?usp=sharing"
        // wr = stage.AddRecord(TheKetrab, "14:37.34", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1gMPf2OojG5AOpuHebguQWB6ThYfkCiN3/view?usp=sharing"
        // wr = stage.AddRecord(Tribell, "14:59.39", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/12kUx76aD2TgkcOe2KXRsteDPvBUZUpZ3/view?usp=sharing"
        // wr.proofs["replay"] = "https://drive.google.com/file/d/1JyN8UKo6dSVCJnpK10uBbU52IbmliKKp/view?usp=sharing"
        wr = stage.AddRecord(Woeringen1288, "DNF", "DNF", "No")
        // wr = stage.AddRecord(XsaraTorrada, "15:44.15", "00:00.00", "No")
        // wr.proofs["image"] = "https://drive.google.com/file/d/1pKO3m_8DKZiZ3z-slpXjER5WwBis_Sg9/view?usp=sharing"
    }
    {
        rally = contest.rallies[3];  //Seat Jim Clark

        stage = rally.stages[0]; //Moon and Star
        
        stage = rally.stages[1]; //Bothwell
        
        stage = rally.stages[2]; //Whitchester
        
        stage = rally.stages[3]; //Eccles
        
        stage = rally.stages[4]; //Langton
        
        stage = rally.stages[5]; //Fogo
    }
    {
        rally = contest.rallies[4];  //Stena Line

        stage = rally.stages[0]; //Hamilton's Folly
        
        stage = rally.stages[1]; //Tyrones Ditches
        
        stage = rally.stages[2]; //Feeney
        
        stage = rally.stages[3]; //Parkanaur
        
        stage = rally.stages[4]; //Lisnamuck
        
        stage = rally.stages[5]; //Tardree
    }
    {
        rally = contest.rallies[5];  //Sony Manx

        stage = rally.stages[0]; //Port Soderick
        
        stage = rally.stages[1]; //Ballagyr
        
        stage = rally.stages[2]; //Curraghs
        
        stage = rally.stages[3]; //Tholt-y-Will
        
        stage = rally.stages[4]; //Injerbreck
        
        stage = rally.stages[5]; //Cringle
    }

    return contest
}
