
import Worker from "./worker/worker"
export default function Workers(){
    return(
        <section className="workers_cont d-flex align-items-center justify-content-center row-cols-2">
            <Worker className="col" name="استاد محمد جهانبخش" img="./image/user admin.png" task="مدیر مجموعه و مکانیک"/>
        </section>
    )
}