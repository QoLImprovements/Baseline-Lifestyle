/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spanish rice, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 31.2,
    "energy_kcal": 185.0,
    "fat_g": 5.29,
    "fibre_g": 1.2,
    "folate_ug": 50.0,
    "iron_mg": 1.15,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 116.0,
    "protein_g": 3.28,
    "salt_g": 1.32,
    "sat_fat_g": 1.0,
    "sodium_mg": 528.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709084",
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
