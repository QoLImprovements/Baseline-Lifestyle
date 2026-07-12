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
  "id": "usda-sr-legacy-172650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
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
  "name": "Veal, loin, chop, separable lean and fat, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.16,
    "energy_kcal": 829.0,
    "fat_g": 9.48,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.82,
    "magnesium_mg": 32.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 208.0,
    "potassium_mg": 229.0,
    "protein_g": 28.0,
    "salt_g": 0.215,
    "sat_fat_g": 3.38,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172650",
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
