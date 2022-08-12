// для поиска
// Марка
const BrandOfVehicleItems = [
  {
    name: 'Арбуз',
  },
  {
    name: 'Яблоко',
  },
  {
    name: 'Малина',
  },
  {
    name: 'Клубника',
  },
  {
    name: 'Виноград',
  },
];
// Модель
const ModelNameItems = [
  {
    name: '1',
  },
  {
    name: '2',
  },
  {
    name: '3',
  },
  {
    name: '4',
  },
  {
    name: '5',
  },
];
// Модификация
const ModificationItems = [
  {
    name: '6',
  },
  {
    name: '7',
  },
  {
    name: '8',
  },
  {
    name: '9',
  },
  {
    name: '10',
  },
];
// Кузов
const BodyVehicleItems = [
  {
    name: '11',
  },
  {
    name: '12',
  },
  {
    name: '13',
  },
  {
    name: '14',
  },
  {
    name: '15',
  },
];
// Год с
const YearStartItems = [
  {
    name: '16',
  },
  {
    name: '17',
  },
  {
    name: '18',
  },
  {
    name: '19',
  },
  {
    name: '20',
  },
];
// Год до
const YearEndItems = [
  {
    name: '21',
  },
  {
    name: '22',
  },
  {
    name: '23',
  },
  {
    name: '24',
  },
  {
    name: '25',
  },
];
// Двигатель
const EngineItems = [
  {
    name: '26',
  },
  {
    name: '27',
  },
  {
    name: '28',
  },
  {
    name: '29',
  },
  {
    name: '30',
  },
];
// Трансмиссия
const TransmissionItems = [
  {
    name: '31',
  },
  {
    name: '32',
  },
  {
    name: '33',
  },
  {
    name: '34',
  },
  {
    name: '35',
  },
];
// Part Number
const PartNumberItems = [
  {
    name: '36',
  },
  {
    name: '37',
  },
  {
    name: '38',
  },
  {
    name: '39',
  },
  {
    name: '40',
  },
];
// блоки, в которые будет вставляться разметка
const
  // для поиска
  BrandOfVehicleInner = document.querySelector('#BrandOfVehicleInner'),
  ModelNameInner = document.querySelector('#ModelNameInner'),
  ModificationInner = document.querySelector('#ModificationInner'),
  BodyVehicleInner = document.querySelector('#BodyVehicleInner'),
  YearStartInner = document.querySelector('#YearStartInner'),
  YearEndInner = document.querySelector('#YearEndInner'),
  EngineInner = document.querySelector('#EngineInner'),
  TransmissionInner = document.querySelector('#TransmissionInner'),
  PartNumberInner = document.querySelector('#PartNumberInner');
// генераторы селектов (содержат разметку внутренностей)
let htmlSelect1 = '',
  htmlSelect2 = '',
  htmlSelect3 = '',
  htmlSelect4 = '',
  htmlSelect5 = '',
  htmlSelect6 = '',
  htmlSelect7 = '',
  htmlSelect8 = '',
  htmlSelect9 = '';
// вставка объектов в разметку
class Output {
  render() {
    // вывод внутренностей для select в поиске
    selectButtonsAndDropDownsOutput();
    function selectButtonsAndDropDownsOutput() {
      // Марка
      BrandOfVehicleItems.forEach(({ name }) => {
        htmlSelect1 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      BrandOfVehicleInner.innerHTML = htmlSelect1;
      // Модель
      ModelNameItems.forEach(({ name }) => {
        htmlSelect2 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      ModelNameInner.innerHTML = htmlSelect2;
      // Модификации
      ModificationItems.forEach(({ name }) => {
        htmlSelect3 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      ModificationInner.innerHTML = htmlSelect3;
      // Кузов
      BodyVehicleItems.forEach(({ name }) => {
        htmlSelect4 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      BodyVehicleInner.innerHTML = htmlSelect4;
      // Год с
      YearStartItems.forEach(({ name }) => {
        htmlSelect5 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      YearStartInner.innerHTML = htmlSelect5;
      // Год до

      YearEndItems.forEach(({ name }) => {
        htmlSelect6 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      YearEndInner.innerHTML = htmlSelect6;
      // Двигатель
      EngineItems.forEach(({ name }) => {
        htmlSelect7 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      EngineInner.innerHTML = htmlSelect7;
      // Трансмиссия
      TransmissionItems.forEach(({ name }) => {
        htmlSelect8 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      TransmissionInner.innerHTML = htmlSelect8;
      // Part Number
      PartNumberItems.forEach(({ name }) => {
        htmlSelect9 += `
      <li class="search-bg__select-dropdown-item">${name}</li>
    `;
      });
      PartNumberInner.innerHTML = htmlSelect9;
    };
  }
}
// сам вывод информации в каталог и поиск
const outputPage = new Output();
outputPage.render();
// для поиска в header
const searchBg = document.querySelector('.search-bg'),
  searchBtnAll = document.querySelectorAll('#searchBtn'),
  headerSearch = document.querySelector('.header__search'),
  headerSeacrhBtn = document.querySelectorAll('.search-bg__select-btn'),
  dropDownMenuSearchContainer = document.querySelectorAll('.search-bg__select-container'),
  searchInputPlaceholder = document.querySelectorAll('.search-bg__span'),
  selectDropDown = document.querySelectorAll('.search-bg__select-dropdown'),
  tagContainer = document.querySelector('.tag-container');
// открытие поиска по кнопке
function searchFilter() {
  searchBgWidth();
  openSearchBgBtn();
  closeSearchFilter();
  btnSelects();
  // автоматическое рассчитывание ширины
  function searchBgWidth() {
    if (window.matchMedia("(min-width: 960px)").matches) {
      searchBg.style.width = headerSearch.offsetWidth + 'px';
      let posY = headerSearch.offsetLeft;
      searchBg.style.transform = 'translateX(' + posY + 'px)';
    } else {
      searchBg.style.width = 100 + '%';
      searchBg.style.transform = 'translateX(0px)';
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 959) {
        searchBg.style.width = headerSearch.offsetWidth + 'px';
        let posY = headerSearch.offsetLeft;
        searchBg.style.transform = 'translateX(' + posY + 'px)';
      } else if (window.innerWidth < 960) {
        searchBg.style.width = 100 + '%';
        searchBg.style.transform = 'translateX(0px)';
      }
    });
  };
  // открытие меню поиска
  function openSearchBgBtn() {
    searchBtnAll.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!searchBg.classList.contains('active')) {
          searchBg.classList.add('active');
          searchBg.classList.remove('remove');
        } else {
          searchBg.classList.add('remove');
          searchBg.classList.remove('active');
          dropDownMenuSearchContainer.forEach(container => {
            const dropMenuButton = container.querySelector('.search-bg__select-btn'),
              dropDownMenu = container.querySelector('.search-bg__select-dropdown'),
              buttonInnerText = container.querySelector('.search-bg__span'),
              searchInput = container.querySelector('.search-bg__select-dropdown-search'),
              dropDownMenuListContainer = container.querySelector('.search-bg__select-dropdown-list');
            dropDownMenu.classList.remove('active');
            searchInput.value = '';
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', () => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
            searchBg.classList.add('remove');
            searchBg.classList.remove('active');
            dropMenuButton.style.border = '1px solid #bcbcbc';
            dropMenuButton.style.background = '#fff';
            buttonInnerText.style.color = '#bcbcbc';
            container.classList.remove('active');
            document.querySelector('#BrandOfVehicle .search-bg__span').innerText = 'Марка';
          });
        }
      });
    });
  }
  // работа с самими кнопками и раскрывающимися меню в кнопках
  function btnSelects() {
    dropDownMenuSearchContainer.forEach(container => {
      const dropMenuButton = container.querySelector('.search-bg__select-btn'),
        dropDownMenu = container.querySelector('.search-bg__select-dropdown'),
        buttonInnerText = container.querySelector('.search-bg__span'),
        searchInput = container.querySelector('.search-bg__select-dropdown-search'),
        dropDownMenuListContainer = container.querySelector('.search-bg__select-dropdown-list');
      // сбор внутренних пунктов
      const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
      dropMenuButton.addEventListener('click', (e) => {
        // реализация внутреннего поиска в кнопках
        if (e.target === document.querySelector('#BrandOfVehicle')) {
          BrandOfVehicleInner.innerHTML = htmlSelect1;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            BrandOfVehicleInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < BrandOfVehicleItems.length; i++) {
                let userName = BrandOfVehicleItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  BrandOfVehicleInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + BrandOfVehicleItems[i].name + '</li>';
                }
              }
            } else {
              BrandOfVehicleInner.innerHTML = htmlSelect1;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          // клики по пунктам
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', () => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn1');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn1').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn1').length; i++) {
                    document.querySelectorAll('.btn1')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Марка';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#ModelName')) {
          ModelNameInner.innerHTML = htmlSelect2;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            ModelNameInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < ModelNameItems.length; i++) {
                let userName = ModelNameItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  ModelNameInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + ModelNameItems[i].name + '</li>';
                }
              }
            } else {
              ModelNameInner.innerHTML = htmlSelect2;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          // клики по пунктам
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn2');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn2').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn2').length; i++) {
                    document.querySelectorAll('.btn2')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Модель';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#Modification')) {
          ModificationInner.innerHTML = htmlSelect3;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            ModificationInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < ModificationItems.length; i++) {
                let userName = ModificationItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  ModificationInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + ModificationItems[i].name + '</li>';
                }
              }
            } else {
              ModificationInner.innerHTML = htmlSelect3;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn3');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn3').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn3').length; i++) {
                    document.querySelectorAll('.btn3')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Модификация';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#BodyVehicle')) {
          BodyVehicleInner.innerHTML = htmlSelect4;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            BodyVehicleInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < BodyVehicleItems.length; i++) {
                let userName = BodyVehicleItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  BodyVehicleInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + BodyVehicleItems[i].name + '</li>';
                }
              }
            } else {
              BodyVehicleInner.innerHTML = htmlSelect4;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn4');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn4').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn4').length; i++) {
                    document.querySelectorAll('.btn4')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Кузов';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#YearStart')) {
          YearStartInner.innerHTML = htmlSelect5;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            YearStartInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < YearStartItems.length; i++) {
                let userName = YearStartItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  YearStartInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + YearStartItems[i].name + '</li>';
                }
              }
            } else {
              YearStartInner.innerHTML = htmlSelect5;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn5');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn5').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn5').length; i++) {
                    document.querySelectorAll('.btn5')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Год с';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#YearEnd')) {
          YearEndInner.innerHTML = htmlSelect6;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            YearEndInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < YearEndItems.length; i++) {
                let userName = YearEndItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  YearEndInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + YearEndItems[i].name + '</li>';
                }
              }
            } else {
              YearEndInner.innerHTML = htmlSelect6;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn6');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn6').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn6').length; i++) {
                    document.querySelectorAll('.btn6')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Год до';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#Engine')) {
          EngineInner.innerHTML = htmlSelect7;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            EngineInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < EngineItems.length; i++) {
                let userName = EngineItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  EngineInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + EngineItems[i].name + '</li>';
                }
              }
            } else {
              EngineInner.innerHTML = htmlSelect7;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn7');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn7').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn7').length; i++) {
                    document.querySelectorAll('.btn7')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Двигатель';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#Transmission')) {
          TransmissionInner.innerHTML = htmlSelect8;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            TransmissionInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < TransmissionItems.length; i++) {
                let userName = TransmissionItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  TransmissionInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + TransmissionItems[i].name + '</li>';
                }
              }
            } else {
              TransmissionInner.innerHTML = htmlSelect8;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn8');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn8').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn8').length; i++) {
                    document.querySelectorAll('.btn8')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Трансмиссия';
                  tagElement.remove();
                });
              }
            });
          });
        }
        else if (e.target === document.querySelector('#PartNumber')) {
          PartNumberInner.innerHTML = htmlSelect9;
          // внутренний поиск в кнопках
          searchInput.onkeyup = function () {
            PartNumberInner.innerHTML = '';
            let searchText = this.value.toLowerCase();
            let stringLength = searchText.length;
            if (stringLength > 0) {
              for (let i = 0; i < PartNumberItems.length; i++) {
                let userName = PartNumberItems[i].name.split('').slice(0, stringLength).join('').toLowerCase();
                if (userName == searchText) {
                  PartNumberInner.innerHTML += '<li class="search-bg__select-dropdown-item">' + PartNumberItems[i].name + '</li>';
                }
              }
            } else {
              PartNumberInner.innerHTML = htmlSelect9;
            }
            // сбор внутренних пунктов
            const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
            // клики по пунктам
            dropDownMenuList.forEach(item => {
              item.addEventListener('click', (e) => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');

                  // удаление тега в поиске
                  let tagElement = document.createElement('div');
                  tagElement.classList.add('header__search-select-btn');
                  tagElement.classList.add('btn9');
                  tagElement.innerText = item.innerText;
                  tagContainer.appendChild(tagElement);
                  tagContainer.classList.add('active');
                  if (document.querySelectorAll('.btn9').length > 1) {
                    for (let i = 0; i < document.querySelectorAll('.btn9').length; i++) {
                      document.querySelectorAll('.btn9')[i].remove();
                    }
                  }
                  tagElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropMenuButton.style.border = '1px solid #bcbcbc';
                    dropMenuButton.style.background = '#fff';
                    buttonInnerText.style.color = '#bcbcbc';
                    container.classList.remove('active');
                    dropDownMenu.classList.remove('active');
                    setTimeout(() => searchInput.blur(), 100);
                    searchInput.value = '';
                    buttonInnerText.innerText = 'Part Number';
                    tagElement.remove();
                  });
                }
              });
            });
          };
          // сбор внутренних пунктов
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', (e) => {
              if (item !== null) {

                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');

                // удаление тега в поиске
                let tagElement = document.createElement('div');
                tagElement.classList.add('header__search-select-btn');
                tagElement.classList.add('btn9');
                tagElement.innerText = item.innerText;
                tagContainer.appendChild(tagElement);
                tagContainer.classList.add('active');
                if (document.querySelectorAll('.btn9').length > 1) {
                  for (let i = 0; i < document.querySelectorAll('.btn9').length; i++) {
                    document.querySelectorAll('.btn9')[i].remove();
                  }
                }
                tagElement.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropMenuButton.style.border = '1px solid #bcbcbc';
                  dropMenuButton.style.background = '#fff';
                  buttonInnerText.style.color = '#bcbcbc';
                  container.classList.remove('active');
                  dropDownMenu.classList.remove('active');
                  setTimeout(() => searchInput.blur(), 100);
                  searchInput.value = '';
                  buttonInnerText.innerText = 'Part Number';
                  tagElement.remove();
                });
              }
            });
          });
        }
        // **********
        dropMenuButton.style.border = '1px solid #bcbcbc';
        dropMenuButton.style.background = '#fff';
        buttonInnerText.style.color = '#bcbcbc';
        setTimeout(() => searchInput.focus(), 100);
        container.classList.remove('active');
        if (!dropDownMenu.classList.contains('active')) {
          dropDownMenu.classList.add('active');
        } else {
          dropDownMenu.classList.remove('active');
          setTimeout(() => searchInput.blur(), 100);
          searchInput.value = '';
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            if (!item.contains(e.target) && !container.classList.contains('active') && dropMenuButton.contains(e.target) && !dropDownMenu.classList.contains('active') && buttonInnerText.innerText === item.innerText) {
              dropMenuButton.style.border = '1px solid #fd8223';
              dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
              buttonInnerText.style.color = '#fff';
              container.classList.add('active');
            }
            else {
              item.addEventListener('click', () => {
                if (item !== null) {
                  buttonInnerText.innerText = item.innerText;
                  dropDownMenu.classList.remove('active');

                  dropMenuButton.style.border = '1px solid #fd8223';
                  dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                  buttonInnerText.style.color = '#fff';

                  container.classList.add('active');
                }
              });
            }
          });
        }
      });
      // клики по пунктам
      dropDownMenuList.forEach(item => {
        item.addEventListener('click', () => {
          if (item !== null) {
            buttonInnerText.innerText = item.innerText;
            dropDownMenu.classList.remove('active');

            dropMenuButton.style.border = '1px solid #fd8223';
            dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
            buttonInnerText.style.color = '#fff';

            container.classList.add('active');
          }
        });
      });
    });
  }
  // закрытие меню при клике на свободную область
  function closeSearchFilter() {
    document.addEventListener('click', (e) => {
      const tagItems = document.querySelectorAll('.header__search-select-btn');
      if (!searchBg.contains(e.target) && !headerSearch.contains(e.target) && !tagContainer.contains(e.target)) {
        for (let i = 0; i < tagItems.length; i++) {
          tagItems[i].remove();
        }
        dropDownMenuSearchContainer.forEach(container => {
          const dropMenuButton = container.querySelector('.search-bg__select-btn'),
            dropDownMenu = container.querySelector('.search-bg__select-dropdown'),
            buttonInnerText = container.querySelector('.search-bg__span'),
            searchInput = container.querySelector('.search-bg__select-dropdown-search'),
            dropDownMenuListContainer = container.querySelector('.search-bg__select-dropdown-list');
          dropDownMenu.classList.remove('active');
          searchInput.value = '';
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          dropDownMenuList.forEach(item => {
            item.addEventListener('click', () => {
              if (item !== null) {
                buttonInnerText.innerText = item.innerText;
                dropDownMenu.classList.remove('active');

                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';

                container.classList.add('active');
              }
            });
          });
          searchBg.classList.add('remove');
          searchBg.classList.remove('active');
          dropMenuButton.style.border = '1px solid #bcbcbc';
          dropMenuButton.style.background = '#fff';
          buttonInnerText.style.color = '#bcbcbc';
          container.classList.remove('active');
          // замена внутреннего текста на дефолтный
          document.querySelector('#BrandOfVehicle .search-bg__span').innerText = 'Марка';
          document.querySelector('#ModelName .search-bg__span').innerText = 'Модель';
          document.querySelector('#Modification .search-bg__span').innerText = 'Модификации';
          document.querySelector('#BodyVehicle .search-bg__span').innerText = 'Кузов';
          document.querySelector('#YearStart .search-bg__span').innerText = 'Год с';
          document.querySelector('#YearEnd .search-bg__span').innerText = 'Год до';
          document.querySelector('#Engine .search-bg__span').innerText = 'Двигатель';
          document.querySelector('#Transmission .search-bg__span').innerText = 'Трансмиссия';
          document.querySelector('#PartNumber .search-bg__span').innerText = 'Part Number';
        });
      }
      // место, где происходит баг
      if (searchBg.contains(e.target)) {
        dropDownMenuSearchContainer.forEach(container => {
          const dropMenuButton = container.querySelector('.search-bg__select-btn'),
            dropDownMenu = container.querySelector('.search-bg__select-dropdown'),
            buttonInnerText = container.querySelector('.search-bg__span'),
            searchInput = container.querySelector('.search-bg__select-dropdown-search'),
            dropDownMenuListContainer = container.querySelector('.search-bg__select-dropdown-list');
          const dropDownMenuList = dropDownMenuListContainer.querySelectorAll('li');
          if (!dropMenuButton.contains(e.target) && !searchInput.contains(e.target) && !dropDownMenu.contains(e.target)) {
            dropDownMenu.classList.remove('active');
            searchInput.value = '';
            dropDownMenuList.forEach(item => {
              if (!item.contains(e.target) && !container.classList.contains('active') && !dropMenuButton.contains(e.target) && !dropDownMenu.classList.contains('active') && buttonInnerText.innerText === item.innerText && !dropDownMenu.contains(e.target)) {
                dropMenuButton.style.border = '1px solid #fd8223';
                dropMenuButton.style.background = 'rgba(253, 130, 35, 0.5)';
                buttonInnerText.style.color = '#fff';
                container.classList.add('active');
              }
            })
          }
        });
      }
    })
  }
}
searchFilter();