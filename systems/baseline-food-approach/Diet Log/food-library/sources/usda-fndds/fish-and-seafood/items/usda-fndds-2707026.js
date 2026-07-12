/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Fish sandwich, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 22.8,
    "energy_kcal": 252.0,
    "fat_g": 11.0,
    "fibre_g": 0.8,
    "folate_ug": 50.0,
    "iron_mg": 1.69,
    "magnesium_mg": 25.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 239.0,
    "potassium_mg": 218.0,
    "protein_g": 15.3,
    "salt_g": 1.3425,
    "sat_fat_g": 4.34,
    "sodium_mg": 537.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707026",
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
