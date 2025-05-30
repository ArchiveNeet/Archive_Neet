import Catalog from "@/components/Catalog";
export default function Page() {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center">
            <div className="max-w-6xl grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
                <Catalog
                    name="Catalog"
                    image_url="https://i.imgur.com/6Zem1Ew.png"
                    link="https://www.amazon.com/Sony-WH-1000XM4-Canceling-Headphones-phone-call/dp/B0863TXGM3?crid=10LV12DUQGY11&dib=eyJ2IjoiMSJ9.ULiv0x1qNgNy2Om07oHXwXGNyvcgO81BxJlKV2uFSkj27Mm-7OQeu9sV4nlO_lTgvszKUEn2DimGkyjmKky-erUwn8xANx2-V40x6Qilc9ii2N9DexxWhZuoS6rWGx3RX6NWzTxSE5bsnGtlqODEZeJq5axdvRD0J1OPgcsYH0uJ3Hk_ekjM5Bf2PJwA3RZPL34hYK74WBoDwL4WhnSlbMXohcwh3cFIChMiv5e5PCk.nQZ2uc1pmkyrC1ErK4MWGQMEwu6sWs7L_Q51vw6fLOE&dib_tag=se&keywords=wh%2B1000xm4&qid=1748573043&sprefix=wh%2B1000x%2Caps%2C128&sr=8-3&th=1"

                />
            </div>
        </main>
    );
}
