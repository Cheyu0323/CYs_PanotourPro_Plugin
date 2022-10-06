import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ImageIcon from "@mui/icons-material/Image";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import WebIcon from "@mui/icons-material/Web";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

type PluginFun = {
    id: string;
    fun: string;
};
type PluginImg = {
    id: string;
    url: string;
};

type PluginInfo = {
    id: number;
    icon: any;
    link: string;
    title: string;
    info: string;
    fun?: Array<PluginFun>;
    pic?: Array<PluginImg>;
    iframe?: string;
};

const pluginInfo: Array<PluginInfo> = [
    {
        id: 1,
        icon: PlaylistPlayIcon,
        link: "ActionData",
        title: "Action Data",
        info: "集合觸發事件發生，為其他 Plugin 使用介面上視覺顯示清晰",
        fun: [{ id: "1-1", fun: "觸發事件(動作項目)" }],
        pic: [{id:"p1-1", url: require("../assets/images/plugin/ActionData.png")}]
    },
    {
        id: 2,
        icon: ViewSidebarIcon,
        link: "Sidebar",
        title: "Sidebar",
        info: "快速設定側邊攔，並依照不同裝置顯示不同樣子",
        fun: [
            { id: "2-1", fun: "開啟 Sidebar" },
            { id: "2-2", fun: "關閉 Sidebar" },
            { id: "2-3", fun: "切換開啟關閉 Sidebar" },
            { id: "2-4", fun: "開啟側邊按鈕" },
            { id: "2-5", fun: "關閉側邊按鈕" },
            { id: "2-6", fun: "切換開啟關閉側邊按鈕" },
            { id: "2-7", fun: "開始時動作" },
            { id: "2-8", fun: "關閉時動作" },
            { id: "2-9", fun: "呼叫 Menu | Button 動作(項目名稱)" },
        ],
        iframe: process.env.PUBLIC_URL + '/iframe/sidebar/index.html'
    },
    {
        id: 3,
        icon: CheckBoxOutlineBlankIcon,
        link: "Button",
        title: "Button",
        info: "最常用的 UI 顯示，依照不同裝置顯示不同圖示以及觸發動作",
        fun: [
            { id: "3-1", fun: "隱藏" },
            { id: "3-2", fun: "顯示" },
            { id: "3-3", fun: "切換顯示隱藏" },
        ],
        pic: [{id:"p3-1", url: require("../assets/images/plugin/Button.png")}]
    },
    {
        id: 4,
        icon: RadioButtonUncheckedIcon,
        link: "PointStyleData",
        title: "PointStyleData",
        info: "細部微調 Point 樣式",
        fun: [
            { id: "4-1", fun: "顯示 Point(類型, Point 名稱)" },
            { id: "4-2", fun: "隱藏 Point(類型, Point 名稱)" },
        ],
        pic: [{id:"p4-1", url: require("../assets/images/plugin/PointStyleData.png")}]
    },
    {
        id: 5,
        icon: AnalyticsIcon,
        link: "GoogleAnalytics",
        title: "Google Analytics",
        info: "加入 GA4 事件追蹤",
        fun: [
            { id: "5-1", fun: "加入點擊事件(事件類別, 事件名稱)" },
            { id: "5-2", fun: "自訂義(JSON 事件)" },
            { id: "5-3", fun: "加入照片事件(事件類別, Gallery ID)" },
        ],
        pic: [{id:"p5-1", url: require("../assets/images/plugin/GoogleAnalytics.png")}]
    },
    {
        id: 6,
        icon: ImageIcon,
        link: "SwithPictureSpotImageData",
        title: "Swith PictureSpot Image Data",
        info: "更改 Picture Spot 照片",
        fun: [
            { id: "6-1", fun: "更改照片_file(Point 名稱, 檔案)" },
            { id: "6-2", fun: "更改照片_項目名稱(Point 名稱, 項目名稱)" },
        ],
        pic: [{id:"p6-1", url: require("../assets/images/plugin/SwithPictureSpotImageData.png")}]
    },
    {
        id: 7,
        icon: ThreeSixtyIcon,
        link: "Intro",
        title: "Intro",
        info: "依照不同裝置顯示不同操作介紹",
        fun: [
            { id: "7-1", fun: "項目點擊觸發動作(項目)" },
            { id: "7-2", fun: "項目顯示(項目)" },
            { id: "7-3", fun: "項目隱藏(項目)" },
            { id: "7-4", fun: "停止所有項目並消失" },
        ],
        pic: [{id:"p7-1", url: require("../assets/images/plugin/Intro.png")}]
    },
    {
        id: 8,
        icon: WebIcon,
        link: "WebsiteURLData",
        title: "Website URL Data",
        info: "快速設置 Website Box 依照不同場景顯示不同內容",
        fun: [
            { id: "8-1", fun: "切換目前特定場景顯示隱藏" },
            { id: "8-2", fun: "切換目前特定項目顯示隱藏(項目)" },
            { id: "8-3", fun: "顯示(項目)" },
            { id: "8-4", fun: "隱藏" },
        ],
        pic: [{id:"p8-1", url: require("../assets/images/plugin/WebsiteURLData.png")}]
    },
    {
        id: 9,
        icon: DeveloperBoardIcon,
        link: "Core",
        title: "Core",
        info: "共用函數，基本上都要加入",
    },
];
export default pluginInfo;
