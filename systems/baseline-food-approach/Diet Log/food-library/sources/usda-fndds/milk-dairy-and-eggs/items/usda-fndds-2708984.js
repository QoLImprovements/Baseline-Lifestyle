/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708984",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Congee, with egg",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.91,
    "energy_kcal": 60.0,
    "fat_g": 2.06,
    "fibre_g": 0.1,
    "folate_ug": 28.0,
    "iron_mg": 0.62,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 35.0,
    "protein_g": 3.12,
    "salt_g": 0.5325,
    "sat_fat_g": 0.658,
    "sodium_mg": 213.0,
    "sugar_g": 0.05,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708984",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
