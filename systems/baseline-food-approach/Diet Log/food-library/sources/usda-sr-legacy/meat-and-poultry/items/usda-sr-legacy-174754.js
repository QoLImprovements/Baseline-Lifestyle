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
  "id": "usda-sr-legacy-174754",
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
  "name": "Beef, ground, 93% lean meat / 7% fat, loaf, cooked, baked",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 801.0,
    "fat_g": 8.43,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.99,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 197.0,
    "potassium_mg": 309.0,
    "protein_g": 27.0,
    "salt_g": 0.1475,
    "sat_fat_g": 3.48,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174754",
  "state": "Baked",
  "subcategory": "Beef Products",
  "tags": [
    "baked",
    "beef-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
