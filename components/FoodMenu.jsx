// components/FoodMenu.js
import React from 'react';
import { Container, Grid, Col } from '@mantine/core';
import { UilPizzaSlice, UilCup } from '@iconscout/react-unicons';
import css from '../styles/FoodMenu.module.css';

const FoodMenu = () => {
  return (
    <Container>
      <div className={css.menuContainer}>
        <Grid>
          {/* Section 1 */}
          <Col span={6}>
            <div className={css.menuSection}>
              <div className={css.iconContainer}>
                <UilPizzaSlice size="2em" color="#4CAF50" />
              </div>
              <div className={css.content}>
                <h2 className={css.title}>Special Pizzas</h2>
                <p className={css.description}>Discover our exquisite selection of special pizzas, crafted with the finest ingredients.</p>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={css.menuSection}>
              <div className={css.iconContainer}>
                <UilCup size="2em" color="#4CAF50" />
              </div>
              <div className={css.content}>
                <h2 className={css.title}>Beverages</h2>
                <p className={css.description}>Quench your thirst with our refreshing beverages, ranging from unique blends to classic favorites.</p>
              </div>
            </div>
          </Col>

          {/* Add similar sections for Section 2 and Section 3 */}
        </Grid>
      </div>
    </Container>
  );
};

export default FoodMenu;
