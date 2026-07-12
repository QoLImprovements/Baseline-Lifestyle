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
  "id": "usda-fndds-2709120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 289.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with vegetables, cheese and/or cream based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 18.4,
    "energy_kcal": 130.0,
    "fat_g": 4.17,
    "fibre_g": 1.7,
    "folate_ug": 11.0,
    "iron_mg": 0.56,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 114.0,
    "protein_g": 4.57,
    "salt_g": 0.6025,
    "sat_fat_g": 2.08,
    "sodium_mg": 241.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709120",
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
