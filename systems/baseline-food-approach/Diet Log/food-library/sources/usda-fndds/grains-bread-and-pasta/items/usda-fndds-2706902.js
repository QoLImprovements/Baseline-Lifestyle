/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cheeseburger",
  "description": "Burgers",
  "id": "usda-fndds-2706902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheeseburger, on wheat bun, 1 medium patty",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 17.0,
    "energy_kcal": 291.0,
    "fat_g": 16.2,
    "fibre_g": 1.9,
    "folate_ug": 39.0,
    "iron_mg": 2.43,
    "magnesium_mg": 34.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 222.0,
    "potassium_mg": 243.0,
    "protein_g": 18.5,
    "salt_g": 1.045,
    "sat_fat_g": 6.82,
    "sodium_mg": 418.0,
    "sugar_g": 2.23,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706902",
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
