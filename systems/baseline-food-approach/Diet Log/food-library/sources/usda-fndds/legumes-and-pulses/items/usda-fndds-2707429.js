/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-papad",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-papad",
      "kind": "unit",
      "label": "1 papad"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Papad, grilled or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 59.9,
    "energy_kcal": 371.0,
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
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707429",
  "state": "Grilled",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "grilled",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
