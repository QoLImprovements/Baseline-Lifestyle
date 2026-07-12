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
  "id": "usda-fndds-2707444",
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
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-container-nfs",
      "kind": "unit",
      "label": "1 container, NFS"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-5-3-oz-container",
      "kind": "unit",
      "label": "1 5.3 oz container"
    }
  ],
  "name": "Yogurt, soy",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 12.3,
    "energy_kcal": 90.0,
    "fat_g": 2.63,
    "fibre_g": 0.9,
    "folate_ug": 23.0,
    "iron_mg": 1.08,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 189.0,
    "protein_g": 4.83,
    "salt_g": 0.075,
    "sat_fat_g": 0.386,
    "sodium_mg": 30.0,
    "sugar_g": 8.04,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707444",
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
