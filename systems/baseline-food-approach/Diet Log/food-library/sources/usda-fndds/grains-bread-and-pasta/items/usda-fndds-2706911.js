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
  "id": "usda-fndds-2706911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    }
  ],
  "name": "Double cheeseburger, on wheat bun, 2 large patties",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 8.81,
    "energy_kcal": 296.0,
    "fat_g": 19.4,
    "fibre_g": 1.0,
    "folate_ug": 29.0,
    "iron_mg": 2.29,
    "magnesium_mg": 27.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 223.0,
    "potassium_mg": 264.0,
    "protein_g": 20.5,
    "salt_g": 0.9975,
    "sat_fat_g": 8.27,
    "sodium_mg": 399.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706911",
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
