/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice",
  "id": "usda-fndds-2708405",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Rice, white, cooked, made with butter",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 27.2,
    "energy_kcal": 147.0,
    "fat_g": 2.61,
    "fibre_g": 0.4,
    "folate_ug": 56.0,
    "iron_mg": 1.16,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 42.0,
    "potassium_mg": 34.0,
    "protein_g": 2.62,
    "salt_g": 0.6325,
    "sat_fat_g": 1.38,
    "sodium_mg": 253.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708405",
  "state": "Cooked",
  "subcategory": "Rice",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "rice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
