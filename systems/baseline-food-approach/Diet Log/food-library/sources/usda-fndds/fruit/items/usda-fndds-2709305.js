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
  "id": "usda-fndds-2709305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit salad, including citrus fruits, with marshmallows",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 17.0,
    "energy_kcal": 244.0,
    "fat_g": 19.1,
    "fibre_g": 1.7,
    "folate_ug": 18.0,
    "iron_mg": 0.28,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 43.0,
    "potassium_mg": 180.0,
    "protein_g": 1.87,
    "salt_g": 0.305,
    "sat_fat_g": 2.64,
    "sodium_mg": 122.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 15.5,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 32.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709305",
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
