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
  "id": "usda-fndds-2706934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-hamburger",
      "kind": "unit",
      "label": "1 hamburger"
    }
  ],
  "name": "Hamburger, on white bun, 1 large patty",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 17.1,
    "energy_kcal": 289.0,
    "fat_g": 15.6,
    "fibre_g": 0.6,
    "folate_ug": 46.0,
    "iron_mg": 2.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 148.0,
    "potassium_mg": 241.0,
    "protein_g": 18.4,
    "salt_g": 0.8775,
    "sat_fat_g": 6.05,
    "sodium_mg": 351.0,
    "sugar_g": 2.49,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706934",
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
