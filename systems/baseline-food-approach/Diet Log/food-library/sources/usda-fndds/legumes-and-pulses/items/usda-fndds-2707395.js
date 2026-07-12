/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 231.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Black bean salad",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 12.6,
    "energy_kcal": 94.0,
    "fat_g": 3.85,
    "fibre_g": 3.4,
    "folate_ug": 35.0,
    "iron_mg": 0.9,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 211.0,
    "protein_g": 3.08,
    "salt_g": 0.875,
    "sat_fat_g": 0.567,
    "sodium_mg": 350.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 11.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707395",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
