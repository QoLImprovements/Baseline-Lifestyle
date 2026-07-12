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
  "id": "usda-sr-legacy-173108",
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
  "name": "Beef, New Zealand, imported, tenderloin, separable lean and fat, cooked, fast fried",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.27,
    "energy_kcal": 846.0,
    "fat_g": 9.35,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.99,
    "magnesium_mg": 30.0,
    "omega3_g": 0.158,
    "phosphorus_mg": 258.0,
    "potassium_mg": 425.0,
    "protein_g": 29.3,
    "salt_g": 0.1125,
    "sat_fat_g": 3.73,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173108",
  "state": "Fried",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
