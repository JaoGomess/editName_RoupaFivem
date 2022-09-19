@echo off      
title Mudar nome de textura

echo.
echo.
echo   **JAVASCRIPT File Create From Moose and Stath_kost       
echo   **Starter File Create From Stath_kost    
echo.
echo.                                                    
echo.
set value=1
echo - Digite o diretorio da pasta do arquivo(lembrando n pode ter espaco na pasta)
set /p value=
echo.                                                    
echo.
set value2=1
echo - Digite o inicial do arquivo
set /p value2=
echo.
set value3=1
echo - Digite o novo nome de arquivo
set /p value3=
echo.

node replaceNames.js %value% %value2% %value3%
endlocal
Pause