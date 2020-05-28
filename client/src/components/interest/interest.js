import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import "./interest.css";

class Interest extends Component {

    handleClick = (event) => {
        if (event.currentTarget.classList.contains("nonchecked")) {
            event.currentTarget.getElementsByClassName("checkmark")[0].style.display = "inline-block";
            event.currentTarget.classList.remove("nonchecked");
            event.currentTarget.classList.add("checked");
        }
        else {
            event.currentTarget.getElementsByClassName("checkmark")[0].style.display = "none";
            event.currentTarget.classList.remove("checked");
            event.currentTarget.classList.add("nonchecked");
        }

        if (this.props.onChange) {
            this.props.onChange()
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="column nonchecked" onClick={this.handleClick}>
                <div>
                    <span className="checkmark">
                        <div className="checkmark_circle"></div>
                        <div className="checkmark_stem"></div>
                        <div className="checkmark_kick"></div>
                    </span>
                    <img src={require("" + this.props.imgSource)} alt={t('Interest.' + this.props.type)} style={{ width: "100%" }} />
                    <label className="text-center w-100" >{t('Interest.' + this.props.type)}</label>
                </div>
            </div>

        )
    }
}

const TranslatedInterest = withTranslation()(Interest);

export default TranslatedInterest;