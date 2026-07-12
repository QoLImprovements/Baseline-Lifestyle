/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cubic-inch",
  "description": "Yeast breads",
  "id": "usda-fndds-2707624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.7,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-slice-crust-not-eaten",
      "kind": "unit",
      "label": "1 slice, crust not eaten"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    }
  ],
  "name": "Bread, egg, Challah",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 47.8,
    "energy_kcal": 287.0,
    "fat_g": 6.0,
    "fibre_g": 2.3,
    "folate_ug": 105.0,
    "iron_mg": 3.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 106.0,
    "potassium_mg": 115.0,
    "protein_g": 9.5,
    "salt_g": 0.95,
    "sat_fat_g": 1.59,
    "sodium_mg": 380.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707624",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
