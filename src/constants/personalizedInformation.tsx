import { MdOutlineLanguage } from "react-icons/md";
import { FaClipboardQuestion, FaHandsHoldingChild } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { PiStudentFill, PiStudentThin } from "react-icons/pi";
import {
  PurposeUseAppType,
  TypeListenType,
  TypeUserType,
} from "../pages/PersonalizedInformation";
import { IoIosBook } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";

export const TYPE_USERS: TypeUserType[] = [
  {
    title: "Sinh viên",
    description:
      "Sinh viên là những người đang theo học tại các trường đại học, cao đẳng hoặc các cơ sở giáo dục bậc cao khác. Họ thường có nhu cầu học tập và nghiên cứu cao, và cần các công cụ hỗ trợ học tập hiệu quả.",
    icon: <PiStudentFill className="text-3xl" />,
  },
  {
    title: "Học sinh",
    description:
      "Học sinh là những người đang theo học tại các trường phổ thông, từ tiểu học đến trung học phổ thông. Họ cần các nguồn tài liệu và công cụ học tập phù hợp để phát triển kiến thức và kỹ năng.",
    icon: <PiStudentThin className="text-3xl" />,
  },
  {
    title: "Trẻ em",
    description:
      "Trẻ em là nhóm người trẻ tuổi, thường từ 3 đến 12 tuổi, đang trong giai đoạn phát triển thể chất và trí tuệ. Họ cần môi trường học tập vui nhộn và an toàn với các hoạt động giáo dục phù hợp lứa tuổi.",
    icon: <FaHandsHoldingChild className="text-4xl" />,
  },
  {
    title: "Người đi làm",
    description:
      "Người đi làm là những người đã hoàn thành quá trình học tập chính thức và đang làm việc trong các ngành nghề khác nhau. Họ cần các tài nguyên và công cụ để nâng cao kỹ năng chuyên môn và phát triển sự nghiệp.",
    icon: <GrUserWorker className="text-4xl" />,
  },
  {
    title: "Foreigner people",
    description:
      "Foreigner people are individuals from other countries who are living, working, or studying in a new environment. They require resources that help them adapt to the local culture, language, and educational system.",
    icon: <MdOutlineLanguage className="text-4xl" />,
  },
];

export const PURPOSES_USE_APP: PurposeUseAppType[] = [
  {
    title: "Học tập",
    description:
      "Ứng dụng được thiết kế để cung cấp các công cụ và tài nguyên hữu ích để hỗ trợ quá trình học tập của người dùng. Từ việc truy cập các tài liệu giảng dạy đến việc tham gia vào các cuộc thảo luận và bài kiểm tra, mục đích chính của ứng dụng là giúp người dùng học hỏi và phát triển kiến thức.",
    icon: <IoIosBook className="text-4xl" />,
  },
  {
    title: "Bổ sung kiến thức",
    description:
      "Với các tính năng và nội dung đa dạng, ứng dụng nhằm mục đích cung cấp thêm kiến thức và thông tin hữu ích trong nhiều lĩnh vực khác nhau. Người dùng có thể khám phá các bài giảng, bài viết, và tài liệu mới để mở rộng kiến thức của mình về các chủ đề mà họ quan tâm.",
    icon: <FaClipboardQuestion className="text-4xl" />,
  },
  {
    title: "Giải trí",
    description:
      "Không chỉ là một công cụ học tập, ứng dụng cũng mang lại trải nghiệm giải trí thú vị cho người dùng. Từ việc xem video, đọc truyện, đến tham gia vào các hoạt động giải đố và trò chơi, mục đích của ứng dụng là giúp người dùng thư giãn và giải trí sau những giờ làm việc căng thẳng.",
    icon: <BiMoviePlay className="text-4xl" />,
  },
];

export const TYPE_LISTENS: TypeListenType[] = [
  {
    title: "Tường thuật",
    description:
      "Phong cách tường thuật là cách kể chuyện chi tiết, khách quan, và trung thực. Nó tập trung vào việc cung cấp thông tin cụ thể, thường sử dụng giọng văn trung lập và chính xác để tái hiện lại sự kiện một cách rõ ràng và dễ hiểu.",
    image:
      "https://photo.znews.vn/w660/Uploaded/mdf_nsozxd/2019_03_30/6.jpg",
  },
  {
    title: "Tiểu thuyết hóa",
    description:
      "Phong cách tiểu thuyết hóa là phương pháp kể chuyện sinh động, lôi cuốn và đầy màu sắc. Nó thường sử dụng các yếu tố văn học như hình tượng, cốt truyện, và nhân vật để biến những sự kiện thực thành những câu chuyện hấp dẫn giống như trong tiểu thuyết.",
    image:
      "https://img-cdn.2game.vn/pictures/2game/2019/12/04/2game-tan-tam-quoc-chi-mobile-anh-hd-1.jpg",
  },
  {
    title: "Hào hùng",
    description:
      "Phong cách hào hùng là cách kể chuyện mạnh mẽ, tráng lệ và cảm động. Nó thường được sử dụng để tôn vinh những hành động anh hùng, sự kiện lịch sử quan trọng, hoặc các câu chuyện truyền cảm hứng, mang lại cảm giác phấn khích và tự hào cho người nghe.",
    image:
      "https://image.viettimes.vn/1200x630/Uploaded/2023/qjrfn/2016_03_08/87312_BWLG.jpg",
  },
];

export const TITLE_PERSONALIZED_INFORMATION = [
  {
    title: "Bạn là ai ?",
    description:
      "Thông tin này sẽ được sử dụng để cá nhân hóa trải nghiệm của bạn",
  },
  {
    title: "Phong cách nghe chuyện",
    description:
      "Thông tin này sẽ được sử dụng để cá nhân hóa trải nghiệm của bạn",
  },
  {
    title: "Mục đích sử dụng",
    description:
      "Thông tin này sẽ được sử dụng để cá nhân hóa trải nghiệm của bạn",
  },
];
