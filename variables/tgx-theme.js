const {
    isLight,
    adjustBrightness,
    mixBrightness,
    themeData,
} = require(`./helpers`);

module.exports = (name, colors) => {
    const {
            author,
            background,
            filling,
            themeIsLight,
            primary,
            secondaryText,
            text,
            textOnPrimary,
            backgroundText,
        } = themeData(colors),
        headerBackground = themeIsLight
            ? primary
            : adjustBrightness(filling, -2),
        headerText = themeIsLight ? textOnPrimary : text,
        headerTabColor = themeIsLight ? textOnPrimary : primary;

    /* eslint-disable indent */
    return `
        !
        name: "${name}"
        author: "${author}"
        @
        shadowDepth: ${themeIsLight ? 0.65 : 1}
        wallpaperId: 0
        lightStatusBar: ${isLight(primary) ? 1 : 0}
        dark: ${themeIsLight ? 0 : 1}
        parentTheme: ${themeIsLight ? 11 : 10}
        wallpaperUsageId: 2
        #
        background: ${background}
        chatBackground: ${themeIsLight ? filling : background}
        background_text, background_textLight, background_icon: ${backgroundText}

        headerBackground: ${headerBackground}
        headerLightBackground: ${themeIsLight ? filling : headerBackground}
        headerText, headerIcon: ${headerText}
        headerLightIcon, headerLightText: ${themeIsLight ? text : headerText}
        headerTabActiveText, headerTabActive: ${headerTabColor}
        headerButton: ${themeIsLight ? filling : primary}
        headerButtonIcon: ${themeIsLight ? secondaryText : textOnPrimary}

        iconActive, progress, controlActive, checkActive, sliderActive, togglerActive, inputActive, inlineIcon, inlineOutline, bubbleOut_inlineOutline, inlineText, bubbleOut_inlineText, bubbleOut_inlineIcon, ticks, ticksRead, bubbleOut_ticks, bubbleOut_ticksRead, bubbleOut_file, file, bubbleOut_waveformActive, waveformActive, bubbleIn_textLink, bubbleOut_textLink, textLink, chatSendButton, textSearchQueryHighlight, profileSectionActive, profileSectionActiveContent, badge, bubbleOut_chatVerticalLine, messageVerticalLine, bubbleOut_messageAuthor, messageAuthor, messageSwipeBackground, unreadText, bubble_unreadText, bubble_unreadText_noWallpaper, textNeutral, seekDone, promo, online, playerButtonActive, chatListVerify, fillingPositive, passcode, notification, notificationSecure, notificationPlayer, headerBarCallActive, fileAttach: ${primary}

        messageSwipeContent, passcodeIcon, passcodeText, fillingPositiveContent, attachText, chatListAction: ${textOnPrimary}


        circleButtonRegular, circleButtonTheme: ${primary}
        circleButtonNewSecret, fileGreen: ${adjustBrightness(primary, 3)}
        circleButtonNewChannel, fileYellow: ${adjustBrightness(primary, 5.5)}
        circleButtonNewGroup: ${adjustBrightness(primary, 12)}
        circleButtonNewChat, fileRed: ${adjustBrightness(primary, 6.3)}
        circleButtonChat, circleButtonOverlay: ${filling}
        circleButtonChatIcon, circleButtonOverlayIcon, bubbleIn_time, bubbleOut_time, bubbleOut_progress, textPlaceholder: ${secondaryText}

        controlInactive, headerRemoveBackgroundHighlight, introSectionActive, playerButton, text: ${text}

        avatarCyan, nameCyan, attachContact: ${mixBrightness(
            primary,
            themeIsLight,
            17
        )}
        avatarBlue, nameBlue: ${mixBrightness(primary, themeIsLight, 15)}
        avatarGreen, nameGreen, attachFile: ${mixBrightness(
            primary,
            themeIsLight,
            10
        )}
        avatarViolet, nameViolet: ${mixBrightness(primary, themeIsLight, 5)}
        avatarRed, nameRed, attachPhoto: ${mixBrightness(
            primary,
            themeIsLight,
            -5
        )}
        avatarPink, namePink, attachLocation: ${mixBrightness(
            primary,
            themeIsLight,
            -10
        )}
        avatarYellow, nameYellow, attachInlineBot: ${mixBrightness(
            primary,
            themeIsLight,
            -15
        )}
        avatarOrange, nameOrange: ${mixBrightness(primary, themeIsLight, -17)}
        avatarSavedMessages: ${primary}

        bubbleIn_background, chatKeyboard, checkContent, controlContent, filling, inlineContentActive, overlayFilling, placeholder, promoContent: ${filling}

        chatKeyboardButton, inputInactive, introSection, sliderInactive, textLight, chatListMute, icon, iconLight, playerCoverIcon: ${secondaryText}

        bubbleIn_textLinkPressHighlight, textSelectionHighlight, bubbleOut_textLinkPressHighlight, textLinkPressHighlight: ${primary}31

        bubbleOut_background: ${adjustBrightness(
            themeIsLight ? primary : filling,
            themeIsLight ? 41 : -3
        )}
        fillingPressed: ${secondaryText}31
        messageSelection, bubble_messageSelectionNoWallpaper: ${primary}24
        bubble_messageSelection: ${primary}48
        headerRemoveBackground: ${text}96
        bubble_messageCheckOutline, bubble_messageCheckOutlineNoWallpaper: ${text}42
        bubbleOut_waveformInactive, waveformInactive: ${secondaryText}74
        bubbleOut_text, bubbleIn_text: ${text}
        seekEmpty, seekReady, playerCoverPlaceholder: ${text}19
        headerTabInactiveText: ${textOnPrimary}97
        togglerActiveBackground: ${primary}97
        unread, bubble_unread, bubble_unread_noWallpaper: ${primary}18
        previewBackground: ${filling}C0
        togglerInactive: ${mixBrightness(secondaryText, themeIsLight, 10)}
        togglerInactiveBackground: ${mixBrightness(
            secondaryText,
            themeIsLight,
            10
        )}64
        badgeText: ${textOnPrimary}
        badgeMuted: ${text}65
        badgeMutedText: ${filling}
        separator: #00000023
    `;
    /* eslint-enable indent */
};
