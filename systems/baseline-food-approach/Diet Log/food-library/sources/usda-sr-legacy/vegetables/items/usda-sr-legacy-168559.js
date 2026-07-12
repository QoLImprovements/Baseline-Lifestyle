/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "pimiento-whole",
      "kind": "unit",
      "label": "pimiento, whole"
    }
  ],
  "name": "Pimento, canned",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.1,
    "energy_kcal": 23.0,
    "fat_g": 0.3,
    "fibre_g": 1.9,
    "folate_ug": 6.0,
    "iron_mg": 1.68,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 158.0,
    "protein_g": 1.1,
    "salt_g": 0.035,
    "sat_fat_g": 0.045,
    "sodium_mg": 14.0,
    "sugar_g": 2.71,
    "vitamin_a_ug": 133.0,
    "vitamin_c_mg": 84.9,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168559",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
