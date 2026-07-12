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
  "id": "usda-fndds-2707038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna salad sandwich wrap",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 17.0,
    "energy_kcal": 244.0,
    "fat_g": 14.8,
    "fibre_g": 1.3,
    "folate_ug": 36.0,
    "iron_mg": 1.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 170.0,
    "potassium_mg": 146.0,
    "protein_g": 10.6,
    "salt_g": 1.41,
    "sat_fat_g": 4.08,
    "sodium_mg": 564.0,
    "sugar_g": 2.64,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 29.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707038",
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
