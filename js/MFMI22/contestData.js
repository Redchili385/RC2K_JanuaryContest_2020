function contestData(){
    if(typeof(website) === "undefined"){
        website = websiteData()
        console.log(website);
    }
    let contest  = new Contest("Magnetic Fields Memorial Invitational 2022");
    
    let col = 0x000020;
    let participantColor = () => {
        let hex, red, green, blue, redGreenDiff, redBlueDiff, greenBlueDiff;
        do {
            hex = (Math.random()*0xFFFFFF<<0).toString(16);
            red = hex.slice(0,2);
            green = hex.slice(2,4);
            blue = hex.slice(4,6);
            redGreenDiff = Math.abs(parseInt(red, 16) - parseInt(green, 16));
            redBlueDiff = Math.abs(parseInt(red, 16) - parseInt(blue, 16));
            greenBlueDiff = Math.abs(parseInt(green, 16) - parseInt(blue, 16));
        }
        while(redGreenDiff < 50 || redBlueDiff < 50 || greenBlueDiff < 50);
        return `#${hex}`;
    }
    let Erwto = new Participant(20, website.GetUserByName('Erwto'), participantColor(), 'G3', 'Seat Cordoba WRC');
    let Migger = new Participant(23, website.GetUserByName('Migger'), participantColor(), 'G3', 'Mitsubishi Lancer Evo IV');
    let SpartaX18 = new Participant(3, website.GetUserByName('SpartaX18'), participantColor(), 'G1', 'Seat Cordoba WRC');
    let SpartaRemixer = new Participant(26, website.GetUserByName('SpartaRemixerPL'), participantColor(), 'G2', 'Subaru Impreza WRC');
    let Ephemeral = new Participant(25, website.GetUserByName('Ephemeral'), participantColor(), 'G1', 'Seat Cordoba WRC');
    let XsaraTorrada = new Participant(27, website.GetUserByName('XsaraTorrada'), participantColor(), 'G3', 'Seat Cordoba WRC');
    let Lewsys = new Participant(14, website.GetUserByName('Lewsys'), participantColor(), 'G4', 'Mitsubishi Lancer Evo V');
    let Twajlot = new Participant(6, website.GetUserByName('Twajlot'), participantColor(), 'G2', 'Mitsubishi Lancer Evo IV');
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
        wr = stage.AddRecord(Lewsys, "12:52.82", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1IuC-dm6XUVt4n8bz13UzCxZkhI4yvu2i/view?usp=sharing"
        wr.proofs["replay"] = "https://drive.google.com/file/d/1_4Ho2jYYasOYXH9WoUuMY2NXPftAAHkW/view?usp=sharing"
        wr = stage.AddRecord(Linotrix, "11:54.02", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1kIP24Hn7VueHhkFkOdBJXRRpnRA8gPIH/view?usp=sharing"
        wr = stage.AddRecord(Migger, "12:48.36", "00:00.00", "No")
        wr.proofs["image"] = "https://drive.google.com/file/d/1f4Jqm04cxyjby_cweQnvZ2jOrop_LwPk/view?usp=sharing"
        wr = stage.AddRecord(Pendzior, "12:21.83", "00:00.00", "No")
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
        
        stage = rally.stages[1]; //Falstone
        
        stage = rally.stages[2]; //Kershope
        
        stage = rally.stages[3]; //Pundershaw
        
        stage = rally.stages[4]; //Riccarton
        
        stage = rally.stages[5]; //Newcastleton
    }
    {
        rally = contest.rallies[2];  //RSAC

        stage = rally.stages[0]; //Twiglees
        
        stage = rally.stages[1]; //Yair
        
        stage = rally.stages[2]; //Cardrona
        
        stage = rally.stages[3]; //Black Loch
        
        stage = rally.stages[4]; //Glentrool
        
        stage = rally.stages[5]; //Ae
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
