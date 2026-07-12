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
  "id": "usda-fndds-2707431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lentil curry",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 12.3,
    "energy_kcal": 111.0,
    "fat_g": 5.65,
    "fibre_g": 3.4,
    "folate_ug": 63.0,
    "iron_mg": 1.42,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 292.0,
    "protein_g": 3.68,
    "salt_g": 0.9575,
    "sat_fat_g": 1.29,
    "sodium_mg": 383.0,
    "sugar_g": 3.21,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707431",
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
