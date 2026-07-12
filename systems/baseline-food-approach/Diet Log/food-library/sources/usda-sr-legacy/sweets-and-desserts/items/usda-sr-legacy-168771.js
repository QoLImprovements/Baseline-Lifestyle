/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "10-chiclets",
  "description": "Sweets",
  "id": "usda-sr-legacy-168771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "10-chiclets",
      "kind": "unit",
      "label": "10 Chiclets"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "block",
      "kind": "unit",
      "label": "block"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    }
  ],
  "name": "Chewing gum",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 96.7,
    "energy_kcal": 360.0,
    "fat_g": 0.3,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 2.0,
    "protein_g": 0.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.042,
    "sodium_mg": 1.0,
    "sugar_g": 66.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168771",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
