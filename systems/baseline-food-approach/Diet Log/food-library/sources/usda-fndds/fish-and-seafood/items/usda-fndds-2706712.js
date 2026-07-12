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
  "id": "usda-fndds-2706712",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shrimp chow mein or chop suey with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 11.4,
    "energy_kcal": 117.0,
    "fat_g": 4.03,
    "fibre_g": 1.5,
    "folate_ug": 45.0,
    "iron_mg": 1.11,
    "magnesium_mg": 19.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 123.0,
    "potassium_mg": 142.0,
    "protein_g": 9.05,
    "salt_g": 0.8375,
    "sat_fat_g": 1.13,
    "sodium_mg": 335.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706712",
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
