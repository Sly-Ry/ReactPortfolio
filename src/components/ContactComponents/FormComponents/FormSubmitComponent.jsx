export function FormSubmitComponent() {
    return (
        <>
            {/* Spammer Catch */}
            <input type='text' name="_honey" style={{display: 'none'}}/>

            {/* Disable Captcha */}
            <input type='hidden' name="_captcha" value={'false'}/>

            {/* Submitted Page */}
            <input type="hidden" name="_next" value="https://sly-ry.github.io/ReactPortfolio/submit"/>
        </>
    )
}