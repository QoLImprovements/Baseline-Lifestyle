/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Beerwurst, beer salami, pork and beef",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 3.76,
    "energy_kcal": 277.0,
    "fat_g": 22.5,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 1.73,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 244.0,
    "protein_g": 14.0,
    "salt_g": 2.2025,
    "sat_fat_g": 8.44,
    "sodium_mg": 881.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172011",
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
