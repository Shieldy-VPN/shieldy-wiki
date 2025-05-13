---
title: Подключение
description: Как присоединиться к прокси?.
icon: 'mdi:connection'
---


# Инструкция по подключению к VPN через Hiddify

Эта инструкция поможет вам настроить VPN через приложение Hiddify Next с использованием протоколов Trojan, Vless, Vmess и Shadowsocks.

## Установка Hiddify Next

Hiddify Next — это кроссплатформенный клиент, поддерживающий более 20 протоколов, включая Trojan, Vless, Vmess и Shadowsocks.[](https://hiddify.com/)

1. **Скачайте Hiddify Next** для вашей операционной системы:
   - **Windows**: [Ссылка на скачивание](https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Windows-Setup-x64.Msix)
   - **macOS**: [Ссылка на скачивание](https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-MacOS.dmg)
   - **Linux**: [Ссылка на скачивание](https://github.com/hiddify/hiddify-app/releases/latest/download/Hiddify-Linux-x64.AppImage)
   - **Android**: [Google Play](#) или [APK](https://play.google.com/store/apps/details?id=app.hiddify.com)
   - **iOS**: [App Store](https://apps.apple.com/us/app/hiddify-proxy-vpn/id6596777532?platform=iphone)
2. **Установите приложение**:
   - Для Windows/macOS/Linux: Запустите установочный файл и следуйте инструкциям.
   - Для Android/iOS: Установите через магазин приложений или загрузите APK (Android).
3. **Запустите Hiddify Next** и разрешите доступ к VPN, если потребуется.

## Настройка подключения

Для подключения вам нужен профиль (конфигурация) от вашего VPN-сервера, созданного через Hiddify Manager или другой панели. Профиль обычно предоставляется в виде ссылки (например, `vless://`, `vmess://`, `trojan://`, `ss://`) или файла конфигурации (Clash, Sing-box).

### Шаг 1: Добавление профиля

1. Откройте Hiddify Next.
2. Нажмите на кнопку **+** в левом верхнем углу (в разделе Home).
3. Выберите способ добавления профиля:
   - **Вручную**: Вставьте ссылку профиля (например, `vless://...`).
   - **Сканирование QR-кода**: Отсканируйте QR-код, предоставленный вашим сервером.
   - **Импорт из буфера обмена**: Скопируйте ссылку и нажмите «Импорт».
4. Подтвердите добавление профиля. Он появится в списке профилей.

### Шаг 2: Подключение к VPN

1. Выберите добавленный профиль в разделе Home.
2. Нажмите кнопку **Подключиться** (обычно в центре экрана).
3. Дождитесь подключения. Статус изменится на «Подключено», и вы увидите график использования трафика.
4. Для проверки задержек перейдите в меню **Proxies** и нажмите кнопку тестирования (в правом нижнем углу). Выберите прокси с наименьшей задержкой вручную или используйте автоматический выбор.

### Конфигурация протоколов

Hiddify Next поддерживает следующие протоколы. Убедитесь, что ваш сервер настроен для использования одного из них:

- **Trojan**:
  - Формат ссылки: `trojan://password@server:port?security=tls&type=tcp#profile-name`
  - Особенности: Маскирует трафик под HTTPS, использует TLS для шифрования.[](https://vpn.how/en/pages/v2ray-vmess-vless-and-trojan-protocol-comparison.html)
- **Vless**:
  - Формат ссылки: `vless://uuid@server:port?encryption=none&type=ws&security=tls#profile-name`
  - Особенности: Лёгкий протокол, высокая производительность, использует ChaCha20-Poly1305.[](https://vpn.how/en/pages/v2ray-vmess-vless-and-trojan-protocol-comparison.html)
- **Vmess**:
  - Формат ссылки: `vmess://base64-encoded-config`
  - Особенности: Гибкий, поддерживает множество шифров (AES-128-GCM, AES-256-CBC), подходит для сложных сетей.[](https://vpn.how/en/pages/v2ray-vmess-vless-and-trojan-protocol-comparison.html)
- **Shadowsocks**:
  - Формат ссылки: `ss://method:password@server:port#profile-name`
  - Особенности: Быстрый SOCKS5-прокси, использует обфускацию для обхода блокировок.[](https://cloudzy.com/blog/shadowsocks-config/)

**Примечание**: Убедитесь, что порт, IP-адрес и параметры шифрования в ссылке совпадают с настройками вашего сервера.

## Получение профиля

- Если вы используете **Hiddify Manager**, откройте панель управления, перейдите в раздел «Пользователи» и скопируйте ссылку профиля или QR-код.
- Если у вас сторонний сервер, запросите конфигурацию у администратора или используйте публичные конфигурации (осторожно, они могут быть небезопасны). Пример репозитория: [GitHub - zengfr/free-vpn-subscribe](#) <!-- Замените на https://github.com/zengfr/free-vpn-subscribe -->[](https://github.com/zengfr/free-vpn-subscribe)

## Дополнительные настройки

- **Автоматический выбор прокси**: Включите в настройках для подключения к серверу с наименьшей задержкой.
- **TUN-режим**: Активируйте в настройках для перенаправления всего трафика через VPN.
- **Обновление подписки**: Нажмите кнопку «Обновить» в профиле, чтобы загрузить новые конфигурации.

<div class="mt-6 flex gap-4">
  <a href="/vpn-troubleshooting" class="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">Возможные проблемы</a>
  <a href="https://hiddify.com" class="inline-flex items-center px-4 py-2 border border-muted text-foreground rounded-md hover:bg-muted">Официальный сайт</a>
</div>