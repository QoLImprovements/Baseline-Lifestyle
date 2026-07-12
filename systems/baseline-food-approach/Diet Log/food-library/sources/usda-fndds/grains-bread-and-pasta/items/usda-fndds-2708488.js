/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2708488",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Wheat bran",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 64.5,
    "energy_kcal": 216.0,
    "fat_g": 4.25,
    "fibre_g": 42.8,
    "folate_ug": 79.0,
    "iron_mg": 10.6,
    "magnesium_mg": 611.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1010.0,
    "potassium_mg": 1180.0,
    "protein_g": 15.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.63,
    "sodium_mg": 2.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708488",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "grains-bread-and-pasta",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
