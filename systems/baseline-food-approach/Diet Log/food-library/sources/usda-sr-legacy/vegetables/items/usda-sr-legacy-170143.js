/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "piece-whole",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "piece-whole",
      "kind": "unit",
      "label": "piece whole"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup diced"
    }
  ],
  "name": "Mushrooms, portabella, exposed to ultraviolet light, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 3.87,
    "energy_kcal": 22.0,
    "fat_g": 0.35,
    "fibre_g": 1.3,
    "folate_ug": 28.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 364.0,
    "protein_g": 2.11,
    "salt_g": 0.0225,
    "sat_fat_g": 0.06,
    "sodium_mg": 9.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170143",
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
