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
  "id": "usda-fndds-2709021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with carrots and dark green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 23.0,
    "energy_kcal": 107.0,
    "fat_g": 0.28,
    "fibre_g": 1.0,
    "folate_ug": 52.0,
    "iron_mg": 1.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 93.0,
    "protein_g": 2.44,
    "salt_g": 0.4925,
    "sat_fat_g": 0.067,
    "sodium_mg": 197.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709021",
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
