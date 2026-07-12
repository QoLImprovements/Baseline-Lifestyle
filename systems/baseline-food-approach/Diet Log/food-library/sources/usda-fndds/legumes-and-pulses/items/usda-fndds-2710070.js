/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 11.0,
    "energy_kcal": 54.0,
    "fat_g": 0.25,
    "fibre_g": 2.5,
    "folate_ug": 23.0,
    "iron_mg": 0.54,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 241.0,
    "protein_g": 1.63,
    "salt_g": 2.36,
    "sat_fat_g": 0.041,
    "sodium_mg": 944.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 8.6,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 36.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710070",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "legumes-and-pulses",
    "olives-pickles-pickled-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
