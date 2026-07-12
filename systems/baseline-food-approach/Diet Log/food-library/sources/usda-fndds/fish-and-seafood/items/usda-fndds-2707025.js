/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish sandwich, from school cafeteria",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 27.4,
    "energy_kcal": 209.0,
    "fat_g": 4.34,
    "fibre_g": 3.5,
    "folate_ug": 36.0,
    "iron_mg": 1.76,
    "magnesium_mg": 54.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 230.0,
    "potassium_mg": 280.0,
    "protein_g": 15.0,
    "salt_g": 0.9675,
    "sat_fat_g": 1.01,
    "sodium_mg": 387.0,
    "sugar_g": 2.51,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707025",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
