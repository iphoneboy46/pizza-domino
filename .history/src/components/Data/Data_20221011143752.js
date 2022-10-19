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

  optionTP : [
    { value: "null", label: "Chọn Tỉnh/Thành phố" },
    { value: "1", label: "Hồ Chí Minh" },
    { value: "2", label: "Hà Nội" },
    { value: "3", label: " Bình Dương" },
    { value: "4", label: " Đồng Nai" },
    { value: "5", label: "Hải Phòng" },
  ],

   optionQHCM : [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "BC", label: "Bình Chánh" },
    { value: "BTN", label: "Bình Tân" },
    { value: "BTH", label: " Bình Thạnh" },
    { value: "GV", label: " Gò Vấp" },
    { value: "HM", label: "Hóc Môn" },
    { value: "PN", label: "Phú Nhuận" },
    { value: "Q1", label: "Quận 1" },
    { value: "Q2", label: "Quận 2" },
    { value: "Q3", label: "Quận 3" },
    { value: "Q4", label: "Quận 4" },
    { value: "Q5", label: "Quận 5" },
    { value: "Q6", label: "Quận 6" },
    { value: "Q7", label: "Quận 7" },
    { value: "Q8", label: "Quận 8" },
    { value: "Q9", label: "Quận 9" },
    { value: "Q10", label: "Quận 10" },
    { value: "Q11", label: "Quận 11" },
    { value: "Q12", label: "Quận 12" },
    { value: "TB", label: "Tân Bình" },
    { value: "TP", label: "Tân Phú" },
    { value: "TD", label: "Thủ Đức" },
  ],

  optionQHN : [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "BD", label: "Quận Ba Đình" },
    { value: "HK", label: "Quận Hoàn Kiếm" },
    { value: "CG", label: "Quận Cầu Giấy " },
    { value: "HBT", label: " Quận Hai Bà Trưng" },
    { value: "HM", label: "Quận Hoàng Mai" },
    { value: "BTL", label: "Quận Bắc Từ Liêm" },
    { value: "HD", label: "Quận Hà Đông" },
    { value: "TL", label: "Quận Từ Liêm" },
  ],

  optionBD : [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "TDM", label: "Thành phố Thủ Dầu Một" },
  ],

  optionDN : [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "BH", label: "Thành phố Biên Hòa" },
  ],

  optionHP : [
    { value: "null", label: "Chọn Quận/Huyện" },
    { value: "HB", label: "Quận Hồng Bàng" },
    { value: "NQ", label: "Quận Ngô Quyền" },
  ],

  HCM: [
    {
      name: "Dominos - CONG HOA",
      time: "10:00 am - 09:30 pm",
      address: "371 - 373 Cộng Hòa, Phường 13, Quận Tân Bình",
      value: "TB",
      ip:"!1m18!1m12!1m3!1d3919.1192470824963!2d106.63964621524117!3d10.802177961670603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294feec8eb85%3A0x340ed85b8d5185af!2zRG9taW5vJ3MgUGl6emEgQ-G7mW5nIEhvw6A!5e0!3m2!1svi!2s!4v1665470994899!5m2!1svi!2s",
    },
    {
      name: "Dominos - DINH BO LINH",
      time: "10:00 am - 09:30 pm",
      address: "138 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh",
      value: "BTH",
      ip:"!1m18!1m12!1m3!1d3919.0279392941693!2d106.7072557152411!3d10.80917196154308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bd72c57719%3A0xafa248faeb26b8be!2s!5e0!3m2!1svi!2s!4v1665471035335!5m2!1svi!2s",
    },
    {
      name: "Dominos - PHAN VAN TRI",
      time: "10:00 am - 09:30 pm",
      address: "491 Phan Văn Trị, Phường 5, Quận Gò Vấp",
      value: "GV",
      ip:"!1m18!1m12!1m3!1d3918.8361833214763!2d106.68959081524113!3d10.823845561275311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f1b7a2ca6b%3A0xd5bb6d73d39c8249!2s!5e0!3m2!1svi!2s!4v1665471094547!5m2!1svi!2s",
    },
    {
      name: "Dominos - NGUYEN KIEM",
      time: "10:00 am - 09:30 pm",
      address: "736A Nguyễn Kiệm, Phường 4, Quận Phú Nhuận",
      value: "PN",
      ip:"!1m18!1m12!1m3!1d3919.0445014881525!2d106.67650531524106!3d10.807903661566233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752918226be353%3A0xfbfb874a203af771!2zRG9taW5vJ3MgUGl6emEgTmd1eeG7hW4gS2nhu4dt!5e0!3m2!1svi!2s!4v1665471161822!5m2!1svi!2s",
    },
    {
      name: "Dominos - LE VAN SY",
      time: "10:00 am - 09:30 pm",
      address: "335A Lê Văn Sỹ, Phường 1, Quận Tân Bình",
      value: "TB",
      ip:"!1m18!1m12!1m3!1d3919.2037984242324!2d106.6660782!3d10.7956975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed540d813a3%3A0x22d243f88e3ddd7!2s!5e0!3m2!1svi!2s!4v1665471442419!5m2!1svi!2s",
    },
    {
      name: "Dominos - KHA VAN CAN",
      time: "10:00 am - 09:30 pm",
      address: "738 Kha Vạn Cân, Phường Linh Đông, Quận Thủ Đức",
      value: "TD",
      ip:"!1m18!1m12!1m3!1d3918.5376199322664!2d106.74913791524126!3d10.846653260858359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b8f02b4037%3A0x1eb8623512379821!2ss%20Pizza%20Kha%20V%E1%BA%A1n%20C%C3%A2n!5e0!3m2!1svi!2s!4v1665472513348!5m2!1svi!2s"
    },
    {
      name: "Dominos - DUONG BA TRAC",
      time: "10:00 am - 09:30 pm",
      address: "222-228 Dương Bá Trạc, Phường 2, Quận 8",
      value: "Q8",
      ip:"!1m18!1m12!1m3!1d3919.8485898631257!2d106.68674751524092!3d10.746150262689222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa78d992811%3A0xc5b84c7528dab521!2zRG9taW5vJ3MgUGl6emEgRMawxqFuZyBCw6EgVHLhuqFj!5e0!3m2!1svi!2s!4v1665471715221!5m2!1svi!2s"
    },
    {
      name: "Dominos - LE VAN VIET",
      time: "10:00 am - 09:30 pm",
      address: "196 Lê Văn Việt, Phường Tăng Nhơn Phú B, Quận 9",
      value: "Q9",
      ip:"!1m18!1m12!1m3!1d3918.5734813206!2d106.78008161524123!3d10.84391626090846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752711fcf07a91%3A0x1a139ce2bb37c951!2zRG9taW5vJ3MgUGl6emEgTMOqIFbEg24gVmnhu4d0!5e0!3m2!1svi!2s!4v1665471794076!5m2!1svi!2s"
    },
    {
      name: "Dominos - QUOC HUONG",
      time: "10:00 am - 09:30 pm",
      address: "14G Quốc Hương, phường Thảo Điền, Quận 2",
      value: "Q2",
      ip:"!1m18!1m12!1m3!1d3919.1134601583394!2d106.73040101524117!3d10.802621361662485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270193345819%3A0x865eaec87e196cd7!2zRG9taW5vJ3MgUGl6emEgUXXhu5FjIEjGsMahbmc!5e0!3m2!1svi!2s!4v1665471825189!5m2!1svi!2s"
    },
    {
      name: "Dominos - HOA BINH",
      time: "10:00 am - 09:30 pm",
      address: "48 Hòa Bình, Phường 5, Quận 11",
      value: "Q11",
      ip:"!1m18!1m12!1m3!1d3919.57104233587!2d106.63864461524095!3d10.767505262301578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e99d6e40d81%3A0xa8b1a4687760d9bf!2s!5e0!3m2!1svi!2s!4v1665471892814!5m2!1svi!2s"
    },
    {
      name: "Dominos - MINH PHUNG",
      time: "10:00 am - 09:30 pm",
      address: "74 Minh Phụng, Phường 5, Quận 6",
      value: "Q6",
      ip:"!1m18!1m12!1m3!1d3919.8104504373237!2d106.64053431524098!3d10.749087262635953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e88218d54a3%3A0xcb564259cea891c2!2s!5e0!3m2!1svi!2s!4v1665471965927!5m2!1svi!2s"
    },
    {
      name: "Dominos - TEN LUA",
      time: "10:00 am - 09:30 pm",
      address: "348-350 Tên Lửa, Phường Bình Trị Đông B, Quận Bình Tân",
      ip:"!1m18!1m12!1m3!1d3919.7714199120737!2d106.60842091524096!3d10.752092062581458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c349752068d%3A0xe3670277b7fcba7d!2zRG9taW5vJ3MgUGl6emEgVMOqbiBM4butYQ!5e0!3m2!1svi!2s!4v1665470691959!5m2!1svi!2s",
      value: "BTN",
    },
    {
      name: "Dominos - NGUYEN SON",
      time: "10:00 am - 09:30 pm",
      address: "289 Nguyễn Sơn, phường Phú Thạnh, Quận Tân Phú",
      value: "TP",
      ip:"!1m18!1m12!1m3!1d3919.360625417281!2d106.62124921524097!3d10.783667262007684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d0eceb3fc71%3A0x147539d6ebe8a434!2s!5e0!3m2!1svi!2s!4v1665472019285!5m2!1svi!2s"
    },
    {
      name: "Dominos - NGUYEN TRI PHUONG ",
      time: "10:00 am - 09:30 pm",
      address: "313 Nguyễn Tri Phương, Phường 5, Quận 10",
      value: "Q10",
      ip:"!1m18!1m12!1m3!1d3919.6465792920644!2d106.6660082152409!3d10.761697462407042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee444e238f3%3A0xf6d107c2f69b0b2d!2ss%20Pizza!5e0!3m2!1svi!2s!4v1665472056087!5m2!1svi!2s"
    },
    {
      name: "Dominos - LIEN TINH 5 ",
      time: "10:00 am - 09:30 pm",
      address: "240 Quốc Lộ 50, Phường 6, Quận 8",
      value: "Q8",
      ip:"!1m18!1m12!1m3!1d3920.4095509819836!2d106.65277161524074!3d10.70286036347285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317531dfa350eb79%3A0xee17b731b96be069!2ss%20Pizza%20Li%C3%AAn%20T%E1%BB%89nh%205.%20Q.8!5e0!3m2!1svi!2s!4v1665472619578!5m2!1svi!2s"
    },
    {
      name: "Dominos - LE VAN QUOI ",
      time: "10:00 am - 09:30 pm",
      address: "480 Lê Văn Quới, P.Bình Hưng Hòa A, Quận Bình Tân",
      value: "BTN",
      ip:"!1m18!1m12!1m3!1d3919.4536160207654!2d106.60419291524101!3d10.776527662137507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c6b11b94df5%3A0xed29fa82287deaa6!2zRG9taW5vJ3MgUGl6emEgTMOqIFbEg24gUXXhu5tp!5e0!3m2!1svi!2s!4v1665472684393!5m2!1svi!2s"
    },
    {
      name: "Dominos - NGUYEN THI TU ",
      time: "10:00 am - 09:30 pm",
      address: "10D Đường Nguyễn Thị Tú, Ấp 4, Quận Bình Chánh, Thành phố Hồ Chí Minh",
      ip:"!1m18!1m12!1m3!1d3918.9611294219385!2d106.57789632782992!3d10.814286636824708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b7904cbfa97%3A0x691eda4c8374c553!2zRG9taW5vJ3MgUGl6emEgTmd1eeG7hW4gVGjhu4sgVMO6!5e0!3m2!1svi!2s!4v1665469983261!5m2!1svi!2s",
      value: "BC",
    },
    {
      name: "Dominos - NGUYEN ANH THU ",
      time: "10:00 am - 09:30 pm",
      address: "31/1B Nguyễn Ảnh Thủ, Phường Trung Mỹ Tây, Quận 12",
      value: "Q12",
      ip:"!1m18!1m12!1m3!1d3918.288125099745!2d106.61184111524128!3d10.865676260510051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a11268d08cb%3A0x163330c116c003f8!2zRG9taW5vJ3MgUGl6emEgTmd1eeG7hW4g4bqibmggVGjhu6c!5e0!3m2!1svi!2s!4v1665472721464!5m2!1svi!2s"
    },
    {
      name: "Dominos - NGUYEN DUY TRINH",
      time: "10:00 am - 09:30 pm",
      address: "101-103 Nguyễn Duy Trinh, Phường Bình Trưng Tây, Quận 2",
      value: "Q2",
      ip:"!1m18!1m12!1m3!1d3919.298561809224!2d106.7560115152411!3d10.788429761921021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752677835acf91%3A0x8f620bb16ab0adda!2ss%20Pizza%20Nguy%E1%BB%85n%20Duy%20Trinh!5e0!3m2!1svi!2s!4v1665472774739!5m2!1svi!2s"
    },
    {
      name: "Dominos - LE THI HA ",
      time: "10:00 am - 09:30 pm",
      address: "38/5 Lê Thị Hà, TT. Hóc Môn, Huyện Hóc Môn",
      value: "HM",
      ip:"!1m18!1m12!1m3!1d3918.0154913411848!2d106.59620901524141!3d10.886425960129408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f822b61c8fd%3A0x3701443eedff1104!2zRG9taW5vJ3MgUGl6emEgTMOqIFRo4buLIEjDoA!5e0!3m2!1svi!2s!4v1665472842270!5m2!1svi!2s"
    },
    {
      name: "Dominos - PHU MY HUNG ",
      time: "10:00 am - 09:30 pm",
      address: "117 Nguyễn Đức Cảnh, Phường Tân Phong, Quận 7",
      value: "Q7",
      ip:"!1m18!1m12!1m3!1d7840.239648785693!2d106.7001776697754!3d10.725240400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f92e297036b%3A0x9b0314332d12a58a!2sDomino&#39;s%20Pizza!5e0!3m2!1svi!2s!4v1665472886864!5m2!1svi!2s"
    },
    {
      name: "Dominos - KHANH HOI  ",
      time: "10:00 am - 09:30 pm",
      address: "131-133 Khánh Hội, Phường 3, Quận 4",
      value: "Q4",
      ip:"!1m18!1m12!1m3!1d3919.7217939668285!2d106.698985315241!3d10.755911362512132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f72a24132b3%3A0x1b88fa36ec833892!2zRG9taW5vJ3MgUGl6emEgS2jDoW5oIEjhu5lp!5e0!3m2!1svi!2s!4v1665472912696!5m2!1svi!2s"
    },
    {
      name: "Dominos - LE TRONG TAN ",
      time: "10:00 am - 09:30 pm",
      address: "440 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú",
      value: "TP",
      ip:"!1m18!1m12!1m3!1d3919.0292948466763!2d106.61454871524126!3d10.809068161544968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bef5ce26745%3A0xa90485351328646d!2zRG9taW5vJ3MgUGl6emEgTMOqIFRy4buNbmcgVOG6pW4!5e0!3m2!1svi!2s!4v1665472936775!5m2!1svi!2s"
    },
    {
      name: "Dominos - PHAN HUY ICH ",
      time: "10:00 am - 09:30 pm",
      address: "7 Phan Huy Ích, P.15, Quận Tân Bình",
      value: "TB",
      ip:"!1m18!1m12!1m3!1d3918.8376047681963!2d106.6276232152413!3d10.823736861277279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175296290c9df35%3A0xecab01a7e1511b5d!2zRG9taW5vJ3MgUGl6emEgxJDGsOG7nW5nIFBoYW4gSHV5IMONY2g!5e0!3m2!1svi!2s!4v1665473117317!5m2!1svi!2s"
    },
    {
      name: "Dominos - HUYNH TAN PHAT 2 ",
      time: "10:00 am - 09:30 pm",
      address: "1108 – 1108A Huỳnh Tấn Phát, Phường Tân Phú, Quận 7",
      value: "Q7",
      ip:"!1m18!1m12!1m3!1d3920.1663313587987!2d106.7338246152408!3d10.721651063133063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525357669f24d%3A0x3aef791ff351bc1!2zRG9taW5vJ3MgUGl6emEgMTEwOCBIdeG7s25oIFThuqVuIFBow6F0!5e0!3m2!1svi!2s!4v1665473164118!5m2!1svi!2s"
    },
    {
      name: "Dominos - LE VAN KHUONG  ",
      time: "10:00 am - 09:30 pm",
      address: "291 Lê Văn Khương - Phường Hiệp Thành - Quận 12",
      value: "Q12",
      ip:"!1m18!1m12!1m3!1d3918.231622934974!2d106.64694141524126!3d10.86997976043114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b421cb3027%3A0x5a2a30403562cb79!2zRG9taW5vJ3MgUGl6emEgTMOqIFbEg24gS2jGsMahbmc!5e0!3m2!1svi!2s!4v1665473298732!5m2!1svi!2s"
    },
    {
      name: "Dominos - TRAN QUANG KHAI ",
      time: "10:00 am - 09:30 pm",
      address: "71bis Trần Quang Khải, Phường Tân Định, Quận ",
      value: "Q1",
      ip:"!1m18!1m12!1m3!1d3919.2498654448195!2d106.69149241524113!3d10.792165061853014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299b61080ee7%3A0x99fc3969e063c798!2ss%20Pizza%20Tr%E1%BA%A7n%20Quang%20Kh%E1%BA%A3i!5e0!3m2!1svi!2s!4v1665473343462!5m2!1svi!2s"
    },
    {
      name: "Dominos - PHAM HONG THAI  ",
      time: "10:00 am - 09:30 pm",
      address: "24 Phạm Hồng Thái, Phường Bến Nghé, Quận 1",
      value: "Q1",
      ip:"!1m18!1m12!1m3!1d3919.5209686922744!2d106.693858115241!3d10.771353562231617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fe9a6de6867%3A0xc9e48ba9246989ea!2ss!5e0!3m2!1svi!2s!4v1665473381308!5m2!1svi!2s"
    },
    {
      name: "Dominos - THONG NHAT ",
      time: "10:00 am - 09:30 pm",
      address: "152 Thống Nhất, Phường 10, Gò Vấp, Thành phố Hồ Chí Minh",
      value: "GV",
      ip:"!1m18!1m12!1m3!1d3918.690379453844!2d106.66248991524124!3d10.834989661071685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529dfc8a0fce7%3A0x78bd8d9d64897277!2zRG9taW5vJ3MgUGl6emEgVGjhu5FuZyBOaOG6pXQ!5e0!3m2!1svi!2s!4v1665473418461!5m2!1svi!2s"
    },
    {
      name: "Dominos - DO XUAN HOP ",
      time: "10:00 am - 09:30 pm",
      address:
        "387 Đỗ Xuân Hợp, Phường Phước Long B, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
      value: "Q9",
      ip:"!1m18!1m12!1m3!1d3918.888166140626!2d106.77073951524113!3d10.819869661347871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527646b489097%3A0x21a2c166b32baa75!2zRG9taW5vJ3MgUGl6emEgxJDhu5cgWHXDom4gSOG7o3A!5e0!3m2!1svi!2s!4v1665473447020!5m2!1svi!2s"
    },
  ],

  HN: [
    {
      name: "Dominos - 4 SEASON HA NOI  ",
      time: "10:00 am - 09:30 pm",
      address: "5-7 Hang Gai, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
      value: "HK",
      ip:"!1m18!1m12!1m3!1d59591.613095489774!2d105.79587998250216!3d21.013639091361526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abfd19f8cab9%3A0xb44d9a02018cafc3!2ss%20Pizza%20H%C3%A0ng%20Gai!5e0!3m2!1svi!2s!4v1665473589267!5m2!1svi!2s"
    },
    {
      name: "Dominos - TRUNG KINH HA NOI ",
      time: "10:00 am - 09:30 pm",
      address: "72 Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
      value: "CG",
      ip:"!1m18!1m12!1m3!1d59591.551934291696!2d105.79587995983435!3d21.01379217388642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7e14848ddb%3A0x972565e64505524a!2ss%20Pizza%20Trung%20K%C3%ADnh!5e0!3m2!1svi!2s!4v1665473635069!5m2!1svi!2s"
    },
    {
      name: "Dominos - GIANG VO ",
      time: "10:00 am - 09:30 pm",
      address: "Tang 1, C4 Giang Vo, P.Giang Vo, Q.Ba Dinh",
      value: "BD",
      ip:"!1m18!1m12!1m3!1d59591.551934291696!2d105.79587995983435!3d21.01379217388642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8c3563d419%3A0xd2bc3f16640cf40a!2zRG9taW5vJ3MgUGl6emEgR2nhuqNuZyBWw7U!5e0!3m2!1svi!2s!4v1665473662412!5m2!1svi!2s"
    },
    {
      name: "Dominos - NGUYEN KHANH TOAN",
      time: "10:00 am - 09:30 pm",
      address: "108 Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, Hà NộI",
      value: "CG",
      ip:"!1m18!1m12!1m3!1d59591.551934291696!2d105.79587995983435!3d21.01379217388642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f19f70b27%3A0x10a566a54a98d9be!2ss%20Pizza!5e0!3m2!1svi!2s!4v1665473696320!5m2!1svi!2s"
    },
    {
      name: "Dominos - AEON MALL LONG BIEN ",
      time: "10:00 am - 09:30 pm",
      address: "27 Cổ Linh, Quận Long Bien, Hà Nội",
      value: "LB",
      ip:"!1m18!1m12!1m3!1d59591.551934291696!2d105.79587995983435!3d21.01379217388642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a981c1b23bb1%3A0x7b7fea29424dc3a1!2zMjcgQ-G7lSBMaW5oLCBMb25nIEJpw6puIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1665473730723!5m2!1svi!2s"
    },
    {
      name: "Dominos - XUAN LA HA NOI ",
      time: "10:00 am - 09:30 pm",
      address: "D22 Dreamland 107 Xuân La, P.Xuan Tao, Bac Tu Liem, HN",
      value: "BTL",
      ip:"!1m18!1m12!1m3!1d59591.551934291696!2d105.79587995983435!3d21.01379217388642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc3551f408b%3A0x712dc6b0696a0696!2ss%20Pizza%20Xu%C3%A2n%20La!5e0!3m2!1svi!2s!4v1665473789388!5m2!1svi!2s"
    },
    {
      name: "Dominos - VAN PHU HA NOI ",
      time: "10:00 am - 09:30 pm",
      address: "SH02, Tòa K1, The K Park, KDT Văn Phú, Hà Đông, Hà Nội",
      value: "HD",
      ip:"!1m18!1m12!1m3!1d59613.227733157415!2d105.6964631582031!3d20.9594722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134531459584a67%3A0xa8638c891970fcb9!2ss%20Pizza%20V%C4%83n%20Ph%C3%BA!5e0!3m2!1svi!2s!4v1665473823779!5m2!1svi!2s"
    },
    {
      name: "Dominos - HAM NGHI HA NOI ",
      time: "10:00 am - 09:30 pm",
      address: "B17-06 Khu Shophouse Vincom Gardenia, Hàm Nghi, Từ Liêm, HN",
      value: "TL",
      ip:"!1m18!1m12!1m3!1d59582.891477016616!2d105.69219295820312!3d21.03545799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455032bba557f%3A0x5b4cd0629b4edae2!2sDomino&#39;s%20Pizza%20H%C3%A0m%20Nghi!5e0!3m2!1svi!2s!4v1665473860861!5m2!1svi!2s"
    },
    {
      name: "Dominos - LINH DAM HA NOI ",
      time: "10:00 am - 09:30 pm",
      address:
        "Rice City Linh Đàm - Tòa Trung, Tầng 1, Khu đô thị Tây Nam Linh Đàm, Quận Hoàng Mai, Hà Nội",
      value: "HM",
    },
    {
      name: "Dominos -  COOP MART HA DONG ",
      time: "10:00 am - 09:30 pm",
      address:
        "Lô 7, Saigon Coop Hà Đông, Tòa nhà Fodacon, Số 16 Trần Phú, Phường Văn Quán, Quận Hà Đông, Hà Nội",
      value: "HD",
    },
    {
      name: "Dominos - LAC TRUNG ",
      time: "10:00 am - 09:30 pm",
      address: "37 Lạc Trung, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội",
      value: "HBT",
    },
  ],

  BD: [
    {
      name: "Dominos - THU DAU MOT ",
      time: "10:00 am - 09:30 pm",
      address:
        "588 Cach Mang Thang Tam Street, Phu Cuong Ward, Thu Dau Mot City, Binh Duong 820000, Vietnam",
      value: "TDM",
    },
  ],

  DN: [
    {
      name: "Dominos - PHAN TRUNG ",
      time: "10:00 am - 09:30 pm",
      address: "156 Phan Trung, Phường Tân Mai, Tp Biên Hòa, Đồng Nai",
      value: "BH",
    },
  ],

  HP: [
    {
      name: "Dominos - VINCOM IMPERIA - HAI PHONG ",
      time: "10:00 am - 09:30 pm",
      address:
        "BH02-07 Khu Shophouse Vincom Imperia,P.Thuong Ly, Hong Bang, Hai Phong",
      value: "HB",
    },
    {
      name: "Dominos - LE HONG PHONG HP ",
      time: "10:00 am - 09:30 pm",
      address:
        "Lô 2A đường Lê Hồng Phong, ngã 4 Khánh Hội, Phường Đông Khê, Quận Ngô Quyền",
      value: "NQ",
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
