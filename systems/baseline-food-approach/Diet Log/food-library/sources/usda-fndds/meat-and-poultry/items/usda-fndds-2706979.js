/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Bacon, lettuce, tomato sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 29.7,
    "energy_kcal": 231.0,
    "fat_g": 7.54,
    "fibre_g": 1.7,
    "folate_ug": 69.0,
    "iron_mg": 2.15,
    "magnesium_mg": 23.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 131.0,
    "potassium_mg": 207.0,
    "protein_g": 10.9,
    "salt_g": 1.3025,
    "sat_fat_g": 2.32,
    "sodium_mg": 521.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706979",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
