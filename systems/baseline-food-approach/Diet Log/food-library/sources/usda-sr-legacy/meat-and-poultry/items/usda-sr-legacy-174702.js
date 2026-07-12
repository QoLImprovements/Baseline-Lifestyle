/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "fillet",
  "description": "Beef Products",
  "id": "usda-sr-legacy-174702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, ribeye filet, boneless, separable lean only, trimmed to 0\" fat, choice, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.51,
    "energy_kcal": 870.0,
    "fat_g": 10.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.76,
    "magnesium_mg": 28.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 261.0,
    "potassium_mg": 409.0,
    "protein_g": 28.4,
    "salt_g": 0.14,
    "sat_fat_g": 3.62,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174702",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
