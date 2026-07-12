/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili, vegetarian",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 18.9,
    "energy_kcal": 119.0,
    "fat_g": 2.42,
    "fibre_g": 6.0,
    "folate_ug": 105.0,
    "iron_mg": 1.98,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 351.0,
    "protein_g": 6.28,
    "salt_g": 0.79,
    "sat_fat_g": 0.348,
    "sodium_mg": 316.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707411",
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
