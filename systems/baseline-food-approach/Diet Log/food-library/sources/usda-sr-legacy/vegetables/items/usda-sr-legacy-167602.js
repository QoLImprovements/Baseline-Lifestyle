/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-25-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-167602",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Seaweed, Canadian Cultivated EMI-TSUNOMATA, dry",
  "nutritionPerBasis": {
    "calcium_mg": 299.0,
    "carbs_g": 46.2,
    "energy_kcal": 259.0,
    "fat_g": 1.39,
    "fibre_g": 36.7,
    "folate_ug": 188.0,
    "iron_mg": 66.4,
    "magnesium_mg": 692.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 2940.0,
    "protein_g": 15.3,
    "salt_g": 10.825,
    "sat_fat_g": 0.45,
    "sodium_mg": 4330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 406.0,
    "vitamin_c_mg": 29.0,
    "vitamin_e_mg": 5.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167602",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
