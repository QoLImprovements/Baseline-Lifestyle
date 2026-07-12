/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yogurt, regular",
  "id": "usda-fndds-2705435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
      "gramsPerUnit": 113.0,
      "key": "1-4-oz-container",
      "kind": "unit",
      "label": "1 4 oz container"
    }
  ],
  "name": "Yogurt, low fat milk, flavors other than fruit",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 13.0,
    "energy_kcal": 82.0,
    "fat_g": 1.36,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.07,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 201.0,
    "protein_g": 4.51,
    "salt_g": 0.1525,
    "sat_fat_g": 0.86,
    "sodium_mg": 61.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705435",
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
