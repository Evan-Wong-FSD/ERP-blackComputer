export default function () {
  return {
    menuSelected: '記錄',
    materialsInform: [
      { name: 'taxIdNumber', label: '統編', value: '', options: [] },
      { name: 'firm', label: '公司名稱', value: '', options: [] },
      { name: 'productClass', label: '產品種類', value: '', options: [] },
      { name: 'productClassSerialNumber', label: '產品種類流水號', value: '' },
      { name: 'productSubclass', label: '產品材質', value: '', options: [] },
      { name: 'productSubclassSerialNumber', label: '產品材質流水號', value: '' },
      { name: 'productName', label: '產品名稱', value: '', options: [] },
      { name: 'productNameSerialNumber', label: '產品名稱流水號', value: '' },
      { name: 'caliber', label: '管材口徑', value: '', options: [] },
      { name: 'caliberSerialNumber', label: '管材口徑流水號', value: '' },
      { name: 'pipeMaterialName', label: '管材名稱', value: '', options: [] },
      { name: 'pipeMaterialNameSerialNumber', label: '管材名稱流水號', value: '' },
      { name: 'productPartNumber', label: '產品料號', value: '' },
      { name: 'model', label: '型號', value: '' },
      { name: 'description', label: '描述', value: '' },
      { name: 'voltage', label: '電壓', value: '' },
      { name: 'current', label: '電流', value: '' },
      { name: 'frequency', label: '頻率', value: '' },
      { name: 'powerOutput', label: '輸出功率', value: '' },
      { name: 'specification', label: '規格', value: '' },
      { name: 'characteristic', label: '特性', value: '' }
    ],
    searchingColumns: [
      { name: 'taxIdNumber', label: '統編', selected: false, typeIn: '' },
      { name: 'firm', label: '公司名稱', selected: false, typeIn: '' },
      { name: 'productClass', label: '產品種類', selected: false, typeIn: '' },
      { name: 'productClassSerialNumber', label: '產品種類流水號', selected: false, typeIn: '' },
      { name: 'productSubclass', label: '產品材質', selected: false, typeIn: '' },
      { name: 'productSubclassSerialNumber', label: '產品材質流水號', selected: false, typeIn: '' },
      { name: 'productName', label: '產品名稱', selected: false, typeIn: '' },
      { name: 'productNameSerialNumber', label: '產品名稱流水號', selected: false, typeIn: '' },
      { name: 'caliber', label: '管材口徑', selected: false, typeIn: '' },
      { name: 'caliberSerialNumber', label: '管材口徑流水號', selected: false, typeIn: '' },
      { name: 'pipeMaterialName', label: '管材名稱', selected: false, typeIn: '' },
      { name: 'pipeMaterialNameSerialNumber', label: '管材名稱流水號', selected: false, typeIn: '' },
      { name: 'productPartNumber', label: '產品料號', selected: false, typeIn: '' },
      { name: 'model', label: '型號', selected: false, typeIn: '' },
      { name: 'description', label: '描述', selected: false, typeIn: '' },
      { name: 'voltage', label: '電壓', selected: false, typeIn: '' },
      { name: 'current', label: '電流', selected: false, typeIn: '' },
      { name: 'frequency', label: '頻率', selected: false, typeIn: '' },
      { name: 'powerOutput', label: '輸出功率', selected: false, typeIn: '' },
      { name: 'specification', label: '規格', selected: false, typeIn: '' },
      { name: 'characteristic', label: '特性', selected: false, typeIn: '' }
    ],
    tableData: [],
    tableDataSelected: [],
    searchOptionClicked: ''
  }
}
