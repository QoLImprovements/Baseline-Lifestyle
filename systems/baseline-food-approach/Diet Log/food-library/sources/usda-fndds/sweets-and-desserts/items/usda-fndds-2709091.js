/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice dessert or salad with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 20.8,
    "energy_kcal": 154.0,
    "fat_g": 7.29,
    "fibre_g": 0.6,
    "folate_ug": 24.0,
    "iron_mg": 0.36,
    "magnesium_mg": 10.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 25.0,
    "potassium_mg": 92.0,
    "protein_g": 1.39,
    "salt_g": 0.0175,
    "sat_fat_g": 4.11,
    "sodium_mg": 7.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 26.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709091",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "rice-mixed-dishes",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
