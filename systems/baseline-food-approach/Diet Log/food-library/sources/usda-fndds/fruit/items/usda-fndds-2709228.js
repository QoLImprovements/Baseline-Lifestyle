/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    }
  ],
  "name": "Starfruit, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.73,
    "energy_kcal": 31.0,
    "fat_g": 0.33,
    "fibre_g": 2.8,
    "folate_ug": 12.0,
    "iron_mg": 0.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 133.0,
    "protein_g": 1.04,
    "salt_g": 0.005,
    "sat_fat_g": 0.019,
    "sodium_mg": 2.0,
    "sugar_g": 3.98,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 34.4,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709228",
  "state": "Raw",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
