/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    },
    {
      "gramsPerUnit": 2800.0,
      "key": "roast-shank",
      "kind": "unit",
      "label": "roast shank"
    }
  ],
  "name": "Pork, cured, ham, shank, bone-in, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.64,
    "energy_kcal": 191.0,
    "fat_g": 9.35,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.42,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 257.0,
    "potassium_mg": 356.0,
    "protein_g": 24.4,
    "salt_g": 2.025,
    "sat_fat_g": 3.02,
    "sodium_mg": 810.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168357",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
