/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-whole",
  "description": "Tomatoes",
  "id": "usda-fndds-2709720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 120.0,
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
  "name": "Tomatoes, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 4.71,
    "energy_kcal": 50.0,
    "fat_g": 3.42,
    "fibre_g": 1.5,
    "folate_ug": 13.0,
    "iron_mg": 0.33,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 287.0,
    "protein_g": 1.08,
    "salt_g": 0.3925,
    "sat_fat_g": 0.867,
    "sodium_mg": 157.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 15.8,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709720",
  "state": "Cooked",
  "subcategory": "Tomatoes",
  "tags": [
    "cooked",
    "other-foods",
    "tomatoes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
