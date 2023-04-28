import { Link, useNavigate } from 'react-router-dom';
import "../css/StudyPage.css";

const Content = () => {
    return ( 
        <section className="group-section">
            <div class="search-bar">
                <input type="text" placeholder="Search..."></input>
                <button class="create-group-btn">Create Group</button>
            </div>

            <div class="tile-container">
                <div class="tile">
                <div class="tile-header">
                    <div id="group-name">Group Name</div>
                    <div class="header-details">
                        <p id="group-course">Course: Course Name</p>
                        <p id="group-date">Date: MM/DD/YYYY</p>
                        <p id="group-time">Time: HH:MM</p>
                    </div>
                </div>
                <div class="tile-content">
                    <div class="objective">
                        <p>Objective:</p>
                        <p id="group-objective">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ex et mauris finibus, ac blandit orci rutrum.</p>
                    </div>
                    <div class="members">
                        <p>Members:</p>
                        <ul>
                        <li>Member 1</li>
                        <li>Member 2</li>
                        <li>Member 3</li>
                        </ul>
                    </div>
                </div>
                <div class="tile-footer">
                    <div id="group-rating">
                        <span>Rating:</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <div>
                        <button class="join-btn">Join Group</button>
                        <button class="review-btn">Leave Review</button>
                    </div>
                </div>
                </div>

                <div class="tile">
                    <div class="tile-header">
                    <div id="group-name">Group Name</div>
                    <div class="header-details">
                        <p id="group-course">Course: Course Name</p>
                        <p id="group-date">Date: MM/DD/YYYY</p>
                        <p id="group-time">Time: HH:MM</p>
                    </div>
                    </div>
                    <div class="tile-content">
                    <div class="objective">
                        <p>Objective:</p>
                        <p id="group-objective">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra ex et mauris finibus, ac blandit orci rutrum.</p>
                    </div>
                    <div class="members">
                        <p>Members:</p>
                        <ul>
                            <li>Member 1</li>
                            <li>Member 2</li>
                            <li>Member 3</li>
                        </ul>
                    </div>
                    </div>
                    <div class="tile-footer">
                    <div id="group-rating">
                        <span>Rating:</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star active">&#9733;</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <div>
                        <button class="join-btn">Join Group</button>
                        <button class="review-btn">Leave Review</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
            </div>
        </section>
     );
}
 
export default Content;