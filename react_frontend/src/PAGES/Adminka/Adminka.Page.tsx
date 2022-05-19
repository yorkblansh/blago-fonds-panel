/* eslint-disable react/jsx-pascal-case */
import './adminka.page.style.scss'
import { Header_ADM_BTN } from './components/header.adm.btns/header.adm.to_home.btn'
import { HeaderWR_Adminka } from './components/wrapper.header/wrapper.header.adm'
import { WrapperItems } from './components/wrapper.wrapper_items/wrapper_items.adm'
import { ModalMenus_Contract } from './modules/modal.menus.contract'
import { Add_Item_Btn } from './components/add.item.btn/add.item.btn'
import { getSoftwareVersion } from 'app/getSoftwareVersion'
import { getAccountProps } from 'app/getAccountProps'
import { PATH } from 'api/consts'
import { SortButtons } from 'config/SortButtons'
import { ListBlocks_Contract } from 'components/ListBlocks/list.blocks.contract'

export const ADMINKA_PAGE = () => {
	let { is_authorized } = getAccountProps()
	let { ListBlocks, list, SortBTNs } = ListBlocks_Contract({
		path: '/adminka',
		is_authorized,
		SortButtons,
	})
	let { ModalMenus } = ModalMenus_Contract({ list })
	let { software_version } = getSoftwareVersion()

	return (
		<div className="adminka">
			<div className="adminka--wrapper">
				<HeaderWR_Adminka
					HomeBtn={<Header_ADM_BTN path={PATH('/stats')} Label="Перейти в статистику" />}
					ExitBtn={<Header_ADM_BTN path="/logout" Label="Выйти из админки" />}
				/>
				<Add_Item_Btn Label="Добавить новое" />
				<div className="dropdown-wrapper" children={SortBTNs} />
				<WrapperItems key={'wrapper-items'} Items={ListBlocks} ModalMenus={ModalMenus} />
				<div id="software-version" children={software_version} />
			</div>
		</div>
	)
}
