import { GetStaticProps } from "next";
import Layout from "../components/layout";
import styles from "./store.module.css";

export default function Store({ posts, preview }) {
  //TODO pass preview prop to Layout
  return (
    <Layout preview={preview}>
      <div className={styles.content}>
        <h2 className="text-2xl mb-8">Coming Soon!</h2>
        <p className="text-xl">In the meantime, you can order a new copy of the journal by sending
        cash or a check for $10*, made out to UC Regents, to the following address:</p>

        <p className="pl-4 text-xl">
          Faultline<br />
          UCI Department of English<br />
          435 Humanities Instructional Building<br />
          Irvine, CA 92697-2650
        </p>
        <p className="text-xl">*Please note that at this time, international orders will be required to
        provide shipping costs as well. Please contact the editors at
        ucifaultline@gmail.com if you are requesting shipping to a location outside
        the United States and would like to purchase an issue.</p>
      </div>
    </Layout>
  )
}
