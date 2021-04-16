import { FC } from "react"
import "./FAQs.scss"

/**
 * Frequently Asked Questions
 * Used By: Routes
 * Purpose: Displays the FAQs
 */

const FAQs: FC = () => {
  return (
    <div className="faqs">
      <h3>Frequently Asked Questions:</h3>
      <section>
        <div>
          <strong>Question:</strong> What tech was used to build this?
        </div>
        <div>
          <strong>Answer:</strong> React with TypeScript, react-router and more.
          Check package.json under dependencies full list.
        </div>
      </section>
    </div>
  )
}

export default FAQs
