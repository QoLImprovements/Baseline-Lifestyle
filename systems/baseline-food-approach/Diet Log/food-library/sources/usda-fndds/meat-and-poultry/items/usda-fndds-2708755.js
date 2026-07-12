/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1235.0,
      "key": "1-lasagna-8-square",
      "kind": "unit",
      "label": "1 lasagna (8\" square)"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "1-piece-1-6-of-8-square-approx-2-1-2-x-4",
      "kind": "unit",
      "label": "1 piece (1/6 of 8\" square, approx 2-1/2\" x 4\")"
    },
    {
      "gramsPerUnit": 1860.0,
      "key": "1-lasagna-7-x-12",
      "kind": "unit",
      "label": "1 lasagna (7\" x 12\")"
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
    },
    {
      "gramsPerUnit": 20.7,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Lasagna with meat and spinach",
  "nutritionPerBasis": {
    "calcium_mg": 262.0,
    "carbs_g": 13.8,
    "energy_kcal": 207.0,
    "fat_g": 10.8,
    "fibre_g": 1.1,
    "folate_ug": 29.0,
    "iron_mg": 0.96,
    "magnesium_mg": 26.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 236.0,
    "potassium_mg": 209.0,
    "protein_g": 13.3,
    "salt_g": 1.03,
    "sat_fat_g": 5.44,
    "sodium_mg": 412.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 19.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708755",
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
