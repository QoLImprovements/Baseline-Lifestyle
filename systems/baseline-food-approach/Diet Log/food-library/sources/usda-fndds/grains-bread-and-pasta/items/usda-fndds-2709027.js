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
  "id": "usda-fndds-2709027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
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
  "name": "Rice, white, with other vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 23.2,
    "energy_kcal": 107.0,
    "fat_g": 0.26,
    "fibre_g": 0.7,
    "folate_ug": 48.0,
    "iron_mg": 1.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 76.0,
    "protein_g": 2.36,
    "salt_g": 0.4625,
    "sat_fat_g": 0.066,
    "sodium_mg": 185.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709027",
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
