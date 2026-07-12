/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174897",
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
    },
    {
      "gramsPerUnit": 121.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean and fat, trimmed to 1/8\" fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 0.0,
    "energy_kcal": 781.0,
    "fat_g": 7.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.169,
    "phosphorus_mg": 170.0,
    "potassium_mg": 231.0,
    "protein_g": 30.9,
    "salt_g": 0.1525,
    "sat_fat_g": 2.25,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174897",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
