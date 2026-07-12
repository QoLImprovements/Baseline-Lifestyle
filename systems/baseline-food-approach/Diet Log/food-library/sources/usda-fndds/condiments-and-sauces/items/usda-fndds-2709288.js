/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit salad, fresh or raw, including citrus fruits, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.5,
    "energy_kcal": 56.0,
    "fat_g": 0.19,
    "fibre_g": 1.7,
    "folate_ug": 12.0,
    "iron_mg": 0.16,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 188.0,
    "protein_g": 0.71,
    "salt_g": 0.01,
    "sat_fat_g": 0.039,
    "sodium_mg": 4.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 26.7,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709288",
  "state": "Raw",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "condiments-and-sauces",
    "other-fruits-and-fruit-salads",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
