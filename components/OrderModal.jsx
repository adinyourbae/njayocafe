import { useState } from 'react';
import { Modal, useMantineTheme } from '@mantine/core'
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';
import { createOrder } from '../lib/orderHandler';
import { useRouter } from 'next/router';
import css from '../styles/OrderModal.module.css'
export default function OrderModal({ opened, setOpened, PaymentMethod }) {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({});

    const handleInput = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const resetCart = useStore((state) => state.resetCart);
    const total = typeof window !== 'undefined' ? parseFloat(localStorage.getItem('total')) || 0 : 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await createOrder({ ...FormData, total, PaymentMethod});
        toast.success('Order Placed');
        resetCart();
        typeof window !== 'undefined' && localStorage.setItem('order', id);
        router.push(`/order/${id}`);
    };

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            {/* Modal content */}
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <input onChange = {handleInput} type="text" name="name" required placeholder="Name" />
                <input onChange = {handleInput} type="text" name="phone" required placeholder="Phone Number" />
                <textarea onChange = {handleInput} name="address" rows={3} placeholder="Address"></textarea>

                <span>
                    You Will Pay <span>Rp {total}</span> on Delivery
                </span>


                <button type="submit" className="btn">Place Order</button>
            </form>
            <Toaster/>
        </Modal>
    );
}