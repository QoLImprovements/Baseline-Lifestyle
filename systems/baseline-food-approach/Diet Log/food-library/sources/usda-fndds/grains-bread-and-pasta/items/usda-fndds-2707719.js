/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, sprouted wheat, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 37.2,
    "energy_kcal": 207.0,
    "fat_g": 0.0,
    "fibre_g": 5.8,
    "folate_ug": 0.0,
    "iron_mg": 2.08,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 218.0,
    "protein_g": 14.5,
    "salt_g": 1.3025,
    "sat_fat_g": 0.0,
    "sodium_mg": 521.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707719",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
