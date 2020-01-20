import styled from "@emotion/styled";

const PostWrapper = styled.div`
  padding: 1.5rem 2rem;
  margin: 0 1rem 2rem 1rem;
  border: 0.1rem solid white;
  transition: box-shadow 0.3s;
  background-color: var(--color-blue);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
  }
  @media ${props => props.theme.media.lg} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  strong {
    font-weight: 800;
  }
  em {
    font-style: italic;
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
