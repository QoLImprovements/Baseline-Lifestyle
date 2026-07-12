/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece-1-6-of-8-square-approx-2-1-2-x-4",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "1-piece-1-8-of-7-x-12-approx-3-1-2-x-3",
      "kind": "unit",
      "label": "1 piece (1/8 of 7\" x 12\", approx 3-1/2\" x 3\")"
    },
    {
      "gramsPerUnit": 20.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Lasagna with meat, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 197.0,
    "carbs_g": 11.4,
    "energy_kcal": 185.0,
    "fat_g": 10.7,
    "fibre_g": 1.5,
    "folate_ug": 26.0,
    "iron_mg": 0.79,
    "magnesium_mg": 22.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 178.0,
    "potassium_mg": 255.0,
    "protein_g": 10.8,
    "salt_g": 1.165,
    "sat_fat_g": 4.94,
    "sodium_mg": 466.0,
    "sugar_g": 3.15,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708752",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
