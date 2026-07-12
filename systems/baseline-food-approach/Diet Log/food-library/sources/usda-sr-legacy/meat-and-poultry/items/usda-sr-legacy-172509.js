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
  "id": "usda-sr-legacy-172509",
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
      "gramsPerUnit": 272.0,
      "key": "unit-cooked-yield-from-1-lb-raw-meat",
      "kind": "unit",
      "label": "unit, cooked (yield from 1 lb raw meat)"
    }
  ],
  "name": "Lamb, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4\" fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 223.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 2.8,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 260.0,
    "protein_g": 33.7,
    "salt_g": 0.175,
    "sat_fat_g": 3.15,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172509",
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
