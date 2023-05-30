import {
    HOME,
    CALCULADORA,
    GITFIND
} from "./paths";

export const goToHome = (navigate: any) => {
    navigate(HOME);
};

export const goToCalculadora = (navigate: any) => {
    navigate(CALCULADORA);
};

export const goToGitFind = (navigate: any) => {
    navigate(GITFIND);
};