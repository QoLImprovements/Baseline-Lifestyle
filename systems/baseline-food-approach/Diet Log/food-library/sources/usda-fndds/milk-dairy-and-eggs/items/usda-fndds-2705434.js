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
  "id": "usda-fndds-2705434",
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
  "name": "Yogurt, whole milk, flavors other than fruit",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 11.8,
    "energy_kcal": 95.0,
    "fat_g": 3.88,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 141.0,
    "protein_g": 3.28,
    "salt_g": 0.09,
    "sat_fat_g": 2.0,
    "sodium_mg": 36.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705434",
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
