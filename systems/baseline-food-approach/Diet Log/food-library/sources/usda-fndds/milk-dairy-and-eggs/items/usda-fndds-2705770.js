/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-handi-snack-cheese-container",
  "description": "Cheese",
  "id": "usda-fndds-2705770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-handi-snack-cheese-container",
      "kind": "unit",
      "label": "1 Handi-Snack cheese container"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Cheese, processed cheese food",
  "nutritionPerBasis": {
    "calcium_mg": 1380.0,
    "carbs_g": 8.85,
    "energy_kcal": 307.0,
    "fat_g": 23.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.95,
    "magnesium_mg": 34.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 768.0,
    "potassium_mg": 295.0,
    "protein_g": 16.1,
    "salt_g": 3.2,
    "sat_fat_g": 12.9,
    "sodium_mg": 1280.0,
    "sugar_g": 6.24,
    "vitamin_a_ug": 270.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705770",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
