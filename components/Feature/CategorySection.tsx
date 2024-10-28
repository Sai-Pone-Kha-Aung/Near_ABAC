import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { sheetsData } from '@/types/types';
import { Link } from 'next-view-transitions';
import Card from '@/components/Card/Card';

interface CategorySectionProps {
    category: string;
    items: sheetsData[];
    router: ReturnType<typeof useRouter>;
}

const CategorySection = ({ category, items, router }: CategorySectionProps) => (
    <div className='bg-background/50 backdrop-blur-md rounded-lg shadow-lg' data-testid="feature-page">
        <div className='flex justify-between pl-6 pt-6'>
            <h2
                className='text-2xl font-bold mb-2 cursor-pointer hover:text-3xl transition-all duration-300 ease-in-out'
                data-testid="feature-title"
                onClick={() => router.push(`/category/${category}`)}
            >
                {category}
            </h2>
            <Button className='flex justify-center items-center rounded-sm mr-4' variant={'outline'} data-testid="feature-view-all">
                <Link rel='noopener noreferrer' href={`/category/${category}`}>View All</Link>
            </Button>
        </div>
        <div className='flex flex-row gap-4 m-4 overflow-x-auto'>
            {items.slice(0, 4).map((item, index) => (
                <div key={index} className='flex-shrink-0 pb-4' data-testid="feature-card">
                    <Card {...item} />
                </div>
            ))}
        </div>
    </div>
);

export default CategorySection;