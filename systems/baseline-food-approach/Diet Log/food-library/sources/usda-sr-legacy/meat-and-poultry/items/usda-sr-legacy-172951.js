/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz-1-nlea-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz-1-nlea-serving",
      "kind": "unit",
      "label": "2 oz 1 NLEA serving"
    }
  ],
  "name": "Luncheon meat, pork with ham, minced, canned, includes Spam (Hormel)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 4.6,
    "energy_kcal": 315.0,
    "fat_g": 26.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.64,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 409.0,
    "protein_g": 13.4,
    "salt_g": 3.525,
    "sat_fat_g": 9.99,
    "sodium_mg": 1410.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172951",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
