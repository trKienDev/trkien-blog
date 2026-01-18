import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import calloutCss from './callout.module.css';
import { borel } from '@/app/(public)/font';

type CalloutProps = {
      children: React.ReactNode
}

export default function Callout({ children }: CalloutProps) {
      return (
            <div className={ calloutCss.callout } >
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <span className={ borel.className }>
                        {children}
                  </span>
                  <FontAwesomeIcon icon={faQuoteRight} />
            </div>
      )
}