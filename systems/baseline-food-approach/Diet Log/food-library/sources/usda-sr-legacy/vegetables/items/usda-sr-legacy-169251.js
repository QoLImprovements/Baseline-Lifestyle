/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "small",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-pieces-or-slices",
      "kind": "unit",
      "label": "cup, pieces or slices"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "0-5-cup-pieces",
      "kind": "unit",
      "label": "0.5 cup pieces"
    }
  ],
  "name": "Mushrooms, white, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 3.26,
    "energy_kcal": 93.0,
    "fat_g": 0.34,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 0.5,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 318.0,
    "protein_g": 3.09,
    "salt_g": 0.0125,
    "sat_fat_g": 0.05,
    "sodium_mg": 5.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169251",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
