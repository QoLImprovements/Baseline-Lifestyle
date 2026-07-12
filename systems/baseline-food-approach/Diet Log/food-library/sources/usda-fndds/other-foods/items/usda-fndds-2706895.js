/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706895",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Cheeseburger, on white bun, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 19.6,
    "energy_kcal": 298.0,
    "fat_g": 16.0,
    "fibre_g": 0.7,
    "folate_ug": 48.0,
    "iron_mg": 2.49,
    "magnesium_mg": 22.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 208.0,
    "potassium_mg": 212.0,
    "protein_g": 17.6,
    "salt_g": 1.1475,
    "sat_fat_g": 6.94,
    "sodium_mg": 459.0,
    "sugar_g": 3.16,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706895",
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
