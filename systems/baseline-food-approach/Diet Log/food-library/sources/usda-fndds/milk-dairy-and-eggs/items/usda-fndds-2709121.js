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
  "id": "usda-fndds-2709121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 293.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with vegetables, cheese and/or cream based sauce, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 18.2,
    "energy_kcal": 140.0,
    "fat_g": 5.47,
    "fibre_g": 1.7,
    "folate_ug": 11.0,
    "iron_mg": 0.55,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 113.0,
    "protein_g": 4.51,
    "salt_g": 0.595,
    "sat_fat_g": 2.24,
    "sodium_mg": 238.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709121",
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
