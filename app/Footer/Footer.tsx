export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            {/* Footer Img */}
            <div>
                <img src='/img/LOGO UDAYANA.svg' alt="Logo" />
                <p className="w-80 left-[51px] top-[202px] text-slate-500 text-lg font-medium leading-7">Jln P.B. Sudirman, Denpasar <br />Email: info@unud.ac.id <br />Tlp : +62 (361) 223797 <br />Fax : +62 (361) 701907</p>
            </div>

            {/* Footer Link */}
            <div className="flex md:flex-row flex-col " >
                <div className="">
                    <div className="w-40 left-0 top-0 text-slate-800 text-xl font-bold leading-7">Prabhu Udayana</div>
                    <div className="left-0 top-[44px] text-slate-500 text-base font-medium leading-normal">Filosofi Logo & Media</div>
                    <div className="left-0 top-[84px] text-slate-500 text-base font-medium leading-normal">Merchandise</div>
                    <div className="left-0 top-[124px] text-slate-500 text-base font-medium leading-normal">Sponsorship</div>
                </div>
                <div className="">
                    <div className="w-52 left-0 top-0 text-slate-800 text-xl font-bold leading-7">Universitas Udayana</div>
                    <div className="left-0 top-[44px] text-slate-500 text-base font-medium leading-normal">Website Resmi</div>
                    <div className="left-0 top-[84px] text-slate-500 text-base font-medium leading-normal">Fakultas</div>
                    <div className="left-0 top-[124px] text-slate-500 text-base font-medium leading-normal">UKM</div>
                    <div className="left-0 top-[164px] text-slate-500 text-base font-medium leading-normal">Informasi</div>
                    <div className="left-0 top-[204px] text-slate-500 text-base font-medium leading-normal">Support</div>
                </div>
            </div>

            {/* Footer Copyright */}
            {/* <div className="left-[610px] top-[409px] text-slate-400 text-sm font-medium leading-tight">© 2023 USDI. All rights reserved.</div>   */}

        </footer>
    )
}