import Button from '../components/Button';
import Container from '../components/Container';
import MainTitle from '../components/MainTitle';
import TextBlock from '../components/TextBlock';
import Title from '../components/Title';

const ViewDetailsPage = () => {
  return (
    <Container>
      <article className="mt-10">
        <div className="lg:grid lg:grid-cols-2 grid items-center justify-center gap-4 mt-10 padding">
          <MainTitle>
            We Provide You <span className="text-deep-red">Super Quality</span> Shoes
          </MainTitle>
          <div className="relative flex-ato overflow-hidden">
            <img
              src="https://res.cloudinary.com/dkqxaid79/image/upload/v1693662702/nike/pngwing.com_12_p2ou9y.png"
              alt="Sport shoes"
              className="block max-w-full h-auto  object-contain object-center"
              loading="lazy"
            />
          </div>
        </div>

        <div className="padding">
          <div className="flex flex-wrap w-full">
            <div className="flex items-center justify-between w-full">
              <div className="text-lg font-semibold text-slate-500">$110.00</div>
              <div className="text-sm font-medium text-slate-700 mt-2">In stock</div>
            </div>
          </div>
          <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
            <TextBlock
              text="Ensuring premium comfort and style, our meticulously crafted footwear is designed to
              elevate your experience, providing you with unmatched quality, innovation, and a touch
              of elegance.
              Our dedication to detail and excellence ensures your satisfaction ChatGPT with every
              step you take in Nike sport shoes. From the basketball court to the running track,
              we`ve got you covered with a wide range of options that cater to all your athletic
              needs."
            />
            <Title>Innovation at the Core</Title>
            <TextBlock
              text="
              At Nike, innovation isn`t just a buzzword; it`s the very essence of our brand. We
              constantly strive to push the boundaries of what`s possible in sport shoe design and
              technology. Our team of engineers and designers work tirelessly to incorporate
              cutting-edge features that enhance your performance and comfort.
              One such innovation is our patented Air-Sole cushioning technology. With its origins
              dating back to the late `70s, it has evolved to become a hallmark of Nike footwear.
              This groundbreaking technology provides superior cushioning and impact protection
              while maintaining a lightweight and responsive feel. Whether you`re on the court
              making high-impact jumps or pounding the pavement on your daily run, Nike`s Air-Sole
              technology will have your back, or should we say, your feet."
            />
            <Title>Sustainability Matters</Title>
            <TextBlock
              text="
              We recognize the importance of sustainability, not just for the present but for the
              future of our planet. Nike is committed to reducing our environmental footprint by
              creating products that are not only top-notch in performance but also eco-friendly.

              Our sustainable initiatives include using recycled materials in the production of our
              shoes, reducing water usage in the manufacturing process, and minimizing waste by
              reusing and recycling materials whenever possible. We believe that every step towards
              a greener future counts, and by choosing Nike, you`re not only investing in the best
              for your athletic needs but also supporting a brand that cares about the world we live
              in."
            />
            <Title> Style Meets Substance</Title>
            <TextBlock
              text="
              Nike sport shoes are not just about performance; they are also a fashion statement.
              Our designs are driven by the latest trends in sportswear and streetwear, ensuring
              that you not only feel great during your workout but also look fantastic while doing
              it. From classic silhouettes that pay homage to our heritage to bold and innovative
              designs that break new ground in style, Nike has a shoe for every taste and occasion."
            />
            <Title> Unmatched Variety</Title>
            <TextBlock
              text="
              Whatever your sport or fitness regimen, Nike has a shoe that`s tailor-made for you. We
              offer a wide range of specialized footwear for various sports, including basketball,
              running, soccer, golf, tennis, and more. Our shoes are designed with the unique
              demands of each sport in mind, giving you the edge you need to excel.
              Furthermore, our commitment to inclusivity is reflected in our extensive size ranges,
              ensuring that athletes of all shapes and sizes can find the perfect fit. Additionally,
              we offer a variety of colorways and customization options, allowing you to express
              your personal style on and off the field."
            />
            <Title>The Nike Experience</Title>
            <TextBlock
              text="
              When you invest in Nike sport shoes, you`re not just buying a product; you`re joining
              a community of athletes and enthusiasts who share your passion for sports and a
              dedication to excellence. We take pride in being part of your journey, whether you`re
              a professional athlete striving for glory or someone taking their first steps towards
              a healthier lifestyle.
              At Nike, we understand that sport is more than just a physical activity; it`s a way of
              life. Our shoes are built to support you in every stride, jump, or sprint, helping you
              achieve your goals and exceed your limits. We believe in the power of sport to inspire
              and unite people, and we`re honored to be a part of that journey with you.
              In conclusion, Nike sport shoes are more than just footwear; they are a testament to
              our commitment to quality, innovation, sustainability, style, and diversity. With Nike
              on your feet, you`re not just wearing shoes; you`re wearing the symbol of a legacy
              that spans decades and continues to shape the future of sportswear. Join us, and
              together, let`s push the boundaries of what`s possible in sports and in life."
            />
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Button type="submit" label="Buy now" className="w-[140px] h-9 text-sm" />
              <Button
                backgroundColor="bg-transparent"
                textColor="text-slate-900"
                borderColor="border-slate-200"
                className="w-[150px] h-10 px-6 text-sm rounded-md"
                type="button"
                label="Add to bag"
              />
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">Free shipping on all continental US orders.</p>
        </div>
      </article>
    </Container>
  );
};

export default ViewDetailsPage;
