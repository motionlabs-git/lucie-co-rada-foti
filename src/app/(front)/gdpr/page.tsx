import Footer from '@/components/front/Footer/Footer'
import React from 'react'

const GDPR = () => {
	return (
		<main className='flex flex-col items-center min-h-screen'>
			<section className='container invertText mx-auto max-w-3xl px-4 py-10 text-black'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					Zásady ochrany osobních údajů
				</h1>

				<div className='space-y-6 leading-relaxed'>
					<p>
						<span className='font-semibold'>
							1. Správce osobních údajů
						</span>
						<br />
						Správcem osobních údajů je:{' '}
						<strong>[Název firmy / jméno a příjmení]</strong>
						<br />
						Sídlo: [Ulice, PSČ, Město] <br />
						IČ: [doplňte] <br />
						E-mail: [doplňte] <br />
						Telefon: [doplňte]
					</p>

					<p>
						<span className='font-semibold'>
							2. Jaké osobní údaje zpracováváme
						</span>
						<br />
						<strong>a) Google Analytics</strong> – Údaje o používání
						webových stránek (IP adresa v anonymizované podobě,
						cookies, chování uživatelů na webu). Účel: měření
						návštěvnosti webu, zlepšování obsahu a uživatelského
						zážitku. Právní základ: oprávněný zájem správce.
						<br />
						<br />
						<strong>b) Kontaktní / poptávkový formulář</strong> –
						Údaje, které sami poskytnete (jméno, e-mail, telefon,
						text zprávy). Účel: vyřízení poptávky nebo dotazu,
						případně jednání o smlouvě. Právní základ: plnění
						smlouvy nebo jednání o smlouvě.
					</p>

					<p>
						<span className='font-semibold'>3. Cookies</span>
						<br />
						Na našem webu používáme soubory cookies: <br />–{' '}
						<strong>Technické (nezbytné)</strong> – nutné pro
						správné fungování webu. <br />–{' '}
						<strong>Analytické</strong> – Google Analytics pro
						měření návštěvnosti (IP anonymizace). <br />–{' '}
						<strong>Reklamní / remarketingové</strong> – používány
						pouze na základě vašeho souhlasu. <br />
						Cookies můžete kdykoli odmítnout nebo změnit nastavení
						ve svém prohlížeči.
					</p>

					<p>
						<span className='font-semibold'>
							4. Doba uchování údajů
						</span>
						<br />
						Údaje z formuláře uchováváme po dobu vyřízení vaší
						poptávky a následně dle zákonných povinností (typicky 3
						roky). Cookies a analytická data podle nastavení
						prohlížeče a Google (např. 26 měsíců u GA).
					</p>

					<p>
						<span className='font-semibold'>
							5. Kdo má přístup k údajům
						</span>
						<br />
						– Správce (my). <br />
						– Poskytovatelé služeb – Google Ireland Ltd. (Google
						Analytics). <br />
						– Případně webhostingová společnost, IT správci a další
						smluvní zpracovatelé. <br />
						Vaše údaje nepředáváme třetím stranám za účelem
						marketingu bez vašeho souhlasu.
					</p>

					<p>
						<span className='font-semibold'>6. Vaše práva</span>
						<br />
						Máte právo: na přístup k osobním údajům, na opravu
						nepřesných údajů, na výmaz („právo být zapomenut“), na
						omezení zpracování, vznést námitku proti zpracování, na
						přenositelnost údajů. Pokud si myslíte, že s údaji
						nakládáme v rozporu s právními předpisy, můžete podat
						stížnost u Úřadu pro ochranu osobních údajů (ÚOOÚ).
					</p>

					<p>
						<span className='font-semibold'>7. Kontakt</span>
						<br />
						Pokud máte jakékoli dotazy k ochraně osobních údajů,
						kontaktujte nás: <br />
						[Název firmy / jméno] <br />
						E-mail: [doplňte] <br />
						Telefon: [doplňte]
					</p>
				</div>
			</section>

			<Footer></Footer>
		</main>
	)
}

export default GDPR
