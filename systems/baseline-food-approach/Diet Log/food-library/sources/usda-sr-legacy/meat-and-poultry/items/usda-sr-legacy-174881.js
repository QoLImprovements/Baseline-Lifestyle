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
  "id": "usda-sr-legacy-174881",
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
  "name": "Veal, shoulder, blade chop, separable lean only, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 159.0,
    "fat_g": 5.53,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.65,
    "magnesium_mg": 34.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 253.0,
    "potassium_mg": 245.0,
    "protein_g": 27.3,
    "salt_g": 0.2825,
    "sat_fat_g": 2.09,
    "sodium_mg": 113.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174881",
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
