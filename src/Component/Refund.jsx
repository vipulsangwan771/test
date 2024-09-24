import React from 'react'
import Navbar from './Navbar'
import './Refund.css';
import Footer from './Footer';
const Refund = () => {
    return (
        <>
            <Navbar />

            <section style={{ paddingTop: '100px' }}>
                <div className='refdev'>
                    <a href="#" className='nmensaasho'>home/</a>
                    <a href="#" className='undlinsho'>returns</a>

                </div>
            </section>
            <section style={{ padding: '0px 15px ' }}>
                <div className='refmaindev'>
                    <h2>Refund Policy</h2>
                    <h6><strong> returns</strong></h6>
                    <h3>Return of products will not be possible for orders where the value of the products purchased is below the threshold
                        set by the Department for Business and Trade for online purchases. This policy exists as baby formula and baby food
                        returns must be destroyed in line with Quality standards at the cost of Kendal Nutricare, resulting in significant
                        food wastage.</h3>
                    <h4>Our policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately we can’t offer you a refund
                        or exchange.</h4>
                    <h4>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in
                        the original packaging, unopened and in a good condition. To complete your return, we require a receipt or proof of
                        purchase in addition to the returns slip inside your parcel. </h4>
                    <h4>Your rights to return goods are protected by the UK Trading Standards.</h4>

                    <h1><strong> refunds (if applicable)</strong></h1>

                    <h4>Once your return is received and inspected, we will send you an email to notify you that we have received your returned
                        item. We will also notify you of the approval or rejection of your refund.</h4>
                    <h4>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or
                        original method of payment, within a certain amount of days.</h4>

                    <h1><strong>late or missing refunds (if applicable)</strong></h1>

                    <h4>If you haven’t received a refund yet, first check your bank account again, then contact your credit card company. It may take some time before
                        your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted.
                        If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:enquiries@kendamil.com">enquiries@kendamil.com</a> </h4>

                    <h1><strong>exchanges</strong></h1>

                    <h4>We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at
                        <a href="mailto:enquiries@kendamil.com"> enquiries@kendamil.com</a>  and send your item to:</h4>

                    <h4>Kendal Nutricare Limited <br /> Mint Bridge Road <br />Kendal <br />Cumbria <br />  LA9 6NL </h4>
                    <h1><strong>sending returns</strong></h1>

                    <h4> To return your product, you should mail your product to: </h4>
                    <h4>Kendal Nutricare Limited <br /> Mint Bridge Road <br />Kendal <br />Cumbria <br />  LA9 6NL </h4>
                    <h4>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable</h4>
                    <h4>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</h4>
                    <h4>You should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</h4>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Refund
