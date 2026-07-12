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
  "id": "usda-fndds-2708421",
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
  "name": "Yellow rice, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 18.7,
    "energy_kcal": 103.0,
    "fat_g": 2.43,
    "fibre_g": 0.4,
    "folate_ug": 25.0,
    "iron_mg": 0.6,
    "magnesium_mg": 29.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 41.0,
    "potassium_mg": 191.0,
    "protein_g": 1.76,
    "salt_g": 0.8775,
    "sat_fat_g": 0.375,
    "sodium_mg": 351.0,
    "sugar_g": 0.44,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708421",
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
