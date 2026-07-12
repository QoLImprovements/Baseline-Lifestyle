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
  "id": "usda-sr-legacy-173084",
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
  "name": "Beef, New Zealand, imported, variety meats and by-products, kidney, cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 655.0,
    "fat_g": 5.27,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.368,
    "phosphorus_mg": 338.0,
    "potassium_mg": 144.0,
    "protein_g": 27.3,
    "salt_g": 0.3075,
    "sat_fat_g": 1.17,
    "sodium_mg": 123.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173084",
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
