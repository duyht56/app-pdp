import ProductListing from '@/components/ProductListing';
import Head from 'next/head';

export default function Home() {

  const product = [
    {
        "productCode": "EW6S526I",
        "productName": "Lavatrice serie 600 SensiCare 6kg",
        "productHeading": "",
        "gallery": [
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM200PA0008V.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEFL18SPE0001P.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM200CE000AV.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM180FA00004.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM180FA00003.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM180FA00004.png",
                "AltText": null
            },
            {
                "Url": "https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_PN/PSEEWM180FA00003.png",
                "AltText": null
            }
        ],
        "price": "€ 399,90",
        "productId": "914340500"
    },
    {
        "productCode": "EW6S560I",
        "productName": "Lavatrice serie 600 SensiCare 6kg",
        "productHeading": "",
        "gallery": [
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMjEwUEEwMDA1Qy5wbmc&hmac=bS06InTEnGk",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwMy5wbmc&hmac=2MP8DmqlQ0M",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwNC5wbmc&hmac=lwLYkOY7zRE",
                "AltText": null
            },
            {
                "Url": "electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwQS5wbmc&hmac=RjXiSKTwrTc",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMjEwQ0UwMDA3SC5wbmc&hmac=X-MwoxF44oQ",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwNy5wbmc&hmac=HTpPzD5nTXU",
                "AltText": null
            }
        ],
        "price": "€ 649,99",
        "productId": "914340500"
    },
    {
        "productCode": "EW6S570I",
        "productName": "Lavatrice serie 600 SensiCare 6kg",
        "productHeading": "",
        "gallery": [
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMjIwUEEwMDAwNS5wbmc&hmac=2h_yQT5tTuM",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwNi5wbmc&hmac=cSyFiVLyTkc",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTYwRjM2MzAwMS5wbmc&hmac=YFV0MLSvXIw",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMTgwRkEwMDAwOS5wbmc&hmac=6-tyMA1y0yA",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMjEwRkUwMDAwMi5wbmc&hmac=Jop9Xd_-I-8",
                "AltText": null
            },
            {
                "Url": "https://www.electrolux.it/remote.jpg.ashx?preset=16%3a9-2880&origin=T1&urlb64=aHR0cHM6Ly9zZXJ2aWNlcy5lbGVjdHJvbHV4LW1lZGlhbGlicmFyeS5jb20vMTE4ZWQ0YzBlZTY1NDZmNGE3Njg0YzdmZWY4Yzk4NWFOclptWWtNODYxZDFmL3ZpZXcvV1NfUE4vUFNFRVdNMjIwQ0UwMDAxNi5wbmc&hmac=5GkSmRgdApg",
                "AltText": null
            }
        ],
        "price": "€ 679,99",
        "productId": "914340500"
    }
]
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductListing products={product}></ProductListing>
    </>
  );
}
