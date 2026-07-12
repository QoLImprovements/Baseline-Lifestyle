/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-hamburger",
  "description": "Burgers",
  "id": "usda-fndds-2706935",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hamburger, on wheat bun, 1 large patty",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 15.5,
    "energy_kcal": 283.0,
    "fat_g": 15.7,
    "fibre_g": 1.8,
    "folate_ug": 38.0,
    "iron_mg": 2.66,
    "magnesium_mg": 32.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 171.0,
    "potassium_mg": 264.0,
    "protein_g": 19.0,
    "salt_g": 0.8325,
    "sat_fat_g": 6.01,
    "sodium_mg": 333.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706935",
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
