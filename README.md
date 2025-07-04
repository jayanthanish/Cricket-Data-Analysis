# Cricket Data Analysis: T20 World Cup 2022 Best XI

## Project Overview

This end-to-end data analytics project focuses on analyzing player performance from the T20 World Cup 2022 to identify the "Best XI Team of the Tournament." By combining web scraping, Python for data manipulation, and Power BI for interactive visualization, this project provides impactful insights into player statistics and helps in selecting an optimal team based on various performance metrics.

## Project Highlights & Development Process

This project demonstrates a complete data analytics pipeline, from data acquisition to insightful visualization.

### 1. Data Collection (Web Scraping)

* **Tool Used:** Bright Data Web Scraper IDE
* **Source:** ESPN Cricinfo website
* **Process:** Structured player performance data was systematically collected. This included detailed batting, bowling, and all-rounder statistics for all participating teams in the T20 World Cup 2022. The web scraping process ensured that a comprehensive dataset was available for subsequent analysis.

### 2. Data Preparation & Transformation (Python & Pandas)

* **Tools Used:** Python with the Pandas library
* **Process:** The raw data obtained from web scraping underwent a rigorous cleaning, merging, and transformation process.
    * **Cleaning:** Handled missing values, corrected data types, and addressed inconsistencies to ensure data quality.
    * **Merging:** Consolidated various data files (e.g., batting stats, bowling stats) into a unified dataset.
    * **Transformation:** Applied advanced feature engineering techniques to derive custom metrics crucial for performance evaluation. This included calculating:
        * **Strike Rates:** For batsmen and bowlers.
        * **Economy Rates:** For bowlers.
        * **Average Runs:** For batsmen.
        * **Wicket Contributions:** For bowlers and all-rounders.
    This step was critical in preparing the data for effective modeling and analysis in Power BI.

### 3. Interactive Dashboard Development (Power BI)

* **Tool Used:** Power BI Desktop
* **Features:** A highly interactive and visually appealing dashboard was constructed to present the analysis. Key features include:
    * **Player Filtering:** Users can dynamically filter players by their roles (batsman, bowler, all-rounder) to focus on specific segments of the team.
    * **Top Performers:** Dedicated sections highlight top performers based on key metrics such as total runs, wickets taken, batting strike rate, and bowling economy rate.
    * **Custom Visuals & KPIs:** Utilized custom visuals and Key Performance Indicators (KPIs) to allow for easy comparison of player and team performances. This includes charts for run distribution, wicket breakdowns, and comparative analyses across different teams.
    * **Design Principles:** Adhered to best practices for dashboard design, considering various elements for optimal presentation.

### 4. Data Modeling with DAX

* **Tool Used:** Power BI (DAX - Data Analysis Expressions)
* **Process:** DAX was extensively used to create:
    * **Calculated Columns:** To add new columns to tables based on existing data.
    * **Measures:** To perform aggregations and calculations on the fly, enabling dynamic analysis (e.g., calculating average strike rates for filtered players).
    * **Parameters:** To allow users to interact with the data by dynamically selecting and ranking players based on different criteria. This sophisticated modeling underpins the interactive capabilities of the dashboard.

### 5. Insight Generation & Best XI Selection

* **Outcome:** The culmination of the project is the selection of the "Best XI Team of the Tournament" based on the performance metrics and filters available in the Power BI dashboard.
* **Process:** By leveraging the calculated KPIs and the interactive filtering capabilities, informed decisions can be made about which players truly stood out in their respective roles during the T20 World Cup 2022. This demonstrates the power of data-driven decision-making in sports analytics.

## Answering Key Questions & Project Benefits

This project aims to answer critical questions related to player performance in the T20 World Cup 2022, providing valuable insights for cricket enthusiasts, analysts, and strategists:

* Who were the top-performing batsmen, bowlers, and all-rounders in the tournament?
* How do players compare across different key performance indicators (e.g., strike rate vs. runs, economy vs. wickets)?
* Which players consistently delivered under pressure?
* Based on data, what would be the optimal "Best XI" team composition for the tournament?
* How did individual player contributions impact team performance?

**Benefits of this project include:**

* **Data-Driven Player Selection:** Provides an objective, data-backed approach to identifying the best players, moving beyond subjective opinions.
* **In-depth Performance Analysis:** Offers a detailed breakdown of individual player strengths and weaknesses.
* **Interactive Exploration:** Allows users to interact with the data, explore different scenarios, and derive their own insights.
* **Showcase of Analytics Skills:** Demonstrates proficiency in a full spectrum of data analytics tools and techniques, including web scraping, data cleaning, transformation, modeling, and visualization.
* **Foundation for Future Analysis:** The structured dataset and dashboard can serve as a foundation for further in-depth analysis, predictive modeling, or even fantasy cricket team selection.
