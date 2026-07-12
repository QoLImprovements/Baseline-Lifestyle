/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-5-3-oz-container",
  "description": "Yogurt, Greek",
  "id": "usda-fndds-2705421",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-5-3-oz-container",
      "kind": "unit",
      "label": "1 5.3 oz container"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-6-oz-container",
      "kind": "unit",
      "label": "1 6 oz container"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-container-nfs",
      "kind": "unit",
      "label": "1 container, NFS"
    }
  ],
  "name": "Yogurt, Greek, NS as to type of milk, plain",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 3.6,
    "energy_kcal": 67.0,
    "fat_g": 1.36,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.07,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 140.0,
    "protein_g": 10.2,
    "salt_g": 0.09,
    "sat_fat_g": 0.726,
    "sodium_mg": 36.0,
    "sugar_g": 3.24,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705421",
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
