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
  "id": "usda-fndds-2709032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, cooked with coconut milk",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 26.6,
    "energy_kcal": 267.0,
    "fat_g": 17.2,
    "fibre_g": 1.9,
    "folate_ug": 72.0,
    "iron_mg": 2.34,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 219.0,
    "protein_g": 3.57,
    "salt_g": 0.455,
    "sat_fat_g": 15.2,
    "sodium_mg": 182.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709032",
  "state": "Cooked",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "cooked",
    "milk-dairy-and-eggs",
    "rice-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
