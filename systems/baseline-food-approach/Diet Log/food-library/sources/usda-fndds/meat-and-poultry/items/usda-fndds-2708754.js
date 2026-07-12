/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-surface-inch",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "1-piece-1-6-of-8-square-approx-2-1-2-x-4",
      "kind": "unit",
      "label": "1 piece (1/6 of 8\" square, approx 2-1/2\" x 4\")"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "1-piece-1-8-of-7-x-12-approx-3-1-2-x-3",
      "kind": "unit",
      "label": "1 piece (1/8 of 7\" x 12\", approx 3-1/2\" x 3\")"
    }
  ],
  "name": "Lasagna with meat, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 14.4,
    "energy_kcal": 124.0,
    "fat_g": 4.42,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.65,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 102.0,
    "potassium_mg": 184.0,
    "protein_g": 6.63,
    "salt_g": 0.8675,
    "sat_fat_g": 2.07,
    "sodium_mg": 347.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708754",
  "state": "Frozen",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
