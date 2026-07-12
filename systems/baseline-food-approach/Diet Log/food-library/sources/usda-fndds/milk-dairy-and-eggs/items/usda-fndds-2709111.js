/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with vegetables, cheese and/or cream based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 18.9,
    "energy_kcal": 134.0,
    "fat_g": 4.2,
    "fibre_g": 1.1,
    "folate_ug": 37.0,
    "iron_mg": 0.89,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 91.0,
    "protein_g": 4.77,
    "salt_g": 0.6725,
    "sat_fat_g": 2.21,
    "sodium_mg": 269.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709111",
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
