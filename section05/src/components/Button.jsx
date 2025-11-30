const Button = ({children, text, color = "black"}) => {

    return (
        <button style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

// ★ App.jsx에 <div>같은 html요소나 <Header />같은 컴포넌트 요소는 "children" 으로 받을수 있다!

export default Button;
