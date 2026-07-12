/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-croquette-1-1-2-dia-2-high",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-croquette-1-1-2-dia-2-high",
      "kind": "unit",
      "label": "1 croquette (1-1/2\" dia, 2\" high)"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice croquette",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 20.1,
    "energy_kcal": 154.0,
    "fat_g": 6.58,
    "fibre_g": 0.9,
    "folate_ug": 54.0,
    "iron_mg": 1.11,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 130.0,
    "protein_g": 3.35,
    "salt_g": 1.04,
    "sat_fat_g": 1.72,
    "sodium_mg": 416.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 30.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709071",
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
