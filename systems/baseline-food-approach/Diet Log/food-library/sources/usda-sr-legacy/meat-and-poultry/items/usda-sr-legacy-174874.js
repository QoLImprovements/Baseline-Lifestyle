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
  "id": "usda-sr-legacy-174874",
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
  "name": "Lamb, New Zealand, imported, square-cut shoulder chops, separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.05,
    "energy_kcal": 1350.0,
    "fat_g": 23.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.74,
    "magnesium_mg": 20.0,
    "omega3_g": 0.331,
    "phosphorus_mg": 162.0,
    "potassium_mg": 207.0,
    "protein_g": 26.8,
    "salt_g": 0.1425,
    "sat_fat_g": 9.6,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174874",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
