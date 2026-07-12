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
  "id": "usda-fndds-2708988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Black beans and rice, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 23.7,
    "energy_kcal": 182.0,
    "fat_g": 7.09,
    "fibre_g": 4.9,
    "folate_ug": 99.0,
    "iron_mg": 1.61,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 205.0,
    "protein_g": 5.82,
    "salt_g": 0.74,
    "sat_fat_g": 0.999,
    "sodium_mg": 296.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708988",
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
