/* eslint-disable react/jsx-pascal-case */
import { LIST } from 'app/hooks/getItemList'
import { Button_Modal } from '../layouts/modal.menus/components/button.modal/button.modal'
import { InputModal } from '../layouts/modal.menus/components/inputs.modal/input.modal'
import { ModalMenu } from '../layouts/modal.menus/modal.menus'

interface IModalMenus_Contract {
	(props: { list: typeof LIST.organizes[] }): { ModalMenus: JSX.Element[] }
}

export const ModalMenus_Contract: IModalMenus_Contract = ({ list }) => {
	let ModalMenus = list.map((values: any, index: any) => {
		return (
			<>
				<ModalMenu
					key={'modify-menu'}
					CloseBtn={<Button_Modal button_type="CLOSE" index={index} Label="Закрыть" modal_type="MODIFY" />}
					SaveBtn={<Button_Modal button_type="SAVE" index={index} Label="Сохранить" modal_type="MODIFY" />}
					InputModal={
						<div className="modal--input_wrapper">
							<form>
								<InputModal name="name" Label="Название" value={values.name} index={index} />
								<InputModal name="link1" Label="Ссылка на сайт фонда" value={values.link1} index={index} />
								<InputModal
									name="link2"
									Label="Ссылка на отчёты деятельности фонда"
									value={values.link2}
									index={index}
								/>
								<InputModal name="info" Label="Доп. Информация" value={values.info} index={index} />
							</form>
						</div>
					}
					type="MODIFY"
					index={index}
				/>
				<ModalMenu
					RemoveModalLabel="Удалить"
					type="REMOVE"
					index={index}
					SaveBtn={<Button_Modal button_type="SAVE" index={index} Label="Удалить??" modal_type="REMOVE" />}
					CloseBtn={<Button_Modal button_type="CLOSE" index={index} Label="Закрыть" modal_type="REMOVE" />}
					InputModal={<div></div>}
				/>
				<ModalMenu
					CloseBtn={<Button_Modal button_type="CLOSE" index="create" Label="Закрыть" modal_type="CREATE" />}
					SaveBtn={<Button_Modal button_type="SAVE" index="create" Label="Добавить" modal_type="CREATE" />}
					InputModal={
						<div className="modal--input_wrapper">
							<form>
								<InputModal name="name" Label="Название" value="" index="create" />
								<InputModal name="link1" Label="Ссылка1" value="" index="create" />
								<InputModal name="link2" Label="Ссылка2" value="" index="create" />
								<InputModal name="info" Label="Доп. Информация" value="" index="create" />
							</form>
						</div>
					}
					type="CREATE"
					index={index}
				/>
			</>
		)
	})
	return { ModalMenus }
}
