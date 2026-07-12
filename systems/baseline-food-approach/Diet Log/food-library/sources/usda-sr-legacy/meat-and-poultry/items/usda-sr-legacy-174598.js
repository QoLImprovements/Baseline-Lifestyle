/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-52-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "3-52-oz",
      "kind": "unit",
      "label": "3.52 oz"
    }
  ],
  "name": "Salami, pork, beef, less sodium",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 15.4,
    "energy_kcal": 396.0,
    "fat_g": 30.5,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 1.55,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 1370.0,
    "protein_g": 15.0,
    "salt_g": 1.5575,
    "sat_fat_g": 10.6,
    "sodium_mg": 623.0,
    "sugar_g": 6.21,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174598",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
