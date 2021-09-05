import styled from "styled-components";
import {
  H1Title,
  DescriptionDetails,
  DescriptionHighlight,
} from "../styledcomponents/headings.style";
import ReactPlayer from "react-player";

function TopHomeSectionComponent({ className }) {
  return (
    <div className={className}>
      <div className="elementWrapper">
        <div class="headingMessage">
          <H1Title>
            Full-service creative agency specialized in crafting human — centric
            digital experiences.
          </H1Title>
        </div>
        <ReactPlayer
          className="videPlayer"
          width="1480px"
          height="838px"
          url="https://www.youtube.com/watch?v=kvHFdk7xYwM"
        />
        <div class="sponsorsLogo">
          <img src="/progressive.svg" alt="progressive" />
          <img src="/otsuka.svg" alt="otsuka" />
          <img src="/deloitte.svg" alt="deloitte" />
          <img src="/shipbob.svg" alt="shipbob" />
          <img src="/teachable.svg" alt="teachable" />
        </div>
        <div className="shortDescriptionWrapper">
          <div className="shortDescriptions">
            <div className="description">
              <DescriptionHighlight color="#ffffff">
                ~$250B
              </DescriptionHighlight>
              <DescriptionDetails color="#a6c1bf">
                - combined valuation of companies we’ve partnered with.{" "}
              </DescriptionDetails>
            </div>
            <div className="description">
              <DescriptionHighlight color="#ffffff">12</DescriptionHighlight>
              <DescriptionDetails color="#a6c1bf">
                - combined valuation of companies we’ve partnered with.{" "}
              </DescriptionDetails>
            </div>
            <div className="description">
              <DescriptionHighlight color="#ffffff">
                Our clients are the companies and startups who make the world go
                round – they treat diseases, move parcels, insure cars, process
                payments, create jobs, rent homes and publish news. Vast and
                complex businesses like these need digital experiences that are
                just as people-friendly as they are robust and scalable.
              </DescriptionHighlight>
            </div>
            <div className="description">
              <DescriptionHighlight color="#ffffff">
                Our specialized team of designers, developers, illustrators and
                project managers work with streamlined processes to break
                through organizational roadblocks. We translate research into
                solutions, crafting thoughtful and unified brands, apps,
                websites, interfaces and systems.
              </DescriptionHighlight>
            </div>
            <div className="description">
              <DescriptionHighlight color="#ffffff">
                Through challenging core assumptions, we shape the products and
                services that improve the lives of thousands every single day.
              </DescriptionHighlight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TopHomeSection = styled(TopHomeSectionComponent)`
  width: 80%;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .videPlayer {
    margin: 100px 0;
  }
  .sponsorsLogo {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & img {
      width: 150px;
    }
  }
  .elementWrapper {
    width: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .headingMessage {
    width: 80%;
  }
  .shortDescriptionWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 200px;
  }
  .shortDescriptions {
    width: 75%;
  }
  .description {
    text-align: left;
    margin: 60px 0;
  }
`;

export default TopHomeSection;
