/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-6-oz-container",
  "description": "Plant-based yogurt",
  "id": "usda-fndds-2707569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-6-oz-container",
      "kind": "unit",
      "label": "1 6 oz container"
    },
    {
      "gramsPerUnit": 226.0,
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
  "name": "Yogurt, coconut milk",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 12.9,
    "energy_kcal": 108.0,
    "fat_g": 5.61,
    "fibre_g": 1.2,
    "folate_ug": 8.0,
    "iron_mg": 0.86,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 68.0,
    "protein_g": 2.37,
    "salt_g": 0.1025,
    "sat_fat_g": 5.09,
    "sodium_mg": 41.0,
    "sugar_g": 8.88,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707569",
  "state": "Unspecified",
  "subcategory": "Plant-based yogurt",
  "tags": [
    "milk-dairy-and-eggs",
    "plant-based-yogurt",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
