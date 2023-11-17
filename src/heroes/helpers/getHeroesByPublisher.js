
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ('DC Comics','Marvel Comics');
    const valid = validPublishers.includes(validPublishers);
    if (!valid) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher );

}
