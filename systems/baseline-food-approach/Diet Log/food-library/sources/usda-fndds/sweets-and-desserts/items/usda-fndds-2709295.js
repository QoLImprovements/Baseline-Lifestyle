/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-fruit",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit, chocolate covered",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 20.1,
    "energy_kcal": 133.0,
    "fat_g": 6.69,
    "fibre_g": 2.7,
    "folate_ug": 9.0,
    "iron_mg": 0.88,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 205.0,
    "protein_g": 1.41,
    "salt_g": 0.005,
    "sat_fat_g": 3.86,
    "sodium_mg": 2.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 46.6,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709295",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "other-fruits-and-fruit-salads",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
