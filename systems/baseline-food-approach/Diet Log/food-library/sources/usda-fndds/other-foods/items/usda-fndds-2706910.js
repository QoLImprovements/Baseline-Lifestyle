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
  "id": "usda-fndds-2706910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double cheeseburger, on white bun, 2 large patties",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 9.66,
    "energy_kcal": 299.0,
    "fat_g": 19.4,
    "fibre_g": 0.3,
    "folate_ug": 33.0,
    "iron_mg": 2.34,
    "magnesium_mg": 21.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 211.0,
    "potassium_mg": 252.0,
    "protein_g": 20.2,
    "salt_g": 1.0225,
    "sat_fat_g": 8.29,
    "sodium_mg": 409.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706910",
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
