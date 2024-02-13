type props = {
   style?: CSSModuleClasses[string];
   content: string;
};

const TextAnimation = (props: props) => {
   const { style, content } = props;
   const classe = style ? style : '';
   return <p className={`${classe} langue fade`}>{content}</p>;
};

export default TextAnimation;
