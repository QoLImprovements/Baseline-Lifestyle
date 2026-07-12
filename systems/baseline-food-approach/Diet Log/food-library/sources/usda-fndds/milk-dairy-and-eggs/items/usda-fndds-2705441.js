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
  "id": "usda-fndds-2705441",
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
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-5-3-oz-container",
      "kind": "unit",
      "label": "1 5.3 oz container"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Yogurt, Greek, with oats",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 20.0,
    "energy_kcal": 149.0,
    "fat_g": 3.67,
    "fibre_g": 1.5,
    "folate_ug": 10.0,
    "iron_mg": 0.66,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 161.0,
    "protein_g": 9.22,
    "salt_g": 0.145,
    "sat_fat_g": 0.838,
    "sodium_mg": 58.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705441",
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
