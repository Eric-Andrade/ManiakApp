import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {ETASimpleText, ETALoader} from '@etaui';
import {connect} from 'react-redux';
import {GET_DATA_REQUEST} from '@redux/photos/actions';
import HomeItemComponent from './item';

const Root = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`;
const PhotoList = styled.FlatList``;
const EmptyListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: transparent;
`;

const mapStateToProps = (state, props) => {
  const {data} = state.photos;
  return {data};
};

const mapDispatchProps = (dispatch, props) => ({
  getDataRequest: () => {
    dispatch({
      type: GET_DATA_REQUEST,
      payload: {},
    });
  },
});

const HomeComponent = ({getDataRequest, data}) => {
  const ref = useRef(null);
  const [items, setitems ] = useState(null)

  useEffect(() => {
    getDataRequest();
    if (data.length > 0) {
      setTimeout(() => {
        setitems(data)
      }, 1000)
    }
  }, [getDataRequest]);

  return (
    <Root>
      {items !== null ? (
        <PhotoList
          ref={ref}
          contentContainerStyle={{
            // flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginHorizontal: 10,
          }}
          data={items}
          keyExtractor={(item, index) => index.toString()}
          horizontal={!true}
          initialNumToRender={15}
          showsVerticalScrollIndicator={false}
          updateCellsBatchingPeriod={3000}
          ListEmptyComponent={() => (
            <EmptyListContainer>
              <ETASimpleText
                size={14}
                weight={Platform.OS === 'ios' ? '400' : '300'}
                color='#fff'
                align='left'>
                No photos yet
              </ETASimpleText>
            </EmptyListContainer>
          )}
          renderItem={({item, i}) => <HomeItemComponent key={i} {...item} />}
        />
      ) : (
        <ETALoader color='#333' size={9} />
      )}
    </Root>
  );
};

const HomeComponentConnect = connect(
  mapStateToProps,
  mapDispatchProps,
)(HomeComponent);

export default HomeComponentConnect;