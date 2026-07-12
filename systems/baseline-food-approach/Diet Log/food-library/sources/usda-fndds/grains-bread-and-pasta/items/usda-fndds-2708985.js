/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2708985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Biryani with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 17.9,
    "energy_kcal": 109.0,
    "fat_g": 3.2,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 1.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 35.0,
    "potassium_mg": 102.0,
    "protein_g": 1.93,
    "salt_g": 0.4425,
    "sat_fat_g": 1.7,
    "sodium_mg": 177.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708985",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
