/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-surface-inch",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.8,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-piece-1-8-of-7-x-12-approx-3-1-2-x-3",
      "kind": "unit",
      "label": "1 piece (1/8 of 7\" x 12\", approx 3-1/2\" x 3\")"
    },
    {
      "gramsPerUnit": 2048.0,
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
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "1-piece-1-6-of-8-square-approx-2-1-2-x-4",
      "kind": "unit",
      "label": "1 piece (1/6 of 8\" square, approx 2-1/2\" x 4\")"
    },
    {
      "gramsPerUnit": 1360.0,
      "key": "1-lasagna-8-square",
      "kind": "unit",
      "label": "1 lasagna (8\" square)"
    }
  ],
  "name": "Lasagna, meatless, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 268.0,
    "carbs_g": 14.5,
    "energy_kcal": 188.0,
    "fat_g": 9.38,
    "fibre_g": 1.2,
    "folate_ug": 30.0,
    "iron_mg": 0.76,
    "magnesium_mg": 26.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 227.0,
    "potassium_mg": 206.0,
    "protein_g": 11.2,
    "salt_g": 0.96,
    "sat_fat_g": 4.93,
    "sodium_mg": 384.0,
    "sugar_g": 2.43,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 20.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708759",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
