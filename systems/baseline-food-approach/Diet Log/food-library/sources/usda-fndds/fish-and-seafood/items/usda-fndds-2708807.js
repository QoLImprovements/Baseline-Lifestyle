/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pad Thai with seafood",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 15.0,
    "energy_kcal": 147.0,
    "fat_g": 6.82,
    "fibre_g": 1.2,
    "folate_ug": 26.0,
    "iron_mg": 0.61,
    "magnesium_mg": 27.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 95.0,
    "potassium_mg": 130.0,
    "protein_g": 6.84,
    "salt_g": 0.8725,
    "sat_fat_g": 1.13,
    "sodium_mg": 349.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 20.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708807",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fish-and-seafood",
    "fried-rice-and-lo-chow-mein",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
