import React, { Component } from 'react';
import Banner from './Banner';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div >
                <Header />
                <Body>
                    <Banner />
                    <section class="pt-3">
                        <div class="container px-lg-5">
                            <div class="row gx-lg-5">
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                                <Item />
                            </div>
                        </div>
                    </section>
                </Body>
                <Footer />
            </div>
        );
    }
}
