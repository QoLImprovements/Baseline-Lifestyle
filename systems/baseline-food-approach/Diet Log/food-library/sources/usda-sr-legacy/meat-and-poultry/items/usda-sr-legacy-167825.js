/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 830.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, loin, blade (roasts), bone-in, separable lean and fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 254.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.093,
    "phosphorus_mg": 194.0,
    "potassium_mg": 318.0,
    "protein_g": 24.3,
    "salt_g": 0.19,
    "sat_fat_g": 5.9,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167825",
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
