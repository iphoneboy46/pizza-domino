const data = {
  pizzaPremium: [
    {
      id: 1,
      name: "PIZZA LẠP XƯỞNG XỐT TRỨNG MUỐI MAYONNAISE - SAIGON MANIA PIZZA",
      image: "https://img.dominos.vn/pizza-lap-xuong-2.jpg",
      imageOrder: "https://img.dominos.vn/Pizza-lap-xuong-1.jpg",
      imageMB: "https://img.dominos.vn/Pizza-lap-xuong-MB.jpg",
      description:
        "Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.",
      seafood: "seafood",
      pig: "pig",
    },
    {
      id: 2,
      name: "PIZZA BÁNH XÈO NHẬT - OKONOMIYAKI",
      image: "https://img.dominos.vn/Okonomiyaki-banh-xeo-nhat.jpg",
      imageOrder:
        "https://img.dominos.vn/Okonomiyaki-hinh-chi-tiet-banh-xeo-nhat.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_banh-xeo-nhat.jpg",
      description:
        "Xốt Mayonnaise, Xốt Teriyaki, Phô Mai Mozzarella, Bạch Tuộc, Tôm, Bắp Cải, Bột Rong Biển, Vẩy Cá Ngừ Bào ",
      seafood: "seafood",
    },
    {
      id: 3,
      name: "PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA",
      image:
        "https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg",
      imageOrder: "https://img.dominos.vn/Ocean-mania-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-H%E1%BA%A3i-S%E1%BA%A3n-X%E1%BB%91t-Mayonnaise.jpg",
      description:
        "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây",
      seafood: "seafood",
    },
    {
      id: 4,
      name: "PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU - PIZZAMIN SEA",
      image:
        "https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg",
      imageOrder: "https://img.dominos.vn/Pizzaminsea-thong-tin-1.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-H%E1%BA%A3i-S%E1%BA%A3n-X%E1%BB%91t-Mayonnaise.jpg",
      description:
        "Xốt tiêu đen, Phô Mai Mozzarella, Phô Mai Cheddar, Thơm, Hành Tây, Tôm, Mực",
      seafood: "seafood",
    },
    {
      id: 5,
      name: "PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ - SURF & TURF",
      image:
        "https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg",
      imageOrder: "https://img.dominos.vn/Surf-turf-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-B%C3%B2-_-T%C3%B4m-N%C6%B0%E1%BB%9Bng-Ki%E1%BB%83u-M%E1%BB%B9.jpg",
      description:
        "Xốt Cà Chua, Xốt Phô Mai, Phô Mai Mozzarella, Tôm, Thịt Bò Mexico, Cà Chua, Hành Tây",
      seafood: "seafood",
      beef: "beef",
    },
    {
      id: 6,
      name: "PIZZA THẬP CẨM THƯỢNG HẠNG - EXTRAVAGANZA",
      image:
        "https://img.dominos.vn/Pizza-Thap-Cam-Thuong-Hang-Extravaganza.jpg",
      imageOrder: "https://img.dominos.vn/Extravaganza-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-Th%E1%BA%ADp-C%E1%BA%A9m-Th%C6%B0%E1%BB%A3ng-H%E1%BA%A1ng.jpg",
      description:
        "Xốt Cà Chua, Phô Mai Mozzarella, Xúc Xích Pepperoni, Thịt Dăm Bông, Xúc Xich Ý, Thịt Bò Viên, Ớt Chuông Xanh, Nấm Mỡ, Hành Tây, Ô-liu",
      beef: "beef",
      pig: "pig",
    },
    {
      id: 7,
      name: "HALF HALF",
      image: "https://img.dominos.vn/Half-Half.jpg",
      imageOrder: "https://img.dominos.vn/Haft-haft-detail.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_Half-Half.jpg",
      description:
        "Pizza là sự kết hợp topping của pizza Ocean Mania và pizza Cheesy Chicken Bacon",
      seafood: "seafood",
      chicken: "chicken",
      pig: "pig",
    },
    {
      id: 8,
      name: "PIZZA 5 LOẠI THỊT THƯỢNG HẠNG - MEAT LOVERS",
      image:
        "https://img.dominos.vn/Meat-lover-Pizza-5-Loai-Thit-Thuong-Hang.jpg",
      imageOrder: "https://img.dominos.vn/meat-lover-detail.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-5-Lo%E1%BA%A1i-Th%E1%BB%8Bt-Th%C6%B0%E1%BB%A3ng-H%E1%BA%A1ng.jpg",
      description:
        "Xốt Cà Chua, Phô Mai Mozzarella, Xúc Xích Pepperoni, Thịt Dăm Bông, Xúc Xich Ý, Thịt Bò Viên, Thịt Heo Muối",
      beef: "beef",
      pig: "pig",
    },
    {
      id: 9,
      name: "PIZZA XÚC XÍCH Ý TRUYỀN THỐNG - PEPPERONI FEAST",
      image: "https://img.dominos.vn/Pepperoni-feast-Pizza-Xuc-Xich-Y.jpg",
      imageOrder: "https://img.dominos.vn/Pepperoni-feast-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-X%C3%BAc-X%C3%ADch-%C3%9D-Truy%E1%BB%81n-Th%E1%BB%91ng.jpg",
      description: "Xốt Cà Chua, Phô Mai Mozzarella, Xúc Xích Pepperoni",
      pig: "pig",
    },
    {
      id: 10,
      name: "Pizza Hải Sản Xốt Cà Chua - Seafood Delight",
      image:
        "https://img.dominos.vn/Pizza-Hai-San-Xot-Ca-Chua-Seafood-Delight.jpg",
      imageOrder:
        "https://img.dominos.vn/Seafood-delight-detail+(1)-compressed.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-H%E1%BA%A3i-S%E1%BA%A3n-X%E1%BB%91t-C%C3%A0-Chua.jpg",
      description:
        "Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây",
      seafood: "seafood",
    },
  ],

  pizzaFavorite: [
    {
      id: 1,
      name: "PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
      image: "https://img.dominos.vn/Sausage-Kid-Mania.jpg",
      imageOrder: "https://img.dominos.vn/Sausage-Kid-Maniat.jpg",
      imageMB: "https://img.dominos.vn/Sausage-Kid-Mania_MB.jpg",
      description:
        "Xốt phô mai, Phô mai Mozzarella, Xúc Xích, Thịt Heo Muối, Bắp (Ngô), Thơm (Dứa)",
      pig: "pig",
    },
    {
      id: 2,
      name: "PIZZA TRỨNG CÚT XỐT PHÔ MAI - KID MANIA",
      image:
        "https://img.dominos.vn/Kid-mania-Pizza-Trung-Cut-Xot-Pho-Mai-1.jpg",
      imageOrder: "https://img.dominos.vn/Kid-mania-detail.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-Tr%E1%BB%A9ng-C%C3%BAt-X%E1%BB%91t-Ph%C3%B4-Mai.jpg",
      description:
        "Xốt Phô Mai, Phô Mai Mozzarella, Thịt Heo Muối, Bắp, Trứng Cút ",
      pig: "pig",
    },
    {
      id: 3,
      name: "PIZZA RAU CỦ THẬP CẨM - VEGGIE MANIA",
      image: "https://img.dominos.vn/Veggie-mania-Pizza-Rau-Cu-Thap-Cam.jpg",
      imageOrder: "https://img.dominos.vn/Veggie-mania-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-Rau-C%E1%BB%A7-Th%E1%BA%ADp-C%E1%BA%A9m.jpg",
      description:
        "Xốt Cà Chua Hoặc Xốt Pesto, Phô Mai Mozzarella, Hành Tây, Ớt Chuông Xanh, Ô-liu, Nấm Mỡ, Cà Chua, Thơm (dứa)",
      vegetarian: "vegetarian",
    },
    {
      id: 4,
      name: "PIZZA GÀ XỐT TƯƠNG KIỂU NHẬT - TERIYAKI CHICKEN",
      image:
        "https://img.dominos.vn/Pizza-Ga-Xot-Tuong-Kieu-Nhat-Teriyaki-Chicken.jpg",
      imageOrder: "https://img.dominos.vn/Teriyaki-chicken-detail.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-G%C3%A0-X%E1%BB%91t-T%C6%B0%C6%A1ng-Ki%E1%BB%83u-Nh%E1%BA%ADt.jpg",
      description:
        "Xốt Teriyaki, Phô Mai Mozzarella, Mayonnaise, Gà, Nấm Mỡ, Hành Tây",
      chicken: "chicken",
    },
    {
      id: 5,
      name: "PIZZA DĂM BÔNG DỨA KIỂU HAWAII - HAWAIIAN",
      image:
        "https://img.dominos.vn/Pizza-Dam-Bong-Dua-Kieu-Hawaii-Hawaiian.jpg",
      imageOrder: "https://img.dominos.vn/Hawaiian-detail.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-D%C4%83m-B%C3%B4ng-D%E1%BB%A9a-Ki%E1%BB%83u-Hawaii-.jpg",
      description: "Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông, Thơm",
      pig: "pig",
    },
    {
      id: 6,
      name: "PIZZA PHÔ MAI HẢO HẠNG - CHEESE MANIA",
      image: "https://img.dominos.vn/Pizza-Pho-Mai-Hao-Hang-Cheese-Mania.jpg",
      imageOrder: "https://img.dominos.vn/Cheese-mania-detail.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_-Pizza-Ph%C3%B4-Mai-H%E1%BA%A3o-H%E1%BA%A1ng.jpg",
      description: "Xốt Cà Chua, phô Mai Mozzarella",
      vegetarian: "vegetarian",
    },
    {
      id: 7,
      name: "PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI - CHEESY CHICKEN BACON",
      image:
        "https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg",
      imageOrder:
        "https://img.dominos.vn/Cheesy-chicken-bacon-thong-tin+(2).jpg",
      imageMB:
        "https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg",
      description:
        "Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai Mozzarella, Cà Chua",
      chicken: "chicken",
      pig: "pig",
    },
  ],

  pizzaSignature: [
    {
      id: 1,
      name: "PIZZA BÒ MÊ-HI-CÔ THƯỢNG HẠNG - PRIME BEEF",
      image:
        "https://img.dominos.vn/Pizza-Bo-Me-Hi-Co-Thuong-Hang-Prime-Beef.jpg",
      imageOrder: "https://img.dominos.vn/Prime-beef-thong-tin.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-B%C3%B2-M%C3%AA-Hi-C%C3%B4-Th%C6%B0%E1%BB%A3ng-H%E1%BA%A1ng.jpg",
      description:
        "Xốt phô mai, Xốt cà chua, bò viên kiểu Ý, thịt bò Mexico, hành tây, cà chua, phô mai Mozzarella ",
      beef: "beef",
    },
    {
      id: 2,
      name: "PIZZA HẢI SẢN KIỂU SINGAPORE - SINGAPORE STYLE SEAFOOD",
      image:
        "https://img.dominos.vn/Pizza-Hai-San-Kieu-Singapore-Singapore-Style-Seafood.jpg",
      imageOrder: "https://img.dominos.vn/Singapore.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Pizza-H%E1%BA%A3i-S%E1%BA%A3n-Ki%E1%BB%83u-Singapore.jpg",
      description:
        "Xốt Singapore Cay, Phô Mai Mozzarella, Tôm, Thịt Cua, Hành Tây ",
      seafood: "seafood",
    },
    {
      id: 3,
      name: "PIZZA 4 VỊ - PIZZA BIG 4",
      image: "https://img.dominos.vn/Pizza-4-Vi-Pizza-Big-4.jpg",
      imageOrder: "https://img.dominos.vn/Pizza-4-Vi-Thong-Tin.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_Pizza-4-V%E1%BB%8B-.jpg",
      description:
        "Pizza là sự kết hợp của 4 loại pizza HAWAIIAN - OCEAN MANIA - TERIYAKI CHICKEN - SURF & TURF  ",
      seafood: "seafood",
      beef: "beef",
      chicken: "chicken",
      pig: "pig",
    },
  ],

  pastas: [
    {
      id: 1,
      name: "MỲ Ý HẢI SẢN ĐÚT LÒ",
      image: "https://img.dominos.vn/pasta-h%E1%BA%A3i-s%E1%BA%A3n.jpg",
      imageOrder: "https://img.dominos.vn/pasta-h%E1%BA%A3i-s%E1%BA%A3n.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_M%C3%8C-%C3%9D-H%E1%BA%A2I-S%E1%BA%A2N-%C4%90%C3%9AT-L%C3%92.jpg",
      description: "Sauce mỳ cay nhẹ, tôm, thanh cua, mực, phô mai Mozzarella ",
      price: 89,
      totalP: 89,
    },
    {
      id: 2,
      name: "Mỳ Ý Rau Củ Đút Lò",
      image: "https://img.dominos.vn/pasta-rau-cu.jpg",
      imageOrder: "https://img.dominos.vn/pasta-rau-cu.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_M%C3%8C-%C3%9D-RAU-C%E1%BB%A6-%C4%90%C3%9AT-L%C3%92.jpg",
      description:
        "Sauce mỳ cay nhẹ, nấm, ớt chuông xanh, cà chua, dứa, Olive đen, phô mai Mozzarella.",
      price: 79,
      totalP: 79,
    },
    {
      id: 3,
      name: "MỲ Ý BÒ BẰM ĐÚT LÒ",
      image: "https://img.dominos.vn/pasta-bo-bam.jpg",
      imageOrder: "https://img.dominos.vn/pasta-bo-bam.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_M%C3%AC-%C3%9D-B%C3%B2-B%E1%BA%B1m-%C4%90%C3%BAt-L%C3%B2.jpg",
      description: "Sauce mỳ bò bằm, phô mai Mozzarella",
      price: 89,
      totalP: 89,
    },
  ],

  chicken: [
    {
      id: 1,
      name: "Khai Vị Tổng Hợp",
      image:
        "https://img.dominos.vn/Khai-V%E1%BB%8B-T%E1%BB%95ng-H%E1%BB%A3p-PC-nen-xam_360X240px.jpg",
      imageOrder:
        "https://img.dominos.vn/Khai-V%E1%BB%8B-T%E1%BB%95ng-H%E1%BB%A3p-PC-nen-xam_360X240px.jpg",
      imageMB:
        "https://img.dominos.vn/Khai-V%E1%BB%8B-T%E1%BB%95ng-H%E1%BB%A3p-MB-nen-xam.jpg",
      description:
        "2 miếng Cánh gà nướng BBQ, 3 miếng Xúc Xích Xông Khói Đút Lò và Khoai tây phô mai đút lò ",
      price: 99,
      totalP: 99,
    },
    {
      id: 2,
      name: "Cánh Gà BBQ Kiểu Mỹ (4 miếng)",
      image:
        "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      description:
        "Cánh gà nướng ăn kèm với xốt BBQ độc quyền từ Domino's Pizza.",
      price: 89,
      totalP: 99,
    },
    {
      id: 3,
      name: "GÀ KHÔNG XƯƠNG BBQ",
      image:
        "https://img.dominos.vn/MENU-PC_GA%CC%80-KHO%CC%82NG-XU%CC%9BO%CC%9BNG-BBQ.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-MB_GA%CC%80-KHO%CC%82NG-XU%CC%9BO%CC%9BNG-BBQ.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_GA%CC%80-KHO%CC%82NG-XU%CC%9BO%CC%9BNG-BBQ.jpg",
      description: "Gà Không Xương tẩm bột ăn cùng xốt BBQ ngon tuyệt. ",
      price: 79,
      totalP: 79,
    },
    {
      id: 4,
      name: "GÀ TẨM BỘT PHÔ MAI",
      image:
        "https://img.dominos.vn/MENU-PC_Ga%CC%80-Ta%CC%82%CC%89m-Bo%CC%A3%CC%82t-Pho%CC%82-Mai.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Ga%CC%80-Ta%CC%82%CC%89m-Bo%CC%A3%CC%82t-Pho%CC%82-Mai.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Ga%CC%80-Ta%CC%82%CC%89m-Bo%CC%A3%CC%82t-Pho%CC%82-Mai.jpg",
      description: "Gà Không Xương tẩm bột",
      price: 79,
      totalP: 79,
    },
    {
      id: 5,
      name: "Cánh Gà BBQ Kiểu Mỹ (6 miếng)",
      image:
        "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
      description:
        "Cánh gà nướng ăn kèm với xốt BBQ độc quyền từ Domino's Pizza.",
      price: 109,
      totalP: 109,
    },
  ],

  dessert: [
    {
      id: 1,
      name: "PIZZA SÔ-CÔ-LA",
      image: "https://img.dominos.vn/Choco-pizza.jpg",
      imageOrder: "https://img.dominos.vn/Choco-pizza.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_Choco-pizza-detail.jpg",
      description:
        "Xốt kem, phô mai, Socola Sauce và Mix Socola Chip (đen+ trắng)",
      price: 69,
      totalP: 69,
    },
    {
      id: 2,
      name: "BÁNH SÔ-CÔ-LA ĐÚT LÒ",
      image: "https://img.dominos.vn/choco.jpg",
      imageOrder: "https://img.dominos.vn/choco.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_B%C3%81NH-S%C3%94-C%C3%94-LA-%C4%90%C3%9AT-L%C3%92.jpg",
      description: "Bánh Socola đút lò tan chảy ngọt ngào từ miếng đầu tiên.",
      price: 39,
      totalP: 39,
    },
  ],

  drinks: [
    {
      id: 1,
      name: "CHAI SPRITE 1.85L",
      image: "https://img.dominos.vn/Sprite-1.5L.jpg",
      imageOrder: "https://img.dominos.vn/Sprite-1.5L.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_CHAI-SPRITE-1%2C5L.png",
      description: "",
      price: 39,
      totalP: 39,
    },
    {
      id: 2,
      name: "CHAI COCA-COLA 1.5L",
      image: "https://img.dominos.vn/coke-1.5.jpg",
      imageOrder: "https://img.dominos.vn/coke-1.5.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_CHAI-COCA-1.5L.png",
      description: "",
      price: 39,
      totalP: 39,
    },
    {
      id: 3,
      name: "CHAI FANTA 1.5L",
      image: "https://img.dominos.vn/fanta-1.5.jpg",
      imageOrder: "https://img.dominos.vn/fanta-1.5.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_CHAI-FANTA-1%2C5L.png",
      description: "",
      price: 39,
      totalP: 39,
    },
    {
      id: 4,
      name: "LON COCA-COLA ZERO 320ML",
      image: "https://img.dominos.vn/coke-zero.jpg",
      imageOrder: "https://img.dominos.vn/coke-zero.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_LON-COCA-ZERO-330ML.png",
      description: "",
      price: 20,
      totalP: 20,
    },
    {
      id: 5,
      name: "CHAI COCA-COLA 390ML",
      image: "https://img.dominos.vn/coke-390.jpg",
      imageOrder: "https://img.dominos.vn/coke-390.jpg",
      imageMB: "",
      description: "https://img.dominos.vn/MENU-MB_coke-390.jpg",
      price: 20,
      totalP: 20,
    },
    {
      id: 6,
      name: "CHAI FANTA 390ML",
      image: "https://img.dominos.vn/fanta-390.jpg",
      imageOrder: "https://img.dominos.vn/fanta-390.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_CHAI-FANTA-390ML.png",
      description: "",
      price: 20,
      totalP: 20,
    },
    {
      id: 7,
      name: "CHAI SPRITE 390ML",
      image: "https://img.dominos.vn/Sprite-390.jpg",
      imageOrder: "https://img.dominos.vn/Sprite-390.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_CHAI-SPRITE-390ML.png",
      description: "",
      price: 20,
      totalP: 20,
    },
    {
      id: 8,
      name: "NƯỚC SUỐI DASANI 510ML",
      image: "https://img.dominos.vn/daisani.jpg",
      imageOrder: "https://img.dominos.vn/daisani.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_N%C6%AF%E1%BB%9AC-SU%E1%BB%90I-DASANI-500ML.png",
      description: "",
      price: 20,
      totalP: 20,
    },
    {
      id: 9,
      name: "LON COCA-COLA PLUS 320ML",
      image: "https://img.dominos.vn/coke-light.jpg",
      imageOrder: "https://img.dominos.vn/coke-light.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_LON-COCA-PLUS-330ML-.png",
      description: "",
      price: 25,
      totalP: 25,
    },
    {
      id: 10,
      name: "TRÀ CHANH SẢ 350M",
      image: "https://img.dominos.vn/chanh-sa.jpg",
      imageOrder: "https://img.dominos.vn/chanh-sa.jpg",
      imageMB: "https://img.dominos.vn/MENU-MB_chanh-sa.jpg",
      description: "",
      price: 25,
      totalP: 25,
    },
    {
      id: 11,
      name: "TRÀ ĐÀO HẠT CHIA 350ML",
      image: "https://img.dominos.vn/dao-hat-chia.jpg",
      imageOrder: "https://img.dominos.vn/dao-hat-chia.jpg",
      imageMB:
        "https://img.dominos.vn/MENU-MB_TR%C3%80-%C4%90%C3%80O-H%E1%BA%A0T-CHIA-350ML.png",
      description: "",
      price: 25,
      totalP: 25,
    },
    {
      id: 12,
      name: "CHANH DÂY HẠT CHIA 350ML",
      image:
        "https://img.dominos.vn/FUZETEA-CHANH-D%C3%82Y-H%E1%BA%A0T-CHIA-PC-nen-trang_360X240px.png",
      imageOrder:
        "https://img.dominos.vn/FUZETEA-CHANH-D%C3%82Y-H%E1%BA%A0T-CHIA-PC-nen-trang_360X240px.png",
      imageMB:
        "https://img.dominos.vn/FUZETEA-CHANH-D%C3%82Y-H%E1%BA%A0T-CHIA-MB-nen-trang.png",
      description: "",
      price: 25,
      totalP: 25,
    },
  ],

  sausage: [
    {
      id: 1,
      name: "XÚC XÍCH XÔNG KHÓI ĐÚT LÒ (4 MIẾNG)",
      image:
        "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80+-+Copy.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80+-+Copy.jpg",
      description: "Xúc xích xông khói ăn kèm với xốt BBQ thơm ngon.",
      price: 49,
      totalP: 49,
    },
    {
      id: 2,
      name: "XÚC XÍCH XÔNG KHÓI ĐÚT LÒ (8 MIẾNG)",
      image:
        "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80+-+Copy.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80+-+Copy.jpg",
      description: "Xúc xích xông khói ăn kèm với xốt BBQ thơm ngon.",
      price: 79,
      totalP: 79,
    },
  ],

  bread: [
    {
      id: 1,
      name: "BÁNH MÌ NƯỚNG PHÔ MAI",
      image: "https://img.dominos.vn/banh-mi-pho-mai.jpg",
      imageOrder: "https://img.dominos.vn/banh-mi-pho-mai.jpg",
      description: "Bánh mì nướng với phô mai & bột tỏi thơm béo",
      price: 59,
      totalP: 59,
    },
    {
      id: 2,
      name: "BÁNH MÌ NƯỚNG BƠ TỎI",
      image: "https://img.dominos.vn/banh-mi-bo-toi.jpg",
      imageOrder: "https://img.dominos.vn/banh-mi-bo-toi.jpg",
      description: "Bánh mì được nướng cùng bơ tỏi thơm ngon.",
      price: 39,
      totalP: 39,
    },
  ],

  potato: [
    {
      id: 1,
      name: "KHOAI TÂY PHÔ MAI ĐÚT LÒ",
      image:
        "https://img.dominos.vn/MENU-PC_Khoai-Ta%CC%82y-Pho%CC%82-Mai-%C4%90u%CC%81t-Lo%CC%80.jpg",
      imageOrder:
        "https://img.dominos.vn/MENU-PC_Khoai-Ta%CC%82y-Pho%CC%82-Mai-%C4%90u%CC%81t-Lo%CC%80.jpg",
      description:
        "Khoai tây cùng phô mai béo ngậy nướng qua lò với thịt heo hun khói.",
      price: 49,
      totalP: 49,
    },
  ],

  cakeBase: [
    {
      id: 1,
      name: "Đế mỏng giòn",
      image: "https://dominos.vn/img/icon/pizza-base-1.png",
    },
    {
      id: 2,
      name: "Đế dày xốp",
      image: "https://dominos.vn/img/icon/pizza-base-2.png",
    },
    {
      id: 3,
      name: "Đế vừa",
      image: "https://dominos.vn/img/icon/pizza-base-3.png",
    },
  ],

  cakeSize: [
    {
      id: 1,
      name: "Cỡ 7 inch",
      price: 99.0,
      image: "https://dominos.vn/img/icon/pizza-size-1.png",
    },
    {
      id: 2,
      name: "Cỡ 9 inch",
      price: 189.0,
      image: "https://dominos.vn/img/icon/pizza-size-2.png",
    },
    {
      id: 3,
      name: "Cỡ 12 inch",
      image: "https://dominos.vn/img/icon/pizza-size-3.png",
      price: 279.0,
    },
  ],
  cakeMore9: [
    {
      id: 1,
      name: 'Thêm phô mai 9"',
      price: 15.0,
      image: "https://img.dominos.vn/1phomai-v.png",
    },
    {
      id: 2,
      name: 'Gấp đôi phô mai 9"',
      price: 25.0,
      image: "https://img.dominos.vn/2phomai-v.png",
    },
    {
      id: 3,
      name: 'Gấp ba phô mai 9"',
      image: "https://img.dominos.vn/3phomai-v.png",
      price: 35.0,
    },
  ],
  cakeBorder9: [
    {
      id: 1,
      name: 'Viền phô mai 9"',
      price: 59.0,
      image: "https://img.dominos.vn/phomai.png",
    },
    {
      id: 2,
      name: 'Viền xúc xích 9"',
      price: 59.0,
      image: "https://img.dominos.vn/xucxic.png",
    },
    {
      id: 3,
      name: 'Viền xúc xích phô mai 9"',
      image: "https://img.dominos.vn/phomaixucxich.png",
      price: 79.0,
    },
  ],
  cakeMore12: [
    {
      id: 1,
      name: 'Thêm phô mai 12"',
      price: 25.0,
      image: "https://img.dominos.vn/1phomai-v.png",
    },
    {
      id: 2,
      name: 'Gấp đôi phô mai 12"',
      price: 35.0,
      image: "https://img.dominos.vn/2phomai-v.png",
    },
    {
      id: 3,
      name: 'Gấp ba phô mai 12"',
      image: "https://img.dominos.vn/3phomai-v.png",
      price: 45.0,
    },
  ],
  cakeBorder12: [
    {
      id: 1,
      name: 'Viền phô mai 12"',
      price: 79.0,
      image: "https://img.dominos.vn/phomai.png",
    },
    {
      id: 2,
      name: 'Viền xúc xích 12"',
      price: 79.0,
      image: "https://img.dominos.vn/xucxic.png",
    },
    {
      id: 3,
      name: 'Viền xúc xích phô mai 12"',
      image: "https://img.dominos.vn/phomaixucxich.png",
      price: 99.0,
    },
  ],

  HCM:[
    {
      name: "Dominos - CONG HOA",
      time : "10:00 am - 09:30 pm",
      address: "371 - 373 Cộng Hòa, Phường 13, Quận Tân Bình",
      value : "TB"
    },
    {
      name: "Dominos - DINH BO LINH",
      time : "10:00 am - 09:30 pm",
      address: "138 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh",
      value : "BTH"
    },
    {
      name: "Dominos - PHAN VAN TRI",
      time : "10:00 am - 09:30 pm",
      address: "491 Phan Văn Trị, Phường 5, Quận Gò Vấp",
      value : "GV"
    },
    {
      name: "Dominos - NGUYEN KIEM",
      time : "10:00 am - 09:30 pm",
      address: "736A Nguyễn Kiệm, Phường 4, Quận Phú Nhuận",
      value : "PN"
    },
    {
      name: "Dominos - LE VAN SY",
      time : "10:00 am - 09:30 pm",
      address: "335A Lê Văn Sỹ, Phường 1, Quận Tân Bình",
      value : "TB"
    },
    {
      name: "Dominos - KHA VAN CAN",
      time : "10:00 am - 09:30 pm",
      address: "738 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức",
      value : "TD"
    },
    {
      name: "Dominos - DUONG BA TRAC",
      time : "10:00 am - 09:30 pm",
      address: "222-228 Dương Bá Trạc, Phường 2, Quận 8",
      value : "Q8"
    },
    {
      name: "Dominos - LE VAN VIET",
      time : "10:00 am - 09:30 pm",
      address: "196 Lê Văn Việt, Phường Tăng Nhơn Phú B, Quận 9",
      value : "Q9"
    },
    {
      name: "Dominos - QUOC HUONG",
      time : "10:00 am - 09:30 pm",
      address: "14G Quốc Hương, phường Thảo Điền, Quận 2",
      value : "Q2"
    },
    {
      name: "Dominos - HOA BINH",
      time : "10:00 am - 09:30 pm",
      address: "48 Hòa Bình, Phường 5, Quận 11",
      value : "Q11"
    },
    {
      name: "Dominos - MINH PHUNG",
      time : "10:00 am - 09:30 pm",
      address: "74 Minh Phụng, Phường 5, Quận 6",
      value : "Q6"
    },
    {
      name: "Dominos - TEN LUA",
      time : "10:00 am - 09:30 pm",
      address: "348-350 Tên Lửa, Phường Bình Trị Đông B, Quận Bình Tân",
      value : "BTN"
    },
    {
      name: "Dominos - NGUYEN SON",
      time : "10:00 am - 09:30 pm",
      address: "289 Nguyễn Sơn, phường Phú Thạnh, Quận Tân Phú",
      value : "TP"
    },
    {
      name: "Dominos - NGUYEN TRI PHUONG ",
      time : "10:00 am - 09:30 pm",
      address: "313 Nguyễn Tri Phương, Phường 5, Quận 10",
      value : "Q10"
    },
    {
      name: "Dominos - LIEN TINH 5 ",
      time : "10:00 am - 09:30 pm",
      address: "240 Quốc Lộ 50, Phường 6, Quận 8",
      value : "Q8"
    },
    {
      name: "Dominos - LE VAN QUOI ",
      time : "10:00 am - 09:30 pm",
      address: "480 Lê Văn Quới, P.Bình Hưng Hòa A, Quận Bình Tân",
      value : "BTN"
    },
    {
      name: "Dominos - NGUYEN ANH THU ",
      time : "10:00 am - 09:30 pm",
      address: "31/1B Nguyễn Ảnh Thủ, Phường Trung Mỹ Tây, Quận 12",
      value : "Q12"
    },
    {
      name: "Dominos - NGUYEN DUY TRINH",
      time : "10:00 am - 09:30 pm",
      address: "101-103 Nguyễn Duy Trinh, Phường Bình Trưng Tây, Quận 2",
      value : "Q2"
    },
    {
      name: "Dominos - LE THI HA ",
      time : "10:00 am - 09:30 pm",
      address: "38/5 Lê Thị Hà, TT. Hóc Môn, Huyện Hóc Môn",
      value : "HM"
    },
    {
      name: "Dominos - PHU MY HUNG ",
      time : "10:00 am - 09:30 pm",
      address: "117 Nguyễn Đức Cảnh, Phường Tân Phong, Quận 7",
      value : "Q7"
    },
    {
      name: "Dominos - KHANH HOI  ",
      time : "10:00 am - 09:30 pm",
      address: "131-133 Khánh Hội, Phường 3, Quận 4",
      value : "Q4"
    },
    {
      name: "Dominos - LE TRONG TAN ",
      time : "10:00 am - 09:30 pm",
      address: "440 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú",
      value : "TP"
    },
    {
      name: "Dominos - PHAN HUY ICH ",
      time : "10:00 am - 09:30 pm",
      address: "7 Phan Huy Ích, P.15, Quận Tân Bình",
      value : "TB"
    },
    {
      name: "Dominos - HUYNH TAN PHAT 2 ",
      time : "10:00 am - 09:30 pm",
      address: "1108 – 1108A Huỳnh Tấn Phát, Phường Tân Phú, Quận 7",
      value : "Q7"
    },
    {
      name: "Dominos - LE VAN KHUONG  ",
      time : "10:00 am - 09:30 pm",
      address: "291 Lê Văn Khương - Phường Hiệp Thành - Quận 12",
      value : "Q12"
    },
    {
      name: "Dominos - TRAN QUANG KHAI ",
      time : "10:00 am - 09:30 pm",
      address: "71bis Trần Quang Khải, Phường Tân Định, Quận ",
      value : "Q1"
    },
    {
      name: "Dominos - PHAM HONG THAI  ",
      time : "10:00 am - 09:30 pm",
      address: "24 Phạm Hồng Thái, Phường Bến Nghé, Quận 1",
      value : "Q1"
    },
    {
      name: "Dominos - NGUYEN THI TU ",
      time : "10:00 am - 09:30 pm",
      address: "10D Đường Nguyễn Thị Tú, Ấp 4, Quận Bình Chánh, Thành phố Hồ Chí Minh",
      value : "BC"
    },
  ],



  khuyenmai1: [
    {
      id: 1,
      image: "https://img.dominos.vn/70-Pizza-Thu-2-03.png",
      name: "GIẢM 70% CHO PIZZA THỨ 2 - ÁP DỤNG MUA MANG VỀ & GIAO HÀNG TẬN NƠI",
      description_1:
        " * Mua Pizza size M hoặc L kèm nước uống nguyên giá được giảm 70% cho bánh Pizza thứ 2 cùng size có giá bằng hoặc thấp hơn Pizza thứ nhất.",
      description_2:
        " * Áp dụng cho Mua Mang Về & Giao Hàng Tận Nơi tất cả các ngày trong tuần.",
    },
  ],
  khuyenmai2: [
    {
      id: 2,
      image: "https://img.dominos.vn/Chuong-trinh-M%26M-89K-03.png",
      name: "MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K",
      description_1:
        " * Giá: 89K/pizza dòng Favorite (size M). Thêm 30K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.",
      description_2:
        " * Giá: 159K/pizza dòng Favorite (size L). Thêm 20K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.",
      description_3: " * Áp dụng khi mua 02 pizza đồng thời.",
    },
  ],
  khuyenmai3: [
    {
      id: 3,
      image: "https://img.dominos.vn/Promotion+Deal+cho+nhom+VN_EN-1.png",
      name: "DEAL SIÊU TO CHO NHÓM",
      description_1:
        " * Combo 229.000 đ cho 2 người gồm 1 pizza size M dòng Premium + 1 phần món phụ + 1 chai nước (390ml)",
      description_2:
        " * Combo 309.000 đ cho 3-4 người gồm 1 pizza size L dòng Favorite + 2 phần món phụ + 2 chai nước (390ml)",
      description_3:
        " * Combo 339.000 đ cho 3-4 người gồm 1 pizza size L dòng Premium + 2 phần món phụ + 1 chai nước (1.5L) ",
    },
  ],
};

export default data;
