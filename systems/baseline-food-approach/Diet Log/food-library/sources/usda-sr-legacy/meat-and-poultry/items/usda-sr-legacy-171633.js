/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frankfurter",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    }
  ],
  "name": "Frankfurter, meat and poultry, cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 4.96,
    "energy_kcal": 298.0,
    "fat_g": 26.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.12,
    "magnesium_mg": 11.0,
    "omega3_g": 0.282,
    "phosphorus_mg": 180.0,
    "potassium_mg": 323.0,
    "protein_g": 10.3,
    "salt_g": 2.285,
    "sat_fat_g": 8.22,
    "sodium_mg": 914.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171633",
  "state": "Boiled",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "boiled",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
