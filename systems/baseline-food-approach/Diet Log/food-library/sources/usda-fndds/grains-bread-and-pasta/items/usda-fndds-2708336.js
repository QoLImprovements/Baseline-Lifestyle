/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-slice-any-size",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "French toast, whole grain",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 30.4,
    "energy_kcal": 271.0,
    "fat_g": 11.6,
    "fibre_g": 2.7,
    "folate_ug": 53.0,
    "iron_mg": 2.28,
    "magnesium_mg": 35.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 174.0,
    "potassium_mg": 171.0,
    "protein_g": 11.3,
    "salt_g": 0.7425,
    "sat_fat_g": 3.2,
    "sodium_mg": 297.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708336",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "grains-bread-and-pasta",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
