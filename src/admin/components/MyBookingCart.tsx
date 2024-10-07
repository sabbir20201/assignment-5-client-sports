

const MyBookingCart = ({item}) => {
    const {startTime, endTime, data, payableAmount, description} = item
    const {name} = item.facility
console.log(item, 'from my cart');
console.log(name);


    return (
        <div>
              <div>
            
        </div>
        </div>
    );
};

export default MyBookingCart;