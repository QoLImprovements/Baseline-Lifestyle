/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cake",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-cake",
      "kind": "unit",
      "label": "1 cake"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bean cake",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 49.9,
    "energy_kcal": 414.0,
    "fat_g": 21.4,
    "fibre_g": 3.0,
    "folate_ug": 70.0,
    "iron_mg": 2.58,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 160.0,
    "protein_g": 5.8,
    "salt_g": 0.465,
    "sat_fat_g": 2.84,
    "sodium_mg": 186.0,
    "sugar_g": 20.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 3.97,
    "vitamin_k_ug": 23.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707409",
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
