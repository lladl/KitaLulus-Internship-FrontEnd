import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { dataCategories, dataType, dataTitle } from './Data.js';
import '@progress/kendo-theme-default/dist/all.css';

//mengisi default value
const defaultItemCategory = { categoryName: 'Select Category ...' };
const defaultItemProduct = { typeName: 'Select Type ...' };
const defaultItemOrder = { titleName: 'Select Title ...' };

class AppComponent extends React.Component {
  state = {
      category: null,
      type: null,
      title: null,
      titles: dataTitle,
      types: dataType
  };

  categoryChange = (event) => {
      const category = event.target.value;
      const types = dataType.filter(type => type.categoryId === category.categoryId);

      this.setState({
          category: category,
          types: types,
          type: null,
          title: null
      });
  }

  typeChange = (event) => {
      const type = event.target.value;
      const titles = dataTitle.filter(title => title.typeId === type.typeId);

      this.setState({
          type: type,
          titles: titles,
          title: null
      });
  }

  orderChange = (event) => {
      this.setState({ title: event.target.value });
  }

  render() {
      const category = this.state.category;
      const type = this.state.type;
      const title = this.state.title;

      const hasCategory = category && category !== defaultItemCategory;
      const hasType = type && type !== defaultItemProduct;

      return (
          <div>
              <div style={{ display: 'inline-block' }}>
                  Choose
                  <br />
                  <DropDownList
                      data={dataCategories}
                      textField="categoryName"
                      onChange={this.categoryChange}
                      defaultItem={defaultItemCategory}
                      value={category}
                  />
              </div>
              <div style={{ display: 'inline-block', marginLeft: '30px' }}>
                  Type
                  <br />
                  <DropDownList
                      //menonaktifkan type saat kategori belum dipilih
                      disabled={!hasCategory}
                      //
                      data={this.state.types}
                      textField="typeName"
                      onChange={this.typeChange}
                      defaultItem={defaultItemProduct}
                      value={type}
                  />
              </div>
              <div style={{ display: 'inline-block', marginLeft: '30px' }}>
                  Title
                  <br />
                  <DropDownList
                      //menonaktifkan title saat type belum dipilih
                      disabled={!hasType}
                      //
                      data={this.state.titles}
                      textField="titleName"
                      onChange={this.orderChange}
                      defaultItem={defaultItemOrder}
                      value={title}
                  />
              </div>
          </div>
      );
  }
}

export default AppComponent;
