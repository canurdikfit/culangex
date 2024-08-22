import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
    return (
        <div className="hidden lg:block">
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                color='182, 246, 255'
                outerAlpha={0.2}
                innerScale={0.7}
                outerStyle={{
                    mixBlendMode: 'exclusion'
                }}
                outerScale={1.7}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </div>
    )
}
