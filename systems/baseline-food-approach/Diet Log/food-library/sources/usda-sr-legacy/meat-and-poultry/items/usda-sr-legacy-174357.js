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
  "id": "usda-sr-legacy-174357",
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
      "gramsPerUnit": 184.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    }
  ],
  "name": "Veal, variety meats and by-products, kidneys, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 0.0,
    "energy_kcal": 682.0,
    "fat_g": 5.66,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 3.04,
    "magnesium_mg": 24.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 372.0,
    "potassium_mg": 159.0,
    "protein_g": 26.3,
    "salt_g": 0.275,
    "sat_fat_g": 1.74,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 201.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174357",
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
