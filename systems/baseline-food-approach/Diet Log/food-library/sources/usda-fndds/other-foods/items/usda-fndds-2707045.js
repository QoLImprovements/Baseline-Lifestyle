/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cocktail-size-pig-in-a-blanket",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-cocktail-size-pig-in-a-blanket",
      "kind": "unit",
      "label": "1 cocktail size pig in a blanket"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-pig-in-blanket",
      "kind": "unit",
      "label": "1 pig in blanket"
    }
  ],
  "name": "Pig in a blanket",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 19.2,
    "energy_kcal": 310.0,
    "fat_g": 20.8,
    "fibre_g": 0.7,
    "folate_ug": 30.0,
    "iron_mg": 2.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 122.0,
    "potassium_mg": 264.0,
    "protein_g": 11.4,
    "salt_g": 1.77,
    "sat_fat_g": 8.07,
    "sodium_mg": 708.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707045",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
