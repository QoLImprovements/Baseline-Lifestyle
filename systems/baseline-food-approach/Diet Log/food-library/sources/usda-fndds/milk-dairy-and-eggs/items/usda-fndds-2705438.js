/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-container-nfs",
  "description": "Yogurt, Greek",
  "id": "usda-fndds-2705438",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-container-nfs",
      "kind": "unit",
      "label": "1 container, NFS"
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
    }
  ],
  "name": "Yogurt, Greek, whole milk, flavors other than fruit",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 9.21,
    "energy_kcal": 104.0,
    "fat_g": 3.92,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 112.0,
    "potassium_mg": 131.0,
    "protein_g": 7.81,
    "salt_g": 0.0775,
    "sat_fat_g": 2.13,
    "sodium_mg": 31.0,
    "sugar_g": 7.88,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705438",
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
