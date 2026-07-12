/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Plant-based yogurt",
  "id": "usda-fndds-2707570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
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
      "key": "1-5-3-oz-container",
      "kind": "unit",
      "label": "1 5.3 oz container"
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
    }
  ],
  "name": "Yogurt, almond milk",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 13.0,
    "energy_kcal": 128.0,
    "fat_g": 7.03,
    "fibre_g": 1.5,
    "folate_ug": 7.0,
    "iron_mg": 0.73,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 122.0,
    "protein_g": 3.03,
    "salt_g": 0.1225,
    "sat_fat_g": 0.531,
    "sodium_mg": 49.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 5.52,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707570",
  "state": "Unspecified",
  "subcategory": "Plant-based yogurt",
  "tags": [
    "beverages",
    "plant-based-yogurt",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
