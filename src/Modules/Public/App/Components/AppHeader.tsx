import React from 'react'
import { Logo } from '../../../../SVGs/SvgImports';
import { AppHeaderStyle } from "../AppModuleImports";
import { useTranslation } from 'react-i18next';
import { AwaitHandling } from '../../../../Services/ServicesImports';
import SampleService from '../../../../Api/RestApi/ApiServices/SampleService';

function AppHeader() {
    const [t] = useTranslation();
    const SampleServiceInstance = SampleService.getInstance();

    const testApiRequest = async () => {
        const [result, error] = await AwaitHandling(SampleServiceInstance.sampleCall());
        if (error) return;
        console.log(result?.data);
    };

    return (
        <header className={AppHeaderStyle['App-header']}>
            <img src={Logo} className={AppHeaderStyle['App-logo']} alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className={AppHeaderStyle['App-link']}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t("sample")}
            </a>
            <button onClick={testApiRequest}>Test Api call</button>
        </header>
    )
}

export default AppHeader;