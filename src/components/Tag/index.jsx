import * as S from "./style";

const Tag = ({ content, href, ...props }) => {
  return (
    <S.Anchor href={href} {...props}>
      {content}
    </S.Anchor>
  );
};
export default Tag;
