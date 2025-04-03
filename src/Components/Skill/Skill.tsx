
import { ThreeDMarquee } from "../../Components/ui/3d-marquee";
const Skill = () => {
    const images = [
        "https://cacm.acm.org/wp-content/uploads/2025/01/012225.BLOG_.21st-Century-C-G.jpg",
        "https://abctrainings.in/media/thumbnails/Python-01_2_1.png",
        "https://www.finoit.com/wp-content/uploads/2022/09/clean-code-java-principles.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s",
        "https://media.istockphoto.com/id/1800292591/photo/sql-structured-query-language-technology-concept-icon-virtual-screen.jpg?s=612x612&w=0&k=20&c=Natt2t_aFsr-KlPiMMQUPKIX6sbDb2hOTRhUFcSq6cA=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyYZg55KhO3QihAUplmAZ7xKl2qW4r8ZEgg&s",
        "https://brainalyst.in/wp-content/uploads/2022/08/Database-Management-System-DBMS-Its-Features-Types.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRMVG0TcS0aoxVHKlndd8-iW5dbOYpGu_wQ&s",
        "https://miro.medium.com/v2/resize:fit:1200/1*Ol-yNPJzAYh7Kyh-Xubwxg.jpeg",
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png",
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tDqWuNdv2HpKkd-LQ1o0M4r0fguN2kB1Pw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3Sp_9UnvsXgAfScS9AHtLrnKfSkAo5RLmw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_P94osOyQmImVhWXE_mHwr8YsvVMY4b2PA&s",
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq10U_c5fp-4zhDLnf48TRkE-x1eNs6kr0AQ&s",
        "https://ionic.io/blog/wp-content/uploads/2024/04/vite-feature-image.png",
        "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivJtbur-8RZhQMz9jyFP3XlfzZvnu92HLsg&s",
        "https://images.prismic.io/wubbleyoutest/5dc05e37-9fce-46d3-bcf9-80ca65910697_Excel.png?auto=compress,format",
        "https://media.licdn.com/dms/image/v2/D4D12AQGnM_JZqmIGEA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686919973736?e=2147483647&v=beta&t=d10FlVW-GDAUQXjgmY3OhxPG7kfzMrc5gIptQW35dsc",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_QBf9VIl2qbiW1pSoUI1SRvZeLMrS8vS_Q&s",
        "https://cacm.acm.org/wp-content/uploads/2025/01/012225.BLOG_.21st-Century-C-G.jpg",
        "https://abctrainings.in/media/thumbnails/Python-01_2_1.png",
        "https://miro.medium.com/v2/resize:fit:1200/1*Ol-yNPJzAYh7Kyh-Xubwxg.jpeg",
        "https://brainalyst.in/wp-content/uploads/2022/08/Database-Management-System-DBMS-Its-Features-Types.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_P94osOyQmImVhWXE_mHwr8YsvVMY4b2PA&s",
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg",
        "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png",
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      ];
      return (
        <div className="max-w-screen rounded-3xl blur(3px)">
          <ThreeDMarquee images={images} />
        </div>
      );
    }
export default Skill