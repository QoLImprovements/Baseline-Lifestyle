/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706927",
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
  "name": "Hamburger, on white bun, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 22.2,
    "energy_kcal": 287.0,
    "fat_g": 13.8,
    "fibre_g": 0.8,
    "folate_ug": 53.0,
    "iron_mg": 2.86,
    "magnesium_mg": 21.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 141.0,
    "potassium_mg": 223.0,
    "protein_g": 17.1,
    "salt_g": 0.9025,
    "sat_fat_g": 5.25,
    "sodium_mg": 361.0,
    "sugar_g": 3.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706927",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
