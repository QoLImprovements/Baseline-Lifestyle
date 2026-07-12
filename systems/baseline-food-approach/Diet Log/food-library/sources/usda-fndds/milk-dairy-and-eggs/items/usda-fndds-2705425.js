/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-4-oz-container",
  "description": "Yogurt, regular",
  "id": "usda-fndds-2705425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-4-oz-container",
      "kind": "unit",
      "label": "1 4 oz container"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-6-oz-container",
      "kind": "unit",
      "label": "1 6 oz container"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-container-nfs",
      "kind": "unit",
      "label": "1 container, NFS"
    }
  ],
  "name": "Yogurt, NS as to type of milk, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 15.7,
    "energy_kcal": 93.0,
    "fat_g": 1.34,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 0.14,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 212.0,
    "protein_g": 4.57,
    "salt_g": 0.1625,
    "sat_fat_g": 0.861,
    "sodium_mg": 65.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705425",
  "state": "Unspecified",
  "subcategory": "Yogurt, regular",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "yogurt-regular"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
