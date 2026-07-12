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
  "id": "usda-fndds-2707651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 4.3,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, vegetable, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 52.7,
    "energy_kcal": 284.0,
    "fat_g": 3.58,
    "fibre_g": 2.0,
    "folate_ug": 72.0,
    "iron_mg": 3.82,
    "magnesium_mg": 30.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 113.0,
    "potassium_mg": 177.0,
    "protein_g": 10.6,
    "salt_g": 1.46,
    "sat_fat_g": 1.2,
    "sodium_mg": 584.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707651",
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
