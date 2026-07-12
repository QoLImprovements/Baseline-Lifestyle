/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fruit",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709213",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.2,
    "energy_kcal": 68.0,
    "fat_g": 0.21,
    "fibre_g": 1.8,
    "folate_ug": 11.0,
    "iron_mg": 0.12,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 206.0,
    "protein_g": 0.68,
    "salt_g": 0.0025,
    "sat_fat_g": 0.052,
    "sodium_mg": 1.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 19.8,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709213",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
