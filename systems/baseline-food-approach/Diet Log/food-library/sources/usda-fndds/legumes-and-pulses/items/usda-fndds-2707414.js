/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pea",
      "kind": "unit",
      "label": "1 pea"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chickpeas, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 25.5,
    "energy_kcal": 211.0,
    "fat_g": 8.91,
    "fibre_g": 7.1,
    "folate_ug": 152.0,
    "iron_mg": 2.7,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 270.0,
    "protein_g": 8.23,
    "salt_g": 0.555,
    "sat_fat_g": 1.12,
    "sodium_mg": 222.0,
    "sugar_g": 4.46,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707414",
  "state": "Unspecified",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
