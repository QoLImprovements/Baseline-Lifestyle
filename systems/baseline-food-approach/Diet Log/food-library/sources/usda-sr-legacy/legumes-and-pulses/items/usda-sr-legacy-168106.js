/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-168106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Papad",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 59.9,
    "energy_kcal": 1550.0,
    "fat_g": 3.25,
    "fibre_g": 18.6,
    "folate_ug": 219.0,
    "iron_mg": 7.8,
    "magnesium_mg": 271.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 385.0,
    "potassium_mg": 1000.0,
    "protein_g": 25.6,
    "salt_g": 4.35,
    "sat_fat_g": 1.08,
    "sodium_mg": 1740.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168106",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
