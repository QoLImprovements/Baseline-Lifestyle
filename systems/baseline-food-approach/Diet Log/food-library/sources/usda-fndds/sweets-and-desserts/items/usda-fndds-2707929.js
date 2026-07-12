/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-individual-package-2-oz-package-containing-2-3-bars",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707929",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-individual-package-2-oz-package-containing-2-3-bars",
      "kind": "unit",
      "label": "1 individual package (2 oz package containing 2 3\" bars)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-fig-bar-2-square-halves",
      "kind": "unit",
      "label": "1 Fig bar (2 square halves)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-newton-bar",
      "kind": "unit",
      "label": "1 Newton bar"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "1-mini-fig-newton",
      "kind": "unit",
      "label": "1 mini fig newton"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, fig bar",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 70.9,
    "energy_kcal": 348.0,
    "fat_g": 7.3,
    "fibre_g": 4.6,
    "folate_ug": 35.0,
    "iron_mg": 2.9,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 207.0,
    "protein_g": 3.7,
    "salt_g": 0.875,
    "sat_fat_g": 1.12,
    "sodium_mg": 350.0,
    "sugar_g": 46.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707929",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
