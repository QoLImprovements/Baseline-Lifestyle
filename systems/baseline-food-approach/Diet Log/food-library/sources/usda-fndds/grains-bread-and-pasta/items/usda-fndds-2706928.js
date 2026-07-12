/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Hamburger, on wheat bun, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 20.1,
    "energy_kcal": 280.0,
    "fat_g": 13.9,
    "fibre_g": 2.4,
    "folate_ug": 44.0,
    "iron_mg": 2.74,
    "magnesium_mg": 36.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 170.0,
    "potassium_mg": 253.0,
    "protein_g": 17.8,
    "salt_g": 0.8425,
    "sat_fat_g": 5.2,
    "sodium_mg": 337.0,
    "sugar_g": 2.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706928",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
