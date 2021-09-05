import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'; 

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Renavue</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,415</span>
                     <span className="fearuredMoneyRate">-11,45<ArrowDownward/></span>
                 </div>
                 <span className="featuredSub">
                     Compared to last mounth
                 </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,415</span>
                     <span className="fearuredMoneyRate">-1,45<ArrowDownward/></span>
                 </div>
                 <span className="featuredSub">
                     Compared to last mounth
                 </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                 <div className="featuredMoneyContainer">
                     <span className="featuredMoney">$2,415</span>
                     <span className="fearuredMoneyRate">+5,45<ArrowUpward/></span>
                 </div>
                 <span className="featuredSub">
                     Compared to last mounth
                 </span>
            </div>
        </div>
    )
}
