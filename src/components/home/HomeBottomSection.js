import styled from "styled-components";
import { DescriptionHighlight } from "../styledcomponents/headings.style";
function BottomSectionComponent({ className }) {
  return (
    <div className={className}>
      <div className="whatWeDoTitle">
        <div>
          <DescriptionHighlight color="#0F2825">
            The work we do,
          </DescriptionHighlight>
          <DescriptionHighlight color="#0F2825">
            and the people we help.
          </DescriptionHighlight>
        </div>
      </div>
    </div>
  );
}

const BottomSection = styled(BottomSectionComponent)`
  margin-top: 100px;

  .whatWeDoTitle {
    color: white;

    & div {
      padding: 100px 0;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default BottomSection;
