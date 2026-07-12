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
  "id": "usda-sr-legacy-174751",
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
  "name": "Beef, New Zealand, imported, striploin, separable lean and fat, cooked, fast fried",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.02,
    "energy_kcal": 1260.0,
    "fat_g": 22.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.72,
    "magnesium_mg": 21.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 192.0,
    "potassium_mg": 325.0,
    "protein_g": 24.9,
    "salt_g": 0.125,
    "sat_fat_g": 8.24,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174751",
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
