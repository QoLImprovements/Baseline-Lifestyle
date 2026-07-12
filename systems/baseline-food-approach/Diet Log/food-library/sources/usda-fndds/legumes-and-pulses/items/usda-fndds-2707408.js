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
  "id": "usda-fndds-2707408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    }
  ],
  "name": "Falafel",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 29.0,
    "energy_kcal": 514.0,
    "fat_g": 41.2,
    "fibre_g": 4.8,
    "folate_ug": 79.0,
    "iron_mg": 2.31,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 259.0,
    "protein_g": 8.28,
    "salt_g": 1.2475,
    "sat_fat_g": 5.43,
    "sodium_mg": 499.0,
    "sugar_g": 4.52,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 7.3,
    "vitamin_e_mg": 7.74,
    "vitamin_k_ug": 72.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707408",
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
