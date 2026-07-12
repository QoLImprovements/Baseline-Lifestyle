/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "chop",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 352.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Veal, shoulder, blade chop, separable lean and fat, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.15,
    "energy_kcal": 199.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.59,
    "magnesium_mg": 33.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 242.0,
    "potassium_mg": 235.0,
    "protein_g": 25.7,
    "salt_g": 0.2775,
    "sat_fat_g": 3.72,
    "sodium_mg": 111.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172651",
  "state": "Grilled",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "grilled",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
