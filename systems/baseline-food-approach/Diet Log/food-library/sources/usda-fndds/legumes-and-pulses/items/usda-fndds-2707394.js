/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beans and tomatoes, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 17.8,
    "energy_kcal": 142.0,
    "fat_g": 5.58,
    "fibre_g": 6.1,
    "folate_ug": 103.0,
    "iron_mg": 1.63,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 355.0,
    "protein_g": 6.05,
    "salt_g": 0.8775,
    "sat_fat_g": 0.779,
    "sodium_mg": 351.0,
    "sugar_g": 1.32,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707394",
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
