import styled from "@emotion/styled";

const PostWrapper = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
  margin: 0 1rem 2rem 1rem;
  border: 0.1rem solid white;
  transition: box-shadow 0.3s;
  background-color: var(--color-white);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
  }
  clip-path: polygon(0 0, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 0 100%);
}
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    background-color: #e1e1f2;
    top: 0;
    right: 0;
  }
  @media ${props => props.theme.media.lg} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  .date {
    margin-top: 2rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  strong {
    font-weight: 800;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
  img {
    width: 80rem;
    max-width: 100%;
    height: auto;
  }
`;

export default PostWrapper;
