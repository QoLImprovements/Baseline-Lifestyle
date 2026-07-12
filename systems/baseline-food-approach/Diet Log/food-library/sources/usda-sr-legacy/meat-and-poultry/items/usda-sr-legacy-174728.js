/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-174728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, New Zealand, imported, variety meats and by-products liver, cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 3.78,
    "energy_kcal": 150.0,
    "fat_g": 4.68,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.17,
    "magnesium_mg": 21.0,
    "omega3_g": 0.317,
    "phosphorus_mg": 397.0,
    "potassium_mg": 336.0,
    "protein_g": 23.3,
    "salt_g": 0.1375,
    "sat_fat_g": 1.39,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21000.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174728",
  "state": "Boiled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "boiled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
