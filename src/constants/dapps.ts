import { IProject } from "../helpers/types";

const DAPPS: IProject[] = [
  {
    name: "MakerDAO",
    icon: require("../assets/dapps/maker.png"),
    url: "https://oasis.app/borrow",
    style: {},
  },
  {
    name: "Uniswap",
    icon: require("../assets/dapps/uniswap.jpg"),
    url: "https://uniswap.exchange/",
    style: {},
  },
  {
    name: "Zerion",
    icon: require("../assets/dapps/zerion.png"),
    url: "https://beta.zerion.io/",
    style: { cropCircle: true },
  },
  {
    name: "LocalEthereum",
    icon: require("../assets/dapps/localethereum.png"),
    url: "https://localethereum.com/",
    style: { cropCircle: true },
  },
  {
    name: "Binance DEX",
    icon: require("../assets/dapps/binancedex.png"),
    url: "https://binance.org/",
    style: {},
  },
  {
    name: "3Box",
    icon: require("../assets/dapps/box.png"),
    url: "https://3box.io/",
    style: {},
  },
  {
    name: "OpenSea",
    icon: require("../assets/dapps/opensea.jpg"),
    url: "https://opensea.io/",
    style: { cropCircle: true },
  },
  {
    name: "DDEX",
    icon: require("../assets/dapps/ddex.png"),
    url: "https://ddex.io/",
    style: { cropCircle: true },
  },
  {
    name: "Totle",
    icon: require("../assets/dapps/totle.jpg"),
    url: "https://swap.totle.com/",
    style: { cropCircle: true },
  },
  {
    name: "KyberSwap",
    icon: require("../assets/dapps/kyberswap.jpg"),
    url: "https://kyberswap.com/",
    style: { cropCircle: true },
  },
  {
    name: "1inch Exchange",
    icon: require("../assets/dapps/oneinchexchange.png"),
    url: "https://1inch.exchange/",
    style: {},
  },
  {
    name: "DeFi Portfolio Tracker",
    icon: require("../assets/dapps/defiportfolio.png"),
    url: "https://portfolio.defiprime.com/",
    style: {},
  },
  {
    name: "Bamboo Relay",
    icon: require("../assets/dapps/bamboorelay.png"),
    url: "https://bamboorelay.com/",
    style: {},
  },
  {
    name: "dex.blue",
    icon: require("../assets/dapps/dexblue.jpg"),
    url: "https://dex.blue/trading/",
    style: {},
  },
  {
    name: "Loopring",
    icon: require("../assets/dapps/loopring.jpg"),
    url: "https://loopring.io/trade/",
    style: {},
  },
  {
    name: "Rarible",
    icon: require("../assets/dapps/rarible.png"),
    url: "https://app.rarible.com/#/connect",
    style: { cropCircle: true },
  },
  {
    name: "dYdX",
    icon: require("../assets/dapps/dydx.jpg"),
    url: "https://dydx.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "Synthetix",
    icon: require("../assets/dapps/synthetix.jpg"),
    url: "https://synthetix.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "InstaDapp",
    icon: require("../assets/dapps/instadapp.jpg"),
    url: "https://instadapp.io/dashboard/",
    style: {},
  },
  {
    name: "PoolTogether",
    icon: require("../assets/dapps/pooltogether.png"),
    url: "https://app.pooltogether.com/",
    style: { cropCircle: true },
  },
  {
    name: "Sablier",
    icon: require("../assets/dapps/sablier.jpg"),
    url: "https://www.sablier.finance/",
    style: { cropCircle: true },
  },
  {
    name: "DEX.AG",
    icon: require("../assets/dapps/dexag.png"),
    url: "https://dex.ag/",
    style: { cropCircle: true },
  },
  {
    name: "Gelato",
    icon: require("../assets/dapps/gelato.jpg"),
    url: "https://play.gelato.finance/",
    style: { cropCircle: true },
  },
  {
    name: "MyCrypto",
    icon: require("../assets/dapps/mycrypto.png"),
    url: "https://beta.mycrypto.com/",
    style: {},
  },
  {
    name: "Gnosis Safe Multisig",
    icon: require("../assets/wallets/gnosis-safe.jpg"),
    url: "https://gnosis-safe.io/",
    style: {},
  },
  {
    name: "Idle Finance",
    icon: require("../assets/dapps/idlefinance.png"),
    url: "https://idle.finance/",
    style: { cropCircle: true },
  },
  {
    name: "iearn.finance",
    icon: require("../assets/dapps/iearnfinance.jpg"),
    url: "https://iearn.finance/",
    style: {},
  },
  {
    name: "RCN Finance",
    icon: require("../assets/dapps/rcnfinance.jpg"),
    url: "https://rcn.market/",
    style: { cropCircle: true },
  },
  {
    name: "Hegic",
    icon: require("../assets/dapps/hegic.jpg"),
    url: "https://www.hegic.co/",
    style: { cropCircle: true },
  },
  {
    name: "Kickback",
    icon: require("../assets/dapps/kickback.jpg"),
    url: "https://kickback.events/",
    style: {},
  },
  {
    name: "Aave",
    icon: require("../assets/dapps/aave.png"),
    url: "https://app.aave.com/",
    style: {},
  },
  {
    name: "Zapper",
    icon: require("../assets/dapps/zapper.png"),
    url: "https://www.zapper.fi/",
    style: { cropCircle: true },
  },
  {
    name: "88mph",
    icon: require("../assets/dapps/88mph.jpg"),
    url: "https://88mph.app/",
    style: { cropCircle: true },
  },
  {
    name: "Mooni",
    icon: require("../assets/dapps/mooni.jpg"),
    url: "https://app.mooni.tech/exchange",
    style: {},
  },
  {
    name: "Clovers",
    icon: require("../assets/dapps/clovers.png"),
    url: "https://clovers.network/",
    style: {},
  },
  {
    name: "Mintbase",
    icon: require("../assets/dapps/mintbase.jpg"),
    url: "https://mintbase.io/",
    style: {},
  },
  {
    name: "DAOstack",
    icon: require("../assets/dapps/daostack.jpg"),
    url: "https://alchemy.daostack.io/",
    style: {},
  },
  {
    name: "KnownOrigin",
    icon: require("../assets/dapps/knownorigin.jpg"),
    url: "https://knownorigin.io/",
    style: { cropCircle: true },
  },
  {
    name: "Affogato",
    icon: require("../assets/dapps/affogato.png"),
    url: "https://affogato.co/",
    style: {},
  },
  {
    name: "StablePay",
    icon: require("../assets/dapps/stablepay.jpg"),
    url: "https://stablepay.io/dashboard",
    style: {},
  },
  {
    name: "DeFi Saver",
    icon: require("../assets/dapps/defisaver.jpg"),
    url: "https://defisaver.com/",
    style: {},
  },
  {
    name: "MyEtherWallet",
    icon: require("../assets/dapps/myetherwallet.jpg"),
    url: "https://www.myetherwallet.com/",
    style: {},
  },
  {
    name: "Loom Network",
    icon: require("../assets/dapps/loomnetwork.png"),
    url: "https://dashboard.dappchains.com/login",
    style: { cropCircle: true },
  },
  {
    name: "Curve",
    icon: require("../assets/dapps/curvefinance.png"),
    url: "https://www.curve.fi",
    style: {},
  },
  {
    name: "Matic Network",
    icon: require("../assets/dapps/maticnetwork.jpg"),
    url: "https://matic.network/",
    style: {},
  },
  {
    name: "ThorChain",
    icon: require("../assets/dapps/thorchain.jpg"),
    url: "https://thorchain.org/",
    style: { cropCircle: true },
  },
  {
    name: "BulkSender",
    icon: require("../assets/dapps/bulksender.png"),
    url: "https://bulksender.app/",
    style: {},
  },
  {
    name: "Heroes of Ether",
    icon: require("../assets/dapps/heroesofether.png"),
    url: "https://heroesofether.io/",
    style: {},
  },
  {
    name: "Betoken",
    icon: require("../assets/dapps/betoken.png"),
    url: "https://betoken.fund/",
    style: {},
  },
  {
    name: "Linkdrop",
    icon: require("../assets/dapps/linkdrop.png"),
    url: "https://linkdrop.io/",
    style: {},
  },
  {
    name: "HelioWallet",
    icon: require("../assets/dapps/heliowallet.png"),
    url: "https://heliowallet.com/",
    style: {},
  },
  {
    name: "Escaroo",
    icon: require("../assets/dapps/escaroo.png"),
    url: "https://escaroo.com/",
    style: { cropCircle: true },
  },
  {
    name: "TokenMarket",
    icon: require("../assets/dapps/tokenmarket.png"),
    url: "https://tokenmarket.net/",
    style: { cropCircle: true },
  },
  {
    name: "Mesa",
    icon: require("../assets/dapps/mesa.png"),
    url: "https://mesa.eth.link/",
    style: { cropCircle: true },
  },
  {
    name: "Unstoppable Domains",
    icon: require("../assets/dapps/unstoppable.png"),
    url: "https://unstoppabledomains.com/manager",
    style: { cropCircle: true },
  },
  {
    name: "MCDEX",
    icon: require("../assets/dapps/mcdex.png"),
    url: "https://mcdex.io",
    style: { cropCircle: true },
  },
  {
    name: "Furucombo",
    icon: require("../assets/dapps/furucombo.png"),
    url: "https://furucombo.app/",
    style: {},
  },
  {
    name: "Melon",
    icon: require("../assets/dapps/melon.png"),
    url: "https://melon.avantgarde.finance/",
    style: {},
  },
  {
    name: "Matcha",
    icon: require("../assets/dapps/matcha.jpg"),
    url: "https://matcha.xyz",
    style: { cropCircle: true },
  },
  {
    name: "Nash",
    icon: require("../assets/dapps/nash.jpg"),
    url: "https://nash.io/",
    style: { cropCircle: true },
  },
  {
    name: "Chainsfr",
    icon: require("../assets/dapps/chainsfr.png"),
    url: "https://chainsfr.com",
    style: { cropCircle: true },
  },
  {
    name: "AKA3 Email Alias",
    icon: require("../assets/dapps/aka3.png"),
    url: "http://aka3.net",
    style: {},
  },
  {
    name: "DeBank",
    icon: require("../assets/dapps/debank.jpg"),
    url: "https://debank.com/",
    style: { cropCircle: true },
  },
  {
    name: "2Key",
    icon: require("../assets/dapps/2key.jpg"),
    url: "https://www.2key.network/",
    style: { cropCircle: true },
  },
  {
    name: "Pitch",
    icon: require("../assets/dapps/pitch.jpg"),
    url: "https://pitchinvestorslive.com/",
    style: { cropCircle: true },
  },
  {
    name: "Unagii",
    icon: require("../assets/dapps/unagii.png"),
    url: "https://www.unagii.com/",
    style: { cropCircle: true },
  },
  {
    name: "Cream Finance",
    icon: require("../assets/dapps/creamfinance.jpg"),
    url: "https://cream.finance/",
    style: {},
  },
  {
    name: "zkSync",
    icon: require("../assets/dapps/zksync.jpg"),
    url: "https://zksync.io/",
    style: { cropCircle: true },
  },
  {
    name: "TokenSets",
    icon: require("../assets/dapps/tokensets.jpg"),
    url: "https://tokensets.com/",
    style: { cropCircle: true },
  },
  {
    name: "Shell Exchange",
    icon: require("../assets/dapps/shell.jpg"),
    url: "https://shells.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "Index Coop",
    icon: require("../assets/dapps/indexcoop.jpg"),
    url: "https://www.indexcoop.com/",
    style: { cropCircle: true },
  },
  {
    name: "SwapX",
    icon: require("../assets/dapps/swapx.jpg"),
    url: "https://app.swapx.org/",
    style: { cropCircle: true },
  },
  {
    name: "Starname",
    icon: require("../assets/dapps/starname.png"),
    url: "https://app.starname.me/",
    style: { cropCircle: true },
  },
  {
    name: "Space",
    icon: require("../assets/dapps/space.png"),
    url: "https://space.storage/",
    style: { cropCircle: true },
  },
  {
    name: "Maskbook",
    icon: require("../assets/dapps/maskbook.png"),
    url: "https://mask.io/",
    style: { cropCircle: true },
  },
  {
    name: "MANTRA DAO",
    icon: require("../assets/dapps/mantradao.png"),
    url: "https://app.mantradao.com/",
    style: { cropCircle: true },
  },
  {
    name: "Snapshot",
    icon: require("../assets/dapps/snapshot.jpg"),
    url: "https://snapshot.page/",
    style: { cropCircle: true },
  },
  {
    name: "Invoice.build",
    icon: require("../assets/dapps/invoice-build.png"),
    url: "https://invoice.build/",
    style: {},
  },
  {
    name: "Ankr",
    icon: require("../assets/dapps/ankr.jpg"),
    url: "https://ankr.com/",
    style: {},
  },
  {
    name: "DODO",
    icon: require("../assets/dapps/dodo.png"),
    url: "https://app.dodoex.io/",
    style: { cropCircle: true },
  },
  {
    name: "zLOT",
    icon: require("../assets/dapps/zlot.jpg"),
    url: "https://zlot.finance/",
    style: { cropCircle: true },
  },
  {
    name: "Adex Network",
    icon: require("../assets/dapps/adexnetwork.jpg"),
    url: "https://staking.adex.network/",
    style: {},
  },
  {
    name: "Actus Protocol",
    icon: require("../assets/dapps/actusprotocol.jpg"),
    url: "https://portal.actus-protocol.io/",
    style: {},
  },
  {
    name: "AstroTools.io",
    icon: require("../assets/dapps/astrotools.jpg"),
    url: "https://astrotools.io/",
    style: {},
  },
  {
    name: "Rubic Exchange",
    icon: require("../assets/dapps/rubic.jpg"),
    url: "https://rubic.exchange/",
    style: { cropCircle: true },
  },
  {
    name: "Harvest Finance",
    icon: require("../assets/dapps/harvestfinance.jpg"),
    url: "https://harvest.finance/",
    style: { cropCircle: true },
  },
  {
    name: "OctoFi",
    icon: require("../assets/dapps/octofinance.jpg"),
    url: "https://octo.fi/",
    style: { cropCircle: true },
  },
  {
    name: "Mushroom Finance",
    icon: require("../assets/dapps/mushroomfinance.jpg"),
    url: "https://mushrooms.finance/",
    style: { cropCircle: true },
  },
];

export default DAPPS;
