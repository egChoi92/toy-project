import CardItem from '@/app/ui/CardItem';

export default function CardList() {
    return (
        <ul className="grid grid-cols-3 gap-10 max-w-238.5 m-auto my-12">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </ul>
    );
}
