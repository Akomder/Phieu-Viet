import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 1. Existing English -> Vietnamese translations
export const legacyTranslations: Record<string, string> = {
  "Page not found": "Không tìm thấy trang",
  "This page didn't load": "Trang này chưa thể tải",
  "Something went wrong on our end. You can try refreshing or head back home.":
    "Đã xảy ra lỗi ở phía chúng tôi. Bạn có thể thử tải lại trang hoặc quay về trang chủ.",
  "Try again": "Thử lại",
  "Go home": "Về trang chủ",
  Search: "Tìm kiếm",
  Profile: "Hồ sơ",
  "Start Your Journey": "Bắt đầu hành trình",
  Discover: "Khám phá",
  Journeys: "Hành trình",
  Stories: "Câu chuyện",
  About: "Về Phiêu Việt",
  Rewards: "Phần thưởng",
  "Your Rewards": "Phần thưởng của bạn",
  "For Partners": "Đối tác",
  "Partner Portal": "Cổng đối tác",
  "Become a Partner": "Trở thành đối tác",
  Support: "Hỗ trợ",
  Contact: "Liên hệ",
  "Help Center": "Trung tâm trợ giúp",
  "A journey through Vietnamese heritage": "Hành trình qua di sản Việt Nam",
  "Fragments of childhood": "Mảnh ghép tuổi thơ",
  "Explore the Stories": "Khám phá câu chuyện",
  "The story behind the journey": "Câu chuyện phía sau hành trình",
  "Some memories are meant to be lived again.": "Có những ký ức cần được sống lại.",
  "Our story": "Câu chuyện của chúng tôi",
  "One journey · Three memories": "Một hành trình · Ba ký ức",
  "Light. Earth. Flour.": "Ánh sáng. Đất. Bột gạo.",
  "Follow the threads of childhood through three living traditions.":
    "Theo những mạch ký ức tuổi thơ qua ba truyền thống sống động.",
  "See the journey": "Xem hành trình",
  "Curated for the curious": "Trải nghiệm được tuyển chọn",
  "Featured experiences": "Trải nghiệm nổi bật",
  "Discover all": "Khám phá tất cả",
  "Your story starts here": "Câu chuyện của bạn bắt đầu từ đây",
  "The journey is yours to make.": "Hành trình này là của bạn.",
  "A collection of moments": "Bộ sưu tập khoảnh khắc",
  "Open your Việt Ký": "Mở Việt Ký của bạn",
  "Made around you": "Được tạo riêng cho bạn",
  "Not sure where to begin?": "Chưa biết bắt đầu từ đâu?",
  "Design your journey": "Thiết kế hành trình",
  "The hands behind the heritage": "Những đôi tay gìn giữ di sản",
  "Meet the makers who keep stories alive.": "Gặp những người gìn giữ câu chuyện sống mãi.",
  "Meet Phiêu Việt": "Gặp gỡ Phiêu Việt",
  "Words from the journey": "Lời kể từ hành trình",
  "Your next memory is waiting.": "Ký ức tiếp theo đang chờ bạn.",
  "Begin Your Journey": "Bắt đầu hành trình",
  Station: "Trạm",
  From: "Từ",
  ART: "Nghệ thuật",
  HISTORY: "Lịch sử",
  hours: "giờ",
  "Phu Binh Lantern Village": "Làng lồng đèn Phú Bình",
  "Tan Khanh Piggy Bank Kiln Village": "Xóm lò nung heo đất Tân Khánh",
  "CLAY To He Making & Street Vendor Point": "Điểm làm & gánh Tò he CLAY",
  "Alleys around Phu Binh Parish, Lac Long Quan Street, Ward 5, District 11, Ho Chi Minh City":
    "Các con hẻm nhỏ xung quanh Giáo xứ Phú Bình, đoạn đường Lạc Long Quân, Phường 5, Quận 11, TP. HCM",
  "Nguyen Van Nhan's 30-year-old workshop, Khanh Loi Quarter, Tan Khanh Ward":
    "Xưởng làm heo đất hơn 30 năm tuổi của ông Nguyễn Văn Nhàn, tại khu phố Khánh Lợi, phường Tân Khánh",
  "2867/68/5B QL1A, Tan Thoi Nhat Ward, District 12, Ho Chi Minh City":
    "2867/68/5B QL1A, Phường Tân Thới Nhất, Quận 12, TP. HCM",
  "The lantern makers of Phu Binh": "Nghệ nhân làng lồng đèn Phú Bình",
  "Nguyen Van Nhan and the Tan Khanh clay makers":
    "Ông Nguyễn Văn Nhàn và các nghệ nhân đất sét Tân Khánh",
  "The CLAY to he makers": "Nghệ nhân Tò he CLAY",
  "Unlock a memory hidden inside a red glass-paper lantern.":
    "Mở khóa ký ức ẩn bên trong một chiếc lồng đèn giấy kính đỏ.",
  "Meet the makers behind a clay piggy bank shaped by three decades of memory.":
    "Gặp những người làm nên chiếc heo đất từ ký ức hơn ba thập kỷ.",
  "Shape a tiny folk character and follow it into the street basket.":
    "Nặn một nhân vật dân gian nhỏ và theo dấu nhân vật vào gánh hàng rong.",
  "Unlock the Lantern Museum": "Mở khóa bảo tàng trong lòng đèn",
  "Find the Keepsake Piggy Bank": "Tìm chiếc heo đất ký ức",
  "Find the Hidden To He Character": "Tìm nhân vật Tò he ẩn giấu",
  "In the small alleys around Phu Binh Parish, rows of red glass-paper lanterns hang beneath the drying racks. Each one carries the glow of a childhood Mid-Autumn Festival and a one-of-a-kind memory prepared by a local family.":
    "Trong những con hẻm nhỏ quanh Giáo xứ Phú Bình, những dãy lồng đèn giấy kính đỏ treo rợp dưới giàn phơi. Mỗi chiếc mang theo ánh sáng của một mùa Trung thu tuổi thơ và một món quà ký ức độc bản do người dân địa phương chuẩn bị.",
  "The lantern museum is waiting above the alley. Reach for the bamboo hook, choose one lantern at random, and discover the keepsake hidden inside.":
    "Bảo tàng trong lòng đèn đang chờ trên cao. Cầm sào tre móc, chọn ngẫu nhiên một chiếc lồng đèn và khám phá món quà ký ức ẩn bên trong.",
  "At the Tan Khanh piggy bank kiln village, clay becomes a familiar vessel for childhood savings. In Mr. Nguyen Van Nhan's workshop, more than 30 years of molds, firing, and hand-painted details fill the space with the warm rhythm of a living craft.":
    "Tại xóm lò nung heo đất Tân Khánh, đất sét trở thành chiếc hộp thân thuộc lưu giữ những đồng tiền tuổi thơ. Trong xưởng của ông Nguyễn Văn Nhàn, hơn 30 năm khuôn đúc, nung lò và vẽ tay tạo nên nhịp sống ấm áp của một nghề truyền thống.",
  "The kiln room holds the story of a craft family and the small piggy bank waiting to travel home with you. Look closely, listen to the maker, and find the marked piece.":
    "Gian lò giữ câu chuyện của một gia đình làm nghề và chiếc heo đất nhỏ đang chờ theo bạn về nhà. Hãy quan sát thật kỹ, lắng nghe nghệ nhân và tìm món đồ có dấu hiệu đặc biệt.",
  "At CLAY, rice flour and natural colors become tiny figures with expressive faces and bright costumes. Visit the making point, watch the artisan's hands, then follow the figures into the vendor basket where Vietnamese childhood folklore comes alive.":
    "Tại CLAY, bột gạo và màu tự nhiên trở thành những hình hài nhỏ với gương mặt sinh động và trang phục rực rỡ. Ghé điểm làm, xem đôi tay nghệ nhân rồi theo các nhân vật đến gánh hàng, nơi ký ức dân gian tuổi thơ Việt Nam sống dậy.",
  "One character is waiting among the handmade figures. Find the requested shape, learn the small gesture that gives it life, and bring a piece of folk play into your own story.":
    "Một nhân vật đang chờ giữa những hình hài thủ công. Tìm đúng hình dáng được yêu cầu, học một động tác nhỏ để thổi hồn cho nhân vật và mang một mảnh trò chơi dân gian vào câu chuyện của bạn.",
  "Enter the Lantern Alley": "Bước vào hẻm đèn",
  "Choose Your Lantern": "Chọn chiếc lồng đèn của bạn",
  "Open the Memory": "Mở món quà ký ức",
  "Follow the Kiln Trail": "Theo dấu lò nung",
  "Spot the Mark": "Tìm dấu hiệu đặc biệt",
  "Carry Home a Memory": "Mang ký ức về nhà",
  "Arrive at CLAY": "Đến CLAY",
  "Search the Vendor Basket": "Tìm trong gánh hàng",
  "Shape One Small Detail": "Nặn một chi tiết nhỏ",
  "Follow the lantern racks through the alleys around Phu Binh Parish on Lac Long Quan Street.":
    "Theo những giàn đèn qua các con hẻm quanh Giáo xứ Phú Bình trên đoạn đường Lạc Long Quân.",
  "Use the bamboo pole and hook to select one sealed red glass-paper lantern from the hanging rack.":
    "Dùng cây sào tre và móc để chọn một chiếc lồng đèn giấy kính đỏ được niêm kín trên giàn cao.",
  "Take your lantern to the artisan and discover one unique keepsake: a dried to he, a mini piggy bank, a handwritten letter, or vintage glass paper from the 1990s.":
    "Mang lồng đèn đến nghệ nhân và khám phá một món quà độc bản: một con Tò he sấy khô, một chiếc heo đất mini, một lá thư tay hoặc mảnh giấy kính màu xưa từ thập niên 90.",
  "Find Mr. Nguyen Van Nhan's workshop in Khanh Loi Quarter and listen for the rhythm of the kiln and hand tools.":
    "Tìm xưởng của ông Nguyễn Văn Nhàn tại khu phố Khánh Lợi và lắng nghe nhịp lò nung cùng tiếng dụng cụ thủ công.",
  "Find the mini piggy bank stamped with the village mark among the rows of clay forms.":
    "Tìm chiếc heo đất mini có dập logo xóm nghề giữa những hàng hình hài đất sét.",
  "Choose a color, add a small detail with the artisan's guidance, and take your mini piggy bank home.":
    "Chọn một màu, thêm một chi tiết nhỏ cùng sự hướng dẫn của nghệ nhân và mang chiếc heo đất mini về nhà.",
  "Visit the CLAY to he making point at 2867/68/5B QL1A, Tan Thoi Nhat Ward, District 12.":
    "Ghé điểm làm Tò he CLAY tại 2867/68/5B QL1A, Phường Tân Thới Nhất, Quận 12.",
  "Find the exact to he character requested by the app among the handmade figures and street-vendor display.":
    "Tìm đúng nhân vật Tò he được ứng dụng yêu cầu giữa những hình hài thủ công và gánh hàng.",
  "With the artisan's guidance, knead and shape one small detail or receive the found figure as a keepsake.":
    "Dưới sự hướng dẫn của nghệ nhân, nhào nặn một chi tiết nhỏ hoặc nhận nhân vật đã tìm thấy làm kỷ niệm.",
  "The living archive": "Kho lưu trữ sống",
  "Stories worth finding": "Những câu chuyện đáng tìm",
  "Three chapters. Three traditions. Each story begins here and continues where the craft lives.":
    "Ba chương. Ba truyền thống. Mỗi câu chuyện bắt đầu từ đây và tiếp nối nơi nghề thủ công hiện hữu.",
  "Places with a story": "Những nơi có câu chuyện",
  "Discover Vietnamese Heritage": "Khám phá di sản Việt Nam",
  "Search destinations, artisans, villages...": "Tìm kiếm điểm đến, nghệ nhân, làng nghề...",
  All: "Tất cả",
  "Any duration": "Mọi thời lượng",
  "Under 2 hours": "Dưới 2 giờ",
  "Price: low to high": "Giá: thấp đến cao",
  "Price: high to low": "Giá: cao đến thấp",
  "A journey made around you": "Hành trình được tạo riêng cho bạn",
  "Tell me how you want to experience Vietnam. Are you drawn to lanterns, clay crafts, or childhood folk art?":
    "Hãy cho tôi biết bạn muốn trải nghiệm Việt Nam như thế nào. Bạn yêu thích đèn lồng, đồ đất sét hay nghệ thuật dân gian tuổi thơ?",
  "Describe your trip": "Mô tả chuyến đi",
  "Your personal journey": "Hành trình cá nhân",
  "My bookings": "Đặt chỗ của tôi",
  "My Việt Ký": "Việt Ký của tôi",
  "Digital Stamps": "Con dấu số",
  Bookings: "Đặt chỗ",
  "Every journey leaves a mark": "Mỗi hành trình đều để lại dấu ấn",
  "Back to Việt Ký": "Quay lại Việt Ký",
  "A journey to keep": "Hành trình để lưu giữ",
  "Your memory pieces": "Những mảnh ký ức của bạn",
  "View rewards": "Xem phần thưởng",
  "In your own words": "Theo lời kể của bạn",
  "You haven’t shared a review yet. Complete a station to tell its story in your own words.":
    "Bạn chưa chia sẻ đánh giá. Hoàn thành một trạm để kể câu chuyện theo cách của riêng bạn.",
  "Discover a station": "Khám phá một trạm",
  "Unlock this story first": "Hãy mở khóa câu chuyện này trước",
  "Unlock this station first": "Hãy mở khóa trạm này trước",
  "Go to unlock": "Đến trang mở khóa",
  "Book This Experience": "Đặt trải nghiệm này",
  "Reserve your place": "Đặt chỗ của bạn",
  "Simulate QR Scan": "Mô phỏng quét QR",
  "Audio guide": "Hướng dẫn âm thanh",
  "At a glance": "Tổng quan",
  "Make this memory yours": "Biến ký ức này thành của bạn",
  "Ticket not found": "Không tìm thấy vé",
  "Discover experiences": "Khám phá trải nghiệm",
  "Booking ID": "Mã đặt chỗ",
  "Experience not found.": "Không tìm thấy trải nghiệm.",
  "Station not found.": "Không tìm thấy trạm.",
  "Story not found": "Không tìm thấy câu chuyện",
  "Back to discover": "Quay lại khám phá",
  "About Phiêu Việt": "Về Phiêu Việt",
  "A different way to find your way back.": "Một cách khác để tìm đường trở về.",
  "Find your first story": "Tìm câu chuyện đầu tiên",
  "Content overview · Prototype only": "Tổng quan nội dung · Chỉ dành cho bản mẫu",
  "Phiêu Việt content": "Nội dung Phiêu Việt",
  "View story": "Xem câu chuyện",
  "Back to story": "Quay lại câu chuyện",
  "A place in the story": "Một nơi trong câu chuyện",
  "Book your experience": "Đặt trải nghiệm của bạn",
  "Choose a date and reserve your cultural experience with Phiêu Việt.":
    "Chọn ngày và đặt trải nghiệm văn hóa cùng Phiêu Việt.",
  Date: "Ngày",
  Time: "Thời gian",
  Participants: "Số người tham gia",
  "Remove participant": "Xóa người tham gia",
  "Add participant": "Thêm người tham gia",
  "Please select a date to continue.": "Vui lòng chọn ngày để tiếp tục.",
  "This is a prototype reservation. No payment is collected and your chosen date is not confirmed with a venue.":
    "Đây là đặt chỗ bản mẫu. Không có khoản thanh toán nào được thu và ngày bạn chọn chưa được xác nhận với địa điểm.",
  "Booking summary": "Tóm tắt đặt chỗ",
  "Experience ×": "Trải nghiệm ×",
  Total: "Tổng cộng",
  "Confirm Booking": "Xác nhận đặt chỗ",
  "The story begins": "Câu chuyện bắt đầu",
  "A memory made by hand.": "Một ký ức được tạo nên bằng đôi tay.",
  "Story unlocked in your journey.": "Câu chuyện đã được mở khóa trong hành trình của bạn.",
  "The next chapter is waiting for you here.": "Chương tiếp theo đang chờ bạn tại đây.",
  "Visit the destination, scan the QR code, and unlock the rest of the story.":
    "Hãy đến điểm đến, quét mã QR và mở khóa phần còn lại của câu chuyện.",
  "View Location": "Xem vị trí",
  "Pause audio preview": "Tạm dừng bản nghe thử",
  "Play audio preview": "Phát bản nghe thử",
  "Audio preview position": "Vị trí bản nghe thử",
  "Audio recording coming soon; preview controls only.":
    "Bản ghi âm sẽ sớm ra mắt; các nút hiện chỉ để xem trước.",
  Experience: "Trải nghiệm",
  Location: "Địa điểm",
  "Welcome back": "Chào mừng trở lại",
  "Your memories are right where you left them, on this device.":
    "Những ký ức của bạn vẫn ở đây, trên thiết bị này.",
  Destinations: "Điểm đến",
  "Memory Pieces": "Mảnh ký ức",
  "No bookings yet.": "Chưa có đặt chỗ nào.",
  "Continue exploring": "Tiếp tục khám phá",
  "My Rewards": "Phần thưởng của tôi",
  "My Reviews": "Đánh giá của tôi",
  "A memory worth keeping.": "Một ký ức đáng lưu giữ.",
  "Your Reviews": "Đánh giá của bạn",
  "You have collected": "Bạn đã thu thập",
  stamp: "con dấu",
  stamps: "con dấu",
  "Cultural Journey Badge": "Huy hiệu hành trình văn hóa",
  "Discount Voucher": "Phiếu giảm giá",
  "Premium Cultural Souvenir": "Quà lưu niệm văn hóa cao cấp",
  "Milestone unlocked in this prototype.": "Cột mốc đã được mở khóa trong bản mẫu này.",
  "Collect more stamps to unlock this milestone.": "Thu thập thêm con dấu để mở khóa cột mốc này.",
  "A lovely idea.": "Một ý tưởng thật hay.",
  "Need inspiration?": "Cần cảm hứng?",
  "Trip Designer · Prototype": "Thiết kế chuyến đi · Bản mẫu",
  "I love traditional crafts...": "Tôi yêu các nghề thủ công truyền thống...",
  "Send message": "Gửi tin nhắn",
  "I have half a day.": "Tôi có nửa ngày.",
  "I’m traveling with my family.": "Tôi đi cùng gia đình.",
  "I love traditional crafts.": "Tôi yêu nghề thủ công truyền thống.",
  "I want to discover childhood culture.": "Tôi muốn khám phá văn hóa tuổi thơ.",
  "Your suggested itinerary": "Lịch trình gợi ý cho bạn",
  Stop: "Điểm dừng",
  Explore: "Khám phá",
  "Suggestions are generated from local sample journeys, not a live AI service.":
    "Gợi ý được tạo từ các hành trình mẫu cục bộ, không phải dịch vụ AI trực tiếp.",
  "After the experience": "Sau trải nghiệm",
  "Memory Sharing Station": "Trạm chia sẻ ký ức",
  Question: "Câu hỏi",
  "of 3": "trên 3",
  "What did you experience?": "Bạn đã trải nghiệm điều gì?",
  "I used the bamboo pole to retrieve a lantern.": "Tôi đã tự tay dùng sào tre rút lồng đèn",
  "I found the clay piggy bank.": "Tôi đã tìm heo đất",
  "I followed the clue to find a to he figure.": "Tôi đã tìm tò he theo manh mối",
  "I followed the clue.": "Tôi đã đi theo manh mối.",
  "I talked with the artisan.": "Tôi đã trò chuyện với nghệ nhân.",
  "I explored the station.": "Tôi đã khám phá trạm.",
  "How did you feel?": "Bạn cảm thấy thế nào?",
  Rate: "Đánh giá",
  "Tell us about your experience...": "Hãy kể cho chúng tôi về trải nghiệm của bạn...",
  "Your experience": "Trải nghiệm của bạn",
  "Would you come back to conquer the next station?":
    "Bạn có quay lại để chinh phục trạm tiếp theo không?",
  "Definitely — I'm ready for the next station.":
    "Chắc chắn rồi! Lên đường sang trạm tiếp theo ngay đây.",
  "I'm a little tired, but excited to see what the next station has in store.":
    "Hơi mệt chút nhưng rất háo hức muốn xem trạm kế tiếp có gì.",
  "I'll invite my closest friends and come back to conquer the next station.":
    "Từ từ để tôi rủ thêm cạ cứng cùng đi chinh phục trạm sau.",
  "Next question": "Câu hỏi tiếp theo",
  "Collect memory piece": "Thu thập mảnh ký ức",
  Back: "Quay lại",
  "Search for the Old Light": "Tìm kiếm ánh sáng xưa",
  "Search for a Piece of Childhood Color": "Tìm kiếm sắc màu tuổi thơ",
  "Search for the Colors of Rice Flour": "Tìm kiếm sắc màu bột gạo",
  "Locate the Alley": "Tìm con hẻm",
  "Follow the Sound": "Đi theo âm thanh",
  "Find the Traditional Corner": "Tìm góc truyền thống",
  "Decode the Hanging Rack": "Giải mã giá treo",
  "Find the Missing Piece": "Tìm mảnh ghép còn thiếu",
  "Find the Hidden Character": "Tìm nhân vật ẩn",
  "Retrieve the Lantern": "Lấy chiếc đèn lồng",
  "Receive & Decorate": "Nhận và trang trí",
  "Touch the Flour": "Chạm vào bột",
  "Decode the Missing Piece": "Giải mã mảnh ghép khuyết",
  "Receive & Add Color": "Nhận bàn giao và tô điểm",
  "Find the Street Basket": "Tìm gánh hàng rong",
  "Touch the Dough": "Chạm tay vào bột",
  "Phú Bình Lantern Village": "Làng đèn lồng Phú Bình",
  "Tân Khánh Piggy Bank Village": "Làng heo đất Tân Khánh",
  "CLAY Tò He": "Tò he đất nặn",
  "Tân Khánh Piggy Bank Village · Nguyễn Văn Nhàn Workshop":
    "Xóm Lò Nung Heo Đất Tân Khánh · Xưởng ông Nguyễn Văn Nhàn",
  "Tò He Clay · Making Point & Street Vendor Basket": "Điểm Làm & Gánh Tò He",
  "Memories of light beneath the full moon.": "Ký ức ánh sáng dưới trăng rằm.",
  "The sound of clay and childhood savings.": "Âm thanh của đất và những khoản tiết kiệm tuổi thơ.",
  "The first toys shaped from flour and natural colors.":
    "Những món đồ chơi đầu tiên được nặn từ bột và màu tự nhiên.",
  "Follow the clatter of clay and bring a childhood color back to life.":
    "Lần theo tiếng đất và đánh thức một mảng màu tuổi thơ.",
  "Follow the scent of rice flour to a pocket-sized folk character.":
    "Dò theo mùi bột gạo đến một nhân vật dân gian nhỏ xinh.",
  "2 hours": "2 giờ",
  "2.5 hours": "2,5 giờ",
  "1.5 hours": "1,5 giờ",
  "Hồ Chí Minh City": "Thành phố Hồ Chí Minh",
  "Nguyễn Văn Nhàn, a Tân Khánh clay artisan": "Nghệ nhân đất Tân Khánh Nguyễn Văn Nhàn",
  "The lantern makers of Phú Bình": "Những người làm đèn lồng Phú Bình",
  "The clay artisans of Tân Khánh": "Những nghệ nhân đất sét Tân Khánh",
  "The tò he makers": "Những người làm tò he",
  "The page you're looking for doesn't exist or has been moved.":
    "Trang bạn tìm không tồn tại hoặc đã được chuyển đi.",
  "Phiêu Việt home": "Trang chủ Phiêu Việt",
  "Main navigation": "Điều hướng chính",
  "Switch to English": "Chuyển sang tiếng Anh",
  "Close menu": "Đóng menu",
  "Open menu": "Mở menu",
  "Mobile navigation": "Điều hướng di động",
  "Rediscover memories in the places where they were made.":
    "Tìm lại ký ức tại chính nơi chúng được tạo nên.",
  "Crafted for the stories that stay with us.": "Dành cho những câu chuyện còn mãi.",
  "Lantern craft village": "Làng nghề đèn lồng",
  "Our reason for wandering": "Lý do chúng ta lên đường",
  "The stories we keep are the stories we live.":
    "Những câu chuyện ta gìn giữ là những câu chuyện ta sống cùng.",
  "Phiêu Việt was created to bridge the gap between rich local cultural resources and young customers' need for active, interactive experiences. Many valuable cultural experiences remain scattered, requiring users to search for and connect the information themselves; meanwhile, some artisan activities and local organizations still lack suitable channels to reach customers.":
    "Phiêu Việt được xây dựng nhằm giải quyết khoảng trống giữa nguồn tài nguyên văn hóa địa phương phong phú và nhu cầu trải nghiệm chủ động, tương tác của khách hàng trẻ. Nhiều trải nghiệm văn hóa có giá trị nhưng còn phân tán, khiến người dùng phải tự tìm kiếm và kết nối thông tin; trong khi đó, một số hoạt động của nghệ nhân và đơn vị địa phương chưa có thêm nhiều kênh tiếp cận khách hàng phù hợp.",
  "For this reason, Phiêu Việt is not intended to own destinations or organize every part of a trip. Instead, it connects and designs experiences by bringing local partners' cultural discovery points and activities together into themed journeys, combining interactive challenges with Việt Ký to record each user's exploration. This turns each individual experience into a connected cultural journey that can continue and unfold over time.":
    "Từ khoảng trống này, Phiêu Việt không định hướng trở thành đơn vị sở hữu điểm đến hay tổ chức toàn bộ hoạt động du lịch, mà đóng vai trò kết nối và thiết kế trải nghiệm. Dự án tập hợp các điểm khám phá và hoạt động văn hóa từ đối tác địa phương thành những hành trình có chủ đề, kết hợp thử thách tương tác và Việt Ký để ghi nhận quá trình khám phá của người dùng. Qua đó, mỗi trải nghiệm riêng lẻ có thể trở thành một phần của hành trình văn hóa có tính liên kết và tiếp nối.",
  "Follow a lantern into a village workshop. Shape a keepsake from clay. Discover a tiny figure made from rice flour. Along the way, stories become experiences, and experiences become memories you can carry.":
    "Theo ánh đèn vào xưởng làng nghề. Tạo một món quà từ đất sét. Khám phá hình hài nhỏ làm từ bột gạo. Trên hành trình ấy, câu chuyện trở thành trải nghiệm và trải nghiệm trở thành ký ức bạn có thể mang theo.",
  "Content overview": "Tổng quan nội dung",
  "Prototype overview of the Phiêu Việt stories, stations, and journey activity.":
    "Tổng quan bản mẫu về câu chuyện, trạm và hoạt động hành trình của Phiêu Việt.",
  "This page shows sample content and activity saved on this device. It is not a protected administration system.":
    "Trang này hiển thị nội dung mẫu và hoạt động được lưu trên thiết bị. Đây không phải hệ thống quản trị được bảo vệ.",
  Reviews: "Đánh giá",
  "Destinations & stories": "Điểm đến và câu chuyện",
  Category: "Danh mục",
  Story: "Câu chuyện",
  "Publishing, editing, uploads, and access control require a connected content service and are not enabled in this prototype.":
    "Xuất bản, chỉnh sửa, tải lên và kiểm soát quyền truy cập cần dịch vụ nội dung được kết nối và chưa được bật trong bản mẫu này.",
  "an experience": "một trải nghiệm",
  "Payment is not collected in this prototype.": "Bản mẫu này không thu tiền thanh toán.",
  "Continue to payment": "Tiếp tục thanh toán",
  "Your booking is confirmed.": "Đặt chỗ của bạn đã được xác nhận.",
  "Station challenge": "Thử thách tại trạm",
  "Follow the clues, meet the artisan, and create a new memory.":
    "Theo manh mối, gặp nghệ nhân và tạo nên một ký ức mới.",
  "A three-part real-world activity": "Hoạt động thực tế gồm ba phần",
  Step: "Bước",
  "Mark activity complete": "Đánh dấu hoàn thành hoạt động",
  "Continue to next clue": "Tiếp tục đến manh mối tiếp theo",
  "Activity complete · Memory Gift": "Hoạt động hoàn tất · Quà ký ức",
  "Share this memory": "Chia sẻ ký ức này",
  "Previous step": "Bước trước",
  "Challenge unavailable.": "Thử thách không khả dụng.",
  "Find a cultural itinerary inspired by your time and interests.":
    "Tìm lịch trình văn hóa dựa trên thời gian và sở thích của bạn.",
  "Design Your Journey": "Thiết kế hành trình của bạn",
  "Tell us how you want to experience Vietnam. We’ll sketch a cultural route around you.":
    "Hãy cho chúng tôi biết bạn muốn trải nghiệm Việt Nam như thế nào. Chúng tôi sẽ phác thảo một tuyến văn hóa dành riêng cho bạn.",
  "Explore craft villages and authentic cultural experiences across Vietnam.":
    "Khám phá các làng nghề và trải nghiệm văn hóa chân thực khắp Việt Nam.",
  "Craft Villages": "Làng nghề",
  "Historical Sites": "Di tích lịch sử",
  Museums: "Bảo tàng",
  "Cultural Experiences": "Trải nghiệm văn hóa",
  "Search destinations": "Tìm kiếm điểm đến",
  "experiences to explore": "trải nghiệm để khám phá",
  "2 hours or more": "Từ 2 giờ trở lên",
  Featured: "Nổi bật",
  "No experiences found": "Không tìm thấy trải nghiệm",
  "Try adjusting your search or filters.": "Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc.",
  "Cultural journeys": "Hành trình văn hóa",
  "Rediscover memories and reconnect with authentic Vietnamese heritage through stories, craft villages, and cultural experiences.":
    "Tìm lại ký ức và kết nối với di sản Việt Nam nguyên bản qua những câu chuyện, làng nghề và trải nghiệm văn hóa.",
  "Lanterns and an artisan at a Vietnamese craft village":
    "Đèn lồng và nghệ nhân tại một làng nghề Việt Nam",
  "01 / 03 · Light · Earth · Flour": "01 / 03 · Ánh sáng · Đất · Bột gạo",
  "Find the places and stories that call to you.": "Tìm những nơi chốn và câu chuyện gọi tên bạn.",
  "Read & book": "Đọc và đặt chỗ",
  "Get to know the craft, then reserve your place.": "Tìm hiểu nghề thủ công, rồi đặt chỗ của bạn.",
  "Visit & unlock": "Đến thăm và mở khóa",
  "Follow the clues at the destination and reveal more.":
    "Theo manh mối tại điểm đến và khám phá thêm.",
  "Keep the memory": "Lưu giữ ký ức",
  "Collect a piece of the journey in your Việt Ký.": "Lưu một phần hành trình vào Việt Ký của bạn.",
  "Every place leaves a little piece of itself with you.":
    "Mỗi nơi chốn đều để lại một phần nhỏ trong bạn.",
  "Collect memory pieces and digital stamps as you explore. Your Việt Ký is a living record of where you've been and what you've felt.":
    "Thu thập mảnh ký ức và con dấu số khi bạn khám phá. Việt Ký là ghi chép sống động về nơi bạn đã đến và điều bạn đã cảm nhận.",
  "Cultural passport · No. 001": "Hộ chiếu văn hóa · Số 001",
  "Your cultural journey": "Hành trình văn hóa của bạn",
  "The stories you take with you": "Những câu chuyện bạn mang theo",
  "Tell us what you love. We’ll sketch a cultural journey just for you.":
    "Hãy kể chúng tôi nghe điều bạn yêu thích. Chúng tôi sẽ phác thảo một hành trình văn hóa dành riêng cho bạn.",
  "Lantern artisan at work": "Nghệ nhân đèn lồng đang làm việc",
  "At every stop, a local artisan welcomes you into a craft passed through generations. More than an activity, it is a chance to listen, learn, and make something worth keeping.":
    "Ở mỗi điểm dừng, một nghệ nhân địa phương sẽ chào đón bạn đến với nghề thủ công truyền qua nhiều thế hệ. Hơn cả một hoạt động, đây là cơ hội để lắng nghe, học hỏi và tạo ra điều đáng lưu giữ.",
  "“The loveliest part was sitting with the maker and hearing how a simple lantern carried so many memories.”":
    "“Điều đáng yêu nhất là được ngồi bên người thợ và nghe cách một chiếc đèn lồng giản dị mang theo biết bao ký ức.”",
  "A journey worth remembering": "Một hành trình đáng nhớ",
  "Your story is still unfolding": "Câu chuyện của bạn vẫn đang tiếp diễn",
  "Step beyond the screen. Meet the people, places, crafts and stories that make Vietnamese heritage unforgettable.":
    "Bước ra khỏi màn hình. Gặp gỡ những con người, nơi chốn, nghề thủ công và câu chuyện làm nên di sản Việt Nam khó quên.",
  "Light, Earth, Flour journey": "Hành trình Ánh sáng, Đất, Bột gạo",
  "Follow a three-stop cultural journey through lanterns, clay keepsakes, and tò he.":
    "Theo hành trình văn hóa ba điểm dừng qua đèn lồng, món quà đất sét và tò he.",
  "The signature journey": "Hành trình đặc trưng",
  "Three traditional crafts. Three pieces of childhood. One journey to remember.":
    "Ba nghề thủ công truyền thống. Ba mảnh ghép tuổi thơ. Một hành trình đáng nhớ.",
  "Explore story": "Khám phá câu chuyện",
  "Begin with the story that calls to you.": "Bắt đầu từ câu chuyện gọi tên bạn.",
  "Explore experiences": "Khám phá trải nghiệm",
  "Partner portal": "Cổng đối tác",
  "Prototype partner overview for visits, bookings, and experience quality.":
    "Tổng quan bản mẫu dành cho đối tác về lượt thăm, đặt chỗ và chất lượng trải nghiệm.",
  "Phiêu Việt · Partner workspace": "Phiêu Việt · Không gian đối tác",
  "Partner Dashboard": "Bảng điều khiển đối tác",
  Bookings: "Đặt chỗ",
  "Prototype figures based on bookings saved on this device; not a live partner account.":
    "Số liệu bản mẫu dựa trên đặt chỗ được lưu trên thiết bị này; không phải tài khoản đối tác trực tiếp.",
  "Completed experiences": "Trải nghiệm đã hoàn thành",
  "Gross booking value": "Tổng giá trị đặt chỗ",
  Reviews: "Đánh giá",
  "Verify booking": "Xác minh đặt chỗ",
  "Enter a prototype booking ID from a digital ticket.": "Nhập mã đặt chỗ bản mẫu từ vé điện tử.",
  "Look up": "Tra cứu",
  "Booking ID": "Mã đặt chỗ",
  "Booking found": "Đã tìm thấy đặt chỗ",
  Experience: "Trải nghiệm",
  Date: "Ngày",
  Guests: "Khách",
  "This lookup does not confirm actual admission.":
    "Tra cứu này không xác nhận quyền vào cửa thực tế.",
  "No matching prototype booking on this device.":
    "Không tìm thấy đặt chỗ bản mẫu phù hợp trên thiết bị này.",
  "Revenue breakdown": "Phân tích doanh thu",
  "Platform commission": "Hoa hồng nền tảng",
  "Partner revenue": "Doanh thu đối tác",
  "Experience quality": "Chất lượng trải nghiệm",
  "Artisan interaction": "Tương tác với nghệ nhân",
  "Experience completion": "Mức độ hoàn thành trải nghiệm",
  "Customer satisfaction": "Mức độ hài lòng của khách hàng",
  "Awaiting real partner feedback data": "Đang chờ dữ liệu phản hồi thực tế từ đối tác",
  Commission: "Hoa hồng",
  Verify: "Xác minh",
  "Booking verified": "Đặt chỗ đã được xác minh",
  "No booking found for this ID.": "Không tìm thấy đặt chỗ với mã này.",
  "Your profile": "Hồ sơ của bạn",
  "See your bookings, stamps, and memories in one place.":
    "Xem đặt chỗ, con dấu và ký ức của bạn ở một nơi.",
  "Việt Ký digital passport": "Hộ chiếu số Việt Ký",
  "Collect memory pieces and stamps from every stop of your cultural journey.":
    "Thu thập mảnh ký ức và con dấu tại mỗi điểm dừng trong hành trình văn hóa.",
  "Your cultural journey, one memory at a time.": "Hành trình văn hóa của bạn, từng ký ức một.",
  "Destinations completed": "Điểm đến đã hoàn thành",
  "Collected along the way": "Thu thập trên hành trình",
  "A memory still waiting to be found.": "Một ký ức vẫn đang chờ được tìm thấy.",
  "Digital stamp collected": "Đã thu thập con dấu số",
  "Unlock story": "Mở khóa câu chuyện",
  "Memory sharing station": "Trạm chia sẻ ký ức",
  "Reflect on your cultural experience and collect a memory piece.":
    "Nhìn lại trải nghiệm văn hóa và thu thập một mảnh ký ức.",
  "Your rewards": "Phần thưởng của bạn",
  "See the cultural rewards and milestones in your Phiêu Việt journey.":
    "Xem phần thưởng văn hóa và các cột mốc trong hành trình Phiêu Việt của bạn.",
  "Read the memories and ratings you shared after each experience.":
    "Đọc những ký ức và đánh giá bạn đã chia sẻ sau mỗi trải nghiệm.",
  "Stories of childhood": "Những câu chuyện tuổi thơ",
  "Read the stories behind light, earth, and flour in the living craft villages of Vietnam.":
    "Đọc những câu chuyện phía sau ánh sáng, đất và bột gạo tại các làng nghề sống động của Việt Nam.",
  "Preview narration": "Nghe thử lời kể",
  "Meet ${artisan} and try the craft yourself.": "Gặp ${artisan} và tự mình thử nghề thủ công.",
  "Digital Memory Ticket": "Vé Ký ức số",
  "Your Phiêu Việt cultural experience ticket and journey details.":
    "Vé trải nghiệm văn hóa Phiêu Việt và thông tin hành trình của bạn.",
  "A new memory begins": "Một ký ức mới bắt đầu",
  "Your digital memory ticket": "Vé ký ức số của bạn",
  "Your prototype reservation has been saved on this device.":
    "Đặt chỗ bản mẫu của bạn đã được lưu trên thiết bị này.",
  "Digital Experience Ticket": "Vé trải nghiệm số",
  "This ticket and QR symbol are a prototype and are not valid for admission or venue verification.":
    "Vé và mã QR này chỉ là bản mẫu, không có giá trị để vào cửa hoặc xác minh tại địa điểm.",
  "Continue the journey": "Tiếp tục hành trình",
  "Begin station challenge": "Bắt đầu thử thách tại trạm",
  Guests: "Khách tham gia",
  "Show this ticket at the station.": "Xuất trình vé này tại trạm.",
  "Back to your profile": "Quay lại hồ sơ",
  "Unlock your story": "Mở khóa câu chuyện của bạn",
  "Explore the simulated QR and location verification journey.":
    "Khám phá hành trình mô phỏng quét QR và xác minh vị trí.",
  "You are exploring:": "Bạn đang khám phá:",
  "Find the next chapter": "Tìm chương tiếp theo",
  "This prototype simulates scanning a station QR code. It does not use your camera.":
    "Bản mẫu này mô phỏng việc quét mã QR tại trạm. Ứng dụng không sử dụng camera của bạn.",
  "QR Code Verified (simulation)": "Mã QR đã xác minh (mô phỏng)",
  "Location verification": "Xác minh vị trí",
  "Choose a simulated result to preview the on-site experience. No location access is requested.":
    "Chọn kết quả mô phỏng để xem trước trải nghiệm tại chỗ. Ứng dụng không yêu cầu quyền truy cập vị trí.",
  "Simulate at destination": "Mô phỏng tại điểm đến",
  "Simulate outside area": "Mô phỏng ngoài khu vực",
  "Location verified": "Vị trí đã được xác minh",
  "Your story is now unlocked.": "Câu chuyện của bạn đã được mở khóa.",
  "Continue to story": "Tiếp tục đến câu chuyện",
  "Already unlocked": "Đã mở khóa",
  LIGHT: "ÁNH SÁNG",
  EARTH: "ĐẤT",
  FLOUR: "BỘT GẠO",
  "Follow the clues to locate the artisan's home.": "Theo manh mối để tìm nhà của nghệ nhân.",
  "Find the lantern marked with a five-pointed star and the shortest red ribbon.":
    "Tìm chiếc đèn lồng có ngôi sao năm cánh và dải ruy băng đỏ ngắn nhất.",
  "Use the bamboo pole to carefully retrieve the lantern you discovered.":
    "Dùng sào tre để cẩn thận lấy chiếc đèn lồng bạn đã tìm thấy.",
  "Long before the streets glowed with electric light, a lantern was enough to turn an evening into a celebration. In Phú Bình, skilled hands still bend bamboo into delicate frames and stretch vibrant paper across them. The craft carries the anticipation of a childhood Mid-Autumn Festival: the rustle of paper, the warmth of a candle, and the joy of walking beneath the moon.":
    "Từ rất lâu trước khi đường phố rực sáng bởi đèn điện, một chiếc đèn lồng đã đủ biến buổi tối thành lễ hội. Ở Phú Bình, những đôi tay khéo léo vẫn uốn tre thành khung mảnh và căng giấy rực rỡ lên đó. Nghề thủ công mang theo niềm mong đợi của Tết Trung thu tuổi thơ: tiếng giấy xào xạc, hơi ấm ngọn nến và niềm vui bước đi dưới ánh trăng.",
  "In the quiet of the workshop, each artisan has a story that no photograph can quite capture. Come closer, follow the lantern trail, and discover the chapter waiting at the village.":
    "Trong sự tĩnh lặng của xưởng nghề, mỗi nghệ nhân đều có một câu chuyện mà không bức ảnh nào có thể ghi lại trọn vẹn. Hãy đến gần hơn, theo dấu đèn lồng và khám phá chương chuyện đang chờ ở ngôi làng.",
  "A small clay piggy bank once held a world of possibilities. At Tân Khánh, artisans shape earth into the familiar childhood companion, then add color and character by hand. Every piece begins as a lump of clay and ends as a vessel for hopes, plans, and little treasures.":
    "Tại xóm lò nung heo đất Tân Khánh, chú heo đất quen thuộc trở thành một mảnh ký ức tuổi thơ. Trong xưởng thủ công 30 năm tuổi của nghệ nhân Nguyễn Văn Nhàn, tiếng gõ lạch cạch của khuôn và dụng cụ dẫn lối người chơi đến bàn làm việc, nơi những chú heo đất mộc đang chờ hoàn thiện. Trải nghiệm khép lại bằng dấu ấn riêng: chọn một màu và tô điểm câu chuyện nhỏ lên món quà mang về.",
  "There is more to this craft than meets the eye. Listen for the workshop sounds and find the piece that tells your own story.":
    "Mảng màu còn thiếu đang chờ đâu đó trong xưởng. Hãy lắng nghe thật kỹ, tìm trên các kệ và xin phép nghệ nhân trước khi đặt nét cuối cùng lên chú heo đất của bạn.",
  "Follow the clatter of molds and hand tools through the 30-year-old workshop until you reach the artisan's worktable.":
    "Lần theo tiếng gõ lạch cạch của khuôn và dụng cụ qua xưởng thủ công 30 năm tuổi để tìm đến bàn làm việc của nghệ nhân.",
  "Find the special clay piggy bank described by the app, such as the limited-edition pig holding a gold bar or the pig on the innermost corner shelf.":
    "Tìm chú heo đất đặc biệt theo yêu cầu trên ứng dụng, chẳng hạn chú heo đang ôm thỏi vàng phiên bản giới hạn hoặc chú heo nằm ở kệ góc trong cùng của xưởng.",
  "Ask the artisan for a brush, choose your color, and paint the missing detail on your clay piggy bank.":
    "Xin phép nghệ nhân để nhận cọ, chọn màu và tự tay tô điểm chi tiết còn thiếu trên chú heo đất.",
  "Before a toy came from a box, it could come from a pair of hands. Tò he figures made from rice flour and natural colors bring folk tales and childhood imaginings to life. A little twist, a careful pinch, and a playful character appears.":
    "Tò he biến bột gạo, bột nếp và màu tự nhiên thành những nhân vật nhỏ mang theo hơi ấm của trò chơi dân gian Việt Nam. Tại điểm làm và không gian gánh hàng trưng bày trên QL1A, người chơi lần theo mùi bột mới để tìm đến giỏ tò he, rồi học cách xoay, vê và nắn để một nhân vật hiện lên.",
  "The most memorable part is not choosing a figure. It is learning to shape one for yourself beside the hands that have kept this tradition alive.":
    "Điều đáng nhớ nhất không chỉ là chọn một hình tò he. Đó là được học cách tự nặn một chi tiết bên cạnh đôi tay của nghệ nhân, rồi mang ký tự ấy về nhà.",
  "Follow the scent of rice flour and glutinous rice flour to the tò he display and traditional craft corner along QL1A.":
    "Dò theo mùi thơm của bột gạo và bột nếp để tìm không gian trưng bày tò he và góc truyền nghề trên QL1A.",
  "Find the exact tò he character requested by the app, such as Sun Wukong holding the Ruyi Jingu Bang hidden among the figures in the bamboo basket.":
    "Tìm đúng con vật hoặc nhân vật tò he theo yêu cầu trên ứng dụng, chẳng hạn Tôn Ngộ Không cầm Như Ý Kim Cô Bổng ẩn giữa các hình trong giỏ tre.",
  "With the artisan's guidance, knead and shape one small detail, or receive the found figure as a keepsake.":
    "Sau khi tìm đúng mục tiêu, hãy để nghệ nhân hướng dẫn bạn nhào nặn một chi tiết nhỏ hoặc nhận trực tiếp tác phẩm ấy làm kỷ niệm.",
  "Station ${number} · ${theme}": "Trạm ${number} · ${theme}",
  "From ${formatted price}": "Từ ${formatted price}",
  "A lantern glowing in the night. The first coins in a clay piggy bank. A tiny figure shaped by hand. Phiêu Việt takes you beyond the screen and into the workshops, stories, and people keeping childhood traditions alive.":
    "Một chiếc đèn lồng tỏa sáng trong đêm. Những đồng tiền đầu tiên trong chú heo đất. Một hình hài nhỏ được nặn bằng tay. Phiêu Việt đưa bạn vượt ra ngoài màn hình để bước vào những xưởng nghề, câu chuyện và con người đang gìn giữ truyền thống tuổi thơ.",
  "Quang San Art Museum": "Bảo tàng Nghệ thuật Quang San",
  "189B/3 Nguyen Van Huong, An Khanh Ward, Ho Chi Minh City":
    "189B/3 Nguyễn Văn Hưởng, Phường An Khánh, TP.HCM",
  "Explore a diverse art collection by the Saigon River and join creative workshops.":
    "Khám phá bộ sưu tập nghệ thuật đa dạng bên sông Sài Gòn và tham gia các hoạt động sáng tạo.",
  "Quang San Art Museum is an art space located on a 2,000 m² campus by the Saigon River. The museum's collection spans from the Indochina period (1925-1945), the 1945-1975 period to contemporary Vietnamese art. It perfectly aligns with Phieu Viet's vision by combining cultural and artistic values with hands-on experiences.":
    "Quang San là không gian nghệ thuật nằm trên khuôn viên khoảng 2.000 m² bên sông Sài Gòn. Bộ sưu tập của bảo tàng trải dài từ giai đoạn Đông Dương (1925-1945), giai đoạn 1945-1975 đến nghệ thuật Việt Nam đương đại. Đây là cơ sở phù hợp với định hướng của Phiêu Việt vì kết hợp được giá trị văn hóa, nghệ thuật và trải nghiệm trực tiếp.",
  "The museum frequently hosts practical activities such as silk painting, paper fan making, drawing, and crafting poonah paper lanterns. These creative experiences are waiting for you to discover.":
    "Bảo tàng cũng đã tổ chức các hoạt động thực hành như vẽ lụa, làm quạt giấy, vẽ và làm lồng đèn từ giấy dó. Điều này cho thấy mô hình trải nghiệm sáng tạo tại địa điểm có tính khả thi, thay vì nhóm tự giả định rằng bảo tàng có workshop.",
  "Experience Creative Art": "Trải nghiệm Nghệ thuật Sáng tạo",
  "Explore the Collection": "Khám phá Bộ sưu tập",
  "Journey through the Indochina, modern, and contemporary art periods.":
    "Hành trình qua các giai đoạn nghệ thuật Đông Dương, hiện đại và đương đại.",
  "Join a Workshop": "Tham gia Hội thảo",
  "Participate in hands-on activities like silk painting or crafting poonah paper lanterns.":
    "Tham gia các hoạt động thực hành như vẽ lụa hoặc làm lồng đèn từ giấy dó.",
  "Create Your Masterpiece": "Tạo ra Kiệt tác của Bạn",
  "Follow the guidance to create your own unique art piece.":
    "Làm theo hướng dẫn để tạo ra tác phẩm nghệ thuật độc đáo của riêng bạn.",
  "Independence Palace": "Di tích Lịch sử Dinh Độc Lập (Hội trường Thống Nhất)",
  "135 Nam Ky Khoi Nghia, Ben Thanh Ward, District 1, Ho Chi Minh City":
    "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh.",
  "On the noon of April 30, 1975, the crash of tank 390 through the iron gates closed a long war and placed the Independence Palace in history books.":
    "Trưa ngày 30 tháng 4 năm 1975, cú húc đổ cánh cổng sắt của chiếc xe tăng 390 đã khép lại một cuộc chiến dài và đưa Dinh Độc Lập vào mọi trang sách lịch sử.",
  "But before that fateful moment, this place was not merely the power headquarters of the old Saigon regime. Hidden behind the stone curtain blocks shaped like elegant bamboo joints is a structure containing the profound feng shui calculations of architect Ngo Viet Thu. The entire mansion was designed after Chinese characters representing aspirations for a wise ruler and eternity: Cat, Khanh, Chu, Trung.":
    "Nhưng trước khoảnh khắc định mệnh đó, nơi đây không đơn thuần là 'tổng hành dinh' quyền lực của chính quyền Sài Gòn cũ. Ẩn sau những khối rèm hoa đá mang hình đốt trúc thanh tao là một công trình chứa đựng bài toán phong thủy thâm sâu của kiến trúc sư Ngô Viết Thụ. Toàn bộ dinh thự được thiết kế phỏng theo những chữ Hán mang ước vọng minh chủ và trường tồn: Cát, Khánh, Chủ, Trung.",
  "Yet, why did a structure so carefully calculated down to every dragon vein, possessing a solid underground command bunker system that could withstand heavy bombs, witness such rapid collapse in those fiery April days? Where does the secret underground escape route really lead? What breathless moment is the red paint mark on the Palace roof hiding?":
    "Thế nhưng, tại sao một công trình được tính toán cẩn mật đến từng long mạch, sở hữu cả hệ thống hầm chỉ huy ngầm kiên cố chịu được bom tấn, lại chứng kiến những giờ phút sụp đổ chóng vánh trong ngày tháng Tư rực lửa? Lối thoát hiểm bí mật dưới lòng đất thực sự dẫn đi đâu? Vết sơn đỏ trên sân thượng Dinh đang che bảo thời khắc nghẹt thở nào?",
  "Decode the Secret of the Palace": "Giải mã Bí mật Dinh Độc Lập",
  "The Feng Shui Architecture": "Kiến trúc Phong thủy",
  "Discover the hidden meaning behind the elegant bamboo-joint stone curtains and the Chinese characters designed into the mansion.":
    "Khám phá ý nghĩa ẩn giấu đằng sau những khối rèm hoa đá hình đốt trúc thanh tao và các chữ Hán được thiết kế vào dinh thự.",
  "The Underground Bunker": "Hầm Chỉ huy Ngầm",
  "Explore the solid underground command bunker system and the secret escape route.":
    "Khám phá hệ thống hầm chỉ huy ngầm kiên cố và lối thoát hiểm bí mật.",
  "The Fateful Moment": "Khoảnh khắc Định mệnh",
  "Find the red paint mark on the Palace roof and uncover the breathtaking historical moment it conceals.":
    "Tìm vết sơn đỏ trên sân thượng Dinh và khám phá khoảnh khắc lịch sử nghẹt thở mà nó che giấu.",
  "Light → Earth → Flour": "Ánh sáng → Đất → Bột gạo",
  "Không có kết quả cho": "No results for",
  "Xem tất cả": "View all",
};

// 2. New Vietnamese -> English mappings for the MVP pages
export const mvpTranslations: Record<string, string> = {
  "Nếu bạn là nghệ nhân, cơ sở làng nghề, không gian văn hóa hoặc đơn vị tổ chức trải nghiệm, Phiêu Việt mong muốn được kết nối và cùng xây dựng.":
    "If you are an artisan, craft village, cultural space, or experience organizer, Phiêu Việt wants to connect and build together.",

  "Phiêu Việt bắt đầu từ mong muốn đưa những câu chuyện văn hóa đến gần hơn với người trẻ, không chỉ để xem hay nghe kể, mà để tự mình tìm đến, trải nghiệm và ghi nhớ.":
    "Phiêu Việt began with the desire to bring cultural stories closer to young people, not just to see or hear about, but to seek out, experience, and remember for themselves.",
  "Những giá trị văn hóa vẫn hiện diện trong làng nghề, bảo tàng, di tích, những xưởng thủ công hay trong đôi bàn tay của những người vẫn đang giữ nghề mỗi ngày.":
    "Cultural values are still present in craft villages, museums, monuments, craft workshops, or in the hands of those who are keeping the trades alive every day.",
  "Nhưng để tìm được một nơi phù hợp, hiểu câu chuyện phía sau và biết mình có thể trải nghiệm điều gì tại đó đôi khi vẫn còn khá rải rác.":
    "But finding a suitable place, understanding the story behind it, and knowing what you can experience there can sometimes still be quite scattered.",
  "Phiêu Việt được tạo ra để kết nối những điểm đến, con người và trải nghiệm ấy theo một cách gần gũi hơn với người trẻ.":
    "Phiêu Việt was created to connect those destinations, people, and experiences in a more relatable way for young people.",
  "Là tinh thần tự do khám phá, không nhất thiết phải đi theo một lịch trình cố định. Bạn có thể chọn một nơi, một hoạt động hoặc một bộ sưu tập phù hợp với thời gian của mình.":
    "It is the spirit of free exploration, without having to follow a fixed itinerary. You can choose a place, an activity, or a collection that fits your time.",
  "Là những câu chuyện, con người, nghề, ký ức và nét văn hóa Việt Nam mà Phiêu Việt muốn đưa người dùng đến gần hơn.":
    "It is the stories, people, trades, memories, and Vietnamese cultural traits that Phiêu Việt wants to bring closer to users.",
  "Tạo ra một cách khám phá văn hóa gần gũi, chủ động và thú vị hơn, đặc biệt với những người trẻ muốn hiểu thêm về văn hóa Việt qua trải nghiệm thực tế.":
    "Creating a more relatable, proactive, and exciting way of cultural exploration, especially for young people who want to understand more about Vietnamese culture through hands-on experience.",
  "Từng bước kết nối thêm nhiều địa điểm, nghệ nhân và câu chuyện ở các vùng miền khác nhau để mỗi chuyến đi đều có thêm một điều đáng nhớ.":
    "Gradually connecting more locations, artisans, and stories in different regions so that every trip has another memorable thing.",
  "Câu chuyện và trải nghiệm cần bắt đầu từ chính địa điểm, con người và giá trị văn hóa đang hiện hữu.":
    "The story and experience must start from the very location, people, and cultural values that exist.",
  "Văn hóa có thể được kể theo những cách mới, miễn là không làm mất đi giá trị vốn có.":
    "Culture can be told in new ways, as long as it doesn't lose its inherent values.",
  "Mỗi trải nghiệm không chỉ tạo giá trị cho người tham gia mà còn hướng đến sự tôn trọng và đồng hành lâu dài với những người đang giữ nghề.":
    "Each experience not only creates value for the participants but also aims for respect and long-term companionship with the heritage keepers.",
  "Phiêu Việt không tự tạo ra những giá trị văn hóa này. Những câu chuyện và trải nghiệm đều bắt đầu từ chính những người và những nơi đang gìn giữ chúng mỗi ngày.":
    "Phiêu Việt does not create these cultural values itself. The stories and experiences all begin with the very people and places that are preserving them every day.",
  "Giám đốc Điều hành": "Chief Executive Officer",
  "Giám đốc Chiến lược": "Chief Strategy Officer",
  "Giám đốc Sản phẩm": "Chief Product Officer",
  "Giám đốc Công nghệ": "Chief Technology Officer",
  "Giám đốc Vận hành": "Chief Operating Officer",
  "Giám đốc Tài chính": "Chief Financial Officer",
  "Nghiên cứu Thị trường": "Market Research",
  "Trải nghiệm Khách hàng": "Customer Experience",
  "Thương hiệu & Nội dung": "Brand & Content",
  "Giám đốc Sáng tạo": "Chief Creative Officer",

  "PHIÊU VIỆT": "PHIÊU VIỆT",
  "Phiêu lưu giữa những câu chuyện văn hóa Việt.": "A journey through Vietnamese cultural stories.",
  "VỀ CHÚNG TÔI": "ABOUT US",
  "Về Phiêu Việt": "About Phiêu Việt",
  "Ý nghĩa tên gọi": "The Meaning Behind Our Name",
  Phiêu: "Phiêu (Wander)",
  Việt: "Việt (Vietnam)",
  "là cách mình đi.": "is how we travel.",
  "là điều mình tìm đến.": "is what we seek.",
  "Sứ mệnh": "Mission",
  "Tầm nhìn": "Vision",
  "Giá trị Phiêu Việt theo đuổi": "Our Core Values",
  "Chân thực": "Authenticity",
  "Sáng tạo": "Creativity",
  "Bền vững": "Sustainability",
  "Đội ngũ Phiêu Việt": "The Phiêu Việt Team",
  "Những người đứng sau Phiêu Việt": "The people behind Phiêu Việt",
  "Cùng nhau giữ cho câu chuyện được tiếp tục.": "Together keeping the story alive.",
  "Nghệ nhân": "Artisans",
  "Những người trực tiếp gìn giữ và truyền lại kỹ năng, câu chuyện.":
    "Those who directly preserve and pass down skills and stories.",
  "Làng nghề": "Craft Villages",
  "Những nơi tạo nên bối cảnh thật cho mỗi trải nghiệm.":
    "The authentic settings for each experience.",
  "Bảo tàng": "Museums",
  "Những đơn vị lưu giữ, giới thiệu và lan tỏa các giá trị văn hóa.":
    "Organizations preserving and spreading cultural values.",
  "Bạn đang giữ một câu chuyện văn hóa?": "Are you keeping a cultural story alive?",
  "Trở thành đối tác": "Become a Partner",
  "Liên hệ Phiêu Việt": "Contact Phiêu Việt",
  "Khám Phá": "Discover",
  "Search destinations": "Search destinations",
  "Tìm địa điểm, làng nghề, bảo tàng hoặc trải nghiệm...":
    "Search destinations, craft villages, museums...",
  "Gợi ý:": "Suggestions:",
  "Làng lồng đèn": "Lantern village",
  Gốm: "Pottery",
  Workshop: "Workshop",
  "trải nghiệm để khám phá": "experiences to discover",
  "Filter by duration": "Filter by duration",
  "Mọi thời lượng": "Any duration",
  "Dưới 2 giờ": "Under 2 hours",
  "Từ 2 giờ trở lên": "2 hours or more",
  "Sort experiences": "Sort experiences",
  "Nổi bật": "Featured",
  "Giá: thấp đến cao": "Price: low to high",
  "Giá: cao đến thấp": "Price: high to low",
  "Không tìm thấy trải nghiệm": "No experiences found",
  "Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc.": "Try adjusting your search or filters.",
  "Xóa bộ lọc": "Clear filters",
  "Mỗi điểm đến mở ra một câu chuyện văn hóa đang chờ bạn khám phá.":
    "Every destination reveals a cultural story waiting to be discovered.",
  "Tìm kiếm": "Search",
  "Khám phá ngay": "Explore Now",
  "Xem hành trình": "View Journey",
  "Phiêu Việt có gì?": "What does Phiêu Việt offer?",
  "Bạn có thể chọn cách khám phá phù hợp với mình.":
    "You can choose the exploration style that suits you.",
  "Điểm khám phá": "Discovery Points",
  "Làng nghề, bảo tàng, di tích và những không gian văn hóa.":
    "Craft villages, museums, relics, and cultural spaces.",
  "Hoạt động trải nghiệm": "Hands-on Experiences",
  "Thử làm, thử học và gặp gỡ những người đang giữ nghề.":
    "Try, learn, and meet the heritage keepers.",
  "Việt Ký": "Việt Ký",
  "Nhiều điểm đến được nối lại bằng một câu chuyện chung.":
    "Multiple destinations connected by a shared narrative.",
  "Hành trình Việt Ký nổi bật": "Featured Việt Ký Journey",
  "Vệt Nắng Năm Tháng": "Sunlight of Yesteryears",
  "Mảnh Ghép Tuổi Thơ": "Fragments of Childhood",
  "Một bức tranh ký ức đang chờ được hoàn thiện.": "A mosaic of memories waiting to be completed.",
  "Khám phá bộ sưu tập": "Explore the collection",
  "Ánh sáng": "Light",
  "Hình hài": "Form",
  "Sắc màu": "Color",
  "Ký ức của chính bạn": "Your own memory",
  "VIỆT KÝ": "VIỆT KÝ",
  "Góp nhặt hành trình, lưu giữ ký ức.": "Gather journeys, keep memories.",
  "Mỗi bộ sưu tập là một câu chuyện để bạn tự mình khám phá và hoàn thiện.":
    "Every collection is a story for you to uncover and complete.",
  "BỘ SƯU TẬP ĐANG MỞ": "OPEN COLLECTIONS",
  "điểm khám phá": "destinations",
  "mảnh ghép": "puzzle pieces",
  "Khám phá hành trình": "Explore journey",
  "Những câu chuyện tiếp theo": "Upcoming stories",
  "Trúc Nghệ Ký": "Bamboo Craft Chronicles",
  "Hạt Mầm Ánh Sáng": "Seeds of Light",
  "Nhặt Trăng": "Gathering the Moon",
  "Sắp ra mắt": "Coming Soon",
  "Không tìm thấy trạm": "Station not found",
  "Chưa đúng! Hãy quan sát lại manh mối và thử thêm một lần nữa.":
    "Not quite! Look at the clues again and give it another try.",
  "Mã không chính xác. Hãy thử lại.": "Incorrect code. Please try again.",
  "Hướng dẫn trải nghiệm": "Experience Guide",
  "Xem video để hiểu cách tham gia và thu thập mảnh ghép.":
    "Watch the video to understand how to participate and collect puzzle pieces.",
  Next: "Next",
  TRẠM: "STATION",
  "Nhiệm vụ:": "Mission:",
  "Giữa những món đồ đang được treo tại trạm, hãy tìm đúng món đồ theo mô tả.":
    "Among the items displayed at the station, find the exact one described.",
  "Bắt đầu tìm kiếm": "Start searching",
  "Quan sát và chọn đúng": "Observe and select correctly",
  "Bạn đã tìm thấy!": "You found it!",
  "MÃ KÝ ỨC": "MEMORY CODE",
  "Hãy copy mã này và nhập vào bên dưới để xác nhận hoàn thành thử thách.":
    "Copy this code and enter it below to confirm your completion.",
  "Nhập mã...": "Enter code...",
  Enter: "Enter",
  "ĐÃ HOÀN THÀNH": "COMPLETED",
  "Bạn đã mở khóa Mảnh ghép": "You unlocked Puzzle Piece:",
  "Mảnh ghép đã được thêm vào Việt Ký của bạn.": "The puzzle piece has been added to your Việt Ký.",
  NEXT: "NEXT",
  "Gửi gắm ký ức / Khảo sát": "Share your memory / Survey",
  "Bạn cảm thấy thử thách vừa rồi như thế nào?": "How did you find the recent challenge?",

  // NEW STRINGS ADDED RECENTLY
  "Từ làng nghề, bảo tàng đến những hoạt động cùng nghệ nhân, mỗi điểm đến đều có câu chuyện riêng để bạn khám phá.":
    "From craft villages and museums to activities with artisans, every destination has a unique story for you to discover.",
  "NHẶT TRĂNG": "GATHERING THE MOON",
  "Tìm lại ký ức, chạm vào nguyên bản.": "Rediscover memories, touch the original.",
  "BỘ SƯU TẬP VIỆT KÝ": "VIỆT KÝ COLLECTION",
  "Một vài ký ức không chỉ để nhớ.": "Some memories are not just for remembering.",
  "“Vệt Nắng Năm Tháng” là hành trình trải nghiệm thuộc hệ sinh thái Việt Ký, được xây dựng từ những hình ảnh, âm thanh, màu sắc và vật dụng quen thuộc từng gắn với tuổi thơ của nhiều thế hệ người Việt.":
    '"Vệt Nắng Năm Tháng" is an experiential journey within the Việt Ký ecosystem, built from familiar images, sounds, colors, and objects associated with the childhood of many Vietnamese generations.',
  "Đó có thể là ánh sáng xuyên qua lớp giấy kiếng của chiếc lồng đèn mỗi dịp Trung thu, tiếng gõ khuôn tại những xưởng làm heo đất hay những hình tò he nhỏ nhiều màu sắc được tạo nên từ bột và đôi bàn tay người làm nghề.":
    "It could be the light shining through the glass paper of a lantern every Mid-Autumn Festival, the sound of molds tapping in piggy bank workshops, or the colorful little tò he figures made from dough and the artisan's hands.",
  "Theo thời gian, nhiều hình ảnh quen thuộc này dần ít xuất hiện trong đời sống hiện đại. Tuy nhiên, những nghề thủ công và phương thức tạo ra chúng vẫn đang được duy trì tại một số làng nghề, xưởng sản xuất và không gian trải nghiệm.":
    "Over time, many of these familiar images have gradually appeared less in modern life. However, the crafts and methods of making them are still maintained in some craft villages, workshops, and experiential spaces.",
  "Từ đó, Phiêu Việt xây dựng “Vệt Nắng Năm Tháng” như một hành trình giúp người tham gia tìm lại những dấu vết tuổi thơ thông qua trải nghiệm trực tiếp. Thay vì chỉ quan sát hoặc tiếp nhận thông tin, người tham gia được chủ động tìm kiếm, tương tác, thực hiện một phần thao tác thủ công và trò chuyện với người làm nghề tại từng trạm.":
    'From there, Phiêu Việt built "Vệt Nắng Năm Tháng" as a journey to help participants rediscover traces of childhood through direct experience. Instead of just observing or receiving information, participants can actively search, interact, perform a part of the manual process, and converse with the craftsmen at each station.',
  "NHỮNG MẢNH KÝ ỨC CỦA BẠN": "YOUR MEMORY PIECES",
  "Tìm lại ánh sáng của những mùa Trung Thu qua câu chuyện của nghề làm lồng đèn thủ công.":
    "Rediscover the light of Mid-Autumn seasons through the story of traditional lantern making.",
  "Khám phá điểm này": "Explore this point",
  "Xóm/lò heo đất Tân Khánh": "Tân Khánh Piggy Bank Village/Kiln",
  "Theo dấu hành trình từ một khối đất đến chú heo đất từng xuất hiện trong ký ức của nhiều thế hệ.":
    "Follow the journey from a lump of clay to the piggy bank that once appeared in the memories of many generations.",
  "Tò He CLAY": "Tò He CLAY",
  "Chạm lại những sắc màu tuổi thơ qua những hình hài nhỏ bé được tạo nên từ đôi bàn tay người làm nghề.":
    "Retouch the colors of childhood through tiny figures created by the hands of the artisan.",
  "Hoàn thiện Mảnh Ghép Tuổi Thơ": "Complete the Childhood Puzzle",
  "Mỗi điểm hoàn thành sẽ mở khóa một mảnh ghép. Khi đủ ba mảnh đầu tiên, mảnh cuối cùng sẽ được mở ra cho chính bạn.":
    "Each completed point unlocks a puzzle piece. Once the first three pieces are collected, the final piece will be revealed for you.",
  Mảnh: "Piece",
  "Đã mở khóa": "Unlocked",
  "Chưa mở": "Locked",
  "Mở sau khi hoàn thành 3 điểm": "Unlocks after completing 3 points",
  "Chọn đánh giá...": "Select rating...",
  "5 - Rất thú vị": "5 - Very interesting",
  "4 - Thú vị": "4 - Interesting",
  "3 - Bình thường": "3 - Average",
  "2 - Không thú vị": "2 - Not interesting",
  "1 - Rất không thú vị": "1 - Very uninteresting",
  "Bạn có muốn trải nghiệm phiên bản thực tế không?":
    "Would you like to experience the real-world version?",
  "5 - Rất muốn": "5 - Absolutely",
  "3 - Phân vân": "3 - Undecided",
  "1 - Hoàn toàn không muốn": "1 - Not at all",
  "Bạn cảm thấy điều gì thú vị nhất trong trải nghiệm vừa rồi?":
    "What was the most interesting part of the experience?",
  "Nhập phản hồi của bạn...": "Enter your feedback...",
  Submit: "Submit",
  "Data tự động lưu vào Google Sheets (Mocked for MVP)":
    "Data automatically saved to Google Sheets (Mocked for MVP)",
  "Không tìm thấy địa điểm": "Location not found",
  "Quay lại khám phá": "Back to discover",
  "CÂU CHUYỆN VĂN HÓA": "CULTURAL STORY",
  "Câu chuyện phía sau": "The story behind",
  "Có thể trải nghiệm gì?": "What can you experience?",
  "Tham gia thử thách tương tác": "Join the interactive challenge",
  "Khám phá câu chuyện này qua một trải nghiệm tìm kiếm thú vị.":
    "Discover this story through an engaging scavenger hunt.",
  "Bắt đầu chơi": "Start playing",
  "Bộ sưu tập liên quan": "Related Collection",
  "Địa điểm này thuộc bộ sưu tập": "This location belongs to the collection",
  "Xem bộ sưu tập": "View collection",
  "THÔNG TIN CẦN BIẾT": "GOOD TO KNOW",
  "Tóm tắt": "Summary",
  "Địa chỉ": "Address",
  "Thời lượng": "Duration",
  "Giá ước tính": "Estimated Price",
  "Đặt trải nghiệm": "Book Experience",
  "Xem bản đồ": "View Map",
  "HÀNH TRÌNH VIỆT KÝ NỔI BẬT": "FEATURED VIỆT KÝ JOURNEY",
  "Câu chuyện của bạn bắt đầu từ đây": "Your story begins here",
  "Hành trình này là của bạn": "The journey is yours to make",
  "Khám phá": "Discover",
  "Tìm địa điểm, hoạt động hoặc bộ sưu tập mà bạn muốn trải nghiệm.":
    "Find destinations, activities, or collections you wish to experience.",
  "Chọn và chuẩn bị": "Select and Prepare",
  "Xem thông tin, thời gian và đặt chỗ nếu hoạt động yêu cầu đăng ký trước.":
    "Check details, times, and book if the activity requires a reservation.",
  "Trải nghiệm và hoàn thành thử thách": "Experience and Complete the Challenge",
  "Đến địa điểm, tìm hiểu câu chuyện, nhận manh mối và hoàn thành nhiệm vụ.":
    "Visit the site, learn the story, get clues, and finish the task.",
  "Lưu lại trong Việt Ký": "Save to Việt Ký",
  "BẮT ĐẦU KHÁM PHÁ": "START DISCOVERING",
  "KHÁM PHÁ": "DISCOVER",
  "Cảm nhận sau hành trình": "Reflections after the journey",
  "Mình thích nhất là mỗi nơi không chỉ để ghé qua chụp hình, mà còn có câu chuyện và nhiệm vụ để mình chú ý hơn đến những chi tiết xung quanh.":
    "What I loved most is that every place isn't just for taking photos, but comes with a story and a task to make you pay more attention to the details.",
  "Đi theo hành trình như vậy dễ hơn tự tìm từng chỗ riêng lẻ. Mình biết nên bắt đầu từ đâu, đi tiếp chỗ nào và mỗi điểm đều có cái để nhớ.":
    "Following a journey like this is much easier than finding places on my own. I know where to start, where to go next, and every stop has something memorable.",
  "Phần mình thấy thú vị nhất là mấy dấu và mảnh ghép trong Việt Ký. Hoàn thành xong một điểm thì có cảm giác muốn đi tiếp cho đủ cả hành trình.":
    "The most exciting part is the stamps and puzzle pieces in the Việt Ký. Finishing one stop makes you want to keep going to complete the whole journey.",
  "CÂU CHUYỆN CỦA BẠN BẮT ĐẦU TỪ ĐÂY": "YOUR STORY BEGINS HERE",
  "Hành trình này là của bạn.": "The journey is yours to make.",
  "Mở khóa dấu hoặc mảnh ghép và tiếp tục khám phá những phần còn lại của bộ sưu tập.":
    "Unlock a stamp or puzzle piece and continue discovering the rest of the collection.",
  "LỜI KỂ TỪ HÀNH TRÌNH": "TALES FROM THE JOURNEY",
  "Mã chưa đúng, vui lòng thử lại!": "Incorrect code, please try again!",
  "Vệt Nắng Năm Tháng – Mảnh Ghép Tuổi Thơ": "Rays of Yesteryear - Childhood Memories",
  "Giờ hoạt động": "Operating Hours",
  "Giá tham khảo": "Estimated Price",
  "Lưu ý": "Notes",
  "VỆT NẮNG NĂM THÁNG": "RAYS OF YESTERYEAR",
  "Làng lồng đèn Phú Bình": "Phu Binh Lantern Village",
  "01 - ÁNH SÁNG": "01 - LIGHT",
  "02 - HÌNH HÀI": "02 - FORM",
  "03 - SẮC MÀU": "03 - COLOR",
  "Lồng đèn hình tròn": "Round lantern",
  "Lồng đèn hình cá": "Fish lantern",
  "Lồng đèn ngôi sao không có dải lụa": "Star lantern without ribbons",
  "Lồng đèn ngôi sao năm cánh có dải lụa đỏ": "Five-pointed star lantern with red ribbon",
  "Heo đất chưa nung màu xám": "Unbaked grey piggy bank",
  "Heo đất màu vàng vẽ hoa": "Yellow piggy bank with painted flowers",
  "Heo đất màu đỏ không họa tiết": "Plain red piggy bank",
  "Chú heo đất có dấu ấn ký ức làng nghề": "Piggy bank stamped with craft village mark",
  "Tò he bông hoa ngũ sắc": "Five-color flower tò he",
  "Tò he hình con rồng": "Dragon-shaped tò he",
  "Tò he nhân vật truyện tranh": "Comic character tò he",
  "Nhân vật tò he dân gian theo yêu cầu": "Traditional folk tò he character",
  "Tại xưởng nung, hãy tìm chú heo đất mang dấu ấn truyền thống của xóm nghề Tân Khánh.":
    "At the kiln workshop, find the piggy bank carrying the traditional mark of Tân Khánh village.",
  "Tại mẹt tò he, hãy quan sát và chọn đúng nhân vật dân gian theo lời kể của nghệ nhân.":
    "At the tò he tray, observe and select the folk character according to the artisan's story.",
  "Giữa những chiếc lồng đèn đang được treo tại trạm, hãy tìm chiếc lồng đèn ngôi sao năm cánh có dải lụa đỏ.":
    "Among the hanging lanterns at the station, find the five-pointed star lantern with red ribbons.",
  "HÀNH TRÌNH ĐỂ LƯU GIỮ": "A JOURNEY TO KEEP",
  "Hành trình văn hóa của bạn, từng ký ức một.": "Your cultural journey, one memory at a time.",
  "ĐIỂM ĐẾN ĐÃ HOÀN THÀNH": "DESTINATIONS COMPLETED",
  "THU THẬP TRÊN HÀNH TRÌNH": "COLLECTED ALONG THE WAY",
  "Những mảnh ký ức của bạn": "Your memory pieces",
  "Xem phần thưởng": "View rewards",
  "Một ký ức vẫn đang chờ được tìm thấy.": "A memory still waiting to be found.",
  "Khám phá câu chuyện": "Explore story",
  "Đã thu thập dấu ấn số": "Digital stamp collected",
  "Phần thưởng của bạn": "Your rewards",
  "Xem các cột mốc phần thưởng": "See reward milestones",
  "CÁC ĐỊA ĐIỂM ĐỐI TÁC PHIÊU VIỆT": "PHIÊU VIỆT PARTNER LOCATIONS",
  "Xem chi tiết nội dung bộ sưu tập": "View collection details",
  "con dấu đã thu thập. Mỗi chương hoàn thành sẽ đưa bạn đến gần hơn với phần thưởng tiếp theo.":
    "stamps collected. Every completed chapter brings you closer to the next reward.",
  "BỘ SƯU TẬP NỔI BẬT": "FEATURED COLLECTION",
  "01 · ÁNH SÁNG": "01 · LIGHT",
  "02 · ĐẤT": "02 · EARTH",
  "03 · BỘT GẠO": "03 · FLOUR",
  "04 · NGHỆ THUẬT": "04 · ART",
  "05 · LỊCH SỬ": "05 · HISTORY",
  "Điểm làm & gánh Tò he CLAY": "CLAY To He Making & Street Vendor Point",
  "Xóm lò nung heo đất Tân Khánh": "Tan Khanh Piggy Bank Kiln Village",
  "Bảo tàng Nghệ thuật Quang San": "Quang San Art Museum",
  "Di tích Lịch sử Dinh Độc Lập (Hội trường Thống Nhất)":
    "Independence Palace Historical Site (Reunification Hall)",
  "Lưu thành công": "Saved successfully",
  "08:00 - 17:00 (Mỗi ngày)": "08:00 - 17:00 (Daily)",
  "Vui lòng đặt lịch trước khi đến.": "Please book in advance before arriving.",
  "Xem nghệ nhân làm nghề": "Watch the artisan craft",
  "Tham gia hoạt động": "Participate in activities",
  "Tham quan": "Sightseeing",
  "Giới thiệu Việt Ký": "Introducing Việt Ký",
  "Đang tải video": "Loading video",
  "Video giới thiệu Phiêu Việt": "Phiêu Việt introduction video",
  "Phát video giới thiệu Phiêu Việt": "Play the Phiêu Việt introduction video",
  "Tiếp theo": "Next",
  "Xác nhận mã": "Submit code",
  "Chào mừng bạn đến với Việt Ký! Đây là hành trình khám phá các di sản văn hóa qua những mảnh ghép ký ức. Hãy hoàn thành các thử thách để thu thập mã ký ức nhé.":
    "Welcome to Việt Ký! Discover Vietnamese cultural heritage through memory fragments. Complete challenges to collect memory codes along the way.",
  "Trạm 1 – Làng lồng đèn Phú Bình": "Station 1 – Phú Bình Lantern Village",
  "Thử thách: Truy tìm ánh sáng cũ": "Challenge: Find the Light of the Past",
  "Mỗi dịp Trung thu về, con hẻm nhỏ tại Phú Bình lại rực rỡ ánh đèn giấy kiếng. Những chiếc lồng đèn thủ công không chỉ mang ánh sáng đêm rằm mà còn chứa đựng bao kỷ niệm tuổi thơ.":
    "During the Mid-Autumn Festival, the small lanes of Phú Bình glow with colorful glass-paper lanterns. Handcrafted by local makers, each lantern brightens the celebration and carries memories of childhood.",
  "Nhiệm vụ: Giữa những chiếc lồng đèn đang được treo tại trạm, hãy tìm chiếc lồng đèn ngôi sao năm cánh có dải lụa đỏ.":
    "Your mission: Find the five-pointed star lantern with a red ribbon among the lanterns displayed at this station.",
  "Bắt đầu tìm kiếm": "Start searching",
  "Tìm lồng đèn": "Find the Right Lantern",
  "Hình tròn": "Round shape",
  "Hình cá": "Fish shape",
  "Ngôi sao (không lụa)": "Star (no ribbon)",
  "Ngôi sao dải lụa đỏ": "Star with red ribbon",
  "Bạn đã tìm thấy ánh sáng cũ!": "You found the Light of the Past!",
  "MÃ KÝ ỨC": "MEMORY CODE",
  "COPY MÃ": "COPY CODE",
  "Nhập mã để xác nhận hoàn thành thử thách:": "Enter code to confirm challenge completion:",
  "Nhập mã tại đây...": "Enter code here...",
  "Mã chưa đúng, vui lòng thử lại!": "That code is incorrect. Please try again.",
  "✓ ĐÃ HOÀN THÀNH TRẠM 1 – ÁNH SÁNG": "✓ STATION 1 COMPLETE – LIGHT",
  "Bạn đã mở khóa Mảnh ghép Ánh sáng.": "You unlocked the Light memory piece.",
  "Khảo sát trải nghiệm": "Experience Survey",
  "Bạn cảm thấy thử thách vừa rồi như thế nào? (1 - Rất không thú vị, 5 - Rất thú vị)":
    "How enjoyable was the challenge? (1 – Not at all enjoyable, 5 – Extremely enjoyable)",
  "Bạn có dễ hiểu cách chơi không? (1 - Rất khó hiểu, 5 - Rất dễ hiểu)":
    "How easy was the challenge to understand? (1 – Very difficult, 5 – Very easy)",
  "Bạn có muốn trải nghiệm phiên bản thực tế tại Làng lồng đèn Phú Bình không? (1 - Hoàn toàn không muốn, 5 - Rất muốn)":
    "How interested are you in trying this experience at Phú Bình Lantern Village? (1 – Not at all interested, 5 – Extremely interested)",
  "Bạn cảm thấy điều gì thú vị nhất trong trải nghiệm vừa rồi?":
    "What did you enjoy most about this experience?",
  "Chia sẻ cảm nghĩ của bạn...": "Share your thoughts...",
  "Gửi đánh giá": "Submit survey",
  "Cảm ơn!": "Thank you!",
  "Cảm ơn bạn đã tham gia trải nghiệm MVP Việt Ký. Dữ liệu của bạn đã được ghi nhận.":
    "Thanks for taking part in the Việt Ký MVP experience. We appreciate your feedback.",
  "Về trang chủ": "Back to Home",
  "Lồng đèn hình tròn": "Round lantern",
  "Lồng đèn hình cá": "Fish lantern",
  "Lồng đèn ngôi sao không có dải lụa": "Star lantern without ribbon",
  "Lồng đèn ngôi sao năm cánh có dải lụa đỏ": "Five-pointed star lantern with red ribbon",
  "Heo đất chưa nung màu xám": "Unfired grey clay piggy bank",
  "Heo đất màu vàng vẽ hoa": "Yellow painted flower piggy bank",
  "Heo đất màu đỏ không họa tiết": "Plain red piggy bank",
  "Chú heo đất có dấu ấn ký ức làng nghề": "Craft village keepsake piggy bank",
  "Tò he bông hoa ngũ sắc": "Five-colored flower tò he",
  "Tò he hình con rồng": "Dragon tò he",
  "Tò he nhân vật truyện tranh": "Comic book character tò he",
  "Nhân vật tò he dân gian theo yêu cầu": "Traditional folk character tò he as requested",
  "Tại xưởng nung, hãy tìm chú heo đất mang dấu ấn truyền thống của xóm nghề Tân Khánh.":
    "At the kiln workshop, find the piggy bank bearing the traditional mark of Tân Khánh village.",
  "Tại mẹt tò he, hãy quan sát và chọn đúng nhân vật dân gian theo lời kể của nghệ nhân.":
    "At the tò he basket, observe and choose the correct folk character according to the artisan's story.",
  "Hướng dẫn trải nghiệm": "Experience Guide",
  "Xem video để hiểu cách tham gia và thu thập mảnh ghép.":
    "Watch the video to understand how to participate and collect puzzle pieces.",
  "Quan sát và chọn đúng": "Observe and choose correctly",
  "Bạn đã tìm thấy!": "You found it!",
  "Hãy copy mã này và nhập vào bên dưới để xác nhận hoàn thành thử thách.":
    "Please copy this code and enter it below to confirm challenge completion.",
  "Nhập mã...": "Enter code...",
  "Lưu lại trong Việt Ký": "Save in Việt Ký",
  "Bạn đã mở khóa Mảnh ghép": "You have unlocked the Memory Piece",
  "Mảnh ghép đã được thêm vào Việt Ký của bạn.": "The puzzle piece has been added to your Việt Ký.",
  "Gửi gắm ký ức / Khảo sát": "Share Memories / Survey",
  "Bạn cảm thấy thử thách vừa rồi như thế nào?": "How did you feel about this challenge?",
  "Chọn đánh giá...": "Select a rating...",
  "5 - Rất thú vị": "5 - Very interesting",
  "4 - Thú vị": "4 - Interesting",
  "3 - Bình thường": "3 - Average",
  "2 - Không thú vị": "2 - Uninteresting",
  "1 - Rất không thú vị": "1 - Very uninteresting",
  "Bạn có muốn trải nghiệm phiên bản thực tế không?":
    "Would you like to experience the real-world version?",
  "5 - Rất muốn": "5 - Definitely yes",
  "3 - Phân vân": "3 - Undecided",
  "1 - Hoàn toàn không muốn": "1 - Not at all",
  "Nhập phản hồi của bạn...": "Enter your feedback...",
  "Data tự động lưu vào Google Sheets (Mocked for MVP)":
    "Data automatically saved to Google Sheets (Mocked for MVP)",
  "Huy hiệu hành trình văn hóa": "Cultural Journey Badge",
  "Phiếu giảm giá": "Discount Voucher",
  "Quà lưu niệm văn hóa cao cấp": "Premium Cultural Souvenir",
  "Hành trình đặc trưng": "The signature journey",
  "Ánh sáng → Đất → Bột gạo": "Light → Earth → Flour",
  "Bắt đầu với câu chuyện gọi tên bạn.": "Begin with the story that calls to you.",
};

// Build master bidirectional dictionaries
const viDict: Record<string, string> = {};
const enDict: Record<string, string> = {};

// 1. Register legacy (EN -> VI)
for (const [en, vi] of Object.entries(legacyTranslations)) {
  viDict[en] = vi;
  viDict[vi] = vi;
  enDict[vi] = en;
  enDict[en] = en;
}

// 2. Register MVP (VI -> EN)
for (const [vi, en] of Object.entries(mvpTranslations)) {
  viDict[vi] = vi;
  viDict[en] = vi;
  enDict[vi] = en;
  enDict[en] = en;
}

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: viDict,
    },
    en: {
      translation: enDict,
    },
  },
  lng: "vi",
  fallbackLng: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
