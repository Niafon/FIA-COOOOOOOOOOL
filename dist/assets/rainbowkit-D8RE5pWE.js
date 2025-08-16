const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CJAmEX16.js","assets/web3-core-u9Xui7sV.js","assets/react-lB9TgwmK.js","assets/utils-DWDzwfiT.js","assets/sentry-Bb6USDVD.js","assets/index-pC80POXB.css"])))=>i.map(i=>d[i]);
var sa=Object.defineProperty;var ca=(e,t,n)=>t in e?sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var it=(e,t,n)=>ca(e,typeof t!="symbol"?t+"":t,n);import{d as ua,r as b,j as K,u as So,R as a,a as xt,b as da,c as ae,e as To,f as fa,_ as j,g as an,h as pa,i as ma,U as ha,k as ga,l as va,m as wa,n as ba}from"./web3-core-u9Xui7sV.js";import{a as Ca}from"./react-lB9TgwmK.js";var Bn='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',ya={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${Bn}`,system:Bn},Qe={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},Aa={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},Do=({borderRadius:e="large",fontStack:t="rounded",overlayBlur:n="none"})=>({blurs:{modalOverlay:Aa[n].modalOverlay},fonts:{body:ya[t]},radii:{actionButton:Qe[e].actionButton,connectButton:Qe[e].connectButton,menuButton:Qe[e].connectButton,modal:Qe[e].modal,modalMobile:Qe[e].modalMobile}}),dt="#1A1B1F",Oo={blue:{accentColor:"#3898FF",accentColorForeground:"#FFF"},green:{accentColor:"#4BD166",accentColorForeground:dt},orange:{accentColor:"#FF983D",accentColorForeground:dt},pink:{accentColor:"#FF7AB8",accentColorForeground:dt},purple:{accentColor:"#7A70FF",accentColorForeground:"#FFF"},red:{accentColor:"#FF6257",accentColorForeground:"#FFF"}},_n=Oo.blue,Ea=({accentColor:e=_n.accentColor,accentColorForeground:t=_n.accentColorForeground,...n}={})=>({...Do(n),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(255, 255, 255, 0.04)",actionButtonBorderMobile:"rgba(255, 255, 255, 0.08)",actionButtonSecondaryBackground:"rgba(255, 255, 255, 0.08)",closeButton:"rgba(224, 232, 255, 0.6)",closeButtonBackground:"rgba(255, 255, 255, 0.08)",connectButtonBackground:dt,connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",connectButtonText:"#FFF",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",downloadTopCardBackground:"linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",error:"#FF494A",generalBorder:"rgba(255, 255, 255, 0.08)",generalBorderDim:"rgba(255, 255, 255, 0.04)",menuItemBackground:"rgba(224, 232, 255, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.5)",modalBackground:"#1A1B1F",modalBorder:"rgba(255, 255, 255, 0.08)",modalText:"#FFF",modalTextDim:"rgba(224, 232, 255, 0.3)",modalTextSecondary:"rgba(255, 255, 255, 0.6)",profileAction:"rgba(224, 232, 255, 0.1)",profileActionHover:"rgba(224, 232, 255, 0.2)",profileForeground:"rgba(224, 232, 255, 0.05)",selectedOptionBorder:"rgba(224, 232, 255, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.24)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});Ea.accentColors=Oo;var Ro={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},In=Ro.blue,Mo=({accentColor:e=In.accentColor,accentColorForeground:t=In.accentColorForeground,...n}={})=>({...Do(n),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});Mo.accentColors=Ro;var Sn=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    }
  },

  "zilpay": {
    "qr_code": {
      "step1": {
        "title": "Open the ZilPay app",
        "description": "Add ZilPay to your home screen for faster access to your wallet."
      },
      "step2": {
        "title": "Create or Import a Wallet",
        "description": "Create a new wallet or import an existing one."
      },
      "step3": {
        "title": "Tap the scan button",
        "description": "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  }
}
`;function xa(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e}var Lo=xa;function No(e){var{conditions:t}=e;if(!t)throw new Error("Styles have no conditions");function n(o){if(typeof o=="string"||typeof o=="number"||typeof o=="boolean"){if(!t.defaultCondition)throw new Error("No default condition");return{[t.defaultCondition]:o}}if(Array.isArray(o)){if(!("responsiveArray"in t))throw new Error("Responsive arrays are not supported");var r={};for(var i in t.responsiveArray)o[i]!=null&&(r[t.responsiveArray[i]]=o[i]);return r}return o}return Lo(n,{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function ka(e){var{conditions:t}=e;if(!t)throw new Error("Styles have no conditions");var n=No(e);function o(r,i){if(typeof r=="string"||typeof r=="number"||typeof r=="boolean"){if(!t.defaultCondition)throw new Error("No default condition");return i(r,t.defaultCondition)}var l=Array.isArray(r)?n(r):r,s={};for(var d in l)l[d]!=null&&(s[d]=i(l[d],d));return s}return Lo(o,{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}function ja(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ba(e){var t=ja(e,"string");return typeof t=="symbol"?t:String(t)}function _a(e,t,n){return t=Ba(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tn(Object(n),!0).forEach(function(o){_a(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Ia=e=>function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=Object.assign({},...n.map(d=>d.styles)),i=Object.keys(r),l=i.filter(d=>"mappings"in r[d]),s=d=>{var v=[],h={},f=Ot({},d),c=!1;for(var m of l){var u=d[m];if(u!=null){var p=r[m];c=!0;for(var w of p.mappings)h[w]=u,f[w]==null&&delete f[w]}}var C=c?Ot(Ot({},h),f):d,y=function(){var k=C[E],I=r[E];try{if(I.mappings)return 1;if(typeof k=="string"||typeof k=="number")v.push(I.values[k].defaultClass);else if(Array.isArray(k))for(var x=0;x<k.length;x++){var S=k[x];if(S!=null){var T=I.responsiveArray[x];v.push(I.values[S].conditions[T])}}else for(var F in k){var q=k[F];q!=null&&v.push(I.values[q].conditions[F])}}catch(H){throw H}};for(var E in C)y();return e(v.join(" "))};return Object.assign(s,{properties:new Set(i)})},Sa=e=>e,Ta=function(){return Ia(Sa)(...arguments)};function Fo(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Fo(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Wo(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Fo(e))&&(o&&(o+=" "),o+=t);return o}var Da="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";const Dn=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),On=4;function Oa(e){let t=0;function n(){return e[t++]<<8|e[t++]}let o=n(),r=1,i=[0,1];for(let k=1;k<o;k++)i.push(r+=n());let l=n(),s=t;t+=l;let d=0,v=0;function h(){return d==0&&(v=v<<8|e[t++],d=8),v>>--d&1}const f=31,c=2**f,m=c>>>1,u=m>>1,p=c-1;let w=0;for(let k=0;k<f;k++)w=w<<1|h();let C=[],y=0,E=c;for(;;){let k=Math.floor(((w-y+1)*r-1)/E),I=0,x=o;for(;x-I>1;){let F=I+x>>>1;k<i[F]?x=F:I=F}if(I==0)break;C.push(I);let S=y+Math.floor(E*i[I]/r),T=y+Math.floor(E*i[I+1]/r)-1;for(;((S^T)&m)==0;)w=w<<1&p|h(),S=S<<1&p,T=T<<1&p|1;for(;S&~T&u;)w=w&m|w<<1&p>>>1|h(),S=S<<1^m,T=(T^m)<<1|m|1;y=S,E=1+T-S}let A=o-4;return C.map(k=>{switch(k-A){case 3:return A+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return A+256+(e[s++]<<8|e[s++]);case 1:return A+e[s++];default:return k-1}})}function Ra(e){let t=0;return()=>e[t++]}function Po(e){return Ra(Oa(Ma(e)))}function Ma(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((r,i)=>t[r.charCodeAt(0)]=i);let n=e.length,o=new Uint8Array(6*n>>3);for(let r=0,i=0,l=0,s=0;r<n;r++)s=s<<6|t[e.charCodeAt(r)],l+=6,l>=8&&(o[i++]=s>>(l-=8));return o}function La(e){return e&1?~e>>1:e>>1}function Na(e,t){let n=Array(e);for(let o=0,r=0;o<e;o++)n[o]=r+=La(t());return n}function Ke(e,t=0){let n=[];for(;;){let o=e(),r=e();if(!r)break;t+=o;for(let i=0;i<r;i++)n.push(t+i);t+=r+1}return n}function Uo(e){return Ge(()=>{let t=Ke(e);if(t.length)return t})}function Qo(e){let t=[];for(;;){let n=e();if(n==0)break;t.push(Fa(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(Wa(n,e))}return t.flat()}function Ge(e){let t=[];for(;;){let n=e(t.length);if(!n)break;t.push(n)}return t}function zo(e,t,n){let o=Array(e).fill().map(()=>[]);for(let r=0;r<t;r++)Na(e,n).forEach((i,l)=>o[l].push(i));return o}function Fa(e,t){let n=1+t(),o=t(),r=Ge(t);return zo(r.length,1+e,t).flatMap((l,s)=>{let[d,...v]=l;return Array(r[s]).fill().map((h,f)=>{let c=f*o;return[d+f*n,v.map(m=>m+c)]})})}function Wa(e,t){let n=1+t();return zo(n,1+e,t).map(r=>[r[0],r.slice(1)])}function Pa(e){let t=[],n=Ke(e);return r(o([]),[]),t;function o(i){let l=e(),s=Ge(()=>{let d=Ke(e).map(v=>n[v]);if(d.length)return o(d)});return{S:l,B:s,Q:i}}function r({S:i,B:l},s,d){if(!(i&4&&d===s[s.length-1])){i&2&&(d=s[s.length-1]),i&1&&t.push(s);for(let v of l)for(let h of v.Q)r(v,[...s,h],d)}}}function Ua(e){return e.toString(16).toUpperCase().padStart(2,"0")}function Vo(e){return`{${Ua(e)}}`}function Qa(e){let t=[];for(let n=0,o=e.length;n<o;){let r=e.codePointAt(n);n+=r<65536?1:2,t.push(r)}return t}function Le(e){let n=e.length;if(n<4096)return String.fromCodePoint(...e);let o=[];for(let r=0;r<n;)o.push(String.fromCodePoint(...e.slice(r,r+=4096)));return o.join("")}function za(e,t){let n=e.length,o=n-t.length;for(let r=0;o==0&&r<n;r++)o=e[r]-t[r];return o}var Va="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";const Ye=44032,gt=4352,vt=4449,wt=4519,qo=19,Ho=21,Ne=28,bt=Ho*Ne,qa=qo*bt,Ha=Ye+qa,Ka=gt+qo,Ga=vt+Ho,Ya=wt+Ne;function Ve(e){return e>>24&255}function Ko(e){return e&16777215}let Xt,Rn,Zt,ft;function Ja(){let e=Po(Va);Xt=new Map(Uo(e).flatMap((t,n)=>t.map(o=>[o,n+1<<24]))),Rn=new Set(Ke(e)),Zt=new Map,ft=new Map;for(let[t,n]of Qo(e)){if(!Rn.has(t)&&n.length==2){let[o,r]=n,i=ft.get(o);i||(i=new Map,ft.set(o,i)),i.set(r,t)}Zt.set(t,n.reverse())}}function Go(e){return e>=Ye&&e<Ha}function Xa(e,t){if(e>=gt&&e<Ka&&t>=vt&&t<Ga)return Ye+(e-gt)*bt+(t-vt)*Ne;if(Go(e)&&t>wt&&t<Ya&&(e-Ye)%Ne==0)return e+(t-wt);{let n=ft.get(e);return n&&(n=n.get(t),n)?n:-1}}function Yo(e){Xt||Ja();let t=[],n=[],o=!1;function r(i){let l=Xt.get(i);l&&(o=!0,i|=l),t.push(i)}for(let i of e)for(;;){if(i<128)t.push(i);else if(Go(i)){let l=i-Ye,s=l/bt|0,d=l%bt/Ne|0,v=l%Ne;r(gt+s),r(vt+d),v>0&&r(wt+v)}else{let l=Zt.get(i);l?n.push(...l):r(i)}if(!n.length)break;i=n.pop()}if(o&&t.length>1){let i=Ve(t[0]);for(let l=1;l<t.length;l++){let s=Ve(t[l]);if(s==0||i<=s){i=s;continue}let d=l-1;for(;;){let v=t[d+1];if(t[d+1]=t[d],t[d]=v,!d||(i=Ve(t[--d]),i<=s))break}i=Ve(t[l])}}return t}function Za(e){let t=[],n=[],o=-1,r=0;for(let i of e){let l=Ve(i),s=Ko(i);if(o==-1)l==0?o=s:t.push(s);else if(r>0&&r>=l)l==0?(t.push(o,...n),n.length=0,o=s):n.push(s),r=l;else{let d=Xa(o,s);d>=0?o=d:r==0&&l==0?(t.push(o),o=s):(n.push(s),r=l)}}return o>=0&&t.push(o,...n),t}function Jo(e){return Yo(e).map(Ko)}function $a(e){return Za(Yo(e))}const Mn=45,Xo=".",Zo=65039,$o=1,Ct=e=>Array.from(e);function Je(e,t){return e.P.has(t)||e.Q.has(t)}class ei extends Array{get is_emoji(){return!0}}let $t,er,ke,en,tr,Re,Rt,Oe,xe,Ln,tn;function ln(){if($t)return;let e=Po(Da);const t=()=>Ke(e),n=()=>new Set(t()),o=(h,f)=>f.forEach(c=>h.add(c));$t=new Map(Qo(e)),er=n(),ke=t(),en=new Set(t().map(h=>ke[h])),ke=new Set(ke),tr=n(),n();let r=Uo(e),i=e();const l=()=>{let h=new Set;return t().forEach(f=>o(h,r[f])),o(h,t()),h};Re=Ge(h=>{let f=Ge(e).map(c=>c+96);if(f.length){let c=h>=i;f[0]-=32,f=Le(f),c&&(f=`Restricted[${f}]`);let m=l(),u=l(),p=!e();return{N:f,P:m,Q:u,M:p,R:c}}}),Rt=n(),Oe=new Map;let s=t().concat(Ct(Rt)).sort((h,f)=>h-f);s.forEach((h,f)=>{let c=e(),m=s[f]=c?s[f-c]:{V:[],M:new Map};m.V.push(h),Rt.has(h)||Oe.set(h,m)});for(let{V:h,M:f}of new Set(Oe.values())){let c=[];for(let u of h){let p=Re.filter(C=>Je(C,u)),w=c.find(({G:C})=>p.some(y=>C.has(y)));w||(w={G:new Set,V:[]},c.push(w)),w.V.push(u),o(w.G,p)}let m=c.flatMap(u=>Ct(u.G));for(let{G:u,V:p}of c){let w=new Set(m.filter(C=>!u.has(C)));for(let C of p)f.set(C,w)}}xe=new Set;let d=new Set;const v=h=>xe.has(h)?d.add(h):xe.add(h);for(let h of Re){for(let f of h.P)v(f);for(let f of h.Q)v(f)}for(let h of xe)!Oe.has(h)&&!d.has(h)&&Oe.set(h,$o);o(xe,Jo(xe)),Ln=Pa(e).map(h=>ei.from(h)).sort(za),tn=new Map;for(let h of Ln){let f=[tn];for(let c of h){let m=f.map(u=>{let p=u.get(c);return p||(p=new Map,u.set(c,p)),p});c===Zo?f.push(...m):f=m}for(let c of f)c.V=h}}function sn(e){return(nr(e)?"":`${cn(kt([e]))} `)+Vo(e)}function cn(e){return`"${e}"‎`}function ti(e){if(e.length>=4&&e[2]==Mn&&e[3]==Mn)throw new Error(`invalid label extension: "${Le(e.slice(0,4))}"`)}function ni(e){for(let n=e.lastIndexOf(95);n>0;)if(e[--n]!==95)throw new Error("underscore allowed only at start")}function oi(e){let t=e[0],n=Dn.get(t);if(n)throw He(`leading ${n}`);let o=e.length,r=-1;for(let i=1;i<o;i++){t=e[i];let l=Dn.get(t);if(l){if(r==i)throw He(`${n} + ${l}`);r=i+1,n=l}}if(r==o)throw He(`trailing ${n}`)}function kt(e,t=1/0,n=Vo){let o=[];ri(e[0])&&o.push("◌"),e.length>t&&(t>>=1,e=[...e.slice(0,t),8230,...e.slice(-t)]);let r=0,i=e.length;for(let l=0;l<i;l++){let s=e[l];nr(s)&&(o.push(Le(e.slice(r,l))),o.push(n(s)),r=l+1)}return o.push(Le(e.slice(r,i))),o.join("")}function ri(e,t){return ln(),ke.has(e)}function nr(e){return ln(),tr.has(e)}function ai(e){return ci(ii(e,$a,fi))}function ii(e,t,n){if(!e)return[];ln();let o=0;return e.split(Xo).map(r=>{let i=Qa(r),l={input:i,offset:o};o+=i.length+1;try{let s=l.tokens=di(i,t,n),d=s.length,v;if(!d)throw new Error("empty label");let h=l.output=s.flat();if(ni(h),!(l.emoji=d>1||s[0].is_emoji)&&h.every(c=>c<128))ti(h),v="ASCII";else{let c=s.flatMap(m=>m.is_emoji?[]:m);if(!c.length)v="Emoji";else{if(ke.has(h[0]))throw He("leading combining mark");for(let p=1;p<d;p++){let w=s[p];if(!w.is_emoji&&ke.has(w[0]))throw He(`emoji + combining mark: "${Le(s[p-1])} + ${kt([w[0]])}"`)}oi(h);let m=Ct(new Set(c)),[u]=si(m);ui(u,c),li(u,m),v=u.N}}l.type=v}catch(s){l.error=s}return l})}function li(e,t){let n,o=[];for(let r of t){let i=Oe.get(r);if(i===$o)return;if(i){let l=i.M.get(r);if(n=n?n.filter(s=>l.has(s)):Ct(l),!n.length)return}else o.push(r)}if(n){for(let r of n)if(o.every(i=>Je(r,i)))throw new Error(`whole-script confusable: ${e.N}/${r.N}`)}}function si(e){let t=Re;for(let n of e){let o=t.filter(r=>Je(r,n));if(!o.length)throw Re.some(r=>Je(r,n))?rr(t[0],n):or(n);if(t=o,o.length==1)break}return t}function ci(e){return e.map(({input:t,error:n,output:o})=>{if(n){let r=n.message;throw new Error(e.length==1?r:`Invalid label ${cn(kt(t,63))}: ${r}`)}return Le(o)}).join(Xo)}function or(e){return new Error(`disallowed character: ${sn(e)}`)}function rr(e,t){let n=sn(t),o=Re.find(r=>r.P.has(t));return o&&(n=`${o.N} ${n}`),new Error(`illegal mixture: ${e.N} + ${n}`)}function He(e){return new Error(`illegal placement: ${e}`)}function ui(e,t){for(let n of t)if(!Je(e,n))throw rr(e,n);if(e.M){let n=Jo(t);for(let o=1,r=n.length;o<r;o++)if(en.has(n[o])){let i=o+1;for(let l;i<r&&en.has(l=n[i]);i++)for(let s=o;s<i;s++)if(n[s]==l)throw new Error(`duplicate non-spacing marks: ${sn(l)}`);if(i-o>On)throw new Error(`excessive non-spacing marks: ${cn(kt(n.slice(o-1,i)))} (${i-o}/${On})`);o=i}}}function di(e,t,n){let o=[],r=[];for(e=e.slice().reverse();e.length;){let i=pi(e);if(i)r.length&&(o.push(t(r)),r=[]),o.push(n(i));else{let l=e.pop();if(xe.has(l))r.push(l);else{let s=$t.get(l);if(s)r.push(...s);else if(!er.has(l))throw or(l)}}}return r.length&&o.push(t(r)),o}function fi(e){return e.filter(t=>t!=Zo)}function pi(e,t){let n=tn,o,r=e.length;for(;r&&(n=n.get(e[--r]),!!n);){let{V:i}=n;i&&(o=i,e.length=r)}return o}function mi(e){return ai(e)}function hi(e){return mi(e)}const un=ua({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://eth.merkle.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var gi=Ca(),pe=function(){return pe=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pe.apply(this,arguments)};function ar(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}function vi(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,i;o<r;o++)(i||!(o in t))&&(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))}var pt="right-scroll-bar-position",mt="width-before-scroll-bar",wi="with-scroll-bars-hidden",bi="--removed-body-scroll-bar-size";function Mt(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ci(e,t){var n=b.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var r=n.value;r!==o&&(n.value=o,n.callback(o,r))}}}})[0];return n.callback=t,n.facade}var yi=typeof window<"u"?b.useLayoutEffect:b.useEffect,Nn=new WeakMap;function Ai(e,t){var n=Ci(null,function(o){return e.forEach(function(r){return Mt(r,o)})});return yi(function(){var o=Nn.get(n);if(o){var r=new Set(o),i=new Set(e),l=n.current;r.forEach(function(s){i.has(s)||Mt(s,null)}),i.forEach(function(s){r.has(s)||Mt(s,l)})}Nn.set(n,e)},[e]),n}function Ei(e){return e}function xi(e,t){t===void 0&&(t=Ei);var n=[],o=!1,r={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,o);return n.push(l),function(){n=n.filter(function(s){return s!==l})}},assignSyncMedium:function(i){for(o=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(s){return i(s)},filter:function(){return n}}},assignMedium:function(i){o=!0;var l=[];if(n.length){var s=n;n=[],s.forEach(i),l=n}var d=function(){var h=l;l=[],h.forEach(i)},v=function(){return Promise.resolve().then(d)};v(),n={push:function(h){l.push(h),v()},filter:function(h){return l=l.filter(h),n}}}};return r}function ki(e){e===void 0&&(e={});var t=xi(null);return t.options=pe({async:!0,ssr:!1},e),t}var ir=function(e){var t=e.sideCar,n=ar(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return b.createElement(o,pe({},n))};ir.isSideCarExport=!0;function ji(e,t){return e.useMedium(t),ir}var lr=ki(),Lt=function(){},jt=b.forwardRef(function(e,t){var n=b.useRef(null),o=b.useState({onScrollCapture:Lt,onWheelCapture:Lt,onTouchMoveCapture:Lt}),r=o[0],i=o[1],l=e.forwardProps,s=e.children,d=e.className,v=e.removeScrollBar,h=e.enabled,f=e.shards,c=e.sideCar,m=e.noIsolation,u=e.inert,p=e.allowPinchZoom,w=e.as,C=w===void 0?"div":w,y=e.gapMode,E=ar(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=c,k=Ai([n,t]),I=pe(pe({},E),r);return b.createElement(b.Fragment,null,h&&b.createElement(A,{sideCar:lr,removeScrollBar:v,shards:f,noIsolation:m,inert:u,setCallbacks:i,allowPinchZoom:!!p,lockRef:n,gapMode:y}),l?b.cloneElement(b.Children.only(s),pe(pe({},I),{ref:k})):b.createElement(C,pe({},I,{className:d,ref:k}),s))});jt.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};jt.classNames={fullWidth:mt,zeroRight:pt};var Bi=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function _i(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Bi();return t&&e.setAttribute("nonce",t),e}function Ii(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Si(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ti=function(){var e=0,t=null;return{add:function(n){e==0&&(t=_i())&&(Ii(t,n),Si(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Di=function(){var e=Ti();return function(t,n){b.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},sr=function(){var e=Di(),t=function(n){var o=n.styles,r=n.dynamic;return e(o,r),null};return t},Oi={left:0,top:0,right:0,gap:0},Nt=function(e){return parseInt(e||"",10)||0},Ri=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Nt(n),Nt(o),Nt(r)]},Mi=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Oi;var t=Ri(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},Li=sr(),Me="data-scroll-locked",Ni=function(e,t,n,o){var r=e.left,i=e.top,l=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(wi,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(s,"px ").concat(o,`;
  }
  body[`).concat(Me,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(pt,` {
    right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(mt,` {
    margin-right: `).concat(s,"px ").concat(o,`;
  }
  
  .`).concat(pt," .").concat(pt,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(mt," .").concat(mt,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Me,`] {
    `).concat(bi,": ").concat(s,`px;
  }
`)},Fn=function(){var e=parseInt(document.body.getAttribute(Me)||"0",10);return isFinite(e)?e:0},Fi=function(){b.useEffect(function(){return document.body.setAttribute(Me,(Fn()+1).toString()),function(){var e=Fn()-1;e<=0?document.body.removeAttribute(Me):document.body.setAttribute(Me,e.toString())}},[])},Wi=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,r=o===void 0?"margin":o;Fi();var i=b.useMemo(function(){return Mi(r)},[r]);return b.createElement(Li,{styles:Ni(i,!t,r,n?"":"!important")})},nn=!1;if(typeof window<"u")try{var lt=Object.defineProperty({},"passive",{get:function(){return nn=!0,!0}});window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{nn=!1}var Te=nn?{passive:!1}:!1,Pi=function(e){return e.tagName==="TEXTAREA"},cr=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Pi(e)&&n[t]==="visible")},Ui=function(e){return cr(e,"overflowY")},Qi=function(e){return cr(e,"overflowX")},Wn=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var r=ur(e,o);if(r){var i=dr(e,o),l=i[1],s=i[2];if(l>s)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},zi=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},Vi=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},ur=function(e,t){return e==="v"?Ui(t):Qi(t)},dr=function(e,t){return e==="v"?zi(t):Vi(t)},qi=function(e,t){return e==="h"&&t==="rtl"?-1:1},Hi=function(e,t,n,o,r){var i=qi(e,window.getComputedStyle(t).direction),l=i*o,s=n.target,d=t.contains(s),v=!1,h=l>0,f=0,c=0;do{var m=dr(e,s),u=m[0],p=m[1],w=m[2],C=p-w-i*u;(u||C)&&ur(e,s)&&(f+=C,c+=u),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!d&&s!==document.body||d&&(t.contains(s)||t===s));return(h&&Math.abs(f)<1||!h&&Math.abs(c)<1)&&(v=!0),v},st=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Pn=function(e){return[e.deltaX,e.deltaY]},Un=function(e){return e&&"current"in e?e.current:e},Ki=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Gi=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Yi=0,De=[];function Ji(e){var t=b.useRef([]),n=b.useRef([0,0]),o=b.useRef(),r=b.useState(Yi++)[0],i=b.useState(sr)[0],l=b.useRef(e);b.useEffect(function(){l.current=e},[e]),b.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var p=vi([e.lockRef.current],(e.shards||[]).map(Un),!0).filter(Boolean);return p.forEach(function(w){return w.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),p.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=b.useCallback(function(p,w){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!l.current.allowPinchZoom;var C=st(p),y=n.current,E="deltaX"in p?p.deltaX:y[0]-C[0],A="deltaY"in p?p.deltaY:y[1]-C[1],k,I=p.target,x=Math.abs(E)>Math.abs(A)?"h":"v";if("touches"in p&&x==="h"&&I.type==="range")return!1;var S=Wn(x,I);if(!S)return!0;if(S?k=x:(k=x==="v"?"h":"v",S=Wn(x,I)),!S)return!1;if(!o.current&&"changedTouches"in p&&(E||A)&&(o.current=k),!k)return!0;var T=o.current||k;return Hi(T,w,p,T==="h"?E:A)},[]),d=b.useCallback(function(p){var w=p;if(!(!De.length||De[De.length-1]!==i)){var C="deltaY"in w?Pn(w):st(w),y=t.current.filter(function(k){return k.name===w.type&&(k.target===w.target||w.target===k.shadowParent)&&Ki(k.delta,C)})[0];if(y&&y.should){w.cancelable&&w.preventDefault();return}if(!y){var E=(l.current.shards||[]).map(Un).filter(Boolean).filter(function(k){return k.contains(w.target)}),A=E.length>0?s(w,E[0]):!l.current.noIsolation;A&&w.cancelable&&w.preventDefault()}}},[]),v=b.useCallback(function(p,w,C,y){var E={name:p,delta:w,target:C,should:y,shadowParent:Xi(C)};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(A){return A!==E})},1)},[]),h=b.useCallback(function(p){n.current=st(p),o.current=void 0},[]),f=b.useCallback(function(p){v(p.type,Pn(p),p.target,s(p,e.lockRef.current))},[]),c=b.useCallback(function(p){v(p.type,st(p),p.target,s(p,e.lockRef.current))},[]);b.useEffect(function(){return De.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:c}),document.addEventListener("wheel",d,Te),document.addEventListener("touchmove",d,Te),document.addEventListener("touchstart",h,Te),function(){De=De.filter(function(p){return p!==i}),document.removeEventListener("wheel",d,Te),document.removeEventListener("touchmove",d,Te),document.removeEventListener("touchstart",h,Te)}},[]);var m=e.removeScrollBar,u=e.inert;return b.createElement(b.Fragment,null,u?b.createElement(i,{styles:Gi(r)}):null,m?b.createElement(Wi,{gapMode:e.gapMode}):null)}function Xi(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Zi=ji(lr,Ji);var fr=b.forwardRef(function(e,t){return b.createElement(jt,pe({},e,{ref:t,sideCar:Zi}))});fr.classNames=jt.classNames;function Qn(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function $i(e,t){var n=e;for(var o of t){if(!(o in n))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));n=n[o]}return n}function pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o={};for(var r in e){var i=e[r],l=[...n,r];typeof i=="string"||typeof i=="number"||i==null?o[r]=t(i,l):typeof i=="object"&&!Array.isArray(i)&&(o[r]=pr(i,t,l))}return o}function zn(e,t){var n={};if(typeof t=="object"){var o=e;pr(t,(s,d)=>{if(s!=null){var v=$i(o,d);n[Qn(v)]=String(s)}})}else{var r=e;for(var i in r){var l=r[i];l!=null&&(n[Qn(i)]=l)}}return Object.defineProperty(n,"toString",{value:function(){return Object.keys(this).map(d=>"".concat(d,":").concat(this[d])).join(";")},writable:!1}),n}var qe={exports:{}},el=qe.exports,Vn;function tl(){return Vn||(Vn=1,function(e,t){(function(n,o){var r="1.0.40",i="",l="?",s="function",d="undefined",v="object",h="string",f="major",c="model",m="name",u="type",p="vendor",w="version",C="architecture",y="console",E="mobile",A="tablet",k="smarttv",I="wearable",x="embedded",S=500,T="Amazon",F="Apple",q="ASUS",H="BlackBerry",z="Browser",oe="Chrome",ge="Edge",ee="Firefox",se="Google",W="Huawei",re="LG",te="Microsoft",Ce="Motorola",Be="Opera",ye="Samsung",D="Sharp",R="Sony",G="Xiaomi",V="Zebra",_e="Facebook",Pe="Chromium OS",nt="Mac OS",An=" Browser",aa=function(L,P){var M={};for(var Q in L)P[Q]&&P[Q].length%2===0?M[Q]=P[Q].concat(L[Q]):M[Q]=L[Q];return M},ot=function(L){for(var P={},M=0;M<L.length;M++)P[L[M].toUpperCase()]=L[M];return P},En=function(L,P){return typeof L===h?Ie(P).indexOf(Ie(L))!==-1:!1},Ie=function(L){return L.toLowerCase()},ia=function(L){return typeof L===h?L.replace(/[^\d\.]/g,i).split(".")[0]:o},Tt=function(L,P){if(typeof L===h)return L=L.replace(/^\s\s*/,i),typeof P===d?L:L.substring(0,S)},Ue=function(L,P){for(var M=0,Q,ve,de,U,O,fe;M<P.length&&!O;){var Dt=P[M],jn=P[M+1];for(Q=ve=0;Q<Dt.length&&!O&&Dt[Q];)if(O=Dt[Q++].exec(L),O)for(de=0;de<jn.length;de++)fe=O[++ve],U=jn[de],typeof U===v&&U.length>0?U.length===2?typeof U[1]==s?this[U[0]]=U[1].call(this,fe):this[U[0]]=U[1]:U.length===3?typeof U[1]===s&&!(U[1].exec&&U[1].test)?this[U[0]]=fe?U[1].call(this,fe,U[2]):o:this[U[0]]=fe?fe.replace(U[1],U[2]):o:U.length===4&&(this[U[0]]=fe?U[3].call(this,fe.replace(U[1],U[2])):o):this[U]=fe||o;M+=2}},rt=function(L,P){for(var M in P)if(typeof P[M]===v&&P[M].length>0){for(var Q=0;Q<P[M].length;Q++)if(En(P[M][Q],L))return M===l?o:M}else if(En(P[M],L))return M===l?o:M;return P.hasOwnProperty("*")?P["*"]:L},la={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},xn={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},kn={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[m,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[m,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[m,w],[/opios[\/ ]+([\w\.]+)/i],[w,[m,Be+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[w,[m,Be+" GX"]],[/\bopr\/([\w\.]+)/i],[w,[m,Be]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[w,[m,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[w,[m,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[m,w],[/quark(?:pc)?\/([-\w\.]+)/i],[w,[m,"Quark"]],[/\bddg\/([\w\.]+)/i],[w,[m,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[m,"UC"+z]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[w,[m,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[m,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[m,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[w,[m,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[w,[m,"Smart Lenovo "+z]],[/(avast|avg)\/([\w\.]+)/i],[[m,/(.+)/,"$1 Secure "+z],w],[/\bfocus\/([\w\.]+)/i],[w,[m,ee+" Focus"]],[/\bopt\/([\w\.]+)/i],[w,[m,Be+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[m,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[m,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[m,Be+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[m,"MIUI"+An]],[/fxios\/([\w\.-]+)/i],[w,[m,ee]],[/\bqihoobrowser\/?([\w\.]*)/i],[w,[m,"360"]],[/\b(qq)\/([\w\.]+)/i],[[m,/(.+)/,"$1Browser"],w],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[m,/(.+)/,"$1"+An],w],[/samsungbrowser\/([\w\.]+)/i],[w,[m,ye+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[w,[m,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[m,"Sogou Mobile"],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[m,w],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[m],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[w,m],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[m,_e],w],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[m,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[m,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[w,[m,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[m,oe+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[m,oe+" WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[m,"Android "+z]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[m,w],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[w,[m,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[w,m],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[m,[w,rt,la]],[/(webkit|khtml)\/([\w\.]+)/i],[m,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[m,"Netscape"],w],[/(wolvic|librewolf)\/([\w\.]+)/i],[m,w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[m,ee+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[m,[w,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[m,[w,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[C,"amd64"]],[/(ia32(?=;))/i],[[C,Ie]],[/((?:i[346]|x)86)[;\)]/i],[[C,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/windows (ce|mobile); ppc;/i],[[C,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[C,/ower/,i,Ie]],[/(sun4\w)[;\)]/i],[[C,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[C,Ie]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[p,ye],[u,A]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[c,[p,ye],[u,E]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[p,F],[u,E]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[p,F],[u,A]],[/(macintosh);/i],[c,[p,F]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[p,D],[u,E]],[/(?:honor)([-\w ]+)[;\)]/i],[c,[p,"Honor"],[u,E]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[p,W],[u,A]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[p,W],[u,E]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[c,/_/g," "],[p,G],[u,E]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[p,G],[u,A]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[p,"OPPO"],[u,E]],[/\b(opd2\d{3}a?) bui/i],[c,[p,"OPPO"],[u,A]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[p,"Vivo"],[u,E]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[c,[p,"Realme"],[u,E]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[p,Ce],[u,E]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[p,Ce],[u,A]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[p,re],[u,A]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[p,re],[u,E]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[p,"Lenovo"],[u,A]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[p,"Nokia"],[u,E]],[/(pixel c)\b/i],[c,[p,se],[u,A]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[p,se],[u,E]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[p,R],[u,E]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[p,R],[u,A]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[p,"OnePlus"],[u,E]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[p,T],[u,A]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[p,T],[u,E]],[/(playbook);[-\w\),; ]+(rim)/i],[c,p,[u,A]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[p,H],[u,E]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[p,q],[u,A]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[p,q],[u,E]],[/(nexus 9)/i],[c,[p,"HTC"],[u,A]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[c,/_/g," "],[u,E]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[c,[p,"TCL"],[u,A]],[/(itel) ((\w+))/i],[[p,Ie],c,[u,rt,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[p,"Acer"],[u,A]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[p,"Meizu"],[u,E]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[c,[p,"Ulefone"],[u,E]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[c,[p,"Energizer"],[u,E]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[c,[p,"Cat"],[u,E]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[c,[p,"Smartfren"],[u,E]],[/droid.+; (a(?:015|06[35]|142p?))/i],[c,[p,"Nothing"],[u,E]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,c,[u,E]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,c,[u,A]],[/(surface duo)/i],[c,[p,te],[u,A]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[p,"Fairphone"],[u,E]],[/(u304aa)/i],[c,[p,"AT&T"],[u,E]],[/\bsie-(\w*)/i],[c,[p,"Siemens"],[u,E]],[/\b(rct\w+) b/i],[c,[p,"RCA"],[u,A]],[/\b(venue[\d ]{2,7}) b/i],[c,[p,"Dell"],[u,A]],[/\b(q(?:mv|ta)\w+) b/i],[c,[p,"Verizon"],[u,A]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[p,"Barnes & Noble"],[u,A]],[/\b(tm\d{3}\w+) b/i],[c,[p,"NuVision"],[u,A]],[/\b(k88) b/i],[c,[p,"ZTE"],[u,A]],[/\b(nx\d{3}j) b/i],[c,[p,"ZTE"],[u,E]],[/\b(gen\d{3}) b.+49h/i],[c,[p,"Swiss"],[u,E]],[/\b(zur\d{3}) b/i],[c,[p,"Swiss"],[u,A]],[/\b((zeki)?tb.*\b) b/i],[c,[p,"Zeki"],[u,A]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],c,[u,A]],[/\b(ns-?\w{0,9}) b/i],[c,[p,"Insignia"],[u,A]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[p,"NextBook"],[u,A]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],c,[u,E]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],c,[u,E]],[/\b(ph-1) /i],[c,[p,"Essential"],[u,E]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[p,"Envizen"],[u,A]],[/\b(trio[-\w\. ]+) b/i],[c,[p,"MachSpeed"],[u,A]],[/\btu_(1491) b/i],[c,[p,"Rotor"],[u,A]],[/(shield[\w ]+) b/i],[c,[p,"Nvidia"],[u,A]],[/(sprint) (\w+)/i],[p,c,[u,E]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[p,te],[u,E]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[p,V],[u,A]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[p,V],[u,E]],[/smart-tv.+(samsung)/i],[p,[u,k]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[p,ye],[u,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,re],[u,k]],[/(apple) ?tv/i],[p,[c,F+" TV"],[u,k]],[/crkey/i],[[c,oe+"cast"],[p,se],[u,k]],[/droid.+aft(\w+)( bui|\))/i],[c,[p,T],[u,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[p,D],[u,k]],[/(bravia[\w ]+)( bui|\))/i],[c,[p,R],[u,k]],[/(mitv-\w{5}) bui/i],[c,[p,G],[u,k]],[/Hbbtv.*(technisat) (.*);/i],[p,c,[u,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,Tt],[c,Tt],[u,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,c,[u,y]],[/droid.+; (shield) bui/i],[c,[p,"Nvidia"],[u,y]],[/(playstation [345portablevi]+)/i],[c,[p,R],[u,y]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[p,te],[u,y]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[c,[p,ye],[u,I]],[/((pebble))app/i],[p,c,[u,I]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[p,F],[u,I]],[/droid.+; (glass) \d/i],[c,[p,se],[u,I]],[/droid.+; (wt63?0{2,3})\)/i],[c,[p,V],[u,I]],[/droid.+; (glass) \d/i],[c,[p,se],[u,I]],[/(pico) (4|neo3(?: link|pro)?)/i],[p,c,[u,I]],[/; (quest( \d| pro)?)/i],[c,[p,_e],[u,I]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[u,x]],[/(aeobc)\b/i],[c,[p,T],[u,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[c,[u,E]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[u,A]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,A]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,E]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[m,ge+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[m,w],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[m,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[m,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,m]],os:[[/microsoft (windows) (vista|xp)/i],[m,w],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[m,[w,rt,xn]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[w,rt,xn],[m,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[m,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[m,nt],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[w,m],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[m,w],[/\(bb(10);/i],[w,[m,H]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[m,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[m,ee+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[m,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[w,[m,"watchOS"]],[/crkey\/([\d\.]+)/i],[w,[m,oe+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[m,Pe],w],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[m,w],[/(sunos) ?([\w\.\d]*)/i],[[m,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[m,w]]},ue=function(L,P){if(typeof L===v&&(P=L,L=o),!(this instanceof ue))return new ue(L,P).getResult();var M=typeof n!==d&&n.navigator?n.navigator:o,Q=L||(M&&M.userAgent?M.userAgent:i),ve=M&&M.userAgentData?M.userAgentData:o,de=P?aa(kn,P):kn,U=M&&M.userAgent==Q;return this.getBrowser=function(){var O={};return O[m]=o,O[w]=o,Ue.call(O,Q,de.browser),O[f]=ia(O[w]),U&&M&&M.brave&&typeof M.brave.isBrave==s&&(O[m]="Brave"),O},this.getCPU=function(){var O={};return O[C]=o,Ue.call(O,Q,de.cpu),O},this.getDevice=function(){var O={};return O[p]=o,O[c]=o,O[u]=o,Ue.call(O,Q,de.device),U&&!O[u]&&ve&&ve.mobile&&(O[u]=E),U&&O[c]=="Macintosh"&&M&&typeof M.standalone!==d&&M.maxTouchPoints&&M.maxTouchPoints>2&&(O[c]="iPad",O[u]=A),O},this.getEngine=function(){var O={};return O[m]=o,O[w]=o,Ue.call(O,Q,de.engine),O},this.getOS=function(){var O={};return O[m]=o,O[w]=o,Ue.call(O,Q,de.os),U&&!O[m]&&ve&&ve.platform&&ve.platform!="Unknown"&&(O[m]=ve.platform.replace(/chrome os/i,Pe).replace(/macos/i,nt)),O},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return Q},this.setUA=function(O){return Q=typeof O===h&&O.length>S?Tt(O,S):O,this},this.setUA(Q),this};ue.VERSION=r,ue.BROWSER=ot([m,w,f]),ue.CPU=ot([C]),ue.DEVICE=ot([c,p,u,y,E,k,A,I,x]),ue.ENGINE=ue.OS=ot([m,w]),e.exports&&(t=e.exports=ue),t.UAParser=ue;var Se=typeof n!==d&&(n.jQuery||n.Zepto);if(Se&&!Se.ua){var at=new ue;Se.ua=at.getResult(),Se.ua.get=function(){return at.getUA()},Se.ua.set=function(L){at.setUA(L);var P=at.getResult();for(var M in P)Se.ua[M]=P[M]}}})(typeof window=="object"?window:el)}(qe,qe.exports)),qe.exports}var nl=tl();/*!
Copyright (c) 2023 Paul Miller (paulmillr.com)
The library paulmillr-qr is dual-licensed under the Apache 2.0 OR MIT license.
You can select a license of your choice.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ze={newline:10,reset:27};function ol(e){if(!Number.isSafeInteger(e))throw new Error(`integer expected: ${e}`)}function rl(e){if(!Number.isSafeInteger(e)||e<1||e>40)throw new Error(`Invalid version=${e}. Expected number [1..40]`)}function Ae(e,t){return e.toString(2).padStart(t,"0")}function qn(e,t){const n=e%t;return n>=0?n:t+n}function le(e,t){return new Array(e).fill(t)}function Hn(...e){let t=0;for(const o of e)t=Math.max(t,o.length);const n=[];for(let o=0;o<t;o++)for(const r of e)o>=r.length||n.push(r[o]);return new Uint8Array(n)}function Kn(e,t,n){if(n<0||n+t.length>e.length)return!1;for(let o=0;o<t.length;o++)if(t[o]!==e[n+o])return!1;return!0}function al(){let e,t=1/0;return{add(n,o){n>=t||(e=o,t=n)},get:()=>e,score:()=>t}}function Gn(e){return{has:t=>e.includes(t),decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const o=e.indexOf(n);if(o===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return o})},encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(ol(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})}}}class ie{constructor(t,n){it(this,"data");it(this,"height");it(this,"width");const{height:o,width:r}=ie.size(t);this.data=n||Array.from({length:o},()=>le(r,void 0)),this.height=o,this.width=r}static size(t,n){if(typeof t=="number"&&(t={height:t,width:t}),!Number.isSafeInteger(t.height)&&t.height!==1/0)throw new Error(`Bitmap: invalid height=${t.height} (${typeof t.height})`);if(!Number.isSafeInteger(t.width)&&t.width!==1/0)throw new Error(`Bitmap: invalid width=${t.width} (${typeof t.width})`);return n!==void 0&&(t={width:Math.min(t.width,n.width),height:Math.min(t.height,n.height)}),t}static fromString(t){t=t.replace(/^\n+/g,"").replace(/\n+$/g,"");const n=t.split(String.fromCharCode(ze.newline)),o=n.length,r=new Array(o);let i;for(const l of n){const s=l.split("").map(d=>{if(d==="X")return!0;if(d===" ")return!1;if(d!=="?")throw new Error(`Bitmap.fromString: unknown symbol=${d}`)});if(i&&s.length!==i)throw new Error(`Bitmap.fromString different row sizes: width=${i} cur=${s.length}`);i=s.length,r.push(s)}return i||(i=0),new ie({height:o,width:i},r)}point(t){return this.data[t.y][t.x]}isInside(t){return 0<=t.x&&t.x<this.width&&0<=t.y&&t.y<this.height}size(t){if(!t)return{height:this.height,width:this.width};const{x:n,y:o}=this.xy(t);return{height:this.height-o,width:this.width-n}}xy(t){if(typeof t=="number"&&(t={x:t,y:t}),!Number.isSafeInteger(t.x))throw new Error(`Bitmap: invalid x=${t.x}`);if(!Number.isSafeInteger(t.y))throw new Error(`Bitmap: invalid y=${t.y}`);return t.x=qn(t.x,this.width),t.y=qn(t.y,this.height),t}rect(t,n,o){const{x:r,y:i}=this.xy(t),{height:l,width:s}=ie.size(n,this.size({x:r,y:i}));for(let d=0;d<l;d++)for(let v=0;v<s;v++)this.data[i+d][r+v]=typeof o=="function"?o({x:v,y:d},this.data[i+d][r+v]):o;return this}rectRead(t,n,o){return this.rect(t,n,(r,i)=>(o(r,i),i))}hLine(t,n,o){return this.rect(t,{width:n,height:1},o)}vLine(t,n,o){return this.rect(t,{width:1,height:n},o)}border(t=2,n){const o=this.height+2*t,r=this.width+2*t,i=le(t,n),l=Array.from({length:t},()=>le(r,n));return new ie({height:o,width:r},[...l,...this.data.map(s=>[...i,...s,...i]),...l])}embed(t,n){return this.rect(t,n.size(),({x:o,y:r})=>n.data[r][o])}rectSlice(t,n=this.size()){const o=new ie(ie.size(n,this.size(this.xy(t))));return this.rect(t,n,({x:r,y:i},l)=>o.data[i][r]=l),o}inverse(){const{height:t,width:n}=this;return new ie({height:n,width:t}).rect({x:0,y:0},1/0,({x:r,y:i})=>this.data[r][i])}scale(t){if(!Number.isSafeInteger(t)||t>1024)throw new Error(`invalid scale factor: ${t}`);const{height:n,width:o}=this;return new ie({height:t*n,width:t*o}).rect({x:0,y:0},1/0,({x:i,y:l})=>this.data[Math.floor(l/t)][Math.floor(i/t)])}clone(){return new ie(this.size()).rect({x:0,y:0},this.size(),({x:n,y:o})=>this.data[o][n])}assertDrawn(){this.rectRead(0,1/0,(t,n)=>{if(typeof n!="boolean")throw new Error(`Invalid color type=${typeof n}`)})}toString(){return this.data.map(t=>t.map(n=>n===void 0?"?":n?"X":" ").join("")).join(String.fromCharCode(ze.newline))}toASCII(){const{height:t,width:n,data:o}=this;let r="";for(let i=0;i<t;i+=2){for(let l=0;l<n;l++){const s=o[i][l],d=i+1>=t?!0:o[i+1][l];!s&&!d?r+="█":!s&&d?r+="▀":s&&!d?r+="▄":s&&d&&(r+=" ")}r+=String.fromCharCode(ze.newline)}return r}toTerm(){const t=String.fromCharCode(ze.reset),n=t+"[0m",o=t+"[1;47m  "+n,r=t+"[40m  "+n;return this.data.map(i=>i.map(l=>l?r:o).join("")).join(String.fromCharCode(ze.newline))}toSVG(t=!0){let n=`<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`,o="",r;return this.rectRead(0,1/0,(i,l)=>{if(!l)return;const{x:s,y:d}=i;if(!t){n+=`<rect x="${s}" y="${d}" width="1" height="1" />`;return}let v=`M${s} ${d}`;if(r){const f=`m${s-r.x} ${d-r.y}`;f.length<=v.length&&(v=f)}const h=s<10?`H${s}`:"h-1";o+=`${v}h1v1${h}Z`,r=i}),t&&(n+=`<path d="${o}"/>`),n+="</svg>",n}toGIF(){const t=s=>[s&255,s>>>8&255],n=[...t(this.width),...t(this.height)],o=[];this.rectRead(0,1/0,(s,d)=>o.push(+(d===!0)));const r=126,i=[71,73,70,56,55,97,...n,246,0,0,255,255,255,...le(3*127,0),44,0,0,0,0,...n,0,7],l=Math.floor(o.length/r);for(let s=0;s<l;s++)i.push(r+1,128,...o.slice(r*s,r*(s+1)).map(d=>+d));return i.push(o.length%r+1,128,...o.slice(l*r).map(s=>+s)),i.push(1,129,0,59),new Uint8Array(i)}toImage(t=!1){const{height:n,width:o}=this.size(),r=new Uint8Array(n*o*(t?3:4));let i=0;for(let l=0;l<n;l++)for(let s=0;s<o;s++){const d=this.data[l][s]?0:255;r[i++]=d,r[i++]=d,r[i++]=d,t||(r[i++]=255)}return{height:n,width:o,data:r}}}const Yn=["low","medium","quartile","high"],Jn=["numeric","alphanumeric","byte","kanji","eci"],il=[26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],ll={low:[7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],medium:[10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],quartile:[13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],high:[17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]},sl={low:[1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],medium:[1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],quartile:[1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],high:[1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]},$={size:{encode:e=>21+4*(e-1),decode:e=>(e-17)/4},sizeType:e=>Math.floor((e+7)/17),alignmentPatterns(e){if(e===1)return[];const t=6,n=$.size.encode(e)-t-1,o=n-t,r=Math.ceil(o/28);let i=Math.floor(o/r);i%2?i+=1:o%r*2>=r&&(i+=2);const l=[t];for(let s=1;s<r;s++)l.push(n-(r-s)*i);return l.push(n),l},ECCode:{low:1,medium:0,quartile:3,high:2},formatMask:21522,formatBits(e,t){const n=$.ECCode[e]<<3|t;let o=n;for(let r=0;r<10;r++)o=o<<1^(o>>9)*1335;return(n<<10|o)^$.formatMask},versionBits(e){let t=e;for(let n=0;n<12;n++)t=t<<1^(t>>11)*7973;return e<<12|t},alphabet:{numeric:Gn("0123456789"),alphanumerc:Gn("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")},lengthBits(e,t){return{numeric:[10,12,14],alphanumeric:[9,11,13],byte:[8,16,16],kanji:[8,10,12],eci:[0,0,0]}[t][$.sizeType(e)]},modeBits:{numeric:"0001",alphanumeric:"0010",byte:"0100",kanji:"1000",eci:"0111"},capacity(e,t){const n=il[e-1],o=ll[t][e-1],r=sl[t][e-1],i=Math.floor(n/r)-o,l=r-n%r;return{words:o,numBlocks:r,shortBlocks:l,blockLen:i,capacity:(n-o*r)*8,total:(o+i)*r+r-l}}},dn=[(e,t)=>(e+t)%2==0,(e,t)=>t%2==0,(e,t)=>e%3==0,(e,t)=>(e+t)%3==0,(e,t)=>(Math.floor(t/2)+Math.floor(e/3))%2==0,(e,t)=>e*t%2+e*t%3==0,(e,t)=>(e*t%2+e*t%3)%2==0,(e,t)=>((e+t)%2+e*t%3)%2==0],B={tables:(e=>{const t=le(256,0),n=le(256,0);for(let o=0,r=1;o<256;o++)t[o]=r,n[r]=o,r<<=1,r&256&&(r^=e);return{exp:t,log:n}})(285),exp:e=>B.tables.exp[e],log(e){if(e===0)throw new Error(`GF.log: invalid arg=${e}`);return B.tables.log[e]%255},mul(e,t){return e===0||t===0?0:B.tables.exp[(B.tables.log[e]+B.tables.log[t])%255]},add:(e,t)=>e^t,pow:(e,t)=>B.tables.exp[B.tables.log[e]*t%255],inv(e){if(e===0)throw new Error(`GF.inverse: invalid arg=${e}`);return B.tables.exp[255-B.tables.log[e]]},polynomial(e){if(e.length==0)throw new Error("GF.polymomial: invalid length");if(e[0]!==0)return e;let t=0;for(;t<e.length-1&&e[t]==0;t++);return e.slice(t)},monomial(e,t){if(e<0)throw new Error(`GF.monomial: invalid degree=${e}`);if(t==0)return[0];let n=le(e+1,0);return n[0]=t,B.polynomial(n)},degree:e=>e.length-1,coefficient:(e,t)=>e[B.degree(e)-t],mulPoly(e,t){if(e[0]===0||t[0]===0)return[0];const n=le(e.length+t.length-1,0);for(let o=0;o<e.length;o++)for(let r=0;r<t.length;r++)n[o+r]=B.add(n[o+r],B.mul(e[o],t[r]));return B.polynomial(n)},mulPolyScalar(e,t){if(t==0)return[0];if(t==1)return e;const n=le(e.length,0);for(let o=0;o<e.length;o++)n[o]=B.mul(e[o],t);return B.polynomial(n)},mulPolyMonomial(e,t,n){if(t<0)throw new Error("GF.mulPolyMonomial: invalid degree");if(n==0)return[0];const o=le(e.length+t,0);for(let r=0;r<e.length;r++)o[r]=B.mul(e[r],n);return B.polynomial(o)},addPoly(e,t){if(e[0]===0)return t;if(t[0]===0)return e;let n=e,o=t;n.length>o.length&&([n,o]=[o,n]);let r=le(o.length,0),i=o.length-n.length,l=o.slice(0,i);for(let s=0;s<l.length;s++)r[s]=l[s];for(let s=i;s<o.length;s++)r[s]=B.add(n[s-i],o[s]);return B.polynomial(r)},remainderPoly(e,t){const n=Array.from(e);for(let o=0;o<e.length-t.length+1;o++){const r=n[o];if(r!==0)for(let i=1;i<t.length;i++)t[i]!==0&&(n[o+i]=B.add(n[o+i],B.mul(t[i],r)))}return n.slice(e.length-t.length+1,n.length)},divisorPoly(e){let t=[1];for(let n=0;n<e;n++)t=B.mulPoly(t,[1,B.pow(2,n)]);return t},evalPoly(e,t){if(t==0)return B.coefficient(e,0);let n=e[0];for(let o=1;o<e.length;o++)n=B.add(B.mul(t,n),e[o]);return n},euclidian(e,t,n){B.degree(e)<B.degree(t)&&([e,t]=[t,e]);let o=e,r=t,i=[0],l=[1];for(;2*B.degree(r)>=n;){let v=o,h=i;if(o=r,i=l,o[0]===0)throw new Error("rLast[0] === 0");r=v;let f=[0];const c=B.inv(o[0]);for(;B.degree(r)>=B.degree(o)&&r[0]!==0;){const m=B.degree(r)-B.degree(o),u=B.mul(r[0],c);f=B.addPoly(f,B.monomial(m,u)),r=B.addPoly(r,B.mulPolyMonomial(o,m,u))}if(f=B.mulPoly(f,i),l=B.addPoly(f,h),B.degree(r)>=B.degree(o))throw new Error(`Division failed r: ${r}, rLast: ${o}`)}const s=B.coefficient(l,0);if(s==0)throw new Error("sigmaTilde(0) was zero");const d=B.inv(s);return[B.mulPolyScalar(l,d),B.mulPolyScalar(r,d)]}};function cl(e){return{encode(t){const n=B.divisorPoly(e),o=Array.from(t);return o.push(...n.slice(0,-1).fill(0)),Uint8Array.from(B.remainderPoly(o,n))},decode(t){const n=t.slice(),o=B.polynomial(Array.from(t));let r=le(e,0),i=!1;for(let f=0;f<e;f++){const c=B.evalPoly(o,B.exp(f));r[r.length-1-f]=c,c!==0&&(i=!0)}if(!i)return n;r=B.polynomial(r);const l=B.monomial(e,1),[s,d]=B.euclidian(l,r,e),v=le(B.degree(s),0);let h=0;for(let f=1;f<256&&h<v.length;f++)B.evalPoly(s,f)===0&&(v[h++]=B.inv(f));if(h!==v.length)throw new Error("RS.decode: invalid errors number");for(let f=0;f<v.length;f++){const c=n.length-1-B.log(v[f]);if(c<0)throw new Error("RS.decode: invalid error location");const m=B.inv(v[f]);let u=1;for(let p=0;p<v.length;p++)f!==p&&(u=B.mul(u,B.add(1,B.mul(v[p],m))));n[c]=B.add(n[c],B.mul(B.evalPoly(d,m),B.inv(u)))}return n}}}function ul(e,t){const{words:n,shortBlocks:o,numBlocks:r,blockLen:i,total:l}=$.capacity(e,t),s=cl(n);return{encode(d){const v=[],h=[];for(let u=0;u<r;u++){const p=u<o,w=i+(p?0:1);v.push(d.subarray(0,w)),h.push(s.encode(d.subarray(0,w))),d=d.subarray(w)}const f=Hn(...v),c=Hn(...h),m=new Uint8Array(f.length+c.length);return m.set(f),m.set(c,f.length),m},decode(d){if(d.length!==l)throw new Error(`interleave.decode: len(data)=${d.length}, total=${l}`);const v=[];for(let c=0;c<r;c++){const m=c<o;v.push(new Uint8Array(n+i+(m?0:1)))}let h=0;for(let c=0;c<i;c++)for(let m=0;m<r;m++)v[m][c]=d[h++];for(let c=o;c<r;c++)v[c][i]=d[h++];for(let c=i;c<i+n;c++)for(let m=0;m<r;m++){const u=m<o;v[m][c+(u?0:1)]=d[h++]}const f=[];for(const c of v)f.push(...Array.from(s.decode(c)).slice(0,-n));return Uint8Array.from(f)}}}function dl(e,t,n,o=!1){const r=$.size.encode(e);let i=new ie(r+2);const l=new ie(3).rect(0,3,!0).border(1,!1).border(1,!0).border(1,!1);i=i.embed(0,l).embed({x:-l.width,y:0},l).embed({x:0,y:-l.height},l),i=i.rectSlice(1,r);const s=new ie(1).rect(0,1,!0).border(1,!1).border(1,!0),d=$.alignmentPatterns(e);for(const v of d)for(const h of d)i.data[v][h]===void 0&&i.embed({x:h-2,y:v-2},s);i=i.hLine({x:0,y:6},1/0,({x:v},h)=>h===void 0?v%2==0:h).vLine({x:6,y:0},1/0,({y:v},h)=>h===void 0?v%2==0:h);{const v=$.formatBits(t,n),h=f=>!o&&(v>>f&1)==1;for(let f=0;f<6;f++)i.data[f][8]=h(f);for(let f=6;f<8;f++)i.data[f+1][8]=h(f);for(let f=8;f<15;f++)i.data[r-15+f][8]=h(f);for(let f=0;f<8;f++)i.data[8][r-f-1]=h(f);for(let f=8;f<9;f++)i.data[8][15-f-1+1]=h(f);for(let f=9;f<15;f++)i.data[8][15-f-1]=h(f);i.data[r-8][8]=!o}if(e>=7){const v=$.versionBits(e);for(let h=0;h<18;h+=1){const f=!o&&(v>>h&1)==1,c=Math.floor(h/3),m=h%3+r-8-3;i.data[c][m]=f,i.data[m][c]=f}}return i}function fl(e,t,n){const o=e.height,r=dn[t];let i=-1,l=o-1;for(let s=o-1;s>0;s-=2){for(s==6&&(s=5);;l+=i){for(let d=0;d<2;d+=1){const v=s-d;e.data[l][v]===void 0&&n(v,l,r(v,l))}if(l+i<0||l+i>=o)break}i=-i}}function pl(e){let t="numeric";for(let n of e)if(!$.alphabet.numeric.has(n)&&(t="alphanumeric",!$.alphabet.alphanumerc.has(n)))return"byte";return t}function ml(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function Xn(e,t,n,o){let r="",i=n.length;if(o==="numeric"){const f=$.alphabet.numeric.decode(n.split("")),c=f.length;for(let m=0;m<c-2;m+=3)r+=Ae(f[m]*100+f[m+1]*10+f[m+2],10);c%3===1?r+=Ae(f[c-1],4):c%3===2&&(r+=Ae(f[c-2]*10+f[c-1],7))}else if(o==="alphanumeric"){const f=$.alphabet.alphanumerc.decode(n.split("")),c=f.length;for(let m=0;m<c-1;m+=2)r+=Ae(f[m]*45+f[m+1],11);c%2==1&&(r+=Ae(f[c-1],6))}else if(o==="byte"){const f=ml(n);i=f.length,r=Array.from(f).map(c=>Ae(c,8)).join("")}else throw new Error("encode: unsupported type");const{capacity:l}=$.capacity(e,t),s=Ae(i,$.lengthBits(e,o));let d=$.modeBits[o]+s+r;if(d.length>l)throw new Error("Capacity overflow");d+="0".repeat(Math.min(4,Math.max(0,l-d.length))),d.length%8&&(d+="0".repeat(8-d.length%8));const v="1110110000010001";for(let f=0;d.length!==l;f++)d+=v[f%v.length];const h=Uint8Array.from(d.match(/(.{8})/g).map(f=>+`0b${f}`));return ul(e,t).encode(h)}function Zn(e,t,n,o,r=!1){const i=dl(e,t,o,r);let l=0;const s=8*n.length;if(fl(i,o,(d,v,h)=>{let f=!1;l<s&&(f=(n[l>>>3]>>(7-l&7)&1)!==0,l++),i.data[v][d]=f!==h}),l!==s)throw new Error("QR: bytes left after draw");return i}function hl(e){const t=e.inverse(),n=m=>{let u=0;for(let p=0,w=1,C=void 0;p<m.length;p++)C===m[p]&&(w++,p!==m.length-1)||(w>=5&&(u+=3+(w-5)),C=m[p],w=1);return u};let o=0;e.data.forEach(m=>o+=n(m)),t.data.forEach(m=>o+=n(m));let r=0,i=e.data;const l=e.width-1,s=e.height-1;for(let m=0;m<l;m++)for(let u=0;u<s;u++){const p=m+1,w=u+1;i[m][u]===i[p][u]&&i[p][u]===i[m][w]&&i[p][u]===i[p][w]&&(r+=3)}const d=m=>{const u=[!0,!1,!0,!0,!0,!1,!0],p=[!1,!1,!1,!1],w=[...u,...p],C=[...p,...u];let y=0;for(let E=0;E<m.length;E++)Kn(m,w,E)&&(y+=40),Kn(m,C,E)&&(y+=40);return y};let v=0;for(const m of e.data)v+=d(m);for(const m of t.data)v+=d(m);let h=0;e.rectRead(0,1/0,(m,u)=>h+=u?1:0);const f=h/(e.height*e.width)*100,c=10*Math.floor(Math.abs(f-50)/5);return o+r+v+c}function gl(e,t,n,o){if(o===void 0){const r=al();for(let i=0;i<dn.length;i++)r.add(hl(Zn(e,t,n,i,!0)),i);o=r.get()}if(o===void 0)throw new Error("Cannot find mask");return Zn(e,t,n,o)}function vl(e){if(!Yn.includes(e))throw new Error(`Invalid error correction mode=${e}. Expected: ${Yn}`)}function wl(e){if(!Jn.includes(e))throw new Error(`Encoding: invalid mode=${e}. Expected: ${Jn}`);if(e==="kanji"||e==="eci")throw new Error(`Encoding: ${e} is not supported (yet?).`)}function bl(e){if(![0,1,2,3,4,5,6,7].includes(e)||!dn[e])throw new Error(`Invalid mask=${e}. Expected number [0..7]`)}function Cl(e,t="raw",n={}){const o=n.ecc!==void 0?n.ecc:"medium";vl(o);const r=n.encoding!==void 0?n.encoding:pl(e);wl(r),n.mask!==void 0&&bl(n.mask);let i=n.version,l,s=new Error("Unknown error");if(i!==void 0)rl(i),l=Xn(i,o,e,r);else for(let h=1;h<=40;h++)try{l=Xn(h,o,e,r),i=h;break}catch(f){s=f}if(!i||!l)throw s;let d=gl(i,o,l,n.mask);d.assertDrawn();const v=n.border===void 0?2:n.border;if(!Number.isSafeInteger(v))throw new Error(`invalid border type=${typeof v}`);if(d=d.border(v,!1),n.scale!==void 0&&(d=d.scale(n.scale)),t==="raw")return d.data;if(t==="ascii")return d.toASCII();if(t==="svg")return d.toSVG(n.optimize);if(t==="gif")return d.toGIF();if(t==="term")return d.toTerm();throw new Error(`Unknown output: ${t}`)}function yl(e,t={}){const{errorCorrection:n,version:o}=t,r=Cl(e,"raw",{border:0,ecc:n,scale:1,version:o});return{edgeLength:r.length,finderLength:7,grid:r,value:e}}function me(e){const{arena:t,...n}=e;return K.jsxs(me.Root,{...n,children:[K.jsx(me.Finder,{}),K.jsx(me.Cells,{}),t&&K.jsx(me.Arena,{children:typeof t=="string"?K.jsx("img",{alt:"Arena",src:t,style:{borderRadius:1,height:"100%",objectFit:"cover",width:"100%"}}):t})]})}(function(e){e.Context=b.createContext(null);function t(i){const{children:l,size:s="100%",value:d,version:v,...h}=i,f=b.useMemo(()=>(b.Children.map(l,y=>!b.isValidElement(y)||typeof y.type=="string"?null:"displayName"in y.type&&y.type.displayName==="Arena"?!0:null)??[]).some(Boolean),[l]),c=b.useMemo(()=>{let y=i.errorCorrection;return f&&y==="low"&&(y="medium"),yl(d,{errorCorrection:y,version:v})},[d,f,i.errorCorrection,v]),m=1,u=c.edgeLength*m,p=c.finderLength*m/2,w=f?Math.floor(u/4):0,C=b.useMemo(()=>({arenaSize:w,cellSize:m,edgeSize:u,qrcode:c,finderSize:p}),[w,u,c,p]);return K.jsx(e.Context.Provider,{value:C,children:K.jsxs("svg",{...h,width:s,height:s,viewBox:`0 0 ${u} ${u}`,xmlns:"http://www.w3.org/2000/svg",children:[K.jsx("title",{children:"QR Code"}),l]})})}e.Root=t,function(i){i.displayName="Root"}(t=e.Root||(e.Root={}));function n(i){const{className:l,fill:s,innerClassName:d,radius:v=.25}=i,{cellSize:h,edgeSize:f,finderSize:c}=b.useContext(e.Context);function m({position:u}){let p=c-(c-h)-h/2;u==="top-right"&&(p=f-c-(c-h)-h/2);let w=c-(c-h)-h/2;u==="bottom-left"&&(w=f-c-(c-h)-h/2);let C=c-h*1.5;u==="top-right"&&(C=f-c-h*1.5);let y=c-h*1.5;return u==="bottom-left"&&(y=f-c-h*1.5),K.jsxs(K.Fragment,{children:[K.jsx("rect",{className:l,stroke:s??"currentColor",fill:"transparent",x:p,y:w,width:h+(c-h)*2,height:h+(c-h)*2,rx:2*v*(c-h),ry:2*v*(c-h),strokeWidth:h}),K.jsx("rect",{className:d,fill:s??"currentColor",x:C,y,width:h*3,height:h*3,rx:2*v*h,ry:2*v*h})]})}return K.jsxs(K.Fragment,{children:[K.jsx(m,{position:"top-left"}),K.jsx(m,{position:"top-right"}),K.jsx(m,{position:"bottom-left"})]})}e.Finder=n,function(i){i.displayName="Finder"}(n=e.Finder||(e.Finder={}));function o(i){const{className:l,fill:s="currentColor",inset:d=!0,radius:v=1}=i,{arenaSize:h,cellSize:f,qrcode:c}=b.useContext(e.Context),{edgeLength:m,finderLength:u}=c,p=b.useMemo(()=>{let w="";for(let C=0;C<c.grid.length;C++){const y=c.grid[C];if(y)for(let E=0;E<y.length;E++){if(!y[E])continue;const k=m/2-h/2,I=k+h;if(C>=k&&C<=I&&E>=k&&E<=I)continue;const x=C<u&&E<u,S=C<u&&E>=m-u,T=C>=m-u&&E<u;if(x||S||T)continue;const F=d?f*.1:0,q=(f-F*2)/2,H=E*f+f/2,z=C*f+f/2,oe=H-q,ge=H+q,ee=z-q,se=z+q,W=v*q;w+=[`M ${oe+W},${ee}`,`L ${ge-W},${ee}`,`A ${W},${W} 0 0,1 ${ge},${ee+W}`,`L ${ge},${se-W}`,`A ${W},${W} 0 0,1 ${ge-W},${se}`,`L ${oe+W},${se}`,`A ${W},${W} 0 0,1 ${oe},${se-W}`,`L ${oe},${ee+W}`,`A ${W},${W} 0 0,1 ${oe+W},${ee}`,"z"].join(" ")}}return w},[h,f,m,u,c.grid,d,v]);return K.jsx("path",{className:l,d:p,fill:s})}e.Cells=o,function(i){i.displayName="Cells"}(o=e.Cells||(e.Cells={}));function r(i){const{children:l}=i,{arenaSize:s,cellSize:d,edgeSize:v}=b.useContext(e.Context),h=Math.ceil(v/2-s/2),f=s+s%2,c=d/2;return K.jsx("foreignObject",{x:h,y:h,width:f,height:f,children:K.jsx("div",{style:{alignItems:"center",display:"flex",fontSize:1,justifyContent:"center",height:"100%",overflow:"hidden",width:"100%",padding:c,boxSizing:"border-box"},children:l})})}e.Arena=r,function(i){i.displayName="Arena"}(r=e.Arena||(e.Arena={}))})(me||(me={}));var yt={},Al=768;ka({conditions:{defaultCondition:"smallScreen",conditionNames:["smallScreen","largeScreen"],responsiveArray:void 0}});var El=No({conditions:{defaultCondition:"smallScreen",conditionNames:["smallScreen","largeScreen"],responsiveArray:void 0}}),on=Ta({conditions:{defaultCondition:"base",conditionNames:["base","hover","active"],responsiveArray:void 0},styles:{background:{values:{accentColor:{conditions:{base:"ju367v9i",hover:"ju367v9j",active:"ju367v9k"},defaultClass:"ju367v9i"},accentColorForeground:{conditions:{base:"ju367v9l",hover:"ju367v9m",active:"ju367v9n"},defaultClass:"ju367v9l"},actionButtonBorder:{conditions:{base:"ju367v9o",hover:"ju367v9p",active:"ju367v9q"},defaultClass:"ju367v9o"},actionButtonBorderMobile:{conditions:{base:"ju367v9r",hover:"ju367v9s",active:"ju367v9t"},defaultClass:"ju367v9r"},actionButtonSecondaryBackground:{conditions:{base:"ju367v9u",hover:"ju367v9v",active:"ju367v9w"},defaultClass:"ju367v9u"},closeButton:{conditions:{base:"ju367v9x",hover:"ju367v9y",active:"ju367v9z"},defaultClass:"ju367v9x"},closeButtonBackground:{conditions:{base:"ju367va0",hover:"ju367va1",active:"ju367va2"},defaultClass:"ju367va0"},connectButtonBackground:{conditions:{base:"ju367va3",hover:"ju367va4",active:"ju367va5"},defaultClass:"ju367va3"},connectButtonBackgroundError:{conditions:{base:"ju367va6",hover:"ju367va7",active:"ju367va8"},defaultClass:"ju367va6"},connectButtonInnerBackground:{conditions:{base:"ju367va9",hover:"ju367vaa",active:"ju367vab"},defaultClass:"ju367va9"},connectButtonText:{conditions:{base:"ju367vac",hover:"ju367vad",active:"ju367vae"},defaultClass:"ju367vac"},connectButtonTextError:{conditions:{base:"ju367vaf",hover:"ju367vag",active:"ju367vah"},defaultClass:"ju367vaf"},connectionIndicator:{conditions:{base:"ju367vai",hover:"ju367vaj",active:"ju367vak"},defaultClass:"ju367vai"},downloadBottomCardBackground:{conditions:{base:"ju367val",hover:"ju367vam",active:"ju367van"},defaultClass:"ju367val"},downloadTopCardBackground:{conditions:{base:"ju367vao",hover:"ju367vap",active:"ju367vaq"},defaultClass:"ju367vao"},error:{conditions:{base:"ju367var",hover:"ju367vas",active:"ju367vat"},defaultClass:"ju367var"},generalBorder:{conditions:{base:"ju367vau",hover:"ju367vav",active:"ju367vaw"},defaultClass:"ju367vau"},generalBorderDim:{conditions:{base:"ju367vax",hover:"ju367vay",active:"ju367vaz"},defaultClass:"ju367vax"},menuItemBackground:{conditions:{base:"ju367vb0",hover:"ju367vb1",active:"ju367vb2"},defaultClass:"ju367vb0"},modalBackdrop:{conditions:{base:"ju367vb3",hover:"ju367vb4",active:"ju367vb5"},defaultClass:"ju367vb3"},modalBackground:{conditions:{base:"ju367vb6",hover:"ju367vb7",active:"ju367vb8"},defaultClass:"ju367vb6"},modalBorder:{conditions:{base:"ju367vb9",hover:"ju367vba",active:"ju367vbb"},defaultClass:"ju367vb9"},modalText:{conditions:{base:"ju367vbc",hover:"ju367vbd",active:"ju367vbe"},defaultClass:"ju367vbc"},modalTextDim:{conditions:{base:"ju367vbf",hover:"ju367vbg",active:"ju367vbh"},defaultClass:"ju367vbf"},modalTextSecondary:{conditions:{base:"ju367vbi",hover:"ju367vbj",active:"ju367vbk"},defaultClass:"ju367vbi"},profileAction:{conditions:{base:"ju367vbl",hover:"ju367vbm",active:"ju367vbn"},defaultClass:"ju367vbl"},profileActionHover:{conditions:{base:"ju367vbo",hover:"ju367vbp",active:"ju367vbq"},defaultClass:"ju367vbo"},profileForeground:{conditions:{base:"ju367vbr",hover:"ju367vbs",active:"ju367vbt"},defaultClass:"ju367vbr"},selectedOptionBorder:{conditions:{base:"ju367vbu",hover:"ju367vbv",active:"ju367vbw"},defaultClass:"ju367vbu"},standby:{conditions:{base:"ju367vbx",hover:"ju367vby",active:"ju367vbz"},defaultClass:"ju367vbx"}}},borderColor:{values:{accentColor:{conditions:{base:"ju367vc0",hover:"ju367vc1",active:"ju367vc2"},defaultClass:"ju367vc0"},accentColorForeground:{conditions:{base:"ju367vc3",hover:"ju367vc4",active:"ju367vc5"},defaultClass:"ju367vc3"},actionButtonBorder:{conditions:{base:"ju367vc6",hover:"ju367vc7",active:"ju367vc8"},defaultClass:"ju367vc6"},actionButtonBorderMobile:{conditions:{base:"ju367vc9",hover:"ju367vca",active:"ju367vcb"},defaultClass:"ju367vc9"},actionButtonSecondaryBackground:{conditions:{base:"ju367vcc",hover:"ju367vcd",active:"ju367vce"},defaultClass:"ju367vcc"},closeButton:{conditions:{base:"ju367vcf",hover:"ju367vcg",active:"ju367vch"},defaultClass:"ju367vcf"},closeButtonBackground:{conditions:{base:"ju367vci",hover:"ju367vcj",active:"ju367vck"},defaultClass:"ju367vci"},connectButtonBackground:{conditions:{base:"ju367vcl",hover:"ju367vcm",active:"ju367vcn"},defaultClass:"ju367vcl"},connectButtonBackgroundError:{conditions:{base:"ju367vco",hover:"ju367vcp",active:"ju367vcq"},defaultClass:"ju367vco"},connectButtonInnerBackground:{conditions:{base:"ju367vcr",hover:"ju367vcs",active:"ju367vct"},defaultClass:"ju367vcr"},connectButtonText:{conditions:{base:"ju367vcu",hover:"ju367vcv",active:"ju367vcw"},defaultClass:"ju367vcu"},connectButtonTextError:{conditions:{base:"ju367vcx",hover:"ju367vcy",active:"ju367vcz"},defaultClass:"ju367vcx"},connectionIndicator:{conditions:{base:"ju367vd0",hover:"ju367vd1",active:"ju367vd2"},defaultClass:"ju367vd0"},downloadBottomCardBackground:{conditions:{base:"ju367vd3",hover:"ju367vd4",active:"ju367vd5"},defaultClass:"ju367vd3"},downloadTopCardBackground:{conditions:{base:"ju367vd6",hover:"ju367vd7",active:"ju367vd8"},defaultClass:"ju367vd6"},error:{conditions:{base:"ju367vd9",hover:"ju367vda",active:"ju367vdb"},defaultClass:"ju367vd9"},generalBorder:{conditions:{base:"ju367vdc",hover:"ju367vdd",active:"ju367vde"},defaultClass:"ju367vdc"},generalBorderDim:{conditions:{base:"ju367vdf",hover:"ju367vdg",active:"ju367vdh"},defaultClass:"ju367vdf"},menuItemBackground:{conditions:{base:"ju367vdi",hover:"ju367vdj",active:"ju367vdk"},defaultClass:"ju367vdi"},modalBackdrop:{conditions:{base:"ju367vdl",hover:"ju367vdm",active:"ju367vdn"},defaultClass:"ju367vdl"},modalBackground:{conditions:{base:"ju367vdo",hover:"ju367vdp",active:"ju367vdq"},defaultClass:"ju367vdo"},modalBorder:{conditions:{base:"ju367vdr",hover:"ju367vds",active:"ju367vdt"},defaultClass:"ju367vdr"},modalText:{conditions:{base:"ju367vdu",hover:"ju367vdv",active:"ju367vdw"},defaultClass:"ju367vdu"},modalTextDim:{conditions:{base:"ju367vdx",hover:"ju367vdy",active:"ju367vdz"},defaultClass:"ju367vdx"},modalTextSecondary:{conditions:{base:"ju367ve0",hover:"ju367ve1",active:"ju367ve2"},defaultClass:"ju367ve0"},profileAction:{conditions:{base:"ju367ve3",hover:"ju367ve4",active:"ju367ve5"},defaultClass:"ju367ve3"},profileActionHover:{conditions:{base:"ju367ve6",hover:"ju367ve7",active:"ju367ve8"},defaultClass:"ju367ve6"},profileForeground:{conditions:{base:"ju367ve9",hover:"ju367vea",active:"ju367veb"},defaultClass:"ju367ve9"},selectedOptionBorder:{conditions:{base:"ju367vec",hover:"ju367ved",active:"ju367vee"},defaultClass:"ju367vec"},standby:{conditions:{base:"ju367vef",hover:"ju367veg",active:"ju367veh"},defaultClass:"ju367vef"}}},boxShadow:{values:{connectButton:{conditions:{base:"ju367vei",hover:"ju367vej",active:"ju367vek"},defaultClass:"ju367vei"},dialog:{conditions:{base:"ju367vel",hover:"ju367vem",active:"ju367ven"},defaultClass:"ju367vel"},profileDetailsAction:{conditions:{base:"ju367veo",hover:"ju367vep",active:"ju367veq"},defaultClass:"ju367veo"},selectedOption:{conditions:{base:"ju367ver",hover:"ju367ves",active:"ju367vet"},defaultClass:"ju367ver"},selectedWallet:{conditions:{base:"ju367veu",hover:"ju367vev",active:"ju367vew"},defaultClass:"ju367veu"},walletLogo:{conditions:{base:"ju367vex",hover:"ju367vey",active:"ju367vez"},defaultClass:"ju367vex"}}},color:{values:{accentColor:{conditions:{base:"ju367vf0",hover:"ju367vf1",active:"ju367vf2"},defaultClass:"ju367vf0"},accentColorForeground:{conditions:{base:"ju367vf3",hover:"ju367vf4",active:"ju367vf5"},defaultClass:"ju367vf3"},actionButtonBorder:{conditions:{base:"ju367vf6",hover:"ju367vf7",active:"ju367vf8"},defaultClass:"ju367vf6"},actionButtonBorderMobile:{conditions:{base:"ju367vf9",hover:"ju367vfa",active:"ju367vfb"},defaultClass:"ju367vf9"},actionButtonSecondaryBackground:{conditions:{base:"ju367vfc",hover:"ju367vfd",active:"ju367vfe"},defaultClass:"ju367vfc"},closeButton:{conditions:{base:"ju367vff",hover:"ju367vfg",active:"ju367vfh"},defaultClass:"ju367vff"},closeButtonBackground:{conditions:{base:"ju367vfi",hover:"ju367vfj",active:"ju367vfk"},defaultClass:"ju367vfi"},connectButtonBackground:{conditions:{base:"ju367vfl",hover:"ju367vfm",active:"ju367vfn"},defaultClass:"ju367vfl"},connectButtonBackgroundError:{conditions:{base:"ju367vfo",hover:"ju367vfp",active:"ju367vfq"},defaultClass:"ju367vfo"},connectButtonInnerBackground:{conditions:{base:"ju367vfr",hover:"ju367vfs",active:"ju367vft"},defaultClass:"ju367vfr"},connectButtonText:{conditions:{base:"ju367vfu",hover:"ju367vfv",active:"ju367vfw"},defaultClass:"ju367vfu"},connectButtonTextError:{conditions:{base:"ju367vfx",hover:"ju367vfy",active:"ju367vfz"},defaultClass:"ju367vfx"},connectionIndicator:{conditions:{base:"ju367vg0",hover:"ju367vg1",active:"ju367vg2"},defaultClass:"ju367vg0"},downloadBottomCardBackground:{conditions:{base:"ju367vg3",hover:"ju367vg4",active:"ju367vg5"},defaultClass:"ju367vg3"},downloadTopCardBackground:{conditions:{base:"ju367vg6",hover:"ju367vg7",active:"ju367vg8"},defaultClass:"ju367vg6"},error:{conditions:{base:"ju367vg9",hover:"ju367vga",active:"ju367vgb"},defaultClass:"ju367vg9"},generalBorder:{conditions:{base:"ju367vgc",hover:"ju367vgd",active:"ju367vge"},defaultClass:"ju367vgc"},generalBorderDim:{conditions:{base:"ju367vgf",hover:"ju367vgg",active:"ju367vgh"},defaultClass:"ju367vgf"},menuItemBackground:{conditions:{base:"ju367vgi",hover:"ju367vgj",active:"ju367vgk"},defaultClass:"ju367vgi"},modalBackdrop:{conditions:{base:"ju367vgl",hover:"ju367vgm",active:"ju367vgn"},defaultClass:"ju367vgl"},modalBackground:{conditions:{base:"ju367vgo",hover:"ju367vgp",active:"ju367vgq"},defaultClass:"ju367vgo"},modalBorder:{conditions:{base:"ju367vgr",hover:"ju367vgs",active:"ju367vgt"},defaultClass:"ju367vgr"},modalText:{conditions:{base:"ju367vgu",hover:"ju367vgv",active:"ju367vgw"},defaultClass:"ju367vgu"},modalTextDim:{conditions:{base:"ju367vgx",hover:"ju367vgy",active:"ju367vgz"},defaultClass:"ju367vgx"},modalTextSecondary:{conditions:{base:"ju367vh0",hover:"ju367vh1",active:"ju367vh2"},defaultClass:"ju367vh0"},profileAction:{conditions:{base:"ju367vh3",hover:"ju367vh4",active:"ju367vh5"},defaultClass:"ju367vh3"},profileActionHover:{conditions:{base:"ju367vh6",hover:"ju367vh7",active:"ju367vh8"},defaultClass:"ju367vh6"},profileForeground:{conditions:{base:"ju367vh9",hover:"ju367vha",active:"ju367vhb"},defaultClass:"ju367vh9"},selectedOptionBorder:{conditions:{base:"ju367vhc",hover:"ju367vhd",active:"ju367vhe"},defaultClass:"ju367vhc"},standby:{conditions:{base:"ju367vhf",hover:"ju367vhg",active:"ju367vhh"},defaultClass:"ju367vhf"}}}}},{conditions:{defaultCondition:"smallScreen",conditionNames:["smallScreen","largeScreen"],responsiveArray:void 0},styles:{alignItems:{values:{"flex-start":{conditions:{smallScreen:"ju367v0",largeScreen:"ju367v1"},defaultClass:"ju367v0"},"flex-end":{conditions:{smallScreen:"ju367v2",largeScreen:"ju367v3"},defaultClass:"ju367v2"},center:{conditions:{smallScreen:"ju367v4",largeScreen:"ju367v5"},defaultClass:"ju367v4"}}},display:{values:{none:{conditions:{smallScreen:"ju367v6",largeScreen:"ju367v7"},defaultClass:"ju367v6"},block:{conditions:{smallScreen:"ju367v8",largeScreen:"ju367v9"},defaultClass:"ju367v8"},flex:{conditions:{smallScreen:"ju367va",largeScreen:"ju367vb"},defaultClass:"ju367va"},inline:{conditions:{smallScreen:"ju367vc",largeScreen:"ju367vd"},defaultClass:"ju367vc"}}}}},{conditions:void 0,styles:{margin:{mappings:["marginTop","marginBottom","marginLeft","marginRight"]},marginX:{mappings:["marginLeft","marginRight"]},marginY:{mappings:["marginTop","marginBottom"]},padding:{mappings:["paddingTop","paddingBottom","paddingLeft","paddingRight"]},paddingX:{mappings:["paddingLeft","paddingRight"]},paddingY:{mappings:["paddingTop","paddingBottom"]},alignSelf:{values:{"flex-start":{defaultClass:"ju367ve"},"flex-end":{defaultClass:"ju367vf"},center:{defaultClass:"ju367vg"}}},backgroundSize:{values:{cover:{defaultClass:"ju367vh"}}},borderRadius:{values:{1:{defaultClass:"ju367vi"},6:{defaultClass:"ju367vj"},10:{defaultClass:"ju367vk"},13:{defaultClass:"ju367vl"},actionButton:{defaultClass:"ju367vm"},connectButton:{defaultClass:"ju367vn"},menuButton:{defaultClass:"ju367vo"},modal:{defaultClass:"ju367vp"},modalMobile:{defaultClass:"ju367vq"},"25%":{defaultClass:"ju367vr"},full:{defaultClass:"ju367vs"}}},borderStyle:{values:{solid:{defaultClass:"ju367vt"}}},borderWidth:{values:{0:{defaultClass:"ju367vu"},1:{defaultClass:"ju367vv"},2:{defaultClass:"ju367vw"},4:{defaultClass:"ju367vx"}}},cursor:{values:{pointer:{defaultClass:"ju367vy"},none:{defaultClass:"ju367vz"}}},pointerEvents:{values:{none:{defaultClass:"ju367v10"},all:{defaultClass:"ju367v11"}}},minHeight:{values:{8:{defaultClass:"ju367v12"},44:{defaultClass:"ju367v13"}}},flexDirection:{values:{row:{defaultClass:"ju367v14"},column:{defaultClass:"ju367v15"}}},fontFamily:{values:{body:{defaultClass:"ju367v16"}}},fontSize:{values:{12:{defaultClass:"ju367v17"},13:{defaultClass:"ju367v18"},14:{defaultClass:"ju367v19"},16:{defaultClass:"ju367v1a"},18:{defaultClass:"ju367v1b"},20:{defaultClass:"ju367v1c"},23:{defaultClass:"ju367v1d"}}},fontWeight:{values:{regular:{defaultClass:"ju367v1e"},medium:{defaultClass:"ju367v1f"},semibold:{defaultClass:"ju367v1g"},bold:{defaultClass:"ju367v1h"},heavy:{defaultClass:"ju367v1i"}}},gap:{values:{0:{defaultClass:"ju367v1j"},1:{defaultClass:"ju367v1k"},2:{defaultClass:"ju367v1l"},3:{defaultClass:"ju367v1m"},4:{defaultClass:"ju367v1n"},5:{defaultClass:"ju367v1o"},6:{defaultClass:"ju367v1p"},8:{defaultClass:"ju367v1q"},10:{defaultClass:"ju367v1r"},12:{defaultClass:"ju367v1s"},14:{defaultClass:"ju367v1t"},16:{defaultClass:"ju367v1u"},18:{defaultClass:"ju367v1v"},20:{defaultClass:"ju367v1w"},24:{defaultClass:"ju367v1x"},28:{defaultClass:"ju367v1y"},32:{defaultClass:"ju367v1z"},36:{defaultClass:"ju367v20"},44:{defaultClass:"ju367v21"},64:{defaultClass:"ju367v22"},"-1":{defaultClass:"ju367v23"}}},height:{values:{1:{defaultClass:"ju367v24"},2:{defaultClass:"ju367v25"},4:{defaultClass:"ju367v26"},8:{defaultClass:"ju367v27"},12:{defaultClass:"ju367v28"},20:{defaultClass:"ju367v29"},24:{defaultClass:"ju367v2a"},28:{defaultClass:"ju367v2b"},30:{defaultClass:"ju367v2c"},32:{defaultClass:"ju367v2d"},34:{defaultClass:"ju367v2e"},36:{defaultClass:"ju367v2f"},40:{defaultClass:"ju367v2g"},44:{defaultClass:"ju367v2h"},48:{defaultClass:"ju367v2i"},54:{defaultClass:"ju367v2j"},60:{defaultClass:"ju367v2k"},200:{defaultClass:"ju367v2l"},full:{defaultClass:"ju367v2m"},max:{defaultClass:"ju367v2n"}}},justifyContent:{values:{"flex-start":{defaultClass:"ju367v2o"},"flex-end":{defaultClass:"ju367v2p"},center:{defaultClass:"ju367v2q"},"space-between":{defaultClass:"ju367v2r"},"space-around":{defaultClass:"ju367v2s"}}},textAlign:{values:{left:{defaultClass:"ju367v2t"},center:{defaultClass:"ju367v2u"},inherit:{defaultClass:"ju367v2v"}}},marginBottom:{values:{0:{defaultClass:"ju367v2w"},1:{defaultClass:"ju367v2x"},2:{defaultClass:"ju367v2y"},3:{defaultClass:"ju367v2z"},4:{defaultClass:"ju367v30"},5:{defaultClass:"ju367v31"},6:{defaultClass:"ju367v32"},8:{defaultClass:"ju367v33"},10:{defaultClass:"ju367v34"},12:{defaultClass:"ju367v35"},14:{defaultClass:"ju367v36"},16:{defaultClass:"ju367v37"},18:{defaultClass:"ju367v38"},20:{defaultClass:"ju367v39"},24:{defaultClass:"ju367v3a"},28:{defaultClass:"ju367v3b"},32:{defaultClass:"ju367v3c"},36:{defaultClass:"ju367v3d"},44:{defaultClass:"ju367v3e"},64:{defaultClass:"ju367v3f"},"-1":{defaultClass:"ju367v3g"}}},marginLeft:{values:{0:{defaultClass:"ju367v3h"},1:{defaultClass:"ju367v3i"},2:{defaultClass:"ju367v3j"},3:{defaultClass:"ju367v3k"},4:{defaultClass:"ju367v3l"},5:{defaultClass:"ju367v3m"},6:{defaultClass:"ju367v3n"},8:{defaultClass:"ju367v3o"},10:{defaultClass:"ju367v3p"},12:{defaultClass:"ju367v3q"},14:{defaultClass:"ju367v3r"},16:{defaultClass:"ju367v3s"},18:{defaultClass:"ju367v3t"},20:{defaultClass:"ju367v3u"},24:{defaultClass:"ju367v3v"},28:{defaultClass:"ju367v3w"},32:{defaultClass:"ju367v3x"},36:{defaultClass:"ju367v3y"},44:{defaultClass:"ju367v3z"},64:{defaultClass:"ju367v40"},"-1":{defaultClass:"ju367v41"}}},marginRight:{values:{0:{defaultClass:"ju367v42"},1:{defaultClass:"ju367v43"},2:{defaultClass:"ju367v44"},3:{defaultClass:"ju367v45"},4:{defaultClass:"ju367v46"},5:{defaultClass:"ju367v47"},6:{defaultClass:"ju367v48"},8:{defaultClass:"ju367v49"},10:{defaultClass:"ju367v4a"},12:{defaultClass:"ju367v4b"},14:{defaultClass:"ju367v4c"},16:{defaultClass:"ju367v4d"},18:{defaultClass:"ju367v4e"},20:{defaultClass:"ju367v4f"},24:{defaultClass:"ju367v4g"},28:{defaultClass:"ju367v4h"},32:{defaultClass:"ju367v4i"},36:{defaultClass:"ju367v4j"},44:{defaultClass:"ju367v4k"},64:{defaultClass:"ju367v4l"},"-1":{defaultClass:"ju367v4m"}}},marginTop:{values:{0:{defaultClass:"ju367v4n"},1:{defaultClass:"ju367v4o"},2:{defaultClass:"ju367v4p"},3:{defaultClass:"ju367v4q"},4:{defaultClass:"ju367v4r"},5:{defaultClass:"ju367v4s"},6:{defaultClass:"ju367v4t"},8:{defaultClass:"ju367v4u"},10:{defaultClass:"ju367v4v"},12:{defaultClass:"ju367v4w"},14:{defaultClass:"ju367v4x"},16:{defaultClass:"ju367v4y"},18:{defaultClass:"ju367v4z"},20:{defaultClass:"ju367v50"},24:{defaultClass:"ju367v51"},28:{defaultClass:"ju367v52"},32:{defaultClass:"ju367v53"},36:{defaultClass:"ju367v54"},44:{defaultClass:"ju367v55"},64:{defaultClass:"ju367v56"},"-1":{defaultClass:"ju367v57"}}},maxWidth:{values:{1:{defaultClass:"ju367v58"},2:{defaultClass:"ju367v59"},4:{defaultClass:"ju367v5a"},8:{defaultClass:"ju367v5b"},12:{defaultClass:"ju367v5c"},20:{defaultClass:"ju367v5d"},24:{defaultClass:"ju367v5e"},28:{defaultClass:"ju367v5f"},30:{defaultClass:"ju367v5g"},32:{defaultClass:"ju367v5h"},34:{defaultClass:"ju367v5i"},36:{defaultClass:"ju367v5j"},40:{defaultClass:"ju367v5k"},44:{defaultClass:"ju367v5l"},48:{defaultClass:"ju367v5m"},54:{defaultClass:"ju367v5n"},60:{defaultClass:"ju367v5o"},200:{defaultClass:"ju367v5p"},full:{defaultClass:"ju367v5q"},max:{defaultClass:"ju367v5r"}}},minWidth:{values:{1:{defaultClass:"ju367v5s"},2:{defaultClass:"ju367v5t"},4:{defaultClass:"ju367v5u"},8:{defaultClass:"ju367v5v"},12:{defaultClass:"ju367v5w"},20:{defaultClass:"ju367v5x"},24:{defaultClass:"ju367v5y"},28:{defaultClass:"ju367v5z"},30:{defaultClass:"ju367v60"},32:{defaultClass:"ju367v61"},34:{defaultClass:"ju367v62"},36:{defaultClass:"ju367v63"},40:{defaultClass:"ju367v64"},44:{defaultClass:"ju367v65"},48:{defaultClass:"ju367v66"},54:{defaultClass:"ju367v67"},60:{defaultClass:"ju367v68"},200:{defaultClass:"ju367v69"},full:{defaultClass:"ju367v6a"},max:{defaultClass:"ju367v6b"}}},overflow:{values:{hidden:{defaultClass:"ju367v6c"}}},paddingBottom:{values:{0:{defaultClass:"ju367v6d"},1:{defaultClass:"ju367v6e"},2:{defaultClass:"ju367v6f"},3:{defaultClass:"ju367v6g"},4:{defaultClass:"ju367v6h"},5:{defaultClass:"ju367v6i"},6:{defaultClass:"ju367v6j"},8:{defaultClass:"ju367v6k"},10:{defaultClass:"ju367v6l"},12:{defaultClass:"ju367v6m"},14:{defaultClass:"ju367v6n"},16:{defaultClass:"ju367v6o"},18:{defaultClass:"ju367v6p"},20:{defaultClass:"ju367v6q"},24:{defaultClass:"ju367v6r"},28:{defaultClass:"ju367v6s"},32:{defaultClass:"ju367v6t"},36:{defaultClass:"ju367v6u"},44:{defaultClass:"ju367v6v"},64:{defaultClass:"ju367v6w"},"-1":{defaultClass:"ju367v6x"}}},paddingLeft:{values:{0:{defaultClass:"ju367v6y"},1:{defaultClass:"ju367v6z"},2:{defaultClass:"ju367v70"},3:{defaultClass:"ju367v71"},4:{defaultClass:"ju367v72"},5:{defaultClass:"ju367v73"},6:{defaultClass:"ju367v74"},8:{defaultClass:"ju367v75"},10:{defaultClass:"ju367v76"},12:{defaultClass:"ju367v77"},14:{defaultClass:"ju367v78"},16:{defaultClass:"ju367v79"},18:{defaultClass:"ju367v7a"},20:{defaultClass:"ju367v7b"},24:{defaultClass:"ju367v7c"},28:{defaultClass:"ju367v7d"},32:{defaultClass:"ju367v7e"},36:{defaultClass:"ju367v7f"},44:{defaultClass:"ju367v7g"},64:{defaultClass:"ju367v7h"},"-1":{defaultClass:"ju367v7i"}}},paddingRight:{values:{0:{defaultClass:"ju367v7j"},1:{defaultClass:"ju367v7k"},2:{defaultClass:"ju367v7l"},3:{defaultClass:"ju367v7m"},4:{defaultClass:"ju367v7n"},5:{defaultClass:"ju367v7o"},6:{defaultClass:"ju367v7p"},8:{defaultClass:"ju367v7q"},10:{defaultClass:"ju367v7r"},12:{defaultClass:"ju367v7s"},14:{defaultClass:"ju367v7t"},16:{defaultClass:"ju367v7u"},18:{defaultClass:"ju367v7v"},20:{defaultClass:"ju367v7w"},24:{defaultClass:"ju367v7x"},28:{defaultClass:"ju367v7y"},32:{defaultClass:"ju367v7z"},36:{defaultClass:"ju367v80"},44:{defaultClass:"ju367v81"},64:{defaultClass:"ju367v82"},"-1":{defaultClass:"ju367v83"}}},paddingTop:{values:{0:{defaultClass:"ju367v84"},1:{defaultClass:"ju367v85"},2:{defaultClass:"ju367v86"},3:{defaultClass:"ju367v87"},4:{defaultClass:"ju367v88"},5:{defaultClass:"ju367v89"},6:{defaultClass:"ju367v8a"},8:{defaultClass:"ju367v8b"},10:{defaultClass:"ju367v8c"},12:{defaultClass:"ju367v8d"},14:{defaultClass:"ju367v8e"},16:{defaultClass:"ju367v8f"},18:{defaultClass:"ju367v8g"},20:{defaultClass:"ju367v8h"},24:{defaultClass:"ju367v8i"},28:{defaultClass:"ju367v8j"},32:{defaultClass:"ju367v8k"},36:{defaultClass:"ju367v8l"},44:{defaultClass:"ju367v8m"},64:{defaultClass:"ju367v8n"},"-1":{defaultClass:"ju367v8o"}}},position:{values:{absolute:{defaultClass:"ju367v8p"},fixed:{defaultClass:"ju367v8q"},relative:{defaultClass:"ju367v8r"}}},WebkitUserSelect:{values:{none:{defaultClass:"ju367v8s"}}},right:{values:{0:{defaultClass:"ju367v8t"}}},transition:{values:{default:{defaultClass:"ju367v8u"},transform:{defaultClass:"ju367v8v"}}},userSelect:{values:{none:{defaultClass:"ju367v8w"}}},width:{values:{1:{defaultClass:"ju367v8x"},2:{defaultClass:"ju367v8y"},4:{defaultClass:"ju367v8z"},8:{defaultClass:"ju367v90"},12:{defaultClass:"ju367v91"},20:{defaultClass:"ju367v92"},24:{defaultClass:"ju367v93"},28:{defaultClass:"ju367v94"},30:{defaultClass:"ju367v95"},32:{defaultClass:"ju367v96"},34:{defaultClass:"ju367v97"},36:{defaultClass:"ju367v98"},40:{defaultClass:"ju367v99"},44:{defaultClass:"ju367v9a"},48:{defaultClass:"ju367v9b"},54:{defaultClass:"ju367v9c"},60:{defaultClass:"ju367v9d"},200:{defaultClass:"ju367v9e"},full:{defaultClass:"ju367v9f"},max:{defaultClass:"ju367v9g"}}},backdropFilter:{values:{modalOverlay:{defaultClass:"ju367v9h"}}}}}),$n={colors:{accentColor:"var(--rk-colors-accentColor)",accentColorForeground:"var(--rk-colors-accentColorForeground)",actionButtonBorder:"var(--rk-colors-actionButtonBorder)",actionButtonBorderMobile:"var(--rk-colors-actionButtonBorderMobile)",actionButtonSecondaryBackground:"var(--rk-colors-actionButtonSecondaryBackground)",closeButton:"var(--rk-colors-closeButton)",closeButtonBackground:"var(--rk-colors-closeButtonBackground)",connectButtonBackground:"var(--rk-colors-connectButtonBackground)",connectButtonBackgroundError:"var(--rk-colors-connectButtonBackgroundError)",connectButtonInnerBackground:"var(--rk-colors-connectButtonInnerBackground)",connectButtonText:"var(--rk-colors-connectButtonText)",connectButtonTextError:"var(--rk-colors-connectButtonTextError)",connectionIndicator:"var(--rk-colors-connectionIndicator)",downloadBottomCardBackground:"var(--rk-colors-downloadBottomCardBackground)",downloadTopCardBackground:"var(--rk-colors-downloadTopCardBackground)",error:"var(--rk-colors-error)",generalBorder:"var(--rk-colors-generalBorder)",generalBorderDim:"var(--rk-colors-generalBorderDim)",menuItemBackground:"var(--rk-colors-menuItemBackground)",modalBackdrop:"var(--rk-colors-modalBackdrop)",modalBackground:"var(--rk-colors-modalBackground)",modalBorder:"var(--rk-colors-modalBorder)",modalText:"var(--rk-colors-modalText)",modalTextDim:"var(--rk-colors-modalTextDim)",modalTextSecondary:"var(--rk-colors-modalTextSecondary)",profileAction:"var(--rk-colors-profileAction)",profileActionHover:"var(--rk-colors-profileActionHover)",profileForeground:"var(--rk-colors-profileForeground)",selectedOptionBorder:"var(--rk-colors-selectedOptionBorder)",standby:"var(--rk-colors-standby)"},fonts:{body:"var(--rk-fonts-body)"},radii:{actionButton:"var(--rk-radii-actionButton)",connectButton:"var(--rk-radii-connectButton)",menuButton:"var(--rk-radii-menuButton)",modal:"var(--rk-radii-modal)",modalMobile:"var(--rk-radii-modalMobile)"},shadows:{connectButton:"var(--rk-shadows-connectButton)",dialog:"var(--rk-shadows-dialog)",profileDetailsAction:"var(--rk-shadows-profileDetailsAction)",selectedOption:"var(--rk-shadows-selectedOption)",selectedWallet:"var(--rk-shadows-selectedWallet)",walletLogo:"var(--rk-shadows-walletLogo)"},blurs:{modalOverlay:"var(--rk-blurs-modalOverlay)"}},xl={shrink:"_12cbo8i6",shrinkSm:"_12cbo8i7"},kl="_12cbo8i3 ju367v8r",jl={grow:"_12cbo8i4",growLg:"_12cbo8i5"};function X({active:e,hover:t}){return[kl,t&&jl[t],xl[e]]}var mr=b.createContext(null);function Bl(){const{adapter:e}=b.useContext(mr)??{};if(!e)throw new Error("No authentication adapter found");return e}function Bt(){const e=b.useContext(mr);return(e==null?void 0:e.status)??null}function hr(){const e=Bt(),{isConnected:t}=ae();return t?e&&(e==="loading"||e==="unauthenticated")?e:"connected":"disconnected"}function _l(){return typeof navigator<"u"&&/android/i.test(navigator.userAgent)}function Il(){return typeof navigator<"u"&&/iPhone|iPod/.test(navigator.userAgent)}function Sl(){return typeof navigator<"u"&&(/iPad/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)}function _t(){return Il()||Sl()}function Z(){return _l()||_t()}var Tl="iekbcc0",Dl={a:"iekbcca",blockquote:"iekbcc2",button:"iekbcc9",input:"iekbcc8 iekbcc5 iekbcc4",mark:"iekbcc6",ol:"iekbcc1",q:"iekbcc2",select:"iekbcc7 iekbcc5 iekbcc4",table:"iekbcc3",textarea:"iekbcc5 iekbcc4",ul:"iekbcc1"},Ol=({reset:e,...t})=>{if(!e)return on(t);const n=Dl[e],o=on(t);return Wo(Tl,n,o)},g=a.forwardRef(({as:e="div",className:t,testId:n,...o},r)=>{const i={},l={};for(const d in o)on.properties.has(d)?i[d]=o[d]:l[d]=o[d];const s=Ol({reset:typeof e=="string"?e:"div",...i});return a.createElement(e,{className:Wo(s,t),...l,"data-testid":n?`rk-${n.replace(/^rk-/,"")}`:void 0,ref:r})});g.displayName="Box";var gr=new Map,Ft=new Map;async function vr(e){const t=Ft.get(e);if(t)return t;const n=async()=>e().then(async r=>(gr.set(e,r),r)),o=n().catch(r=>n().catch(i=>{Ft.delete(e)}));return Ft.set(e,o),o}async function he(...e){return await Promise.all(e.map(t=>typeof t=="function"?vr(t):t))}function Rl(){const[,e]=b.useReducer(t=>t+1,0);return e}function It(e){const t=typeof e=="function"?gr.get(e):void 0,n=Rl();return b.useEffect(()=>{typeof e=="function"&&!t&&vr(e).then(n)},[e,t,n]),typeof e=="function"?t:e}function J({alt:e,background:t,borderColor:n,borderRadius:o,useAsImage:r,boxShadow:i,height:l,src:s,width:d,testId:v}){const h=_t(),f=It(s),c=f&&/^http/.test(f),[m,u]=b.useReducer(()=>!0,!1);return a.createElement(g,{"aria-label":e,borderRadius:o,boxShadow:i,height:typeof l=="string"?l:void 0,overflow:"hidden",position:"relative",role:"img",style:{background:t,height:typeof l=="number"?l:void 0,width:typeof d=="number"?d:void 0},width:typeof d=="string"?d:void 0,testId:v},a.createElement(g,{...c?{"aria-hidden":!0,as:"img",onLoad:u,src:f}:{"aria-hidden":!0,as:"img",src:f},height:"full",position:"absolute",...h?{WebkitUserSelect:"none"}:{},style:{WebkitTouchCallout:"none",transition:"opacity .15s linear",userSelect:"none",...!r&&c?{opacity:m?1:0}:{}},width:"full"}),n?a.createElement(g,{...typeof n=="object"&&"custom"in n?{style:{borderColor:n.custom}}:{borderColor:n},borderRadius:o,borderStyle:"solid",borderWidth:"1",height:"full",position:"relative",width:"full"}):null)}var Ml="_1luule42",Ll="_1luule43",Nl=e=>b.useMemo(()=>`${e}_${Math.round(Math.random()*1e9)}`,[e]),Xe=({height:e=21,width:t=21})=>{const n=Nl("spinner");return a.createElement("svg",{className:Ml,fill:"none",height:e,viewBox:"0 0 21 21",width:t,xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Loading"),a.createElement("clipPath",{id:n},a.createElement("path",{d:"M10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C11.3284 18 12 18.6716 12 19.5C12 20.3284 11.3284 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5C21 11.3284 20.3284 12 19.5 12C18.6716 12 18 11.3284 18 10.5C18 6.35786 14.6421 3 10.5 3Z"})),a.createElement("foreignObject",{clipPath:`url(#${n})`,height:"21",width:"21",x:"0",y:"0"},a.createElement("div",{className:Ll})))},N=["#FC5C54","#FFD95A","#E95D72","#6A87C8","#5FD0F3","#75C06B","#FFDD86","#5FC6D4","#FF949A","#FF8024","#9BA1A4","#EC66FF","#FF8CBC","#FF9A23","#C5DADB","#A8CE63","#71ABFF","#FFE279","#B6B1B6","#FF6780","#A575FF","#4D82FF","#FFB35A"],eo=[{color:N[0],emoji:"🌶"},{color:N[1],emoji:"🤑"},{color:N[2],emoji:"🐙"},{color:N[3],emoji:"🫐"},{color:N[4],emoji:"🐳"},{color:N[0],emoji:"🤶"},{color:N[5],emoji:"🌲"},{color:N[6],emoji:"🌞"},{color:N[7],emoji:"🐒"},{color:N[8],emoji:"🐵"},{color:N[9],emoji:"🦊"},{color:N[10],emoji:"🐼"},{color:N[11],emoji:"🦄"},{color:N[12],emoji:"🐷"},{color:N[13],emoji:"🐧"},{color:N[8],emoji:"🦩"},{color:N[14],emoji:"👽"},{color:N[0],emoji:"🎈"},{color:N[8],emoji:"🍉"},{color:N[1],emoji:"🎉"},{color:N[15],emoji:"🐲"},{color:N[16],emoji:"🌎"},{color:N[17],emoji:"🍊"},{color:N[18],emoji:"🐭"},{color:N[19],emoji:"🍣"},{color:N[1],emoji:"🐥"},{color:N[20],emoji:"👾"},{color:N[15],emoji:"🥦"},{color:N[0],emoji:"👹"},{color:N[17],emoji:"🙀"},{color:N[4],emoji:"⛱"},{color:N[21],emoji:"⛵️"},{color:N[17],emoji:"🥳"},{color:N[8],emoji:"🤯"},{color:N[22],emoji:"🤠"}];function Fl(e){let t=0;if(e.length===0)return t;for(let n=0;n<e.length;n++){const o=e.charCodeAt(n);t=(t<<5)-t+o,t|=0}return t}function Wl(e){const n=Math.abs(Fl((typeof e=="string"?e:"").toLowerCase())%eo.length);return eo[n??0]}var Pl=({address:e,ensImage:t,size:n})=>{const[o,r]=b.useState(!1);b.useEffect(()=>{if(t){const s=new Image;s.src=t,s.onload=()=>r(!0)}},[t]);const{color:i,emoji:l}=b.useMemo(()=>Wl(e),[e]);return t?o?a.createElement(g,{backgroundSize:"cover",borderRadius:"full",position:"absolute",style:{backgroundImage:`url(${t})`,backgroundPosition:"center",height:n,width:n}}):a.createElement(g,{alignItems:"center",backgroundSize:"cover",borderRadius:"full",color:"modalText",display:"flex",justifyContent:"center",position:"absolute",style:{height:n,width:n}},a.createElement(Xe,null)):a.createElement(g,{alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden",style:{...!t&&{backgroundColor:i},height:n,width:n}},l)},wr=Pl,br=b.createContext(wr);function Ul({address:e,imageUrl:t,loading:n,size:o}){const r=b.useContext(br);return a.createElement(g,{"aria-hidden":!0,borderRadius:"full",overflow:"hidden",position:"relative",style:{height:`${o}px`,width:`${o}px`},userSelect:"none"},a.createElement(g,{alignItems:"center",borderRadius:"full",display:"flex",justifyContent:"center",overflow:"hidden",position:"absolute",style:{fontSize:`${Math.round(o*.55)}px`,height:`${o}px`,transform:n?"scale(0.72)":void 0,transition:".25s ease",transitionDelay:n?void 0:".1s",width:`${o}px`,willChange:"transform"},userSelect:"none"},a.createElement(r,{address:e,ensImage:t,size:o})),n&&a.createElement(g,{color:"accentColor",display:"flex",height:"full",position:"absolute",width:"full"},a.createElement(Xe,{height:"100%",width:"100%"})))}var to={defaultLocale:"en",locale:"en"},Ql=class{constructor(e){this.listeners=new Set,this.defaultLocale=to.defaultLocale,this.enableFallback=!1,this.locale=to.locale,this.cachedLocales=[],this.translations={};for(const[t,n]of Object.entries(e))this.cachedLocales=[...this.cachedLocales,t],this.translations={...this.translations,...this.flattenTranslation(n,t)}}missingMessage(e){return`[missing: "${this.locale}.${e}" translation]`}flattenTranslation(e,t){const n={},o=(r,i)=>{for(const l of Object.keys(r)){const s=`${i}.${l}`,d=r[l];typeof d=="object"&&d!==null?o(d,s):n[s]=d}};return o(e,t),n}translateWithReplacements(e,t={}){let n=e;for(const o in t){const r=t[o];n=n.replace(`%{${o}}`,r)}return n}t(e,t,n){const o=`${this.locale}.${e}`,r=this.translations[o];if(!r){if(this.enableFallback){const i=`${this.defaultLocale}.${e}`,l=this.translations[i];if(l)return this.translateWithReplacements(l,t)}return n!=null&&n.rawKeyIfTranslationMissing?e:this.missingMessage(e)}return this.translateWithReplacements(r,t)}isLocaleCached(e){return this.cachedLocales.includes(e)}updateLocale(e){this.locale=e,this.notifyListeners()}setTranslations(e,t){this.isLocaleCached(e)||(this.cachedLocales=[...this.cachedLocales,e],this.translations={...this.translations,...this.flattenTranslation(t,e)}),this.locale=e,this.notifyListeners()}notifyListeners(){for(const e of this.listeners)e()}onChange(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}},ce=new Ql({en:JSON.parse(Sn),"en-US":JSON.parse(Sn)});ce.defaultLocale="en-US";ce.locale="en-US";ce.enableFallback=!0;var zl=async e=>{switch(e){case"ar":case"ar-AR":return(await j(async()=>{const{default:t}=await import("./ar_AR-CTNWGWSS-DlAFo0vZ.js");return{default:t}},[])).default;case"de":case"de-DE":return(await j(async()=>{const{default:t}=await import("./de_DE-P43L3PR7-pJRS3eyz.js");return{default:t}},[])).default;case"en":case"en-US":return(await j(async()=>{const{default:t}=await import("./index-CJAmEX16.js").then(n=>n.e);return{default:t}},__vite__mapDeps([0,1,2,3,4,5]))).default;case"es":case"es-419":return(await j(async()=>{const{default:t}=await import("./es_419-JBX5FS3Q-Bk-MlIq_.js");return{default:t}},[])).default;case"fr":case"fr-FR":return(await j(async()=>{const{default:t}=await import("./fr_FR-CM2EDAQC-DvlCXiU9.js");return{default:t}},[])).default;case"hi":case"hi-IN":return(await j(async()=>{const{default:t}=await import("./hi_IN-GYVCUYRD-CQnOa8U_.js");return{default:t}},[])).default;case"id":case"id-ID":return(await j(async()=>{const{default:t}=await import("./id_ID-7ZWSMOOE-ZzIoBaiI.js");return{default:t}},[])).default;case"ja":case"ja-JP":return(await j(async()=>{const{default:t}=await import("./ja_JP-CGMP6VLZ-BBxPp4Hq.js");return{default:t}},[])).default;case"ko":case"ko-KR":return(await j(async()=>{const{default:t}=await import("./ko_KR-YCZDTF7X-4W342j3x.js");return{default:t}},[])).default;case"ms":case"ms-MY":return(await j(async()=>{const{default:t}=await import("./ms_MY-5LHAYMS7-BUU8UB2I.js");return{default:t}},[])).default;case"pt":case"pt-BR":return(await j(async()=>{const{default:t}=await import("./pt_BR-3JTS4PSK-Cou37HE0.js");return{default:t}},[])).default;case"ru":case"ru-RU":return(await j(async()=>{const{default:t}=await import("./ru_RU-6J6XERHI-BEDPqa1p.js");return{default:t}},[])).default;case"th":case"th-TH":return(await j(async()=>{const{default:t}=await import("./th_TH-STXOD4CR-DmwaGyKS.js");return{default:t}},[])).default;case"tr":case"tr-TR":return(await j(async()=>{const{default:t}=await import("./tr_TR-P7QAUUZU-DHzPxq5a.js");return{default:t}},[])).default;case"ua":case"uk-UA":return(await j(async()=>{const{default:t}=await import("./uk_UA-JTTBGJGQ-bEPIKyyu.js");return{default:t}},[])).default;case"vi":case"vi-VN":return(await j(async()=>{const{default:t}=await import("./vi_VN-5XUUAVWW-DvcbUvCZ.js");return{default:t}},[])).default;case"zh":case"zh-CN":case"zh-Hans":return(await j(async()=>{const{default:t}=await import("./zh_CN-RGMLPFEP-CPkk4IYh.js");return{default:t}},[])).default;case"zh-HK":return(await j(async()=>{const{default:t}=await import("./zh_HK-YM3T6EI5-BYHcXtXC.js");return{default:t}},[])).default;case"zh-Hant":case"zh-TW":return(await j(async()=>{const{default:t}=await import("./zh_TW-HAEH6VE5-r-nym7hs.js");return{default:t}},[])).default;default:return(await j(async()=>{const{default:t}=await import("./index-CJAmEX16.js").then(n=>n.e);return{default:t}},__vite__mapDeps([0,1,2,3,4,5]))).default}};async function no(e){if(ce.isLocaleCached(e)){ce.updateLocale(e);return}const n=await zl(e);ce.setTranslations(e,JSON.parse(n))}var Vl=()=>{var e;if(typeof window<"u"&&typeof navigator<"u"){if((e=navigator.languages)!=null&&e.length)return navigator.languages[0];if(navigator.language)return navigator.language}},Y=b.createContext({i18n:ce}),ql=({children:e,locale:t})=>{const[n,o]=b.useState(0),r=b.useMemo(()=>Vl(),[]);b.useEffect(()=>ce.onChange(()=>{o(s=>s+1)}),[]),b.useEffect(()=>{t&&t!==ce.locale?no(t):!t&&r&&r!==ce.locale&&no(r)},[t,r]);const i=b.useMemo(()=>({t:(s,d)=>ce.t(s,d),i18n:ce}),[n]);return a.createElement(Y.Provider,{value:i},e)};function Cr(e){return e!=null}var oo={iconBackground:"#7290CC",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./apechain-SX5YFU6N-q5qBv-mp.js");return{default:e}},[])).default},Wt={iconBackground:"#96bedc",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./arbitrum-WURIBY6W-CqVkHBr5.js");return{default:e}},[])).default},ro={iconBackground:"#e84141",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./avalanche-KOMJD3XY-Dsn_JPR4.js");return{default:e}},[])).default},Pt={iconBackground:"#0052ff",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./base-OAXLRA4F-CoYTVIiL.js");return{default:e}},[])).default},Ut={iconBackground:"#814625",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./berachain-NJECWIVC-DumxnFvf.js");return{default:e}},[])).default},ao={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./blast-V555OVXZ-BbhJh1tj.js");return{default:e}},[])).default},io={iconBackground:"#ebac0e",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./bsc-N647EYR2-B2nLKXWV.js");return{default:e}},[])).default},lo={iconBackground:"#FCFF52",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./celo-GEP4TUHG-CenIBYLU.js");return{default:e}},[])).default},so={iconBackground:"#002D74",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./cronos-HJPAQTAE-BEOvlOC4.js");return{default:e}},[])).default},Hl={iconBackground:"#A36EFD",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./degen-FQQ4XGHB-CeHTs88l.js");return{default:e}},[])).default},be={iconBackground:"#484c50",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./ethereum-RGGVA4PY-SWGOlkuk.js");return{default:e}},[])).default},co={iconBackground:"transparent",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./flow-5FQJFCTK-CUie2reO.js");return{default:e}},[])).default},Kl={iconBackground:"#04795c",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./gnosis-37ZC4RBL-B137OtHZ.js");return{default:e}},[])).default},uo={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./gravity-J5YQHTYH-Bj6B0uod.js");return{default:e}},[])).default},Gl={iconBackground:"#f9f7ec",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./hardhat-TX56IT5N-CV1FY-wE.js");return{default:e}},[])).default},Yl={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./hyperevm-VKPAA4SA-CHwraEsx.js");return{default:e}},[])).default},fo={iconBackground:"#7132F5",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./ink-FZMYZWHG-62p-5IK5.js");return{default:e}},[])).default},po={iconBackground:"transparent",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./kaia-65D2U3PU-JmuLQ4gC.js");return{default:e}},[])).default},Qt={iconBackground:"#ffffff",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./linea-QRMVQ5DY-DuI3vv0d.js");return{default:e}},[])).default},zt={iconBackground:"#ffffff",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./manta-SI27YFEJ-CpVOKa06.js");return{default:e}},[])).default},mo={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./mantle-CKIUT334-DR2WgqzU.js");return{default:e}},[])).default},ct={iconBackground:"#ff5a57",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./optimism-HAF2GUT7-ec6Nqxs9.js");return{default:e}},[])).default},Vt={iconBackground:"#9f71ec",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./polygon-WW6ZI7PM-DXlmm4L1.js");return{default:e}},[])).default},Jl={iconBackground:"#1273EA",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./ronin-EMCPYXZT-N-QBHZdV.js");return{default:e}},[])).default},Xl={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./sanko-RHQYXGM5-OX010CbN.js");return{default:e}},[])).default},Zl={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./superposition-HG6MMR2Y-bRkgatRO.js");return{default:e}},[])).default},ho={iconBackground:"#FFEEDA",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./scroll-5OBGQVOV-DJFECiai.js");return{default:e}},[])).default},go={iconBackground:"#F50DB4",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./unichain-C5BWO2ZY-BfguYsnu.js");return{default:e}},[])).default},vo={iconBackground:"#f9f7ec",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./xdc-KJ3TDBYO-DNV6zchh.js");return{default:e}},[])).default},wo={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./zetachain-TLDS5IPW-Udhyw16T.js");return{default:e}},[])).default},bo={iconBackground:"#f9f7ec",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./zksync-DH7HK5U4-Dt4usFw6.js");return{default:e}},[])).default},qt={iconBackground:"#000000",iconUrl:async()=>(await j(async()=>{const{default:e}=await import("./zora-FYL5H3IO-iB4wygST.js");return{default:e}},[])).default},$l={apechain:{chainId:33139,name:"ApeChain",...oo},apechainCurtis:{chainId:33111,name:"ApeChain Curtis",...oo},arbitrum:{chainId:42161,name:"Arbitrum",...Wt},arbitrumGoerli:{chainId:421613,...Wt},arbitrumSepolia:{chainId:421614,...Wt},avalanche:{chainId:43114,...ro},avalancheFuji:{chainId:43113,...ro},base:{chainId:8453,name:"Base",...Pt},baseGoerli:{chainId:84531,...Pt},baseSepolia:{chainId:84532,...Pt},berachain:{chainId:80094,name:"Berachain",...Ut},berachainArtio:{chainId:80085,name:"Berachain Artio",...Ut},berachainBArtio:{chainId:80084,name:"Berachain bArtio",...Ut},blast:{chainId:81457,name:"Blast",...ao},blastSepolia:{chainId:168587773,...ao},bsc:{chainId:56,name:"BSC",...io},bscTestnet:{chainId:97,...io},celo:{chainId:42220,name:"Celo",...lo},celoAlfajores:{chainId:44787,name:"Celo Alfajores",...lo},cronos:{chainId:25,...so},cronosTestnet:{chainId:338,...so},degen:{chainId:666666666,name:"Degen",...Hl},flow:{chainId:747,...co},flowTestnet:{chainId:545,...co},gnosis:{chainId:100,name:"Gnosis",...Kl},goerli:{chainId:5,...be},gravity:{chainId:1625,name:"Gravity",...uo},gravitySepolia:{chainId:13505,name:"Gravity Sepolia",...uo},hardhat:{chainId:31337,...Gl},holesky:{chainId:17e3,...be},hyperevm:{chainId:999,...Yl},ink:{chainId:57073,...fo},inkSepolia:{chainId:763373,...fo},kaia:{chainId:8217,name:"Kaia",...po},kairos:{chainId:1001,name:"Kairos",...po},kovan:{chainId:42,...be},linea:{chainId:59144,name:"Linea",...Qt},lineaGoerli:{chainId:59140,name:"Linea Goerli",...Qt},lineaSepolia:{chainId:59141,name:"Linea Sepolia",...Qt},localhost:{chainId:1337,...be},mainnet:{chainId:1,name:"Ethereum",...be},manta:{chainId:169,name:"Manta",...zt},mantaSepolia:{chainId:3441006,...zt},mantaTestnet:{chainId:3441005,...zt},mantle:{chainId:5e3,...mo},mantleTestnet:{chainId:5001,...mo},optimism:{chainId:10,name:"Optimism",...ct},optimismGoerli:{chainId:420,...ct},optimismKovan:{chainId:69,...ct},optimismSepolia:{chainId:11155420,...ct},polygon:{chainId:137,name:"Polygon",...Vt},polygonAmoy:{chainId:80002,...Vt},polygonMumbai:{chainId:80001,...Vt},rinkeby:{chainId:4,...be},ronin:{chainId:2020,...Jl},ropsten:{chainId:3,...be},sanko:{chainId:1996,name:"Sanko",...Xl},scroll:{chainId:534352,...ho},scrollSepolia:{chainId:534351,...ho},sepolia:{chainId:11155111,...be},superposition:{chainId:55244,name:"Superposition",...Zl},unichain:{chainId:130,...go},unichainSepolia:{chainId:1301,...go},xdc:{chainId:50,name:"XDC",...vo},xdcTestnet:{chainId:51,...vo},zetachain:{chainId:7e3,name:"ZetaChain",...wo},zetachainAthensTestnet:{chainId:7001,name:"Zeta Athens",...wo},zkSync:{chainId:324,name:"zkSync",...bo},zkSyncTestnet:{chainId:280,...bo},zora:{chainId:7777777,name:"Zora",...qt},zoraSepolia:{chainId:999999999,...qt},zoraTestnet:{chainId:999,...qt}},es=Object.fromEntries(Object.values($l).filter(Cr).map(({chainId:e,...t})=>[e,t])),ts=e=>e.map(t=>{const n=es[t.id]??{};return{...t,name:n.name??t.name,iconUrl:t.iconUrl??n.iconUrl,iconBackground:t.iconBackground??n.iconBackground}}),fn=b.createContext({chains:[]});function ns({children:e,initialChain:t}){const{chains:n}=xt();return a.createElement(fn.Provider,{value:b.useMemo(()=>({chains:ts(n),initialChainId:typeof t=="number"?t:t==null?void 0:t.id}),[n,t])},e)}var Fe=()=>b.useContext(fn).chains,os=()=>b.useContext(fn).initialChainId,rs=()=>{const e=Fe();return b.useMemo(()=>{const t={};for(const n of e)t[n.id]=n;return t},[e])},yr=b.createContext({showBalance:void 0,setShowBalance:()=>{}});function as({children:e}){const[t,n]=b.useState();return a.createElement(yr.Provider,{value:{showBalance:t,setShowBalance:n}},e)}var is=()=>b.useContext(yr);function ls(){const[e,t]=b.useState(!1);return b.useEffect(()=>(t(!0),()=>{t(!1)}),[]),b.useCallback(()=>e,[e])}function Ar(){const e=Fe(),t=un.id;return e.some(o=>o.id===t)}function ss(e){const t=Ar(),n=r=>{try{return hi(r)}catch{}},{data:o}=wa({chainId:un.id,name:e?n(e):void 0,query:{enabled:t}});return o}async function Ee(e,t){if(t={headers:{},method:"get",...t,timeout:t.timeout??1e4},!e)throw new Error("rainbowFetch: Missing url argument");const n=new AbortController,o=setTimeout(()=>n.abort(),t.timeout),{body:r,params:i,headers:l,...s}=t,d=r&&typeof r=="object"?JSON.stringify(t.body):t.body,v=await fetch(`${e}${us(i)}`,{...s,body:d,headers:{Accept:"application/json","Content-Type":"application/json",...l},signal:n.signal});clearTimeout(o);const h=await cs(v);if(v.ok){const{headers:m,status:u}=v;return{data:h,headers:m,status:u}}throw ds({requestBody:r,response:v,responseBody:typeof h=="string"?{error:h}:h})}function cs(e){const t=e.headers.get("Content-Type");return t!=null&&t.startsWith("application/json")?e.json():e.text()}function us(e){return e&&Object.keys(e).length?`?${new URLSearchParams(e)}`:""}function ds({requestBody:e,response:t,responseBody:n}){const o=(n==null?void 0:n.error)||(t==null?void 0:t.statusText)||"There was an error with the request.",r=new Error(o);return r.response=t,r.responseBody=n,r.requestBody=e,r}var fs=class{constructor(e={}){const{baseUrl:t="",...n}=e;this.baseUrl=t,this.opts=n}get(e,t){return Ee(`${this.baseUrl}${e}`,{...this.opts,...t||{},method:"get"})}delete(e,t){return Ee(`${this.baseUrl}${e}`,{...this.opts,...t||{},method:"delete"})}head(e,t){return Ee(`${this.baseUrl}${e}`,{...this.opts,...t||{},method:"head"})}options(e,t){return Ee(`${this.baseUrl}${e}`,{...this.opts,...t||{},method:"options"})}post(e,t,n){return Ee(`${this.baseUrl}${e}`,{...this.opts,...n||{},body:t,method:"post"})}put(e,t,n){return Ee(`${this.baseUrl}${e}`,{...this.opts,...n||{},body:t,method:"put"})}patch(e,t,n){return Ee(`${this.baseUrl}${e}`,{...this.opts,...n||{},body:t,method:"patch"})}};function ps({baseUrl:e,headers:t,params:n,timeout:o}){return new fs({baseUrl:e,headers:t,params:n,timeout:o})}var ms=!!(typeof process<"u"&&typeof yt<"u"&&yt.RAINBOW_PROVIDER_API_KEY),hs=ps({baseUrl:"https://enhanced-provider.rainbow.me",headers:{"x-api-key":typeof process<"u"&&typeof yt<"u"&&yt.RAINBOW_PROVIDER_API_KEY||"LzbasoBiLqltex3VkcQ7LRmL4PtfiiZ1EMJrizrgfonWN6byJReu/l6yrUoo3zLW"}});function gs(e,t,n={}){return[e,t,n]}function ht(e){return`rk-ens-name-${e}`}function vs(e){try{const t=e?JSON.parse(e):null;return typeof t=="object"?t:null}catch{return null}}function ws(e,t){if(!ba(e))return;const n=new Date,o=new Date(n.getTime()+180*6e4);localStorage.setItem(ht(e),JSON.stringify({ensName:t,expires:o.getTime()}))}function bs(e){const t=vs(localStorage.getItem(ht(e)));if(!t)return null;const{ensName:n,expires:o}=t;return typeof n!="string"||Number.isNaN(Number(o))||new Date().getTime()>Number(o)?(localStorage.removeItem(ht(e)),null):n}async function Cs({address:e}){const t=bs(e);if(t)return t;const o=(await hs.get("/v1/resolve-ens",{params:{address:e}})).data.data;return o&&ws(e,o),o}function ys(e){const t=Ar(),{data:n}=ga({chainId:un.id,address:e,query:{enabled:t}}),{data:o}=va({queryKey:gs("address",e),queryFn:()=>Cs({address:e}),enabled:!t&&!!e&&ms,staleTime:10*(60*1e3),retry:1});return n||o}function Er({address:e,includeBalance:t}){const n=ys(e),o=ss(n),{data:r}=To({address:t?e:void 0});return{ensName:n,ensAvatar:o,balance:r}}function pn(){const{chain:e}=ae();return(e==null?void 0:e.id)??null}var xr="rk-transactions";function As(e){try{const t=e?JSON.parse(e):{};return typeof t=="object"?t:{}}catch{return{}}}function Co(){return As(typeof localStorage<"u"?localStorage.getItem(xr):null)}var Es=/^0x([A-Fa-f0-9]{64})$/;function xs(e){const t=[];return Es.test(e.hash)||t.push("Invalid transaction hash"),typeof e.description!="string"&&t.push("Transaction must have a description"),typeof e.confirmations<"u"&&(!Number.isInteger(e.confirmations)||e.confirmations<1)&&t.push("Transaction confirmations must be a positiver integer"),t}function ks({provider:e}){let t=Co(),n=e;const o=new Set,r=new Set,i=new Map;function l(y){n=y}function s(y,E){var A;return((A=t[y])==null?void 0:A[E])??[]}function d(y,E,A){const k=xs(A);if(k.length>0)throw new Error(["Unable to add transaction",...k].join(`
`));c(y,E,I=>[{...A,status:"pending"},...I.filter(({hash:x})=>x!==A.hash)])}function v(y,E){c(y,E,()=>[])}function h(y,E,A,k){c(y,E,I=>I.map(x=>x.hash===A?{...x,status:k}:x))}async function f(y,E){await Promise.all(s(y,E).filter(A=>A.status==="pending").map(async A=>{const{confirmations:k,hash:I}=A,x=i.get(I);if(x)return await x;const S=n.waitForTransactionReceipt({confirmations:k,hash:I,timeout:3e5}).then(({status:T})=>{i.delete(I),T!==void 0&&(h(y,E,I,T===0||T==="reverted"?"failed":"confirmed"),p(T))}).catch(()=>{h(y,E,I,"failed")});return i.set(I,S),await S}))}function c(y,E,A){t=Co(),t[y]=t[y]??{};let k=0;const I=10,x=A(t[y][E]??[]).filter(({status:S})=>S==="pending"?!0:k++<=I);t[y][E]=x.length>0?x:void 0,m(),u(),f(y,E)}function m(){localStorage.setItem(xr,JSON.stringify(t))}function u(){for(const y of o)y()}function p(y){for(const E of r)E(y)}function w(y){return o.add(y),()=>{o.delete(y)}}function C(y){return r.add(y),()=>{r.delete(y)}}return{addTransaction:d,clearTransactions:v,getTransactions:s,onTransactionStatus:C,onChange:w,setProvider:l,waitForPendingTransactions:f}}var yo,kr=a.createContext(null);function js({children:e}){const t=da(),{address:n}=ae(),o=pn(),{refetch:r}=To({address:n,query:{enabled:!1}}),[i]=a.useState(()=>yo??(yo=ks({provider:t}))),l=a.useCallback(s=>{s==="success"&&r()},[r]);return a.useEffect(()=>{i.setProvider(t)},[i,t]),a.useEffect(()=>{n&&o&&i.waitForPendingTransactions(n,o)},[i,n,o]),a.useEffect(()=>{if(i&&n&&o)return i.onTransactionStatus(l)},[i,n,o,l]),a.createElement(kr.Provider,{value:i},e)}function jr(){const e=a.useContext(kr);if(!e)throw new Error("Transaction hooks must be used within RainbowKitProvider");return e}function Br(){const e=jr(),{address:t}=ae(),n=pn(),[o,r]=b.useState(()=>e&&t&&n?e.getTransactions(t,n):[]);return b.useEffect(()=>{if(e&&t&&n)return r(e.getTransactions(t,n)),e.onChange(()=>{r(e.getTransactions(t,n))})},[e,t,n]),o}var Ao=e=>typeof e=="function"?e():e;function Bs(e,{extends:t}={}){const n={...zn($n,Ao(e))};if(!t)return n;const o=zn($n,Ao(t));return Object.fromEntries(Object.entries(n).filter(([i,l])=>l!==o[i]))}function Eo(e,t={}){return Object.entries(Bs(e,t)).map(([n,o])=>`${n}:${o.replace(/[:;{}</>]/g,"")};`).join("")}var _r={appName:void 0,disclaimer:void 0,learnMoreUrl:"https://learn.rainbow.me/understanding-web3?utm_source=rainbowkit&utm_campaign=learnmore"},$e=b.createContext(_r),Ir=b.createContext(!1);function _s(e,t){let n;return()=>{n&&clearTimeout(n),n=setTimeout(()=>{n=null,e()},t)}}var Sr=()=>{const[e,t]=b.useState({height:void 0,width:void 0});return b.useEffect(()=>{const n=_s(()=>{t({height:window.innerHeight,width:window.innerWidth})},500);return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),e},et=b.createContext({connector:null,setConnector:()=>{}});function Is({children:e}){const[t,n]=b.useState(null);return a.createElement(et.Provider,{value:b.useMemo(()=>({connector:t,setConnector:n}),[t])},e)}var tt={COMPACT:"compact",WIDE:"wide"},St=b.createContext(tt.WIDE);function Ss({children:e,modalSize:t}){const{width:n}=Sr(),o=n&&n<Al,{connector:r}=b.useContext(et);return a.createElement(St.Provider,{value:o||r?tt.COMPACT:t},e)}var mn=b.createContext(!1),Ts="rk-version";function Ds({version:e}){localStorage.setItem(Ts,e)}function Os(){const e=b.useCallback(()=>{Ds({version:"2.2.8"})},[]);b.useEffect(()=>{e()},[e])}function Rs(e,t){const n={};for(const o of e){const r=t(o);r&&(n[r]=o)}return n}function hn(){return typeof navigator<"u"&&typeof navigator.userAgent<"u"&&/Version\/([0-9._]+).*Safari/.test(navigator.userAgent)}function Ms(){return typeof document<"u"&&getComputedStyle(document.body).getPropertyValue("--arc-palette-focus")!==""}function gn(){var t,n;if(typeof navigator>"u")return"Browser";const e=(t=navigator.userAgent)==null?void 0:t.toLowerCase();return(n=navigator.brave)!=null&&n.isBrave?"Brave":(e==null?void 0:e.indexOf("edg/"))>-1?"Edge":(e==null?void 0:e.indexOf("op"))>-1?"Opera":Ms()?"Arc":(e==null?void 0:e.indexOf("chrome"))>-1?"Chrome":(e==null?void 0:e.indexOf("firefox"))>-1?"Firefox":hn()?"Safari":"Browser"}var Ls=nl.UAParser(),{os:vn}=Ls;function Ns(){return vn.name==="Windows"}function Fs(){return vn.name==="Mac OS"}function Ws(){return["Ubuntu","Mint","Fedora","Debian","Arch","Linux"].includes(vn.name)}function wn(){return Ns()?"Windows":Fs()?"macOS":Ws()?"Linux":"Desktop"}var Ps=e=>{var n,o,r,i,l,s,d,v,h,f,c;const t=gn();return{Arc:(n=e==null?void 0:e.downloadUrls)==null?void 0:n.chrome,Brave:(o=e==null?void 0:e.downloadUrls)==null?void 0:o.chrome,Chrome:(r=e==null?void 0:e.downloadUrls)==null?void 0:r.chrome,Edge:((i=e==null?void 0:e.downloadUrls)==null?void 0:i.edge)||((l=e==null?void 0:e.downloadUrls)==null?void 0:l.chrome),Firefox:(s=e==null?void 0:e.downloadUrls)==null?void 0:s.firefox,Opera:((d=e==null?void 0:e.downloadUrls)==null?void 0:d.opera)||((v=e==null?void 0:e.downloadUrls)==null?void 0:v.chrome),Safari:(h=e==null?void 0:e.downloadUrls)==null?void 0:h.safari,Browser:(f=e==null?void 0:e.downloadUrls)==null?void 0:f.browserExtension}[t]??((c=e==null?void 0:e.downloadUrls)==null?void 0:c.browserExtension)},Us=e=>{var n,o,r;return(_t()?(n=e==null?void 0:e.downloadUrls)==null?void 0:n.ios:(o=e==null?void 0:e.downloadUrls)==null?void 0:o.android)??((r=e==null?void 0:e.downloadUrls)==null?void 0:r.mobile)},Qs=e=>{var n,o,r,i,l;const t=wn();return{Windows:(n=e==null?void 0:e.downloadUrls)==null?void 0:n.windows,macOS:(o=e==null?void 0:e.downloadUrls)==null?void 0:o.macos,Linux:(r=e==null?void 0:e.downloadUrls)==null?void 0:r.linux,Desktop:(i=e==null?void 0:e.downloadUrls)==null?void 0:i.desktop}[t]??((l=e==null?void 0:e.downloadUrls)==null?void 0:l.desktop)},Tr=(e,t)=>e.some(n=>n.id===t),zs=e=>!!e.isRainbowKitConnector,xo=e=>{var t;return!!(!e.isRainbowKitConnector&&((t=e.icon)!=null&&t.replace(/\n/g,"").startsWith("data:image"))&&e.uid&&e.name)},Vs=(e,t)=>e.id==="walletConnect"&&t?{...e,walletConnectModalConnector:t}:e,qs=({wallets:e,recentWallets:t})=>[...t,...e.filter(n=>!Tr(t,n.id))],Dr="rk-recent";function Hs(e){try{const t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function Or(){return typeof localStorage<"u"?Hs(localStorage.getItem(Dr)):[]}function Ks(e){return[...new Set(e)]}function Gs(e){const t=Ks([e,...Or()]);localStorage.setItem(Dr,JSON.stringify(t))}function Ze(e=!1){var A,k,I;const t=Fe(),n=os(),{connectAsync:o,connectors:r}=fa(),i=r,{setIsWalletConnectModalOpen:l}=ra(),s=i.map(x=>({...x,...x.rkDetails||{}}));async function d(x){var F,q;const S=await x.getChainId(),T=await o({chainId:n??((F=t.find(({id:H})=>H===S))==null?void 0:F.id)??((q=t[0])==null?void 0:q.id),connector:x});return T&&Gs(x.id),T}async function v(x){try{l(!0),await d(x),l(!1)}catch(S){const T=S.name==="UserRejectedRequestError"||S.message==="Connection request reset. Please try again.";if(l(!1),!T)throw S}}const h=async(x,S)=>{const T=await x.getProvider();return x.id==="coinbase"?T.qrUrl:new Promise(F=>T.once("display_uri",q=>{F(S(q))}))},f=s.find(x=>x.id==="walletConnect"&&x.isWalletConnectModalConnector),c=s.filter(xo).map(x=>({...x,groupIndex:0})),m=s.filter(zs).filter(x=>!x.isWalletConnectModalConnector).filter(x=>e?!c.some(T=>T.id===x.rdns):!0).map(x=>Vs(x,f)),u=[...c,...m],p=Rs(u,x=>x.id),C=Or().map(x=>p[x]).filter(Boolean).slice(0,3),y=[],E=qs({wallets:u,recentWallets:C});for(const x of E){if(!x)continue;const S=xo(x),T=Tr(C,x.id);if(S){y.push({...x,iconUrl:x.icon,ready:!0,connect:()=>d(x),groupName:"Installed",recent:T});continue}y.push({...x,ready:x.installed??!0,connect:()=>d(x),desktopDownloadUrl:Qs(x),extensionDownloadUrl:Ps(x),groupName:x.groupName,mobileDownloadUrl:Us(x),getQrCodeUri:(A=x.qrCode)!=null&&A.getUri?()=>h(x,x.qrCode.getUri):void 0,getDesktopUri:(k=x.desktop)!=null&&k.getUri?()=>h(x,x.desktop.getUri):void 0,getMobileUri:(I=x.mobile)!=null&&I.getUri?()=>{var F;return h(x,(F=x.mobile)==null?void 0:F.getUri)}:void 0,recent:T,showWalletConnectModal:x.walletConnectModalConnector?()=>v(x.walletConnectModalConnector):void 0})}return y}var Rr=async()=>(await j(async()=>{const{default:e}=await import("./assets-Q6ZU7ZJ5-P8HioiAD.js");return{default:e}},[])).default,Ys=()=>he(Rr),Js=()=>a.createElement(J,{background:"#d0d5de",borderRadius:"10",height:"48",src:Rr,width:"48"}),Mr=async()=>(await j(async()=>{const{default:e}=await import("./login-UP3DZBGS-Db_wM5oQ.js");return{default:e}},[])).default,Xs=()=>he(Mr),Zs=()=>a.createElement(J,{background:"#d0d5de",borderRadius:"10",height:"48",src:Mr,width:"48"}),_=a.forwardRef(({as:e="div",children:t,className:n,color:o,display:r,font:i="body",id:l,size:s="16",style:d,tabIndex:v,textAlign:h="inherit",weight:f="regular",testId:c},m)=>a.createElement(g,{as:e,className:n,color:o,display:r,fontFamily:i,fontSize:s,fontWeight:f,id:l,ref:m,style:d,tabIndex:v,textAlign:h,testId:c},t));_.displayName="Text";var $s={large:{fontSize:"16",paddingX:"24",paddingY:"10"},medium:{fontSize:"14",height:"28",paddingX:"12",paddingY:"4"},small:{fontSize:"14",paddingX:"10",paddingY:"5"}};function ne({disabled:e=!1,href:t,label:n,onClick:o,rel:r="noreferrer noopener",size:i="medium",target:l="_blank",testId:s,type:d="primary"}){const v=d==="primary",h=i!=="large",f=Z(),c=e?"actionButtonSecondaryBackground":v?"accentColor":h?"actionButtonSecondaryBackground":null,{fontSize:m,height:u,paddingX:p,paddingY:w}=$s[i],C=!f||!h;return a.createElement(g,{...t?e?{}:{as:"a",href:t,rel:r,target:l}:{as:"button",type:"button"},onClick:e?void 0:o,...C?{borderColor:f&&!h&&!v?"actionButtonBorderMobile":"actionButtonBorder",borderStyle:"solid",borderWidth:"1"}:{},borderRadius:"actionButton",className:!e&&X({active:"shrinkSm",hover:"grow"}),display:"block",paddingX:p,paddingY:w,style:{willChange:"transform"},testId:s,textAlign:"center",transition:"transform",...c?{background:c}:{},...u?{height:u}:{}},a.createElement(_,{color:e?"modalTextSecondary":v?"accentColorForeground":"accentColor",size:m,weight:"bold"},n))}var ec=()=>Z()?a.createElement("svg",{"aria-hidden":!0,fill:"none",height:"11.5",viewBox:"0 0 11.5 11.5",width:"11.5",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Close"),a.createElement("path",{d:"M2.13388 0.366117C1.64573 -0.122039 0.854272 -0.122039 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L3.98223 5.75L0.366117 9.36612C-0.122039 9.85427 -0.122039 10.6457 0.366117 11.1339C0.854272 11.622 1.64573 11.622 2.13388 11.1339L5.75 7.51777L9.36612 11.1339C9.85427 11.622 10.6457 11.622 11.1339 11.1339C11.622 10.6457 11.622 9.85427 11.1339 9.36612L7.51777 5.75L11.1339 2.13388C11.622 1.64573 11.622 0.854272 11.1339 0.366117C10.6457 -0.122039 9.85427 -0.122039 9.36612 0.366117L5.75 3.98223L2.13388 0.366117Z",fill:"currentColor"})):a.createElement("svg",{"aria-hidden":!0,fill:"none",height:"10",viewBox:"0 0 10 10",width:"10",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Close"),a.createElement("path",{d:"M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z",fill:"currentColor"})),je=({"aria-label":e="Close",onClose:t})=>{const n=Z();return a.createElement(g,{alignItems:"center","aria-label":e,as:"button",background:"closeButtonBackground",borderColor:"actionButtonBorder",borderRadius:"full",borderStyle:"solid",borderWidth:n?"0":"1",className:X({active:"shrinkSm",hover:"growLg"}),color:"closeButton",display:"flex",height:n?"30":"28",justifyContent:"center",onClick:t,style:{willChange:"transform"},transition:"default",type:"button",width:n?"30":"28"},a.createElement(ec,null))},Lr=async()=>(await j(async()=>{const{default:e}=await import("./sign-A7IJEUT5-CGsRnPrd.js");return{default:e}},[])).default;function tc({onClose:e,onCloseModal:t}){const{i18n:n}=b.useContext(Y),[{status:o,...r},i]=a.useState({status:"idle"}),l=Bl(),s=b.useCallback(async()=>{try{const u=await l.getNonce();i(p=>({...p,nonce:u}))}catch{i(u=>({...u,errorMessage:n.t("sign_in.message.preparing_error"),status:"idle"}))}},[l,n.t]),d=b.useRef(!1);a.useEffect(()=>{d.current||(d.current=!0,s())},[s]);const v=Z(),{address:h,chain:f}=ae(),{signMessageAsync:c}=ma(),m=async()=>{try{const u=f==null?void 0:f.id,{nonce:p}=r;if(!h||!u||!p)return;i(y=>({...y,errorMessage:void 0,status:"signing"}));const w=l.createMessage({address:h,chainId:u,nonce:p});let C;try{C=await c({message:w})}catch(y){return y instanceof ha?i(E=>({...E,status:"idle"})):i(E=>({...E,errorMessage:n.t("sign_in.signature.signing_error"),status:"idle"}))}i(y=>({...y,status:"verifying"}));try{if(await l.verify({message:w,signature:C})){t();return}throw new Error}catch{return i(y=>({...y,errorMessage:n.t("sign_in.signature.verifying_error"),status:"idle"}))}}catch{i({errorMessage:n.t("sign_in.signature.oops_error"),status:"idle"})}};return a.createElement(g,{position:"relative"},a.createElement(g,{display:"flex",paddingRight:"16",paddingTop:"16",position:"absolute",right:"0"},a.createElement(je,{onClose:e})),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:v?"32":"24",padding:"24",paddingX:"18",style:{paddingTop:v?"60px":"36px"}},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:v?"6":"4",style:{maxWidth:v?320:280}},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:v?"32":"16"},a.createElement(J,{height:40,src:Lr,width:40}),a.createElement(_,{color:"modalText",size:v?"20":"18",textAlign:"center",weight:"heavy"},n.t("sign_in.label"))),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:v?"16":"12"},a.createElement(_,{color:"modalTextSecondary",size:v?"16":"14",textAlign:"center"},n.t("sign_in.description")),o==="idle"&&r.errorMessage?a.createElement(_,{color:"error",size:v?"16":"14",textAlign:"center",weight:"bold"},r.errorMessage):null)),a.createElement(g,{alignItems:v?void 0:"center",display:"flex",flexDirection:"column",gap:"8",width:"full"},a.createElement(ne,{disabled:!r.nonce||o==="signing"||o==="verifying",label:r.nonce?o==="signing"?n.t("sign_in.signature.waiting"):o==="verifying"?n.t("sign_in.signature.verifying"):n.t("sign_in.message.send"):n.t("sign_in.message.preparing"),onClick:m,size:v?"large":"medium",testId:"auth-message-button"}),v?a.createElement(ne,{label:"Cancel",onClick:e,size:"large",type:"secondary"}):a.createElement(g,{as:"button",borderRadius:"full",className:X({active:"shrink",hover:"grow"}),display:"block",onClick:e,paddingX:"10",paddingY:"5",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},a.createElement(_,{color:"closeButton",size:v?"16":"14",weight:"bold"},n.t("sign_in.message.cancel"))))))}function nc(){const e=Fe(),t=Ze(),n=Bt()==="unauthenticated",o=b.useCallback(()=>{he(...t.map(r=>r.iconUrl),...e.map(r=>r.iconUrl).filter(Cr)),Z()||(Ys(),Xs()),n&&he(Lr)},[t,e,n]);b.useEffect(()=>{o()},[o])}var Nr="WALLETCONNECT_DEEPLINK_CHOICE";function oc({mobileUri:e,name:t}){localStorage.setItem(Nr,JSON.stringify({href:e.split("?")[0],name:t}))}function rc(){localStorage.removeItem(Nr)}var Fr=b.createContext(void 0),rn="data-rk",Wr=e=>({[rn]:e||""}),ac=e=>{if(e&&!/^[a-zA-Z0-9_]+$/.test(e))throw new Error(`Invalid ID: ${e}`);return e?`[${rn}="${e}"]`:`[${rn}]`},ic=()=>{const e=b.useContext(Fr);return Wr(e)},lc=Mo();function Iu({appInfo:e,avatar:t,children:n,coolMode:o=!1,id:r,initialChain:i,locale:l,modalSize:s=tt.WIDE,showRecentTransactions:d=!1,theme:v=lc}){if(nc(),Os(),So({onDisconnect:rc}),typeof v=="function")throw new Error('A theme function was provided to the "theme" prop instead of a theme object. You must execute this function to get the resulting theme object.');const h=ac(r),f={..._r,...e},c=t??wr;return a.createElement(ns,{initialChain:i},a.createElement(Is,null,a.createElement(ql,{locale:l},a.createElement(Ir.Provider,{value:o},a.createElement(Ss,{modalSize:s},a.createElement(mn.Provider,{value:d},a.createElement(js,null,a.createElement(br.Provider,{value:c},a.createElement($e.Provider,{value:f},a.createElement(Fr.Provider,{value:r},a.createElement(as,null,a.createElement(Cu,null,v?a.createElement("div",{...Wr(r)},a.createElement("style",{dangerouslySetInnerHTML:{__html:[`${h}{${Eo("lightMode"in v?v.lightMode:v)}}`,"darkMode"in v?`@media(prefers-color-scheme:dark){${h}{${Eo(v.darkMode,{extends:v.lightMode})}}}`:null].join("")}}),n):n))))))))))))}var sc="_9pm4ki5 ju367va ju367v15 ju367v8r",cc="_9pm4ki3 ju367v9h ju367vb3 ju367va ju367v2q ju367v8q",ko=(e,t)=>{const n=e.querySelectorAll("button:not(:disabled), a[href]");n.length!==0&&n[t==="end"?n.length-1:0].focus()};function uc(e){const t=b.useRef(null);return b.useEffect(()=>{const n=document.activeElement;return()=>{var o;(o=n.focus)==null||o.call(n)}},[]),b.useEffect(()=>{if(t.current){const n=t.current.querySelector("[data-auto-focus]");n?n.focus():t.current.focus()}},[]),a.createElement(a.Fragment,null,a.createElement("div",{onFocus:b.useCallback(()=>t.current&&ko(t.current,"end"),[]),tabIndex:0}),a.createElement("div",{ref:t,style:{outline:"none"},tabIndex:-1,...e}),a.createElement("div",{onFocus:b.useCallback(()=>t.current&&ko(t.current,"start"),[]),tabIndex:0}))}var dc=e=>e.stopPropagation();function At({children:e,onClose:t,open:n,titleId:o}){b.useEffect(()=>{const v=h=>n&&h.key==="Escape"&&t();return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[n,t]);const[r,i]=b.useState(!0);b.useEffect(()=>{i(getComputedStyle(window.document.body).overflow!=="hidden")},[]);const l=b.useCallback(()=>t(),[t]),s=ic(),d=Z();return a.createElement(a.Fragment,null,n?gi.createPortal(a.createElement(fr,{enabled:r},a.createElement(g,{...s},a.createElement(g,{...s,alignItems:d?"flex-end":"center","aria-labelledby":o,"aria-modal":!0,className:cc,onClick:l,position:"fixed",role:"dialog"},a.createElement(uc,{className:sc,onClick:dc,role:"document"},e)))),document.body):null)}var fc="_1ckjpok7",pc="_1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",mc="_1ckjpok4 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",hc="_1ckjpok6 ju367vq",gc="_1ckjpok3 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r",vc="_1ckjpok2 _1ckjpok1 ju367vb6 ju367vdr ju367vp ju367vt ju367vv ju367vel ju367va ju367v15 ju367v6c ju367v8r";function Et({bottomSheetOnMobile:e=!1,children:t,marginTop:n,padding:o="16",paddingBottom:r,wide:i=!1}){const l=Z(),d=b.useContext(St)===tt.COMPACT;return a.createElement(g,{marginTop:n},a.createElement(g,{className:[i?l?vc:d?mc:gc:pc,l?hc:null,l&&e?fc:null].join(" ")},a.createElement(g,{padding:o,paddingBottom:r??o},t)))}var jo=["k","m","b","t"];function ut(e,t=1){return e.toString().replace(new RegExp(`(.+\\.\\d{${t}})\\d+`),"$1").replace(/(\.[1-9]*)0+$/,"$1").replace(/\.$/,"")}function Pr(e){if(e<1)return ut(e,3);if(e<10**2)return ut(e,2);if(e<10**4)return new Intl.NumberFormat().format(Number.parseFloat(ut(e,1)));const t=10**1;let n=String(e);for(let o=jo.length-1;o>=0;o--){const r=10**((o+1)*3);if(r<=e){e=e*t/r/t,n=ut(e,1)+jo[o];break}}return n}function Ur(e){return e.length<8?e:`${e.substring(0,4)}…${e.substring(e.length-4)}`}function Qr(e){if(!e)return"";const t=e.split("."),n=t.pop();return t.join(".").length>24?`${t.join(".").substring(0,24)}...`:`${t.join(".")}.${n}`}var wc=()=>a.createElement("svg",{fill:"none",height:"13",viewBox:"0 0 13 13",width:"13",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Copied"),a.createElement("path",{d:"M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z",fill:"currentColor"})),bc=()=>a.createElement("svg",{fill:"none",height:"16",viewBox:"0 0 17 16",width:"17",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Copy"),a.createElement("path",{d:"M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z",fill:"currentColor"})),Cc=()=>a.createElement("svg",{fill:"none",height:"16",viewBox:"0 0 18 16",width:"18",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Disconnect"),a.createElement("path",{d:"M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z",fill:"currentColor"}));function yc(){const e=jr(),{address:t}=ae(),n=pn();return b.useCallback(()=>{if(!t||!n)throw new Error("No address or chain ID found");e.clearTransactions(t,n)},[e,t,n])}var zr=e=>{var t,n;return(n=(t=e==null?void 0:e.blockExplorers)==null?void 0:t.default)==null?void 0:n.url},Vr=()=>a.createElement("svg",{fill:"none",height:"19",viewBox:"0 0 20 19",width:"20",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Link"),a.createElement("path",{d:"M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM12.7158 12.1416C13.2432 12.1416 13.5684 11.7549 13.5684 11.1836V7.19336C13.5684 6.44629 13.1377 6.05957 12.417 6.05957H8.40918C7.8291 6.05957 7.45117 6.38477 7.45117 6.91211C7.45117 7.43945 7.8291 7.77344 8.40918 7.77344H9.69238L10.7207 7.63281L9.53418 8.67871L6.73047 11.4912C6.53711 11.6758 6.41406 11.9395 6.41406 12.2031C6.41406 12.7832 6.85352 13.1699 7.39844 13.1699C7.68848 13.1699 7.92578 13.0732 8.1543 12.8623L10.9316 10.0762L11.9775 8.89844L11.8545 9.98828V11.1836C11.8545 11.7725 12.1885 12.1416 12.7158 12.1416Z",fill:"currentColor"})),Ac=()=>a.createElement("svg",{fill:"none",height:"19",viewBox:"0 0 20 19",width:"20",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Cancel"),a.createElement("path",{d:"M10 18.9443C15.0977 18.9443 19.2812 14.752 19.2812 9.6543C19.2812 4.56543 15.0889 0.373047 10 0.373047C4.90234 0.373047 0.71875 4.56543 0.71875 9.6543C0.71875 14.752 4.91113 18.9443 10 18.9443ZM10 16.6328C6.1416 16.6328 3.03906 13.5215 3.03906 9.6543C3.03906 5.7959 6.13281 2.68457 10 2.68457C13.8584 2.68457 16.9697 5.7959 16.9697 9.6543C16.9785 13.5215 13.8672 16.6328 10 16.6328ZM7.29297 13.3018C7.58301 13.3018 7.81152 13.2139 7.99609 13.0205L10 11.0166L12.0127 13.0205C12.1973 13.2051 12.4258 13.3018 12.707 13.3018C13.2432 13.3018 13.6562 12.8887 13.6562 12.3525C13.6562 12.0977 13.5508 11.8691 13.3662 11.6934L11.3535 9.67188L13.375 7.6416C13.5596 7.44824 13.6562 7.22852 13.6562 6.98242C13.6562 6.44629 13.2432 6.0332 12.7158 6.0332C12.4346 6.0332 12.2148 6.12109 12.0215 6.31445L10 8.32715L7.9873 6.32324C7.80273 6.12988 7.58301 6.04199 7.29297 6.04199C6.76562 6.04199 6.35254 6.45508 6.35254 6.99121C6.35254 7.2373 6.44922 7.46582 6.63379 7.6416L8.65527 9.67188L6.63379 11.6934C6.44922 11.8691 6.35254 12.1064 6.35254 12.3525C6.35254 12.8887 6.76562 13.3018 7.29297 13.3018Z",fill:"currentColor"})),Ec=()=>a.createElement("svg",{fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Success"),a.createElement("path",{d:"M10 19.4443C15.0977 19.4443 19.2812 15.252 19.2812 10.1543C19.2812 5.06543 15.0889 0.873047 10 0.873047C4.90234 0.873047 0.71875 5.06543 0.71875 10.1543C0.71875 15.252 4.91113 19.4443 10 19.4443ZM10 17.1328C6.1416 17.1328 3.03906 14.0215 3.03906 10.1543C3.03906 6.2959 6.13281 3.18457 10 3.18457C13.8584 3.18457 16.9697 6.2959 16.9697 10.1543C16.9785 14.0215 13.8672 17.1328 10 17.1328ZM9.07715 14.3379C9.4375 14.3379 9.7627 14.1533 9.97363 13.8369L13.7441 8.00977C13.8848 7.79883 13.9814 7.5791 13.9814 7.36816C13.9814 6.84961 13.5244 6.48926 13.0322 6.48926C12.707 6.48926 12.4258 6.66504 12.2148 7.0166L9.05957 12.0967L7.5918 10.2949C7.37207 10.0225 7.13477 9.9082 6.84473 9.9082C6.33496 9.9082 5.92188 10.3125 5.92188 10.8223C5.92188 11.0684 6.00098 11.2793 6.18555 11.5078L8.1543 13.8545C8.40918 14.1709 8.70801 14.3379 9.07715 14.3379Z",fill:"currentColor"})),xc=e=>{switch(e){case"pending":return Xe;case"confirmed":return Ec;case"failed":return Ac;default:return Xe}};function kc({tx:e}){const t=Z(),n=xc(e.status),o=e.status==="failed"?"error":"accentColor",{chain:r}=ae(),i=e.status==="confirmed"?"Confirmed":e.status==="failed"?"Failed":"Pending",l=zr(r);return a.createElement(a.Fragment,null,a.createElement(g,{...l?{as:"a",background:{hover:"profileForeground"},borderRadius:"menuButton",className:X({active:"shrink"}),href:`${l}/tx/${e.hash}`,rel:"noreferrer noopener",target:"_blank",transition:"default"}:{},color:"modalText",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"8",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:t?"16":"14"},a.createElement(g,{color:o},a.createElement(n,null)),a.createElement(g,{display:"flex",flexDirection:"column",gap:t?"3":"1"},a.createElement(g,null,a.createElement(_,{color:"modalText",font:"body",size:t?"16":"14",weight:"bold"},e==null?void 0:e.description)),a.createElement(g,null,a.createElement(_,{color:e.status==="pending"?"modalTextSecondary":o,font:"body",size:"14",weight:t?"medium":"regular"},i)))),l&&a.createElement(g,{alignItems:"center",color:"modalTextDim",display:"flex"},a.createElement(Vr,null))))}var jc=3;function Bc({address:e}){const t=Br(),n=yc(),{chain:o}=ae(),r=zr(o),i=t.slice(0,jc),l=i.length>0,s=Z(),{appName:d}=b.useContext($e),{i18n:v}=b.useContext(Y);return a.createElement(a.Fragment,null,a.createElement(g,{display:"flex",flexDirection:"column",gap:"10",paddingBottom:"2",paddingTop:"16",paddingX:s?"8":"18"},l&&a.createElement(g,{paddingBottom:s?"4":"0",paddingTop:"8",paddingX:s?"12":"6"},a.createElement(g,{display:"flex",justifyContent:"space-between"},a.createElement(_,{color:"modalTextSecondary",size:s?"16":"14",weight:"semibold"},v.t("profile.transactions.recent.title")),a.createElement(g,{style:{marginBottom:-6,marginLeft:-10,marginRight:-10,marginTop:-6}},a.createElement(g,{as:"button",background:{hover:"profileForeground"},borderRadius:"actionButton",className:X({active:"shrink"}),onClick:n,paddingX:s?"8":"12",paddingY:s?"4":"5",transition:"default",type:"button"},a.createElement(_,{color:"modalTextSecondary",size:s?"16":"14",weight:"semibold"},v.t("profile.transactions.clear.label")))))),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},l?i.map(h=>a.createElement(kc,{key:h.hash,tx:h})):a.createElement(a.Fragment,null,a.createElement(g,{padding:s?"12":"8"},a.createElement(_,{color:"modalTextDim",size:s?"16":"14",weight:s?"medium":"bold"},d?v.t("profile.transactions.description",{appName:d}):v.t("profile.transactions.description_fallback"))),s&&a.createElement(g,{background:"generalBorderDim",height:"1",marginX:"12",marginY:"8"})))),r&&a.createElement(g,{paddingBottom:"18",paddingX:s?"8":"18"},a.createElement(g,{alignItems:"center",as:"a",background:{hover:"profileForeground"},borderRadius:"menuButton",className:X({active:"shrink"}),color:"modalTextDim",display:"flex",flexDirection:"row",href:`${r}/address/${e}`,justifyContent:"space-between",paddingX:"8",paddingY:"12",rel:"noreferrer noopener",style:{willChange:"transform"},target:"_blank",transition:"default",width:"full",...s?{paddingLeft:"12"}:{}},a.createElement(_,{color:"modalText",font:"body",size:s?"16":"14",weight:s?"semibold":"bold"},v.t("profile.explorer.label")),a.createElement(Vr,null))))}function Bo({action:e,icon:t,label:n,testId:o,url:r}){const i=Z();return a.createElement(g,{...r?{as:"a",href:r,rel:"noreferrer noopener",target:"_blank"}:{as:"button",type:"button"},background:{base:"profileAction",...i?{}:{hover:"profileActionHover"}},borderRadius:"menuButton",boxShadow:"profileDetailsAction",className:X({active:"shrinkSm",hover:i?void 0:"grow"}),display:"flex",onClick:e,padding:i?"6":"8",style:{willChange:"transform"},testId:o,transition:"default",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"1",justifyContent:"center",paddingTop:"2",width:"full"},a.createElement(g,{color:"modalText",height:"max"},t),a.createElement(g,null,a.createElement(_,{color:"modalText",size:i?"12":"13",weight:"semibold"},n))))}function _c({address:e,ensAvatar:t,ensName:n,balance:o,onClose:r,onDisconnect:i}){const l=b.useContext(mn),[s,d]=b.useState(!1),v=b.useCallback(()=>{e&&(navigator.clipboard.writeText(e),d(!0))},[e]);if(b.useEffect(()=>{if(s){const w=setTimeout(()=>{d(!1)},1500);return()=>clearTimeout(w)}},[s]),!e)return null;const h=n?Qr(n):Ur(e),f=o==null?void 0:o.formatted,c=f?Pr(Number.parseFloat(f)):void 0,m="rk_profile_title",u=Z(),{i18n:p}=b.useContext(Y);return a.createElement(a.Fragment,null,a.createElement(g,{display:"flex",flexDirection:"column"},a.createElement(g,{background:"profileForeground",padding:"16"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:u?"16":"12",justifyContent:"center",margin:"8",style:{textAlign:"center"}},a.createElement(g,{style:{position:"absolute",right:16,top:16,willChange:"transform"}},a.createElement(je,{onClose:r}))," ",a.createElement(g,{marginTop:u?"24":"0"},a.createElement(Ul,{address:e,imageUrl:t,size:u?82:74})),a.createElement(g,{display:"flex",flexDirection:"column",gap:u?"4":"0",textAlign:"center"},a.createElement(g,{textAlign:"center"},a.createElement(_,{as:"h1",color:"modalText",id:m,size:u?"20":"18",weight:"heavy"},h)),!!o&&a.createElement(g,{textAlign:"center"},a.createElement(_,{as:"h1",color:"modalTextSecondary",id:m,size:u?"16":"14",weight:"semibold"},c," ",o.symbol)))),a.createElement(g,{display:"flex",flexDirection:"row",gap:"8",margin:"2",marginTop:"16"},a.createElement(Bo,{action:v,icon:s?a.createElement(wc,null):a.createElement(bc,null),label:s?p.t("profile.copy_address.copied"):p.t("profile.copy_address.label")}),a.createElement(Bo,{action:i,icon:a.createElement(Cc,null),label:p.t("profile.disconnect.label"),testId:"disconnect-button"}))),l&&a.createElement(a.Fragment,null,a.createElement(g,{background:"generalBorder",height:"1",marginTop:"-1"}),a.createElement(g,null,a.createElement(Bc,{address:e})))))}function Ic({onClose:e,open:t}){const{address:n}=ae(),{balance:o,ensAvatar:r,ensName:i}=Er({address:n,includeBalance:t}),{disconnect:l}=an();return n?a.createElement(a.Fragment,null,n&&a.createElement(At,{onClose:e,open:t,titleId:"rk_account_modal_title"},a.createElement(Et,{bottomSheetOnMobile:!0,padding:"0"},a.createElement(_c,{address:n,ensAvatar:r,ensName:i,balance:o,onClose:e,onDisconnect:l})))):null}var Sc=({size:e})=>a.createElement("svg",{fill:"none",height:e,viewBox:"0 0 28 28",width:e,xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Disconnect"),a.createElement("path",{d:"M6.742 22.195h8.367c1.774 0 2.743-.968 2.743-2.758V16.11h-2.016v3.11c0 .625-.305.96-.969.96H6.984c-.664 0-.968-.335-.968-.96V7.984c0-.632.304-.968.968-.968h7.883c.664 0 .969.336.969.968v3.133h2.016v-3.36c0-1.78-.97-2.757-2.743-2.757H6.742C4.97 5 4 5.977 4 7.758v11.68c0 1.789.969 2.757 2.742 2.757Zm5.438-7.703h7.601l1.149-.07-.602.406-1.008.938a.816.816 0 0 0-.258.593c0 .407.313.782.758.782.227 0 .39-.086.547-.243l2.492-2.593c.235-.235.313-.47.313-.711 0-.242-.078-.477-.313-.719l-2.492-2.586c-.156-.156-.32-.25-.547-.25-.445 0-.758.367-.758.781 0 .227.094.446.258.594l1.008.945.602.407-1.149-.079H12.18a.904.904 0 0 0 0 1.805Z",fill:"currentColor"})),Tc="v9horb0",bn=a.forwardRef(({children:e,currentlySelected:t=!1,onClick:n,testId:o,...r},i)=>{const l=Z();return a.createElement(g,{as:"button",borderRadius:"menuButton",disabled:t,display:"flex",onClick:n,ref:i,testId:o,type:"button"},a.createElement(g,{borderRadius:"menuButton",className:[l?Tc:void 0,!t&&X({active:"shrink"})],padding:l?"8":"6",transition:"default",width:"full",...t?{background:"accentColor",borderColor:"selectedOptionBorder",borderStyle:"solid",borderWidth:"1",boxShadow:"selectedOption",color:"accentColorForeground"}:{background:{hover:"menuItemBackground"},color:"modalText",transition:"default"},...r},e))});bn.displayName="MenuButton";var Dc=({chainId:e,currentChainId:t,switchChain:n,chainIconSize:o,isLoading:r,src:i,name:l,iconBackground:s,idx:d})=>{const v=Z(),{i18n:h}=b.useContext(Y),f=Fe(),c=t===e;return a.createElement(b.Fragment,null,a.createElement(bn,{currentlySelected:c,onClick:c?void 0:()=>n({chainId:e}),testId:`chain-option-${e}`},a.createElement(g,{fontFamily:"body",fontSize:"16",fontWeight:"bold"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",height:o},i&&a.createElement(g,{height:"full",marginRight:"8"},a.createElement(J,{alt:l,background:s,borderRadius:"full",height:o,src:i,width:o,testId:`chain-option-${e}-icon`})),a.createElement("div",null,l??l)),c&&a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",marginRight:"6"},a.createElement(_,{color:"accentColorForeground",size:"14",weight:"medium"},h.t("chains.connected")),a.createElement(g,{background:"connectionIndicator",borderColor:"selectedOptionBorder",borderRadius:"full",borderStyle:"solid",borderWidth:"1",height:"8",marginLeft:"8",width:"8"})),r&&a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",marginRight:"6"},a.createElement(_,{color:"modalText",size:"14",weight:"medium"},h.t("chains.confirm")),a.createElement(g,{background:"standby",borderRadius:"full",height:"8",marginLeft:"8",width:"8"}))))),v&&d<f.length-1&&a.createElement(g,{background:"generalBorderDim",height:"1",marginX:"8"}))},Oc=Dc,Rc="_18dqw9x0",Mc="_18dqw9x1";function Lc({onClose:e,open:t}){const{chainId:n}=ae(),{chains:o}=xt(),[r,i]=b.useState(null),{switchChain:l}=pa({mutation:{onMutate:({chainId:u})=>{i(u)},onSuccess:()=>{r&&i(null)},onError:()=>{r&&i(null)},onSettled:()=>{e()}}}),{i18n:s}=b.useContext(Y),{disconnect:d}=an(),v="rk_chain_modal_title",h=Z(),f=o.some(u=>u.id===n),c=h?"36":"28",m=Fe();return n?a.createElement(At,{onClose:e,open:t,titleId:v},a.createElement(Et,{bottomSheetOnMobile:!0,paddingBottom:"0"},a.createElement(g,{display:"flex",flexDirection:"column",gap:"14"},a.createElement(g,{display:"flex",flexDirection:"row",justifyContent:"space-between"},h&&a.createElement(g,{width:"30"}),a.createElement(g,{paddingBottom:"0",paddingLeft:"8",paddingTop:"4"},a.createElement(_,{as:"h1",color:"modalText",id:v,size:h?"20":"18",weight:"heavy"},s.t("chains.title"))),a.createElement(je,{onClose:e})),!f&&a.createElement(g,{marginX:"8",textAlign:h?"center":"left"},a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},s.t("chains.wrong_network"))),a.createElement(g,{className:h?Mc:Rc,display:"flex",flexDirection:"column",gap:"4",padding:"2",paddingBottom:"16"},m.map(({iconBackground:u,iconUrl:p,id:w,name:C},y)=>a.createElement(Oc,{key:w,chainId:w,currentChainId:n,switchChain:l,chainIconSize:c,isLoading:r===w,src:p,name:C,iconBackground:u,idx:y})),!f&&a.createElement(a.Fragment,null,a.createElement(g,{background:"generalBorderDim",height:"1",marginX:"8"}),a.createElement(bn,{onClick:()=>d(),testId:"chain-option-disconnect"},a.createElement(g,{color:"error",fontFamily:"body",fontSize:"16",fontWeight:"bold"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",height:c},a.createElement(g,{alignItems:"center",color:"error",height:c,justifyContent:"center",marginRight:"8"},a.createElement(Sc,{size:Number(c)})),a.createElement("div",null,s.t("chains.disconnect"))))))))))):null}function Nc(e,t){const n={};for(const o of e){const r=t(o);r&&(n[r]||(n[r]=[]),n[r].push(o))}return n}var Cn=({children:e,href:t})=>a.createElement(g,{as:"a",color:"accentColor",href:t,rel:"noreferrer",target:"_blank"},e),yn=({children:e})=>a.createElement(_,{color:"modalTextSecondary",size:"12",weight:"medium"},e);function _o({compactModeEnabled:e=!1,getWallet:t}){const{disclaimer:n,learnMoreUrl:o}=b.useContext($e),{i18n:r}=b.useContext(Y);return a.createElement(a.Fragment,null,a.createElement(g,{alignItems:"center",color:"accentColor",display:"flex",flexDirection:"column",height:"full",justifyContent:"space-around"},a.createElement(g,{marginBottom:"10"},!e&&a.createElement(_,{color:"modalText",size:"18",weight:"heavy"},r.t("intro.title"))),a.createElement(g,{display:"flex",flexDirection:"column",gap:"32",justifyContent:"center",marginY:"20",style:{maxWidth:312}},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},a.createElement(g,{borderRadius:"6",height:"48",minWidth:"48",width:"48"},a.createElement(Js,null)),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},r.t("intro.digital_asset.title")),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},r.t("intro.digital_asset.description")))),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},a.createElement(g,{borderRadius:"6",height:"48",minWidth:"48",width:"48"},a.createElement(Zs,null)),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},r.t("intro.login.title")),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},r.t("intro.login.description"))))),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",margin:"10"},a.createElement(ne,{label:r.t("intro.get.label"),onClick:t}),a.createElement(g,{as:"a",className:X({active:"shrink",hover:"grow"}),display:"block",href:o,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},a.createElement(_,{color:"accentColor",size:"14",weight:"bold"},r.t("intro.learn_more.label")))),n&&!e&&a.createElement(g,{marginBottom:"8",marginTop:"12",textAlign:"center"},a.createElement(n,{Link:Cn,Text:yn}))))}var qr=()=>a.createElement("svg",{fill:"none",height:"17",viewBox:"0 0 11 17",width:"11",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Back"),a.createElement("path",{d:"M0.99707 8.6543C0.99707 9.08496 1.15527 9.44531 1.51562 9.79688L8.16016 16.3096C8.43262 16.5732 8.74902 16.7051 9.13574 16.7051C9.90918 16.7051 10.5508 16.0811 10.5508 15.3076C10.5508 14.9121 10.3838 14.5605 10.0938 14.2705L4.30176 8.64551L10.0938 3.0293C10.3838 2.74805 10.5508 2.3877 10.5508 2.00098C10.5508 1.23633 9.90918 0.603516 9.13574 0.603516C8.74902 0.603516 8.43262 0.735352 8.16016 0.999023L1.51562 7.51172C1.15527 7.85449 1.00586 8.21484 0.99707 8.6543Z",fill:"currentColor"})),Fc=()=>a.createElement("svg",{fill:"none",height:"12",viewBox:"0 0 8 12",width:"8",xmlns:"http://www.w3.org/2000/svg"},a.createElement("title",null,"Info"),a.createElement("path",{d:"M3.64258 7.99609C4.19336 7.99609 4.5625 7.73828 4.68555 7.24609C4.69141 7.21094 4.70312 7.16406 4.70898 7.13477C4.80859 6.60742 5.05469 6.35547 6.04492 5.76367C7.14648 5.10156 7.67969 4.3457 7.67969 3.24414C7.67969 1.39844 6.17383 0.255859 3.95898 0.255859C2.32422 0.255859 1.05859 0.894531 0.548828 1.86719C0.396484 2.14844 0.320312 2.44727 0.320312 2.74023C0.314453 3.37305 0.742188 3.79492 1.42188 3.79492C1.91406 3.79492 2.33594 3.54883 2.53516 3.11523C2.78711 2.47656 3.23242 2.21289 3.83594 2.21289C4.55664 2.21289 5.10742 2.65234 5.10742 3.29102C5.10742 3.9707 4.7793 4.29883 3.81836 4.87891C3.02148 5.36523 2.50586 5.92773 2.50586 6.76562V6.90039C2.50586 7.55664 2.96289 7.99609 3.64258 7.99609ZM3.67188 11.4473C4.42773 11.4473 5.04297 10.8672 5.04297 10.1406C5.04297 9.41406 4.42773 8.83984 3.67188 8.83984C2.91602 8.83984 2.30664 9.41406 2.30664 10.1406C2.30664 10.8672 2.91602 11.4473 3.67188 11.4473Z",fill:"currentColor"})),Wc=({"aria-label":e="Info",onClick:t})=>{const n=Z();return a.createElement(g,{alignItems:"center","aria-label":e,as:"button",background:"closeButtonBackground",borderColor:"actionButtonBorder",borderRadius:"full",borderStyle:"solid",borderWidth:n?"0":"1",className:X({active:"shrinkSm",hover:"growLg"}),color:"closeButton",display:"flex",height:n?"30":"28",justifyContent:"center",onClick:t,style:{willChange:"transform"},transition:"default",type:"button",width:n?"30":"28"},a.createElement(Fc,null))},Hr=e=>{const t=b.useRef(null),n=b.useContext(Ir),o=It(e);return b.useEffect(()=>{if(n&&t.current&&o)return Uc(t.current,o)},[n,o]),t},Pc=()=>{const e="_rk_coolMode",t=document.getElementById(e);if(t)return t;const n=document.createElement("div");return n.setAttribute("id",e),n.setAttribute("style",["overflow:hidden","position:fixed","height:100%","top:0","left:0","right:0","bottom:0","pointer-events:none","z-index:2147483647"].join(";")),document.body.appendChild(n),n},Io=0;function Uc(e,t){Io++;const n=[15,20,25,35,45],o=35;let r=[],i=!1,l=0,s=0;const d=Pc();function v(){const A=n[Math.floor(Math.random()*n.length)],k=Math.random()*10,I=Math.random()*25,x=Math.random()*360,S=Math.random()*35*(Math.random()<=.5?-1:1),T=s-A/2,F=l-A/2,q=Math.random()<=.5?-1:1,H=document.createElement("div");H.innerHTML=`<img src="${t}" width="${A}" height="${A}" style="border-radius: 25%">`,H.setAttribute("style",["position:absolute","will-change:transform",`top:${T}px`,`left:${F}px`,`transform:rotate(${x}deg)`].join(";")),d.appendChild(H),r.push({direction:q,element:H,left:F,size:A,speedHorz:k,speedUp:I,spinSpeed:S,spinVal:x,top:T})}function h(){for(const A of r)A.left=A.left-A.speedHorz*A.direction,A.top=A.top-A.speedUp,A.speedUp=Math.min(A.size,A.speedUp-1),A.spinVal=A.spinVal+A.spinSpeed,A.top>=Math.max(window.innerHeight,document.body.clientHeight)+A.size&&(r=r.filter(k=>k!==A),A.element.remove()),A.element.setAttribute("style",["position:absolute","will-change:transform",`top:${A.top}px`,`left:${A.left}px`,`transform:rotate(${A.spinVal}deg)`].join(";"))}let f;function c(){i&&r.length<o&&v(),h(),f=requestAnimationFrame(c)}c();const m="ontouchstart"in window||navigator.msMaxTouchPoints,u=m?"touchstart":"mousedown",p=m?"touchend":"mouseup",w=m?"touchmove":"mousemove",C=A=>{var k,I;"touches"in A?(l=(k=A.touches)==null?void 0:k[0].clientX,s=(I=A.touches)==null?void 0:I[0].clientY):(l=A.clientX,s=A.clientY)},y=A=>{C(A),i=!0},E=()=>{i=!1};return e.addEventListener(w,C,{passive:!1}),e.addEventListener(u,y),e.addEventListener(p,E),e.addEventListener("mouseleave",E),()=>{e.removeEventListener(w,C),e.removeEventListener(u,y),e.removeEventListener(p,E),e.removeEventListener("mouseleave",E);const A=setInterval(()=>{f&&r.length===0&&(cancelAnimationFrame(f),clearInterval(A),--Io===0&&d.remove())},500)}}var Qc="g5kl0l0",Kr=({as:e="button",currentlySelected:t=!1,iconBackground:n,iconUrl:o,name:r,onClick:i,ready:l,recent:s,testId:d,isRainbowKitConnector:v,...h})=>{const f=Hr(o),[c,m]=a.useState(!1),{i18n:u}=a.useContext(Y);return a.createElement(g,{display:"flex",flexDirection:"column",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),ref:f},a.createElement(g,{as:e,borderRadius:"menuButton",borderStyle:"solid",borderWidth:"1",className:t?void 0:[Qc,X({active:"shrink"})],disabled:t,onClick:i,padding:"5",style:{willChange:"transform"},testId:d,transition:"default",width:"full",...t?{background:"accentColor",borderColor:"selectedOptionBorder",boxShadow:"selectedWallet"}:{background:{hover:"menuItemBackground"}},...h},a.createElement(g,{color:t?"accentColorForeground":"modalText",disabled:!l,fontFamily:"body",fontSize:"16",fontWeight:"bold",transition:"default"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"12"},a.createElement(J,{background:n,...!c&&v?{borderColor:"actionButtonBorder"}:{},useAsImage:!v,borderRadius:"6",height:"28",src:o,width:"28"}),a.createElement(g,null,a.createElement(g,{style:{marginTop:s?-2:void 0},maxWidth:"200"},r),s&&a.createElement(_,{color:t?"accentColorForeground":"accentColor",size:"12",style:{lineHeight:1,marginTop:-1},weight:"medium"},u.t("connect.recent")))))))};Kr.displayName="ModalSelection";var zc="rk-latest-id";function Vc(e){localStorage.setItem(zc,e)}var Ht=(e,t=1)=>{let n=e.replace("#","");n.length===3&&(n=`${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);const o=Number.parseInt(n.substring(0,2),16),r=Number.parseInt(n.substring(2,4),16),i=Number.parseInt(n.substring(4,6),16);return t>1&&t<=100&&(t=t/100),`rgba(${o},${r},${i},${t})`},qc=e=>e?[Ht(e,.2),Ht(e,.14),Ht(e,.1)]:null,Gr=async()=>(await j(async()=>{const{default:e}=await import("./connect-UA7M4XW6-IY3X6Bmr.js");return{default:e}},[])).default,Hc=()=>he(Gr),Kc=()=>a.createElement(J,{background:"#515a70",borderColor:"generalBorder",borderRadius:"10",height:"48",src:Gr,width:"48"}),Yr=async()=>(await j(async()=>{const{default:e}=await import("./create-FASO7PVG-D_rvSpre.js");return{default:e}},[])).default,Jr=()=>he(Yr),Gc=()=>a.createElement(J,{background:"#e3a5e8",borderColor:"generalBorder",borderRadius:"10",height:"48",src:Yr,width:"48"}),Xr=async()=>(await j(async()=>{const{default:e}=await import("./refresh-S4T5V5GX-CwqIaaxK.js");return{default:e}},[])).default,Yc=()=>he(Xr),Jc=()=>a.createElement(J,{background:"#515a70",borderColor:"generalBorder",borderRadius:"10",height:"48",src:Xr,width:"48"}),Zr=async()=>(await j(async()=>{const{default:e}=await import("./scan-4UYSQ56Q-CjMz6-XC.js");return{default:e}},[])).default,$r=()=>he(Zr),Xc=()=>a.createElement(J,{background:"#515a70",borderColor:"generalBorder",borderRadius:"10",height:"48",src:Zr,width:"48"}),Zc="_1vwt0cg0",$c="_1vwt0cg2 ju367v7a ju367v7v",eu="_1vwt0cg3",tu="_1vwt0cg4";function ea({ecc:e="medium",logoBackground:t,logoSize:n=50,logoUrl:o,size:r=200,uri:i}){const l="20",s=r-Number.parseInt(l,10)*2,d=It(o);return a.createElement(g,{borderColor:"generalBorder",borderRadius:"menuButton",borderStyle:"solid",borderWidth:"1",className:Zc,padding:l,width:"max"},a.createElement(g,{style:{height:s,userSelect:"none",width:s},userSelect:"none"},a.createElement(me.Root,{errorCorrection:e,size:s,value:i},a.createElement(me.Cells,{radius:1}),a.createElement(me.Finder,{radius:.25}),d&&a.createElement(me.Arena,null,a.createElement("img",{alt:"Wallet Logo",src:d,style:{objectFit:"cover",height:"88%",width:"88%",borderRadius:"22.5%",backgroundColor:t}})))))}var ta=async()=>{switch(gn()){case"Arc":return(await j(async()=>{const{default:t}=await import("./Arc-VDBY7LNS-BChRXCXW.js");return{default:t}},[])).default;case"Brave":return(await j(async()=>{const{default:t}=await import("./Brave-BRAKJXDS-mq-Xo37j.js");return{default:t}},[])).default;case"Chrome":return(await j(async()=>{const{default:t}=await import("./Chrome-65Q5P54Y-DR9MQEVr.js");return{default:t}},[])).default;case"Edge":return(await j(async()=>{const{default:t}=await import("./Edge-XSPUTORV-DEoZslQE.js");return{default:t}},[])).default;case"Firefox":return(await j(async()=>{const{default:t}=await import("./Firefox-AAHGJQIP-Bp_Hm04m.js");return{default:t}},[])).default;case"Opera":return(await j(async()=>{const{default:t}=await import("./Opera-KQZLSACL-Cwv5MDFy.js");return{default:t}},[])).default;case"Safari":return(await j(async()=>{const{default:t}=await import("./Safari-ZPL37GXR-C4Ggg6rz.js");return{default:t}},[])).default;default:return(await j(async()=>{const{default:t}=await import("./Browser-76IHF3Y2-BMhRaC5Z.js");return{default:t}},[])).default}},nu=()=>he(ta),na=async()=>{switch(wn()){case"Windows":return(await j(async()=>{const{default:t}=await import("./Windows-PPTHQER6-BlyV2p7Y.js");return{default:t}},[])).default;case"macOS":return(await j(async()=>{const{default:t}=await import("./Macos-MW4AE7LN-Vvm8Drw3.js");return{default:t}},[])).default;case"Linux":return(await j(async()=>{const{default:t}=await import("./Linux-OO4TNCLJ-B0aw93n9.js");return{default:t}},[])).default;default:return(await j(async()=>{const{default:t}=await import("./Linux-OO4TNCLJ-B0aw93n9.js");return{default:t}},[])).default}},ou=()=>he(na);function ru({getWalletDownload:e,compactModeEnabled:t}){const o=Ze().filter(i=>i.isRainbowKitConnector).splice(0,5),{i18n:r}=b.useContext(Y);return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",marginTop:"18",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"28",height:"full",width:"full"},o==null?void 0:o.filter(i=>{var l;return i.extensionDownloadUrl||i.desktopDownloadUrl||i.qrCode&&((l=i.downloadUrls)==null?void 0:l.qrCode)}).map(i=>{const{downloadUrls:l,iconBackground:s,iconUrl:d,id:v,name:h,qrCode:f}=i,c=(l==null?void 0:l.qrCode)&&f,m=!!i.extensionDownloadUrl,u=(l==null?void 0:l.qrCode)&&m,p=(l==null?void 0:l.qrCode)&&!!i.desktopDownloadUrl;return a.createElement(g,{alignItems:"center",display:"flex",gap:"16",justifyContent:"space-between",key:i.id,width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16"},a.createElement(J,{background:s,borderColor:"actionButtonBorder",borderRadius:"10",height:"48",src:d,width:"48"}),a.createElement(g,{display:"flex",flexDirection:"column",gap:"2"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},h),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},u?r.t("get.mobile_and_extension.description"):p?r.t("get.mobile_and_desktop.description"):c?r.t("get.mobile.description"):m?r.t("get.extension.description"):null))),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(ne,{label:r.t("get.action.label"),onClick:()=>e(v),type:"secondary"})))})),a.createElement(g,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"column",gap:"8",justifyContent:"space-between",marginBottom:"4",paddingY:"8",style:{maxWidth:275,textAlign:"center"}},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},r.t("get.looking_for.title")),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},t?r.t("get.looking_for.desktop.compact_description"):r.t("get.looking_for.desktop.wide_description"))))}var Kt="44";function au({changeWalletStep:e,compactModeEnabled:t,connectionError:n,onClose:o,qrCodeUri:r,reconnect:i,wallet:l}){const{downloadUrls:s,iconBackground:d,iconUrl:v,name:h,qrCode:f,ready:c,showWalletConnectModal:m,getDesktopUri:u}=l,p=!!u,w=hn(),{i18n:C}=b.useContext(Y),y=!!l.extensionDownloadUrl,E=(s==null?void 0:s.qrCode)&&y,A=(s==null?void 0:s.qrCode)&&!!l.desktopDownloadUrl,k=f&&r,I=async()=>{const F=await(u==null?void 0:u());window.open(F,w?"_blank":"_self")},x=m?{description:t?C.t("connect.walletconnect.description.compact"):C.t("connect.walletconnect.description.full"),label:C.t("connect.walletconnect.open.label"),onClick:()=>{o(),m()}}:k?{description:C.t("connect.secondary_action.get.description",{wallet:h}),label:C.t("connect.secondary_action.get.label"),onClick:()=>e(E||A?"DOWNLOAD_OPTIONS":"DOWNLOAD")}:null,{width:S}=Sr(),T=S&&S<768;return b.useEffect(()=>{nu(),ou()},[]),a.createElement(g,{display:"flex",flexDirection:"column",height:"full",width:"full"},k?a.createElement(g,{alignItems:"center",display:"flex",height:"full",justifyContent:"center"},a.createElement(ea,{logoBackground:d,logoSize:t?60:72,logoUrl:v,size:t?318:T?Math.max(280,Math.min(S-308,382)):382,uri:r})):a.createElement(g,{alignItems:"center",display:"flex",justifyContent:"center",style:{flexGrow:1}},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"8"},a.createElement(g,{borderRadius:"10",height:Kt,overflow:"hidden"},a.createElement(J,{useAsImage:!l.isRainbowKitConnector,height:Kt,src:v,width:Kt})),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"4",paddingX:"32",style:{textAlign:"center"}},a.createElement(_,{color:"modalText",size:"18",weight:"bold"},c?C.t("connect.status.opening",{wallet:h}):y?C.t("connect.status.not_installed",{wallet:h}):C.t("connect.status.not_available",{wallet:h})),!c&&y?a.createElement(g,{paddingTop:"20"},a.createElement(ne,{href:l.extensionDownloadUrl,label:C.t("connect.secondary_action.install.label"),type:"secondary"})):null,c&&!k&&a.createElement(a.Fragment,null,a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},a.createElement(_,{color:"modalTextSecondary",size:"14",textAlign:"center",weight:"medium"},C.t("connect.status.confirm"))),a.createElement(g,{alignItems:"center",color:"modalText",display:"flex",flexDirection:"row",height:"32",marginTop:"8"},n?a.createElement(ne,{label:C.t("connect.secondary_action.retry.label"),onClick:async()=>{p&&I(),i(l)}}):a.createElement(g,{color:"modalTextSecondary"},a.createElement(Xe,null))))))),a.createElement(g,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"row",gap:"8",height:"28",justifyContent:"space-between",marginTop:"12"},c&&x&&a.createElement(a.Fragment,null,a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},x.description),a.createElement(ne,{label:x.label,onClick:x.onClick,type:"secondary"}))))}var Gt=({actionLabel:e,description:t,iconAccent:n,iconBackground:o,iconUrl:r,isCompact:i,onAction:l,title:s,url:d,variant:v})=>{const h=v==="browser",f=!h&&n&&qc(n);return a.createElement(g,{alignItems:"center",borderRadius:"13",display:"flex",justifyContent:"center",overflow:"hidden",paddingX:i?"18":"44",position:"relative",style:{flex:1,isolation:"isolate"},width:"full"},a.createElement(g,{borderColor:"actionButtonBorder",borderRadius:"13",borderStyle:"solid",borderWidth:"1",style:{bottom:"0",left:"0",position:"absolute",right:"0",top:"0",zIndex:1}}),h&&a.createElement(g,{background:"downloadTopCardBackground",height:"full",position:"absolute",style:{zIndex:0},width:"full"},a.createElement(g,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{bottom:"0",filter:"blur(20px)",left:"0",position:"absolute",right:"0",top:"0",transform:"translate3d(0, 0, 0)"}},a.createElement(g,{style:{filter:"blur(100px)",marginLeft:-27,marginTop:-20,opacity:.6,transform:"translate3d(0, 0, 0)"}},a.createElement(J,{borderRadius:"full",height:"200",src:r,width:"200"})),a.createElement(g,{style:{filter:"blur(100px)",marginRight:0,marginTop:105,opacity:.6,overflow:"auto",transform:"translate3d(0, 0, 0)"}},a.createElement(J,{borderRadius:"full",height:"200",src:r,width:"200"})))),!h&&f&&a.createElement(g,{background:"downloadBottomCardBackground",style:{bottom:"0",left:"0",position:"absolute",right:"0",top:"0"}},a.createElement(g,{position:"absolute",style:{background:`radial-gradient(50% 50% at 50% 50%, ${f[0]} 0%, ${f[1]} 25%, rgba(0,0,0,0) 100%)`,height:564,left:-215,top:-197,transform:"translate3d(0, 0, 0)",width:564}}),a.createElement(g,{position:"absolute",style:{background:`radial-gradient(50% 50% at 50% 50%, ${f[2]} 0%, rgba(0, 0, 0, 0) 100%)`,height:564,left:-1,top:-76,transform:"translate3d(0, 0, 0)",width:564}})),a.createElement(g,{alignItems:"flex-start",display:"flex",flexDirection:"row",gap:"24",height:"max",justifyContent:"center",style:{zIndex:1}},a.createElement(g,null,a.createElement(J,{height:"60",src:r,width:"60",...o?{background:o,borderColor:"generalBorder",borderRadius:"10"}:null})),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4",style:{flex:1},width:"full"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},s),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},t),a.createElement(g,{marginTop:"14",width:"max"},a.createElement(ne,{href:d,label:e,onClick:l,size:"medium"})))))};function iu({changeWalletStep:e,wallet:t}){const n=gn(),o=wn(),i=b.useContext(St)==="compact",{desktop:l,desktopDownloadUrl:s,extension:d,extensionDownloadUrl:v,mobileDownloadUrl:h}=t,{i18n:f}=b.useContext(Y);return b.useEffect(()=>{Jr(),$r(),Yc(),Hc()},[]),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"24",height:"full",marginBottom:"8",marginTop:"4",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"8",height:"full",justifyContent:"center",width:"full"},v&&a.createElement(Gt,{actionLabel:f.t("get_options.extension.download.label",{browser:n}),description:f.t("get_options.extension.description"),iconUrl:ta,isCompact:i,onAction:()=>e(d!=null&&d.instructions?"INSTRUCTIONS_EXTENSION":"CONNECT"),title:f.t("get_options.extension.title",{wallet:t.name,browser:n}),url:v,variant:"browser"}),s&&a.createElement(Gt,{actionLabel:f.t("get_options.desktop.download.label",{platform:o}),description:f.t("get_options.desktop.description"),iconUrl:na,isCompact:i,onAction:()=>e(l!=null&&l.instructions?"INSTRUCTIONS_DESKTOP":"CONNECT"),title:f.t("get_options.desktop.title",{wallet:t.name,platform:o}),url:s,variant:"desktop"}),h&&a.createElement(Gt,{actionLabel:f.t("get_options.mobile.download.label",{wallet:t.name}),description:f.t("get_options.mobile.description"),iconAccent:t.iconAccent,iconBackground:t.iconBackground,iconUrl:t.iconUrl,isCompact:i,onAction:()=>{e("DOWNLOAD")},title:f.t("get_options.mobile.title",{wallet:t.name}),variant:"app"})))}function lu({changeWalletStep:e,wallet:t}){const{downloadUrls:n,qrCode:o}=t,{i18n:r}=b.useContext(Y);return b.useEffect(()=>{Jr(),$r()},[]),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"24",height:"full",width:"full"},a.createElement(g,{style:{maxWidth:220,textAlign:"center"}},a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"semibold"},r.t("get_mobile.description"))),a.createElement(g,{height:"full"},n!=null&&n.qrCode?a.createElement(ea,{logoSize:0,size:268,uri:n.qrCode}):null),a.createElement(g,{alignItems:"center",borderRadius:"10",display:"flex",flexDirection:"row",gap:"8",height:"34",justifyContent:"space-between",marginBottom:"12",paddingY:"8"},a.createElement(ne,{label:r.t("get_mobile.continue.label"),onClick:()=>e(o!=null&&o.instructions?"INSTRUCTIONS_MOBILE":"CONNECT")})))}var we={connect:()=>a.createElement(Kc,null),create:()=>a.createElement(Gc,null),install:e=>a.createElement(J,{background:e.iconBackground,borderColor:"generalBorder",borderRadius:"10",height:"48",src:e.iconUrl,width:"48"}),refresh:()=>a.createElement(Jc,null),scan:()=>a.createElement(Xc,null)};function su({connectWallet:e,wallet:t}){var o,r,i,l;const{i18n:n}=b.useContext(Y);return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",width:"full"},a.createElement(g,{display:"flex",flexDirection:"column",gap:"28",height:"full",justifyContent:"center",paddingY:"32",style:{maxWidth:320}},(r=(o=t==null?void 0:t.qrCode)==null?void 0:o.instructions)==null?void 0:r.steps.map((s,d)=>{var v;return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16",key:d},a.createElement(g,{borderRadius:"10",height:"48",minWidth:"48",overflow:"hidden",position:"relative",width:"48"},(v=we[s.step])==null?void 0:v.call(we,t)),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},n.t(s.title,void 0,{rawKeyIfTranslationMissing:!0})),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},n.t(s.description,void 0,{rawKeyIfTranslationMissing:!0}))))})),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",marginBottom:"16"},a.createElement(ne,{label:n.t("get_instructions.mobile.connect.label"),onClick:()=>e(t)}),a.createElement(g,{as:"a",className:X({active:"shrink",hover:"grow"}),display:"block",href:(l=(i=t==null?void 0:t.qrCode)==null?void 0:i.instructions)==null?void 0:l.learnMoreUrl,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},a.createElement(_,{color:"accentColor",size:"14",weight:"bold"},n.t("get_instructions.mobile.learn_more.label")))))}function cu({wallet:e}){var n,o,r,i;const{i18n:t}=b.useContext(Y);return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",width:"full"},a.createElement(g,{display:"flex",flexDirection:"column",gap:"28",height:"full",justifyContent:"center",paddingY:"32",style:{maxWidth:320}},(o=(n=e==null?void 0:e.extension)==null?void 0:n.instructions)==null?void 0:o.steps.map((l,s)=>{var d;return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16",key:s},a.createElement(g,{borderRadius:"10",height:"48",minWidth:"48",overflow:"hidden",position:"relative",width:"48"},(d=we[l.step])==null?void 0:d.call(we,e)),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},t.t(l.title,void 0,{rawKeyIfTranslationMissing:!0})),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},t.t(l.description,void 0,{rawKeyIfTranslationMissing:!0}))))})),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",marginBottom:"16"},a.createElement(ne,{label:t.t("get_instructions.extension.refresh.label"),onClick:window.location.reload.bind(window.location)}),a.createElement(g,{as:"a",className:X({active:"shrink",hover:"grow"}),display:"block",href:(i=(r=e==null?void 0:e.extension)==null?void 0:r.instructions)==null?void 0:i.learnMoreUrl,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},a.createElement(_,{color:"accentColor",size:"14",weight:"bold"},t.t("get_instructions.extension.learn_more.label")))))}function uu({connectWallet:e,wallet:t}){var o,r,i,l;const{i18n:n}=b.useContext(Y);return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",width:"full"},a.createElement(g,{display:"flex",flexDirection:"column",gap:"28",height:"full",justifyContent:"center",paddingY:"32",style:{maxWidth:320}},(r=(o=t==null?void 0:t.desktop)==null?void 0:o.instructions)==null?void 0:r.steps.map((s,d)=>{var v;return a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"16",key:d},a.createElement(g,{borderRadius:"10",height:"48",minWidth:"48",overflow:"hidden",position:"relative",width:"48"},(v=we[s.step])==null?void 0:v.call(we,t)),a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(_,{color:"modalText",size:"14",weight:"bold"},n.t(s.title,void 0,{rawKeyIfTranslationMissing:!0})),a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},n.t(s.description,void 0,{rawKeyIfTranslationMissing:!0}))))})),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"12",justifyContent:"center",marginBottom:"16"},a.createElement(ne,{label:n.t("get_instructions.desktop.connect.label"),onClick:()=>e(t)}),a.createElement(g,{as:"a",className:X({active:"shrink",hover:"grow"}),display:"block",href:(l=(i=t==null?void 0:t.desktop)==null?void 0:i.instructions)==null?void 0:l.learnMoreUrl,paddingX:"12",paddingY:"4",rel:"noreferrer",style:{willChange:"transform"},target:"_blank",transition:"default"},a.createElement(_,{color:"accentColor",size:"14",weight:"bold"},n.t("get_instructions.desktop.learn_more.label")))))}function du({onClose:e}){const t="rk_connect_title",[n,o]=b.useState(),[r,i]=b.useState(),[l,s]=b.useState(),d=!!(r!=null&&r.qrCode)&&l,[v,h]=b.useState(!1),c=b.useContext(St)===tt.COMPACT,{disclaimer:m}=b.useContext($e),{i18n:u}=b.useContext(Y),p=hn(),w=b.useRef(!1),{connector:C}=b.useContext(et),E=Ze(!C).filter(D=>D.ready||!!D.extensionDownloadUrl).sort((D,R)=>D.groupIndex-R.groupIndex),A=Ze(),k=Nc(E,D=>D.groupName),I=["Recommended","Other","Popular","More","Others","Installed"];b.useEffect(()=>{C&&!w.current&&(z("CONNECT"),F(C),w.current=!0)},[C]);const x=D=>{var R,G;h(!1),D.ready&&((G=(R=D==null?void 0:D.connect)==null?void 0:R.call(D))==null||G.catch(()=>{h(!0)}))},S=async D=>{const R=E.find(G=>D.id===G.id);R!=null&&R.getDesktopUri&&setTimeout(async()=>{var V;const G=await((V=R==null?void 0:R.getDesktopUri)==null?void 0:V.call(R));G&&window.open(G,p?"_blank":"_self")},0)},T=async D=>{var V;const R=E.find(_e=>D.id===_e.id),G=await((V=R==null?void 0:R.getQrCodeUri)==null?void 0:V.call(R));s(G),setTimeout(()=>{i(R),z("CONNECT")},G?0:50)},F=async D=>{Vc(D.id),D.ready&&(T(D),S(D)),x(D),o(D.id),D.ready||(i(D),z(D!=null&&D.extensionDownloadUrl?"DOWNLOAD_OPTIONS":"CONNECT"))},q=D=>{var Pe;const R=A.find(nt=>D===nt.id),G=(Pe=R==null?void 0:R.downloadUrls)==null?void 0:Pe.qrCode,V=!!(R!=null&&R.desktopDownloadUrl),_e=!!(R!=null&&R.extensionDownloadUrl);i(R),z(G&&(_e||V)?"DOWNLOAD_OPTIONS":G?"DOWNLOAD":V?"INSTRUCTIONS_DESKTOP":"INSTRUCTIONS_EXTENSION")},H=()=>{o(void 0),i(void 0),s(void 0)},z=(D,R=!1)=>{R&&D==="GET"&&oe==="GET"?H():!R&&D==="GET"?ge("GET"):!R&&D==="CONNECT"&&ge("CONNECT"),se(D)},[oe,ge]=b.useState("NONE"),[ee,se]=b.useState("NONE");let W=null,re=null,te=null,Ce;b.useEffect(()=>{h(!1)},[ee,r]);const ye=!!(!!(r!=null&&r.extensionDownloadUrl)&&(r!=null&&r.mobileDownloadUrl));switch(ee){case"NONE":W=a.createElement(_o,{getWallet:()=>z("GET")});break;case"LEARN_COMPACT":W=a.createElement(_o,{compactModeEnabled:c,getWallet:()=>z("GET")}),re=u.t("intro.title"),te="NONE";break;case"GET":W=a.createElement(ru,{getWalletDownload:q,compactModeEnabled:c}),re=u.t("get.title"),te=c?"LEARN_COMPACT":"NONE";break;case"CONNECT":W=r&&a.createElement(au,{changeWalletStep:z,compactModeEnabled:c,connectionError:v,onClose:e,qrCodeUri:l,reconnect:x,wallet:r}),re=d&&(r.name==="WalletConnect"?u.t("connect_scan.fallback_title"):u.t("connect_scan.title",{wallet:r.name})),te=c?C?null:"NONE":null,Ce=c?C?()=>{}:H:()=>{};break;case"DOWNLOAD_OPTIONS":W=r&&a.createElement(iu,{changeWalletStep:z,wallet:r}),re=r&&u.t("get_options.short_title",{wallet:r.name}),te=C?"CONNECT":c?"NONE":oe;break;case"DOWNLOAD":W=r&&a.createElement(lu,{changeWalletStep:z,wallet:r}),re=r&&u.t("get_mobile.title",{wallet:r.name}),te=ye?"DOWNLOAD_OPTIONS":oe;break;case"INSTRUCTIONS_MOBILE":W=r&&a.createElement(su,{connectWallet:F,wallet:r}),re=r&&u.t("get_options.title",{wallet:c&&r.shortName||r.name}),te="DOWNLOAD";break;case"INSTRUCTIONS_EXTENSION":W=r&&a.createElement(cu,{wallet:r}),re=r&&u.t("get_options.title",{wallet:c&&r.shortName||r.name}),te="DOWNLOAD_OPTIONS";break;case"INSTRUCTIONS_DESKTOP":W=r&&a.createElement(uu,{connectWallet:F,wallet:r}),re=r&&u.t("get_options.title",{wallet:c&&r.shortName||r.name}),te="DOWNLOAD_OPTIONS";break}return a.createElement(g,{display:"flex",flexDirection:"row",style:{maxHeight:c?468:504}},(c?ee==="NONE":!0)&&a.createElement(g,{className:c?tu:eu,display:"flex",flexDirection:"column",marginTop:"16"},a.createElement(g,{display:"flex",justifyContent:"space-between"},c&&m&&a.createElement(g,{marginLeft:"16",width:"28"},a.createElement(Wc,{onClick:()=>z("LEARN_COMPACT")})),c&&!m&&a.createElement(g,{marginLeft:"16",width:"28"}),a.createElement(g,{marginLeft:c?"0":"6",paddingBottom:"8",paddingTop:"2",paddingX:"18"},a.createElement(_,{as:"h1",color:"modalText",id:t,size:"18",weight:"heavy",testId:"connect-header-label"},u.t("connect.title"))),c&&a.createElement(g,{marginRight:"16"},a.createElement(je,{onClose:e}))),a.createElement(g,{className:$c,paddingBottom:"18"},Object.entries(k).map(([D,R],G)=>R.length>0&&a.createElement(b.Fragment,{key:G},D?a.createElement(g,{marginBottom:"8",marginTop:"16",marginX:"6"},a.createElement(_,{color:D==="Installed"?"accentColor":"modalTextSecondary",size:"14",weight:"bold"},I.includes(D)?u.t(`connector_group.${D.toLowerCase()}`):D)):null,a.createElement(g,{display:"flex",flexDirection:"column",gap:"4"},R.map(V=>a.createElement(Kr,{currentlySelected:V.id===n,iconBackground:V.iconBackground,iconUrl:V.iconUrl,key:V.id,name:V.name,onClick:()=>F(V),ready:V.ready,recent:V.recent,testId:`wallet-option-${V.id}`,isRainbowKitConnector:V.isRainbowKitConnector})))))),c&&a.createElement(a.Fragment,null,a.createElement(g,{background:"generalBorder",height:"1",marginTop:"-1"}),m?a.createElement(g,{paddingX:"24",paddingY:"16",textAlign:"center"},a.createElement(m,{Link:Cn,Text:yn})):a.createElement(g,{alignItems:"center",display:"flex",justifyContent:"space-between",paddingX:"24",paddingY:"16"},a.createElement(g,{paddingY:"4"},a.createElement(_,{color:"modalTextSecondary",size:"14",weight:"medium"},u.t("connect.new_to_ethereum.description"))),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"row",gap:"4",justifyContent:"center"},a.createElement(g,{className:X({active:"shrink",hover:"grow"}),cursor:"pointer",onClick:()=>z("LEARN_COMPACT"),paddingY:"4",style:{willChange:"transform"},transition:"default"},a.createElement(_,{color:"accentColor",size:"14",weight:"bold"},u.t("connect.new_to_ethereum.learn_more.label"))))))),(c?ee!=="NONE":!0)&&a.createElement(a.Fragment,null,!c&&a.createElement(g,{background:"generalBorder",minWidth:"1",width:"1"}),a.createElement(g,{display:"flex",flexDirection:"column",margin:"16",style:{flexGrow:1}},a.createElement(g,{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:"12"},a.createElement(g,{width:"28"},te&&a.createElement(g,{as:"button",className:X({active:"shrinkSm",hover:"growLg"}),color:"accentColor",onClick:()=>{te&&z(te,!0),Ce==null||Ce()},paddingX:"8",paddingY:"4",style:{boxSizing:"content-box",height:17,willChange:"transform"},transition:"default",type:"button"},a.createElement(qr,null))),a.createElement(g,{display:"flex",justifyContent:"center",style:{flexGrow:1}},re&&a.createElement(_,{color:"modalText",size:"18",textAlign:"center",weight:"heavy"},re)),a.createElement(je,{onClose:e})),a.createElement(g,{display:"flex",flexDirection:"column",style:{minHeight:c?396:432}},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"6",height:"full",justifyContent:"center",marginX:"8"},W)))))}var fu="_1am14412",pu="_1am14410",mu="_1am14413",hu=({wallet:e})=>a.createElement("svg",{className:mu,viewBox:"0 0 86 86",width:"86",height:"86"},a.createElement("title",null,"Loading"),a.createElement("rect",{x:"3",y:"3",width:80,height:80,rx:20,ry:20,strokeDasharray:`${160/3} ${2*160/3}`,strokeDashoffset:160,className:fu,style:{stroke:(e==null?void 0:e.iconAccent)||"#0D3887"}}));function oa({onClose:e,wallet:t,connecting:n}){const{connect:o,iconBackground:r,iconUrl:i,id:l,name:s,getMobileUri:d,ready:v,shortName:h,showWalletConnectModal:f}=t,c=Hr(i),m=b.useRef(!1),{i18n:u}=b.useContext(Y),p=b.useCallback(async()=>{if(l!=="walletConnect"&&(async()=>{const C=await(d==null?void 0:d());if(C)if(C&&oc({mobileUri:C,name:s}),C.startsWith("http")){const y=document.createElement("a");y.href=C,y.target="_blank",y.rel="noreferrer noopener",y.click()}else window.location.href=C})(),f){f(),e==null||e();return}try{await(o==null?void 0:o())}catch{}},[o,d,f,e,s,l]);return b.useEffect(()=>{n&&!m.current&&(p(),m.current=!0)},[n,p]),a.createElement(g,{as:"button",color:v?"modalText":"modalTextSecondary",disabled:!v,fontFamily:"body",key:l,onClick:p,ref:c,style:{overflow:"visible",textAlign:"center"},testId:`wallet-option-${l}`,type:"button",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},a.createElement(g,{display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"8",paddingTop:"10",position:"relative"},n?a.createElement(hu,{wallet:t}):null,a.createElement(J,{background:r,borderRadius:"13",boxShadow:"walletLogo",height:"60",src:i,width:"60"})),n?null:a.createElement(g,{display:"flex",flexDirection:"column",textAlign:"center"},a.createElement(_,{as:"h2",color:t.ready?"modalText":"modalTextSecondary",size:"13",weight:"medium"},a.createElement(g,{as:"span",position:"relative"},h??s,!t.ready&&" (unsupported)")),t.recent&&a.createElement(_,{color:"accentColor",size:"12",weight:"medium"},u.t("connect.recent")))))}function gu({onClose:e}){var m;const t="rk_connect_title",n=Ze().filter(u=>u.isRainbowKitConnector),{disclaimer:o,learnMoreUrl:r}=b.useContext($e);let i=null,l=null,s=!1,d=null;const[v,h]=b.useState("CONNECT"),{i18n:f}=b.useContext(Y),c=_t();switch(v){case"CONNECT":{i=f.t("connect.title"),s=!0,l=a.createElement(g,null,a.createElement(g,{background:"profileForeground",className:pu,display:"flex",paddingBottom:"20",paddingTop:"6"},a.createElement(g,{display:"flex",style:{margin:"0 auto"}},n.filter(u=>u.ready).map(u=>a.createElement(g,{key:u.id,paddingX:"20"},a.createElement(g,{width:"60"},a.createElement(oa,{onClose:e,wallet:u})))))),a.createElement(g,{background:"generalBorder",height:"1",marginBottom:"32",marginTop:"-1"}),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"32",paddingX:"32",style:{textAlign:"center"}},a.createElement(g,{display:"flex",flexDirection:"column",gap:"8",textAlign:"center"},a.createElement(_,{color:"modalText",size:"16",weight:"bold"},f.t("intro.title")),a.createElement(_,{color:"modalTextSecondary",size:"16"},f.t("intro.description")))),a.createElement(g,{paddingTop:"32",paddingX:"20"},a.createElement(g,{display:"flex",gap:"14",justifyContent:"center"},a.createElement(ne,{label:f.t("intro.get.label"),onClick:()=>h("GET"),size:"large",type:"secondary"}),a.createElement(ne,{href:r,label:f.t("intro.learn_more.label"),size:"large",type:"secondary"}))),o&&a.createElement(g,{marginTop:"28",marginX:"32",textAlign:"center"},a.createElement(o,{Link:Cn,Text:yn})));break}case"GET":{i=f.t("get.title"),d="CONNECT";const u=(m=n==null?void 0:n.filter(p=>{var w,C,y;return((w=p.downloadUrls)==null?void 0:w.ios)||((C=p.downloadUrls)==null?void 0:C.android)||((y=p.downloadUrls)==null?void 0:y.mobile)}))==null?void 0:m.splice(0,3);l=a.createElement(g,null,a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",height:"full",marginBottom:"36",marginTop:"5",paddingTop:"12",width:"full"},u.map((p,w)=>{const{downloadUrls:C,iconBackground:y,iconUrl:E,name:A}=p;return!(C!=null&&C.ios)&&!(C!=null&&C.android)&&!(C!=null&&C.mobile)?null:a.createElement(g,{display:"flex",gap:"16",key:p.id,paddingX:"20",width:"full"},a.createElement(g,{style:{minHeight:48,minWidth:48}},a.createElement(J,{background:y,borderColor:"generalBorder",borderRadius:"10",height:"48",src:E,width:"48"})),a.createElement(g,{display:"flex",flexDirection:"column",width:"full"},a.createElement(g,{alignItems:"center",display:"flex",height:"48"},a.createElement(g,{width:"full"},a.createElement(_,{color:"modalText",size:"18",weight:"bold"},A)),a.createElement(ne,{href:(c?C==null?void 0:C.ios:C==null?void 0:C.android)||(C==null?void 0:C.mobile),label:f.t("get.action.label"),size:"small",type:"secondary"})),w<u.length-1&&a.createElement(g,{background:"generalBorderDim",height:"1",marginY:"10",width:"full"})))})),a.createElement(g,{style:{marginBottom:"42px"}}),a.createElement(g,{alignItems:"center",display:"flex",flexDirection:"column",gap:"36",paddingX:"36",style:{textAlign:"center"}},a.createElement(g,{display:"flex",flexDirection:"column",gap:"12",textAlign:"center"},a.createElement(_,{color:"modalText",size:"16",weight:"bold"},f.t("get.looking_for.title")),a.createElement(_,{color:"modalTextSecondary",size:"16"},f.t("get.looking_for.mobile.description")))));break}}return a.createElement(g,{display:"flex",flexDirection:"column",paddingBottom:"36"},a.createElement(g,{background:s?"profileForeground":"modalBackground",display:"flex",flexDirection:"column",paddingBottom:"4",paddingTop:"14"},a.createElement(g,{display:"flex",justifyContent:"center",paddingBottom:"6",paddingX:"20",position:"relative"},d&&a.createElement(g,{display:"flex",position:"absolute",style:{left:0,marginBottom:-20,marginTop:-20}},a.createElement(g,{alignItems:"center",as:"button",className:X({active:"shrinkSm",hover:"growLg"}),color:"accentColor",display:"flex",marginLeft:"4",marginTop:"20",onClick:()=>h(d),padding:"16",style:{height:17,willChange:"transform"},transition:"default",type:"button"},a.createElement(qr,null))),a.createElement(g,{marginTop:"4",textAlign:"center",width:"full"},a.createElement(_,{as:"h1",color:"modalText",id:t,size:"20",weight:"bold"},i)),a.createElement(g,{alignItems:"center",display:"flex",height:"32",paddingRight:"14",position:"absolute",right:"0"},a.createElement(g,{style:{marginBottom:-20,marginTop:-20}},a.createElement(je,{onClose:e}))))),a.createElement(g,{display:"flex",flexDirection:"column"},l))}var vu=({onClose:e})=>{const{connector:t}=b.useContext(et),{i18n:n}=b.useContext(Y),o=(t==null?void 0:t.name)||"";return a.createElement(g,null,a.createElement(g,{display:"flex",paddingBottom:"32",justifyContent:"center",alignItems:"center",background:"profileForeground",flexDirection:"column"},a.createElement(g,{width:"full",display:"flex",justifyContent:"flex-end",marginTop:"18",marginRight:"24"},a.createElement(je,{onClose:e})),a.createElement(g,{width:"60"},a.createElement(oa,{onClose:e,wallet:t,connecting:!0})),a.createElement(g,{marginTop:"20"},a.createElement(_,{textAlign:"center",color:"modalText",size:"18",weight:"semibold"},n.t("connect.status.connect_mobile",{wallet:o}))),a.createElement(g,{maxWidth:"full",marginTop:"8"},a.createElement(_,{textAlign:"center",color:"modalText",size:"16",weight:"medium"},n.t("connect.status.confirm_mobile",{wallet:o})))))};function wu({onClose:e}){const{connector:t}=b.useContext(et);return Z()?t?a.createElement(vu,{onClose:e}):a.createElement(gu,{onClose:e}):a.createElement(du,{onClose:e})}function bu({onClose:e,open:t}){const n="rk_connect_title",o=hr(),{disconnect:r}=an(),{isConnecting:i}=ae(),l=a.useCallback(()=>{e(),r()},[e,r]),s=a.useCallback(()=>{i&&r(),e()},[e,r,i]);return o==="disconnected"?a.createElement(At,{onClose:s,open:t,titleId:n},a.createElement(Et,{bottomSheetOnMobile:!0,padding:"0",wide:!0},a.createElement(wu,{onClose:s}))):o==="unauthenticated"?a.createElement(At,{onClose:l,open:t,titleId:n},a.createElement(Et,{bottomSheetOnMobile:!0,padding:"0"},a.createElement(tc,{onClose:l,onCloseModal:e}))):null}function Yt(){const[e,t]=b.useState(!1);return{closeModal:b.useCallback(()=>t(!1),[]),isModalOpen:e,openModal:b.useCallback(()=>t(!0),[])}}var We=b.createContext({accountModalOpen:!1,chainModalOpen:!1,connectModalOpen:!1,isWalletConnectModalOpen:!1,setIsWalletConnectModalOpen:()=>{}});function Cu({children:e}){const{closeModal:t,isModalOpen:n,openModal:o}=Yt(),{closeModal:r,isModalOpen:i,openModal:l}=Yt(),{closeModal:s,isModalOpen:d,openModal:v}=Yt(),[h,f]=b.useState(!1),c=hr(),{chainId:m}=ae(),{chains:u}=xt(),p=u.some(y=>y.id===m),w=b.useCallback(({keepConnectModalOpen:y=!1}={})=>{y||t(),r(),s()},[t,r,s]),C=Bt()==="unauthenticated";return So({onConnect:()=>w({keepConnectModalOpen:C}),onDisconnect:()=>w()}),b.useEffect(()=>{C&&w()},[C,w]),a.createElement(We.Provider,{value:b.useMemo(()=>({accountModalOpen:i,chainModalOpen:d,connectModalOpen:n,isWalletConnectModalOpen:h,openAccountModal:p&&c==="connected"?l:void 0,openChainModal:c==="connected"?v:void 0,openConnectModal:c==="disconnected"||c==="unauthenticated"?o:void 0,setIsWalletConnectModalOpen:f}),[c,i,d,n,l,v,o,p,h])},e,a.createElement(bu,{onClose:t,open:n}),a.createElement(Ic,{onClose:r,open:i}),a.createElement(Lc,{onClose:s,open:d}))}function yu(){const{accountModalOpen:e,chainModalOpen:t,connectModalOpen:n}=b.useContext(We);return{accountModalOpen:e,chainModalOpen:t,connectModalOpen:n}}function Au(){const{accountModalOpen:e,openAccountModal:t}=b.useContext(We);return{accountModalOpen:e,openAccountModal:t}}function Eu(){const{chainModalOpen:e,openChainModal:t}=b.useContext(We);return{chainModalOpen:e,openChainModal:t}}function ra(){const{isWalletConnectModalOpen:e,setIsWalletConnectModalOpen:t}=b.useContext(We);return{isWalletConnectModalOpen:e,setIsWalletConnectModalOpen:t}}function xu(){const{connectModalOpen:e,openConnectModal:t}=b.useContext(We),{isWalletConnectModalOpen:n}=ra();return{connectModalOpen:e||n,openConnectModal:t}}var Jt=()=>{};function ku({children:e}){const t=ls(),{address:n}=ae(),{chainId:o}=ae(),{chains:r}=xt(),i=r.some(H=>H.id===o),l=rs(),s=Bt()??void 0,d=o?l[o]:void 0,v=(d==null?void 0:d.name)??void 0,h=(d==null?void 0:d.iconUrl)??void 0,f=(d==null?void 0:d.iconBackground)??void 0,c=It(h),m=b.useContext(mn),u=Br().some(({status:H})=>H==="pending")&&m,{showBalance:p}=is(),C=typeof p=="boolean"?p:p?El(p)[Z()?"smallScreen":"largeScreen"]:!0,{balance:y,ensAvatar:E,ensName:A}=Er({address:n,includeBalance:C}),k=y?`${Pr(Number.parseFloat(y.formatted))} ${y.symbol}`:void 0,{openConnectModal:I}=xu(),{openChainModal:x}=Eu(),{openAccountModal:S}=Au(),{accountModalOpen:T,chainModalOpen:F,connectModalOpen:q}=yu();return a.createElement(a.Fragment,null,e({account:n?{address:n,balanceDecimals:y==null?void 0:y.decimals,balanceFormatted:y==null?void 0:y.formatted,balanceSymbol:y==null?void 0:y.symbol,displayBalance:k,displayName:A?Qr(A):Ur(n),ensAvatar:E??void 0,ensName:A??void 0,hasPendingTransactions:u}:void 0,accountModalOpen:T,authenticationStatus:s,chain:o?{hasIcon:!!h,iconBackground:f,iconUrl:c,id:o,name:v,unsupported:!i}:void 0,chainModalOpen:F,connectModalOpen:q,mounted:t(),openAccountModal:S??Jt,openChainModal:x??Jt,openConnectModal:I??Jt}))}ku.displayName="ConnectButton.Custom";export{Iu as R,Au as a,Ea as d,Sn as e,xu as u};
