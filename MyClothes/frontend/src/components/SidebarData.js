import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'My Weather Outfit',
                path: '/home/outfit-weather',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Clothes',
        path: '/clothes',
        icon: <AiIcons.AiFillAccountBook  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Add clothes',
                path: '/clothes/add-clothes',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Outfits',
        path: '/outfits',
        icon: <IoIcons.IoIosAlbums />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add outfits',
                path: '/outfits/add-outfits',
                icon: <IoIcons.IoIosPaper />,
            },
            ]
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <IoIcons.IoIosAlbums />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Category',
                path: '/admin/category',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'ItemType',
                path: '/admin/itemtype',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Season & Occasion',
                path: '/admin/others',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
]

export const SidebarData2 = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'My Weather Outfit',
                path: '/home/outfit-weather',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Clothes',
        path: '/clothes',
        icon: <AiIcons.AiFillAccountBook  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Add clothes',
                path: '/clothes/add-clothes',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Outfits',
        path: '/outfits',
        icon: <IoIcons.IoIosAlbums />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add outfits',
                path: '/outfits/add-outfits',
                icon: <IoIcons.IoIosPaper />,
            },
            ]
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
]