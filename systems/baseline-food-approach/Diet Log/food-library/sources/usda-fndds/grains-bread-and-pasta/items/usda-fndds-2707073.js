/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-sandwich",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog sandwich, reduced fat, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 22.9,
    "energy_kcal": 237.0,
    "fat_g": 10.5,
    "fibre_g": 2.4,
    "folate_ug": 34.0,
    "iron_mg": 2.04,
    "magnesium_mg": 31.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 138.0,
    "potassium_mg": 197.0,
    "protein_g": 12.7,
    "salt_g": 1.345,
    "sat_fat_g": 3.95,
    "sodium_mg": 538.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707073",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
