/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-double-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-double-cheeseburger",
      "kind": "unit",
      "label": "1 double cheeseburger"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Double cheeseburger, on wheat bun, 2 small patties",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 12.1,
    "energy_kcal": 292.0,
    "fat_g": 17.9,
    "fibre_g": 1.4,
    "folate_ug": 33.0,
    "iron_mg": 2.4,
    "magnesium_mg": 30.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 213.0,
    "potassium_mg": 258.0,
    "protein_g": 19.7,
    "salt_g": 0.9975,
    "sat_fat_g": 7.49,
    "sodium_mg": 399.0,
    "sugar_g": 1.62,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706906",
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
