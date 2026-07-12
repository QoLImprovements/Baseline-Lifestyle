/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Yogurt, Greek",
  "id": "usda-fndds-2705431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-container-nfs",
      "kind": "unit",
      "label": "1 container, NFS"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-6-oz-container",
      "kind": "unit",
      "label": "1 6 oz container"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-5-3-oz-container",
      "kind": "unit",
      "label": "1 5.3 oz container"
    }
  ],
  "name": "Yogurt, Greek, low fat milk, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 10.8,
    "energy_kcal": 91.0,
    "fat_g": 1.33,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.12,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 133.0,
    "protein_g": 9.11,
    "salt_g": 0.0875,
    "sat_fat_g": 0.715,
    "sodium_mg": 35.0,
    "sugar_g": 8.21,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705431",
  "state": "Unspecified",
  "subcategory": "Yogurt, Greek",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "yogurt-greek"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
