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
  "id": "usda-fndds-2709064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
    }
  ],
  "name": "Grape leaves stuffed with rice",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 13.9,
    "energy_kcal": 168.0,
    "fat_g": 12.0,
    "fibre_g": 3.1,
    "folate_ug": 38.0,
    "iron_mg": 1.25,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 152.0,
    "protein_g": 2.28,
    "salt_g": 0.415,
    "sat_fat_g": 1.87,
    "sodium_mg": 166.0,
    "sugar_g": 2.78,
    "vitamin_a_ug": 241.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 2.87,
    "vitamin_k_ug": 58.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709064",
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
