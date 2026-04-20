'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import styles from './Pricing.module.css';
import { Check, ShieldCheck, Zap, Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Star': return <Star size={32} />;
    case 'Zap': return <Zap size={32} />;
    case 'ShieldCheck': return <ShieldCheck size={32} />;
    default: return <Star size={32} />;
  }
};

const PricingPage = () => {
  const [plans, setPlans] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPrices = async () => {
      const { data, error } = await supabase
        .from('prices')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (!error && data) {
        setPlans(data);
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading prices...</div>;
  }
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Simple, Transparent Pricing" 
          subtitle="Investment in Your Game" 
        />
        
        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.iconBox}>{getIcon(plan.icon)}</div>
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.description}>{plan.description}</p>
              <div className={styles.priceContainer}>
                <span className={styles.currency}>KES</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.unit}>{plan.unit}</span>
              </div>
              <ul className={styles.features}>
                {Array.isArray(plan.features) ? plan.features.map((feature: string, j: number) => (
                  <li key={j}><Check size={18} className={styles.check} /> {feature}</li>
                )) : null}
              </ul>
              <Link href="/book/trial-lesson" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}>
                Book First Session
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.paymentInfo}>
          <h3>Flexible Payment Methods</h3>
          <p>We accept <strong>M-Pesa</strong>, Cash, and Bank Transfers. Payment is required before the start of each session or package.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
