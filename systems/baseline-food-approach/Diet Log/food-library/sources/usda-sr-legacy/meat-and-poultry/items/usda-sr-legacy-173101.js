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
  "id": "usda-sr-legacy-173101",
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
  "name": "Beef, New Zealand, imported, cube roll, separable lean and fat, cooked, fast roasted",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.03,
    "energy_kcal": 1200.0,
    "fat_g": 19.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 22.0,
    "omega3_g": 0.181,
    "phosphorus_mg": 195.0,
    "potassium_mg": 338.0,
    "protein_g": 27.8,
    "salt_g": 0.1225,
    "sat_fat_g": 7.01,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173101",
  "state": "Roasted",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
