/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece-1-8-of-7-x-12-approx-3-1-2-x-3",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-piece-1-8-of-7-x-12-approx-3-1-2-x-3",
      "kind": "unit",
      "label": "1 piece (1/8 of 7\" x 12\", approx 3-1/2\" x 3\")"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "1-piece-1-6-of-8-square-approx-2-1-2-x-4",
      "kind": "unit",
      "label": "1 piece (1/6 of 8\" square, approx 2-1/2\" x 4\")"
    },
    {
      "gramsPerUnit": 2048.0,
      "key": "1-lasagna-7-x-12",
      "kind": "unit",
      "label": "1 lasagna (7\" x 12\")"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 22.8,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1360.0,
      "key": "1-lasagna-8-square",
      "kind": "unit",
      "label": "1 lasagna (8\" square)"
    }
  ],
  "name": "Lasagna, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 13.8,
    "energy_kcal": 130.0,
    "fat_g": 5.33,
    "fibre_g": 1.7,
    "folate_ug": 22.0,
    "iron_mg": 1.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 182.0,
    "protein_g": 6.54,
    "salt_g": 0.71,
    "sat_fat_g": 2.11,
    "sodium_mg": 284.0,
    "sugar_g": 4.23,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708758",
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
