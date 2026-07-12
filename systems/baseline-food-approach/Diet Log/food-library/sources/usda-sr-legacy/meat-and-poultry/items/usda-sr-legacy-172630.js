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
  "id": "usda-sr-legacy-172630",
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
  "name": "Lamb, New Zealand, imported, flap, boneless, separable lean and fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.14,
    "energy_kcal": 1570.0,
    "fat_g": 32.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.395,
    "phosphorus_mg": 122.0,
    "potassium_mg": 182.0,
    "protein_g": 20.5,
    "salt_g": 0.1275,
    "sat_fat_g": 13.5,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172630",
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
