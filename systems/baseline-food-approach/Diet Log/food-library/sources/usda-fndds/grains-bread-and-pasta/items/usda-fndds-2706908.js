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
  "id": "usda-fndds-2706908",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    }
  ],
  "name": "Double cheeseburger, on wheat bun, 2 medium patties",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 10.8,
    "energy_kcal": 297.0,
    "fat_g": 18.8,
    "fibre_g": 1.2,
    "folate_ug": 31.0,
    "iron_mg": 2.27,
    "magnesium_mg": 29.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 234.0,
    "potassium_mg": 255.0,
    "protein_g": 20.0,
    "salt_g": 1.07,
    "sat_fat_g": 8.16,
    "sodium_mg": 428.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706908",
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
