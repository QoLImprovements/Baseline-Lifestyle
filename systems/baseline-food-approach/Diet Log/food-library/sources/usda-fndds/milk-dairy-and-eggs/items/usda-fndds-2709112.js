/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, white, with vegetables, cheese and/or cream based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 18.6,
    "energy_kcal": 146.0,
    "fat_g": 5.66,
    "fibre_g": 1.1,
    "folate_ug": 36.0,
    "iron_mg": 0.88,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 89.0,
    "protein_g": 4.7,
    "salt_g": 0.6625,
    "sat_fat_g": 2.38,
    "sodium_mg": 265.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709112",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
