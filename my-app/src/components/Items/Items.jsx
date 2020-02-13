import React from 'react';
import preloader from '../../img/preloader.svg';

const Items = (props) => {
    
    
    if(props.items.length === 0 && !props.isFetching) {
        return <div className="d-flex justify-content-center mt-5">ЗДЕСЬ БУДУТ РЕЗУЛЬТАТЫ ПОИСКА</div>
    }
    else if(props.isFetching) {
        return <div className="d-flex justify-content-center mt-5">
                    <img src={preloader} alt='preloader'/>
                </div>
    }
    else {
        return (
            <div className="mt-5">
            <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th >
                                Дата
                            </th>
                            <th scope="col" >
                                Отель
                            </th>
                            <th scope="col" >
                                Номер
                            </th>
                            <th scope="col" >
                                Питание
                            </th>
                            <th scope="col">
                                Стоимость
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.items.map((e, i) => <tr key={i}>
                            <td>{e.tour.date}</td>
                            <td>{e.hotels[0].name}</td>
                            <td>{e.hotels[0].room.name}</td>
                            <td>{e.hotels[0].mealType.name}</td>
                            <td>{e.price.value} {e.price.currencyCode}</td>
                        </tr>)}
                    </tbody>
            </table>
        </div>
        )
    }
    
}

export default Items;