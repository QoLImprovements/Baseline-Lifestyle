/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-double-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double cheeseburger, on white bun, 2 medium patties",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 11.8,
    "energy_kcal": 300.0,
    "fat_g": 18.8,
    "fibre_g": 0.4,
    "folate_ug": 36.0,
    "iron_mg": 2.33,
    "magnesium_mg": 21.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 220.0,
    "potassium_mg": 240.0,
    "protein_g": 19.6,
    "salt_g": 1.1,
    "sat_fat_g": 8.19,
    "sodium_mg": 440.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706907",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
