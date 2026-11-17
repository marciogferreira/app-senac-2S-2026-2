EMENTA:

1. CONHECENDO O EXPO.DEV E REALIZAR CADASTRO
2. REALIZAR O DOWNLOAD DO APLICATIVO E INSTALAR NO CELULAR
   EXPO GO
3. SUBINDO VERSOES DO NOSSO PROJETO PARA O EXPO.DEV
4. O QUE É EAS
5. BUILD E SUBMIT DO PROJETO
6. APP STORE E PLAY STORE
7. VERSOES

---

Dependencias para utilizar o EAS:

1. NodeJS Instalado
2. NPM Instalado
3. Git Instalado

<!-- REALIZANDO LOGIN NO EXPO.DEV -->

npx eas login

<!-- SUBMETENDO CONFIGURACOES DE APP -->

npx eas init

<!-- TESTANDO NOSSO APP PARA SABER SE ESTÁ TUDO OK -->

npx expo-doctor

<!-- SUBINDO VERSAO PARA O EXPO.DEV -->

npx eas update --message "Subindo App" --branch preview

<!-- GERA UMA VERSAO PARA ENVIAR PARA LOJA -->

npx eas build
npx eas build --platform=android

<!-- ENVIA PARA LOJA -->

npx eas submit

<!-- GERAR O eas.json -->

npx eas build:configure

<!-- GERANDO APK -->

npx eas build -p android --profile preview
