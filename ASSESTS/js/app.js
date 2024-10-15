let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
    const offset = -currentIndex * 100; // Calculate offset for the slide
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Apply offset
}
// Show first slide
showNextSlide();
// Change slide every second (7000 milliseconds)
setInterval(showNextSlide, 7000);
function openWhatsApp() {
    window.open("https://wa.me/923217884613", "_blank");
}
function openInfoPageOne() {
    const infoContent = `
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skardu Valley 6 Days Tour</title>
</head>
<body>
    <h1>🎊🎊 Summer Special 🎊🎊</h1>
    <h2>Skardu Valley...6 Days Tour</h2>
    <h3>------Travel With Us.</h3>
    <p><strong>Departure:</strong> 2024 Every Monday night</p>
    
    <h3>Package</h3>
    <p>25,000/- PKR Per head<br>
    For Couples 60,000/- PKR</p>
    
    <h3>Places to Visit:</h3>
    <h4>Tour Includes:</h4>
    <ul>
        <li>Hazara Expressway</li>
        <li>Abbotabad tunnels</li>
        <li>Balakot</li>
        <li>Kiwai</li>
        <li>Naran</li>
        <li>Kaghan</li>
        <li>Saif ul Malook</li>
        <li>Beser</li>
        <li>Lulusar Lake</li>
        <li>Babusar Top</li>
        <li>Chilas</li>
        <li>Mountain Junction</li>
        <li>Nanga Parbat View Point</li>
        <li>Skardu Road</li>
        <li>Dambu Das</li>
        <li>Astak Nala</li>
        <li>Indus River</li>
        <li>Majestic Karakoram Highway</li>
        <li>Skardu Valley</li>
        <li>Shangrila Resort</li>
        <li>Lower Kachura Lake</li>
        <li>Upper Kachura Lake</li>
        <li>Sadpara Lake</li>
        <li>Mantoka Waterfall</li>
        <li>Kharmang Valley</li>
        <li>Shigar Valley</li>
        <li>Shigar Fort</li>
        <li>Sarfranga Cold Desert</li>
        <li>Katpana Lake</li>
        <li>Katpana Cold Desert</li>
        <li>Skardu City</li>
        <li>Deosai Plains</li>
        <li>Deosai National Park</li>
        <li>Bara Pani</li>
        <li>Kala Pani</li>
    </ul>

    <h3>Trip Plan:</h3>
    <p><strong>Day 0:</strong> 09:00 pm Received participants From Lahore. Short Stop at Bhera Rest Area. Traveling to Islamabad.</p>
    
    <p><strong>Day 1:</strong> 
        <ul>
            <li>2:30 am Reach Rawalpindi pick Participants from 26 no Daewoo Terminal</li>
            <li>3:30 Traveling to Naran or Burwai via Hazara Motorway and Hazara Expressway</li>
            <li>7:30 AM Breakfast at Balakot</li>
            <li>Visit Kiwai Naran, Lulusar Lake, Babusar Top</li>
            <li>9:00 AM traveling towards Naran or Burwai for dinner and night stay</li>
        </ul>
    </p>
    
    <p><strong>Day 2:</strong> 
        <ul>
            <li>8:00 am Breakfast</li>
            <li>9:00 am Traveling to Skardu Valley, visit Nanga Parbat View Point</li>
            <li>Traveling via Skardu Road and visit Upper Kachura Lake and Shangrila Resort</li>
            <li>Stay night in Skardu</li>
        </ul>
    </p>

    <p><strong>Day 3:</strong> 
        <ul>
            <li>Breakfast</li>
            <li>Traveling to Manthokha Waterfall, Kharmang Valley</li>
            <li>Visit Shigar Valley, Shigar Fort</li>
            <li>Stay night in Skardu</li>
        </ul>
    </p>

    <p><strong>Day 4:</strong> 
        <ul>
            <li>Early morning traveling towards Deosai, jeep safari all day in Deosai National Park</li>
            <li>Visit Sadpara Lake, Bara Pani, Kala Pani</li>
            <li>Return till evening</li>
        </ul>
    </p>

    <p><strong>Day 5:</strong> 
        <ul>
            <li>Visit Katpana Lake and Desert, travel back to Chilas</li>
            <li>Short stop at Astak Nala, Indus River, Roundu, Haramosh</li>
            <li>Stay night in Naran, final night of tour</li>
        </ul>
    </p>

    <p><strong>Day 6:</strong> 
        <ul>
            <li>Visit Saif ul Malook and Naran sides</li>
            <li>Early Morning Depart for Islamabad, reach Lahore by 7:00 pm</li>
        </ul>
    </p>

    <h3>Services Included:</h3>
    <ul>
        <li>Taxes</li>
        <li>Saloon Coaster</li>
        <li>Chalans</li>
        <li>Toll Taxes</li>
        <li>Fuel Expenses</li>
        <li>Driver Expenses</li>
        <li>Tour Guide</li>
        <li>5 Dinners, 6 Breakfasts</li>
        <li>BBQ</li>
        <li>Bonfire</li>
        <li>Photography</li>
    </ul>

    <h3>Services Not Included:</h3>
    <ul>
        <li>Entry Tickets</li>
        <li>Tea, Mineral Water, and Cold Drinks Expenses</li>
        <li>Extra Expenses due to Acts of Nature and Political Reasons</li>
        <li>Personal Insurances</li>
        <li>Tickets for Forts, Boating, Rafting, and Parks</li>
        <li>Jeep Charges</li>
        <li>Vehicle Use in Case of Road Blockage</li>
        <li>AC or Heating Charges if Needed</li>
    </ul>

    <h3>Panel Hotels:</h3>
    <ul>
        <li>Trout Villa Hotel Skardu</li>
        <li>Ghashabrum Skardu</li>
        <li>Panorama Hotel Chilas</li>
        <li>Trangfa Lodges</li>
        <li>Naran Silver Oaks Hotel or Mia Amore Hotel</li>
    </ul>

    <h3>🏦 Registration Procedure:</h3>
    <p>💰 Advance Deposit Rs.15,000. For Couples 25,000. Deposit through bank counter/ Account to Account transfer/ Transfer through ATM of any bank in the following account:</p>
    <ul>
        <li>Muhammad Arshian: 0315-0109757311 (Meezan Bank)</li>
        <li>Muhammad Arshian: 03407656613 (Nayapay Bank)</li>
        <li>Muhammad Arshian: 03217884613 (Sadapay)</li>
    </ul>

    <h3>📱 For any details or queries:</h3>
    <p>Mob: 03217884613<br>
    Call, SMS/ WhatsApp: 03217884613</p>

    <h3>#Booking Procedure:</h3>
    <p>a: Send payment through any of the above-mentioned services.</p>
    <p>b: SMS below details on the following #03217884613</p>
    <ul>
        <li>Names</li>
        <li>Amount Paid</li>
        <li>Date Of Payment</li>
        <li>Trip Name</li>
        <li>Joining From</li>
        <li>Total Seats</li>
    </ul>

    <h3>👕 Items to Bring With You:</h3>
    <ul>
        <li>CNIC (Compulsory)</li>
        <li>Personal Belongings</li>
        <li>Normal Clothes</li>
        <li>Joggers</li>
        <li>Jacket / Shawl</li>
    </ul>

    <h3>✔ Terms & Conditions:</h3>
    <p>[Insert your terms and conditions here]</p>
</body>
</html> `;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(infoContent);
    newWindow.document.close();}
    function openInfoPageTwo() {
    const infoContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3 Days Group Tour to Neelam Valley Azad Kashmir</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #4CAF50;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        .note {
            color: red;
        }
    </style>
</head>
<body>

<h1>3 Days Group Tour to Neelam Valley Azad Kashmir</h1>
<p>(Neelum Kashmir is a Beautiful Valley of Pakistan, known as the paradise on earth. Join us with your Friends & Families and Make your Holidays Memorable!)</p>

<h2>🗓 Dates</h2>
<p>✪ Trip Departure: Every Thursday Night</p>

<h2>💰 Trip Cost</h2>
<ul>
    <li>✪ Package from Lahore, Islamabad, Faisalabad: Rs 13,500 Per head</li>
    <li>✪ If a couple needs a separate room: Rs 5000 additional (Total: Rs 32,000)</li>
    <li>✪ Karachi participants can join from Lahore or Islamabad.</li>
</ul>

<h2>📍 Points to be Visited</h2>
<ul>
    <li>#Kohalla_Bridge</li>
    <li>#Muzafrabad</li>
    <li>#Neelum_Jhelum_project</li>
    <li>#Neelum_River</li>
    <li>#Dhani_Waterfall</li>
    <li>#Kutton_Waterfall</li>
    <li>#Athmuqam</li>
    <li>#Keran</li>
    <li>#LOC (Line of control)</li>
    <li>#Sharda_City</li>
    <li>#Kel_City</li>
    <li>#Arangkel</li>
    <li>#Upper_Neelam</li>
</ul>
<p class="note">Note: Arangkel will be visited according to weather & road conditions.</p>

<h2>🗺 Itinerary</h2>

<h3>Day 0:</h3>
<ul>
    <li>Pickup point & timings for Lahore: 09:00 PM Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE)</li>
    <li>Pickup point & timings for Islamabad: 03:00 AM from Islamabad (Daewoo Terminal, Near EME College)</li>
    <li>Pickup point & timings for Faisalabad: 09:00 PM (Daewoo Terminal Allied Mor)</li>
</ul>

<h3>Day 1:</h3>
<ul>
    <li>🍳🍞 Short stay for breakfast at Muzafrabad</li>
    <li>🏖 Visit Dhani Waterfall</li>
    <li>🏖 Visit Kutton Waterfall</li>
    <li>🚙 Continue Journey toward Sharda</li>
    <li>⛰ Visit Sharda</li>
    <li>🏕 Visit Sharda University</li>
    <li>🍲🍱 Dinner & Night stay in Sharda (Hotel: Sharda Resort Continental or Neelam Star or Similar)</li>
</ul>

<h3>Day 2:</h3>
<ul>
    <li>🍛🥪 Breakfast call early Morning</li>
    <li>🚙 Departure for Keran</li>
    <li>🏔 Visit Keran</li>
    <li>🚙 Journey towards Upper Neelum</li>
    <li>🌄 Visit majestic views of Upper Neelum & enjoy snowfall</li>
    <li>🚙 Travelling to Kel via Jeeps</li>
    <li>🚙 Transfer to Cable Car from Kel to Arang Kel</li>
    <li>🗻 Explore magnificent Arang Kel</li>
    <li>🚙 Moving Back to Sharda</li>
    <li>⛪ Check in Hotel</li>
    <li>🍲🍱 Bonfire + BBQ at Night (Hotel: Shangrila Resort Continental Kel or Neelam Star or Similar)</li>
</ul>

<h3>Day 3:</h3>
<ul>
    <li>🚙 Departure for Lahore</li>
    <li>🏔 Visit LOC (Line of Control) Pak-India Border</li>
    <li>🏖 Visit Kundan Shahi Waterfall</li>
    <li>🚙 Continue drive toward Lahore</li>
    <li>🚌 Short stay for lunch at Muzafrabad (Lunch not included in Package)</li>
    <li>💒 Continue Journey toward Lahore/Islamabad</li>
</ul>
<p class="note">Note: Timings could be changed according to circumstances.</p>

<h2>✅ Services Included</h2>
<ul>
    <li>☛ Luxury Transport (Grand Saloon or Coaster)</li>
    <li>☛ All Road Toll Taxes</li>
    <li>☛ Professional Guide</li>
    <li>☛ 2 Dinners / 3 Breakfasts</li>
    <li>☛ Bonfire / BBQ</li>
    <li>☛ 2 Nights Hotel Accommodation</li>
    <li>☛ Music System</li>
    <li>☛ Basic First Aid</li>
</ul>

<h2>🚫 Services Not Included</h2>
<ul>
    <li>✪ Jeep Charges / Any Fort Tickets / Boating Tickets</li>
    <li>✪ Jeep Charges from Sharda to Kel</li>
    <li>✪ Dolly Charges from Kel to Arang Kel</li>
    <li>✪ Laundry, Phone Calls & Other Personal Expenses</li>
    <li>✪ Extra expense due to land sliding, road blocks, bad weather, and other political reasons</li>
    <li>✪ Personal insurance</li>
    <li>✪ Rescue, Helicopter coverage</li>
    <li>✪ Tips for Guide, porter & cook</li>
    <li>✪ Serious medical condition is on your own as the company will provide basic first aid only</li>
    <li>✪ Anything not mentioned here</li>
</ul>

<h2>🏦 Registration Procedure</h2>
<ul>
    <li>💰 Advance Deposit Rs 8,000</li>
    <li>For Couples: Rs 20,000 Deposit through bank counter / Account to Account transfer / Transfer through ATM of any bank</li>
</ul>

<h2>❎ Cancellation Policy</h2>
<ul>
    <li>a. 72 HRS or less: 100% cancellation charges of the advanced amount apply.</li>
    <li>b. 3 Days or more: 75% cancellation charges of the advanced amount apply.</li>
    <li>c. 15 days or more: 50% cancellation charges.</li>
    <li>d. No amount will be refunded if any person leaves the trip at any stage due to any reason.</li>
</ul>

<h2>⚠️ Must Bring</h2>
<ul>
    <li>☑ A Water Bottle</li>
    <li>☑ Torch</li>
    <li>☑ Joggers</li>
    <li>☑ Extra Clothes</li>
    <li>☑ Jackets</li>
    <li>☑ Upper/Shawl</li>
    <li>☑ Jeans</li>
    <li>☑ Raincoat</li>
    <li>☑ Umbrella</li>
    <li>☑ Hiking Stick</li>
</ul>
<h2>⬇ Terms and Conditions</h2>
<p>✅ Our Terms & Conditions are strictly followed and applied. We encourage you to read and agree with them carefully before booking a trip with us.</p>
<ul>
    <li>1. Members shall not engage in any act reflecting moral or character failing during the activities.</li>
    <li>2. Using drugs or being involved in drug sales or possession is strictly prohibited. Anyone found using any kind of drug will be expelled from the trip immediately and will not be eligible for any refund.</li>
    <li>3. Violent behavior, including altercation, insinuations of indecent kind, verbal and physical abuse, and assault, are strictly prohibited.</li>
    <li>4. All members must give extra care to local environmental issues. Garbage (cans, water bottles, wrappers, etc.) must be disposed of properly without polluting water sources.</li>
    <li>5. The host reserves the right to cancel the trip without prior notice for any reasons deemed appropriate. In such a case, registered participants will receive a full refund.</li>
    <li>6. During the trip, itineraries may be affected by reasons beyond the control of the hosts. Organizers will not be held responsible in such situations.</li>
    <li>7. On steep ascents in mountainous areas, air conditioning in the buses will operate on an on-off basis to prevent overheating.</li>
    <li>8. While every possible care will be taken for the safety of members, unforeseen natural disasters like avalanches or other accidents can occur. The company, group leader, and tour organizers will not be held responsible for any such incidents.</li>
    <li>9. In case of theft, loss, or damage to personal belongings during the trip, organizers will not be held responsible.</li>
    <li>10. On adventure treks of this nature, factors such as weather, local politics, and transport issues may result in changes to the itinerary. If alterations are necessary, the Leader and Guide will decide the best alternatives in the best interest of the group.</li>
    <li>11. Arshyan Travels and Tours is an independent and private organization. We have no links or agreements with any university, tour company, club, or institute.</li>
    <li>12. Organizers reserve the right to assign seats in the Coaster/Hiroof.</li>
    <li>13. Arshyan Travels and Tours reserves the right to use event photos for electronic/digital media.</li>
    <li>14. Smoking in the transport is strictly prohibited.</li>
    <li>15. Arshyan Travels and Tours reserves the right to terminate any participant due to indiscipline.</li>
</ul>

    `;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(infoContent);
    newWindow.document.close();}
    function openInfoPageThree() {
        const infoContent = `
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hunza Valley Tour</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        ul {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Hunza Valley, Gilgit 5 Days Tour</h1>
    <p><strong>Cost:</strong> 24,000 PKR per person</p>
    <p><strong>Departure:</strong> 2024 Every Tuesday and Friday night</p>
    <p><strong>Couple with Separate Room Discounted Offer:</strong> 55,000 PKR</p>
    
    <h2>Places to Visit:</h2>
    <ul>
        <li>Hazara Expressway</li>
        <li>Abbotabad Tunnels</li>
        <li>Hazara Tunnels</li>
        <li>Mansehra</li>
        <li>Balakot</li>
        <li>Kewai Waterfall</li>
        <li>Kagan</li>
        <li>Naran</li>
        <li>Saif ul Malook</li>
        <li>Lulusar Lake</li>
        <li>Besal</li>
        <li>Babusar Top</li>
        <li>Chillas</li>
        <li>Junction Point (Pahari Sililly)</li>
        <li>Nanga Parbat View Point</li>
        <li>Plate Junction</li>
        <li>Old Silk Route</li>
        <li>Gilgit</li>
        <li>Rakaposhi View Point</li>
        <li>Altit Fort</li>
        <li>Baltit Fort</li>
        <li>Kareemabad Bazar</li>
        <li>Attabad Lake</li>
        <li>Hussaini Bridge</li>
        <li>Passu Bridge</li>
        <li>Passu Cones</li>
        <li>Ataabad Tunnels</li>
        <li>Majestic Karakoram Highway</li>
        <li>Deran Peak View</li>
        <li>Royal Garden</li>
        <li>Khunjerab Pass</li>
        <li>Khunjerab National Park</li>
        <li>China Border</li>
        <li>Zero Point</li>
    </ul>

    <h2>Trip Plan:</h2>
    <h3>Day 0</h3>
    <p>09:00 PM - Receive participants from Lahore, short stay at Bhera.</p>

    <h3>Day 1</h3>
    <p>Traveling to Chillas via Babusar. Visit Kewai, Naran, Lulusar Lake, and Besal. Reach Chillas for dinner and night stay.</p>

    <h3>Day 2</h3>
    <p>8:00 AM Breakfast. Travel towards Hunza. Visit Nanga Parbat View Point, Mountain Junction, Rakaposhi View Point, Altit/Baltit Fort, Kareemabad Bazar. Stay the night in Hunza.</p>

    <h3>Day 3</h3>
    <p>Breakfast. Travel towards Ataabad Tunnels, Ataabad Lake, enjoy quality time at Ataabad Lake, visit Hussaini Suspension Bridge/Rainbow Bridge, Passu Glacier, and Passu Cones Point. Reach Gircha, transfer to jeeps, and travel towards the China border, visit Khunjerab National Park, enjoy snow there, and back to hotel for BBQ/Bonfire Musical Night in Hunza.</p>

    <h3>Day 4</h3>
    <p>8:00 AM Breakfast. Visit any missed points. Traveling back to Naran via Babusar. Night stay in Naran.</p>

    <h3>Day 5</h3>
    <p>Breakfast. Visit Saif ul Malook. Traveling back to Islamabad/Lahore via Balakot sightseeing. Reach Islamabad by 9:00 PM and Lahore by 2:00 AM. Tour ends.</p>

    <h2>Services Included:</h2>
    <ul>
        <li>Taxes</li>
        <li>Saloon Coaster/Grand Cabin Up Model Chalans</li>
        <li>Toll Taxes</li>
        <li>Fuel Expenses</li>
        <li>4 Nights Hotel Stay (4-5 Sharing for Couples 2 Sharing)</li>
        <li>Driver Expenses</li>
        <li>Tour Guide</li>
        <li>4 Dinners</li>
        <li>5 Breakfasts</li>
        <li>BBQ Bonfire</li>
        <li>Photography</li>
    </ul>

    <h2>Services Not Included:</h2>
    <ul>
        <li>Entry Tickets</li>
        <li>Tea, Mineral Water, and Cold Drinks Expense</li>
        <li>Extra Expenses Due to Acts of Nature and Political Reasons</li>
        <li>Personal Insurances of Clients</li>
        <li>Heater Charges in Room (if Needed)</li>
        <li>Tickets of Forts, Boating, and Parks Entry</li>
        <li>Jeep Charges</li>
        <li>Vehicle Use in Case of Road Blockage/Any Extra Expenses</li>
    </ul>

    <h3>Note:</h3>
    <p>If Naran Babusar Top Road is closed, we will follow KKH and adjust the points accordingly. You can also book your separate family or friends tour with us. Karachi customers can join us from Islamabad or Lahore, and we will book train/bus tickets for them.</p>

    <h2>Menu:</h2>
    <h3>Breakfast:</h3>
    <p>Egg (Omelette), Paratha, Bread, Tea ☕</p>

    <h3>Dinner:</h3>
    <p>Chicken Karahi / BBQ, Chicken Handi / Chicken Biryani + Raita</p>

    <h2>Pick Up Points:</h2>
    <ul>
        <li>Faisalabad: Daewoo Terminal, near Allied Hospital</li>
        <li>Lahore: Daewoo Terminal, Thokar Niaz Baig</li>
        <li>Islamabad: 26 Number, Daewoo Terminal, Near EME NUST University</li>
    </ul>



<h2>Note:</h2>
    <p>Plan can be changed a little bit during the tour on request of participants for their comfort. Also, due to forced or unexpected circumstances, the itinerary can be altered at any time during the tour.</p>

    <h2>Registration Procedure:</h2>
    <p><strong>Advance Deposit:</strong> Rs. 15,000. For Couples: Rs. 25,000.</p>
    <p>Deposit through bank counter, Account to Account transfer, or Transfer through ATM of any bank in the following account.</p>

    <h2>Contact Information:</h2>
    <p>For any details or queries:</p>
    <p><strong>Mobile:</strong> 03217884613</p>
    <p><strong>Call, SMS/WhatsApp:</strong> 03217884613</p>

    <h2>Booking Procedure:</h2>
    <ol>
        <li>Send payment through any of the above mentioned services to the following details:</li>
        <p><strong>Mobile:</strong> 03217884613</p>
        <li>SMS the following details to 03217884613:</li>
        <ul>
            <li>Names</li>
            <li>Amount Paid</li>
            <li>Date of Payment</li>
            <li>Trip Name</li>
            <li>Joining From</li>
            <li>Total Seats</li>
        </ul>
    </ol>

    <h2>Items to Bring with You:</h2>
    <ul>
        <li>CNIC (Compulsory)</li>
        <li>Personal belongings</li>
        <li>Normal Clothes</li>
        <li>Joggers</li>
        <li>Jacket / Shawl</li>
    </ul>
    
    <h3>Equipment List You Must Carry:</h3>
    <ul>
        <li>Face Mask / Hand Sanitizer / Gloves</li>
        <li>Casual shoes / Trekking shoes / Softy</li>
        <li>Cotton trousers and shirts/T-shirts</li>
        <li>Jackets / Hoodies / Raincoat</li>
        <li>Hat / Sunglasses / Umbrella ☂</li>
    </ul>

    <h2>Terms & Conditions:</h2>
    <p>Our Terms & Conditions are strictly followed and applied. We encourage you to read and agree with them carefully before booking a trip with us.</p>
</body>
</html>`;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(infoContent);
    newWindow.document.close();}    
    function openInfoPageFourth(){
    const infoContent = `
    <h1>Arshyan Travels and Tours</h1>
    <h2>3 Days Trip to Swat, Kalam, and Malam Jabba</h2>
<p><strong>Departure:</strong> Eid 2nd Day</p>
<p><strong>Females | Families | Bachelors | Couples</strong> All Are Invited To Join Us</p>
<p><strong>Queries:</strong> Arshyan Khalid | 0321-7884613</p>

<h3>FAST FACTS</h3>
<ul>
    <li><strong>Trip Duration:</strong> 3 Days 2 Nights</li>
    <li><strong>Package from Islamabad:</strong> Rs. 13,500/- per head</li>
    <li><strong>Package from Lahore:</strong> Rs. 13,500/- per head</li>
    <li><strong>Cost Per Couple:</strong> Rs. 32,000/- (Twin Sharing Room)</li>
    <li><strong>Cost Per Kid:</strong> Rs. 4,500/- (Jumper Seat)</li>
    <li><strong>Kids under age 5:</strong> Free of cost (will be given folding seat if available)</li>
</ul>

<h3>Places to Visit:</h3>
<ul>
    <li>Fizagat</li>
    <li>Malam Jabba</li>
    <li>Bahrain</li>
    <li>Kalam</li>
    <li>Kalam Bazar</li>
    <li>Ushu Forest</li>
    <li>Mahudand Lake (Jeep Charges are not Included)</li>
</ul>

<h3>Itinerary</h3>

<h4>Day 00:</h4>
<ul>
    <li><strong>Lahore:</strong> 09:00 PM - (Thursday Night) Meet up (Thokar Niaz Baig Near new Daewoo Terminal LAHORE)</li>
    <li><strong>Islamabad:</strong> 03:00 AM (Faizabad)</li>
    <li>Departure will be at 10:30 PM (Thursday Night)</li>
</ul>

<h4>Day 01:</h4>
<ul>
    <li>Departure From Islamabad</li>
    <li>Reach Fizagat</li>
    <li>Breakfast at Fizagat</li>
    <li>Visit Malam Jabba</li>
    <li>Enjoy Chair Lift and Zipline (Personal Expenses)</li>
    <li>Dinner and Night Stay at Malam Jabba / Fizagat</li>
</ul>

<h4>Day 02:</h4>
<ul>
    <li>Breakfast at Malam Jabba / Fizagat</li>
    <li>Departure for Kalam</li>
    <li>Transfer into Jeep for Mahudand Lake</li>
    <li>Back to hotel</li>
    <li>Dinner</li>
    <li>Night stay at hotel Kalam</li>
</ul>

<h4>Day 03:</h4>
<ul>
    <li>Breakfast call at 07:00 AM</li>
    <li>Departure for Cake Palace</li>
    <li>Explore Cake Palace</li>
    <li>Departure to Islamabad</li>
    <li>Arrival to ISB: 08:00 PM</li>
    <li>Arrival to Lahore: 11:00 PM</li>
</ul>

<h3>Services Included</h3>
<ul>
    <li>Luxury Air Conditioned Transport (Saloon Coaster if 18-20 Persons) (Grand Cabin if 11-13 Persons)</li>
    <li>2 Dinners / 3 Breakfasts</li>
    <li>Accommodation at Hotels (4/5 person sharing Bed + Mattress)</li>
</ul>

<h3>Services Not Included</h3>
<ul>
    <li>Laundry, Phone Calls & Other Personal Expenses</li>
    <li>Jeep for Mahudand Lake (Average cost Rs. 1200 per head)</li>
    <li>Extra expenses due to land sliding, road blocks, bad weather, and other political reasons</li>
    <li>Personal insurance</li>
    <li>Any type of tickets</li>
    <li>Anything not mentioned in the “Services Included” list</li>
</ul>

<h3>Booking Procedure</h3>
<p>Payment via Cash, EasyPaisa, JazzCash, or online bank transfer. Send half payment of per person’s charges for seat booking.</p>

<h3>Things to Bring</h3>
<ul>
    <li>ID cards and University cards (one without any identity proof will not be allowed to travel)</li>
    <li>Snacks</li>
    <li>Umbrella</li>
    <li>Joggers</li>
    <li>Sunglasses</li>
    <li>Edibles</li>
    <li>Beverages (juices, water)</li>
    <li>Medication if any</li>
</ul>

<h3>Refund Policy</h3>
<ul>
    <li>50% refund of the advance amount if cancellation is at least 10 days before the departure date</li>
    <li>30% refund of the advance amount if cancellation is at least 7 days before the departure date</li>
    <li>0% refund if cancellation is less than 3 days before the departure date</li>
</ul>

<p>~ Thanks for being part of Arshyan Travels and Tours. We provide our customers with a sweet spot of coffee, where value meets quality ~</p>

    `;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(infoContent);
    newWindow.document.close();}
    function openInfoPageFive() {
    const infoContent = `
        <html>
        <head>
            <title>Skardu 8 days</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { font-size: 24px; }
                p { font-size: 16px; }
            </style>
        </head>
        <body>
           <h1>🎊🎊🎊 Summer Special 🎊🎊🎊</h1>
<p>(Cocktail Tour: Three Valleys in One Tour) Skardu Valley, Hunza Valley & Naran Valley... 8 Days Tour</p>
<hr>

<h2>Travel with us</h2>

<h2>🗓 DURATION OF TOUR</h2>
<p>⏰ 8 Days, 7 Nights</p>
<p>⏲ DEPARTURE: Every Friday night at 10:00 PM from Lahore (2024).</p>

<h2>💵 COST PACKAGE</h2>
<p>32,000 PKR Per head (4/5 Sharing Room)</p>
<p>Total: 75,000 PKR for couples with Twin Sharing</p>
<p>(📱 0321-7884613 WhatsApp UAN | Call: 0321-7884613) | For any Query</p>

<h2>#POINTS COVERED</h2>
<ul>
    <li>Hazara Express</li>
    <li>Abbottabad Tunnels</li>
    <li>Manshera</li>
    <li>Balakot</li>
    <li>Kewai Waterfall</li>
    <li>Kaghan</li>
    <li>Naran</li>
    <li>Besar</li>
    <li>Babusar Top</li>
    <li>Chillas</li>
    <li>Nanga Parbat View Point</li>
    <li>3 Junction Mountain</li>
    <li>Plate Junction</li>
    <li>Skardu Road</li>
    <li>Astaknala</li>
    <li>Dambudas</li>
    <li>Upper Kachura Lake</li>
    <li>Lower Kachura Lake</li>
    <li>Shangrila Resort</li>
    <li>Manthoka Waterfall</li>
    <li>Shigar Valley</li>
    <li>Shigar Fort</li>
    <li>Serfrenga Cold Desert</li>
    <li>Deosai Plains</li>
    <li>Sadpara Lake</li>
    <li>Seosar Lake</li>
    <li>Kala Pani</li>
    <li>Bara Pani</li>
    <li>Old Silk Route</li>
    <li>Gilgit</li>
    <li>Rakaposhi View Point</li>
    <li>Altit Fort</li>
    <li>Baltit Fort</li>
    <li>Kareemabad Bazar</li>
    <li>Attabad Lake</li>
    <li>Hussaini Bridge</li>
    <li>Passu Bridge</li>
    <li>Passu Cones</li>
    <li>Passu Glacier</li>
    <li>Majestic KKH</li>
    <li>Deran Peak View</li>
    <li>Royal Garden</li>
    <li>Khunjerab Pass</li>
    <li>Khunjerab National Park</li>
    <li>China Border</li>
    <li>Zero Point</li>
</ul>

<h2>🚎 PICK-UP POINTS</h2>
<p>Travel: Via Motorway/GT Road.</p>
<ul>
    <li>#Lahore: PSO Pump Daewoo Terminal Tokar Niaz Baig.</li>
    <li>#Islamabad: Daewoo Terminal near NUST University, 26 No Stop.</li>
    <li>#Faisalabad: Allied Mor / Al-Fateh Mall Kohinoor.</li>
    <li>#Karachi & Other Cities: Participants join us from Lahore/Islamabad or GT Road/Motorway.</li>
</ul>

<h2>👨‍👧‍👦 CHILDREN POLICY</h2>
<ul>
    <li>Under 3 years: Free of Charge (Lap or on folding seat if available)</li>
    <li>3-8 years: Half Charges (folding seat)</li>
    <li>8 plus years: Full Charges</li>
</ul>

<h2>🚌 SEAT ARRANGEMENT POLICY</h2>
<p>Seats will be allotted before departure by tour management for your convenience and will shuffle during the tour. For any specific seat demand, 1000 PKR/seat/day will be charged.</p>

<h2>❎ CANCELLATION POLICY</h2>
<ul>
    <li>a. 72 HRS or less: 100% cancellation charges of the advanced amount apply.</li>
    <li>b. 3 Days or more: 75% cancellation charges of the advanced amount apply.</li>
    <li>c. 15 days or more: 50% cancellation charges apply.</li>
    <li>d. No amount will be refunded if any person leaves the trip at any stage due to any reason.</li>
</ul>

<h2>📱 CONTACT FOR BOOKING</h2>
<p>(WhatsApp: 03217884613)</p>

<h2># ITINERARY PLAN</h2>
<h3>🗓 DAY 0</h3>
<p>🚐 Departure from Lahore/Faisalabad at 09:30—10:30 PM.</p>
<p>🚐 Travel Via Motorway/GT Road.</p>
<p>🚐 Pick up Islamabad Participants at 02:30 AM.</p>
<p>🚐 Due to Weather Conditions, 2 to 3 hours may be delayed.</p>

<h3>🗓 DAY 1</h3>
<p>Traveling to Chillas via Hazara Expressway and Hazara Tunnels. Breakfast at Balakot, short stay at Kewai, explore Kewai and Naran, visit Lulsar Lake, visit Babusar Top, night stay & dinner in Chillas.</p>

<h3>🗓 DAY 2</h3>
<p>Traveling to Skardu Valley, visit Nanga Parbat View Point, visit junction of mountain ranges traveling via adventurous Skardu Road, visit Shangrila Resort, Upper Kachura Lake, night stay in Skardu Hotel.</p>

<h3>🗓 DAY 3</h3>
<p>Breakfast, 9:00 AM traveling to Manthokha Waterfall, visit mighty beautiful waterfall, back to Shigar Valley, visit cold desert, Shigar Fort, and traveling back to Skardu, stay night in Skardu.</p>

<h3>🗓 DAY 4</h3>
<p>9:00 AM traveling towards Deosai Plains via jeeps, visit Sadpara Lake, visit Deosai Plains, Kala Pani, Bara Pani, beautiful Seosar Lake, and back to hotel till night.</p>

<h3>🗓 DAY 5</h3>
<p>9:00 PM if any point left visit it and traveling towards Hunza, sightseeing Astaknala, Haramosh, Gilgit, Nagar, and till night reach Hunza, stay night in Hunza.</p>

<h3>🗓 DAY 6</h3>
<p>Traveling towards China border, visit Ataabad Lake, Hussaini Bridge, Passu Cones, Passu Glacier, lunch break at Gircha, via Sost Bazar reach China border, explore Khunjerab Pass and back to Hunza, stay night in Hunza.</p>

<h3>🗓 DAY 7</h3>
<p>Visit Altit Fort/Baltit Fort, Kareemabad Bazar and traveling back to Naran, till night reach Naran, stay night in Naran.</p>

<h3>🗓 DAY 8</h3>
<p>Breakfast, visit Saif ul Malook, traveling back to Islamabad/Lahore, move back through motorway/GT Road. Reach safely to home at night.</p>
<p>Note: (02 to 03 hours delay due to Weather Conditions or any other happenings).</p>

<p>🔚 End of our services with satisfied clients 🙂</p>
        </body>
        </html>
    `;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(infoContent);
    newWindow.document.close();
    }
    function openInfoPageSix() {
    const infoContent = `
 
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Summer Special Tour</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3, h4 { color: #007BFF; }
        ul { margin: 10px 0; }
        .cost { font-weight: bold; color: green; }
        .note { font-style: italic; color: red; }
    </style>
</head>
<body>

    <h1>Summer Special</h1>
    <h2>3 Days Tour To NARAN, KAGHAN SHOGRAN, & LAKE SAIF UL MALOOK 🌍</h2>

    <h3>Dates:</h3>
    <ul>
        <li>🚙 Departure: 2024</li>
        <li>🚙 Every Monday & Thursday Night Departure</li>
    </ul>

    <h3>Places to Visit:</h3>
    <ul>
        <li>🚙 #Hazara_Motorway</li>
        <li>⛰ #Abbotabad</li>
        <li>⛰ #Mansehra</li>
        <li>🌄 #Balakot</li>
        <li>🏔 #Kawaei</li>
        <li>🌄 #Kaghan</li>
        <li>💒 #Naran</li>
        <li>🎉 #kunhar_river</li>
        <li>⛪ #Batakhundi</li>
        <li>🏞 #Barwai</li>
        <li>🏕 #Saif_ul_malook</li>
        <li>🏖 #Lulusar_lake</li>
        <li>🗻 #BabusarTop</li>
        <li>⛰ #Shogran</li>
    </ul>

    <h3 class="cost">💰 Trip Cost</h3>
    <ul>
        <li>--- Package from LHR/ISB/FSD: 15,000 PKR/= Per head</li>
        <li>--- Extra room charges for couple: Rs. 9,000 PKR/- (35,000 PKR) Per Couple</li>
        <li class="note">Group of ten can avail discount</li>
    </ul>

    <h3>💰 Advance Payment</h3>
    <ul>
        <li>--- #Advance: 45% of Amount per seat</li>
        <li>--- #Remaining_payment: At the time of departure.</li>
    </ul>

    <h3>👉 Itinerary Plan</h3>

    <h4>🗓 Day 0</h4>
    <ul>
        <li>🚐 Departure from Lahore at 10 PM (Via Motorway or GT Road)</li>
        <li>🚙 Short Stay At Bhera</li>
        <li>👫 Joining Participants from Islamabad (3—4 AM)</li>
    </ul>

    <h4>🗓 Day 01</h4>
    <ul>
        <li>🍴 Breakfast at Balakot at 6:00 AM</li>
        <li>🚌 Reach Naran at 10:00 A.M</li>
        <li>🚌 Hotel Check in and some rest</li>
        <li>🚙 Jeep Safari to the Majestic Saif ul Malook Lake at 03:00 PM</li>
        <li>📷 Photo session at Saif ul Malook Lake</li>
        <li>🍔🏨 Dinner and Night stay in Naran in Hotel (Hotel Naran View or A-One or Similar)</li>
    </ul>

    <h4>🗓 Day 02</h4>
    <ul>
        <li>🍴 Breakfast in Naran at 07:00 AM</li>
        <li>📷 Sightseeing the beauty of Naran and surrounding areas</li>
        <li>🚌 Visit Naran Bazar</li>
        <li>🚌 Visit Battakundi and Jalkhad 10:00 AM</li>
        <li>🛏 Short stay at Lulusar Lake 11:00 AM</li>
        <li>🚌 Reach Babusar Top 01:00 PM</li>
        <li>📷 Photo session at Babusar Top | if access</li>
        <li>🚌 Move back to Naran</li>
        <li>⛵ River Rafting in Naran (if available)</li>
        <li>🍔🏨 Dinner and Night stay at Naran</li>
    </ul>

    <h4>🗓 Day 03</h4>
    <ul>
        <li>🍴 Breakfast at Naran at 08:00 AM</li>
        <li>🚌 Visit Kiwai Waterfall 11:00</li>
        <li>🚌 Transfer to Jeeps for Shogran Valley (Jeep Charges not Included)</li>
        <li>🏞 Short Stay at Shogran and Back to Kewaii</li>
        <li>🚌 Reach Kaghan and Balakot on the Way</li>
        <li>🚙 Some Time at Kunhar River then Move Back to Islamabad</li>
        <li>📷 Sightseeing on the way back</li>
        <li>🏘 Reach safely back at night (09:00 - 10:00 PM ISLAMABAD & 02—03 AM Lahore)</li>
        <li class="note">(02 to 03 hours delay due to Weather and any Other Reason)</li>
        <li>🔚 End of Services with Satisfied Client's 🙂</li>
    </ul>

    <h3>🧒 Children Policy:</h3>
    <ul>
        <li>Under 4 years Children - Free of Charge (Lap or on folding seat if available)</li>
        <li>4-8 years Children - Half Charges (folding seat)</li>
        <li>8 plus years Children - Full Charges</li>
    </ul>

    <h3>🚌 Seat Arrangement Policy:</h3>
    <p>Seats will be allotted before departure by tour management for your convenience and will shuffle during the tour. For any specific seat demand by any client, 1000/seat/day will be charged.</p>

    <h3>🚥 Pick / Drop:</h3>
    <ul>
        <li>Lahore to Lahore (PSO Pump Near Thokar Niaz Baig Lahore)</li>
        <li>ISB to ISB (Daewoo Terminal Peshawar Mor Near Nust University Islamabad)</li>
        <li>FSD to FSD (Daewoo Terminal Near Allied Mor Faisalabad)</li>
        <li>Pick Anywhere From GT Road</li>
        <li>Multan & Karachi People's Joins us From Lahore & Islamabad</li>
    </ul>
    <p class="note">Time schedule can be altered and managed according to situation</p>

    <h3>Registration Procedure:</h3>
    <ul>
        <li>💰 Deposit Rs. 8,000. Deposit through bank counter/ Account to Account transfer/ Transfer through ATM of any bank in the following account.</li>
        <li>📲 Mobile Account: 03217884613</li>
        <li>📱 For any details or queries Mob, Call, SMS/ Whatsapp: 03217884613</li>
    </ul>

    <h3>Booking Procedure:</h3>
    <ol>
        <li>Send payment through any of the above mentioned service on the following details.</li>
        <li>SMS below details on the following # 03217884613</li>
    </ol>
    <p>i) Names, Amount Paid, Date Of Payment, Trip Name, Joining From, Total Seats</p>

    <h3>❎ Cancellation Policy:</h3>
    <p>No amount will be refunded if any person leaves the trip at any stage due to any reason. Amount adjustment policy applied in certain case.</p>

    <h3>✅ Services Included:</h3>
    <ul>
        <li>✔ Coaster Transport from Lahore to Lahore / ISB to ISB</li>
        <li>✔ Hotel Accommodation</li>
        <li>✔ Dinner (2 Dinners)</li>
        <li>✔ Breakfasts (3 Breakfasts)</li>
        <li>✔ Bonfire</li>
        <li>✔ Outdoor Sports Facility</li>
        <li>✔ Photography</li>
        <li>✔ All road Toll Taxes</li>
    </ul>

    <h3>🚫 Services Not Included:</h3>
<ul>
    <li>❎ Laundry, Phone Calls & Other Personal Expenses.</li>
    <li>❎ Extra expense due to land sliding, road blocks, bad weather and other political reasons.</li>
    <li>❎ Personal insurance.</li>
    <li>❎ Rescue, Helicopter coverage.</li>
    <li>❎ Tips for Guide, porter & cook.</li>
    <li>❎ Anything not mentioned in the itinerary.</li>
    <li>❎ Jeep Charges & Rafting (ticket not included).</li>
</ul>

<hr>

<h3>Must Bring:</h3>
<ul>
    <li>☑ A Water Bottle</li>
    <li>☑ Torch</li>
    <li>☑ Joggers</li>
    <li>☑ Extra Clothes</li>
    <li>☑ Jackets</li>
    <li>☑ Upper/shall</li>
    <li>☑ Jeans</li>
    <li>☑ Rain Coat</li>
    <li>☑ Umbrella</li>
    <li>☑ Hiking Stick</li>
</ul>
<p>🇵🇰🇵🇰🇵🇰❤❤</p>

<hr>

<h3>⬇ Terms and Conditions</h3>
<ul>
    <li>Please bring National Identity Card (CNIC) and a copy of CNIC along with you (mandatory). The Company reserves the right to refuse entry.</li>
    <li>Arshyan Travels and Tours will not be responsible for any kind of loss regarding personal or precious items (Cameras, Jewelry, Cam Coders, and Mobile Phones, etc.).</li>
    <li>Arshyan Travels and Tours will have complete rights to assign the seats in the transport as per requirements.</li>
    <li>Arshyan Travels and Tours will have complete rights to eliminate any explorer found guilty of disrespecting or misbehaving with any co-explorer or team member.</li>
    <li>Arshyan Travels and Tours will not be liable to provide the explorer with any kind of snacks or beverages (Plain water will be offered).</li>
    <li>Arshyan Travels and Tours reserves the right to use the photos taken during the tour for electronic media.</li>
    <li>Smoking in the transport is strictly prohibited.</li>
    <li>In case of landsliding, if it becomes necessary to stay anywhere other than the accommodation mentioned in the itinerary, the cost will be charged extra and will be decided on runtime.</li>
    <li>Arshyan Travels and Tours will not be responsible for any accidental cases or any loss of lives during the whole tour.</li>
    <li>Arshyan Travels and Tours will have complete rights to amend/change the itinerary due to any natural disasters (Landsliding and Weather issues, etc.).</li>
</ul>

<p>Cheers and Happy Sight Seeing!!</p>
</body>
</html>
    `;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(infoContent);
    newWindow.document.close();}

    function openInfoPageSeven() {
        const infoContent = `
        <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Summer Special Tour</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3, h4 { color: #007BFF; }
        ul { margin: 10px 0; }
        .cost { font-weight: bold; color: green; }
        .note { font-style: italic; color: red; }
    </style>
</head>
<body>
<h1>THIS TOUR IS NOT AVAILABLE YET</h1>
</body>
</html>
        `;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(infoContent);
        newWindow.document.close();}
        function openInfoPageEight() {
            const infoContent = `
            <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Summer Special Tour</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2, h3, h4 { color: #007BFF; }
        ul { margin: 10px 0; }
        .cost { font-weight: bold; color: green; }
        .note { font-style: italic; color: red; }
    </style>
</head>
<body>
<h1>THIS TOUR IS NOT AVAILABLE YET</h1>
</body>
</html>
            `;
            const newWindow = window.open("", "_blank");
            newWindow.document.write(infoContent);
            newWindow.document.close();}