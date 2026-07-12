/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-cooked-yield-from-1-lb-raw-meat",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Lamb, variety meats and by-products, kidneys, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.99,
    "energy_kcal": 573.0,
    "fat_g": 3.62,
    "fibre_g": 0.0,
    "folate_ug": 81.0,
    "iron_mg": 12.4,
    "magnesium_mg": 20.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 290.0,
    "potassium_mg": 178.0,
    "protein_g": 23.6,
    "salt_g": 0.3775,
    "sat_fat_g": 1.23,
    "sodium_mg": 151.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174355",
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
