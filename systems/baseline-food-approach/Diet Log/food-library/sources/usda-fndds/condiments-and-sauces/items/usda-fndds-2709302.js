/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, including citrus fruits, with salad dressing or mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 13.0,
    "energy_kcal": 240.0,
    "fat_g": 20.3,
    "fibre_g": 1.8,
    "folate_ug": 19.0,
    "iron_mg": 0.28,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 46.0,
    "potassium_mg": 191.0,
    "protein_g": 1.87,
    "salt_g": 0.31,
    "sat_fat_g": 2.8,
    "sodium_mg": 124.0,
    "sugar_g": 9.46,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 16.4,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 34.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709302",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "condiments-and-sauces",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
