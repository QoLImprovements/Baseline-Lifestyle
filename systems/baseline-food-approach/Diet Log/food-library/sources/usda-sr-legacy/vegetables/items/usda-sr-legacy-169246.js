/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "leek",
      "kind": "unit",
      "label": "leek"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Leeks, (bulb and lower leaf-portion), raw",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 14.2,
    "energy_kcal": 255.0,
    "fat_g": 0.3,
    "fibre_g": 1.8,
    "folate_ug": 64.0,
    "iron_mg": 2.1,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 180.0,
    "protein_g": 1.5,
    "salt_g": 0.05,
    "sat_fat_g": 0.04,
    "sodium_mg": 20.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 47.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169246",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
