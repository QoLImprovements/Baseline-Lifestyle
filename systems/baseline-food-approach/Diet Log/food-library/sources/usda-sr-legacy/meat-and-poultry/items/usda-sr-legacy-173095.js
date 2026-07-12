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
  "id": "usda-sr-legacy-173095",
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
  "name": "Beef, New Zealand, imported, variety meats and by-products, tripe cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 0.0,
    "energy_kcal": 430.0,
    "fat_g": 2.98,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.72,
    "magnesium_mg": 24.0,
    "omega3_g": 0.056,
    "phosphorus_mg": 168.0,
    "potassium_mg": 102.0,
    "protein_g": 19.0,
    "salt_g": 0.1,
    "sat_fat_g": 0.922,
    "sodium_mg": 40.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173095",
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
