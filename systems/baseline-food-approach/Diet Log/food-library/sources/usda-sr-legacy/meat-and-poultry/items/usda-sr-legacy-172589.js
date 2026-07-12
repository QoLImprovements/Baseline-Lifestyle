/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    },
    {
      "gramsPerUnit": 54.0,
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
  "name": "Lamb, Australian, imported, fresh, rib chop, frenched, bone-in, separable lean only, trimmed to 1/8\" fat, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 978.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.36,
    "magnesium_mg": 26.0,
    "omega3_g": 0.185,
    "phosphorus_mg": 216.0,
    "potassium_mg": 320.0,
    "protein_g": 32.2,
    "salt_g": 0.2125,
    "sat_fat_g": 5.69,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172589",
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
