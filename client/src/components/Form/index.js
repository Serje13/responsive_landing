import React from "react";
import { filesValidate, validateFields, FIRST_NAME, PHONE, EMAIL } from "../../../utils";
import { main } from "../../api/index";
import "./index.css";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            files: [],
            firstnameField: { error: "", isPristine: true },
            phoneField: { error: "", isPristine: true },
            emailField: { error: "", isPristine: true },
            fileField: { error: "", isPristine: true },
            isPristine: true,
        };
        this.fileInput = React.createRef();
    }

    loadFile = () => {
        this.fileInput.current.click();
    }

    onNameChange = (e) => {
        try {
            const { value } = e.target;
            const err = validateFields(FIRST_NAME, value);
            this.setState({
                name: value,
                firstnameField: { isPristine: false, error: err === "" ? "" : err },
                isPristine: false
            });
        } catch (err) {
            console.log("err from onNameChange- ", err);
        }
    }
    onEmailChange = (e) => {
        try {
            const { value } = e.target;
            const err = validateFields(EMAIL, value);
            this.setState({
                email: value,
                emailField: { isPristine: false, error: err === "" ? "" : err },
                isPristine: false
            });
        } catch (err) {
            console.log("err from onEmailChange- ", err);
        }
    }
    onPhoneChange = (e) => {
        try {
            const { value } = e.target;
            const err = validateFields(PHONE, value);
            this.setState({
                phone: value,
                phoneField: { isPristine: false, error: err === "" ? "" : err },
                isPristine: false
            });
        } catch (err) {
            console.log("err from onPhoneChange- ", err);
        }
    }
    onFileChange = (e) => {
        try {
            const files = e.target.files;
            console.log("FROM FUNCTION - ", files.length);
            const err = filesValidate(files);
            this.setState({
                files,
                fileField: { isPristine: false, error: err === "" ? "" : err },
                isPristine: false
            });
        } catch (err) {
            console.log("err from onFileChange- ", err);
        }
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, files } = this.state;
        console.log(name, email, phone, files);
        const data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("phone", phone);
        for (let i = 0; i < files.length; i++) {
            data.append("files", files[i]);
        }
        const res = await main(data);
        if (res.status === 200 && res.status < 400) {
            window.alert(res.data.message);
        }
        if (res.status === 400 && res.status < 500) {
            window.alert("Что-то пошло не так...(((");
        }
        this.setState({
            name: "",
            phone: "",
            email: "",
            files: []
        });
    }
    render() {
        const { name, email, phone, firstnameField, phoneField, emailField, fileField, files } = this.state;
        const submitStatus = !(name !== "" && phone !== "" && email !== "" && files.length !== 0 && fileField.error === "" && emailField.error === "" && phoneField.error === "" && firstnameField.error === "");
        return (
            <div className="form-container">
                <div>
                    <p className="section-topic">Присоединяйся <span className="topic-part">к нам</span></p>
                </div>
                <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit} method="post">
                    <div className="field-wraper">
                        <div className="input-container">
                            <div className="input-wr">
                                {firstnameField.error !== "" && <div className="err-style">{firstnameField.error}</div>}
                                <input id="inp-name" className={firstnameField.error !== "" ? "inputs err" : "inputs"} type="text" value={name} placeholder="Имя" onChange={this.onNameChange} autoComplete="off" />
                            </div>
                            <div className="input-wr">
                                {emailField.error !== "" && <div className="err-style">{emailField.error}</div>}
                                <input id="email" className={emailField.error !== "" ? "inputs err" : "inputs"} type="text" value={email} placeholder="Email" onChange={this.onEmailChange} autoComplete="off" />
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="input-wr" >
                                {phoneField.error !== "" && <div className="err-style">{phoneField.error}</div>}
                                <input id="phone" type="text" className={phoneField.error !== "" ? "inputs err" : "inputs"} placeholder="Телефон" value={phone} onChange={this.onPhoneChange} autoComplete="off" />
                            </div>
                            <div className="input-wr">
                                {fileField.error !== "" && <div className="err-style">{fileField.error}</div>}
                                <input id="sv" type="button" className={fileField.error !== "" ? "inputs load-button err" : "inputs load-button"} onClick={this.loadFile} value="Резюме" />
                                <input type="file" className="file-input" onChange={this.onFileChange} ref={this.fileInput} multiple title="Резюме" />
                            </div>
                        </div>
                    </div>
                    <div className="input-container-button">
                        <button className={submitStatus ? "submit-disable" : "submit"} type="submit" disabled={submitStatus}><span className={submitStatus ? "submit-button-disable-text" : "submit-button-text"} >Отправить резюме</span></button>
                    </div>
                </form>
            </div>
        );
    }
}